//make sure Object.create works everywhere
if(!Object.create){
	Object.create = function(obj){
		function f(){};
		f.prototype = obj;
		return new f();
	}
}

function Url(src, title){
	this.src = src;
	this.title = title;
}

Url.prototype.createElement = function(){
	var li = document.createElement("li");
	li.id = this.title;

	var link = document.createElement("a");

	link.href = this.src;
	link.innerText = this.title;

	li.appendChild(link)

	return li;
}

Url.prototype.apply = function(selector){
	var container = document.getElementById(selector);
	
	container.appendChild(this.createElement());
}

function Folder(urls, title){
	this.urls = urls || [];
	this.title = title;
}

Folder.prototype.add = function(url){
	this.urls.push(url);
}

Folder.prototype.remove = function(value){
	for (var i = this.urls.length - 1; i >= 0; i--){
        if(this.urls[i] === value)
            this.urls.splice(i, 1);
    };
}

Folder.prototype.createElement = function(){
	var container = document.createElement("div");

	var titleContainer = document.createElement("p");
	titleContainer.innerText = this.title;

	var list = document.createElement("ul");

	for(var i in this.urls){
		var el = this.urls[i].createElement();
		list.appendChild(el);
	}

	container.appendChild(titleContainer);
	container.appendChild(list);

	return container;
}

Folder.prototype.apply = function(selector){
	var container = document.getElementById(selector);
	var li = document.createElement("li");

	li.id = this.title;
	li.appendChild(this.createElement());
	container.appendChild(li);
}