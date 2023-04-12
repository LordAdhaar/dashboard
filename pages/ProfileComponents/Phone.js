import React, {useState} from 'react'

const Phone = () => {

    const [phone,setPhone] = useState("")
    const [phoneFlag,setPhoneFlag] = useState(true)

    function handlePhone(e){
        setPhone(e.target.value)
    }

    function handlePhoneEdit(){
        setPhoneFlag(false)
    }

    function handlePhoneSave(){
        setPhoneFlag(true)
    }

    const elePhone = (
        <div className='flex flex-col gap-[5px] items-start'>
            <p className="text-base font-normal">{phone}</p>
            <button className='text-sm underline font-medium' onClick={handlePhoneEdit}>Edit</button>
        </div>
    )

    const inputPhone = (
        <div>
            <input type="number" placeholder="Phone Number" value={phone} onChange={handlePhone} name="phone" id='ipPhone'/>
            <button onClick={handlePhoneSave} className='text-sm underline font-medium'>Save</button>
        </div>
    )

  return (
    <li  className='flex flex-col justify-center gap-[5px]'>
        <label htmlFor="phone">Phone Number</label>
        { phoneFlag ? elePhone : inputPhone}
    </li>
  )
}

export default Phone