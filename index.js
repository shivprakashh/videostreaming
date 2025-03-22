const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();


// Video streaming route
app.get("/video", (req, res) => {
    const videoPath = path.join(__dirname, "public", "Download.mp4"); // Path to the video file
    const videoSize = fs.statSync(videoPath).size; // Get the video file size

    // Get the range header from the request
    const range = req.headers.range;
    console.log(range,"thi is range")
    if (!range) {
        return res.status(400).send("Requires Range header");
    }

    // Parse the range header (e.g., "bytes=1000000-")
    const CHUNK_SIZE = 10 ** 6; // 1MB chunk size
    const start = Number(range.replace(/\D/g, "")); // Start byte for the video chunk
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1); // End byte for the video chunk

    // Create a readable stream for the video chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    // Send response headers for partial content (206)
    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": "video/mp4",
    });

    // Pipe the video stream to the response
    videoStream.pipe(res);
});

// Serve an HTML page for testing
app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Video Streaming Test</h1>
                <video width="640" controls>
                    <source src="/video" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </body>
        </html>
    `);
});

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});