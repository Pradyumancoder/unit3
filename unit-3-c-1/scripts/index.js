//store the products array in localstorage as "products
function product(a,b,c,d){
    this.type=a;
    this.desc=b;
    this.price=c;
    this.image=d;

}

function product_detail(e){
    e.preventDefault()
    let form=document.getElementById("products")
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;
    // console.log("hii")
   let s1=new product(type,desc,price,image)
//    console.log(s1)
   
   let data=JSON.parse(localStorage.getItem("products"))||[];
   data.push(s1)

   localStorage.setItem("products",JSON.stringify(data))
   console.log(s1)
   window.location.reload()
}
