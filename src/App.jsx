
import Home from './components/Home'
import Navbar from './components/Navbar.jsx'
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx'
import Apikey from './components/Apikey.jsx'
import {
  translateCode, generateComments, explainCode, findErrors, findComplexity, visualizeCode
} from './utils/functions.js'

import Features from './components/Features.jsx';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useContext} from 'react';
import TextContext from './context/TextContext.js';
import Spinner from './components/Spinner.jsx';

function App() {
  const {loader} = useContext(TextContext);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Spinner loader={loader} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/api' element={<Apikey />} />
          <Route path='/services/generate-comments' element={<Features title={"Generate Comments"} func={generateComments} />} />
          <Route path='/services/find-error' element={<Features title={"Find Errors"} func={findErrors} />} />
          <Route path='/services/explain-code' element={<Features title={"Explain Code"} func={explainCode} />} />
          <Route path='/services/flow-visual' element={<Features title={"Flow Visualization"} func={visualizeCode} />} />
          <Route path='/services/translate' element={<Features title={"Translate Language"} func={translateCode} />} />
          <Route path='/services/time-complexity' element={<Features title={"Find Complexity"} func={findComplexity} />} />

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
