var count = 0;
var main = "main";
		
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
	var uText = document.createTextNode("COMMENT: "+comment);
	h3.appendChild(uText);
	h3.className = "green"
	var p = document.createElement('p');
	mainDiv.appendChild(p);
	var cText = document.createTextNode("USER ID: "+userId);
	 p.appendChild(cText);
	 p.className = "green"
	 var datee = document.createElement('p');
	 mainDiv.appendChild(datee);
	 var cDate = document.createTextNode("DATE: "+date);
	 datee.appendChild(cDate);
	 datee.className = "green"
	 deleteButton = document.createElement("button");
	 p.appendChild(deleteButton);
	 deleteText = document.createTextNode("DELETE");
	 deleteButton.appendChild(deleteText);
	 deleteButton.className = 'greenText'
	 deleteButton.setAttribute('id', main);
	 deleteButton.setAttribute('onclick',"deleteComment()");

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
	var uText = document.createTextNode("COMMENT: "+comment);
	h3.appendChild(uText);
	var p = document.createElement('p');
	mainDiv.appendChild(p);
	var cText = document.createTextNode("USER ID: "+userId);
	 p.appendChild(cText);
	 var datee = document.createElement('p');
	 mainDiv.appendChild(datee);
	 var cDate = document.createTextNode("DATE: "+date);
	 datee.appendChild(cDate);
	 deleteButton = document.createElement("button");
	 p.appendChild(deleteButton);
	 deleteText = document.createTextNode("DELETE");
	 deleteButton.appendChild(deleteText);
	 deleteButton.className = 'white'
	 deleteButton.setAttribute('id', main);
	 deleteButton.setAttribute('onclick',"deleteComment()");

	}
	
	
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

function deleteComment(){
	number = this.deleteButton.id;
	val = number+"div";
	console.log(val);
	var childNode = document.getElementById(val);
	childNode.remove(childNode);
}

