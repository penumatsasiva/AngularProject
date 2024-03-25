import { createAction, props } from "@ngrx/store";
import { ProductModel } from "./todo.model";

export const loadtodos=createAction('[TODOS] loadtodos')

export const updatetods=createAction('[TODOS] update TODOS',props<{todos:ProductModel}>)

export const deletetods=createAction('[TODOS] delete TODOS',props<{todos:ProductModel}>)