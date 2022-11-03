import React from 'react';
import figma from "./assets/figma.png";
import vue from "./assets/vue.png";

const FigmVue = ({ type, url }) => {
    let text, logo;
    switch (type) {
      case "figma":
        logo = figma;
        text = 'Figma design file';
        break;
      case "vue":
        logo = vue;
        text = 'Dev API in VueJS';
        break;
    }
  
    return (
      <>
        <div>
            <img src={logo} />
            <p>Please find more about the <a href={url} target="_blank">{text} </a></p>
        </div>
      </>
    );
  };
  
  export default FigmVue;
  