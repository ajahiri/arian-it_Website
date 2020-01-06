//Change to button to close landing page
function closeLanding () {
	document.getElementById("header").classList.add("standardHeader");
	document.getElementById("landing-ait-logo").classList.add("hideContent");
	document.getElementById("landing-logo-text").classList.add("hideContent");
	document.getElementById("landingDismiss").classList.add("hideContent");
  document.getElementById("main-navigation").classList.add("revealNavigation");
	//No need to unhide the content just leave it beind the landing.
	document.getElementById("page-content").classList.remove("hideContent");
	document.getElementById("page-footer").classList.remove("hideContent");
};

var existingVisitor;
document.getElementById("landingDismiss").onclick = function(){
	closeLanding()
  document.cookie = "existingVisitor = 1; path=/;";
};

if (document.cookie == "existingVisitor=1") {
  closeLanding ();
}
