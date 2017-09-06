///////////////////////////////////////////////////
// One cat to click on - No Names
///////////////////////////////////////////////////

// const cat = document.querySelector('img');
// const count = document.querySelector('.count');
// let i = 0;

// function catClicker() {
// 	i = i + 1;
// 	count.textContent = i;
// }

// cat.addEventListener('click', catClicker);


///////////////////////////////////////////////////
// Two cats to click on - Cats have  Names
///////////////////////////////////////////////////

const cat = document.querySelectorAll('.cat');
let i = 0;

function catClicker() {
	count = this.parentNode.querySelector('.count');
	i = Number(count.textContent) + 1;
	i.toString();
	count.textContent = i;
}

cat.forEach( cat => {
	cat.querySelector('img').addEventListener('click', catClicker);
});
