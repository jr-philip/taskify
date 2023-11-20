import React, { useRef } from 'react';
import './style.css';

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;//coz setTodo is function,i'll hover on in App.tsx and then copy &paste the value provided
    handleAdd: (e:React.FormEvent) => void;//must define the function.(void) will not return anything
}

const InputField :React.FC <Props>= ({ todo, setTodo, handleAdd } ) => { // or const InputField:React.FC<Props>
  const inputRef = useRef<HTMLInputElement>(null);// HTMLInputElemement is the type of the useRef

  return (
        <form 
            className='input' 
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
                }}>
            <input 
                ref={inputRef}
                type="input" 
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Enter my todo' 
                className='input_box' 
            /> 
            <button className='input_submit' type='submit'>
                Go
            </button>
        </form>
        )
};

export default InputField
