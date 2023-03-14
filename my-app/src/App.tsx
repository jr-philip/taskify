import React, { useState } from 'react';
import { updateExpressionStatement } from 'typescript';
import './App.css';
import InputField from './components/InputField';



const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")//creating the state of todo and setTodo
  console.log(todo)

  return (
    <div className="App">
      <span className="heading">TASKIFY</span>
      <InputField todo={todo} setTodo={setTodo}/> 
    </div>
  );
};

export default App;


// types of typescript
/* 
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

let personName: unknown;// if i dont have a clue what value is going to be returned , use "UNKNOWN"*/
