import { combineReducers } from 'redux';
import * as reducersProduct from './productReducer';
import * as reducersUser from './userReducer';
import  * as shoppingBasket from "./cartReducer"
import errorReducers from './errorReducers';
export const reducer = combineReducers({
  //product reducers
  productsList: reducersProduct.productListReducer,
  createdProduct: reducersProduct.productCreateReducer,
  deletedProduct: reducersProduct.productDeleteReducer,
  updatedProduct: reducersProduct.productUpdateReducer,
  detailedProduct: reducersProduct.productDetailsReducer,
   //Cart reducers
  addItemShoppingBasket : shoppingBasket.addItemShoppingBasket,
/*removeItemShoppingBasket : shoppingBasketReducer.actions.removeItemShoppingBasket,
  allShoppingBasketItem: shoppingBasketReducer.actions.allShoppingBasketItem,
  decreaseItemQuantity : shoppingBasketReducer.actions.decreaseItemQuantity,
  increaseItemQuantity : shoppingBasketReducer.actions.increaseItemQuantity, */
  //User reducers
  userSignin: reducersUser.userSigninReducer,
  auth: reducersUser.userRegisterReducer,
  errors: errorReducers,
  userDetails: reducersUser.userDetailsReducer,
  userUpdateProfile: reducersUser.userUpdateProfileReducer,
  userUpdate: reducersUser.userUpdateReducer,
  userList: reducersUser.userListReducer,
  userDelete: reducersUser.userDeleteReducer,
});
