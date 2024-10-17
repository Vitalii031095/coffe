let search = document.querySelector('.search-form')

document.getElementById('search-btn').onclick = ()=>{
	search.classList.toggle('active')
	cartItem.classList.remove('active')
	responsNav.classList.remove('active')
}


let cartItem = document.querySelector('.cart-items-container')
document.getElementById('cart-btn').onclick = ()=>{
	cartItem.classList.toggle('active')
	search.classList.remove('active')
	responsNav.classList.remove('active')
}

let responsNav = document.querySelector('.navbar')
document.getElementById('menu-btn').onclick = ()=>{
	responsNav.classList.toggle('active')
	cartItem.classList.remove('active')
	search.classList.remove('active')
}


document.addEventListener('scroll', ()=>{
	var header = document.querySelector('.header')
	if(document.documentElement.scrollTop > 50){
		header.classList.add('active')
	} else{
		header.classList.remove('active')
	}
})

// scroll start
let calcScrollValue = ()=>{
	let scrollProgress = document.getElementById("progress");
	let pos = document.documentElement.scrollTop;
	let calcHeight =
	  document.documentElement.scrollHeight -
	  document.documentElement.clientHeight;
	let scrollValue = Math.round((pos * 100) / calcHeight);
	if (pos > 100) {
		scrollProgress.style.display = "flex";
	 } else {
		scrollProgress.style.display = "none";
	 }
  
	 scrollProgress.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	 });
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


AOS.init();