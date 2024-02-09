
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Portfolio from './component/Portfolio/Portfolio';
import Layout from './component/Layout/Layout';

const myRouter = createBrowserRouter(
  [
        {path:'/',element:<Layout/>,  children: [
          {path:'/' , element:<Home/>},
          {path:'about' , element:<About/>},
          {path:'portfolio',element:<Portfolio/>},
          {path:'contact',element:<Contact/>},
          {path:'*',element: <h1> 4   0   4  Not Found </h1>},
        ]},


       
    ]
);

function App() {
  return (
    <>
      
      <RouterProvider  router={myRouter}/>
      
    </>
  );
}

export default App;
