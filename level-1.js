// question 1

int num = 5;


// question 2

var person = {age: 27};


// question 3

var outOfStock = true;

	if (outOfStock == ture {
		console.log("Out of stock");
	}
	else {
		console.log("In stock);
	}


// question 4

var numberArray = [1, 2, 3, 4, 5];

for(var i=0; i < numberArray.length; i++) {
	console.log(numberArray[i]);
}


// question 5

for (var i = 15; i < 26; i ++) {
     console.log(i);   
}


// question 6

for (var i = 15; i < 26; i ++) {
     if (i === 20) {
        console.log(i);   
     }
}


// question 7

var dogArray = [
	{
		color: "white",
		age: 4,
		purebreed: true
	},

	{	color: "brown",
		age: 6,
		purebreed: false
	}
];
	
for(var i = 0; i < dogArray.length; i++) {
	console.log(dogArray[i].age);
	console.log(dogArray[i].purebreed);
}


// question 8

function whatDontLike (dislike) {
	console.log("I don't like " + dislike);
}

whatDontLike("pineapples on pizza");


// question 9

function twoArguments (argument1, argument2) {
	var sum = argument1 - argument2;
	console.log(sum);
}

twoArguments (15,10);


// question 10

var emptyArray = [];

function oneArgument (argument1) {
	var sum = argument1 + emptyArray;
	console.log(sum);
}

oneArgument ("apples");
