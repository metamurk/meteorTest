
createCategories = function() {

  console.log("createCategories");
  var categoriesCount = Categories.find().count();
  if ( categoriesCount < 1 ) {
     console.log("createCategories");
     Categories.insert({name:'Tech'});
     Categories.insert({name:'Design'});
     Categories.insert({name:'Business'});
     Categories.insert({name:'Science'});
     Categories.insert({name:'Scifi'});
     Categories.insert({name:'Psychology'});
  }
};
