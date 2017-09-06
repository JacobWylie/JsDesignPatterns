const cat = document.querySelector('.cat');
const count = document.querySelector('.count');
let i = 0;

function catClicker() {
	i = i + 1;
	count.textContent = i;
}

cat.addEventListener('click', catClicker);