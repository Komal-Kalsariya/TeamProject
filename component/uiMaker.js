import deletedata from "../API/delete.js"

const uimaker=(product,id)=>{
    document.getElementById(id).innerHTML=""
    product.map((ele)=>{
        let title=document.createElement("h6")
        title.innerHTML=ele.title

        let img=document.createElement("img")
        img.src=ele.img
        img.setAttribute("class","img1")

        let price=document.createElement("p")
        price.innerHTML=""+ele.price

        let cate=document.createElement("p")
        cate.innerHTML=ele.cate
        cate.setAttribute("class","cate1")

        
        let btn1=document.createElement("button")
        btn1.innerHTML="<i class=ri-thumb-up-fill></i>"
        btn1.setAttribute("class","like")

        let btn=document.createElement("button")
        btn.innerHTML="ADD TO CART +"
        btn.setAttribute("class","btn1 ")
       

        let div=document.createElement("div")
        div.append(img,title,price,cate,btn,btn1)
        div.setAttribute("class","box1")

        document.getElementById(id).append(div)

    })
}
export default uimaker

