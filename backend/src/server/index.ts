import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { ProtoGrpcType } from '../proto/recipe';
import { RecipeServiceHandlers } from '../proto/RecipePackage/RecipeService';
import { Empty } from '../proto/RecipePackage/Empty';
import { Recipes } from '../proto/RecipePackage/Recipes';
import { Recipe } from '../proto/RecipePackage/Recipe';
import { databaseConnection } from './controller/db.controller';
import { RecipeServerController } from './controller/recipe.controller';
import { Response } from '../proto/RecipePackage/Response';
import { RecipeWithID } from '../proto/RecipePackage/RecipeWithID';
import { RecipeID } from '../proto/RecipePackage/RecipeID';


const PROTO_PATH: string = "../../../proto/recipe.proto";
const PORT: number = 8000;

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoBuf: protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options)
const grpcObj: ProtoGrpcType = (grpc.loadPackageDefinition(protoBuf) as unknown) as ProtoGrpcType;
const recipeService = grpcObj.RecipePackage;

const main = () => {
    databaseConnection().then(() => {
        const server = getServer();
        server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
            if (err) {
                console.error(err.message);
                return;
            }
            console.log(`Server started on port ${port}`);
            server.start();
        });
    });
};

const getServer = () => {
    const server: grpc.Server = new grpc.Server();
    server.addService(recipeService.RecipeService.service, {
        'SearchRecipe': (call: grpc.ServerUnaryCall<Empty, Recipes>, callback: grpc.sendUnaryData<Recipes>) => {
            console.log('Server success get all recipes');
            RecipeServerController.getAll().then((recipes: Recipes | undefined) => {
                callback(null, recipes);
            });
        },
        'AddRecipe': (call: grpc.ServerUnaryCall<Recipe, Response>, callback: grpc.sendUnaryData<Response>) => {
            const recipe = call.request;
            console.log('Server success create recipe');
            RecipeServerController.createRecipe(recipe).then((res: Response | undefined) => {
                callback(null, res);
            });
        },
        'UpdateRecipe': (call: grpc.ServerUnaryCall<RecipeWithID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const recipeWithID = call.request;
            console.log('Server success update recipe');
            RecipeServerController.updateRecipe(recipeWithID).then((res: Response | undefined) => {
                callback(null, res);
            });
        },
        'DeleteRecipe': (call: grpc.ServerUnaryCall<RecipeID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const recipeID = call.request;
            RecipeServerController.deleteRecipe(recipeID).then((res: Response | undefined) => {
                callback(null, res);
            });
        }
    } as RecipeServiceHandlers);
    return server;
};

main();
