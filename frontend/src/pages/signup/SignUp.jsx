import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";



const SignUp = () => {

    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

    const {loading,signup} = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

	return (
        
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div 
				className='w-full p-8 rounded-lg shadow-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10' 
				style={{
					boxShadow: '0 0 65px 10px #ff5733', // Glowing orange shadow
					border: '1px solid rgba(255, 255, 255, 0.2)' // Subtle border
				}}>
				<h1 className='text-4xl font-bold text-center text-yellow-300 mb-4'>
					QuickChat
				</h1>
				<h2 className='text-2xl font-medium text-center text-gray-300 mb-6'>
					Sign Up
				</h2>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Full Name</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter Full Name' 
							className='w-full input input-bordered h-10' 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter Username' 
							className='w-full input input-bordered h-10' 
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label'>
							<span className='text-base label-text text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value })}
						/>
					</div>

					<div className='mb-4'>
						<label className='label'>
							<span className='text-base label-text text-white'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender} />

					<Link className='text-sm text-white hover:underline hover:text-blue-600 mb-4 inline-block' to='/login'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-4 bg-gray-850 text-white hover:bg-orange-600 transition duration-200'disabled={loading}>
							{loading ? <span class= 'loading loading-spinner'></span> : "SignUp" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
