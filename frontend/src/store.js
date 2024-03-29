import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { productsReducer, newProductReducer, productReducer, productDetailsReducer, newReviewReducer, productReviewsReducer, reviewReducer  } from './reducers/productReducers'
import { authReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer  } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers'
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer  } from './reducers/orderReducers'
import { createCategoryReducer, allCategoriesReducer, categoryReducer, getCategorySubsReducer } from './reducers/categoryReducers'
import {createSubReducer, allSubsReducer, subReducer } from './reducers/subReducers'

const reducer = combineReducers({
   products: productsReducer,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer,
    createCategory : createCategoryReducer,
    allCategories: allCategoriesReducer,
    category : categoryReducer,
    createSub: createSubReducer,
    allSubs: allSubsReducer,
    sub : subReducer,
    getCategorySubs : getCategorySubsReducer
})


let initialState = {
   cart: {
      cartItems: localStorage.getItem('cartItems')
          ? JSON.parse(localStorage.getItem('cartItems'))
          : [],
      shippingInfo: localStorage.getItem('shippingInfo')
          ? JSON.parse(localStorage.getItem('shippingInfo'))
          : {}
  }
   
}

const middlware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))

export default store;