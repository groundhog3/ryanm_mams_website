/*used mozilla developer network for reference*/
/*this script sets navBar element so they are same across all pages*/
console.log('navBar.js loaded')
const element = document.createElement('navBar');
element.innerHTML = `
		<li><a href="index.html">Home</a></li>
		<li><a href="aboutme.html">About Me</a>
		<li><a href="computerscience.html">CS</a></li>
		<li><a href="french.html">French</a></li>
		<li><a href="humanities.html">Hum</a></li>
		<li><a href="mathematics.html">Math</a></li>
		<li><a href="physics.html">Physics</a></li>
		<li><a href="stem1.html">Stem I</a></li>
		<li><a href="stem2.html">Stem II</a></li>
		<li><a href="https://www.massacademy.org/students/" target="_blank">Mass Academy Page</a></li>
`;
document.getElementById('navBar').appendChild(element);


function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }