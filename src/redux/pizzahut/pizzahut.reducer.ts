import * as pizzaActions from "./pizzahut.action"
import {Buy_Pizza, buyPizza} from "./pizzahut.action";

//defining state type

export interface PizzaState{
    count : number
}

//Initial state

let initialState : PizzaState = {
    count : 100
}

//defining reducer

export const reducer = (state = initialState, action : pizzaActions.ActionType) : PizzaState => {
    switch (action.type){
        case Buy_Pizza :
            return {
                count : state.count - 1 > 0 ? state.count - 1  : 0
            }
        default : return state;
    }
}