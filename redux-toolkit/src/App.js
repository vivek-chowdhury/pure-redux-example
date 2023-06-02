import "./App.css";
import TopBar from "./components/organisms/top-bar/TopBar";
import DetailSection from "./components/templates/detail-section/DetailSection";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DetailSection></DetailSection>
    </div>
  );
}

export default App;
