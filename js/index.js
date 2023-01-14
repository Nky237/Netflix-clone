const accordionTitles = document.querySelectorAll(".accord");

accordionTitles.forEach((accordionTitle) => {
  accordionTitle.addEventListener("click", () => {
    if (accordionTitle.classList.contains("is-open")) {
      accordionTitle.classList.remove("is-open");
    } else {
      const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
      accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
        accordionTitleWithIsOpen.classList.remove("is-open");
      });
      accordionTitle.classList.add("is-open");
    }
  });
});
// RESPONSIVE NAV MENU
const Navy = document.querySelector('.nav2')
const Ham = document.querySelector('.harmburger')
const Linky = document.querySelectorAll('.nav-link')

	Ham.addEventListener("click", ()=>{
    console.log('hello')
	Navy.classList.toggle("active")
	Ham.classList.toggle("active")
})
Linky.forEach(n=> n.addEventListener('click', ()=>{
	Navy.classList.remove("active")
	Ham.classList.remove("active")
}))