function pagination() {
  var text =
    '<div class="center">' +
    '<div class="pagination"> <a href="#">&laquo;</a>' +
    '<a href="https://www.oyuna-erica.com/blog">1</a>' +
    '<a href="https://www.oyuna-erica.com/blog2">2</a>' +
    '<a href="https://www.oyuna-erica.com/blog3">3</a>' +
    '<a href="https://www.oyuna-erica.com/blog4">4</a>' +
    '<a href="https://www.oyuna-erica.com/blog5">5</a>' +
    '<a href="https://www.oyuna-erica.com/blog6">6</a>' +
    '<a href="https://www.oyuna-erica.com/blog7">7</a>' +
    '<a href="https://www.oyuna-erica.com/blog8">8</a>' +
    '<a href="https://www.oyuna-erica.com/blog9">9</a>' +
    '<a href="https://www.oyuna-erica.com/blog10">10</a>' +
    '<a href="https://www.oyuna-erica.com/blog11">11</a>' +
    '<a href="https://www.oyuna-erica.com/blog12">12</a>' +
    '<a href="https://www.oyuna-erica.com/blog13">13</a>' +
    '<a href="https://www.oyuna-erica.com/blog14">14</a>' +
    '<a href="https://www.oyuna-erica.com/blog15">15</a>' +
    '<a href="https://www.oyuna-erica.com/blog16">16</a>' +
    '<a href="https://www.oyuna-erica.com/blog17">17</a>' +
    '<a href="https://www.oyuna-erica.com/blog18">18</a>' +
    '<a href="https://www.oyuna-erica.com/blog19">19</a>' +
    '<a href="https://www.oyuna-erica.com/blog20">20</a>' +
    '<a href="https://www.oyuna-erica.com/blog21">21</a>' +
    '<a href="https://www.oyuna-erica.com/blog22">22</a>' +
    '<a href="#">&raquo;</a> </div>' +
    "</div>";

  document.write(text);
}

function navigation() {
  var text1 =
    '<div class="topnav" id="myTopnav">' +
    '<a href="https://www.oyuna-erica.com/">Home</a>' +
    '<a href="https://www.oyuna-erica.com/about">About</a>' +
    '<a href="https://www.oyuna-erica.com/store">Store</a>' +
    '<a href="https://www.oyuna-erica.com/tourism">TourNZ</a>' +
    '<a href="https://www.oyuna-erica.com/previous_webinar">Webinar</a>' +
    '<a href="https://www.oyuna-erica.com/product">Product</a>' +
    '<a href="https://www.oyuna-erica.com/event">Event</a>' +
    '<a href="https://www.oyuna-erica.com/blog">Blog</a>' +
    '<a href="https://www.oyuna-erica.com/english-lesson23568318">Free Training</a>' +
    '<a href="https://www.oyuna-erica.com/affiliate_page">Affiliate</a>' +
    '<a href="https://www.oyuna-erica.com/login">Login</a>' +
    '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>' +
    "</div>";

  document.write(text1);
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function myFunction12(p1, p2) {
    return p1 + p2;
}



