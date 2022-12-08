import React from 'react';

const Video = ({ source }) => {
    
    return (
      <>
        <video src={source} width="100%" height="100%" autoplay="true" loop="true" muted="true"></video>
      </>
    );
  };
  
  export default Video;
  
