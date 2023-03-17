import React from 'react';
import './style.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;//coz setTodo is function,i'll hover on in App.tsx and then copy &paste the value provided
    handleAdd:() => void;
}

const InputField = ({ todo, setTodo } :Props) => { // or const InputField:React.FC<Props>
  return <form className='input'>
            <input 
                type="input" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter a task' 
                className='input_box' 
            /> 
            <button className='input_submit' type='submit'>Go</button>
        </form>
};

export default InputField
