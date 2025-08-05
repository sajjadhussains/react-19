import "./App.css";
import Posts from "./components/form-status/Final";
// import Posts from "./components/form-action/Final";
import Theme from "./components/use-hook-context/Final";
import Final from "./components/use-hook-data-fetching/Final";
import Message from "./components/use-hook-promise/Final";

function App() {
  return (
    <>
      <Final />
      <h1>Hello Bangladesh</h1>
      <Message />
      <Theme />
      {/* <Posts /> */}
      <Posts />
    </>
  );
}

export default App;
