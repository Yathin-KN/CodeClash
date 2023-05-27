import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import img from './assets/code.png'
import { CgProfile } from "react-icons/cg";
import { GoPrimitiveDot } from "react-icons/go";
import { MdArrowUpward } from "react-icons/md";
import {MdOutlineComputer} from 'react-icons/md'
import {FiDatabase} from 'react-icons/fi'
import {FaNetworkWired} from 'react-icons/fa'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Questioncard } from "./components/questioncard";

const BASEURL='https://2778-2401-4900-33b4-6b01-7911-b24f-5e83-2877.in.ngrok.io'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Question frequency',
    },
  },
};

const labels = ['OS', 'DBMS', 'CN'];

export const data = {
  labels,
  datasets: [
    {
      label: 'freuency',
      data: [1,2,3],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const data1=[1,2,3,4];
function App() {
  const labels = ['OS', 'DBMS', 'CN'];

 
  const [question,setQuestions]=useState([
    {
      "filename": ":5000/client/file/",
      "ocr_text": "",
      "question": "test",
      "question_id": "c2871931-c9fc-4a25-ae46-14d684ee1808",
      "tag": "DBMS"
    },
    {
      "filename": ":5000/client/file/",
      "ocr_text": "",
      "question": "test",
      "question_id": "f2931b23-c368-4f50-ba1a-8d88a620cef5",
      "tag": "DBMS"
    }
  ])

  const [freq,setFreq]=useState({
    "DBMS":1,
    "OS":2,
    "CN":3,
  })
  const [discussion,setDiscusson]=useState([])
  const [discussionID,setDiscussonID]=useState("Click on the question to view discussion")
  const [loading,setLoading]=useState(false)
  const getData=()=>{
   axios
   .get(`${BASEURL}/client/all_question`)
   .then((response)=>{
    console.log(response.data.questions);
    setQuestions(response.data.questions);
   }).catch((err)=>{
    console.log(err)
   });
  }

  const getFrequency=()=>{
    axios
   .get(`${BASEURL}/client/frequency`)
   .then((response)=>{
    console.log(response.data.message);
    const {DBMS,OS,CN}=response.data.message;
    setFreq((prev)=>{
      return {
        "DBMS":DBMS || 0,
        "OS":OS || 0,
        "CN":CN || 0,
      }
    })
   }).catch((err)=>{
    console.log(err)
   });
  }
  useEffect(()=>{
    getData();
    getFrequency();
  },[])

  useEffect(()=>{
    setLoading(true)
    console.log("callong")
    axios
   .get(`${BASEURL}/client/all_question/${discussionID}`)
   .then((response)=>{
    console.log(response);
   }).catch((err)=>{
    console.log(err)
    setDiscusson("No Disussions yet")
   });
   setLoading(false)
  },[discussionID])

  const Dbms=9;
  const data = {
    labels,
    datasets: [
      {
        label: 'freuency',
        data: [freq.OS,freq.DBMS,freq.CN],
        backgroundColor: 'rgba(235, 134, 52, 0.7)',
      },
    ],
  };

  const setID=(id)=>{
      setDiscussonID(id)
  }
  return (
    <>
      <div className="h-screen w-full font-poppins bg-gradient-to-t from-white via-sky-500 to-sky-500">
        <div>
          <nav className="w-full flex px-4 py-1 justify-between bg-white rounded-sm border items-center">
          <div className="flex gap-4 items-center">
            <img src={img}className="h-[5rem] w-[5rem]"></img>
            <div>
            <div className="uppercase text-xl font-bold text-gray-800">Cyber security</div>
            <span className="text-xs text-gray-600 uppercase">Code addicts</span>
            </div>
          </div>
            
            <div className="flex gap-4">
              <ul>
                <li><button className="py-1 px-4 border text-gray-700 rounded-full text-sm">Log in</button></li>
              </ul>

              <div className="flex px-2 items-center">
                <div className="text-gray-700 text-sm uppercase">ADMIN</div>
                <div className="px-2">
                    <CgProfile className="text-orange-400 text-xl"/>
                  
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full grid grid-cols-3 gap-[1.2rem] py-2 px-2">
          <div className="w-full h-full bg-white rounded-sm border p-4 border-b-2 border-b-green-500 shadow-lg">
            <div className="flex items-center pr-4 pb-4">
              <div className="text-xl">Active discussions</div>
              <GoPrimitiveDot className="text-green-500 text-xl ml-2" />
            </div>
            <div className="text-2xl font-bold">95</div>
            <div className="flex items-center pr-4 pt-4 pb-4">
              <div className="text-xl">Resolved discussions</div>
              <GoPrimitiveDot className="text-gray-500 text-xl ml-2" />
            </div>
            <div className="text-2xl font-bold">25</div>
          </div>
          <div className="w-full h-full bg-white rounded-sm border p-4 border-b-2 border-b-red-500 shadow-lg">
            <div className="flex items-center pr-4 pb-4">
              <div className="text-xl">Trending Topics</div>
              <MdArrowUpward className="text-green-500 text-xl ml-3"/>
            </div>
            <div className="text-sm flex flex-wrap gap-2">
            <span className="border-2 px-2 py-1 rounded-full bg-red-500 text-white  border-red-300 text-xs flex gap-2 items-center">
            <MdOutlineComputer className="text-white text-xl"/>
            Operating system
            </span>
            <span className="border-2 px-2 py-1 rounded-full bg-blue-500 text-white  border-blue-300 text-xs flex gap-2 items-center">
            <FiDatabase className="text-white text-xl"/>
            Database systems</span>
            <span className="border-2 px-2 py-1 rounded-full bg-green-500 text-white  border-green-300 text-xs flex gap-2 items-center">
            <FaNetworkWired className="text-white text-xl"/>
            Database systems</span>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-sm border height-36 p-4 border-b-2 border-b-blue-500 shadow-lg">
            <Bar options={options} data={data} />
          </div>
        </div>
        <div className="w-full h-[60vh] flex justify-between gap-4 px-2 overflow-y-scroll">
          <div className="bg-white border border-blue-200 w-full h-full rounded-sm p-4 text-xl bold flex-col">
          <h3 class="text-sm font-semibold uppercase text-gray-400 mb-1">All questions</h3>
          <div class="divide-y divide-gray-200">
                    {
                      question.map((val)=>{
                        return <Questioncard
                          id={val.question_id}
                          tag={val.tag}
                          question={val.ocr_text}
                          description={val.question}
                          disID={setID}
                        />
                      })
                    }
                </div>
          </div>
          <div className="bg-white border border-blue-200 w-full h-full rounded-sm p-4 text-xl bold">
          <div class="py-3 px-5">
                <h3 class="text-xs font-semibold uppercase text-gray-400 mb-1">Discussion</h3>
                {/* <!-- Chat list --> */}
                {discussionID}
                <div>
                  {(loading)?"Loading ... ":discussion}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
