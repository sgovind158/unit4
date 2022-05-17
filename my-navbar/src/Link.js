import React from 'react'

function Link({link1,link2,link3}) {
    return (
      <>
       <a href="/"><p>{link1}</p></a> 
       <a href="/"><p>{link2}</p></a> 
       <a href="/"><p>{link3}</p></a> 
      </>
    );
  }
  
  export default Link;
  