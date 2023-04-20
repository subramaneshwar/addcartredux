import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {
    const {cartdet} =useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(cartdet);
  return (
    <div style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"10px",justifyContent:"center",padding:"20px "}}>
    {
        cartdet.length <=0 ? <h1 style={{textAlign:"center",padding:"20px"}} >No items is added</h1>:
         cartdet.map((ele,ind)=>{
            console.log(ele,"000");
            return(
                <div className="card" style={{boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",width:"300px",height:"400px",padding:"20px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"}}>
                    <img src={ele[0].image} alt="" height="100"/>
                    <b>{ele[0].title}</b>
                    <p>cat: {ele[0].category}</p>
                    <p>price:$ {ele[0].price}</p>
                    <button onClick={()=>{
                        dispatch({
                            type:"rem",
                            rem:ind
                        })
                    }}>remove</button>
                </div>
            )
        })
    }
</div>
  )
}

export default Cart