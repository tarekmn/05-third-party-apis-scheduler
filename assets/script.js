//Global Variables
var timeArea = $(".hour");
var timeBlocks = $(".time-block");
var saveButton = $(".saveBtn");
var currentHour = moment().format('H');
var fakeHour = 10;
console.log(currentHour);


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

]

// function retrievingTextValues() {

//   for (var x = 0; x < containerArray.length; x++) {

//     containerArray[x].button.on("click", function (event) {
//       event.preventDefault();
//   console.log(event.target)
//   console.log(containerArray[x].target.val())})
//   }
// };

//THIS WORKS INDIVIDUALLY 
containerArray[0].button.on("click", function(event){
  event.preventDefault();
  console.log(event.target)
  console.log(containerArray[0].target.val())}
  
  
  )

containerArray[1].button.on("click", function(event){
  console.log(event.target)
  console.log(containerArray[1].target.val())})

  containerArray[2].button.on("click", function(event){
    console.log(event.target)
    console.log(containerArray[2].target.val())})


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
  for (var i = 0; i < containerArray.length; i++) {
    if (containerArray[i].time < fakeHour) {
      past(containerArray[i].target)
    } else if (containerArray[i].time === fakeHour) {
      present(containerArray[i].target)
    }
    else if (containerArray[i].time > fakeHour) {
      future(containerArray[i].target)
    }
  }
};














function init() {
  setInterval(function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }, 1000)


}



init();
checkTimeBlock();
// retrievingTextValues();



