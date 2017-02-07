import React, {Component} from 'react';

export default class PostMessage extends React.Component{
  constructor(props){
    super(props);
    this._submitMessage = this._submitMessage.bind(this);
  }

  render(){
    //   console.log("messageBox :" +this.props.messageBox);
      return (<div><input type="button" value="Post" onClick={this._submitMessage}/></div>);
  }

  _submitMessage(){
      console.log("messageBox :" +this.props.messageBox);
  }
}

// PostMessage.propTypes = {
//   calculateMessgaeLength: React.PropTypes.func,
// };
