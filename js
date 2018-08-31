let div1 = document.getElementById('div1')


// Create jumbotron div
let jumbotron = document.createElement('div')
jumbotron.className = 'jumbotron  text-center'


// Create h3 Element
let h3 = document.createElement('h3')
h3.className = 'display-2 py-3 font-weight-bold'
h3.innerHTML = "Javascript"
jumbotron.appendChild(h3)

//create words array

let words = ["Dom", "Manipulation", "Createelement", "GetelementbyId", "AppendChild", "Addevent",]


function wordChange () {
    let wOne = Math.floor(Math.random() * 255);
    let wTwo =  Math.floor(Math.random() * 255);
    let wThree =  Math.floor(Math.random() * 255);
    
    h3.innerHTML = words[Math.floor(Math.random() * words.length)]
    h3.style.color = `rgb(${wOne}, ${wTwo}, ${wThree} )`
}

setInterval(wordChange, 1000)

 


// Create p Element
let para = document.createElement('p')
para.innerHTML = "Click Me "

jumbotron.appendChild(para)


//Create Textarea
let createText = document.createElement('textarea')
createText.className = 'form-control rows="3" my-4 d-block '
para.style.height = "40px"


// para event 
para.addEventListener('click', function () {
    jumbotron.removeChild(para)
    jumbotron.appendChild(createText)
    createText.innerHTML = this.innerHTML
    // Create Textarea Event
    createText.addEventListener('blur', changeText)
    
})


//changeText function
function changeText(event) {
    jumbotron.removeChild(createText)
    para.innerHTML = event.target.value
    jumbotron.appendChild(para)
    
}



//Create a btn element
let btn1 = document.createElement('BUTTON')
btn1.className = "btn btn-primary btn-lg btn-block py-3 "
btn1.innerHTML="Change color "
jumbotron.appendChild(btn1)
// btn1 add Even
btn1.addEventListener('click', colorChange)



// random color change when you click the button
function colorChange() {
    let nOne = Math.floor(Math.random() * 255);
    let nTwo =  Math.floor(Math.random() * 255);
    let nThree =  Math.floor(Math.random() * 255);
    jumbotron.style.background = `rgb(${nOne}, ${nTwo}, ${nThree} )`
}


div1.appendChild(jumbotron)
