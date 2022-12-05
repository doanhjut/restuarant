import { BrowserRouter as Redirect, Route, Routes } from 'react-router-dom'
import Book from './component/book';
import FormBook from './component/book/component/FormBook';
import Admin from './component/admin/Admin';
import { useNavigate } from 'react-router-dom';
import Dish from './component/dish';
import Login from './component/login/Login';
import IntroduceEndComment from './component/IntroduceEndComment';
import './App.css';
import { useEffect } from 'react';
import Menu from './component/menu/Menu';
import CreateBill from './component/createBill/createBill'
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    // navigate('/introduce-end-comment');
  }, [])
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" exact element={<IntroduceEndComment />} >
          {/* <Redirect to="/introduce-end-comment" /> */}
        </Route>
        <Route exact path="/view" element={<Book />} />
        <Route exact path="/dishs" element={<Dish />} />
        <Route exact path="/book" element={<FormBook />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createBill" element={<CreateBill />} />
        <Route exact path="/introduce-end-comment" element={<IntroduceEndComment />} />
      </Routes>
    </div>
  );
}

export default App;
