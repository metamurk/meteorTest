

Router.route( 'home', {
  path: '/',
  layoutTemplate: 'home',
  yieldTemplates: {
    'auctions': {to: 'auctions'},
    'categories': {to: 'categories'}
  },
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'home' );
    this.next();
  }
});

Router.route( 'Suscribe', {
  path: '/Suscribe',
  template: 'suscribe',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'suscribe' );
    this.next();
  }
});

Router.route( 'Login', {
  path: '/Login',
  template: 'login',
  onBeforeAction: function(){
    Session.set( 'currentRoute', 'login' );
    this.next();
  }
});

Router.map(function(){
    this.route('auctions', {
        layoutTemplate:'home',
        path:'/:name',
        data: function() {
            console.log(this.params.name);
            Session.set('category',this.params.name);
            // Meteor.render(Template.auctions);
        },
        template:'home'
    });
});

//Router.configure({
//  layoutTemplate:'home',
//  yieldTemplates:{
  //each yield going to different templates
//  'books':{to:'auctions'},
//  'categories':{to:'categories'}
//  }
//});
