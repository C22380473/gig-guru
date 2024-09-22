/*
Student name and number: Jenied Sayago, C22380473
*/

{
  let text = document.getElementById("inputFirstName");

  if (text) {
    text.addEventListener("input", (event) => {
      if (text.validity.valueMissing) {
        text.setCustomValidity("Your First name is required!");
        text.reportValidity();
      } else {
        text.setCustomValidity("");
      }
    });
  }
}

{
  let text = document.getElementById("inputLastName");
  if (text) {
    text.addEventListener("input", (event) => {
      if (text.validity.valueMissing) {
        text.setCustomValidity("Your Last name is required!");
        text.reportValidity();
      } else {
        text.setCustomValidity("");
      }
    });
  }
}

{
  let text = document.getElementById("inputMessage");
  if (text) {
    text.addEventListener("input", (event) => {
      if (text.validity.valueMissing) {
        text.setCustomValidity("Message is required!");
        text.reportValidity();
      } else {
        text.setCustomValidity("");
      }
    });
  }
}

{
  let text = document.getElementById("inputCity");
  if (text) {
    text.addEventListener("input", (event) => {
      if (text.validity.valueMissing) {
        text.setCustomValidity("City is required!");
        text.reportValidity();
      } else {
        text.setCustomValidity("");
      }
    });
  }
}

const email = document.getElementById("inputEmail");

if (email) {
  email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("Invalid e-mail address!");
      email.reportValidity();
    } else if (email.validity.valueMissing) {
      email.setCustomValidity("Your e-mail address is required!");
      email.reportValidity();
    }
    else {
      email.setCustomValidity("");
    }

  });
}
const checkbox = document.getElementById("flexCheckDefault");

if (checkbox) {
  checkbox.addEventListener("input", (event) => {

    if (checkbox.validity.valueMissing) {
      checkbox.setCustomValidity("Must agree before submitting!");
      checkbox.reportValidity();
    }
    else {
      checkbox.setCustomValidity("");
    }

  });
}

//rand artist
console.log('loaded');

let btnGig = document.querySelector(".btn-gig");

if (btnGig) {
  btnGig.addEventListener('click', function () {

    let title = ['You got...']
    let displayTitle = document.querySelector('.card-titlerdm');
    displayTitle.innerHTML = title;

    //random gig
    let gigs = ['Chase Atlantic', '5 Seconds of Summer', 'COIN', 'Inhaler', 'The Band CAMINO', 'Wet Leg', 'The Weeknd', 'Arctic Monkeys', 'The 1975', 'The Vamps', 'Kehlani', 'Wallows', 'Beabadoobee']


    let rand = Math.floor(Math.random() * gigs.length);
    let randomGig = gigs[rand]
    let displayGig = document.querySelector('.the-gig');
    displayGig.innerHTML = randomGig;

  })

}

//Coachella Countdown
// Set the date we're counting down to
let countDownDate = new Date("April 14, 2023 11:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}