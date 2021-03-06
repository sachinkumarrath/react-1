import React, {Component} from 'react';
import Hello from './hello.js';
import MessageBoard from './MessageBoard.js';
import PostMessage from './PostMessage.js';
import PlaceSearch from './placeSearch.js';

import indexStyle from './styles/index.css';

export default class Base extends React.Component{
  constructor(){
    super();
    this.state = {
        name : "sachin1",
        messageBox : "",
        charLeft : 500
    };
    // this.props = {placeHolder : "Write your thoughts"};
    this.calculateMessgaeLength = this.calculateMessgaeLength.bind(this);
  }

  calculateMessgaeLength(textBoxContent){
        // console.log('hello',textBoxContent);
        this.setState({
            charLeft : textBoxContent ? 500-textBoxContent.length : 500,
            messageBox : textBoxContent
        });
  }

  render(){
      return (<div className="base-container">
                <Hello name={this.state.name} age="30"/>
                <MessageBoard placeHolder="Write your thoughts"
                    calculateMessgaeLength={this.calculateMessgaeLength}/>
                <span>{this.state.charLeft} characters left</span>
                <PostMessage messageBox={this.state.messageBox} />
                <div className="flag-span"></div>
                <PlaceSearch/>
            </div>);
  }
}
