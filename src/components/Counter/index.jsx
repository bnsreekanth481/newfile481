import { Component } from "react";
import './index.css';
class Counter extends Component {
state ={count:0}
onIncrement =()=>{
    this.setState(prevState => ({count: prevState.count + 1}))
}
    render(){
        const {count} = this.state;

        return(

       <div className="container">
        <h1> The Button has been clicked</h1>
        <h1 ><span className="heading"> {count}</span> times</h1>

        <div>
            <p className="pg">Click the button to increment the count</p>
            <buttton className="button" onClick={this.onIncrement}>Click Me </buttton>
        </div>

       </div>




        )
    }

}
export default Counter;