const initialCats = [
	{
		clickCount: 0,
		name: "Tabby",
		imgSrc: "img/cat1.jpg",
		nicknames: [ "Tabby", "Fluffy", "Buffy" ]
	},
	{
		clickCount: 0,
		name: "Bob",
		imgSrc: "img/cat2.jpg",
		nicknames: [ "Bobby", "Bojangles", "..." ]
	},
	{
		clickCount: 0,
		name: "Sam",
		imgSrc: "img/cat3.jpg",
		nicknames: [ "Samule", "Sam I am", "something else"]
	},
	{
		clickCount: 0,
		name: "Tony",
		imgSrc: "img/cat4.jpg",
		nicknames: [ "George", "Felix", "Tom" ]
	},
	{
		clickCount: 0,
		name: "Bill",
		imgSrc: "img/cat5.jpg",
		nicknames: [ "Señor", "Taco", "Tony" ]
	}
];

const Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc= ko.observable(data.imgSrc);
	this.nicknameArray = ko.observableArray(data.nicknames);

	this.level = ko.computed(function() {
		let level;
		const clicks = this.clickCount();
		if(clicks < 10) {
			level = "infant";
		} else if(clicks < 20) {
			level = "teen";
		} else if(clicks < 30) {
			level = "adult";
		}
		return level;
	}, this);

};


const ViewModel = function() {
	const self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach( function(catItem) {
		self.catList.push( new Cat(catItem) );
	})

	this.currentCat = ko.observable( this.catList()[0]);

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}

	this.setCat = function(clickedCat) {
		self.currentCat(clickedCat);
	}

};

ko.applyBindings(new ViewModel());



























