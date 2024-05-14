import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RecipeServiceClient as _RecipePackage_RecipeServiceClient, RecipeServiceDefinition as _RecipePackage_RecipeServiceDefinition } from './RecipePackage/RecipeService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  RecipePackage: {
    AddRecipeRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    Recipe: MessageTypeDefinition
    RecipeID: MessageTypeDefinition
    RecipeService: SubtypeConstructor<typeof grpc.Client, _RecipePackage_RecipeServiceClient> & { service: _RecipePackage_RecipeServiceDefinition }
    RecipeWithID: MessageTypeDefinition
    Recipes: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

