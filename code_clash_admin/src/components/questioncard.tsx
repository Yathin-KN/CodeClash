import React from "react";
import { FiDatabase } from "react-icons/fi";
import {FaNetworkWired} from 'react-icons/fa'
import {MdOutlineComputer} from 'react-icons/md'
export const Questioncard = (props: any) => {

  const component:any=()=>{
    if(props.tag=='DBMS'){
        return <FiDatabase/>
    }else if(props.tag=='CN'){

    }else if(props.tag=='OS'){

    }
  }
  const handel=()=>{
   console.log(props)
   props.disID(props.id)
  }
  return (
    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50" onClick={handel}>
      <div className="flex items-center">
      <svg width="32px" height="32px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <path fill="#494c4e" d="M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z"/>
</svg>
        <div className="mx-4">
          <h4 className="text-sm font-semibold text-gray-900">
            Question id : {props.id}
          </h4>
          <div className="text-[13px] break-words">
            {props.description}
          </div>
        </div>

        <div className="left-0">
            {
                component()
            }
        </div>
      </div>
    </button>
  );
};
