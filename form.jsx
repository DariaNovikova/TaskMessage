import React from 'react';
import axios from 'axios';
import AgAutocomplete from 'react-algoliasearch'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      body: ''
    };
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleAutocomplete(event, suggestion) {
    this.setState({ email: suggestion.email });
  }

  handleBody(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://example.org',
      data: this.state,
      transformRequest: obj => {
        var str = [];
        for (var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

  }

  render() {
    return (
      <div>
        <form action="" onSubmit={e => this.handleSubmit(e)}>
          <div className="container">
            <lable htmlFor="recipient">Recipient</lable>
            <AgAutocomplete
              apiKey={"c9d74d1b249831a64803caffb37a4e40"}
              appId={"X4CZOFIPYI"}
              displayKey="name"
              index={"ideals-people-energy"}
              inputId="input-search"
              otherProps={{
                onChange: this.handleEmail.bind(this)
              }}
              selected={this.handleAutocomplete.bind(this)}
              />
          </div>
          <div className="container">
            <label htmlFor="msg">Message</label>
            <textarea id="msg" onChange={e => this.handleBody(e)}></textarea>
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    )
  }
}

export default Form;
