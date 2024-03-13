
import React, { useState, useEffect } from "react";
import './input.css'


function Input({ inputData, editIndex, editText }) {
    //let data = '';
    //let input = '';
    const [data, setData] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        if (editIndex !== null) {
            setData(editText);
        }
    }, [editIndex, editText]);

    return (
        <>
            <input className="new-task"
                type='text'
                placeholder='Add New Todo'
                value={data}
                onChange={(e) => {
                    setData(e.target.value);
                    setInput(e.target);
                }}

            />
            <button className='btn' onClick={() => {
                if (data) {
                    inputData(data, input)
                    setData('')
                } else {
                    console.log("not data")
                }

            }}>{editIndex !== null ? 'Змінити' : 'Зберегти'}
            </button>
        </>

    )
}

export { Input }