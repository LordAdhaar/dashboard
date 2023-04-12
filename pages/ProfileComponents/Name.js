import React, {useState} from 'react'

const Name = () => {

    const [name,setName] = useState("")
    const [nameFlag,setNameFlag] = useState(true)

    function handleName(e){
        setName(e.target.value)
    }

    function handleNameEdit(){
    setNameFlag(false)
    }

    function handleNameSave(){
    setNameFlag(true)
    }

    const eleName = (
        <div className='flex flex-col gap-[5px] items-start'>
            <p className="text-base font-normal">{name}</p>
            <button className='text-sm underline font-medium' onClick={handleNameEdit}>Edit</button>
        </div>
    )

    const inputName = (
        <div>
            <input type="text" placeholder="Full Name" value={name} onChange={handleName} name="name" id='ipName'/>
            <button onClick={handleNameSave} className='text-sm underline font-medium'>Save</button>
        </div>
    )

  return (
    <li  className='flex flex-col justify-center gap-[5px]'>
        <label htmlFor="name">Full Name</label>
        { nameFlag ? eleName : inputName }
    </li>
  )
}

export default Name