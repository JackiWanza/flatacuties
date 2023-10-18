// Your code here
document.addEventListener("DOMContentLoaded", (event) => {
    // console.log(event.target);
    fetch("http://localhost:3000/characters").then((response) => { return response.json() }).then((data) => {
        // console.log(data);
        displayData(data)
    }).catch((error) => {
        console.log(error.message);
    })
})
// declare a function
function displayData(characters) {
    console.log(characters);
    const characterBar = document.querySelector("#character-bar")
    characters.forEach((character) => {
        console.log(character);
        const span = document.createElement("span")
        span.innerHTML = character.name
        // console.log(character["name"]);
        characterBar.appendChild(span)


        span.addEventListener("click", (event) => {
            // console.log(event.target);
            displayCharacter(character)

        })
    })
}
function displayCharacter(character) {
    // console.log(character);
    const p = document.querySelector("#name")
    const img = document.querySelector("#image")
    const voteCount = document.querySelector("#vote-count")
    p.innerHTML = character.name
    img.src = character.image
    voteCount.innerHTML = character.votes

    const voteForm = document.querySelector("#votes-form")
    voteForm.addEventListener("submit", (event) => {
        handleFormSubmission(event, voteCount)
    })
}
function handleFormSubmission(event, voteCount) {
    event.preventDefault()
    const input = document.querySelector("#votes").value
    let newCount = parseInt(voteCount.innerHTML) + parseInt(input)
    voteCount.innerHTML = newCount
}

