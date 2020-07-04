var modal = document.getElementById("galleryModalID");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('galleryImages');
var modalImg = document.getElementById("galleryModalImageID");
var captionText = document.getElementById("galleryModal-text");

let fileLink = new Array();

// Go through all of the images with our custom class
for (var i = 0 ; i < images.length; i++ ) {
    var image = images[i];
    fileLink[i] = 'file' + i + '.txt'; 
    console.log(fileLink[i]);

    
    image.onclick = function click(){
        console.log(fileLink[i]);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = readFiles(fileLink[i]);
         // captionText.innerHTML = 'Smth would be here from a file';
        // captionText.style.display = "block";
    };

    function readFiles(link) {
        console.log(link);
        $.get("'" + link + "'" , function(data) {
            alert(data);
        }, "text");
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};