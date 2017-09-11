///////////////////////////
// Model
///////////////////////////

const model = {
	
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Tabby',
			imgSrc: 'img/cat1.jpg'
		},
		{
			clickCount: 0,
			name: 'Tiger',
			imgSrc: 'img/cat2.jpg'
		},
		{
			clickCount: 0,
			name: 'Fluffy',
			imgSrc: 'img/cat3.jpg'
		},
		{
			clickCount: 0,
			name: 'Hairball',
			imgSrc: 'img/cat4.jpg'
		},
		{
			clickCount: 0,
			name: 'Scout',
			imgSrc: 'img/cat5.jpg'
		},
	]

};

///////////////////////////
// Controller
///////////////////////////

const controller = {

	init: function() {
		// set our current cat to the first one in the list
		model.currentCat = model.cats[0];

		// tell our views to initialize
		listView.init();
		view.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	// set the currently-selected cat to the object passed in
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	// increments the counter for the currently-selected cat
	incrementCounter: function() {
		model.currentCat.clickCount++;
		view.render();
	}

};

///////////////////////////
// View
///////////////////////////

const view = {

	init: function() {
		// store pointers to our DOM elements for easy access later
		this.catElem = document.querySelector('#cat');
		this.catNameElem = document.querySelector('#cat-name');
		this.catImageElem = document.querySelector('#cat-img');
		this.countElem = document.querySelector('#cat-count');

		// on click, increment the current cat's counter
		this.catImageElem.addEventListener('click', function(e) {
			controller.incrementCounter();
		});

		// render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function() {
		// update the DOM elements with values from the current cat
		let currentCat = controller.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}

};

const listView = {

	init: function() {
		// store the DOM element for easy access later
		this.catListElem = document.querySelector('#cat-list');

		//render this view (update the DOM elements with the right values)
		this.render();
	},

	render: function() {
		let cat, elem;
		// get the cats we'll be rendering from the octopus
		let cats = controller.getCats();

		// empty the cat list
		this.catListElem.innerHTML = '';

		// loop over the cats
		for (i = 0; i < cats.length; i++) {
			// this is the cat we're currently looping over
			cat = cats[i];

			// make a new cat list item and set its text
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// on click, setCurrentCat and render the catView
			// (this uses our closure-in-a-loop trick to connect the value
			// of the cat variable to the click event function)
			elem.addEventListener('click', (function(catCopy) {
				return function() {
					controller.setCurrentCat(catCopy);
					view.render();
				}
			})(cat));

			// finally, add the element to the list
			this.catListElem.appendChild(elem);
		}
	}

};

// make it go
controller.init();








































