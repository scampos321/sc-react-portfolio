import React from 'react'
import resume from '../images/googledoc.png'
function Resume() {
    return (
              <div className="text-center">
                <div className="resume">
                  <h2 className="resume-title">Resume</h2>
                  
                  <a href="https://docs.google.com/document/d/1uzQiSyIjDc-z1PzZrZfoduGxXwPOJK2haGB9ZoaDHv8/edit?usp=sharing">
                    <img className="googledocs" src={resume} alt="resume"/>
                  </a>
                  
                  
                </div>
                </div>
              );
}

export default Resume
