# Recipe Book
This project is used to provide an introduction to the Firebase services. The project will be used at the 2018-05-10 meetup for PEIDevs. 

The recipe book is an old Kata I have been using for years as it requires little business logic but is extendable to various types of technologies. So it works for me as a quick prototype.

# User Manual
1. Login
   * Allows for login with a google account only. Future enhancements may allow other providers but for the demo, we will only use google auth
2. Create New
   * Creates a new Recipe. You do not have to be logged in to create a recipe.
3. Favorite
   * You have to be logged in to favorite a recipe. Shows the total number of users who have favorited a recipe. If you have favorited the recipe it shows up in red

# Development Requirements
* Node js 6+ LTS Recommended 
* Google Account

# Deploying the code
  1. Clone the repo
  2. Install Dependencies `npm install`
  3. Start a new application in Firebase Console
     * Setup Hosting
     * Setup Database
        * Setup rules, default of public should be ok to start, but be aware this isn't secure
     * Setup Oauth, turning on for Google only
  4. Get the API keys and URL's from firebase
  5. Put the API keys and URL's in the `.env` file
  6. Build the application `npm run build`
  7. install firebase tools `npm install -g firebase-tools`
  8. login to Firebase `firebase login`
  9. initialize the Firebase project `firebase init`
     * When asked what to use as your public directory, respond with "build" (without quotes)
 10. Deploy the application `firebase deploy`


# Demo Notes

## Prep to do ahead of time
   * Clone Repo @ version without firebase files
   * Run `npm install` && `npm build`
   * Files to have open
      * App.js 
      * recipeRepository.js
      * favoriterepository.js
      * authRepository.js

## Outline
0. Introduction
   * Stack
      * React
      * Firebase Hosting
      * Firebase OAuth
      * Firebase RT Database
      * Additional Packages
         * Material-UI + icons
         * momentjs
         * uuid
1. Show Current Demo and let people play
    * Show DB + app at same time to show RT database
2. Review Code - show Repos that utilize Firebase
3. Review Console
   * https://console.firebase.google.com
   * Talking Points
      * Basic Services - Expand on Stability, Analytics, Grow but dont go into them
      * Project Overview - "Add Firebase to your web app"
      * Auth - Logged In users, multiple providers
      * Database - Data, Rules
      * Hosting - Deployment History and rollback 
4. Demo 
   * Create Application in console
      * Leave the DB public
      * setup new hosting name (peidevs-demo)
      * Setup Auth for google only
   * Get api keys from firebase console
      * update the values in `.env`
   * install Firebase Tools
      * `npm install -g firebase-tools`
   * Init firebase w/ wizard
      * `firebase login` or `firebase login --reauth`
      * `firebase init`
         * You will be asked a series of questions. Answers in blue
           *  Are you ready to proceed? <span style="color:blue">Yes</span>
           * Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. <span style="color:blue">Hosting: Configure and deploy Firebase Hosting sites</style>
           * Select a default Firebase project for this directory: <span style="color:blue">pei-recipe (pei-recipe)</style>
           * What do you want to use as your public directory? <span style="color:blue">build</style>
           * Configure as a single-page app (rewrite all urls to /index.html)? <span style="color:blue">Yes</span>
           * File build/index.html already exists. Overwrite? <span style="color:blue">No</style>

   * Deploy the Code
      * `npm run build`
      * `firebase deploy`
   * give new url and let people play again
5. Secure DB - Showing Condole Simulator
    * public

```javascript 
{
  "rules": {
    	".read": true,
    	".write": true  
    }
}
```

   * secure to only logged in users

```javascript
{
  "rules": {
    ".read": true,
    ".write": "auth != null"  
  }
}
```

   * lock tables down and user can only edit their own data

```javascript
{
  "rules": {
    "recipe" :{
    	".read": true,
    	".write": true  
    },
    "favorite" :{
      ".read": true,
      "$id" : {
        "$userid" : {
          ".read": true,
          ".write": "$userid === auth.uid"
        }
      }
    }
  }
}
```

   * Data Validation

```javascript
{
  "rules": {
    "recipe" :{
    	".read": true,
    	".write": true  
    },
    "favorite" :{
      ".read": true,
      "$id" : {
        "$userid" : {
          ".read": true,
          ".write": "$userid === auth.uid",
          ".validate" : "newData.isBoolean() && data.val() != newData.val()"
        }
      }
    }
  }
}
```


# Possible Questions
1. Can we use API keys to deliver from CI
   * https://medium.com/@rohanbagchi/how-to-setup-continuous-integration-for-your-firebase-app-cd183bb862e1
   * Console -> Cog -> Users and Permissions
2. Cost?
   * Free, $25, Pay/usage
3. What other Features are available?
   * Functions, Messaging, Storage, new DB, analytics
4. Hosting Rollback
   * Console shows recent deploy history. Click of button reverts back to old version