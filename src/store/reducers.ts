import { createReducer } from "@ngrx/store";
import { ProductModel } from "./todo.model";

export interface TodoState{
    todos:ProductModel
}
export const todoInitialstate={
    todos:[]
}

export const todoReducer=createReducer(todoInitialstate)