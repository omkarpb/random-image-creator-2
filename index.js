const { createCanvas } = require('canvas');


class ImageGenerator {
    constructor(imagePath) {
        this.imagePath = imagePath;
    }

    generateImage() {
        const canvas = createCanvas(200, 200);
        const ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        ctx.stroke();

        const imageBuf = canvas.toBuffer("image/png");
        return imageBuf;
    }
}

module.exports = ImageGenerator;
