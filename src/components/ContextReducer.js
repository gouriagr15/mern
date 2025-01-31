import React, { createContext, useContext, useReducer } from 'react'
const CardStateContext = createContext();
const CardDispatchContext = createContext();

const reducer =(state,action)=>{
switch(action.type){
    case "ADD":
        return[...state,{id: action.id, name: action.name, qty: action.qty, size: action.size, price: action.price, img: action.img}]
        case "REMOVE":
            let newArr=[...state]
            newArr.splice(action.index,1)
            return newArr;
            case "UPDATE":
            let arr = [...state]
            arr.find((food, index) => {
                if (food.id === action.id) {
                    console.log(food.qty, parseInt(action.qty), action.price + food.price)
                    arr[index] = { ...food, qty: parseInt(action.qty) + parseInt(food.qty), price: action.price + food.price }
                }
                return arr
            })
            return arr
            case "DROP":
                let empArr=[]
                return empArr;


}
}
export const CardProvider =({children})=>{
        const [state,dispatch]=useReducer(reducer,[])
        return(
            <CardDispatchContext.Provider value={dispatch}>
                <CardStateContext.Provider value={state}>
                    {children}
                </CardStateContext.Provider>
            </CardDispatchContext.Provider>

        )

}
export const useCart=() => useContext(CardStateContext);
export const useDispatchCart=()=> useContext(CardDispatchContext)
