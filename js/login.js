import NavBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=NavBar()

const ValidEmail=(data)=>{
    fetch(`http://localhost:3000/user?email=${data.email}&password=${data.password}`)
    .then((res)=>res.json())
    .then((res)=>{
        if(res.length==1){
            alert("login succesfuly.......")
            window.location.href="/index.html"
        }
        else{
            alert("login failed.........")
        }
    })
}


const loginData=(e)=>{
    e.preventDefault()

    let data={
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
    }
    console.log(data)
    ValidEmail(data)

}
document.getElementById("data").addEventListener("submit",loginData)
import footer from "../component/footer.js";
document.getElementById("footer").innerHTML=footer()