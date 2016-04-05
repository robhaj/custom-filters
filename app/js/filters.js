//convert snake_case to kebab-case
app.filter('kebab', function () {
  return function(input){
    return input
  }
});


//Returns an acronym
app.filter('acronym', function() {
  return function(input){
    return input
  }
});


//Alternates capitialization of string
app.filter('aLtCaPs', function() {
  return function(input){
    return input
  }
});


//Use with ng-repeat and filter the collection
app.filter('startsWithA', function () {
  return function(input) {
    return input
  }
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, search) {
    return input
  }
});

//Come up with on your own
app.filter('?????', function() {
  //Do Cool Things...
});
