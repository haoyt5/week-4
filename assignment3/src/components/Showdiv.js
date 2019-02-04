var togglebutton = document.getElementById("btn-show");
var showcontent = document.getElementById("show-box");

togglebutton.addEventListener("click", function(){
	showcontent.style.display = (showcontent.dataset.toggled ^= 1)? "block" : "none";
});


//   <h1 id='welcome-text-change' onclick='changeText()' className='u-text-center welcome-text u-pointer'>Welcome Message</h1>
function changeText() {
	var change = document.getElementById('welcome-text-change");
 	if (change.innerHTML == "Welcome Message"){
 		change.innerHTML = "Have a Good Time!";
    } else {
		change.innerHTML = "Welcome Message";
    }
}