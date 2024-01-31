import { Content } from "./components/layout/Content"
import { Menu } from "./components/layout/Menu"
import { BrowserRouter } from 'react-router-dom';

function App(){
  return (
    <div className="w-screen h-screen bg-[#0d1b2a] flex">
      <BrowserRouter>
        <Menu />
        <Content />
      </BrowserRouter>
    </div>
  )
}

export default App
