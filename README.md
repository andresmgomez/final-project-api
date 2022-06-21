
# RESTful API for a Recipes App

A simple rest api or backend for the final project - Meal Planner

## Getting started
```
git clone
cd final-project-api/functions
yarn or yarn install
```

## Configuration

- Install Firebase CLI
```cmd: npm i -g firebase-tools```

- Login with Firebase
``` cmd:  firebase login <firebase_account>```

- Setup Project with Cloud Functions
```cmd: firebase init functions```

Note: You need to create a new project in Firebase and upgrade the plan from <em>Spark</em> to <strong>Blaze</strong> plan in order to use cloud functions.

- Add Firebase Configuration
```
  "hosting": {
      "public": "public",
      "rewrites": [
        {
          "source": "**",
          "function": "app"
        }
      ],
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
    },
    "emulators": {
      "hosting": {
        "host": "localhost",
        "port": "5055"
      }
    }
```


## Run the API
```
cmd: firebase emulators:start
```

## Working Endpoints

    POST /api/recipes
    GET /api/recipes
    GET /api/recipes/recipeId


### Features

- Add a new Recipe
- Fetch a Recipe by ID
- Fetch all the Recipes 

### Stack 

- JavaScript (ES6)
- Express
- MongoDB
- Firebase Functions
