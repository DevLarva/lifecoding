import React, {Component} from 'react';


class Content extends Component {
    render() {
      this.props.title = 'hi';
      console.log('Content render');
      return (
        <article>
        <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
}
  
export default Content;
