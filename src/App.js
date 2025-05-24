import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import ChatBot from "./components/ChatBot";
import './App.css';  // Adjust the path according to where you place the file


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row bg-primary text-white py-2 px-3">
        <h4 className="mb-0">Intercom Chat Panel</h4>
      </div>

      <div className="row flex-grow-1">
        {/* Sidebar */}
        <div className="col-3 border-end d-flex flex-column">
          <div className="bg-light p-2 border-bottom">
            <strong>Users</strong>
          </div>
          <Sidebar onSelectUser={setSelectedUser} />
        </div>

        {/* Chat Window */}
        <div className="col-6 d-flex flex-column border-end">
          <div className="bg-light p-2 border-bottom">
            <strong>Chat Window</strong>
          </div>
          <ChatWindow selectedUser={selectedUser} />
        </div>

        {/* ChatBot */}
        <div className="col-3 d-flex flex-column">
          <div className="bg-light p-2 border-bottom">
            <strong>AI ChatBot</strong>
          </div>
          <ChatBot />
        </div>
      </div>
    </div>
  );
};

export default App;
