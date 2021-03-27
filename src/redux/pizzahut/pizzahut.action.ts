export const Buy_Pizza : string = "Buy_Pizza";

export interface ActionType{
    type : string
}

export const buyPizza = () : ActionType => {
    return {
        type : Buy_Pizza
    }
};