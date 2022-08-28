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
import Template from '../components/Template'
import 'react-image-lightbox/style.css'
import Form from '../components/FunctionForm';
import Covid from '../components/Covid19';
import Blog from '../components/Blog';
import Detail from '../components/Detail';

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
              <Template/>
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
