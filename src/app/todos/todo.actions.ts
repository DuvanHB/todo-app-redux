import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
  '[TODO] Crear Todo',
  props<{texto: string}>()
);

export const toggleTodo = createAction(
  '[TODO] Toggle Todo',
  props<{id: number}>()
);

export const editarTodo = createAction(
  '[TODO] Editar Todo',
  props<{id: number, texto: string}>()
);

export const borrarTodo = createAction(
  '[TODO] Borrar Todo',
  props<{id: number}>()
);

export const toggleAll = createAction(
  '[TODO] Toggle todos los Todos',
  props<{completado: boolean}>()
);

export const borrarCompletados = createAction('[TODO] Borrar los Todo completados');
