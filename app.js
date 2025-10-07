// function getRandomChar() {
//   let numbers = "0123456789";
//   let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let specials = "!@#$%^&*()_+[]{}<>?/|";
  
//   let allChars = numbers + alphabets + specials;

//   let randomIndex = Math.floor(Math.random() * allChars.length);

//   return allChars[randomIndex];
// }

// function getRandomChar() {
//   let numbers = "0123456789";
//   let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let specials = "!@#$%^&*()_+[]{}<>?/|";
  
//   let allChars = numbers + alphabets + specials;

//   let randomIndex = Math.floor(Math.random() * allChars.length);

//   return allChars[randomIndex];
// }


// function getRandomString(length) {
//   let result = "";
//   for (let i = 0; i < length; i++) {
//     result += getRandomChar();
//   }
//   return result;
// }

// console.log(getRandomString(10)); 



// var date = new Date()

// var ramdanmillisecond = new Date ("feb 17 ,2026").getTime();

// var currentmillisecond = new Date().getTime();

// var diff = ramdanmillisecond - currentmillisecond;

// var month = diff / (1000 * 60 * 24 * 30);

// document.write(month)




    // function calculateAge() {
    //   let dob = document.getElementById("dob").value;
    //   if (!dob) {
    //     document.getElementById("result").innerText = "Please select your date of birth.";
    //     return;
    //   }

    //   let dobDate = new Date(dob);
    //   let today = new Date();
    //   let ageInMs = today.getTime() - dobDate.getTime();
    //   let ageDate = new Date(ageInMs);
    //   let age = Math.abs(ageDate.getUTCFullYear() - 1970);

    //   document.getElementById("result").innerText = "Your Age is: " + age + " years" + "🖕" ;
    // }







// function abc(num1,num2){
//     console.log(num1 + num2);
// }



// abc(1000,11);




















// function greet(message){
//     alert(message);
// }






// greet("hello world");








// function sum(num1, num2){
//     var aad = num1 + num2;
//     return addEventListener;
// }

// var getVAL = sum(2,10);

// console.log(getVAL)







// function bio(name) {
//     var exp = "hello my name is"
//     name;
//     return exp;
// }

// var getVAL = bio("zaid")

// console.log(getVAL);




















// function mulitplication_table(table){
    // console.log(table);
    // for(var i = 1;i<=10;i++){
    //     document.write(table, "x", i, "=", table * i, "<br>")
    // }

// var i = 1;

// do{
//     document.write(table, "x", i, "=", table * i, "<br>")
//     i++;
// } while (i <= range);


// while(i <= range){


//      document.write(table, "x", i, "=", table * i, "<br>")
//     i++;
// }
// }


// mulitplication_table(+prompt("enter a number"), +prompt("enter a range"))












// var city = prompt("Enter your city");

// switch(city) {
//     case "karachi":
//         alert("allow");
//         break;
//         case "multan":
//         alert("allow");
//         break;

// case "multan":
//         alert("allow");
//         break;

//         default:
//             alert("Not allowed");
// }

// function changingStyle (element) {
//                             element.style.backgroundColor = "lightblue";
//                             element.style.outline = "none";
//                             element.style.border = "none";
//                             element.style.padding = "5px";
//                             element.style.borderRadius = "5px";
//                             element.style.margin = "5px";





// }

// function greet(){

// let timerInterval;
// Swal.fire({
//   title: "Auto close alert!",
//   html: "I will close in <b></b> milliseconds.",
//   timer: 2000,
//   timerProgressBar: true,
//   didOpen: () => {
//     Swal.showLoading();
//     const timer = Swal.getPopup().querySelector("b");
//     timerInterval = setInterval(() => {
//       timer.textContent = `${Swal.getTimerLeft()}`;
//     }, 100);
//   },
//   willClose: () => {
//     clearInterval(timerInterval);
//   }
// }).then((result) => {
//   /* Read more about handling dismissals below */
//   if (result.dismiss === Swal.DismissReason.timer) {
//     console.log("I was closed by the timer");
//   }
// });
    
    
// }


// var emailValue = document.getElementById("email");
// emailValue.style.color = "red";
// var passValue = document.getElementById("password");
// passValue.style.color = "aqua";

// function submit(){


//     if(emailValue.value === "" || passValue.value === ""){
//  Swal.fire({
//   text: "Required fields are missing",
//   icon: "error"
// });

//     }

