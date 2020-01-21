import React, { useState , useEffect } from 'react';
import api from "./services/api";

import "./global.css"
import "./App.css"
import "./Sidebar.css"
import "./Main.css"

import DevItem from "./components/Devitem";
import DevForm from "./components/DevForm";

function App() {

  const [devs, setDevs] = useState([]);
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      setDevs(response.data);
    }

    loadDevs();
  }, [])

  async function handdleAddDev(data) {

    const response = await api.post("/devs", data);
    setDevs([...devs, response.data]);
  }

   async function handdleDeleteDev(id) {
     await api.delete(`/devs/${id}`);
     const response = await api.get("/devs");
     setDevs(response.data);
     console.log("dev apagado")
   }

  return (
   <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handdleAddDev}/>
      </aside>
      <main>
        <ul>
          {
            devs.map( dev => (
              <DevItem key={dev._id} dev={dev} deleteDev={handdleDeleteDev}/>
            ))
          }
        </ul>
      </main>
   </div>
  );
}

export default App;
