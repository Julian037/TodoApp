import React from "react";


function useLocalStorage(itemName, initialValue){
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
    const {sincronizedItem, error, loading, item} = state


    //ACTION  CREATORS
    const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
    const onSuccess = (parseItem) => dispatch({ type: actionTypes.success, payload: parseItem  });
    const onSave = (item) => dispatch({ type: actionTypes.save, payload: item  });
    const onSincronize = () => dispatch({ type: actionTypes.sincronize });

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

            onSuccess(parseItem)
            // setItem(parseItem);
            // setLoading(false);
            // setSincronizedItem(true)
        } catch (error) {
            onError(error)
            //setError(error)
        }
        }, 2000)
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
        try {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos)
        onSave(newItem)
        // setItem(newItem)
        } catch (error) {
        onError(error)
        //setError(error)
        }
    };
    
    const sincronizeItem = () => {
        onSincronize();
    }; 

    return{
        item,
        saveItem,
        loading,
        error,
        sincronizeItem,
    }
}

const initialState = ({initialValue}) => ({
    sincronizeItem:true,
    error:false,
    loading:true,
    item:initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save:'SAVE',
    sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error:true,
    },
    [actionTypes.success]: {
        ...state,
        error:false,
        loading:false,
        sincronizedItem:true,
        item: payload,
    },
    [actionTypes.sincronize]: {
        ...state,
        loading:true,
        sincronizedItem:false,
    },
    [actionTypes.save]: {
        ...state,
        item:payload,
    },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}


export {useLocalStorage}