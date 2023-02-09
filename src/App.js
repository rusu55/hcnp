import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter} from 'react-router-dom';

import Routers from './components/common/Routers';
import NavBar from './components/page-parts/nav/NavBar';
import Footer from './components/page-parts/footer/Footer';

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <HelmetProvider>
        <Routers/>
      </HelmetProvider>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
