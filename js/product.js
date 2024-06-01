import NavBar from "../component/navbar.js"
document.getElementById("navbar").innerHTML=NavBar()
import getdata from "../API/get.js"
import uimaker from "../component/uiMaker.js"

let get=async()=>{
    let data=await getdata("http://localhost:3000/product")
    // console.log(data);

    uimaker(data,"box")
}

get()
const searchdata=async(val)=>{
    let data=await getdata("http://localhost:3000/product")
    let temp=data.filter((ele)=>ele.title==val)
    uimaker(temp,"box")
}

 const searchhandle=(e)=>{
    e.preventDefault()

    let val=document.getElementById("search").value
    searchdata(val)
    
 }
 document.getElementById("searchform").addEventListener("click",searchhandle)
import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()
