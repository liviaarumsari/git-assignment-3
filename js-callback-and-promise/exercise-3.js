function loadImage(url, callback) {
    const img = new Image();
    img.src = url;

    img.onload = function () {
        callback(null, img);
    };
    img.onerror = function() {
        callback(new Error(`Failed to load image from URL: ${url}`), null)
    };
}

loadImage('https://www.google.com/logos/doodles/2024/celebrating-tari-rangkuk-alu-6753651837110215-2xa.gif', function(error, image) {
    if (error) {
        console.error('Failed to load image:', error.message);
    } else {
        console.log('Image loaded successfully:', image);
    }
})