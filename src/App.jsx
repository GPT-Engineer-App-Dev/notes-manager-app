import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ViewNotes from "./pages/ViewNotes.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import CreateTag from "./pages/CreateTag.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/view-notes" element={<ViewNotes />} />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/create-tag" element={<CreateTag />} />
      </Routes>
    </Router>
  );
}

export default App;