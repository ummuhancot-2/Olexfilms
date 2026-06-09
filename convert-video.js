const ffmpegPath = require('ffmpeg-static');
const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');
const input = path.resolve('public/video/video.MOV');
const output = path.resolve('public/video/video.mp4');
console.log('ffmpeg binary:', ffmpegPath);
if (!fs.existsSync(input)) {
  console.error('Input not found:', input);
  process.exit(1);
}
execFile(ffmpegPath, ['-y', '-i', input, '-movflags', '+faststart', '-pix_fmt', 'yuv420p', '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2', output], (err, stdout, stderr) => {
  if (err) {
    console.error('Conversion error:', err);
    console.error(stderr);
    process.exit(1);
  }
  console.log('Converted to', output);
});
