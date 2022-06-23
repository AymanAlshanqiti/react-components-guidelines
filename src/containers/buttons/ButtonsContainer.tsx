import Button from '../../components/Button';
import {
	BorderRadiusEnum,
	ColorsEnum,
	SizesEnum,
	VariantsEnum,
} from '../../core/enums';

export default function ButtonsContainer() {
	return (
		<div className="border rounded-lg p-4">
			<h1 className="font-bold text-2xl">Buttons</h1>
			<div className="flex flex-wrap gap-3 mt-2">
				<Button
					value="primary default"
					size={SizesEnum.Medium}
					color={ColorsEnum.Primary}
					variant={VariantsEnum.Filled}
					borderRadius={BorderRadiusEnum.Medium}
				/>
			</div>
		</div>
	);
}
