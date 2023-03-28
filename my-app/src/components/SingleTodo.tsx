import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import  "./style.css";
import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';


type Props = {
  index:number;
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ index, todo, todos, setTodos } :Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id:number) => { // receive the id which type will be number
    setTodos(todos.map((todo) => todo.id === id? {...todo, isDone: !todo.isDone} : todo))// map through the array and whatever id matches with id, change it to false and vice verse
  }/*if todo .id is strictly = the id? that we are sending then will take that todo and change the isDone property and invert todo.isDone otherwise return todo
    "s" is called the strike tag which clears and unclears info when clicked*/
  
  const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id ! == id));
  }

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault()

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo:editTodo} :todo))
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  },[edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>

    {(provided)=>(
        <form 
          className='todos_single' 
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >

          {edit ? (
            <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos_single--text" />
          ) :
            todo.isDone ? (
              <s className='todos_single--text'>
                {todo.todo}
              </s>
            ) : (
              <span className='todos_single--text'>
                {todo.todo}
              </span>
            )}


          <div>
            <span
              className='icon'
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit)
                }
              }}>
              <AiFillEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>

        </form>
    )

    }

      
    </Draggable>
   
  )
}

export default SingleTodo
