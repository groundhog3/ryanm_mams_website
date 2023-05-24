/*this script just sets my about me page to alt picture if site is reloaded*/
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
    'url(./images/aboutme_parallax.jpg)', /*this is my own picture*/
    'url(./images/aboutme_parallax2.png)' /*this is a goofy picture of me getting picked up at semi*/
];

var aboutme_elem = document.getElementById('aboutme');
if (pageReloaded() == false) {
    aboutme_elem.style.backgroundImage = urlArray[0]; /*sets default picture*/
} else {
    aboutme_elem.style.backgroundImage = urlArray[1]; /*sets goofy picture*/
}

aboutme_elem.style.height = "60px";
aboutme_elem.style.minHeight = "96vh";
aboutme_elem.style.backgroundAttachment = "fixed";
aboutme_elem.style.backgroundPosition = "center";
aboutme_elem.style.backgroundRepeat = "no-repeat";
aboutme_elem.style.backgroundSize = "cover";
aboutme_elem.style.position = "relative";
/*if statement from https://javascript.plainenglish.io/how-to-detect-a-mobile-device-with-javascript-1c26e0002b31*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    aboutme_elem.style.backgroundAttachment = "scroll";
    aboutme_elem.style.backgroundSize = "contain";
}

console.log('homePage has worked.');