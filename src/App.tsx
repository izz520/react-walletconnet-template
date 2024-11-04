import { Button } from "@nextui-org/react";

import './App.css'
import { useCountStore } from "./store/countStore";

function App() {
  const { count, setCount } = useCountStore(state => state);
  return (
    <div className="bg-gray-50">
      <span>{count}</span>
      <Button color="primary" onClick={() => setCount(count + 1)}>Button</Button>
      <w3m-button />
    </div>
  )
}

export default App
