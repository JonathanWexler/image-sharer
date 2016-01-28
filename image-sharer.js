Images = new Mongo.Collection("images");
console.log(Images.find().count());

// Is the code running in the client? the browser?
if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
  console.log("Running in Client!");

  var images = [
  {
    image_src: "guyf.gif",
    image_alt: "Reverse Guy"
  },
  {
    image_src: "alanb.gif",
    image_alt: "Alan as Bieber"
  },
  {
    image_src: "alan.gif",
    image_alt: "Alan Gif"
  }
  ]
  Template.body.helpers({
    username: function(){
      if (Meteor.user()) {
        console.log(Meteor.user())
        return Meteor.user().emails[0].address;

      } else {
        return "Jon";

      };
    }
  })

  Template.images.helpers ({data_images: images})
  Template.time.helpers({
    now: new Date()
  })
}

// Is the code running in the server?
if (Meteor.isServer) {
  console.log("Running in Server!");
}
