import {signal, computed} from '@preact/signals'

function createAppState() {
    const todos = signal([]);
  
    const completed = computed(() => {
      return todos.value.filter(todo => todo.completed).length
    });
  
    return { todos, completed }
}

export default createAppState;