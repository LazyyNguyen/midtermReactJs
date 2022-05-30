import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route, Routes }
    from 'react-router-dom';
import Create from './Components/create/Create';
import Edit from './Components/edit/Edit';
import Home from './Components/home/Home';
import Header from './Components/header/Header';
import Navigation from './Components/navigation/Navigation';
import MainContent from './Components/content/mainContent/MainContent';
// import Part1 from './Components/content/part1/Part1';

function App() {
  return (
    <div className="container">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </Router>
      {/* <p>hihi</p> */}
      <Header></Header>
      <Navigation></Navigation>
      {/* <Part1></Part1> */}
      <MainContent></MainContent>
    </div>
  );
}

export default App;
