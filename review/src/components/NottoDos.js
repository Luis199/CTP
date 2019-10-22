import React,{Component} from 'react';


class NottoDos extends Component() {
  render(){
  return this.props.NottoDos.map((nottodos) =>(
    <h3>{nottodos.title}</h3>
  ));
}
}

export default NottoDos;
