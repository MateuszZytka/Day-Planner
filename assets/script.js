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

document.getElementById("9Btn").onclick=function(e){
  e.preventDefault();
  nine = document.getElementById("9input").value
  localStorage.setItem("9am", nine)
}

document.getElementById("10Btn").onclick=function(e){
  e.preventDefault();
  ten = document.getElementById("10input").value
  localStorage.setItem("10am", ten)
}

document.getElementById("11Btn").onclick=function(e){
  e.preventDefault();
  eleven = document.getElementById("11input").value
  localStorage.setItem("11am", eleven)
}

document.getElementById("12Btn").onclick=function(e){
  e.preventDefault();
  twelve = document.getElementById("12input").value
  localStorage.setItem("12pm", twelve)
}

document.getElementById("13Btn").onclick=function(e){
  e.preventDefault();
  thirteen = document.getElementById("13input").value
  localStorage.setItem("1pm", thirteen)
}

document.getElementById("14Btn").onclick=function(e){
  e.preventDefault();
  fourteen = document.getElementById("14input").value
  localStorage.setItem("2pm", fourteen)
}

document.getElementById("15Btn").onclick=function(e){
  e.preventDefault();
  fifteen = document.getElementById("15input").value
  localStorage.setItem("3pm", fifteen)
}

document.getElementById("16Btn").onclick=function(e){
  e.preventDefault();
  sixteen = document.getElementById("16input").value
  localStorage.setItem("4pm", sixteen)
}

document.getElementById("17Btn").onclick=function(e){
  e.preventDefault();
  seventeen = document.getElementById("17input").value
  localStorage.setItem("5pm", seventeen)
}



