'use strict';
//index.js
//Michael Knapp 
let div = document.createElement('div');

document.querySelector('body').appendChild(div);
div.innerText = "Still loading";




fetch('http://people.missouristate.edu/chadkillingsworth/csc590/calendar/?date=02/16/2018') // Call the fetch function passing the url of the API as a parameter 
	.then((data) => data.json())
	.then(function (data) {
		let the_string = "";
		let mylist = document.getElementById("mylist");
		for (let i = 0; i < data.feed.entry.length; i++) {
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(data.feed.entry[i].title.$t));
			mylist.appendChild(li);
		}
		console.log("log 2 " + the_string);
		div.parentElement.removeChild(div);
	}) // code for the api handling 


	.catch(function () {//this is where you run the code if the server returns errors . 

		div.innertext = "Error occured";
	})



