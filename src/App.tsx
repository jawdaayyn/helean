import "./App.css";
import data from "./data.json";
import Modal from "./components/modals/Modal";
import { useState } from "react";
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <Modal shop={data} setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
