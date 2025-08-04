import "./App.css";
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
    </>
  );
}

export default App;
