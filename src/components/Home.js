import React from 'react'
import photo from '../images/myphoto.jpg'

const Home = () => {
 return (
    <div className="bg-gradient-to-r from-yellow-500 via-purple-900 to-red-500 bg-no-repeat bg-cover h-3/4 w-2/4">
     <div className=" p-4">
          <img className="object-cover rounded-full h-36 w-36 " src={photo}></img>
        </div> 
    <div className="text-2xl px-8 flex items-center justify-center" >
      <p className="text-2xl">HI, I'm Rachel, a Software Developern in both <a href="#" className=" underline text-blue-900">front-end</a> and <a href="#" className=" underline text-blue-900">back-end</a>.  </p>
    </div>
    <div className="flex flex-row items-center justify-center">
      <div className="flex p-10">
      <button class="px-8 py-2 rounded bg-blue-900 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Download my CV</button>
      </div>
      <div className="flex p-10">
      <button class="px-8 py-2 rounded bg-blue-900 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Contact me</button>
      </div>
    </div>
    
  </div>
 )
}
export default Home