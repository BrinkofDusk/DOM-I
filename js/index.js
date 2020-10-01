const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": ["DOM <br> Is <br> Awesome"],
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.getElementsByTagName('a');
console.log(nav)
//  console.log(nav[0]);
 nav[0].innerHTML = siteContent['nav']['nav-item-1'];
 nav[1].innerHTML = siteContent['nav']['nav-item-2'];
 nav[2].innerHTML = siteContent['nav']['nav-item-3'];
 nav[3].innerHTML = siteContent['nav']['nav-item-4'];
 nav[4].innerHTML = siteContent['nav']['nav-item-5'];
 nav[5].innerHTML = siteContent['nav']['nav-item-6'];


console.log(nav[0]);
// console.log(nav[3]);


let heading = document.getElementsByTagName('h1');
heading[0].innerHTML = siteContent['cta']['h1'];
let buttonText = document.getElementsByTagName('button');
buttonText[0].innerHTML = siteContent['cta']['button'];
let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src']);
let mainContent = document.getElementsByTagName('h4');
mainContent[0].innerHTML = siteContent['main-content']['features-h4'];
mainContent[1].innerHTML = siteContent['main-content']['about-h4'];
mainContent[2].innerHTML = siteContent['main-content']['services-h4'];
mainContent[3].innerHTML = siteContent['main-content']['product-h4'];
mainContent[4].innerHTML = siteContent['main-content']['vision-h4'];

let text = document.getElementsByClassName(' text-content');
text[0].childNodes[3].innerHTML = siteContent['main-content']['features-content'];
text[1].childNodes[3].innerHTML = siteContent['main-content']['about-content'];
text[2].childNodes[3].innerHTML = siteContent['main-content']['services-content'];
text[3].childNodes[3].innerHTML = siteContent['main-content']['product-content'];
text[4].childNodes[3].innerHTML = siteContent['main-content']['vision-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let botContent = document.getElementsByClassName('contact');
botContent[0].childNodes[1].innerHTML = siteContent['contact']['contact-h4'];
botContent[0].childNodes[3].innerHTML = siteContent['contact']['address'];
botContent[0].childNodes[5].innerHTML = siteContent['contact']['phone'];
botContent[0].childNodes[7].innerHTML = siteContent['contact']['email'];

let footer = document.getElementsByTagName('footer');
footer[0].childNodes[1].innerHTML = siteContent['footer']['copyright'];