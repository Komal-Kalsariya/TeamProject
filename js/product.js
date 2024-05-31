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

<<<<<<< admin
const handledata=async(val)=>{
    let data =await getdata("http://localhost:3000/product")
    if(val == "highest rated"){
        let temp=data.sort((a,b)=>b.price - a.price)
        uimaker(temp,"box")
    }
    else{
        let temp=data.sort((a,b)=>a.price - b.price)
        uimaker(temp,"box")
    }
}
const handlefilter=async(val)=>{
    let data =await getdata("http://localhost:3000/product")
    let temp=data.filter((ele)=>ele.cate==val)
    // console.log(temp);
    uimaker(temp,"box")
}
document.getElementById("sort").addEventListener("change",()=>{
    let val=document.getElementById("sort").value
    handledata(val)
})
// document.getElementById("lth").addEventListener("click",()=>handledata("lth"))
document.getElementById("men").addEventListener("click",()=>handlefilter("men"))
document.getElementById("kid").addEventListener("click",()=>handlefilter("kid"))
document.getElementById("women").addEventListener("click",()=>handlefilter("women"))
=======
import footer from "../component/footer.js";

document.getElementById("footer").innerHTML=footer()
>>>>>>> master
