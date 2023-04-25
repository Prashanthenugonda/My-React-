import { Component } from "react/cjs/react.production.min";
import service '/...'

@Component{

}
export class Function  {
    constructor(){
    }
makeAPiCalls = ()=>{

    let interval = setInterval(()=>{
        service.GetEmployess().subscribe((_response) => {

            logic h=
        })
    },7000)


    clearInterval(interval)


}

}