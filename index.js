const Jimp = require("jimp");

Jimp.read("./bpm-images/184.bmp", function (err, image) {
  if (err) {
    console.log(err);
  } else {
    image.write("new-image.png");
  }
});
