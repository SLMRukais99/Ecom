import React from "react";
import { Container } from "@mui/material";
import Header from "./components/navigation/Header";
import HomePage from "./pages/HomePage"
//import Newsletter from "../components/Newsletter";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <HomePage />
      </Container>
    
  
         
        <Footer />
    </>
  );
}

export default App;