var modal = document.getElementById("galleryModalID");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.getElementsByClassName('galleryImages');
var modalImg = document.getElementById("galleryModalImageID");
var backImg = document.getElementById("galleryModalImageBackID");
var interiorImg = document.getElementById("galleryModalImageInteriorID");

var captionText = document.getElementById("galleryModal-text");

var frontBox = document.getElementById("galleryModalImageFrontBoxID");
var backBox = document.getElementById("galleryModalImageBackBoxID");
var interiorBox = document.getElementById("galleryModalImageInteriorBoxID");
var videoBox = document.getElementById("galleryModalVideoBoxID");
var lyrics = document.getElementById("galleryModal-lyrics");
var video = document.getElementById("video");

var frontBTN = document.getElementById('modal-front');
var interiorBTN = document.getElementById('modal-interior');
var backBTN = document.getElementById('modal-back'); 
var videoBTN = document.getElementById('modal-video');
var lyricsBTN = document.getElementById('modal-lyrics');

// Go through all of the images with our custom class
for (var i = 0 ; i < images.length; i++ ) {
    var image = images[i];
    image.onclick = function click(){
        modal.style.display = "block";
        modalImg.src = this.src;
        let imgAttr = this.attributes['data-text'].textContent;
        let pageAttr = this.attributes['data-page'].textContent;
        let lgAttr = this.attributes['data-lg'].textContent;

        if (lgAttr === "en") {
            $.get('../../../input/gallery/text/'+lgAttr+'/page'+pageAttr+'/text'+imgAttr+'.txt', function(data) {
                $('#galleryModal-text').text(data);
            },'text');

            $.get('../../../input/gallery/img/page'+pageAttr+'/back'+imgAttr+'.jpeg'
            ).done(function(){
                backBTN.style.display = "block";
                backImg.src = '../../../input/gallery/img/page'+pageAttr+'/back'+imgAttr+'.jpeg';
            }).fail(function(){
                backBTN.style.display = "none";
            });
            
            $.get('../../../input/gallery/img/page'+pageAttr+'/interior'+imgAttr+'.jpeg'
            ).done(function(){
                interiorBTN.style.display = "block";
                interiorImg.src = '../../../input/gallery/img/page'+pageAttr+'/interior'+imgAttr+'.jpeg';
            }).fail(function(){
                interiorBTN.style.display = "none";
            });

            // $.get(`../../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
            // ).done(function(){
            //     videoBTN.style.display = "block";
            //     video.src = `../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
            // }).fail(function(){
            //     videoBTN.style.display = "none";
            // });

            // $.get(`../../../input/gallery/lyrics/page${pageAttr}/video${imgAttr}.mp4`
            // ).done(function(){
            //     videoBTN.style.display = "block";
            //     video.src = `../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
            // }).fail(function(){
            //     videoBTN.style.display = "none";
            // });

            // $.get('../../../input/gallery/lyrics/'+lgAttr+'/page'+pageAttr+'/lyrics'+imgAttr+'.txt', function(data) {
            //     console.log('data :>> ', data);
            //     lyrics.innerHTML = data;
            // },'text').done(function(){
            //     console.log('lgAttr :>> ', lgAttr);
            //     lyricsBTN.style.display = "block";
            // }).fail(function(){
            //     lyricsBTN.style.display = "none";
            // });
            //video.src = `../../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
        } else {
            $.get('../../input/gallery/text/'+lgAttr+'/page'+pageAttr+'/text'+imgAttr+'.txt', function(data) {
                $('#galleryModal-text').text(data);
            },'text');

            $.get('../../input/gallery/img/page'+pageAttr+'/back'+imgAttr+'.jpeg'
            ).done(function(){
                backBTN.style.display = "block";
                backImg.src = '../../input/gallery/img/page'+pageAttr+'/back'+imgAttr+'.jpeg';
            }).fail(function(){
                backBTN.style.display = "none";
            });

            $.get('../../input/gallery/img/page'+pageAttr+'/interior'+imgAttr+'.jpeg'
            ).done(function(){
                interiorBTN.style.display = "block";
                interiorImg.src = '../../input/gallery/img/page'+pageAttr+'/interior'+imgAttr+'.jpeg';
            }).fail(function(){
                interiorBTN.style.display = "none";
            });

            $.get(`../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
            ).done(function(){
                videoBTN.style.display = "block";
                video.src = `../../input/gallery/video/page${pageAttr}/video${imgAttr}.mp4`
            }).fail(function(){
                videoBTN.style.display = "none";
            });

            $.get('../../input/gallery/lyrics/'+lgAttr+'/page'+pageAttr+'/lyrics'+imgAttr+'.txt', function(data) {
                lyrics.innerHTML = data;
            },'text').done(function(){
                lyricsBTN.style.display = "block";
            }).fail(function(){
                lyricsBTN.style.display = "none";
            });
        }
    }

    frontBTN.onclick = function click(){
        frontBox.style.display = "block";
        frontBTN.style.color = "#D5C4B2";
        frontBTN.style.borderBottom = "1px solid #D5C4B2";

        backBox.style.display = "none";
        backBTN.style.color = "#ffffff";
        backBTN.style.borderBottom = "none";

        interiorBox.style.display = "none";
        interiorBTN.style.color = "#ffffff";
        interiorBTN.style.borderBottom = "none";

        videoBox.style.display = "none";
        videoBTN.style.color = "#ffffff";
        videoBTN.style.borderBottom = "none";

        lyrics.style.display = "none";
        lyricsBTN.style.color = "#ffffff";
        lyricsBTN.style.borderBottom = "none";

        captionText.style.display = "block";

        video.pause();
    }

    backBTN.onclick = function click(){
        frontBox.style.display = "none";
        frontBTN.style.color = "#ffffff";
        frontBTN.style.borderBottom = "none";

        backBox.style.display = "block";
        backBTN.style.color = "#D5C4B2";
        backBTN.style.borderBottom = "1px solid #D5C4B2";
        
        interiorBox.style.display = "none";
        interiorBTN.style.color = "#ffffff";
        interiorBTN.style.borderBottom = "none";

        videoBox.style.display = "none";
        videoBTN.style.color = "#ffffff";
        videoBTN.style.borderBottom = "none";

        lyrics.style.display = "none";
        lyricsBTN.style.color = "#ffffff";
        lyricsBTN.style.borderBottom = "none";

        captionText.style.display = "block";

        video.pause();
    }

    interiorBTN.onclick = function click(){
        frontBox.style.display = "none";
        frontBTN.style.color = "#ffffff";
        frontBTN.style.borderBottom = "none";

        backBox.style.display = "none";
        backBTN.style.color = "#ffffff";
        backBTN.style.borderBottom = "none";
        
        interiorBox.style.display = "block";
        interiorBTN.style.color = "#D5C4B2";
        interiorBTN.style.borderBottom = "1px solid #D5C4B2";

        videoBox.style.display = "none";
        videoBTN.style.color = "#ffffff";
        videoBTN.style.borderBottom = "none";

        lyrics.style.display = "none";
        lyricsBTN.style.color = "#ffffff";
        lyricsBTN.style.borderBottom = "none";

        captionText.style.display = "block";

        video.pause();
    }

    videoBTN.onclick = function click(){
        frontBox.style.display = "none";
        frontBTN.style.color = "#ffffff";
        frontBTN.style.borderBottom = "none";

        backBox.style.display = "none";
        backBTN.style.color = "#ffffff";
        backBTN.style.borderBottom = "none";
        
        interiorBox.style.display = "none";
        interiorBTN.style.color = "#ffffff";
        interiorBTN.style.borderBottom = "none";

        videoBox.style.display = "flex";
        videoBTN.style.color = "#D5C4B2";
        videoBTN.style.borderBottom = "1px solid #D5C4B2";

        lyrics.style.display = "none";
        lyricsBTN.style.color = "#ffffff";
        lyricsBTN.style.borderBottom = "none";

        captionText.style.display = "block";

        video.load();
        video.play();
    }

    lyricsBTN.onclick = function click(){
        frontBox.style.display = "none";
        frontBTN.style.color = "#ffffff";
        frontBTN.style.borderBottom = "none";

        backBox.style.display = "none";
        backBTN.style.color = "#ffffff";
        backBTN.style.borderBottom = "none";
        
        interiorBox.style.display = "none";
        interiorBTN.style.color = "#ffffff";
        interiorBTN.style.borderBottom = "none";

        videoBox.style.display = "none";
        videoBTN.style.color = "#ffffff";
        videoBTN.style.borderBottom = "none";

        lyrics.style.display = "block";
        lyricsBTN.style.color = "#D5C4B2";
        lyricsBTN.style.borderBottom = "1px solid #D5C4B2";

        captionText.style.display = "none";

        video.pause();
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("galleryModal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    frontBox.style.display = "block";
    frontBTN.style.color = "#D5C4B2";
    frontBTN.style.borderBottom = "1px solid #D5C4B2";

    backBox.style.display = "none";
    backBTN.style.color = "#ffffff";
    backBTN.style.borderBottom = "none";

    interiorBox.style.display = "none";
    interiorBTN.style.color = "#ffffff";
    interiorBTN.style.borderBottom = "none";

    videoBox.style.display = "none";
    videoBTN.style.color = "#ffffff";
    videoBTN.style.borderBottom = "none";

    lyrics.style.display = "none";
    lyricsBTN.style.color = "#ffffff";
    lyricsBTN.style.borderBottom = "none";

    captionText.style.display = "block";

    video.pause();
}