import React,{useState} from 'react'

const Email = () => {

    const [email,setEmail] = useState("")
    const [emailFlag,setEmailFlag] = useState(true)

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handleEmailEdit(){
        setEmailFlag(false)
    }

    function handleEmailSave(){
        setEmailFlag(true)
    }

    const eleEmail = (
        <div className='flex flex-col gap-[5px] items-start'>
            <p className="text-base font-normal">{email}</p>
            <button className='text-sm underline font-medium' onClick={handleEmailEdit}>Edit</button>
        </div>
        )

    const inputEmail = (
        <div>
            <input type="email" placeholder="abc@gmail.com" value={email} onChange={handleEmail} name="email" id='ipEmail'/>
            <button onClick={handleEmailSave} className='text-sm underline font-medium'>Save</button>
        </div>
    )

  return (
    <li className='flex flex-col justify-center gap-[5px]'>
        <label htmlFor="email">Email</label>
        { emailFlag ? eleEmail : inputEmail}
    </li>
    )
}

export default Email