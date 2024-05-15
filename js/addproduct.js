import postdata from "../API/post.js"

const handleadd=(e)=>{
    e.preventDefault()

    let product={
            title:document.getElementById("name").value,
            img:document.getElementById("img").value,
            price:document.getElementById("price").value,
            cate:document.getElementById("cate").value,

    }
    postdata("http://localhost:3000/product",product)
    console.log(product);
}
document.getElementById("data").addEventListener("submit",handleadd)