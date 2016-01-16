// Is the code running in the client? the browser?
if (Meteor.isClient) {
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


  Template.images.helpers ({data_images: images})
}

// Is the code running in the server?
if (Meteor.isServer) {
  console.log("Running in Server!");
}
