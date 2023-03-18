import React from 'react';
import './style.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;//coz setTodo is function,i'll hover on in App.tsx and then copy &paste the value provided
    handleAdd: (e:React.FormEvent) => void;//must define the function.(void) will not return anything
}

const InputField = ({ todo, setTodo, handleAdd } :Props) => { // or const InputField:React.FC<Props>
  return <form className='input' onSubmit={handleAdd}>
            <input 
                type="input" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task' 
                className='input_box' 
            /> 
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
};

export default InputField
