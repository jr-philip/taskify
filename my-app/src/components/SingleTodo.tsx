import React, { useState } from 'react';
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
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id:number) => { // receive the id which type will be number
    setTodos(todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone} : todo))// map through the array and whatever id matches with id, change it to false and vice verse
  }/*if todo .id is strictly = the id? that we are sending then will take that todo and change the isDone property and invert todo.isDone otherwise return todo
    "s" is called the strike tag which clears and unclears info when clicked*/
  
  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id ! == id));
  }

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
      <span className='icon' onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className='icon' onClick={() => handleDone(todo.id)}>
        <MdDone/>
      </span>
    </div>

  </form>
  
}

export default SingleTodo
