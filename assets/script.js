//Global Variables
var timeArea = $(".hour");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");
var currentHour = moment().format('H');
console.log(currentHour)
var fakeHour = 10;


//Primary container
var containerArray = [
  {
    time: 9,
    target: $('#9am'),
    button: $('#saveBtn1')
  },
  {
    time: 10,
    target: $('#10am'),
    button: $('#saveBtn2')
  },
  {
    time: 11,
    target: $('#11am'),
    button: $('#saveBtn3')
  },
  {
    time: 12,
    target: $('#12pm'),
    button: $('#saveBtn4')
  },
  {
    time: 13,
    target: $('#1pm'),
    button: $('#saveBtn5')
  },
  {
    time: 14,
    target: $('#2pm'),
    button: $('#saveBtn6')
  },
  {
    time: 15,
    target: $('#3pm'),
    button: $('#saveBtn7')
  },
  {
    time: 16,
    target: $('#4pm'),
    button: $('#saveBtn8')
  },
  {
    time: 17,
    target: $('#5pm'),
    button: $('#saveBtn9')
  },

]



// Retrieving Text values 
for (let i = 0; i < containerArray.length; i++) {
  containerArray[i].button.on("click", function (event) {
    event.preventDefault();
    console.log(event.target)
    console.log(containerArray[i].target.val())
    localStorage.setItem("saves" + i, containerArray[i].target.val())
  })
}


//get item section
var saves0 = localStorage.getItem("saves0");
$('#9am').text(saves0);

var saves1 = localStorage.getItem("saves1");
$('#10am').text(saves1);

var saves2 = localStorage.getItem("saves2");
$('#11am').text(saves2);

var saves3 = localStorage.getItem("saves3");
$('#12pm').text(saves3);

var saves4 = localStorage.getItem("saves4");
$('#1pm').text(saves4);

var saves5 = localStorage.getItem("saves5");
$('#2pm').text(saves5);

var saves6 = localStorage.getItem("saves6");
$('#3pm').text(saves6);

var saves7 = localStorage.getItem("saves7");
$('#4pm').text(saves7);

var saves8 = localStorage.getItem("saves8");
$('#5pm').text(saves8);





//Adding past, present, future class functions
function past(x) {
  x.addClass('past');
}

function present(x) {
  x.addClass('present');
}

function future(x) {
  x.addClass('future');
}


// //Time checker function
function checkTimeBlock() {
  for (var i = 0; i < containerArray.length; i++) {
    if (containerArray[i].time < currentHour) {
      past(containerArray[i].target)
    } else if (containerArray[i].time == currentHour) {
      present(containerArray[i].target)
    }
    else if (containerArray[i].time > currentHour) {
      future(containerArray[i].target)
    }
  }
};

//Initial function for timer
function init() {
  setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000)


}



init();
checkTimeBlock();

















