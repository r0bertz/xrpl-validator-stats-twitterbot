var fs = require('fs'),
    path = require('path'),
    Twit = require('twit'),
    config = require(path.join(__dirname, 'config.js'));

var T = new Twit(config.twitter);

var image_path = '/tmp/validator-stats.jpg';
var url = 'https://stats.xrplapps.com/validators/report/?vpk=' + config.validator_pubkey;

function random_from_array(images){
  return images[Math.floor(Math.random() * images.length)];
}

function upload_random_image(image_path){
  console.log('Opening image...');
  var b64content = fs.readFileSync(image_path, { encoding: 'base64' });

  console.log('Uploading image...');
  T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    if (err){
      console.log('ERROR:');
      console.log(err);
    }
    else{
      console.log('Image uploaded!');
      console.log('Now tweeting it...');

      T.post('statuses/update', {
        status: 'xrp.ninja validator stats as of ' + (new Date()).toDateString() + ' #xrpthestandard #xrpcommunity #xrparmy ' + url,
        media_ids: new Array(data.media_id_string)
      },
        function(err, data, response) {
          if (err){
            console.log('ERROR:');
            console.log(err);
          }
          else{
            console.log('Posted an image!');
          }
        }
      );
    }
  });
}

const { exec } = require("child_process");

exec(['wkhtmltoimage', url, image_path].join(' '), (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
    }
    console.log(`stdout: ${stdout}`);
    upload_random_image(image_path);
});
