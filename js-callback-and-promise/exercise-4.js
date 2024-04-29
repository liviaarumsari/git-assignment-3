function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.src = url;
    img.onload = function () {
      resolve(img);
    };

    img.onerror = function () {
      reject(new Error(`Failed to load image from URL: ${url}`));
    };
  });
}

loadImage('https://www.google.com/logos/doodles/2024/celebrating-tari-rangkuk-alu-6753651837110215-2xa.gif')
  .then((img) => {
    console.log("Image loaded successfully using promise:", img);
  })
  .catch((error) => {
    console.error("Failed to load image using promise:", error.message);
  });
