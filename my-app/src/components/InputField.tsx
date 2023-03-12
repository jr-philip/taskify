import React from 'react';
import './style.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;//coz setTodo is function,i'll hover on in App.tsx and then copy &paste the value that it will give me
}

const InputField = ({ todo, setTodo }: Props) => {
  return <form className='input'>
            <input type="input" placeholder='Enter a task' className='input_box' /> 
            <button className='input_submit' type='submit'>Go</button>
        </form>
};

export default InputField
