import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	}
		
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div 
				className='w-full p-8 rounded-lg shadow-lg bg-red-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10' 
				style={{
					boxShadow: '0 0 65px 10px #ff5733', // Add glowing blue shadow
					border: '1px solid rgba(255, 255, 255, 0.2)' // Optional: adds a subtle border
				}}>
				<h1 className='text-4xl font-bold text-center text-yellow-300 mb-4'>
					QuickChat
				</h1>
				<h2 className='text-2xl font-medium text-center text-gray-300 mb-6'>
					Login
				</h2>

				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label className='label p-2'>
							<span className='text-base label-text text-white'>Username</span>
						</label>
						<input 
							type='text' 
							placeholder='Enter username' 
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
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
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link to='/signup' className='text-sm text-white hover:underline hover:text-blue-600 mb-4 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-4 bg-gray-850 text-white hover:bg-orange-600 transition duration-200' disabled={loading}>
							{loading ? <span class= 'loading loading-spinner'></span> : "Login" }
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;