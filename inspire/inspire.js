import React from 'react';
import { get, post } from '../../core/request';
import './inspire.scss';

class List extends React.Component {
  render() {
    const list = this.props.quotes.map((item, index) => (
      <li className="quote" key={item.id}>
        {index + 1}. {item.quote} ---{item.author}
      </li>
    ));
    return <ul>{list}</ul>;
  }
}

class Inspire extends React.Component {
  divId = '';

  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: 'Steve Jobs',
      quotes: [],
      errMsg: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const quotes = await get('/inspire');
    this.setState({
      quotes: quotes || [],
    });

    this.divId = document.getElementById('inspireList');
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({
      errMsg: '',
    });
    const quote = {
      quote: this.state.quote,
      author: this.state.author,
    };
    try {
      const newQuote = await post('/inspire', quote);
      const quotes = this.state.quotes;
      quotes.push(newQuote);
      this.setState({
        quote: '',
        author: '',
        quotes,
      });
      this.scrollToBottom();
    } catch (err) {
      this.setState({
        errMsg: err.message,
      });
      console.log('http error is:', err);
    }
  }

  handleChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      const ele = this.divId;
      ele.scrollTop = ele.scrollHeight;
    }, 200);
  }

  render() {
    let message;
    if (this.state.errMsg) {
      message = <p className="errmsg">{this.state.errMsg}</p>;
    }
    return (
      <div className="page-inspire">
        <div className="inspire-list" id="inspireList">
          <List quotes={this.state.quotes}></List>
        </div>
        <div className="panel panel-inspire">
          <div className="panel-heading">录入名言</div>
          <div className="panel-body">
            {message}
            <form className="inspire-form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="item-input">
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    name="quote"
                    onChange={this.handleChange}
                    placeholder="请输入名言"
                    value={this.state.quote}
                    required
                  />
                </div>
                <div className="item-input">
                  <input
                    id="email"
                    type="text"
                    className="form-control"
                    name="author"
                    onChange={this.handleChange}
                    placeholder="请输入作者"
                    value={this.state.author}
                    required
                  />
                </div>
                <div className="item-input">
                  <button type="submit" className="btn btn-save btn-primary">
                    提交
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Inspire;
