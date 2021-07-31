//let local = JSON.parse(localStorage.getItem("localCart"));

let localData = localStorage.getItem("localCart");
// return localData ? JSON.parse(localData) : [];


export const initialState = {
  cart: [],
  alert : false,
  success: false, 
};



const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {

    case "Hide_Alert":
    return {
      ...state,
      cart: [...state.cart],
      alert: false,
    };

    case "Hide_Success":
    return {
      ...state,
      cart: [...state.cart],
      success: false,
    };

    case "ADD_TO_CART":
      //logic for adding item to cart
      const index = state.cart.findIndex(
        (cartItems) => cartItems.id === action.item.id
      );
      if (index >= 0) {
        console.log("Already in cart" + action.item.id);
        // alert("Item already In Cart");
        return {
          ...state,
          cart: [...state.cart],
          alert: true,
        };
      } else {
        console.log("Not in cart");
        return {
          ...state,
          cart: [...state.cart, action.item],
          success: true,
        };
      }

    case "REMOVE_FROM_CART":
      //logic for removing item to cart
      let newCart = [...state.cart];

      const removeIndex = state.cart.findIndex(
        (cartItems) => cartItems.id === action.item.id
      );
      if (removeIndex >= 0) {
        //item found, remove it from the cart.
        newCart.splice(removeIndex, 1);
      } else {
        console.log("Yo cannot delete ITEM that doesn't exist in cart");
      }
      return {
        ...state,
        cart: newCart,
      };

    case "INCREASE_QUANTITY":
      //logic for removing item to cart
      let itemsInCart = [...state.cart];

      let exist = itemsInCart.find(
        (cartItems) => cartItems.id === action.item.id
      );
      if (exist) {
        //item found, increase quanity in the cart.
        if (exist.quantity <=9 ){
            exist = { ...exist, quantity: exist.quantity + 1 };
        }
        else
         exist = { ...exist, quantity: 10 };
        
        console.log("clicked:  " + JSON.stringify(exist));

        const updateIndex = state.cart.findIndex(
          (cartItems) => cartItems.id === action.item.id
        );
        if (updateIndex >= 0) {
          //item found, now remove and replace specific item with new value in the cart.
          itemsInCart.splice(updateIndex, 1, exist);
        } else {
          console.log("Yo cannot delete ITEM that doesn't exist in cart");
        }
      } else {
        console.log("Yo cannot update ITEM that doesn't exist in cart");
      }
      return {
        ...state,
        cart: itemsInCart,
      };

      case "DECREASE_QUANTITY":
        //logic for removing item to cart
        let itemsInCarts = [...state.cart];
  
        let itemExist = itemsInCarts.find(
          (cartItems) => cartItems.id === action.item.id
        );
        if (itemExist) {
          //item found, increase quanity in the cart.
          if (itemExist.quantity >=2 ){
            itemExist = { ...itemExist, quantity: itemExist.quantity - 1 };
          }
          else
          itemExist = { ...itemExist, quantity: 1 };
          
          console.log("clicked:  " + JSON.stringify(itemExist));
  
          const updateIndex = state.cart.findIndex(
            (cartItems) => cartItems.id === action.item.id
          );
          if (updateIndex >= 0) {
            //item found, now remove and replace soecific item with new value in the cart.
            itemsInCarts.splice(updateIndex, 1, itemExist);
          } else {
            console.log("Yo cannot delete ITEM that doesn't exist in cart");
          }
        } else {
          console.log("Yo cannot update ITEM that doesn't exist in cart");
        }
        return {
          ...state,
          cart: itemsInCarts,
        };
  

    default:
      return state;
  }
};





export default reducer;
