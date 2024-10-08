import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
	return (
		<div 
			className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10' 
			style={{
				boxShadow: '0 0 65px 10px #ff5733', // Glowing orange shadow
				border: '1px solid rgba(255, 255, 255, 0.2)' // Subtle border
			}}>
			<Sidebar />
			<MessageContainer /> 
		</div>
	);
};

export default Home;