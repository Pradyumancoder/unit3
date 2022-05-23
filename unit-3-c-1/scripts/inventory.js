product()

function product(){
    let data=JSON.parse(localStorage.getItem("products"))||[];
    let container=document.getElementById("all_products")
 container.innerHTML=null;
    
data.forEach(function (el,index){
   let div=document.createElement("div");
   let img=document.createElement("img");
   img.src=el.image;
   let type=document.createElement("p");
   type.innerText=el.type;
   let desc=document.createElement("p")
   desc.innerText=el.desc;
   let price=document.createElement("p");
   price.innerText=el.price;

   let btn=document.createElement("button")
   btn.innerText="Remove"
    
   btn.addEventListener("click",function(){
       remove(el,index)
   })
   div.append(img,type,desc,price,btn)
   container.append(div)

   function remove(el,index){
    console.log(el,index)
   data.splice(index,1)
   console.log(data)
   localStorage.setItem("products",JSON.stringify(data))
   window.location.reload();
//   localStorage.setItem("button",JSON.stringify(data))
  
  }



})


}



     
    
 