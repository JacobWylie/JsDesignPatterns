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

// const cat = document.querySelectorAll('.cat');
// let i = 0;

// cat.forEach( cat => {
// 	cat.querySelector('img').addEventListener('click', (function(i) {
// 		return function() {
// 			i++;
// 			this.parentNode.querySelector('.count').textContent = i;
// 		};
// 	})(i));
// });


////////////////////////////////////////////////////////////////////////
// List of cats - display cat when clicked along with specific counter
////////////////////////////////////////////////////////////////////////

const catList = document.querySelectorAll('.catList');
const cats = document.querySelectorAll('.cat');
let i = 0;

// click list to display cats
catList.forEach( catList => {
	catList.addEventListener('click', function() {
		if(!this.classList.contains('selected')) {
			this.classList.add('selected');
		};
	})
})

// counter for each cat on page
cats.forEach( cat => {
	cat.querySelector('img').addEventListener('click', (function(i) {
		return function() {
			i++;
			this.parentNode.querySelector('.count').textContent = i;
		};
	})(i));
});




























