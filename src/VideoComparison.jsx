import React, { useState } from 'react';
import VideoUpload from './VideoUpload';

function VideoComparison() {
  const [status, setStatus] = useState('Not started');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleCompare = () => {
    // Reset elapsed time and start the timer
    setElapsedTime(0);
    const secondsElapsed = 0;
    const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
    const message = `Processing: ${minutes} minute(s) and ${seconds} second(s) elapsed`;
    setStatus(message);

    const start = Date.now();

    const newTimer = setInterval(() => {
      const secondsElapsed = Math.floor((Date.now() - start) / 1000);
      setElapsedTime(secondsElapsed);
      const minutes = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
      const seconds = (secondsElapsed % 60).toString().padStart(2, '0');
      const message = `Processing: ${minutes} minute(s) and ${seconds} second(s) elapsed`;
      setStatus(message);
    }, 1000);

    setTimer(newTimer);

    const timeout_ms = 3 * 1000;

    // Simulate processing time
    setTimeout(() => {
      clearInterval(newTimer);
      const outout_video_file = '/videos/output_cut_down.mp4'
      setVideoFile(outout_video_file);
      setStatus('Completed! Please see the comparison result below.');
    }, timeout_ms);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{
          border: '2px solid #ccc',
          borderRadius: '5px'
        }}>
          <h2>Upload Teacher Video</h2>
          <VideoUpload />
        </div>
        <div style={{
          border: '2px solid #ccc',
          borderRadius: '5px'
        }}>
          <h2>Upload Student Video</h2>
          <VideoUpload />
        </div>
      </div>
      <button onClick={handleCompare}>Compare</button>
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '5px'
      }}>
        <h2>Comparison Status</h2>
        <div className="status-bar"> {status} </div>
      </div>
      <div style={{
        border: '2px solid #ccc',
        borderRadius: '5px'
      }}>
        <h2>Comparison Result</h2>
        <video src={videoFile} controls width={400 * 2} height="200"/>
      </div>
    </div>
  );
}

export default VideoComparison;
