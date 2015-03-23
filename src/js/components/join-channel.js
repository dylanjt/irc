import React from 'react';
import { addons } from 'react/addons';
import ChannelActions from '../actions/channel-actions';

const component = React.createClass({
  mixins: [addons.PureRenderMixin],

  getInitialState() {
    return {
      channelName: ''
    };
  },

  setChannelName(channelName) {
    this.setState({ channelName });
  },

  handleChange(event) {
    this.setChannelName(event.target.value);
  },

  handleFormSubmission(event) {
    event.preventDefault();
    ChannelActions.commandJoin({
      channelName: this.state.channelName
    });
    this.setChannelName('');
  },

  render() {
    return (
      <form className="join-channel" onSubmit={this.handleFormSubmission}>
        <input type="text"
               placeholder="join channel"
               className="channel-list-item"
               required
               value={this.state.channelName}
               onChange={this.handleChange} />
        {this.state.channelName.length ? <input type="submit" value="+" /> : null}
      </form>
    );
  }
});

module.exports = component;
