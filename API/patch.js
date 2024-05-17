const patchdata=(url)=>{
    fetch(url,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}
export default patchdata