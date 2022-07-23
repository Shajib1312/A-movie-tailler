import NavBar from "./components/NavBar";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Series from "./pages/Series";
import Searching from "./pages/Searching";
import Login from "./pages/Login";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <div className=" py-[90px] text-white">
          <Container>
            <Routes>
              <Route path="/" element={<Trending />} />
              <Route path="/series" element={<Series />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/searching" element={<Searching />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </Container>
        </div>
        <Footer/>
      </AuthContextProvider>
    </>
  );
}

export default App;
