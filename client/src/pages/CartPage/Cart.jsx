// import React, { useEffect, useState } from 'react';
// import "./Cart.css"
// import { Button, Modal} from 'react-bootstrap';
// import {useDispatch, useSelector} from "react-redux";
// import { Link, useNavigate } from 'react-router-dom';
// import { addItemShoppingBasket} from "../../reducers/cartReducer";


import React from 'react'

export default function Cart() {
  return (
    <div>
      Cart in progres
    </div>
  )
}


// const CartPage = (props) => {
//   const shoppingBasketList = useSelector((state) => state.addItemShoppingBasket)
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const fees = 10; 

//   const [subTotalCart, setSubTotal] = useState(0);
//   useEffect(() => {
//     subTotal();
//   }, [shoppingBasketList]);

//   const [cartTotal, setCartTotal] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     subTotal();
//   }, [shoppingBasketList]);

//   const subTotal = () => {
//     let totalVal = 0;
//     for (let i = 0; i < shoppingBasketList.length; i++) {
//       totalVal += shoppingBasketList[i].value * shoppingBasketList[i].quantity;
//     }
//     setSubTotal(totalVal);
//     setCartTotal(totalVal + fees);
//   };

//   return (
//     <div className='cart-page'>
//       <div className='page-container'>
//         <div className='page-title'>Your shopping cart</div>
//          <div className='product-summary-container'> 
//          <div className='cart-container'>
//          {shoppingBasketList?.length > 0 ?
//         shoppingBasketList?.map((item) => (

//           <div className='product-container'>
//               <div className='column-span-2'>Product</div> 
//               <div className='header-quantity justify-center'>Quantity</div> 
//               <div className='header-price justify-center'>Price</div>
//               <div className='header-price-subtotal justify-center'>Subtotal</div> 
//             <div></div>
//               <img width={"130px"} height={100} src={item?.im} alt=""/>
//                 <div className='info-container'>
//                   <div className='itemname-container'>
//                   {item.name}
//                   </div>
//                   <div className='iteminfo-container'>
//                     <p>Product brand</p>
//                     <p>Product short description</p>
//                   </div>
//                 </div>
            
//            <div className='quantity-container justify-center' >
//               <Button onClick={() => dispatch(addItemShoppingBasket({ type :  'removeQuantity' , payload : item}))}
//                   variant="light"
//                   size="sm"
//                 >
//                   <i className="fas fa-minus-circle"></i>
//                 </Button>{' '}
//                 <b>{item?.quantity}</b>{' '}
//                 <Button onClick={() => dispatch(addItemShoppingBasket({ type :  'addQuantity' , payload : item}))}
//                   variant="light"
//                   size="sm"
//                 >
//                   <i className="fas fa-plus-circle"></i>
//                 </Button>
//            </div>
//                 <div className='price justify-center'>$ {item.value}</div>
//                 <div className='price justify-center'>$ {item.value * item.quantity}</div>
//                 <div className='delete justify-center'>
//                   <Button onClick={() => dispatch(addItemShoppingBasket({ type : "removeItem" , payload : item}))}>
//                      Remove
//                   </Button>
//                 </div>
       
//           </div>
//         )) : <div className='empty-container'>
//                 <div className='message'>Your shopping basket is empty.</div>
//                 <div className='message'><Link to="/">Go back shopping</Link></div>
//              </div>}

// </div>

//       <div className='summary-container'>
//         <div className='summary-price'>
//           <div className='summary-item'>
//               Subtotal: ${subTotalCart}
//           </div>
//           <div className='summary-item'>
//               Shipping costs : ${fees}
//           </div>
//           <div className='summary-item'>
//               Total : ${cartTotal}
//           </div>
//         </div>
//         <div className='checkout-container'>
//           <Button onClick={ () => setIsOpen(true)}>Check Out</Button>

//           <div className="modal-dark-light">
//         <Modal show={isOpen} onHide={() => setIsOpen(false)} size="m">
//           <Modal.Header closeButton><strong>CheckOut</strong></Modal.Header>
//           <Modal.Body style={{color: 'black'}}>
//           <div>Total: ${cartTotal}</div>
//           <div className='message' onClick={() => setIsOpen(false)}><Link to="/cart">Go to shopping basket</Link></div>
//           <div className='delete justify-right'>
//               <Button onClick={() => setIsOpen(false)}>
//                 Pay
//               </Button>
//           </div>
//           </Modal.Body>
//         </Modal>
//       </div>

//         <Button onClick={() => navigate("/")}>
//            Continue Shopping
//         </Button>
//         </div>
//         {/* <div className='continue-container'>
     
//         </div> */}
//         </div>
//       </div>
//     </div>
//    </div>
//   )
// }

// export default CartPage