/*this script sets navBar element so they are same across all pages*/

console.log('navBar_copy.js loaded');
const myNav = document.getElementById('myNav');
const topBar = document.getElementById('topBar');

/*This event listener will call reoload() to reload the HTML to use the curtain menu only on small screen sizes*/
window.addEventListener('resize', resize);

myNav.innerHTML = `
	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	<div class="overlay-content">
	<a href="aboutme.html">About Me</a>
	<a href="extracurriculars.html">ECs</a>
	<a href="computerscience.html">CS</a>
	<a href="french.html">French</a>
	<a href="humanities.html">Hum</a>
	<a href="mathematics.html">Math</a>
	<a href="physics.html">Physics</a>
	<a href="stem1.html">Stem I</a>
	<a href="stem2.html">Stem II</a>
	<a href="https://www.massacademy.org/students/" target="_blank">Mass Academy Page</a>
	</div>
`;

resize();

/*Function used to open the curtain menu*/
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }

 /*Function used to close the curtain menu*/
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }

/*This function will reload the HTML to use the curtain menu only on small screen sizes*/
function resize() {
	/*if statement from https://javascript.plainenglish.io/how-to-detect-a-mobile-device-with-javascript-1c26e0002b31*/
	/*detects mobile device or small screen*/
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)|| window.innerWidth < 1000) {
		console.log('This worked')
		topBar.innerHTML = `
		<a href="index.html" class="fa fa-home"></a>
		<p style="cursor:pointer" onclick="openNav()">Menu &#9776 </p>
	`;
		topBar.innerHTML.reload;	
	}
	/*else is just uses the regular menu*/
	else{
		topBar.innerHTML = `
		<a id="home-button" href="index.html" class="fa fa-home"></a>
		<a href="aboutme.html">About Me</a>
		<a href="extracurriculars.html">ECs</a>
		<a href="computerscience.html">CS</a>
		<a href="french.html">French</a>
		<a href="humanities.html">Hum</a>
		<a href="mathematics.html">Math</a>
		<a href="physics.html">Physics</a>
		<a href="stem1.html">Stem I</a>
		<a href="stem2.html">Stem II</a>
		<p style="cursor:pointer" onclick="openNav()">Menu &#9776 </p>
	`;
		topBar.innerHTML.reload;	
	}
}

