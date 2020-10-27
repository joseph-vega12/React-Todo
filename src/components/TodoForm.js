import React from 'react';

class TodoForm extends React.Component {
constructor(){
    super();
    this.state ={
        input: ''
    }
}

handleChange = (e) => {
    this.setState({
        input: e.target.value
    })
}

handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleOnSubmit(this.state.input);
}

render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter A Task:
                    <br></br>
                <input type='text' onChange={this.handleChange} value={this.state.input} name='task'/>
                </label>
                <button>Submit</button>
                </form>
        );
    }
}

export default TodoForm;