var modal = document.getElementById("galleryModalID");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('galleryImages');
var modalImg = document.getElementById("galleryModalImageID");
var captionText = document.getElementById("galleryModal-text");

// Go through all of the images with our custom class
for (var i = 0 ; i < images.length; i++ ) {
    var image = images[i];
    image.onclick = function click(){
        modal.style.display = "block";
        modalImg.src = this.src;
        let imgAttr = this.attributes['data-text'].textContent;
        $.get('https://nikita-kutsenko.github.io/artists-portfolio/text'+imgAttr+'.txt', function(data) {
        $('#galleryModal-text').text(data);
        },'text');
        
        // 'https://nikita-kutsenko.github.io/artists-portfolio/text' + dataTitle + '.txt'
    }
}

$('.imgClick').click(function(){
    let imgAttr = this.attributes['data-text'].textContent;
    $.get('http://loc.casinosanalyzer.com:8081/build/text'+imgAttr+'.txt', function(data) {
      $('#finalText').text(data);
    },'text');
  });

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}