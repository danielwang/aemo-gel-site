import React from 'react';
import styled, { css } from "styled-components";
import useBaseUrl from '@docusaurus/useBaseUrl';
import BgColors from './bgcolors';



const Knowledge = ({ name }) => {
    let text, url, bg;
    switch (name) {
      case "DDC team":
        url = useBaseUrl('docs/guides/foundations/colours');
        text = (<>We have established regular catchups and provide resources to support you and you team to deliver great design and quality outcomes for your AEMO project. The best way to make contact is to email or message the team.</> );
        bg = BgColors[0];
        break;
      case "getting support":
        url = 'https://www.figma.com/file/kzLxtqv6YGL0wotiqzgEo4/GEL-UI-Doc?node-id=0%3A1&t=wWnl5yDb3WDbwvJJ-1';
        text = (<>Hey Developers, find out the tech documentation of this compoment on. If you have issue, please contact </>);
        bg = BgColors[1];
        break;
      case "projects":
        url = useBaseUrl('docs/guides/foundations/type');
        text = (<>Fonts to communicate our brand personality.</>);
        bg = BgColors[2];
        break;
      case "mo":
        url = useBaseUrl('docs/guides/foundations/icons');
        text = (<>Designed to communicate meaning and aid navigation.</>);
        bg = BgColors[3];
        break;
      case "examples":
        url = useBaseUrl('docs/components/buttons-and-links/button');
        text = (<>Components that create our product UI.</>);
        bg = BgColors[4];
        break;
      case "responsive":
        url = useBaseUrl('docs/guides/foundations/responsive');
        text = (<>Ensuring that we can create a single solution and scale it to all devices and operating systems</>);
        bg = BgColors[5];
        break;
      case "accessibility":
        url = useBaseUrl('docs/guides/foundations/accessibility');
        text = (<>Ensuring that our solutions consider the needs of all our digital customers </>);
        bg = BgColors[6];
        break;
      case "design tokens":
          url = useBaseUrl('docs/guides/design-tokens/intro-dt');
          text = (<>Visual values that construct and scale design across multiple platforms and devices</>);
          bg = BgColors[1];
          break;
      case "writing guideline":
        url = useBaseUrl('docs/guides/foundations/writing');
        text = (<>Visual values that construct and scale design across multiple platforms and devices</>);
        bg = BgColors[7];
        break;
      case "branding guidelines":
        url = useBaseUrl('docs/branding/logo');
        text = (<>visual values that construct and scale design across multiple platforms and devices</>);
        bg = BgColors[1];
        break;
      case "utilities":
        url = useBaseUrl('https://www.primefaces.org/primeflex/');
        text = (<>Style classes for commonly used CSS properties</>);
        bg = BgColors[2];
        break;
    }

const KnowledgeCard = styled.div`
    width: 49%;
    height: 75px;
    display: inline-block;
    padding: var(--gel-spacer-4) var(--gel-spacer-4);
    border-radius: var(--gel-radius-md);
    font-size: var(--gel-font-size-text-sm);
    position: relative;
    background-color: ${bg};
    transition: 0.2s;
    backdrop-filter: blur(12px);
    &:hover {
      height: 160px;
    }
`;
const Linkstyle = styled.a`
    text-transform: capitalize;
    text-decoration: none !important;
    font-family: var(--gel-font-family-black);
    font-size: var(--gel-font-size-text-default);
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
const HoverText = styled.p`
    display: none;
    ${KnowledgeCard}:hover & {
      display: block;
    }
`;

    return (
      <>
        <KnowledgeCard>
            <Linkstyle href={url}>{name}</Linkstyle>
            <HoverText>{text}</HoverText>
        </KnowledgeCard>
      </>
    );
  };
  
  export default Knowledge;
  