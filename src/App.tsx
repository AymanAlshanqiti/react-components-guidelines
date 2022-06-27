import { useState } from 'react';
import Modal from './components/Modal';

function App() {
	const [isModalShown, setIsModalShown] = useState<boolean>(true);
	return (
		<div className="bg-secondary-700 h-screen w-screen p-5">
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>

			<pre className="bg-secondary-900 mt-3 rounded-lg p-3 text-white">
				npm run storybook
			</pre>

			{/* Tests */}
			{isModalShown && (
				<Modal
					onCancel={() => setIsModalShown(false)}
					onConfirm={() => setIsModalShown(false)}
					confirmString="Yes"
					cancelString="No"
					description="are you sure that you want to delete this item ?"
					hasExitIcon
					title="Are You Sure"
				/>
			)}
		</div>
	);
}

export default App;
