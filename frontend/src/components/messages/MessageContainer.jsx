import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti"

const MessageContainer = () => {
	const noChatSelected = true;
	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{noChatSelected ? <NoChatSelected /> : (
				<>
				{/* Header */}
				<div className='bg-transparent px-4 py-2 mb-2'>
					<span className='label-text'>To:</span> <span className='text-gray-400 font-bold'>John doe</span>
				</div>
				<div className="border-t border-gray-500 mb-2"></div>

				<Messages />
				<MessageInput /> 
			</>
			)};
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 John Doe ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};








//<div className="border-t border-gray-500 mb-2"></div>