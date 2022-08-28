// import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Form from '../components/Form';
import {
  BrowserRouter,
  Switch,
  Route,
  //Link
} from 'react-router-dom';
import Home from '../components/Home'
import Nav from '../components/Nav'
import Listuser from '../components/Listuser';
import Detailuser from '../components/Detailuser';
import Templatee from '../components/Templatee'
import 'react-image-lightbox/style.css'
<<<<<<< HEAD
import Form from '../components/FunctionForm';
import Covid from '../components/Covid19';
import Blog from '../components/Blog';
import Detail from '../components/Detail';
=======
import Covid from '../components/Covid';
import Blog from '../components/Blog';
import Viewdetail from '../components/Viewdetail';
import AddNewBlog from '../components/AddNewBlog';
>>>>>>> e13c07a79cee87901047f598b414a2549c4c2327

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/listtodo">
              <Form />
            </Route>
            <Route path="/listuser" exact>
              <Listuser />
            </Route>
            <Route path="/listuser/:id">
              <Detailuser />
            </Route>
            <Route path="/template">
              <Templatee/>
            </Route>
            <Route path="/covid-19">
              <Covid/>
            </Route>
            <Route path="/blog" exact>
              <Blog/>
            </Route>
            <Route path="/blog/:id">
              <Viewdetail/>
            </Route>
            <Route path="/add-new-user">
              <AddNewBlog/>
            </Route>
            <Route path="/covid19">
              <Covid />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id" >
              <Detail />
            </Route>

          </Switch>
        </header>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
