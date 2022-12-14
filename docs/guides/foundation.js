import React from 'react';
import styled, { css } from "styled-components";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import figma from "./assets/figma.png";
import colors from "./assets/colours.png";
import typo from "./assets/typo.png";
import icons from "./assets/icons.png";
import accessibility from "./assets/accessibility.png";
import responsive from "./assets/responsive.png";
import library from "./assets/library.png";
import tokens from "./assets/tokens.png";
import writing from "./assets/writing.png";
import branding from "./assets/branding.png";


const FoundationStyle = styled.div`
    min-width: 15rem;
    width: 15rem;
    display: inline-block;
    padding: var(--gel-spacer-4) var(--gel-spacer-4);
    margin-right: var(--gel-spacer-2);
    border-radius: var(--gel-radius-md);
    font-size: var(--gel-font-size-text-sm);
    position: relative;
`;

const Imgstyle = styled.img`
    margin-bottom: var(--gel-spacer-2);
`;
const Linkstyle = styled.a`
    text-transform: capitalize;
    text-decoration: none !important;
    color: black;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: "";
    }
`;

const Foundation = ({ name }) => {
    let text, icon, url;
    switch (name) {
      case "colours":
        url = useBaseUrl('docs/guides/foundations/colours');
        icon = colors;
        text = (<>Accessible palettes that achieve consistency.</> );
        break;
      case "figma":
        url = 'https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=0%3A1&t=wWnl5yDb3WDbwvJJ-1';
        icon = figma;
        text = (<>Hey Developers, find out the tech documentation of this compoment on. If you have issue, please contact </>);
        break;
      case "typography":
        url = useBaseUrl('docs/guides/foundations/type');
        icon = typo;
        text = (<>Fonts to communicate our brand personality.</>);
        break;
      case "icons":
        url = useBaseUrl('docs/guides/foundations/icons');
        icon = icons;
        text = (<>designed to communicate meaning and aid navigation.</>);
        break;
      case "library":
        url = useBaseUrl('docs/components/buttons-and-links/button');
        icon = library;
        text = (<>Fonts to communicate our brand personality.</>);
        break;
      case "responsive":
        url = useBaseUrl('docs/guides/foundations/responsive');
        icon = responsive;
        text = (<>ensuring that we can create a single solution and scale it to all devices and operating systems</>);
        break;
      case "accessibility":
        url = useBaseUrl('docs/guides/foundations/accessibility');
        icon = accessibility;
        text = (<>ensuring that our solutions consider the needs of all our digital customers </>);
        break;
      case "design tokens":
          url = useBaseUrl('docs/guides/design-tokens/intro-dt');
          icon = tokens;
          text = (<>visual values that construct and scale design across multiple platforms and devices</>);
          break;
      case "writing guideline":
        url = useBaseUrl('docs/guides/foundations/writing');
        icon = writing;
        text = (<>visual values that construct and scale design across multiple platforms and devices</>);
        break;
      case "branding guidelines":
        url = useBaseUrl('docs/branding/logo');
        icon = branding;
        text = (<>visual values that construct and scale design across multiple platforms and devices</>);
        break;
    }
  
    return (
      <>
        <FoundationStyle>
            <Imgstyle src={icon} height="71"/>
            <h4><Linkstyle href={url}>{name}</Linkstyle></h4>
            {text}
        </FoundationStyle>
      </>
    );
  };
  
  export default Foundation;
  