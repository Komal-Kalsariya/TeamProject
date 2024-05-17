
import footer from "../component/footer.js";
document.getElementById("footer").innerHTML=footer()

import NavBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=NavBar()


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

