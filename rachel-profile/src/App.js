import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home'
import Sidebar from './components/Sidebar'


library.add(fab, faCheckSquare, faCoffee, faEnvelope, faTelegram)

function App() {
  return (
    <div className="bg-white flex flex-row h-screen w-screen">
      <Sidebar/>
      <Home />

    </div>
    
  );
}

export default App;
