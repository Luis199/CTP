import React,{Component} from 'react';
import NottoDos from './components/NottoDos';
import './App.css';

class App extends Component {

   state = {
    NottoDos: [
      {
        id: 1,
        title: "Eat fast food",
        completed: false
      },

      {
        id: 2,
        title: "Watch the Basketball game",
        completed: false
      },
      {
        id: 3,
        title: "Only get 4 hours of sleep",
        completed: false
      }
    ]
    
  }

  render(){
 
  return (
    <div className="App">
      <NottoDos nottodos={this.state.nottodos}/>
    </div>
  );
}
}

export default App;
