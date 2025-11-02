import React, { Component } from "react";

class ErrorCheck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        }
    }

    componentDidCatch = (error, info) => {
        console.log('에러가 발생했습니다.')
        console.log(error);
        console.log(info);

        this.setState({
            error: true,
        })
    }

    render() {
        if (this.state.error) return <h1>에러 발생!</h1>
        return this.props.children;
    }
}

export default ErrorCheck;