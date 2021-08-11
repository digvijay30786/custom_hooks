import "./styles.css";
import { UseTimeout } from "./hooks/useTimeout";
export default function App() {
  const status = UseTimeout(2000);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {status && <h2>Start editing to see some magic happen!</h2>}
    </div>
  );
}
