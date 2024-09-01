import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function VideoUploadSection({ videoPath, setVideoPath, onFileUpload, label }) {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const url = URL.createObjectURL(file);
        setVideoPath(url);
        onFileUpload(file);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {'video/*': ['.mp4']},
        multiple: false
    });

    // const handleFileUpload = (e) => {
    //     const file = e.target.files[0];
    //     const url = URL.createObjectURL(file);
    //     setVideoPath(url);
    //     onFileUpload(file);
    // };

  return (
    // <div className="video-upload-section">
    //   <h3>{label} Video Upload</h3>
    //   <input type="file" accept="video/*" onChange={onUpload} />
    // </div>
    <div>
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxSizing: 'border-box',
            width: '100%',
        }}>
            <h2>Upload {label} Video</h2>
            <div style={{
                display: 'flex',
                width: '100%',
                // border: '1px solid #ccc',
                // borderRadius: '5px',
                boxSizing: 'border-box',
                margin: '0',
                padding: '0',
            }}>

                <div style={{
                    flex: '1',
                    border: '1px solid #ccc',
                    // borderRadius: '5px',
                    width: '100%',
                    // padding: '20px',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    margin: '0',
                }}>
                    <div style={{
                        // border: '1px solid #ccc',
                        // borderRadius: '5px',
                        width: '100%',
                        height: '100%',
                        padding: '20px',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        margin: '0',
                    }}>
                        <div {...getRootProps() } style={{
                            border: '2px dashed #007bff',
                            borderRadius: '5px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            boxSizing: 'border-box',
                            height: '100%',
                            // width: '100%',
                            display: 'flex',
                            justifyContent: 'center', // Center horizontally
                            alignItems: 'center', // Center vertically
                            // borderRadius: '5px',
                            // padding: '20px',
                            // textAlign: 'center',
                            // cursor: 'pointer',
                            boxSizing: 'border-box',
                            height: '100%',
                            margin: '0',
                            // width: '100%',
                        }}>
                            <input {...getInputProps()} />
                            <div>
                                <p>Drag & drop a video here, or click to select one</p>
                            </div>
                        </div>
                    </div>


                </div>

                <div style={{
                    flex: '1',
                    border: '1px solid #ccc',
                    // borderRadius: '5px',
                    // width: '100%',
                    // height: '100%',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    margin: '0',
                    display: 'flex',
                    justifyContent: 'center', // Center horizontally
                    alignItems: 'center', // Center vertically
                }}>
                    <video src={videoPath} controls width="300"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default VideoUploadSection
