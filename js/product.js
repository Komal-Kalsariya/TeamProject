
import getdata from "../API/get.js"
import uimaker from "../component/uiMaker.js"

let get=async()=>{
    let data=await getdata("http://localhost:3000/product")
    // console.log(data);

    uimaker(data,"box")
}
get()

import footer from "../component/footer.js";
document.getElementById("footer").innerHTML=footer()
