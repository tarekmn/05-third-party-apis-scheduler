//Global Variables
var timeArea = $(".hour");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");


var timeBlocks0 = $('#9');

console.log(timeBlocks0);
console.log(timeBlocks[1]);


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

past(timeBlocks);  //tester












function checkTimeBlock() {


};


function init () {
  setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000)


}

init();
checkTimeBlock();
