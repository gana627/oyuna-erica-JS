function pagination() {
  var text =
    '<div class="center"><div class="pagination"> <a href="#">&laquo;</a>' +
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
    '<a href="https://www.oyuna-erica.com/blog23">23</a>' +
    '<a href="https://www.oyuna-erica.com/blog24">24</a>' +
    '<a href="https://www.oyuna-erica.com/blog25">25</a>' +
    '<a href="https://www.oyuna-erica.com/blog26">26</a>' +
    '<a href="https://www.oyuna-erica.com/blog27">27</a>' +
    '<a href="https://www.oyuna-erica.com/blog28">28</a>' +
    '<a href="https://www.oyuna-erica.com/blog29">29</a>' +
    '<a href="https://www.oyuna-erica.com/blog30">30</a>'  +
    '<a href="https://www.oyuna-erica.com/blog31">31</a>'  +
    '<a href="https://www.oyuna-erica.com/blog32">32</a>'  +
    '<a href="https://www.oyuna-erica.com/blog33">33</a>'  +
    '<a href="https://www.oyuna-erica.com/blog34">34</a>'  +
    '<a href="https://www.oyuna-erica.com/blog35">35</a>'  +
        
    '<a href="#">&raquo;</a> ' +
    "</div></div>";

  document.write(text);
}

function navigation() {
  var text1 =
    '<div class="topnav" id="myTopnav">' +
    '<a href="https://www.oyuna-erica.com/">Home</a>' +
    '<a href="https://www.oyuna-erica.com/about">About</a>' +
    '<a href="https://www.oyuna-erica.com/done-for-you">DFY</a>' +
    '<a href="https://www.oyuna-erica.com/store">Store</a>' +
    '<a href="https://www.oyuna-erica.com/tourism">TourNZ</a>' +
    '<a href="https://www.oyuna-erica.com/previous_webinar">Webinar</a>' +
    '<a href="https://www.oyuna-erica.com/product">Product</a>' +
    '<a href="https://www.oyuna-erica.com/auto-webinar-registration">Event</a>' +
    '<a href="https://www.oyuna-erica.com/blog">Blog</a>' +
    '<a href="https://www.oyuna-erica.com/english-lesson23568318">Free Ts</a>' +
    '<a href="https://www.oyuna-erica.com/live">Live</a>' +
    '<a href="https://www.oyuna-erica.com/affiliate_page">Affiliate</a>' +
    '<a href="https://www.oyuna-erica.com/login">Login</a>' +
    '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="topnavFunction()">&#9776;</a>' +
    "</div>";

  document.write(text1);
}

function navigation_en() {
  var text1 =
    '<div class="topnav" id="myTopnav">' +
    '<a href="https://oyuna-erica2018.com/home">Home</a>' +
    '<a href="https://oyuna-erica2018.com/about">About</a>' +
    '<a href="https://oyuna-erica2018.com/dfy_eng">DFY</a>' +
    '<a href="https://oyuna-erica2018.com/store">Store</a>' +
    '<a href="https://oyuna-erica2018.com/tourism">TourNZ</a>' +
    '<a href="https://oyuna-erica2018.com/products22457876">Product</a>' +
    '<a href="https://oyuna-erica2018.com/onefunnelaway">Service</a>' +
    '<a href="https://oyuna-erica2018.com/freetraining">Free Training</a>' +
    '<a href="https://oyuna-erica2018.com/contact">Contact</a>' +
    '<a href="https://oyuna-erica2018.com/membership-area27653555">Membership</a>' +


    '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="topnavFunction()">&#9776;</a>' +
    "</div>";

  document.write(text1);
}

function topnavFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function pagination2() {
  var x = window.location.href;
  var y = x.substring(32);
  var current = parseInt(y);
  var last = 25;

  var delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  previous = current - 1;
  next = current + 1;

  if (current == 1) {
    previous = 1;
  } else if (current == last) {
    next = last;
  }
  final =
    '<div class="center"><div class="pagination">' +
    '<a href="https://www.oyuna-erica.com/blog' +
    previous +
    '">&laquo;</a>';

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  for (let i of rangeWithDots) {
    if (i == current) {
      final +=
        '<a class="active" href="https://www.oyuna-erica.com/blog' +
        i +
        '">' +
        i +
        "</a>";
    } else if (i == "...") {
      final += '<a href="#" onclick="return false;">...</a>';
    } else {
      final +=
        '<a href="https://www.oyuna-erica.com/blog' + i + '">' + i + "</a>";
    }
  }

  final +=
    '<a href="https://www.oyuna-erica.com/blog' +
    next +
    '">&raquo;</a>' +
    "</div></div>";


  if (final == '<div class="center"><div class="pagination"><a href="https://www.oyuna-erica.com/blogNaN">&laquo;</a><a href="https://www.oyuna-erica.com/blog1">1</a><a href="#" onclick="return false;">...</a><a href="https://www.oyuna-erica.com/blog25">25</a><a href="https://www.oyuna-erica.com/blogNaN">&raquo;</a></div></div>') {
    pagination();
  } else {
    document.write(final);
  }

}