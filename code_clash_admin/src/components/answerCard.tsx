import React from 'react'

export const AnswerCard = () => {
  return (
<button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
      <div className="flex items-center justify-around">
        <img
          className="rounded-full items-start flex-shrink-0 mr-3"
          src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
          width="32"
          height="32"
          alt="Marie Zulfikar"
        />
        <div>
          <h4 className="text-sm font-semibold text-gray-900">
            Faculty name
          </h4>
          <div className="text-[13px]">
            Computer networks
          </div>
        </div>

        <div className="left-0">
            
        </div>
      </div>
    </button>
  )
}
