import "./App.css";
import Categories from "./Contexts/Categories/Categories";
import Featured from "./components/Featured/Featured";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Featured />
      <Categories />
    </>
  );
}

export default App;
