import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import TextareaAutosize from 'react-textarea-autosize'

function VideoUploadTeacherSection({ videoPath, setVideoPath, onFileUpload, conceptData, label }) {
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
                            <div style={{
                                margin: '0',
                            }}>
                                <p style={{
                                    margin: '0',
                                }}>Drag & drop a video here, or click to select one</p>
                            </div>
                        </div>
                    </div>

                </div>
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
                        // padding: '10px',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        margin: '0',
                    }}>
                          <textarea
                            readOnly
                            className="textarea-autosize"
                            // minRows={6}
                            value={conceptData}
                            style={{
                              width: '100%',
                              height: '100%',
                              boxSizing: 'border-box', // Include padding and border in width and height calculations
                              borderRadius: '4px',
                              padding: '4px', // Padding for content spacing inside the textarea
                              resize: 'none',
                              overflow: 'auto',
                              backgroundColor: '#f9f9f9',
                              margin: '0', // Ensure no margin
                            }}
                          />
                    </div>

                </div>


            </div>
        </div>
    </div>
  );
}

export default VideoUploadTeacherSection
