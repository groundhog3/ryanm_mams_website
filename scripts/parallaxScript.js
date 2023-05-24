/*used mozilla developer network for reference*/
/*code tutorial from https://www.w3schools.com/howto/howto_css_parallax.asp*/
/*this javascript function finds parallax id's and sets background image for them*/
console.log('parallaxScript has loaded.');

/*this array stores all the parallax ids that this script needs to check in html*/
let parallaxArray = [
    'aboutme-parallax',
    'hobbiesEcs-parallax',
    'cs-parallax',
    'french-parallax',
    'hum-parallax',
    'math-parallax',
    'physics-parallax',
    'stem1-parallax',
    'stem2-parallax',
];

/*these images are all from pexels.com. Not my own.*/
let parallaxURL = [
    'url(./images/aboutme_parallax.jpg)',
    'url(./images/hobbiesEcs_parallax.jpg)',
    'url(./images/cs_parallax.jpg)',
    'url(./images/french_parallax.jpg)',
    'url(./images/hum_parallax.jpg)',
    'url(./images/math_parallax.jpg)',
    'url(./images/physics_parallax.jpg)',
    'url(./images/stem1_parallax.jpg)',
    'url(./images/stem2_parallax.jpg)',
];

/*this for loop loops through both arrays and sets CSS if element is found*/
for (let i = 0; i < parallaxArray.length; i++) {
    var parallaxElement = document.getElementById(parallaxArray[i]);
    /*if js can find the element, it applies the style, done to prevent errors*/
    if (typeof(parallaxElement) != 'undefined' && parallaxElement != null) {
        parallaxElement.style.backgroundImage = parallaxURL[i];
        parallaxElement.style.height = "60px";
        parallaxElement.style.minHeight = "96vh";
        parallaxElement.style.backgroundAttachment = "fixed";
        parallaxElement.style.backgroundPosition = "center";
        parallaxElement.style.backgroundRepeat = "no-repeat";
        parallaxElement.style.backgroundSize = "cover";
        parallaxElement.style.position = "relative";
         /*if statement from https://javascript.plainenglish.io/how-to-detect-a-mobile-device-with-javascript-1c26e0002b31*/
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
             parallaxElement.style.backgroundAttachment = "scroll";
             parallaxElement.style.backgroundSize = "contain";
        }
        console.log(parallaxArray[i] + ' has successfully loaded.');
    }
}