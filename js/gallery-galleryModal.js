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
        let pageAttr = this.attributes['data-page'].textContent;
        let lgAttr = this.attributes['data-lg'].textContent;
        
        $.get('text/'+lgAttr+'/page'+pageAttr+'/text'+imgAttr+'.txt', function(data) {
        $('#galleryModal-text').text(data);
        },'text');
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}