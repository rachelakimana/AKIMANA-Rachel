import './App.css';
import photo from './images/myphoto.jpg'

function App() {
  return (
    <div className="bg-white flex flex-row h-screen w-screen">
      <div className="bg-blue-900 h-full w-1/4">
        <div className=" pt-6 flex items-center justify-center">
          <img className="object-cover rounded-full h-36 w-36 " src={photo}></img>
        </div>
        
      </div>
      <div className="bg-white-700 flex-grow">

      </div>

    </div>
    
  );
}

export default App;
