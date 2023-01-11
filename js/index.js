// RESPONSIVE NAV MENU
const Navy = document.querySelector('.nav-menu')
const Ham = document.querySelector('.harmburger')
const Linky = document.querySelectorAll('.nav-link')

	Ham.addEventListener("click", ()=>{
	Navy.classList.toggle("active")
	Ham.classList.toggle("active")
})
Linky.forEach(n=> n.addEventListener('click', ()=>{
	Navy.classList.remove("active")
	Ham.classList.remove("active")
}))