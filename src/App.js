import { Provider } from 'react-redux';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <header>
            <h1>Todolist redux incroyable</h1>
          </header>

          <TaskList />

          <footer>
            <TaskForm />
          </footer>
        </article>
      </div>
    </Provider>
  );
}

export default App;
