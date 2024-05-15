const postdata=(url,data)=>{
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })    
}
export default postdata