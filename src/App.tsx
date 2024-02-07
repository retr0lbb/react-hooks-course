import { Content } from "./components/layout/Content"
import { Menu } from "./components/layout/Menu"
import { BrowserRouter } from 'react-router-dom';
import { DataContext, data, DataInterface } from "./data/data.context";
import { useState } from "react";

function App(){
  const [state, setState] = useState<DataInterface>(data)


  return (
    <div className="w-screen h-screen bg-[#0d1b2a] flex">
      <DataContext.Provider value={state}>
        <BrowserRouter>
          <Menu />
          <Content />
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  )
}

export default App
