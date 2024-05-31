import getdata from "../API/get.js";
import NavBar from "../component/navbar.js";
document.getElementById("navbar").innerHTML=NavBar()

const get=async()=>{
    let data=await getdata("http://localhost:3000/product")
    uimaker(data,"boxes")
}
get()
const searchdata=async(val)=>{
    let data=await getdata("http://localhost:3000/product")
    let temp=data.filter((ele)=>ele.title==val)
    uimaker(temp,"boxes")
}

 const searchhandle=(e)=>{
    e.preventDefault()

    let val=document.getElementById("search").value
    searchdata(val)
    
 }
document.getElementById("searchform").addEventListener("click",searchhandle)
const show1=()=>{
    let cushappy=document.getElementById("count1").innerHTML
    let count=0
    let id=setInterval(()=>{
        count=count+1
        document.getElementById("count1").innerHTML=count
        if(count==cushappy){
            clearInterval(id)
        }
    },100)
}
setTimeout(()=>{
    show1()
},1000)
const show2=()=>{
    let cushappy=document.getElementById("count2").innerHTML
    let count=0
    let id=setInterval(()=>{
        count=count+1
        document.getElementById("count2").innerHTML=count
        if(count==cushappy){
            clearInterval(id)
        }
    },100)
}
setTimeout(()=>{
    show2()
},1000)
const show3=()=>{
    let cushappy=document.getElementById("count3").innerHTML
    let count=0
    let id=setInterval(()=>{
        count=count+1
        document.getElementById("count3").innerHTML=count
        if(count==cushappy){
            clearInterval(id)
        }
    },100)
}
setTimeout(()=>{
    show3()
},1000)


import footer from "../component/footer.js";
import uimaker from "../component/uiMaker.js";

document.getElementById("footer").innerHTML=footer()