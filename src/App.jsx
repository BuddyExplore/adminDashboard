import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import SystemManagers from "./pages/SystemManagers";
import Feedbacks from "./pages/Feedbacks";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";

const MyContext = createContext();

function App() {
  const values = {};

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <section className="main flex">
          <div className="sidebarWrapper w-[17%]">
            <Sidebar />
          </div>
          <div className="content_Right w-[100%] px-10" style={{backgroundColor:"white"}}>
            <Header />
            <div className="space"></div>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/systemManagers" exact={true} element={<SystemManagers />} />
              <Route path="/feedbacks" exact={true} element={<Feedbacks/>} />
              <Route path="/notifications" exact={true} element={<Notifications/>} />
              <Route path="/messages" exact={true} element={<Messages/>} />
              </Routes>
          </div>
        </section>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
