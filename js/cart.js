import getdata from "../API/get.js";
import patchdata from "../API/patch.js";
import deletedata from "../API/delete.js";
import NavBar from "../component/navbar.js";


document.getElementById("navbar").innerHTML=NavBar()
const handleqntity=(opr,product)=>{
    if(opr=="+"){
        product.qnt+=1
        patchdata(product)
    }
    else{
        if(product.qnt>=2){
            product.qnt-=1
            patchdata(product)
        }
        else{
            deletedata(product.id)
        }
    }

}
let total=0
let dis=0
const uimaker=(product,id)=>{
    document.getElementById(id).innerHTML=""
    product.map((ele,index)=>{
        total=ele.price*ele.qnt
        dis=total*20/100
        let th=document.createElement("td")
        th.innerHTML=index+1
        let img=document.createElement("img")
        img.src=ele.img

        let td1=document.createElement("td")
        td1.append(img)
        let td2=document.createElement("td")
        td2.innerHTML=ele.title

       
        img.setAttribute("class","cart-img")

        let td3=document.createElement("td")
        td3.innerHTML=ele.price
        let btn1=document.createElement("button")
        btn1.innerHTML="-"
        btn1.addEventListener("click",()=>handleqntity("-",ele))
        let btn2=document.createElement("button")
        btn2.innerHTML=ele.qnt
        let btn3=document.createElement("button")
        btn3.innerHTML="+"
        btn3.addEventListener("click",()=>handleqntity("+",ele))
        let td4=document.createElement("td")
        td4.append(btn1,btn2,btn3)
        let td5=document.createElement("td")
        td5.innerHTML=`<i class="fa-solid fa-trash"></i>`
        td5.addEventListener("click",()=>{
            deletedata(ele.id)
        })

        btn1.setAttribute("class","btn")
        btn2.setAttribute("class","btn border")
        btn3.setAttribute("class","btn")
        let tr=document.createElement("tr")
        tr.append(th,td1,td2,td3,td4,td5)
    document.getElementById(id).append(tr)

    })
    let subtotal=document.createElement("span")
    subtotal.innerHTML="Subtotal:"
    let p=document.createElement("span")
    p.append(total)
    let subinfo=document.createElement("p")
    subinfo.append(subtotal,p)
    subtotal.setAttribute("class","subtotal me-5")
    document.getElementById("subtotal").append(subinfo)
}


const get=async()=>{
    let data=await getdata("http://localhost:3000/cart")
    uimaker(data,"tbody")
}

get()



const handecoupan=(e)=>{
    e.preventDefault();
    let val="42304"
    let newval=document.getElementById("coupon").value
    if(newval==val){
        alert("your code match suceessfully....")
        window.location.href="/pages/checkout.html"
    }
    else{
        window.location.href="/pages/checkout.html"
    }
    
    
}
document.getElementById("check-data").addEventListener("submit",handecoupan)





import footer from "../component/footer.js";
document.getElementById("footer").innerHTML=footer()

