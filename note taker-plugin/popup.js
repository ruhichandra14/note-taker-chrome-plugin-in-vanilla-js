var noteTakerApp = (function(){

	var init = function(){

		var retrievedData,mainContainer,startButton;
		retrievedData = localStorage.getItem("notesData");

		if(retrievedData){
			resumeSession(retrievedData);
		}

		mainContainer = document.getElementById("main-container");
		startButton = document.getElementById('start-button');
		
		
		startButton.addEventListener('click', function() {
			var notesContainer = document.createElement("textarea");
			notesContainer.setAttribute("id", "new-note");
			mainContainer.appendChild(notesContainer);
			startButton.remove();
			notesContainer.addEventListener("blur",function(event){
				storeData(event);
			});
		});
	}


	var storeData = function(){
		if(typeof(Storage) !== "undefined"){
			localStorage.setItem("notesData", event.target.value)
		}
	}


	var resumeSession = function(retrievedData){
		var resumeButton;
		document.getElementById("start-button").innerHTML = "Resume > >";
		if(document.getElementById("start-button").innerHTML.indexOf("Resume") > -1){
			resumeButton = document.getElementById("start-button");
		}
		resumeButton.addEventListener("blur",function(event){
			document.getElementById("new-note").innerHTML = retrievedData;
			if(event.target.value){
				storeData(event);
			}
		});	
	}

	return{
		init : init
	}

})();


document.addEventListener('DOMContentLoaded', function() {
	noteTakerApp.init();
})
