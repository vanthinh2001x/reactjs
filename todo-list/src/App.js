import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      'Mua bimbim',
      'Di da bong',
      'di do xang'
    ];
  }
  render(){
    return (
      <div className="App">
        {
          this.TodoItem.map((item,index)=><TodoItem key={index  } title={item}/>)
        }
      </div>
    );
  }
}

export default App;
