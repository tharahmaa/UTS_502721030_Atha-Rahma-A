// Original file: ../proto/recipe.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddRecipeRequest as _RecipePackage_AddRecipeRequest, AddRecipeRequest__Output as _RecipePackage_AddRecipeRequest__Output } from '../RecipePackage/AddRecipeRequest';
import type { Empty as _RecipePackage_Empty, Empty__Output as _RecipePackage_Empty__Output } from '../RecipePackage/Empty';
import type { RecipeID as _RecipePackage_RecipeID, RecipeID__Output as _RecipePackage_RecipeID__Output } from '../RecipePackage/RecipeID';
import type { RecipeWithID as _RecipePackage_RecipeWithID, RecipeWithID__Output as _RecipePackage_RecipeWithID__Output } from '../RecipePackage/RecipeWithID';
import type { Recipes as _RecipePackage_Recipes, Recipes__Output as _RecipePackage_Recipes__Output } from '../RecipePackage/Recipes';
import type { Response as _RecipePackage_Response, Response__Output as _RecipePackage_Response__Output } from '../RecipePackage/Response';

export interface RecipeServiceClient extends grpc.Client {
  AddRecipe(argument: _RecipePackage_AddRecipeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  AddRecipe(argument: _RecipePackage_AddRecipeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  AddRecipe(argument: _RecipePackage_AddRecipeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  AddRecipe(argument: _RecipePackage_AddRecipeRequest, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  addRecipe(argument: _RecipePackage_AddRecipeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  addRecipe(argument: _RecipePackage_AddRecipeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  addRecipe(argument: _RecipePackage_AddRecipeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  addRecipe(argument: _RecipePackage_AddRecipeRequest, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeleteRecipe(argument: _RecipePackage_RecipeID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteRecipe(argument: _RecipePackage_RecipeID, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteRecipe(argument: _RecipePackage_RecipeID, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  DeleteRecipe(argument: _RecipePackage_RecipeID, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteRecipe(argument: _RecipePackage_RecipeID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteRecipe(argument: _RecipePackage_RecipeID, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteRecipe(argument: _RecipePackage_RecipeID, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  deleteRecipe(argument: _RecipePackage_RecipeID, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  
  SearchRecipe(argument: _RecipePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  SearchRecipe(argument: _RecipePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  SearchRecipe(argument: _RecipePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  SearchRecipe(argument: _RecipePackage_Empty, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  searchRecipe(argument: _RecipePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  searchRecipe(argument: _RecipePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  searchRecipe(argument: _RecipePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  searchRecipe(argument: _RecipePackage_Empty, callback: grpc.requestCallback<_RecipePackage_Recipes__Output>): grpc.ClientUnaryCall;
  
  UpdateRecipe(argument: _RecipePackage_RecipeWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateRecipe(argument: _RecipePackage_RecipeWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateRecipe(argument: _RecipePackage_RecipeWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdateRecipe(argument: _RecipePackage_RecipeWithID, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  updateRecipe(argument: _RecipePackage_RecipeWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  updateRecipe(argument: _RecipePackage_RecipeWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  updateRecipe(argument: _RecipePackage_RecipeWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  updateRecipe(argument: _RecipePackage_RecipeWithID, callback: grpc.requestCallback<_RecipePackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface RecipeServiceHandlers extends grpc.UntypedServiceImplementation {
  AddRecipe: grpc.handleUnaryCall<_RecipePackage_AddRecipeRequest__Output, _RecipePackage_Response>;
  
  DeleteRecipe: grpc.handleUnaryCall<_RecipePackage_RecipeID__Output, _RecipePackage_Response>;
  
  SearchRecipe: grpc.handleUnaryCall<_RecipePackage_Empty__Output, _RecipePackage_Recipes>;
  
  UpdateRecipe: grpc.handleUnaryCall<_RecipePackage_RecipeWithID__Output, _RecipePackage_Response>;
  
}

export interface RecipeServiceDefinition extends grpc.ServiceDefinition {
  AddRecipe: MethodDefinition<_RecipePackage_AddRecipeRequest, _RecipePackage_Response, _RecipePackage_AddRecipeRequest__Output, _RecipePackage_Response__Output>
  DeleteRecipe: MethodDefinition<_RecipePackage_RecipeID, _RecipePackage_Response, _RecipePackage_RecipeID__Output, _RecipePackage_Response__Output>
  SearchRecipe: MethodDefinition<_RecipePackage_Empty, _RecipePackage_Recipes, _RecipePackage_Empty__Output, _RecipePackage_Recipes__Output>
  UpdateRecipe: MethodDefinition<_RecipePackage_RecipeWithID, _RecipePackage_Response, _RecipePackage_RecipeWithID__Output, _RecipePackage_Response__Output>
}
