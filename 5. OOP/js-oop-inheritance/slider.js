function Image(title, url, thumbnailUrl){
	this.title = title;
	this.url = url;
	this.thumbnailUrl = thumbnailUrl;
	this.isSelected = false;
}

Image.prototype.src = function(){
	return this.isSelected ? this.url : this.thumbnailUrl;
}

Image.prototype.select = function(){
	this.isSelected = true;
}

Image.prototype.deselect = function(){
	this.isSelected = false;
}

function Slider(images, selector){

	var self = this;

	self.images = images;
	self.selectedIndex = 0;
	self.images[0].select();
	self.containerId = selector;

	var sliderContainer = document.getElementById(selector);

	var list = document.createElement("ul");
	var prevButton = document.createElement("button");
	var nextButton = document.createElement("button");

	prevButton.innerText = "Previous";
	nextButton.innerText = "Next";

	prevButton.addEventListener("click", function(){self.selectPrevious();});
	nextButton.addEventListener("click", function(){self.selectNext();});

	sliderContainer.appendChild(list);
	sliderContainer.appendChild(prevButton);
	sliderContainer.appendChild(nextButton);



	for(var index in images)
	{
		// var imageContainer = container;
		// var imageTitle = title;
		// var imageElement = element;

		var imageContainer = document.createElement("li");
		var imageElement = document.createElement("img");
		var imageTitle = document.createElement("p");

		imageTitle.innerText = self.images[index].title;
		imageElement.src = self.images[index].src();

		imageContainer.appendChild(imageElement);
		imageContainer.appendChild(imageTitle);

		list.appendChild(imageContainer);
	}
}

Slider.prototype.selectNext = function(){

	var oldIndex = new Number(this.selectedIndex);

	if(this.selectedIndex < this.images.length - 1){
		this.images[this.selectedIndex].deselect();
		this.images[++this.selectedIndex].select();
	}
	else{
		this.images[this.selectedIndex].deselect();
		this.images[0].select();
		this.selectedIndex = 0;
	}

	this.updateElements(oldIndex);
}

Slider.prototype.selectPrevious = function(){

	var oldIndex = new Number(this.selectedIndex);

	if(this.selectedIndex != 0){
		this.images[this.selectedIndex].deselect();
		this.images[--this.selectedIndex].select();
	}
	else{
		this.images[this.selectedIndex].deselect();
		this.selectedIndex = this.images.length - 1;
		this.images[this.selectedIndex].select();
	}

	this.updateElements(oldIndex);
}

Slider.prototype.updateElements = function(oldIndex){
	var container = document.getElementById(this.containerId);
	var list = container.childNodes[0];

	var oldImageContainer = list.childNodes[oldIndex];
	var oldImageElement = oldImageContainer.childNodes[0];
	oldImageElement.src = this.images[oldIndex].src();

	var imageContainer = list.childNodes[this.selectedIndex];
	var imageElement = imageContainer.childNodes[0];
	imageElement.src = this.images[this.selectedIndex].src();
}