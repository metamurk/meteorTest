Template.suscribe.onRendered(function(){
  $('#application-signup').validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      emailAddress: {
        required: "Please enter your email address to sign up.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please enter a password to sign up.",
        minlength: "Please use at least six characters."
      }
    },
    submitHandler: function(){
      var user = {
        email: $('[name="emailAddress"]').val(),
        password: $('[name="password"]').val()
      };

      Accounts.createUser( {
        email: user.email,
        password: user.password,
        profile: {
          customer: {
            userId: "",
            name: "",
            streetAddress: "",
            secondaryAddress: "",
            city: "",
            state: "",
            zipCode: "",
            telephone: ""
          }
        }
      }, function( error, userId ){
        if( error ) {
          Bert.alert(error.reason, 'danger');
        } else {
          Bert.alert('Welcome to Pizza Planet!', 'success');
        }
      });
    }
  });
});

Template.suscribe.events({
  'submit form': function(e){
    // Prevent form from submitting.
    e.preventDefault();
   
    var email = $('[name=emailAddress]').val();
    var password = $('[name=password]').val();
    console.log("Susribe submitted. Email:"+email+" Password:"+password);
    Accounts.createUser({
      email: email,
      password: password
    }, function(error){
       if(error){
           console.log(error.reason); // Output error if registration fails
       } else {
          Router.go("home"); // Redirect user if registration succeeds
       }
    });
  }
});
