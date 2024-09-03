import React, { useEffect, useState } from 'react'
import VideoUploadSec from './VideoUploadSec.jsx'
import CompareSection from './CompareSection.jsx'

const Compare = () => {
  const [compareData, setCompareData] = useState(null);

  const [teacherVideoPath, setTeacherVideoPath] = useState(null);
  const [stuVideoPath, setStuVideoPath] = useState(null);

  const [teacherFile, setTeacherFile] = useState(null);
  const [stuFile, setStuFile] = useState(null);

  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicDetails, setTopicDetails] = useState("");

  const [comparisonResult, setComparisonResult] = useState(null);
  const [videoClipPath, setVideoClipPath] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch('/compare_data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCompareData(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching the JSON file:', error);
      });
  }, []);

  const handleTeacherUpload = (file) => {
    setTeacherFile(file);
    setStuVideoPath('');
    setComparisonResult('');
  };

  const handleStudentUpload = (file) => {
    setStuFile(file);
    setComparisonResult('');
  };


  const compareVideos = () => {
    // Simulate video comparison and return a new video URL
    const fileData = compareData.find((item) => item.stu_file_name === stuFile.name);
    const video_file_path = fileData ? fileData.video_file_path : '';
    setComparisonResult(video_file_path);
  };

  return (
    <div>
        <div style={{
            display: 'flex',
            width: '100%',
            // border: '1px solid #ccc',
            // borderRadius: '5px',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
        }}>

                <VideoUploadSec
                  videoPath={teacherVideoPath}
                  setVideoPath={setTeacherVideoPath}
                  onFileUpload={handleTeacherUpload}
                  label="Teacher" />

                <VideoUploadSec
                  videoPath={stuVideoPath}
                  setVideoPath={setStuVideoPath}
                  onFileUpload={handleStudentUpload}
                  label="Student" />

        </div>

        <CompareSection onCompare={compareVideos} comparisonResult={comparisonResult} />
    </div>
  );
};

export default Compare;
