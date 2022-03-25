
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './custom.scss';
import Home from './pages/home/home';
import Header from './components/header/header';
import Contacto from './pages/contacto/contacto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from './context/themeProvider';
import Footer from './components/footer/footer';
import Validate from './pages/validate/validate';
import Users from './pages/users/users';
import Perfil from './pages/perfil/perfil';
import ProtectedRoute from './routes/protected-route';
import Error from './pages/error/error';
import Packs from './pages/packs/packs';


function App() {
  return (

    <BrowserRouter>
      <ThemeProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/*" element={<Error />}></Route>
          <Route path="/packs" element={<Packs />}></Route>
          <Route path="/nosotros" element={<Contacto />}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/validate" element={<Validate/>}></Route>
          <Route path="/perfil" element={<ProtectedRoute><Perfil/>
            </ProtectedRoute>}></Route>

        </Routes>
        <Footer></Footer>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App;
