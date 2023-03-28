import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import GetData from './Components/GetData/GetData';
import PostData from './Components/PostData/PostData';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './Pages/CounterPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/counter'} element={<CounterPage/>}/>
        <Route path={'/getdata'} element={<GetData/>}/>
        <Route path={'/postData'} element={<PostData/>}/>
      </Routes>
    </div>
  );
}

export default App;
