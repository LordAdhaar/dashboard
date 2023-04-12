import React, {useState, useEffect} from 'react'
import Sidebar from "./Sidebar.js"
import Navbar from "./Navbar.js"
import uniqid from "uniqid"
import Image from 'next/image'
import Tata from "./assets/TataIntra.jpg"
import Activa from "./assets/Activa.jpg"
import Ciaz from "./assets/Ciaz.jpg"


const Dashboard = () => {

  const [vehiclesArr, setVehiclesArr] = useState([{name:"Tata Intra",desc:"Evaahan L5 Engine",status:"Finished", imageUrl:Tata},{name:"Honda Activa", desc:"Evaahan Z1 Engine", status:"Customizing", imageUrl:Activa},{name:"Suzuki Ciaz",desc:"Evaahan v6 Engine",status:"Pick Up", imageUrl:Ciaz}])
  const [checkedAny, setCheckedAny] = useState(true)
  const [checkedPick, setCheckedPick] = useState(false)
  const [checkedCust, setCheckedCust] = useState(false)
  const [checkedFin, setCheckedFin] = useState(false)

  const allVehicles = vehiclesArr.map( vehicle => {
    return (
      <li key={uniqid()} className="rounded-[10px] bg-white">
        <Image src={vehicle.imageUrl} width={300} height={174}/>
        <h1 className='font-bold text-[28px]'>{vehicle.name}</h1>
        <p>{vehicle.desc}</p>
        <p>{vehicle.status}</p>
      </li>
    )
  })

  const pickUpVehicles = vehiclesArr.map(vehicle => {
    if (vehicle.status === "Pick Up"){
      return (
        <li key={uniqid()} className="rounded-[10px] bg-white">
          <Image src={vehicle.imageUrl} width={300} height={174}/>
          <h1 className='font-bold text-[28px]'>{vehicle.name}</h1>
          <p>{vehicle.desc}</p>
          <p className='bg-[#5AC8FA]'>{vehicle.status}</p>
        </li>
      )
    }
  }
  )

  const customizingVehicles = vehiclesArr.map(vehicle => {
    if (vehicle.status == "Customizing"){
      return (
        <li key={uniqid()} className="rounded-[10px] bg-white">
          <Image src={vehicle.imageUrl} width={300} height={174}/>
          <h1 className='font-bold text-[28px]'>{vehicle.name}</h1>
          <p>{vehicle.desc}</p>
          <p className='bg-[#FFCC00]'>{vehicle.status}</p>
        </li>
      )
    }
  })

  const finishedVehicles = vehiclesArr.map(vehicle => {
    if (vehicle.status == "Finished"){
      return (
        <li key={uniqid()} className="rounded-[10px] bg-white">
          <Image src={vehicle.imageUrl} width={300} height={174}/>
          <h1 className='font-bold text-[28px]'>{vehicle.name}</h1>
          <p>{vehicle.desc}</p>
          <p className='bg-[#34C759]'>{vehicle.status}</p>
        </li>
      )
    }
  })

  function handleAny(){
    setCheckedAny(true)
    setCheckedPick(false)
    setCheckedCust(false)
    setCheckedFin(false)
  }

  function handlePick(){
    setCheckedAny(false)
    setCheckedPick(true)
    setCheckedCust(false)
    setCheckedFin(false)
  }

  function handleCust(){
    setCheckedAny(false)
    setCheckedPick(false)
    setCheckedCust(true)
    setCheckedFin(false)
  }

  function handleFin(){
    setCheckedAny(false)
    setCheckedPick(false)
    setCheckedCust(false)
    setCheckedFin(true)
  }

  function filteredVehicles(){
    if (checkedAny==true){ 
      return allVehicles    
    }
    else if (checkedPick==true){
      return pickUpVehicles
    }
    else if (checkedCust==true){
      return customizingVehicles
    }
    else{
      return finishedVehicles
    }
  }

 


  return (
    <div className='font-Roboto grid grid-cols-[0fr_1fr] grid-rows-[0fr_1fr]'>
        <Navbar/>
        <Sidebar/>
        <div className='flex flex-row justify-between mt-[80px]'>
          <div id='cars' className='ml-[150px]'>
              <h1 className='text-[40px] font-bold'>Dashboard</h1>
              <ul className='flex flex-row gap-4'>
                {filteredVehicles()}
              </ul>
          </div>
          <div id='filter' className='mr-[50px]'>
            <h1 className='text-[32px] font-bold'>Filter</h1>
            <ul className='bg-white rounded-lg px-5 py-2 shadow-md font-bold text-[20px] '>
                <li> <input type="radio" id='0' name="any" checked={checkedAny} onChange={handleAny}/> Any</li>
                <li> <input type="radio" id='1' name='pickUp' checked={checkedPick} onChange={handlePick} /> Pick Up</li>
                <li> <input type="radio" id='2' name='customizing' checked={checkedCust} onChange={handleCust} /> Customizing</li>
                <li> <input type="radio" id='3' name='finished' checked={checkedFin} onChange={handleFin}/> Finished</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Dashboard