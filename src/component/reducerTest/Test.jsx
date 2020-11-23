import React, {useReducer} from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return (state > 0 ? state-1 : state);
        default:
            return state;
    }
}

export default ()=>{
    const [number, dispatch] = useReducer(reducer, 0);
    

    const onIncrement = () => {
        dispatch({type:"INCREMENT"});
    }

    const onDecrement = () => {
        dispatch({type:"DECREMENT"});
    }

    return (
        <div>
            <h1>{number}</h1>
            <input type='button' onClick={onIncrement} value='+1'/>
            <input type='button' onClick={onDecrement} value='-1'/>
        </div>
    );
};