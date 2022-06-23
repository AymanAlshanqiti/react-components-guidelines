import { BsPerson } from 'react-icons/bs';
import InputField from './components/InputField';
import { DirectionEnum } from './core/enums';

function App() {
	return (
		<div className="bg-secondary-700 h-screen w-screen p-5">
			<div className="text-white font-bold text-2xl">
				to see the components run the following command
			</div>
			<pre className="bg-secondary-900 mt-3 rounded-lg p-3 text-white">
				npm run storybook
			</pre>
			<div className="my-5 bg-white p-5 rounded-lg">
				{/* Tests */}
				<InputField
					aria-label="First Name"
					info="hi this is your first name"
					placeholder="Ayman"
					dir={DirectionEnum.RTL}
					name="first_name"
					onResetInputhValue={() => alert('onResetInputhValue event')}
					icon={<BsPerson />}
				/>
			</div>
		</div>
	);
}

export default App;
