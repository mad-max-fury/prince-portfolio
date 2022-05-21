import { useState } from "react";
import { AppRouter } from "./appRouter";
function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="App">
      <AppRouter showModal={showModal} SetShowModal={setShowModal} />
    </div>
  );
}

export default App;
