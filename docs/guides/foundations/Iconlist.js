import React, { useState } from 'react';
import styled from 'styled-components';
import 'gel-icon/style.css';
import selection from 'gel-icon/selection.json';


function IconList() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredIcons, setFilteredIcons] = useState(selection.icons);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value === ''){ //this makes sure that the current value is checked. previously searchTerm would still hold a value so clearing the search did not show the full icon list
      setFilteredIcons(selection.icons);
    }else{
      setFilteredIcons(
        selection.icons.filter((icon) => icon.properties.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  };


  const handleDownload = (icon) => {
        // Create the SVG element
        console.log(icon.icon.paths);
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        
        // Create path elements and add to SVG
        icon.icon.paths.forEach(iconPath => {
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", iconPath);
          path.setAttribute("fill", "rgb(107, 119, 140");
          svg.appendChild(path);
        });

        // Create a download link
        const link = document.createElement("a");
        link.setAttribute("href", "data:image/svg+xml;utf8," + svg.outerHTML);
        link.setAttribute("download", icon.properties.name + ".svg");
        link.innerHTML = "Download SVG";

        // Add the link to the page
        document.body.appendChild(link);

        // Click the link to start the download
        link.click();
    }

  return (
    <div>

      <SearchContainer type="text" placeholder="Search icons..." onChange={handleSearch} value={searchTerm}/>

      {/************************  The following is to be done with the included json file ***************************/}

      <IconlistContainer>
        {filteredIcons.map((icon) => (
            <IconContainer key={icon.properties.name} onClick={() => handleDownload(icon)}>
              <IconStyle className={"pi pi-" + icon.properties.name}>
              </IconStyle>
              <IconName>{icon.properties.name}</IconName>
            </IconContainer>
          ))}
      </IconlistContainer>
    </div>
  );
}


// ************** Styling for all the items in the page *****************
const SearchContainer = styled.input`
width: 100%; 
padding: .25rem;
`

const IconlistContainer = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem; //add token here
`

const IconContainer = styled.button`
width: 8rem;
height: 10rem;
position: relative;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
border: none;
background-color: white; //add token here
border-radius: 8px; //add token here
&:hover,
&:focus {
  background-color: #e3e3e3; //add token here
}
&:active {
  border: 2px solid #3379BF; //add token here
}
`;

const IconStyle = styled.i`
font-size: 2rem;
color: #6B778C; //replace with token
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
top: 30%;
`;

const IconName = styled.p`
position: absolute;
width: 70%;
top: 60%;
`;


export default IconList;