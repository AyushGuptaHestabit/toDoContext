import './App.css';
import View from './component/View';
import ToDoState from './context/todos/ToDoState';

function App() {
  return (
    <ToDoState>
      <div className="App">
        <View />
      </div>
    </ToDoState>
  );
}

export default App;
