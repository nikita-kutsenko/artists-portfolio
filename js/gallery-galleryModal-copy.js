var modal = document.getElementById("galleryModalID");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('galleryImages');
var modalImg = document.getElementById("galleryModalImageID");
var captionText = document.getElementById("galleryModal-text");

// var textLink = ['text0.txt', 'text1.txt','text2.txt','text3.txt','text4.txt','text5.txt','text6.txt','text7.txt','text8.txt'];

// Go through all of the images with our custom class
for (var i = 0 ; i < images.length; i++ ) {
    var image = images[i];

    image.onclick = function click(){
        modal.style.display = "block";
        modalImg.src = this.src;
        link = this.alt;
        captionText.innerHTML = function readFiles() {
            $.get('text0.txt', function(data) {
                captionText.innerHTML = data;
            }, "text");
        }
    } 
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}