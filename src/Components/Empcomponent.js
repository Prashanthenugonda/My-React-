import React from "react";

class Employee extends React.PureComponent(){
    super(props)
    constructor(){
        console.log(this.state);
        this.setState({name:'',age:''});
     }

    render(){
        this.return (
            <></>
        )
    }
}

export default Employee;