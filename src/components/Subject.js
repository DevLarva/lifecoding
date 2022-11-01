import React, { Component } from 'react';

class Subject extends Component {
    render() {
        return (
            <header>
                <h1><a href="/" onClick={function(e){
                    e.preventDefault(); //a 태그의 기본 기능인 새로고침을 막는 함수.
                    this.props.onChangePage(); //App.js에서 정의한 사용자 정의 이벤트가 props 형태로 사용
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;