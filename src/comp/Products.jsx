import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
function Products() {
  let {val} = useSelector(state => state);
  const dispatch =useDispatch()
  console.log(val)
  useEffect(() => {
    if(val.length <= 0){
      fetch("https://fakestoreapi.com/products").then(resp=>resp.json()).then(data =>{
      dispatch({
        type:'prod',
        data:data
      })})
    }
  },[])
  function addcarts(ids){
    console.log("hi");
      dispatch({
        type:"card",
        id : ids
      })
  }
  return (
      <div style={{ padding: "30px" }}>
      <h2 style={{ color: "red" }}>Products Component</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod incidunt, vero corporis magni et pariatur laboriosam quo dignissimos ducimus nulla reiciendis repellendus odio aspernatur facere ratione repudiandae! Expedita perferendis dolores laborum aliquid, illum ex repudiandae qui ratione, optio atque dolorum sapiente cupiditate vel, reprehenderit numquam consequuntur molestias ut pariatur ducimus. Eligendi aut fugiat, repudiandae repellat architecto laboriosam? Repellat ipsa labore dolor esse numquam aperiam sequi aliquid alias ipsum error. Ab saepe dolorem iusto cum atque neque laborum maxime facilis eligendi cumque nam reiciendis, ut fuga suscipit animi excepturi consequatur necessitatibus. Quidem dignissimos tenetur totam quaerat ad excepturi at, fugiat magni!
      </p>
      {val.length > 0 ? (
        <div style={{marginTop:"50px",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridGap:"15px"}}>
          {val.map((ele) => {
            return (
              <div style={{width: "300px",height:"400px",border:"solid",
                padding:"10px",
                textAlign: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                <img src={ele.image} style={{height:"200px",width:'200px'}} />
                <p><b>
                {ele.title}
                  </b></p>
                <p>$ {ele.price} </p>
                <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
                  <button style={{ padding:".5rem",marginTop:'5px',fontWeight:"bold",color:"blanchedalmond",backgroundColor:"darkcyan",border:"none"}}>Product Details</button>
                  <button style={{ padding:".5rem",marginTop:'5px',fontWeight:"bold",backgroundColor:"skyblue",border:"none"}} onClick={()=>addcarts(ele.id)}>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "red", textAlign: "center", marginTop: "100px" }}>
          No Product to Display
        </h2>
      )}
      </div>
      
  )
}

export default Products