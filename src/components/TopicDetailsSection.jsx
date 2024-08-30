import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize'
import './TopicDetailsSection.css'

function TopicDetailsSection({ topicDetails }) {
  return (
    <div className="topic-details-section">
      <h3>Topic Details</h3>
      <TextareaAutosize
        readOnly
        className="textarea-autosize"
        minRows={30}
        // maxRows={12}
        value={topicDetails}
        style={{
          width: '100%',
          height: '100%',
          boxSizing: 'border-box', // Include padding and border in width and height calculations
        }}
      />
    </div>
  );
}

export default TopicDetailsSection
