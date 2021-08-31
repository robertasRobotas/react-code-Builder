import React, {useState} from 'react';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const AppWrapper = styled('div')`
display:grid;
 grid-template-columns: 4fr 8fr;
`;


const InputsWrapper = styled('div')`
width:100%;
height:600px;
`;

 const HtmlCodeInptut = styled('textarea')`
  width:100%;
  height:300px;
  padding:0;
  box-sizing: border-box;
  `;

const CssCodeInput = styled('textarea')`
width:100%;
height:300px; 
padding:0;
box-sizing: border-box;
`;

const Canvas = styled('div')`
height:702px;
width:496px; 
background-color: red;
`;


const App: React.FC =()=> {  
  const [htmlCode, setHtmlCode] = useState<string>('<div>this is cv</div>');
  const [cssCode, setCssCode] = useState<string>('');

  return (
    <AppWrapper>
      <InputsWrapper>
        <HtmlCodeInptut value={htmlCode} onChange={(e)=>setHtmlCode(e.target.value)}/>
        <CssCodeInput onChange={(e)=>setCssCode(e.target.value)}/>
      </InputsWrapper>
      <Canvas dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(htmlCode)}}/>
    </AppWrapper>
  );
}

export default App;