//     else{
//         var values = emailValue.value + " " + passValue.value;
//         console.log(values);
        
//     }
    
    
// }













// var h1Element = document.getElementById("heading")
// var pElement = document.getElementById("para")
// var anchorElement = document.getElementById("link")


// console.log(h1Element.innerText);

// console.log(pElement.innerText);

// console.log(anchorElement.innerText);

// function fullpara() {
//     var pElement = document.getElementById("para");
//     var aElement = document.getElementById("link");

//     if (aElement.innerHTML === "Read More") {
//         pElement.innerHTML =
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non corporis alias aut impedit temporibus quod natus accusamus provident illum nostrum, nesciunt reiciendis obcaecati numquam odit esse. Sequi rerum labore cumque obcaecati harum doloremque, sint velit nam quos esse. Cum nobis eum error aperiam tempora molestias incidunt eaque dignissimos dicta!";
//         aElement.innerHTML = "Read Less";
//     } else {
//         pElement.innerHTML = "Lorem ipsum dolor sit amet.";
//         aElement.innerHTML = "Read More";
//     }
// }










// var allparas = document.getElementsByTagName("p")

// for (var i = 0; i < allparas.length; i++){
//     console.log(allparas[i]);
    
//     allparas[i].style.backgroundColor = "blue";
// }


// function timer() {
    
//     console.log("zaid");
// }

// setInterval(timer, 1);

// var Interval;

// Interval = setInterval(timer, 1000);


// function stop() {
//     clearInterval(Interval);
// }






//  var hourHeading = document.getElementById("hour");
//     var minHeading = document.getElementById("min");
//     var secHeading = document.getElementById("sec");
//     var msecHeading = document.getElementById("msec");

//     var hour = 0;
//     var min = 0;
//     var sec = 0;
//     var msec = 0;
//     var interval;

//     function timer() {
//       msec++;
//       if (msec >= 100) {
//         sec++;
//         msec = 0;
//       }
//       if (sec >= 60) {
//         min++;
//         sec = 0;
//       }
//       if (min >= 60) {
//         hour++;
//         min = 0;
//       }

//       // Update UI with leading zeros
//       hourHeading.innerHTML = hour.toString().padStart(2, '0');
//       minHeading.innerHTML = min.toString().padStart(2, '0');
//       secHeading.innerHTML = sec.toString().padStart(2, '0');
//       msecHeading.innerHTML = msec.toString().padStart(2, '0');
//     }

//     function startTimer() {
//       if (!interval) {
//         interval = setInterval(timer, 10);
//       }
//     }

//     function stopTimer() {
//       clearInterval(interval);
//       interval = null;
//     }

//     function resetTimer() {
//       stopTimer();
//       hour = 0;
//       min = 0;
//       sec = 0;
//       msec = 0;
//       hourHeading.innerHTML = "00";
//       minHeading.innerHTML = "00";
//       secHeading.innerHTML = "00";
//       msecHeading.innerHTML = "00";
//     }

// var divElement = document.getElementById("main")

// console.log(divElement.firstChild);

// console.log(divElement.lastChild);

// console.log(divElement.childNodes[3]);

// var divElement = document.getElementById("heading")


// console.log(divElement.parentElement);

// console.log(divElement.nextSibling);



// var divElement = document.getElementById("para")

// console.log(divElement.nodeName);




// var allpara = document.getElementsByTagName("p")

// console.log(allpara);

// for(var i = 0; i < allpara.length; i++){
//     console.log(allpara[i]);
    
// }





// var link = document.getElementById("link")

// link.setAttribute("class","anchor")

// console.log(link.attributes[0].nodeValue);



// link.setAttribute("href" , "https://www.google.com")


// console.log(link.hasAttribute("id"));

// console.log(link.getAttribute("id"));






// var h1Element = document.createElement('h1');

// var h1Text = document.createTextNode("Hello World");

// var divElement = document.getElementById("container")


// h1Element.appendChild(h1Text);

// divElement.appendChild(h1Element);

// console.log(h1Element);









// var aElement = document.createElement('a');

// var aText = document.createTextNode("link");

// var divElement = document.getElementById("container")


// h1Element.appendChild(aText);

// divElement.appendChild(aElement);

// console.log(aElement);





// var pElement = document.createElement('p');

// var pText = document.createTextNode("lorem imsum dolor");

// var divElement = document.getElementById("container");

// pElement.appendChild(pText);

// divElement.appendChild(pElement);

// console.log(pElement);



