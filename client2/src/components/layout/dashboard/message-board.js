import React from 'react';
import { DashHeader, SideMenu, Copyright } from '../../views';
import { MessageLog } from '../../views/message-log';

/**
 * MessageBoard layout component that provides access to a user's message board
 * 
 * 
 */
class MessageBoard extends React.Component {
  /**
   * @param {props} - props
  */
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
    };
  }

  /** */
  render() {
    const { posts } = this.props;
    return (
      <div>
      {
        posts.length !== 0 ?
        posts.map((post, index) =>
          <MessageLog message={ post } key={index} />
        ) :
        <h3>{ posts.message }</h3>
      }
      <div className="message-box" id="send-message">
        <textarea className="compose" placeholder="Type your message - always be nice...">
        </textarea>
        <select id="priority" className="btn btn-create"
          ref= {(input) => { this.priority = input; }}>
          <option value="normal">normal</option>
          <option value="Urgent">urgent</option>
          <option value="critical">critical</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary">
          Send
        </button>
      </div>
  </div>
    );
  }
}


export default MessageBoard;