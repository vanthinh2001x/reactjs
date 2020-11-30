import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      {title: 'Mua bimbim', isComplete: true},
      {title: 'Di da bong'},
      {title: 'di do xang'}
    ];
  }
  render(){
    return (
      <div className="App">
        {
          this.TodoItem.map((item,index)=><TodoItem key={index} item={item}/>)
        }
      </div>
    );
  }
}

export default App;
