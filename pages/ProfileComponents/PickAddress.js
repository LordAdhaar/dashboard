import React, { useState } from 'react'

const PickAddress = () => {

    const [pincode,setPincode] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [state,setState] = useState("")
    const [addressFlag,setAddressFlag] = useState(true) 

    function handlePincode(e){
        setPincode(e.target.value)
    }

    function handleAddress1(e){
        setAddress1(e.target.value)
    }

    function handleAddress2(e){
        setAddress2(e.target.value)
    }

    function handleCity(e){
        setCity(e.target.value)
    }

    function handleState(e){
        setState(e.target.value)
    }

    function handleAddressEdit(){
        setAddressFlag(false)
    }

    function handleAddressSave(){
        setAddressFlag(true)
    }

    const eleAddress = (
        <div className='flex flex-col gap-[5px] items-start'>
            <p className="text-base font-normal">{pincode}</p>
            <p className="text-base font-normal">{address1}</p>
            <p className="text-base font-normal">{address2}</p>
            <p className="text-base font-normal">{city}</p>
            <p className="text-base font-normal">{state}</p>
            <button className='text-sm underline font-medium' onClick={handleAddressEdit}>Edit</button>
        </div>
    )

    const inputAddress = (
        <div>
            <input type="number" placeholder="Pincode" value={pincode} onChange={handlePincode} name="pincode" id='ipPincode'/>
            <input type="text" placeholder="Address Line 1" value={address1} onChange={handleAddress1} name="address1" id='ipAddress1'/>
            <input type="text" placeholder="Address Line 2" value={address2} onChange={handleAddress2} name="address2" id='ipAddress2'/>
            <input type="text" placeholder="City" value={city} onChange={handleCity} name="city" id='ipCity'/>
            <input type="text" placeholder="State" value={state} onChange={handleState} name="state" id='ipState'/>
            <button onClick={handleAddressSave} className='text-sm underline font-medium'>Save</button>
        </div>
    )


  return (
    <li className='flex flex-col justify-center gap-[5px]'>
        <label htmlFor="pickAddress">Pick Up Address</label>
        { addressFlag ? eleAddress : inputAddress}
    </li>
  )
}

export default PickAddress