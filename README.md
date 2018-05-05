# Recipe Book
An introduction to firebase services

# Requirements
* Node js 6+ LTS Recommended 
* Google Account


# Firebase Function Ideas
Favorite
    Slack message - congratulate in slack when 10 favorites
    sync the calls as part of a function instead of in code?
    send note to another user when their recipe is favorited (via cloud messaging)
Audit/Logging
    Can we intercept and log every request?
This should be something user specific so we can make sure the tables can be locked down        

# Favorite
This would update clicks in a sync manor. users may not override each other

var ref = firebase.database().ref('node/clicks');
ref.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
  return (currentClicks || 0) + 1;
});

# Prep
   * Clone Repo @ version without firebase files (Do this ahea)

# Demo
1. Show Current Demo and let people play
    * Show DB + app at same time to show RT database
2. Review Code points that utilize Firebase
3. Review Console
4. Demo 
   * install firebase-tools -g
   * Init firebase w/ wizard
   * Create Application in console
      * Leave the DB public
      * setup new hosting name (peidevs-demo)
      * Setup Auth for google only
   * Get api keys from firebase console
   * deploy
   * give new url and let people play again
5. Secure DB
    * public
    * secure to only logged in users
    * lock tables down by user
