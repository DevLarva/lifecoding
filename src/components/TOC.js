import React, { Component } from 'react';

class TOC extends Component {
    shouldComponentUpdate(newProps, newState){
        console.log(
            newProps.data,
            this.props.data
        );
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
    render() {
        var lists = [];
        var data = this.props.data; // data라는 이름의 props로 넘어옴.
        var i = 0;
        while (i < data.length) {//반복문으로 a 태그를 생성함.
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={'/content' + data[i].id}
                        data-id = {data[i].id} 
                        onClick={function (e) {
                            e.preventDefault();//페이지 새로고침 방지
                            this.props.onChangePage(e.target.dataset.id); 
                           
                        }.bind(this)}//App.js에서 TOC 컴포넌트를 띄우기 위해 bind
                    >{data[i].title}
                    </a>
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}
export default TOC;