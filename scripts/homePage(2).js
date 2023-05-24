/*this script just sets my home page to alt picture if site is reloaded*/
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
    'url(./images/home.jpg)', /*this is a goofy impage of me getting picked up by Liam*/
    'url(./images/home2.jpg)' /*this is a picture I took on the Cliff Walk in RI*/
];

var homeElement = document.getElementById('home');
if (pageReloaded() == false) {
    homeElement.style.backgroundImage = urlArray[1]; /*sets default picture – */
} else {
    homeElement.style.backgroundImage = urlArray[0]; /*sets goofy picture*/
}

homeElement.style.height = "60px";
homeElement.style.minHeight = "96vh";
homeElement.style.backgroundAttachment = "fixed";
homeElement.style.backgroundPosition = "center";
homeElement.style.backgroundRepeat = "no-repeat";
homeElement.style.backgroundSize = "cover";
homeElement.style.position = "relative";

/*if statement from https://javascript.plainenglish.io/how-to-detect-a-mobile-device-with-javascript-1c26e0002b31*/
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    homeElement.style.backgroundAttachment = "scroll";
    homeElement.style.backgroundSize = "contain";
}

console.log('homePage has worked.');