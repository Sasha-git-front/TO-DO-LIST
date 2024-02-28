import React from "react"
import './input.css'


function Input({ inputData }) {
    let data = '';
    let input = '';
    return (
        <>
            <input className="new-task" type='text' placeholder='Add New Todo'
                onChange={(e) => {
                    data = e.target.value;
                    input = e.target;
                }}

            />
            <button className='btn' onClick={() => {
                if(data){
                    inputData(data, input)
                }else{
                    console.log("not data")
                }
                
            }}>Зберегти</button>
        </>

    )
}

export { Input }