import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);//bind를 계속 쓰면 보기 이상해서 미리 bind해준다.
    }
    inputFormHandler(e){
        this.setState({[e.target.name]: e.target.value });//태그의 name값과 같은 state 값을 바꿔준다.
    }

    render() {
        return (
            <article>
                <h2>Update</h2>
                <form action="/create_process" method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        )

                        alert("submit");

                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input
                            type='text'
                            name='title'
                            placeholder="title"
                            value={this.state.title}
                            onChange={this.inputFormHandler}
                        ></input>
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="description"
                            value={this.state.desc}
                            onChange={this.inputFormHandler}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
            </article>
        );
    }
}
export default UpdateContent;