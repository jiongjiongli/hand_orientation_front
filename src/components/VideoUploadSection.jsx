import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function VideoUploadSection({ onFileUpload, label }) {
  const [videoFile, setVideoFile] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const url = URL.createObjectURL(file);
        setVideoFile(url);
        onFileUpload(file);
    };
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {'video/*': ['.mp4']},
        multiple: false
    });

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setVideoFile(url);
        onFileUpload(file);
    };

  return (
    // <div className="video-upload-section">
    //   <h3>{label} Video Upload</h3>
    //   <input type="file" accept="video/*" onChange={onUpload} />
    // </div>
    <div>
        <div style={{
          border: '2px solid #ccc',
          borderRadius: '5px'
        }}>
            <h2>Upload {label} Video</h2>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div style={{
                    border: '2px dashed #007bff',
                    borderRadius: '5px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer'
                }}>
                <p>Drag & drop a video here, or click to select one</p>
                </div>

                {/* <div style={{ marginTop: '20px' }}> */}
                {/*     <input */}
                {/*       type="file" */}
                {/*       accept="video/*" */}
                {/*       onChange={handleFileUpload} */}
                {/*       style={{ display: 'none' }} */}
                {/*       id={`${label}-file-upload`} */}
                {/*     /> */}
                {/*     <label htmlFor={`${label}-file-upload`} style={{ */}
                {/*       backgroundColor: '#007bff', */}
                {/*       color: 'white', */}
                {/*       padding: '10px 20px', */}
                {/*       borderRadius: '5px', */}
                {/*       cursor: 'pointer' */}
                {/*     }}> */}
                {/*       Upload Video */}
                {/*     </label> */}
                {/* </div> */}

                <div style={{ marginTop: '20px' }}>
                    <video src={videoFile} controls width="400" height="200"/>
                </div>

            </div>
        </div>
    </div>
  );
}

export default VideoUploadSection
