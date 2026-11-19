import { Component } from "react"



class About extends Component {
    
    prom = null
    
    
    constructor(){
        super()
        this.state = {test: 3}
    }
    testFunc(){
        
    }
    
    render(){
        return (<>
            <h1>{this.props.testText}</h1>
            <h1>{this.props.testText}</h1>
            <button onClick={() => this.setState( (prev) =>
                 {test: prev.test + 1})}></button>
            </>
        )
    }

    
}

export default About