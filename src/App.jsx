// import VideoComparison from './VideoComparison.jsx'
import { useState } from 'react'
import VideoUploadSection from './components/VideoUploadSection.jsx'
import AnalyzeSection from './components/AnalyzeSection.jsx'
import CompareSection from './components/CompareSection.jsx'
import './App.css'

function App() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicDetails, setTopicDetails] = useState("");
  const [comparisonResult, setComparisonResult] = useState(null);
  const [videoPath, setVideoPath] = useState(null);

  const handleTeacherUpload = (file) => {
  };

  const handleStudentUpload = (file) => {
  };

  const analyzeVideo = () => {
    // Simulate analyzing the video and retrieving topics
    setTopics([
      { value: "1", title: "劈丝", startTime: "00:00", endTime: "01:00", detail: "Detail about 劈丝.", videoPath: "/videos/teacher_input_updown.mp4" },
      { value: "2", title: "梳绒", startTime: "01:01", endTime: "02:00", detail: "Detail about 梳绒.", videoPath: "/videos/teacher_input_updown.mp4" },
      { value: "3", title: "上铜丝", startTime: "02:01", endTime: "03:00", detail: "Detail about 上铜丝.", videoPath: "/videos/teacher_input_rotate.mp4" },
      { value: "4", title: "搓紧铜丝", startTime: "03:01", endTime: "04:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
      { value: "5", title: "剪绒条", startTime: "04:01", endTime: "05:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
      { value: "6", title: "滚绒", startTime: "05:01", endTime: "06:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
      { value: "7", title: "打尖", startTime: "06:01", endTime: "07:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
      { value: "8", title: "定型", startTime: "07:01", endTime: "08:00", detail: "Detail about the topic.", videoPath: "/videos/teacher_input_rotate.mp4" },
    ]);
  };

  const selectTopic = (topic) => {
    // setSelectedTopic(topic);
    // console.log('topic:', topic);
    // Simulate retrieving topic details
    setTopicDetails(topic['detail']);
    setVideoPath(topic['videoPath']);
  };

  const compareVideos = () => {
    // Simulate video comparison and return a new video URL
    setComparisonResult("/videos/output_rotate.mp4");
  };

  return (
    <div>
        {/* <h1>Video Comparison</h1> */}
        {/* <VideoComparison /> */}
        <VideoUploadSection onFileUpload={handleTeacherUpload} label="Teacher" />
        <AnalyzeSection
            onAnalyze={analyzeVideo}
            onSelectTopic={selectTopic}
            topics={topics}
            topicDetails={topicDetails}
            videoPath={videoPath}
        />

        <VideoUploadSection onFileUpload={handleStudentUpload} label="Student" />
        <CompareSection onCompare={compareVideos} comparisonResult={comparisonResult} />
    </div>
  )
}

export default App
