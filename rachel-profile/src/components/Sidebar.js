import React from 'react'
import photo from '../images/myphoto.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Sidebar=() => {
    return(
        <div className="bg-blue-900 h-full w-1/4">
        <div className=" pt-6 flex items-center justify-center">
          <img className="object-cover rounded-full h-36 w-36 " src={photo}></img>
        </div>
        <div className="pt-4 flex items-center justify-center">
          <p className="text-white text-3xl">AKIMANA Rachel</p>
        </div>
        <div className="pt-2 flex items-center justify-center">
          <p className="text-white text-xl">  A Software Developer</p>
        </div>
        <div class=" pt-32"> 
          <a href="#" class="pl-8 text-white no-underline hover:underline">MY RESUME</a>
        </div>
        <div className="pt-8">
          <a href="#" class="pl-8 text-white no-underline hover:underline">CONTACT ME</a>
        </div>
        <div class=" pt-20"> 
          <p class="pl-8 text-white text-xs">GET IN TOUCH</p>
        </div>
        <div className="flex flex-row  pt-4 h-16 text-white text-5xl font-bold">
          <a href='mailto:rachelakimana@gmail.com'><FontAwesomeIcon icon="envelope" className="pl-4" /></a>
          <FontAwesomeIcon icon={['fab', 'facebook']} className="pl-4" />
          <a onClick={()=> window.open("https://telegram.com", "_blank")} href='https://telegram.com'> <FontAwesomeIcon icon={['fab', 'telegram']} className="pl-4" /></a>
        </div>

  
      </div>
    );
}

export default Sidebar;