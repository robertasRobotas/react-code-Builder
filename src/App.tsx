import React, {useState} from 'react';
import styled from 'styled-components'


const InputsWrapper = styled('textarea')`
width:300px;
height:300px;
`;

 const HtmlCodeInptut = styled('textarea')`
  width:300px;
  height:300px;
  `;

const CssCodeInput = styled('textarea')`
width:300px;
height:300px;
`;


const App: React.FC =()=> {  
  const [htmlCode, setHtmlCode] = useState<string>('');
  return (
    <div className="App">
      <InputsWrapper>
        <HtmlCodeInptut onChange={(e)=>setHtmlCode(e.target.value)}/>
        <CssCodeInput onChange={(e)=>setHtmlCode(e.target.value)}/>
      </InputsWrapper>
        {htmlCode}
    </div>
  );
}

export default App;
