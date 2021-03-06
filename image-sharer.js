Images = new Mongo.Collection("images"); 
console.log(Images.find().count());

// Is the code running in the client? the browser? 
if (Meteor.isClient) {

  FlowRouter.route('/blog/:postId', {
    name: 'blogPost',
    action: function(params) {
      console.log("This is my blog post:", params.postId);
    }
  });

  FlowRouter.route('/', {
    name: 'home',
    action: function(params) {
      console.log("This is my blog post:", params.postId);
    }
  });

  Accounts.ui.config({ passwordSignupFields: "USERNAME_ONLY" });

  console.log("Running in Client!");

  var images = Images.find({})

  Template.body.helpers({ 
    username: function(){ 
      if (Meteor.user()) { 
        console.log(Meteor.user()) 
        return Meteor.user().username.toUpperCase();
      } else {   
        return "World!";

      };     
    }   
  })
  Template.body.events({
    "click .add-image" : function(e){
        // alert($('#new-image').val());
        var url = $('#new-image').val();
        Images.insert({
          image_src: url,
          createdOn: new Date(),
          createdBy: Meteor.user()._id
        })
        return false;
      },
    "click .caption" : function(e){
      Images.remove(this._id)
    }
    })

  Template.images.helpers ({
    data_images: images,
    getUser : function(user_id) {
      var user = Meteor.users.findOne({_id:user_id});
      if (user) {
        return user.username;
      }else {
        return "anonymous";
      };
    }
  })   
  
  Template.time.helpers({now: new Date() }) 
}

// Is the code running in the server? 
if (Meteor.isServer) {
  console.log("Running in Server!"); 
}
