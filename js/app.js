




		
// 		var p = document.createElement('p');
// 		var header = document.createElement('h1');
// 		var whatever = document.createElement('body');
// 		var img = document.createElement('img');

// // create text
// 		var ptext = document.createTextNode("this is a p tag");
// 		var headertext = document.createTextNode("this is a h tag");

// 		img.src = "https://www.google.com/search?q=image&espv=2&biw=1366&bih=662&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj62578kOjRAhVPVWMKHSNkAR8Q_AUIBigB#imgrc=TJR1QKD1ztBW8M%3A";

// 		p.appendChild(ptext);
// 		header.appendChild(headertext);
// 		p.className = "blue";

// 		var link = document.createElement('a'); 
// 		link.href="google.com";
// 		link.textContent = "click me"
		


		// whatever.appendChild(p);
		// whatever.appendChild(img);
		// whatever.appendChild(header);


		var count = 0;
		var years = new Date();
		var months = new Date();
		var days = new Date();
		var hours = new Date();
		var minutes = new Date();
function addComment (){
	year = years.getFullYear();
	month = months.getMonth() + 1;
	day = days.getDate();
	hour = hours.getHours();
	minute = minutes.getMinutes();
	correctMinute(minute);
	date = month + " / " + day + " / " + year + "    Time: " + hour + ":" + minute; 
	count += 1;
	if ( count % 2 == 0){
		// blue text
	var userId = document.getElementById('userId').value;
	var comment = document.getElementById('comment').value;
	appendPicture(userId);
	var h3 = document.createElement('h3');
	var mainDiv = document.getElementById("main");
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
}
	if (count % 2 == 1 ){
	var userId = document.getElementById('userId').value;
	var comment = document.getElementById('comment').value;
	appendPicture(userId);
	var h3 = document.createElement('h3');
	var mainDiv = document.getElementById("main");
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

	}
	
	
}

function appendPicture(userId){
	if (userId.toLowerCase() == "william"){
		var image = document.createElement('img');
		image.setAttribute('src', 'img/libra.jpg');
		var mainBox = document.getElementById('main')
		mainBox.appendChild(image);
		return;
	} else {
		var image = document.createElement('img');
		image.setAttribute('src', 'img/happyface.png');
		var mainBox = document.getElementById('main')
		mainBox.appendChild(image);
	}
}

function correctMinute(minute){
	if (minute < 10 ){
		minute = "0"+ minute.toString();
		return minute;
	}
	return;
}





	// var text = document.createTextNode(newTask);
	// var newElement = document.createElement("li");
	// var newElementAndText = newElement.appendChild(text);
	// var node = document.getElementById('list');
	// node.appendChild(newElementAndText);




		