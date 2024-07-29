import { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import SystemManagers from "./pages/SystemManagers";
import Revenue from "./pages/Revenue";

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
              <Route path="/revenue" exact={true} element={<Revenue/>} />
              </Routes>
          </div>
        </section>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
