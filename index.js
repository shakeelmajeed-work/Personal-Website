import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import me from './images/Profile Pic2.png';
//import {borders} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';


function Image(props){
  return (
  <div style={{ textAlign: 'center'}}>
    <img src={me} alt="A picture of Shakeel Majeed"/>
  </div>
  );
}
//const image = <Image/>;
function Text(props){
  return (
  <div style={{ textAlign: 'center'}}>
    <h1>Shakeel Majeed</h1>
    <br></br>
    <hr></hr>
      <div>
          <strong>About me: </strong>Since a young age, I have been prudent in absorbing information on Data Structures and Algorithms and Economics. Having built a Full Stack Web App and written an essay on how Oligopolies and Monopolies operate, I know putting my faith and effort into my interests will lay the foundations for my future. Furthermore, I aspire to be a SWE.
      </div>
      <hr></hr>
      <div style={{textAlign:'left'}}>
        <Box fontWeight="fontWeightRegular" component="span" display="inline-block">
            <strong>Technologies:</strong> Python (including Django), JavaScript (including React but ongoing), <a href="https://github.com/shakeelmajeed-work">Github</a>
        </Box>  
      </div>
      <hr></hr>
      <div style={{textAlign:'left'}}>
        <Box fontWeight="fontWeightRegular" component="span" display="inline-block">
            <strong>Resume: </strong><a href="https://drive.google.com/file/d/1GfgectcYlR6zP-JY-vehviky947t3Vo1/view?usp=sharing">Click here</a>
        </Box>
      </div>
      <hr></hr>
  </div>
  
  );
}

function Links(props){
  return(
    <div id="footer" style={{textAlign:'center'}}>
      <a href="https://www.linkedin.com/in/shakeel-majeed/" class="fa fa-linkedin"></a>
      <a href="mailto:17majeed_s@bexleygs.co.uk" class="fa fa-google"></a>
      </div>
  );
}

const text = <Text />;
ReactDOM.render(
  <React.Fragment>
    <Image />
    <Text />
    <Links />
  </React.Fragment>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
