import Dashboard from "./pages/Dashboard";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="w-full top-0">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
