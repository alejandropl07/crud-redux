import react from "react";

import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div >
      <p>Crud con redux</p>
      </div>
      </Provider>
  );
}

export default App;
