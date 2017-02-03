var count = 0;
var main = "main";
var oneDeleteButton = 0;
var opaque = 0;

function addComment (){
	var years = new Date();
	var months = new Date();
	var days = new Date();
	var hours = new Date();
	var minutes = new Date();
	year = years.getFullYear();
	month = months.getMonth() + 1;
	day = days.getDate();
	hour = hours.getHours();
	minute = minutes.getMinutes();
	mint = fixMinute(minute);
	date = month + " /" + day + "/" + year + "    Time: " + hour + ":" + mint; 
	count += 1;
	picture = Math.floor(Math.random() * 9) + 1;
	images = 'img/' + picture + '.jpg';
	$('#body').attr("background", images);
	if ( count % 2 == 0){
		// blue text
	var userId = document.getElementById('userId').value;
	var comment = document.getElementById('comment').value;
	divTree = document.createElement('div');
	master = document.getElementById("master");
	master.appendChild(divTree);
	main = count;
	divId = main + "div";
	divTree.setAttribute('id', divId);
	divTree.setAttribute('class', "col-md-12 text-center");
	appendPicture(userId);
	var h3 = document.createElement('h3');
	var mainDiv = document.getElementById(divId);
	mainDiv.appendChild(h3);
	var uText = document.createTextNode(comment);
	h3.appendChild(uText);
	h3.className = "green"
	var p = document.createElement('p');
	mainDiv.appendChild(p);
	var cText = document.createTextNode("USER ID: "+userId);
	 p.appendChild(cText);
	 p.className = "green"
	 var datee = document.createElement('p');
	 mainDiv.appendChild(datee);
	 var cDate = document.createTextNode("DATE: " + date);
	 datee.appendChild(cDate);
	 datee.className = "green"
	 if (oneDeleteButton < 1 ){
		 deleteButton = document.createElement("button");
		 p.appendChild(deleteButton);
		 deleteText = document.createTextNode("DELETE LAST COMMENT");
		 deleteButton.appendChild(deleteText);
		 deleteButton.className = 'greenText'
		 deleteButton.setAttribute('id', main);
		 oneDeleteButton = oneDeleteButton + 1
     }
	 $('#' + main).click(function(){
	 		$('#' + main + 'div').remove();
	 		main = main - 1;
	 		count = count - 1;
	 		if (main == 0){
	 			oneDeleteButton = 0;
	 		}
		});
}
	if (count % 2 == 1 ){
	var userId = document.getElementById('userId').value;
	var comment = document.getElementById('comment').value;
	divTree = document.createElement('div');
	master = document.getElementById("master");
	master.appendChild(divTree);
	main = count;
	divId = main + "div";
	divTree.setAttribute('id', divId);
	divTree.setAttribute('class', "col-md-12 text-center");
	appendPicture(userId);
	var h3 = document.createElement('h3');
	var mainDiv = document.getElementById(divId);
	mainDiv.appendChild(h3);
	var uText = document.createTextNode(comment);
	h3.appendChild(uText);
	var p = document.createElement('p');
	mainDiv.appendChild(p);
	var cText = document.createTextNode("USER ID: "+userId);
	 p.appendChild(cText);
	 var datee = document.createElement('p');
	 mainDiv.appendChild(datee);
	 var cDate = document.createTextNode("DATE: "+date);
	 datee.appendChild(cDate);
	 if (oneDeleteButton < 1 ){
	 deleteButton = document.createElement("button");
	 p.appendChild(deleteButton);
	 deleteText = document.createTextNode("DELETE LAST COMMENT");
	 deleteButton.appendChild(deleteText);
	 deleteButton.className = 'white'
	 deleteButton.setAttribute('id', main);
	 // making sure to add a delete button
	 oneDeleteButton = oneDeleteButton + 1;
	}

	//removing last comment
	 $('#' + main).click(function(){
	 		$('#' + main + 'div').remove();
	 		main = main - 1;
	 		count = count - 1;
	 		if (main == 0){
	 			oneDeleteButton = 0;
	 		}
	});
	
	
}

function appendPicture(userId){
	if (userId.toLowerCase() == "william"){
		var image = document.createElement('img');
		image.setAttribute('src', 'img/libra.jpg');
		var mainBox = document.getElementById(divId)
		mainBox.appendChild(image);
		return;
	} else {
		var image = document.createElement('img');
		image.setAttribute('src', 'img/happyface.png');
		var mainBox = document.getElementById(divId)
		mainBox.appendChild(image);
	}
}

function fixMinute(minute){
	if (minute < 10 ){
		minute = minute.toString();
		minute = "0" + minute;
		console.log(minute);
		return minute;
	}
	return minute;
}
}

	$("#hide").click(function(){
    $("#master").toggle();
});



