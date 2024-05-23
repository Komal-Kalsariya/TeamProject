const patchdata=(product)=>{
    fetch(`http://localhost:3000/cart/${product.id}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    })
}
export default patchdata