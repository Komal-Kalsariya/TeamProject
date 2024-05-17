import postdata from "../API/post.js"


const handleadd=(e)=>{
    e.preventDefault()

    let product={
            title:document.getElementById("name").value,
            img:document.getElementById("img").value,
            cate:document.getElementById("cate").value,
            price:document.getElementById("price").value
    }
    postdata("http://localhost:3000/product",product)
    console.log(product);
}
document.getElementById("product_data").addEventListener("submit",handleadd)