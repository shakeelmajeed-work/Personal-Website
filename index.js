import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import me from './images/Profile Pic2.png';
import {borders} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
      <Box fontWeight="fontWeightBold" component="span" display="block">
        About me:
      </Box> 
      <Box fontWeight="fontWeightRegular" component="span" display="block">
        Since a young age, I have been prudent in absorbing information on Data Structures and Algorithms and Economics. Having built a Full Stack Web App and written an essay on how Oligopolies and Monopolies operate, I know putting my faith and effort into my interests will lay the foundations for my future. Furthermore, I aspire to be a SWE.
      </Box>
  </div>
  
  );
}
const text = <Text />;
ReactDOM.render(
  <React.Fragment>
    <Image />
    <Text />
  </React.Fragment>,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
