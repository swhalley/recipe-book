# Recipe Book
An introduction to firebase services

# Requirements
* Node js 6+ LTS Recommended 
* Google Account
     
# Prep to do ahead of time
   * Clone Repo @ version without firebase files
   * Run `npm install` && `npm build`
   * Get real instructions via dry run below.
      * Dont forget about --reauth just in case login is stale

# Demo
1. Show Current Demo and let people play
    * Show DB + app at same time to show RT database
2. Review Code - show Repos that utilize Firebase
3. Review Console
   * https://console.firebase.google.com
4. Demo 
   * install Firebase Tools
      * `npm install -g firebase-tools`
   * Init firebase w/ wizard
      * `firebase login`
      * `firebase init`
   * Create Application in console
      * Leave the DB public
      * setup new hosting name (peidevs-demo)
      * Setup Auth for google only
   * Get api keys from firebase console
   * Deploy the Code
      * `npm build`
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
    ".write": "$userid === auth.uid"  
  }
}
```

   * lock tables down 

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