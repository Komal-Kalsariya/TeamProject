import deletedata from "../API/delete.js"
import patchdata from "../API/patch.js"
import postdata from "../API/post.js"
 const cartExit=(product)=>{
    fetch(`http://localhost:3000/cart/${product.id}`)
        .then((res)=>res.json())
        .then((res)=>{
            res.qnt+=1
            patchdata(res)
        })
    .catch((error)=>{
        postdata("http://localhost:3000/cart",product)
    })

}
const uimaker=(product,id)=>{
    document.getElementById(id).innerHTML=""
    product.map((ele)=>{
        let title=document.createElement("h6")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img1")

        let price=document.createElement("p")
        price.innerHTML="price : "+ele.price

        let cate=document.createElement("p")
        cate.innerHTML="cate : "+ele.cate
     

        
        let btn=document.createElement("button")
        btn.innerHTML="ADD TO CART +"
        btn.setAttribute("class","btn1 ")

        let btn3=document.createElement("button")
        btn3.innerHTML="delete"

        btn3.addEventListener("click",()=>{
            deletedata((ele.id))
        })
       

        let div=document.createElement("div")
        div.append(img,title,price,cate,btn)
        div.setAttribute("class","box1")
        

        document.getElementById(id).append(div)

    })
}
export default uimaker

