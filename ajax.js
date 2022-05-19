console.log("AJAX");

let a = document.getElementById('fetchbtn');
a.addEventListener('click', buttonclickhandler);

function buttonclickhandler() {

    console.log('You have clicked the button');
    // Instatiate XHR Object

    const xhr = new XMLHttpRequest();

    // Open the object

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // xhr.open('GET', 'abhi.txt', true);



    // What to do when response is ready

    xhr.onload = function () {

        if (this.status == 200) {
            console.log(this.responseText);

        }
        else {
            console.log('Some error occured');
        }


    }

   // xhr.send();

    xhr.onreadystatechange = function () {

        console.log('Your ready state is:: ', xhr.readyState);
    }


    console.log('We are done!!');


}


let b = document.getElementById('backbtn');
b.addEventListener('click', backclickhandler);


function backclickhandler() {


    const xhr = new XMLHttpRequest();
  
   xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

    // xhr1.getResponseHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-type", "application/json");

   params = '{"name":"test","salary":"123","age":"23"}';

  
    xhr.send(params);

    xhr.onload = function () {
        console.log(this.responseText);
    }
    



}