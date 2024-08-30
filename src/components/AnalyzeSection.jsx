import { useState } from 'react';
// import ScrollableSelect from './ScrollableSelect.jsx'
// import ScrollableTable from './ScrollableTable.jsx'
import TopicDetailsSection from './TopicDetailsSection.jsx'
// import MultiColumnSelect from './MultiColumnSelect'
import ScrollableMultiColumnSelect from './ScrollableMultiColumnSelect'
import './AnalyzeSection.css' // Import the CSS file for styling

function AnalyzeSection({ onAnalyze, onSelectTopic, topics, topicDetails, videoPath }) {
  return (
    <div className="analyze-section">
      {/* <h2>Analyze Teacher Video</h2> */}
      <div>
        <button onClick={onAnalyze}>Analyze</button>
      </div>

      <div style={{
          border: '2px solid #ccc',
          borderRadius: '5px'
        }}>
        <h3>Analyze Result</h3>
        <div className="content-container">
          <div className="left-section">
            <ScrollableMultiColumnSelect options={topics} handleChange={onSelectTopic} />
          </div>

          <div className="mid-section">
            {/* <ScrollableSelect /> */}
            {/* <ScrollableTable data={topics} onRowSelect={onSelectTopic} /> */}
            {/* <MultiColumnSelect /> */}
            <TopicDetailsSection topicDetails={topicDetails} />
          </div>

          <div className="right-section">
            <h3>Teacher Video Section</h3>
            <video src={videoPath} controls width={"400px"} height={"200px"} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default AnalyzeSection
