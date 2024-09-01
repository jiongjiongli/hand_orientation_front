import { useState } from 'react';

function CompareSection({ onCompare, comparisonResult }) {
  return (
    <div className="compare-section"  style={{
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}>
      {/* <h2>Compare Teacher and Student Videos</h2> */}
      <div>
        <button onClick={onCompare}>Compare</button>
      </div>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        <div className="result-video">
          <h3>Comparison Result</h3>
          <video controls src={comparisonResult} width={300 * 2} />
        </div>
      </div>

    </div>
  );
}

export default CompareSection
