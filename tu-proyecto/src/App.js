import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import CodeEditor from './components/CodeEditor';
import Navbar from './components/Nabvar';
import CodeEditorSin from './components/CodeEditorSin';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<CodeEditor />}></Route>
          <Route path='/codeEditorSin' exact element={<CodeEditorSin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
