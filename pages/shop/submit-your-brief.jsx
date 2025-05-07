import React from 'react';
import '@fontsource/poppins';

const style = {
    fontFamily: 'Poppins',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100vh'
}

const SubmitYourBrief = () => {
  return (
    <div  style={style}>
      <h1 
        style={{
          fontSize:'32px', 
          fontWeight:'400',
          textAlign:'center',
        }}
      >
        Tailored bespoke form coming soon!
      </h1>
    </div>
  );
};

export default SubmitYourBrief;
