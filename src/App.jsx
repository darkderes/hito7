import { BrowserRouter, Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";
import {
  NavbarApp,
  HomePage,
  RegisterPage,
  LoginPage,
  CartPage,
  PizzaPage,
  ProfilePage,
  NotFoundPage,
  Footer,
} from "./page/index";

// import CardProvider from "./context/CardContext";
import AppProviders from "./context/AppProviders";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppProviders>
          <NavbarApp />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Cart" element={<CartPage />} />
            <Route path="/Pizza/p001" element={<PizzaPage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppProviders>
        <Footer />
      </BrowserRouter>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default App;
