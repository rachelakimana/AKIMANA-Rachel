import React from 'react'

const Home = () => {
 return (
    <div className="bg-seabgpicture bg-cover bg-opacity-0 flex-grow">
    <div className="pt-48 pl-12 text-4xl" >
      <p className="font-bold">HI, I'm Rachel, </p>
      <p className="pt-2">a Software Developer in both <a href="#" class=" underline text-white">front-end</a> and <a href="#" class=" underline text-white">back-end</a>.</p>
    </div>
    <div className="flex flex-row">
      <div className="pt-20 pl-12">
      <button class="px-8 py-2 rounded bg-blue-900 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Download my CV</button>
      </div>
      <div className="pt-20 pl-12">
      <button class="px-8 py-2 rounded bg-blue-900 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Contact me</button>
      </div>
    </div>
    
  </div>
 )
}
export default Home