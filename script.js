<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
$(document).ready(function() {
console.log("hi");

var links = [
  'Bags/blessings-1.zip',
  'Bags/blessings-2.zip',
];

function downloadRandom(){
  var randomLink = getRandom(links);
}


$('.download-button').click(function(event) {
      event.preventDefault();
      window.download(downloadRandom(), '_blank');
  });
