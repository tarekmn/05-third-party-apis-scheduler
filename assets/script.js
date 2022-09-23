//Global Variables
var timeArea = $(".hour");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");
var currentHour = moment().format('H');
console.log(currentHour);

var timeBlocks0 = $('#9am');
var timeBlocks1 = $('#10am');

// var emptyArray = [{
//   timeArea: 9,
//   timeBlocks: "empty"
// }]







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

//future(timeBlocks0);  //tester on timeBlocks0
//present(timeBlocks1); //tester on timeBlocks1












function checkTimeBlock() {
  

  if(currentHour > 9){
    past(timeBlocks0);
  }

};
checkTimeBlock();


function init () {
  setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000)


}



init();
checkTimeBlock();


