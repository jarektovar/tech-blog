import { Alert, Button, Label, Spinner,TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);

  return <div className='min-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left */}
      <div className='flex-1'>
      <Link to="/" className='font-bold dark:text-white text-4xl'>
        
        <span className='px-2 py-1 bg-gradient-to-r from-yellow-400
        via-yellow-400 to-blue-700 rounded-lg text-white'>
            NeoSolutions
        </span>
        Tech
    </Link>
    <p className='text-sm mt-5'>
      You can sign up witn your email and password
    </p>
      </div> 
      {/* right */}

      <div className='flex-1'>
        <form  className='flex flex-col gap-4'>
          <div >
            <Label value='Your username'/>
            <TextInput type = 'text' placeholder='Username' id='username' onChange={handleChange} />
          </div>
          <div >
            <Label value='Your email'/>
            <TextInput type = 'email' placeholder='name@company.com' id='email' onChange={handleChange}/>
          </div>
          <div >
            <Label value='Your password'/>
            <TextInput type = 'password' placeholder='Password' id='password' onChange={handleChange}/>
          </div>
          <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
          </Button>
      
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Have an acount?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  </div>
  
}
