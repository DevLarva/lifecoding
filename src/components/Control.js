import React, { Component } from 'react';

class Control extends Component {
    render() {
        return (
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');//클릭시에 App 컴포넌트의 mode 값을 인자로 넘겨서 바꿔줌.
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                }.bind(this)}>update</a></li>
                <li><input type="button" value="delete" onClick={function(e){
                    //delete는 버튼 사용.
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                }.bind(this)}></input></li>
                
            </ul>
        );
    }
}
export default Control;