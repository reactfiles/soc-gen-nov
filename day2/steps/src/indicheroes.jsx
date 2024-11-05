import { Component } from "react";

class IndicHero extends Component{
    render(){
        return <div>
            <h1>{ this.props.title } Version is : { this.props.version } </h1>
            <ol>{ this.props.data.map((val, idx) => <li key={idx}>{ val }</li>) }</ol>
        </div>
    }
}

export default IndicHero;