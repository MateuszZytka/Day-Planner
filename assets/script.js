let timeDisplayEl = $('#time-display');
let hour = new Date().getHours();
let textBoxEl = $(".textbox")

console.log(textBoxEl)
console.log(hour)

//fetches time and date, dsiplays it on page
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY a');
    timeDisplayEl.text(rightNow);
  }

setInterval(displayTime, 1000);



function colorBlock() {
    for(let h = 9, i = 0; h <18, i < textBoxEl.length; h++, i++){
      console.log(h)
      console.log(i)
      if (h < hour){
        textBoxEl[i].classList.add("past")
        console.log(h)
        console.log(i)
      } else if (h > hour){
        textBoxEl[i].classList.add("future")
        console.log(h)
      } else if (h === hour){
        textBoxEl[i].classList.add("present")
      }console.log(h)
    }
  }

colorBlock()

$("#9Btn").on("click", function(){
  let nine = $("9input").value
  console.log(nine)
})



