import { BrowserRouter } from "react-router-dom";
import Body from "./Components/Body";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </div>
  );
}

export default App;
