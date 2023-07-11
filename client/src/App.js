
import DisplayTodo from './components/DisplayTodo/DisplayTodo';
import CreateTodo from './components/CreateTodo/CreateTodo';
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import "./App.css"





function App() {
  return (
    <div className="todo-Container">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<DisplayTodo/>} />
        <Route path="/add-todo" element={<CreateTodo/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;