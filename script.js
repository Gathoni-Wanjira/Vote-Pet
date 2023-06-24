const petsNode = document.querySelector("#pets ul");
const animalDetailsNode = document.querySelector("#animal-details");

function fetchPets() {
    fetch(" http://localhost:3000/characters")
        .then(res => res.json())
        .then(data => builtPets(data))
}

function fetchPetById(Id) {
    fetch(`http://localhost:3000/characters/${Id}`)
        .then(res => res.json())
        .then(data => createPetDetails(data))
}


function createPetDetails(petData) {
    const img = animalDetailsNode.querySelector("img")
    const p = animalDetailsNode.querySelector(".name-vote p")
    const button = animalDetailsNode.querySelector(".name-vote button")

    img.src = petData.image
    img.alt = petData.name

    p.textContent = petData.name

    button.textContent = petData.votes
    button.addEventListener("click", incrementVotes)


}


function incrementVotes(event) {
    let voteCount = Number.parseInt(event.target.textContent);
    event.target.textContent = voteCount += 1
}



function builtPets(data) {
    data.forEach(element => {
        const li = document.createElement("li");
        li.textContent = element.name
        li.id = element.id
        li.addEventListener('click', builtPetDetails)
        petsNode.append(li)


    });
    createPetDetails(data[0])
}


function builtPetDetails(event) {
    const id = event.target.id
    fetchPetById(id);
}


// Data to load before everything.
function init() {
    fetchPets()
}

window.onload = init();
