  const deletedata=(id)=>{
    fetch (`http://localhost:3000/product/${id}`,{
        method:"DELETE"
    })
  }
  export default deletedata