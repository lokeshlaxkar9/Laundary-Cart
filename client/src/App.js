import "./App.css";
import Footer from "./components/footer/Footer";
import Register from "./components/registration/Register";
import SideNav from "./components/SideNav/SideNav";
function App() {
  return (
    <>
      <div className="body">
        <SideNav />
        <Register />
      </div>

      <Footer />
    </>
  );
}

export default App;
