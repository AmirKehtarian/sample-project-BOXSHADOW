import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage'
import BoxShadow from './pages/boxShadow/boxShadow';
import ToDoList from './pages/ToDoList/ToDoList';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/my-sample-projects' element={<Mainpage />} />
        <Route path='/Sample-Project-todolist' element={<ToDoList />} />
        
        <Route path='/Sample-Project-boxshadow' element={<BoxShadow />} />
      </Routes>
    </div>
  );
}

export default App;
