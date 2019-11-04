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


//night Mode


  $('#nightMode').click(function(){
    $('.page').css("background-image", "url('./img/HomeBackground1.jpg')");
  });


  //MyMonths=['jan', 'feb'];
  //document.getElementById(MyMonths).addEventListener('click', function(){
  //  document.getElementById('callender').style.display="none";
  //});

/*this year*/
$$(window).trigger('page:init', '.page[data-name="about"]' , getYear);

function getYear(){
  // Do something here when page with data-name="about" attribute loaded and initialized
  let date = new Date();
  let year = date.getFullYear();
  $$('#calYear').html(year);
  //myMonth.innerHTML = months[thisMonth];
  console.log(year);
  $$('#backYear').on('click',function(){
    year -= 1;
    $$('#calYear').html(year);
  });
  $$('#frontYear').on('click',function(){
    year += 1;
    $$('#calYear').html(year);
  });
}
getYear();
$$('.my-popup').on('popup:open', function(){
  getYear();
});
//function getMonth(){
//var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//$$('#jan').onclick


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