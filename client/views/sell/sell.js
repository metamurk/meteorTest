AutoForm.hooks({
 auctionInsertForm: {
   after: {
     insert: function(error, result, template) {

	   var auction = Auctions.findOne(result);

       insertedFile = Auctions.findOne(result).picture;
       Images.update({_id: insertedFile}, {$set: {'auctionRef': result}});
       console.log("insert "+insertedFile);
       console.log("result "+result);
     }
   }
 }
});


