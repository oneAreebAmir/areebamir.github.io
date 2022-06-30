
// Changing of icon in navbar
let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');

menu.onclick = function(){
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// Changing the color of the root in css when click on D button
let btn =  document.querySelector('.button');
let root = document.querySelector(':root');
let sec = document.querySelector('section'); 

btn.onclick = function(){
    if (btn.innerText === "D") {
        btn.innerText = "L";
        alert('You are now using dark mode.');
        root.style.setProperty('--color1', 'rgb(236, 229, 229)');
        root.style.setProperty('--color2', '#fff');
        root.style.setProperty('--color3', '#fff')
        root.style.setProperty('--color4', '#555');
        root.style.setProperty('--color5', '#666');
        root.style.setProperty('--color7','#666');
        root.style.setProperty('--color8', 'black');        
        document.body.style.backgroundColor = "#666";
        sec.style.color = "white";
    }
    else if (btn.innerText === "L") {
        btn.innerText = "D"
        alert('You are now using Light mode.')
        root.style.setProperty('--color1', '#1a0f0f');
        root.style.setProperty('--color2', '#666');
        root.style.setProperty('--color3', '#555');
        root.style.setProperty('--color4', '#fff');
        root.style.setProperty('--color5', 'rgb(236, 229, 229)');
        root.style.setProperty('--color6', '0 .5rem 1.5rem rgba(0,0,0,.1)');
        root.style.setProperty('--color7','#eee');
        root.style.setProperty('--color8', '#eed9d9');
        document.body.style.backgroundColor = "#eee";
        sec.style.color = "#1a0f0f";
    }
}

// The transmission of the "active" class in navbar when scrolling the document
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });
}

// Cookie of the document. The following codes take the input the input of the user. And alert them "welcome back" with user name when specified user came back to website 
function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
// function eCookie() {
//   let user = getCookie("username");
//   if (user != "") {
//     alert("Welcome again " + user);
//   } else {
//     user = prompt("Please enter your name:","");
//     if (user != "" && user != null) {
//       setCookie("username", user, 30);
//     }
//   }
// }


// The dispalying toggles of PopUp 
let pop_box = document.querySelector('.service .box .pop')
function displayPoper(){
  pop_box.style.display = "flex";
}
function closePop(){
  pop_box.style.display = "none"
}

let c_soon = document.querySelector('.service .box .c_soon')
function c_soon_display(){
  c_soon.style.display = "flex";
}
function c_soon_close(){
  c_soon.style.display = "none";
}

// Code for Recaptcha for verification of a user to access the email
let hidder = document.querySelector('.contact p');
let recap = document.querySelector('#example3');
let verifyCallback = function() {
  alert('Recaptcha Verified');
  hidder.removeAttribute('hidden');
  recap.style.display = "none";
};

var onloadCallback = function() {
  grecaptcha.render('example3', {
    'sitekey' : '6LcJDDseAAAAADblWwYsEeodON2F1YsP2-IBiHw0',
    'callback' : verifyCallback
  });
};


// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// ga('create', 'googlefdcf6df087020336', 'auto');
// ga('send', 'pageview');

