// import VideoComparison from './VideoComparison.jsx'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { scrollToTop } from './utils/scrollToTop'; // Import the scrollToTop function

import MainSection from './components/MainSection.jsx'
import Analyze from './components/Analyze';
import Compare from './components/Compare';
import './App.css'

function App() {
  return (
    <div>
        {/* <MainSection /> */}
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav style={{
                    position: 'fixed',  // Fixes the navbar at the top
                    top: 0,
                    left: 0,            // Ensures the navbar starts from the left edge
                    width: '100%',
                    backgroundColor: 'white',
                    zIndex: 1000,  // Keeps the navbar above other content
                    width: '100%',
                    padding: '10px',
                    borderBottom: '1px solid #ddd',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                  <ul style={{
                    listStyleType: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'flex',
                    gap: '20px',
                  }}>
                    <li>
                      <Link
                        to="/analyze"
                        onClick={scrollToTop}  // Scroll to top on click
                        style={{
                            // textDecoration: 'none',
                            textDecoration: 'underline', // Adds underline
                            color: '#007bff',
                            padding: '8px 16px',  // Adds space around the text
                            // borderBottom: '2px solid #007bff',  // Adds a border
                            // borderRadius: '4px',  // Rounds the corners of the border
                            transition: 'border-color 0.3s', // Smooth transition for border color
                        }}
                      >
                        Video Analysis
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/compare"
                        onClick={scrollToTop}  // Scroll to top on click
                        style={{
                            // textDecoration: 'none',
                            textDecoration: 'underline', // Adds underline
                            color: '#007bff',
                            padding: '8px 16px',  // Adds space around the text
                            // borderBottom: '2px solid #007bff',  // Adds a border
                            // borderRadius: '4px',  // Rounds the corners of the border
                            transition: 'border-color 0.3s', // Smooth transition for border color
                        }}
                        onMouseOver={(e) => e.target.style.color = '#0056b3'} // Darker color on hover
                        onMouseOut={(e) => e.target.style.color = '#007bff'} // Reset color on hover out
                      >
                        Video Comparison
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Main Content */}
                <div style={{ padding: '20px' }}>
                  <Routes>
                    {/* Default route points to the Analyze component */}
                    <Route path="/analyze" element={<Analyze />} />
                    <Route path="/compare" element={<Compare />} />
                  </Routes>
                </div>
            </div>
    </Router>
    </div>
  )
}

export default App
