// Use DOM to access the nodes from the html.
const petsNode = document.querySelector("#pets ul");
const animalDetailsNode = document.querySelector("#animal-details");
const resetNode = document.querySelector("#reset");


// Create a fetching pets function where you will be able to fetch the data from wholly and in specific id.
function fetchPets() {
    fetch(" http://localhost:3000/characters")
        .then((res => res.json()))
        .then((data => builtPets(data)))
}

function fetchPetById(Id) {
    fetch(`http://localhost:3000/characters/${Id}`)
        .then((res => res.json()))
        .then((data => createPetDetails(data)))
}

// Call back the functions passed while fetching data.
function createPetDetails(petData) {
    const img = animalDetailsNode.querySelector("img")
    const p = animalDetailsNode.querySelector(".name-vote p")
    const button = animalDetailsNode.querySelector(".name-vote button")

    img.src = petData.image
    img.alt = petData.name

    p.textContent = petData.name

    button.textContent = `VOTES ${petData.votes}`
    button.addEventListener("click", incrementVotes)


}

// Creates a function to increase the votes once clicked!
function incrementVotes(event) {
    let voteCount = Number.parseInt(event.target.textContent.slice(-2));
    event.target.textContent = `VOTES ${voteCount += 1}`
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

// A function to reset the votes input.
reset.addEventListener("click", resetVotes)

function resetVotes(event) {
    const parent = event.target.parentNode
    const vote = parent.querySelector("#vote")
    vote.textContent = "VOTES 0"

}



// Data to load before everything.
function init() {
    fetchPets()
}

window.onload = init();
