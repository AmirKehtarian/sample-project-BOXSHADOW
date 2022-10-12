import { Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage'
import BoxShadow from './pages/boxShadow/boxShadow';
import ToDoList from './pages/ToDoList/ToDoList';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/my-sample-WEBSITE' element={<Mainpage />} />
          <Route path='/sample-project-TODOLIST' element={<ToDoList />} />
          <Route path='/sample-project-BOXSHADOW' element={<BoxShadow />} />
        </Routes>
      </div>
  );
}

export default App;
