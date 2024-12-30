/* .js files add interaction to your website */
//stiky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*Fact Button*/
var factList = [
  "Roughly 1.5 million high school boys and girls in the U.S. admit to being intentionally hit or physically harmed in the last year by someone they are romantically involved with.", /*0*/

  "Teens who suffer dating abuse are subject to long-term consequences like alcoholism, eating disorders, promiscuity, thoughts of suicide, and violent behavior.",

  "1 in 3 young people will be in an abusive or unhealthy relationship. ",

  "33% of adolescents in America are victim to sexual, physical, verbal, or emotional dating abuse.",

  "In the U.S., 25% of high school girls have been abused physically or sexually. Teen girls who are abused this way are 6 times more likely to become pregnant or contract a sexually transmitted infection (STI).",
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var count = 0;

if (factButton) {
  factButton.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count ++;
  if(count == factList.length) {
    count=0;
  }
}