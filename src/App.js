/* <link rel="stylesheet" href="./styles/css/bootstrap.min.css">
<link rel="stylesheet" href="./styles/css/unicons.css">
<link rel="stylesheet" href="./styles/css/owl.carousel.min.css">
<link rel="stylesheet" href="./styles/css/owl.theme.default.min.css"> */

import '../src/styles/indexTemplate.scss';
import '../src/styles/index.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Experiencie from './components/Experiencie';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Modal/>
      <NavBar/>
      <About/>
      <Experiencie/>
      <Projects/>
      <Footer/>
    </Provider>
  );
}

export default App;
