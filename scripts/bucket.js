// On clicking remove button the item should be removed from DOM as well as localstorage.
let coffee = JSON.parse(localStorage.getItem('coffee')) || []
let total_amount=document.getElementById('total_amount')
let total;
coffee.map((ele,ind) => {
    let bucket = document.getElementById('bucket')
    let cart = document.createElement('div')
    let image = document.createElement('img')
    image.src = ele.image
    let title = document.createElement('p')
    title.innerText = ele.title
    let price = document.createElement('p')
    price.innerText = ele.price
    if(total==undefined){
        total= ele.price
    }
    else{
        total += ele.price
    }
    console.log('total:', total)
    let btn = document.createElement('button')
    btn.innerText = 'remove'
    btn.setAttribute('id', 'remove_coffee')
    btn.addEventListener('click', function () {
        coffee.splice(ind,1)
        localStorage.setItem('coffee', JSON.stringify(coffee))
        window.location.reload()
    })
    cart.append(image, title, price, btn)
    bucket.append(cart)
total_amount.innerText=total
})

document.getElementById('confirm_checkout').addEventListener('click',function(){
    window.location.href='checkout.html'
})