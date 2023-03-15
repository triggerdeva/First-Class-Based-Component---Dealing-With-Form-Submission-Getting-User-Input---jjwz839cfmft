import React from 'react'
import '../styles/App.css';

class App extends React.Component {
    constructor(){
        super();
        this.name="John Doe";
        this.state={
            age:34
        }
        this.enrollmentNo="12345678";

    }

    increase(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return(
            <div>
                <h1>Hello, my name is {this.name}</h1>
                <p>I am {this.state.age} years old and my enrollment no is {this.enrollmentNo}</p>
                <button onClick={()=>this.increase()}>increase</button>
            </div>
        )
    }
}


export default App;
