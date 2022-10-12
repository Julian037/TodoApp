import React from "react";


function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    const [sincronizedItem, setSincronizedItem] = React.useState(true)
    
    React.useEffect( () => {
        setTimeout( () => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parseItem;
    
            if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parseItem = [];
            }else{
            parseItem = JSON.parse(localStorageItem);
            };
    
            setItem(parseItem);
            setLoading(false);
            setSincronizedItem(true)
        } catch (error) {
            setError(error)
        }
        }, 2000)
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
        try {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos)
        setItem(newItem)
        } catch (error) {
        setError(error)
        }
    };
    
    const sincronizeItem = () => {
        setLoading(true);
        setSincronizedItem(false)

    } 

    return{
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    }
    }


export {useLocalStorage}