// import React from 'react'

const CardButton = ({title}) => {

    return (
      <div className="w-36 max-w-xs flex flex-col bg-white border border-t-4 border-t-gray-800 shadow-lg rounded-xl mt-8">
      <button className="p-4 md:p-5">

        <h3 className="font-bold text-gray-800">{title}</h3>
  
      </button>
    </div>
    )
  }
  
  export default CardButton