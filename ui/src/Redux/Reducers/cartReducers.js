import { CART_ADD_ITEM } from "../Constants/cartConstants";
import { CART_REMOVE_ITEM } from "../Constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const itemExist = state.cartItems.find(x => x.id === item.id)
            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.id === itemExist.id ? item : x)
                }
            }
            else {
                return {
                    ...state, cartItems: [...state.cartItems, item]
                    //concatinating new item with previous states
                }
            }
            case CART_REMOVE_ITEM:
                  return{
                      ...state,cartItems:state.cartItems.filter((x)=>x.name!==action.payload)
                  }  

        default:
            return state
    }
}