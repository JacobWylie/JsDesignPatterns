const Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Toby');
	this.imgSrc= ko.observable('img/cat1.jpg');
	this.infant = ko.observable('Infant');
	this.teen = ko.observable('Teen');
	this.adult = ko.observable('Adult');

	this.level = ko.computed(function() {
		if(this.clickCount() < 10) {
			return this.infant();
		} else if(this.clickCount() < 20) {
			return this.teen();
		} else if(this.clickCount() < 30) {
			return this.adult()
		}
	}, this);

	this.nicknameArray = ko.observableArray([
		{ name: 'Kitty' },
		{ name: "Tabby" },
		{ name: "Fluffy" }
	]);
};


const ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount() + 1);
	}

};

ko.applyBindings(new ViewModel());