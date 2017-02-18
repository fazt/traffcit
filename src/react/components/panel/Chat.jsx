import React, { Component } from 'react';
import request from 'superagent';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      messages: [],
      socket: window.io('http://localhost:3000'),
      userName: undefined
    };

  }

  componentDidMount(){
    var self = this;

    request
      .get('http://localhost:3000/api/currentuser')
      .end((err,res)=>{
        self.setState({
          userName: res.body.userName,
          firstName: res.body.firstName
        });
      });

    this.state.socket.on('chat:receive-new-message', (msg) => {
      var messages = self.state.messages;
      messages.push(msg);
      self.setState({
        messages: messages
      });
    });
  }

  showChatBox(){
    this.setState({show: !this.state.show});
  }

  renderChat(){
    if(!this.state.show){
      return (
        <a className="open-btn" id="addClass" onClick={this.showChatBox.bind(this)}>
          <i className="fa fa-whatsapp my-float" aria-hidden="true"></i>
        </a>
      );
    }
    var messages = this.state.messages.map((msg, i) => {
      if (this.state.userName === msg.user) {
        return (
          <div key={i} className="chat_message_wrapper">
           <div className="chat_user_avatar">
             <a href="" target="_blank" >
               <img alt="usuario" title="usuario"  src="/img/face80x80.jpg" className="md-user-image"/>
               <p>{msg.user}</p>
             </a>
           </div>
           <ul className="chat_message">
             <li>
               <p>
                 {msg.body}
                 <span className="chat_message_time">
                   {msg.time}
                 </span>
               </p>
             </li>
           </ul>
         </div>
        );
      } else {
        return (
          <div key={i} className="chat_message_wrapper chat_message_right">
            <div className="chat_user_avatar">
              <a href="" target="_blank" >
                <img alt="Gurdeep Osahan (Web Designer)" title="Gurdeep Osahan (Web Designer)" src="/img/face80x80.jpg" className="md-user-image"/>
                {msg.user}
              </a>
            </div>
            <ul className="chat_message">
              <li>
                <p>
                  {msg.body}
                  <span className="chat_message_time">
                    {msg.time}
                  </span>
                </p>
              </li>
            </ul>
          </div>
        );
      }
    });

    return (
    <aside id="sidebar_secondary" className="tabbed_sidebar ng-scope chat_sidebar">
      {/* navbar */}
      <div className="popup-head">
        <div className="popup-head-left pull-left">
          <a title="USUARIO" target="_blank" href="">
            <img className="md-user-image" alt="user" src="/img/face80x80.jpg" title="user" alt="User"/>
              <h1>{this.state.firstName}</h1>
              <small>
                <br/>
                <span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span>
                {this.state.userName}
              </small>
          </a>
        </div>

          <div className="popup-head-right pull-right">
            <button className="chat-header-button" type="button">
              <i className="fa fa-video-camera" aria-hidden="true" title="video"></i>
            </button>
            <button className="chat-header-button" type="button">
              <i className="fa fa-headphones" aria-hidden="true"></i>
            </button>

            <div className="btn-group gurdeepoushan">
              <button className="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
                <i className="fa fa-paperclip" aria-hidden="true"></i>
              </button>
                <ul role="menu" className="dropdown-menu pull-right">
                  <li><a href="#"><span className="glyphicon glyphicon-picture" aria-hidden="true"></span>Gallery</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-camera" aria-hidden="true"></span> Photo</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-facetime-video" aria-hidden="true"></span> Video</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-headphones" aria-hidden="true"></span> Audio</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span> Location</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Contact</a></li>
                </ul>
            </div>

            <button onClick={this.showChatBox.bind(this)}
              data-widget="remove" id="removeClass" className="chat-header-button pull-right" type="button">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* wrapper */}

        <div id="chat" className="chat_box_wrapper chat_box_small chat_box_active" style={{opacity: 1,display: "block",transform: "translateX(0px)"}}>
          <div className="chat_box touchscroll chat_box_colors_a">
            {messages}
          </div>
        </div>

        {/* submit */}

        <div className="chat_submit_box">
          <div className="uk-input-group">
            <div className="gurdeep-chat-box">
              <span
                style={{"verticalAlign":"sub"}}
                className="uk-input-group-addon">
                <a href="#"><i className="fa fa-smile-o"></i></a>
              </span>

              <input
                type="text"
                placeholder="Type a message"
                id="submit_message" name="submit_message"
                className="md-input"
                onKeyDown={this.handleKeyDown.bind(this)}
              />

              <span
                style={{"verticalAlign": "sub"}}
                className="uk-input-group-addon">
                <a href="#"><i className="fa fa-camera"></i></a>
              </span>
            </div>

            <span className="uk-input-group-addon">
              <a href="#"><i className="glyphicon glyphicon-send"></i></a>
            </span>
          </div>
        </div>
      </aside>
    )
  }
  handleKeyDown(event){
    if(event.keyCode === 13){
      var body  = document.getElementById('submit_message').value;
      var message = {
        body: body,
        user: this.state.userName,
        time: new Date().getFullYear()
      }
      this.state.socket.emit('chat:new-message', message);
    }
  }
  render() {
    return(
        <div>
          {this.renderChat()}
        </div>
    );
  }

}

export default Chat;
