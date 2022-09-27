import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Book from './component/book';
import Dish from './component/dish';
import IntroduceEndComment from './component/IntroduceEndComment';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Book/>}/>
          <Route exact path="/dish" element={<Dish/>}/>
          <Route exact path="/introduce-end-comment" element={<IntroduceEndComment/>}/>
        </Routes>
    </Router>

    </div>
  );
}

export default App;
