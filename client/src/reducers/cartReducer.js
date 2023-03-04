const initialState = JSON.parse(localStorage.getItem("shoppingBasket") || "[]");

export  const  addItemShoppingBasket = ( state = initialState , action  ) => {
  switch (action?.type) {
    case "addItem":
    localStorage.setItem("shoppingBasket" , JSON.stringify([...state , action.payload ]))
    return state = [...state , action.payload ];
    
    case "removeItem":
      localStorage.setItem("shoppingBasket" , JSON.stringify([
        ...state?.filter?.((item) => item.id !== action.payload.id)   
    ]))
      return   state = [
        ...state?.filter?.((item) => item.id !== action.payload.id)   
    ];
    case "addQuantity": 
    localStorage.setItem("shoppingBasket" , JSON.stringify([ 
      ...state?.map((item) => {
        return {
          ...item ,
          quantity : action?.payload?.id === item?.id ? item?.quantity + 1 : item?.quantity,
          value: action?.payload?.id === item?.id ? item?.quantity * item.value : item?.value,
        }
      })
      
     ]))
    
    return state = [ 
      ...state?.map((item) => {
        return {
          ...item ,
          quantity : action?.payload?.id === item?.id ? item?.quantity + 1 : item?.quantity,
         
        }
      })
     ];

     case "undoAddCart": 
     localStorage.setItem("shoppingBasket" , JSON.stringify([ 
       ...state?.map((item) => {
         return {
           ...item ,
           quantity : action?.payload?.id === item?.id ? item?.quantity - 1 : item?.quantity,
           value: action?.payload?.id === item?.id ? item?.quantity * item.value : item?.value,
         }
       })
       
      ]))
     
     return state = [ 
       ...state?.map((item) => {
         return {
           ...item ,
           quantity : action?.payload?.id === item?.id ? item?.quantity - 1 : item?.quantity,
          
         }
       })
      ];
     
     
     case "removeQuantity": 
     localStorage.setItem("shoppingBasket" , JSON.stringify([ 
      ...state?.map((item) => {
        return {
          ...item ,
          quantity : action?.payload?.id === item?.id ? item?.quantity === 1 ? 1 : item?.quantity - 1 : item?.quantity,
        }
      })
     ]))
     return state = [ 
       ...state?.map((item) => {
         return {
           ...item ,
           quantity : action?.payload?.id === item?.id ? item?.quantity === 1 ? 1 : item?.quantity - 1 : item?.quantity,
         }
       })
      ]
    default:
      return state;
  }
}


