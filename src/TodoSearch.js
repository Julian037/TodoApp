import React from "react";
import './TodoSearch.css'

function TodoSearch({searchValue, setsearchValue}) {

    

    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setsearchValue(event.target.value)
    };

    return(
        <input  
            className="TodoSearch" 
            placeholder="Encutra el ToDo"
            value={searchValue}
            onChange={onSearchValueChange} 
        />
    )
}

export {TodoSearch}