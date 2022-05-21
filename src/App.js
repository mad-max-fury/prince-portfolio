import { Button, Footer, Navbar, ProjectCard, Text } from "./components";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Button />
        {/* <Text /> */}
        <ProjectCard />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
