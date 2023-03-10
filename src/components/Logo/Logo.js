import React from "react";
import Tilt from 'react-parallax-tilt';


const Logo = () => {
    return (
        <Tilt>
      <div style={{ height: '200px', backgroundColor: 'white' }}>
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
    );
}
export default Logo;