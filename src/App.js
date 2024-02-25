import './App.css';
//import NavBar from './Components/NavBar/NavBar';
//import Test1 from './Components/Test1';
//import Test2 from './Components/Test2';
import Test8 from './Components/Test8';
import Test7 from './Components/Test7';
import Test9 from './Components/Test9';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Form from './Components/Form';

function App() {

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      }
    }
  });

  return (
    <div className="App">
      {/* <NavBar/> */}
      <QueryClientProvider client={client}>
      <Router>
          <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/test7"}>Test7</Link>
            <Link to={"/test9"}>Test9</Link>
            <Link to={"/form"}>Form</Link>
          </div>
        <Routes>
          <Route path='/' element={<Test8/>} />
          <Route path='/test7' element={<Test7/>} />
          <Route path='/test9' element={<Test9/>} />
          <Route path='/form' element={<Form/>} />
          <Route path='*' element={<h1>Page not Found 404</h1>}/>
        </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
