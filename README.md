## INTRODUCTION.  
 --- 

## CODE-CHALLENGE-WK2.  
 ---

  - In this code challenge you are required to create a mini app, `Flatacuties`, where you can vote for the cutest animal!  
  - You will use a local API and build out the frontend for our app.

### LEARNING GOALS.   
 ----

 - Implement a mini web app to practice on the following:

    - `array iteration`
    - `DOM`
    - `Events`
    - `and Server communications.`

### REQUIREMENTS.   
 ---

  - Have a well-written [README](https://github.com/GATHONI-WANJIRA/CODE-CHALLENGE-WK2/blob/main/README.md) file.
  - Fetch data from a local server running `JSON DB` server.

 ### PROJECT SETUP & PRE-REQUISITE  DATA.  
 ---  

  - In your project directory, create a db.json file and use this [data](https://docs.google.com/document/d/1EUcHU9gkydR3IfJDTebW5iNHP2BCMRcv508R7BAXSvo/edit?usp=sharing) Links to an external site. for your server DB.
  - Run this command to get the backend started: `json-server --watch db.json`
  - Test your server by visiting this route in the browser:` http://localhost:3000/characters`

 ###  PROJECT SET-UP.  
 ---  

  - Create a new project folder.
  - Create a new GitHub repository (NB: ENSURE IT IS PRIVATE).
  - Add your TM as a contributor to the project.
  - Please make sure you regularly commit to the repository.

###  PROJECT GUIDELINES.  
 ---   

 - Your project should conform to the following set of guidelines:

#### CORE DELIVERABLES.  
---   

As a user, You should:

- See a list of all animal names. You will need to make a GET request to the following endpoint to retrieve the character data

`GET /characters`

Example Response:

```json
[
  {
    "id": 1,

    "name": "Mr. Cute",

    "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

    "votes": 0
  },

  {
    "id": 2,

    "name": "Mx. Monkey",

    "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",

    "votes": 0
  }
]
```

- Click on an animal’s name to see its details i.e image and number of votes. Note, you should only be displaying the details of one animal at a time. You can either use the character information from your first request or make a new request to this endpoint to get the character's details

`GET /characters/:id`

Example Response:

```json
{
  "id": 1,

  "name": "Mr. Cute",

  "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",

  "votes": 0
}
```

- When viewing an animal’s details, I should be able to add the number of votes for each animal. This number of votes should then be displayed together with the animal’s details. No persistence is needed for the votes.

### Bonus Deliverables. 
 ---  

- These bonus deliverables are provided if you want an extra challenge and won't affect score.

> Make sure to commit your work to save your progress before attempting the bonus deliverables!

1. Add a reset button that resets the votes back to 0
2. Have a form for adding animals.

## AUTHORS . 
 ---

- [Gathoni Wanjira .](https://github.com/GATHONI-WANJIRA)

## LICENSE .   
 ---

 - Released under the [MIT](https://opensource.org/license/mit/) License.