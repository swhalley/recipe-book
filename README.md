# Recipe Book
An introduction to firebase services


# Feature
Cards
    sort isn't case insensitive
Context API - 
    Move state up, 
    along with where Repository is called. Need to be able to pass user in
DB - Favorite recipes
    Functions - ?? need an idea ??
    some way to sync the #'s


#Favorite
This would update clicks in a sync manor. users may not override each other

var ref = firebase.database().ref('node/clicks');
ref.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
  return (currentClicks || 0) + 1;
});