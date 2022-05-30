// Add the coffee to local storage with key "coffee"
async function search(){
    try{
        const res=await fetch('https://masai-mock-api.herokuapp.com/coffee/menu')
        const result=await res.json()
        const data=result.menu.data
        console.log('data:', data)
        append(data)
    }
    catch(err){
        console.log(err)
    }
}
search()
let coffee_count=document.getElementById('coffee_count')
function append(data){
    let coffee=JSON.parse(localStorage.getItem('coffee'))||[]
coffee_count.innerText=coffee.length
data.map((ele)=>{
let menu=document.getElementById('menu')
let cart=document.createElement('div')
let image=document.createElement('img')
image.src=ele.image
let title=document.createElement('p')
title.innerText=ele.title
let price=document.createElement('p')
price.innerText=ele.price
let btn=document.createElement('button')
btn.innerText='Add to Bucket'
btn.setAttribute('id','add_to_bucket')
btn.addEventListener('click',function(){
    coffee.push(ele)
    localStorage.setItem('coffee',JSON.stringify(coffee))
    window.location.reload()
})
cart.append(image,title,price,btn)
menu.append(cart)
})
}
