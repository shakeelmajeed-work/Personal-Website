import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import me from './images/Profile Pic2.png';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { Accordion } from '@mui/material';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({
  bottom: { //for the 'invisible' footer with mail and LinkedIn icons 
    backgroundColor: 'rgba(202, 213, 226, 1)'
  },
  info: {
    width: '100%',
  }

})

function Image(props){
  return (
  <div style={{ textAlign: 'center'}}>
    <img src={me} alt="A photo of Shakeel Majeed"/>
  </div>
  );
}

function Text(props){
  const classes = useStyles()
  return (  
    <div style={{fontSize:'1vw'}}>
     <div style={{textAlign: 'center'}}>
       <h1>Shakeel Majeed</h1>
       <hr></hr>
       <div style={{textAlign:'left'}}>
        <Accordion className={classes.info}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h3>About Me:</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Since a young age, I have been prudent in absorbing information on Data Structures and Algorithms and Economics. Having built a full stack blogging Web App, written an essay on how Oligopolies and Monopolies operate (prior to taking GCSE Economics) and being a frequent user of sites like USACO and Leetcode, I know putting my faith and effort into my interests will lay the foundations for my future. Furthermore, I aspire to be a SWE or a Quant.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.info}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h3>Technologies:</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Python (including Django), JavaScript</Typography>
              <a href="https://github.com/shakeelmajeed-work">GitHub</a>
            </AccordionDetails>
          </Accordion>

          <Accordion className={classes.info}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h3>CV:</h3>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This CV is more of a document currently for me (and you) to see what I've done so far hence it being 2 pages and not summarised as much as it could be. <a href="https://1drv.ms/b/s!ApuSg4CyvQqDzmY8WNHv6N6n3Gn0">Click here for a PDF version of my CV</a></Typography>
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
  );
}

function Links(props){
  const classes = useStyles()
  return(
    <BottomNavigation showLabels className={classes.bottom} sx={{ position: "fixed", bottom: 0 }}>
      <a href="https://www.linkedin.com/in/shakeel-majeed/">
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon/>}/>
      </a>
      <a href="mailto:shakeelsmajeed@outlook.com">
        <BottomNavigationAction label="Email" icon={<MailIcon/>} />
      </a>
    </BottomNavigation>
  );
}


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
