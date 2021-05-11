import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crearTodo, editarTodo, toggleTodo, borrarTodo, toggleAll, borrarCompletados } from './todo.actions';


export const estadoInicial: Todo[] = [
  new Todo('salvar el mundo'),
  new Todo('salvar el mundo 1'),
  new Todo('salvar el mundo 2')
];

const _todoReducer = createReducer(
  estadoInicial,
  on(crearTodo, (state, {texto}) => [...state, new Todo(texto)]),
  on(toggleTodo, (state, {id}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        };
      } else {
        return todo;
      }
    });
  }),
  on(editarTodo, (state, {id, texto}) => {
    return state.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          texto
        };
      } else {
        return todo;
      }
    });
  }),
  on(borrarTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleAll, (state, {completado}) =>
    state.map(todo => {
      return {
        ...todo,
        completado
      }
    })
  ),
  on(borrarCompletados, (state) => state.filter(todo => !todo.completado))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
