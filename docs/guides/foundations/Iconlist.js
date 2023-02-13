import React, { useState } from 'react';
import styled from 'styled-components';
import '@danielwang/aemo-gel-icon/style.css';
import selection from '@danielwang/aemo-gel-icon/selection.json';
import { SystemIconList } from './systemIconList';

function IconList() {

  const [searchTerm, setSearchTerm] = useState('');
  const [iconPack, setIconPack] = useState(selection.icons);


  // a fair bit happening here
  // categorizing the icon list into two different variables so that web icon and system icons are different
  // checks if the icon is in SystemIconList array to segregate the data
  // finally sorts out the data alphabetically
  const webIconPack = iconPack.filter(icon => !SystemIconList.includes(icon.properties.name)).sort((a, b) => a.properties.name.localeCompare(b.properties.name));
  const systemIconPack = iconPack.filter(icon => SystemIconList.includes(icon.properties.name)).sort((a, b) => a.properties.name.localeCompare(b.properties.name));;

  const [webIcons, setWebIcons] = useState(webIconPack);
  const [systemIcons, setSystemIcons] = useState(systemIconPack);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if(event.target.value === ''){ //this makes sure that the current value is checked. previously searchTerm would still hold a value so clearing the search did not show the full icon list
      // sets to default list of filtered icons that is saved when the data first triggers
      setWebIcons(webIconPack);
      setSystemIcons(systemIconPack);
    }else{
      // filtering both icon pack 
      setSystemIcons(
        systemIconPack.filter((icon) => icon.properties.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setWebIcons(
        webIconPack.filter((icon) => icon.properties.name.toLowerCase().includes(searchTerm.toLowerCase()))
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

    // Click the link to start the download
    link.click();
    }

  return (
    <div>

      <SearchContainer type="text" placeholder="Search icons..." onChange={handleSearch} value={searchTerm}/>

      {/************************  The following is to be done with the included json file ***************************/}
      <h2>Industry Icons</h2>
      <IconlistContainer>
        {systemIcons.map((icon) => (
            <IconContainer key={icon.properties.name} onClick={() => handleDownload(icon)}>
              <IconStyle className={"pi pi-" + icon.properties.name}>
              </IconStyle>
              <IconName>{icon.properties.name}</IconName>
            </IconContainer>
          ))}
      </IconlistContainer>

      <h2>General Icons</h2>
      <IconlistContainer>
        {webIcons.map((icon) => (
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
width: 50%; 
padding: .5rem;
margin-bottom: 1.5rem;
`

const IconlistContainer = styled.div`
display: flex;
flex-wrap: wrap;
`

const IconContainer = styled.button`
width: 8rem;
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
font-size: 2.5rem;
color: #6B778C; //replace with token
display:block;
margin-top:1rem;
`;

const IconName = styled.span`
margin:1rem;
`;


export default IconList;