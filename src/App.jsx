import { Route, Routes, Navigate } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import React, { Suspense } from "react";
import Footer from "./components/Footer";
import LinearProgress from "@mui/material/LinearProgress";

const theme = createTheme({
  palette: {
    primary: {
      main: "#37C2CC",
    },
  },
});

const Home = React.lazy(() => import("./modules/home/Home"));
const About = React.lazy(() => import("./modules/about/About"));
const Services = React.lazy(() => import("./modules/services/Services"));
const Contact = React.lazy(() => import("./modules/contact/Contact"));

function App() {
  return <AppContent />;
}

function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Navbar />
      <main>
        <Suspense fallback={<LinearProgress color="success" />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
