Template.auctions.helpers({
  catnotselected:function() {
    return Session.equals('category',null);
  },
  category:function() {
    return  Session.get('category');
  },
  auctionlist:function(){

    var cat = Session.get('category');
    var auctions =  Auctions.find({category:Session.get('category')});
    return auctions;
  }
});

Template.auction1.helpers({
  auctionPicture: function() {
    var file =  Images.findOne({auctionRef: this._id});
    console.log(file);
    return file;
  },
  numLikes:function() {
    return Likes.find({book:this._id}).count();
  },
  likesThis:function() {
    var doeslike = Likes.findOne({muser:Meteor.userId(),book:this._id});
    if (doeslike) {
      return "You liked this";
    }
  }
});


Template.auction1.events({
  'click .like':function(event, template){
    var curlike = Likes.findOne({ muser:Meteor.userId(), book:template.data._id});
      if (!curlike) {
          Likes.insert({muser:Meteor.userId(),book:template.data._id});
      }
        Session.set('updated',new Date());
  }
});


Template.auctions.rendered = function() {
  console.log("renered");
  setTimeout(function(){
    masonize(function(){

    })
  }, 10);
}


function masonize(callback) {
  var container = $('#mainContent');
  container.masonry({
    itemSelector: '.item',
    gutter:10
  })
  if(callback){callback()};
}
