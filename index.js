const { downloadPokemonPicture } = require("./downloader.js");

downloadPokemonPicture().then(savedFileOutput => {
  console.log("New image is saved to: " + savedFileOutput);
}).catch(error => {
  console.log(error);
});

async function exampleDownload(){
  let savedFileOUtput = await downloadPokemonPicture();
  console.log("New image is async saved to: " + savedFileOutput);
}
exampleDownload();



