function Console(){
}

Console.prototype.writeLine = function(text){

	console.log(convertString(text, arguments));
}

Console.prototype.writeError =  function(text){

	console.error(convertString(text, arguments));
}

Console.prototype.writeWarning =  function(text){

	console.warn(convertString(text, arguments));
}

function convertString(text, arguments){
	if(arguments.length == 1)
		return text.toString();

	var formatted = stringFormat.apply(formatted, arguments);

	return formatted;
}

function stringFormat(format) {
    //extracts the arguments excluding the first element which is the format string
    var args = Array.prototype.slice.call(arguments, 1);

    //uses the string.replace() method
    //uses a regex to match the values from {0} to {29} without leading a leading zero
    //uses an anonymous function where match is the placeholder string e.g {0} and number is the current index bound to this placeholder
    return format.replace(/{([0-9]|[1-2][0-9])}/g, function (match, number) {
        //checks if the argument with the specified number exists
        return typeof args[number] != 'undefined'
          ? args[number]
            // and if it does not exist keeps the placeholder value as it was
          : match
        ;
    });
};