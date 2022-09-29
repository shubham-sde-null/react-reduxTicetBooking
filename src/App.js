import "./App.css";
// import Home from "./components/Home";
import HomeContainer from "./container/HomeContainer";

function App() {
  return (
    <div className="App">
      <center>
        <h1 style={{ textDecoration: "underline" }}>
          {" "}
          Welcome to the ticket counter{" "}
        </h1>{" "}
        {/* <Home /> */}
        <HomeContainer />
      </center>
    </div>
  );
}

export default App;
