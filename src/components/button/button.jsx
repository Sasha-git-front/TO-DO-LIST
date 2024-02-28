import React from 'react'

import './button.css'

function Button ({classes,data,index,deleteData}){
    return(
        <button className={classes} onClick={()=>{deleteData(data,index)}}>Видалити</button>
    )
}
export {Button}