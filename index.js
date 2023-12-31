const revealLeftDiv = document.getElementById("revealLeftDiv")
const rightDiv = document.getElementById("rightDiv")

// Function to handle right div

function handleRightDiv (){
    if(revealLeftDiv.classList.contains("reveal-left-div") && rightDiv.classList.contains("right-div")){
        revealLeftDiv.classList.remove("reveal-left-div")
        revealLeftDiv.classList.add("left-div")
        rightDiv.classList.remove("right-div")
        rightDiv.classList.add("reveal-right-div")
    }
}

// Add Event Listener
rightDiv.addEventListener('click', handleRightDiv)

// Function to handle left div

function handleLeftDiv (){
    if(revealLeftDiv.classList.contains("left-div") && rightDiv.classList.contains("reveal-right-div")){
        rightDiv.classList.remove("reveal-right-div")
        rightDiv.classList.add("right-div")
        revealLeftDiv.classList.remove("left-div")
        revealLeftDiv.classList.add("reveal-left-div")
    }
}

// Add Event Listener

revealLeftDiv.addEventListener('click', handleLeftDiv)