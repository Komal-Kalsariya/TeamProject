import getdata from "../API/get.js";
import NavBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=NavBar()

let total=0
let disc=0
const uimaker=(product,id)=>{
    document.getElementById(id).innerHTML=""
product.map((ele)=>{
    total=ele.price*ele.qnt
    disc=total*20/100


})

let subtotal=document.createElement("span")
subtotal.innerHTML="Subtotal:"
let p=document.createElement("span")
p.append(total)
let subinfo=document.createElement("p")
subinfo.append(subtotal,p)
let shipping=document.createElement("span")
shipping.innerHTML="Delivery:"
let deli=document.createElement("span")
deli.innerHTML="$0.00:"
let delshii=document.createElement("p")
delshii.append(shipping,deli)
let Discount=document.createElement("span")
Discount.innerHTML="Discount:"
let disprice=document.createElement("span")
disprice.append(disc+"%")
let totaldis=document.createElement("p")
totaldis.append(Discount,disprice)

shipping.setAttribute("class","shipping me-5")
subtotal.setAttribute("class","subtotal me-5")
Discount.setAttribute("class","me-5")
// p.setAttribute("class"," total ms-5")

document.getElementById(id).append(subinfo,delshii,totaldis)
}
const get=async()=>{
    let product=await getdata("http://localhost:3000/cart")
    uimaker(product,"total")

}
get()
import footer from "../component/footer.js";
document.getElementById("footer").innerHTML=footer()