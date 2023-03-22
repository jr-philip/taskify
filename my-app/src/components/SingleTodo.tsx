import React from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import  "./style.css";
import TodoList from './TodoList';


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos } :Props) => {


  const handleDone = (id:number) => { // receive the id which type will be number
    setTodos(todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone} : todo))
  }// "s" is called the strike tag which clears and unclears info when clicked

  return <form className='todos_single'>
    {
      todo.isDone ? (
        <s className='todos_single--text'>
          {todo.todo}
        </s>
      ): (
          <span className='todos_single--text'>
            {todo.todo}
          </span>
      )
    }
   
    <div>
      <span className='icon'>
        <AiFillEdit />
      </span>
      <span className='icon'>
        <AiFillDelete />
      </span>
      <span className='icon' onClick={() => handleDone(todo.id)}>
        <MdDone/>
      </span>
    </div>

  </form>
  
}

export default SingleTodo
