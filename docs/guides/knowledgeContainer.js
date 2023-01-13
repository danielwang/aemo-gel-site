import React, { Children } from 'react';
import styled, { css } from "styled-components";

const KnowledgeStyle = styled.div`
    display: flex;
    gap: var(--gel-spacer-3);
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`;

const knowledgeContainer = ({ children }) => {  
    return (
      <>
        <KnowledgeStyle>
            {children}
        </KnowledgeStyle>
      </>
    );
  };
  
  export default knowledgeContainer;
  