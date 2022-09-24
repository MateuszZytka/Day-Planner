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

displayTime()


//function colorBlock adds classes to text areas based of the relation to the current hour
function colorBlock() {
    for(let h = 9, i = 0; h <18, i < textBoxEl.length; h++, i++){
      if (h < hour){
        textBoxEl[i].classList.add("past")
      } else if (h > hour){
        textBoxEl[i].classList.add("future")
      } else if (h === hour){
        textBoxEl[i].classList.add("present")
      }
    }
  }

colorBlock()

//adding event listners to each button and storing content from adjecent textbox to local storage
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


//gets local storage information and stores it in appropriate text box
function renderLastRegistered() {
  document.getElementById("9input").value = localStorage.getItem("9am");
  document.getElementById("10input").value = localStorage.getItem("10am");
  document.getElementById("11input").value = localStorage.getItem("11am");
  document.getElementById("12input").value = localStorage.getItem("12pm");
  document.getElementById("13input").value = localStorage.getItem("1pm");
  document.getElementById("14input").value = localStorage.getItem("2pm");
  document.getElementById("15input").value = localStorage.getItem("3pm");
  document.getElementById("16input").value = localStorage.getItem("4pm");
  document.getElementById("17input").value = localStorage.getItem("5pm");
}

renderLastRegistered ()
