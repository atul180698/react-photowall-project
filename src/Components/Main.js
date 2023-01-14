import React, {Component} from "react";
import List from "./List";
import Title from "./Title";

class Main extends Component{
    render(){
      return  <div>
                <Title title={"Integer List"}/>
                <List tasks={["one","two"]}/>
                <List tasks={["three","four"]}/>
              </div>
    }
}

export default Main