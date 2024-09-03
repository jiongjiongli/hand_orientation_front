import React, { useEffect, useState } from 'react'
import VideoUploadSection from './VideoUploadSection.jsx'
import VideoUploadTeacherSection from './VideoUploadTeacherSection.jsx'
import AnalyzeSection from './AnalyzeSection.jsx'

const Analyze = () => {
  const [infoData, setInfoData] = useState(null);
  const [conceptData, setConceptData] = useState(null);

  const [teacherVideoPath, setTeacherVideoPath] = useState(null);

  const [teacherFile, setTeacherFile] = useState(null);

  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicDetails, setTopicDetails] = useState("");

  const [videoClipPath, setVideoClipPath] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch('/preprocess_data_001.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInfoData(data); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching the JSON file:', error);
      });

      fetch('/concept.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setConceptData(data['en']); // Update state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching the JSON file:', error);
      });
  }, []);

  const handleTeacherUpload = (file) => {
    setTeacherFile(file);
  };

  const analyzeVideo = () => {
    // Simulate analyzing the video and retrieving topics
    const fileData = infoData.find((item) => item.file_path === teacherFile.name);
    const topics = fileData ? fileData.steps : [];
    const updatedTopics = topics.map((item, index) => ({ ...item, value: index }));
    setTopics(updatedTopics);
    // setTopics([
    //   { value: "1", title: "劈丝", startTime: "00:00", endTime: "01:00", detail: "Detail about 劈丝.", videoPath: "/videos/teacher_input_updown.mp4" },
    //   { value: "2", title: "梳绒", startTime: "01:01", endTime: "02:00", detail: "Detail about 梳绒.", videoPath: "/videos/teacher_input_updown.mp4" },
    //   { value: "3", title: "上铜丝", startTime: "02:01", endTime: "03:00", detail: "Detail about 上铜丝.", videoPath: "/videos/teacher_input_rotate.mp4" },
    //   { value: "4", title: "搓紧铜丝", startTime: "03:01", endTime: "04:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    //   { value: "5", title: "剪绒条", startTime: "04:01", endTime: "05:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    //   { value: "6", title: "滚绒", startTime: "05:01", endTime: "06:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    //   { value: "7", title: "打尖", startTime: "06:01", endTime: "07:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    //   { value: "8", title: "定型", startTime: "07:01", endTime: "08:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    // ]);
  };

  const selectTopic = (topic) => {
    // setSelectedTopic(topic);
    // console.log('topic:', topic);
    // Simulate retrieving topic details
    setTopicDetails(topic['text']);
    const video_name = topic['input_video_path'];
    setVideoClipPath(`/videos/${video_name}`);
  };

  return (
    <div>
        <VideoUploadTeacherSection
          videoPath={teacherVideoPath}
          setVideoPath={setTeacherVideoPath}
          onFileUpload={handleTeacherUpload}
          conceptData={conceptData}
          label="Teacher"
        />

        <AnalyzeSection
            onAnalyze={analyzeVideo}
            onSelectTopic={selectTopic}
            topics={topics}
            topicDetails={topicDetails}
            videoClipPath={videoClipPath}
        />
    </div>
  );
};

export default Analyze;
