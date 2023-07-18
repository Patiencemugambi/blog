import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Comment from './Comments.jsx';


function App() {
  let student = {
    'name': 'Twiri',
    'spouse': 'Michael B Jordan',
    'age': '24'
  }

  return (
    <div>
      <NavBar/>
      <Comment student={student} />
    </div>
  );
}

export default App;
