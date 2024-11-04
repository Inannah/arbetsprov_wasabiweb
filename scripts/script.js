var tabContents = document.getElementsByClassName("tab-content");
var tabButtons = document.getElementsByClassName("tab-button");
var active = document.getElementsByClassName("active");
var details = document.getElementById("hidden-menu");
var summary = document.getElementById("hidden-menu-title");

//Starta med att visa nuv. aktiv
(function(){
	let id = active[0].getAttribute('data-id');
	document.getElementById(id).style.display = "block";
}());

//Klick-lyssnare
for (i=0; i< tabButtons.length; i++){
	let btn = tabButtons[i];
	btn.addEventListener("click", (e) => {
		let dataId = btn.getAttribute('data-id');
		openTab(e, dataId);
		if (details.open){
			details.removeAttribute('open');
		}
	});
}

//Öppna innehåll
function openTab(e, id){
	//Nollställer visning av innehåll
	
	for (i=0; i< tabContents.length; i++){
		tabContents[i].style.display = "none";
	}
	
	//Nollställer aktiv tab-button
	for (i=0; i< tabButtons.length; i++){
		tabButtons[i].className = tabButtons[i].className.replace(" active", "");
	}
	
	//Visa valt innehåll
	document.getElementById(id).style.display = "block";
	
	//Sätt vald knapp till aktiv
	e.currentTarget.className += " active";
}

//Ändra utseende vid öppning av meny
details.addEventListener("toggle", (event) => {
  if (details.open) {
    document.getElementById("marker").innerHTML = "&#8659;";
  } else {
    document.getElementById("marker").innerHTML = "&#8658;";
  }
});