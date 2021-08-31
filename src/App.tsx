import React, { useState } from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const AppWrapper = styled('div')`
  display: grid;
  grid-template-columns: 4fr 8fr;
`;

const InputsWrapper = styled('div')`
  width: 100%;
  height: 600px;
`;

const HtmlCodeInptut = styled('textarea')`
  width: 100%;
  height: 300px;
  padding: 0;
  box-sizing: border-box;
`;

const CssCodeInput = styled('textarea')`
  width: 100%;
  height: 300px;
  padding: 0;
  box-sizing: border-box;
`;

const Canvas = styled('div')`
  height: 702px;
  width: 496px;
`;

const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>(
    '<div class="title">this is cv</div>'
  );
  const [cssCode, setCssCode] = useState<string>(
    `  .canvas {
    background-color: blue;
  }

  .title{
    color:red;
  }`
  );

  const finalCanvasCode = htmlCode.concat(` <style> ${cssCode} </style>`);

  return (
    <AppWrapper>
      <InputsWrapper>
        <HtmlCodeInptut
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
        />
        <CssCodeInput
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
        />
      </InputsWrapper>
      <Canvas
        className={'canvas'}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(finalCanvasCode),
        }}
      />
    </AppWrapper>
  );
};

export default App;
