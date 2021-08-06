import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Home from './components/Home'
import Sidebar from './components/Sidebar'


library.add(fab, faCheckSquare, faCoffee, faEnvelope, faTelegram)

function App() {
  return (
    <div className="bg-blue-900 h-screen w-screen flex items-center justify-center">
      <div className="bg-black w-3/4 mx-20 flex items-center justify-end">
        <Home />

      </div>
    </div>
    
  );
}

export default App;
