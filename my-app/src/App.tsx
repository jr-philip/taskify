import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [CompletedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = CompletedTodos;
    // Source Logic
    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">My Todos</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          CompletedTodos={CompletedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;

/*
// types of typescript

1. let name: string;
2. let age; number;
3.let isStudent : boolean;
4.let hobbies: string[];
5.let role: [number, string] "tuple is a type of ts which contains a fixed amount of value  and types that are defined during declaration" 

type People ={
  name: string;
  age: number;// if you want age to be optional use "age?: number" 
}

let person : People= {
  name: "phil",  
  age: 25,
}

let age : number | string; // union method combines both types 
age = "two";

type X ={//types
  a:string;
  b:number;
}
type Y = X &{
  c:string;
  d:number;
}
let y:Y & X = {
  a:"hasc",
  b:5,
  c:"hjdf",
  d:4,
}

interface Person { // interface  
  name:string;
  age:number;
}

function printName(name:string){// defining a function
  console.log(name);
}
printName("phil")

let personName: unknown;// if i dont have a clue what value is going to be returned , use "UNKNOWN"
*/
