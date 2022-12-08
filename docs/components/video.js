import React from 'react';

const Video = ({ filename }) => {
    
    return (
      <>
        <video src={"../../../videos/" + filename} width="100%" height="100%" autoplay="true" loop="true" muted="true"></video>
      </>
    );
  };
  
  export default Video;
  
