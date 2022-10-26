import React, {Component} from 'react';

class TOC extends Component {
    render() {
      var list = [];
      var data = this.props.data;
      var i =0;
      while(i < data.length) {
        list.push(<li><a href={"/content" + data[i].id}>{data[i].title}</a></li>);
        i= i + 1;
      }
      return (
        

        <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JAVAScript</a></li>
        </ul>
    </nav>
      );
  }
}
export default TOC;
