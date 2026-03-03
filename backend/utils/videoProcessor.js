const { exec } = require('child_process');

/**
 * Cuts a video from start time to end time.
 * @param {string} inputFile - The path to the input video file.
 * @param {string} outputFile - The path to save the cut video file.
 * @param {string} startTime - The start time in the format hh:mm:ss.
 * @param {string} endTime - The end time in the format hh:mm:ss.
 */
function cutVideo(inputFile, outputFile, startTime, endTime) {
    const command = `ffmpeg -i ${inputFile} -ss ${startTime} -to ${endTime} -c copy ${outputFile}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error cutting video: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Video cut successfully: ${stdout}`);
    });
}

/**
 * Merges multiple videos into one.
 * @param {string[]} inputFiles - An array of input video file paths.
 * @param {string} outputFile - The path to save the merged video file.
 */
function mergeVideos(inputFiles, outputFile) {
    const fileList = inputFiles.map(file => `file '${file}'`).join('\n');
    const listFile = 'fileList.txt';

    // Create a temporary file list for FFmpeg
    require('fs').writeFileSync(listFile, fileList);

    const command = `ffmpeg -f concat -safe 0 -i ${listFile} -c copy ${outputFile}`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error merging videos: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`Videos merged successfully: ${stdout}`);
    });
}

module.exports = { cutVideo, mergeVideos };