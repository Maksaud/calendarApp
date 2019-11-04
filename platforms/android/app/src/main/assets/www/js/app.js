// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



/*navigation*/
$(document).ready(function(){
  $('.page[data-name="about"]').hide();
  $('.page[data-name="months"]').hide();


  $('#about').click(function(){
    $('.page[data-name="home"]').hide();
    $('.page[data-name="about"]').show();
  });

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


document.getElementById('next').addEventListener('click', next);
document.getElementById('previous').addEventListener('click', previous);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}
$('.jump').on('change', function(){
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
});

function showCalendar(month, year) {

  let firstDay = (new Date(year, month)).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tbl = document.getElementById("calendar-body"); // body of the calendar

  // clearing all previous cells
  tbl.innerHTML = "";

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay) {
              let cell = document.createElement("td");
              let cellText = document.createTextNode("");
              cell.appendChild(cellText);
              row.appendChild(cell);
          }
          else if (date > daysInMonth) {
              break;
          }

          else {
              let cell = document.createElement("td");
              let cellText = document.createTextNode(date);
              if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                  cell.style.backgroundColor = "blue";
              } // color today's date
              cell.appendChild(cellText);
              row.appendChild(cell);
              date++;
          }


      }

      tbl.appendChild(row); // appending each row into calendar body.
  }

}
});

/*Time Function*/
$$(window).trigger('page:init', 'page[data-name="home"]', startTime);
function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
  hr = (hr == 0) ? 12 : hr;
  hr = (hr > 12) ? hr - 12 : hr;
  greet = document.getElementById('greet');
  if(ap == "<span>AM</span>"){
    greet.innerHTML = "Good Morning";
  }
  else if(ap == "<span>PM</span>"){
    greet.innerHTML = "Good Afternoon";
  }
  else if(hr >= 6 && ap == "<span>PM</span>"){
    greet.innerHTML = "Good Evening";
  }
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 500);
}
startTime();
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}


//night Mode


  $('#nightMode').click(function(){
    $('.page').css("background-image", "url('./img/HomeBackground1.jpg')");
  });