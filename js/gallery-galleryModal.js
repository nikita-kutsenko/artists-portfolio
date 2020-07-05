var modal = document.getElementById("galleryModalID");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('galleryImages');
var modalImg = document.getElementById("galleryModalImageID");
var captionText = document.getElementById("galleryModal-text");
function readFiles(fileName) {
    var text = $.get(fileName, function(data) {
        // console.log(fileName);
        // console.log(data);
        return data;
    }, "text");
    // console.log(text);
    return text.responseText;
}

// Go through all of the images with our custom class
for (var i = 0 ; i < images.length; i++ ) {
    var image = images[i];
    image.onclick = function click(){
        modal.style.display = "block";
        modalImg.src = this.src;
        let dataTitle = this.getAttribute('data-title');
        console.log(dataTitle);
        console.log(readFiles('https://nikita-kutsenko.github.io/artists-portfolio/text' + dataTitle + '.txt'));
        captionText.innerHTML = readFiles('https://nikita-kutsenko.github.io/artists-portfolio/text' + dataTitle + '.txt');
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}