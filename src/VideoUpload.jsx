import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function VideoUpload({ onFileUpload }) {
  const [videoFile, setVideoFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const url = URL.createObjectURL(file);
    setVideoFile(url);
    onFileUpload(file.name, url);  // Pass the file name and URL to the parent component
    // console.log('file:', file);
    // console.log('url:', url);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'video/*',
    multiple: false
  });

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoFile(url);
    onFileUpload(file.name, url);  // Pass the file name and URL to the parent component
  };

  return (
    <div>
      <div {...getRootProps()} style={{
        border: '2px dashed #007bff',
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer'
      }}>
        <input {...getInputProps()} />
        <p>Drag & drop a video here, or click to select one</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          id="file-upload"
        />
        <label htmlFor="file-upload" style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Upload Video
        </label>
      </div>

      <div style={{ marginTop: '20px' }}>
        <video src={videoFile} controls width="400" height="200"/>
      </div>

    </div>
  );
}

export default VideoUpload;
