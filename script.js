let marks=0
// question1
function dragstart(event) {
    event.dataTransfer.setData("Text", event.target.id);

}
// function dragging(event) {
//     document.getElementById("demo").innerHTML = "The p element is being dragged";
// }

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {

    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    let a = event.target.appendChild(document.getElementById(data));
    console.log(a.textContent);

    if (a.textContent == "color") {
        document.getElementById("disp").innerHTML = "correct";
        document.getElementById("error").innerHTML = " ";
        marks++;

    } else {
        document.getElementById("error").innerHTML = "wrong";
        document.getElementById("disp").innerHTML = "";
        
    }
    document.getElementById('bnt').style.display = "block";
}

function reset() {
    window.location.reload(true);
}
function next2(){
    document.getElementById('que1').style.display = "none";
    document.getElementById('que2').style.display = "block"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}

// // question2
function Checkque2() {


    let selected = document.querySelector('input[name=sesson]:checked')
    if (selected.value == "console.log()") {
        document.getElementById('disp').innerHTML = "Answer is correct";
        document.getElementById('error').innerHTML = "";
        document.getElementById('bnt2').style.display = "block";
        marks++;
    }
    else{
        document.getElementById('error').innerHTML = "Wrong";
        document.getElementById('disp').innerHTML = "";
        document.getElementById('bnt2').style.display = "block";
        
    }
}
function pre1(){
    document.getElementById('que1').style.display = "block";
    document.getElementById('que2').style.display = "none"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}
function next3(){
    document.getElementById('que2').style.display = "none";
    document.getElementById('que3').style.display = "block"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}



// question3
function Checkque3() {


    let selected = document.querySelector('input[name=sesson]:checked')
    if (selected.value == "const") {
        document.getElementById('disp').innerHTML = "Answer is correct";
        document.getElementById('error').innerHTML = "";
        document.getElementById('bnt3').style.display = "block";
        marks++;
    }
    else{
        document.getElementById('error').innerHTML = "Wrong";
        document.getElementById('disp').innerHTML = "";
        document.getElementById('bnt3').style.display = "block";
        
    }
}
function pre2(){
    document.getElementById('que2').style.display = "block";
    document.getElementById('que3').style.display = "none"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}
function next4(){
    document.getElementById('que3').style.display = "none";
    document.getElementById('que4').style.display = "block"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}

// // question4
function Checkque4() {


    let selected = document.querySelector('input[name=sesson]:checked')
    if (selected.value == "background-color") {
        document.getElementById('disp').innerHTML = "Answer is correct";
        document.getElementById('error').innerHTML = "";
        document.getElementById('bnt4').style.display = "block";
        marks++;
    }
    else{
        document.getElementById('error').innerHTML = "Wrong";
        document.getElementById('disp').innerHTML = "";
        document.getElementById('bnt4').style.display = "block";
        
    }
}
function pre3(){
    document.getElementById('que3').style.display = "block";
    document.getElementById('que4').style.display = "none"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}
function next5(){
    document.getElementById('que4').style.display = "none";
    document.getElementById('que5').style.display = "block"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}

// question5 jsw 
function Checkque5() {


    let selected = document.querySelector('input[name=sesson]:checked')
    if (selected.value == "required") {
        document.getElementById('disp').innerHTML = "Answer is correct";
        document.getElementById('error').innerHTML = "";
        document.getElementById('bnt5').style.display = "block";
        marks++;
    }
    else{
        document.getElementById('error').innerHTML = "Wrong";
        document.getElementById('disp').innerHTML = "";
        document.getElementById('bnt5').style.display = "block";
        
    }
    
    // function next5(){
    //     document.getElementById('que4').style.display = "none";
    //     document.getElementById('que5').style.display = "block"; 
    //     document.getElementById('disp').innerHTML = "";
    //     document.getElementById('error').innerHTML = "";
    // }
}

function pre4(){
    document.getElementById('que4').style.display = "block";
    document.getElementById('que5').style.display = "none"; 
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
}
function submit(){
    document.getElementById('disp').innerHTML = "";
    document.getElementById('error').innerHTML = "";
    alert("Congratulations Your Marks are " + marks + "/5");
}