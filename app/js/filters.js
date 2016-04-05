// //convert snake_case to kebab-case
// app.filter('kebab', function () {
//   return function(input){
//     return input.split('_').join('-')
//   }
// });


// //Returns an acronym
// app.filter('acronym', function() {
//   return function(input){
//     return input.match(/\b(\w)/g).join('');
//   }
// });


// //Alternates capitialization of string(did camecase instead-caleb)
// app.filter('aLtCaPs', function() {
//   return function(input){
//     return input.replace(/^([A-Z])|[\s-_](\w)/g, function(match, p1, p2, offset) {
//         if (p2) return p2.toUpperCase();
//         return p1.toLowerCase();        
//     });
//   }
// });


//Use with ng-repeat and filter the collection
app.filter('startsWithA', function() {
  return function(input) {
    var friends = [];
    for (var i =0; i < input.length; i ++) {
      if (input[i].name[0] === 'A') {
        friends.push(input[i]);
        return friends;
      }  
    }
  }
});

//Use with ng-repeat and an input to search a collection for string match
app.filter('strMatch', function () {
  return function (input, letter) {
    var searchResult = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].name === letter) {
        searchResult.push(input[i]);
        return searchResult;
      }
    }
  }
});
