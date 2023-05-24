/*this script just sets my EC page to alt picture if site is reloaded*/
/*this function detects if page has been reloaded. 
Idea from: https://stackoverflow.com/questions/47068150/how-to-detect-browser-refresh-or-close/47068580*/
function pageReloaded() {
    /*detects if page has been reloaded*/
    if (performance.navigation.type == 1) {
        return true;
    }
    /*page hasn't been reloaded*/
    else {
        return false;
    }
}

/*this page sets a random image for the home page*/
let urlArray = [
    'url(./images/ec_parallax.jpg)', /*this is my picture I took during photography*/
    'url(./images/ec_parallax2.jpeg)' /*this is a goofy picture of Sashank and Anush*/
];

var ec_elem = document.getElementById('ec');
if (pageReloaded() == false) {
    ec_elem.style.backgroundImage = urlArray[0]; /*sets default picture*/
} else {
    ec_elem.style.backgroundImage = urlArray[1]; /*sets goofy picture*/
}

ec_elem.style.height = "60px";
ec_elem.style.minHeight = "96vh";
ec_elem.style.backgroundAttachment = "fixed";
ec_elem.style.backgroundPosition = "center";
ec_elem.style.backgroundRepeat = "no-repeat";
ec_elem.style.backgroundSize = "cover";
ec_elem.style.position = "relative";
/*if statement from https://javascript.plainenglish.io/how-to-detect-a-mobile-device-with-javascript-1c26e0002b31*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    ec_elem.style.backgroundAttachment = "scroll";
    ec_elem.style.backgroundSize = "contain";
}

console.log('homePage has worked.');