import { Button } from '../../atoms/button';
import { StyledCard, StyledCardRow, StyledCardTitle } from './card.styles';

type Props = {
	classNames?: string[];
	person: {
		avatar: string;
		basedIn: string;
		name: string;
		specialization: string[];
	};
};

export function Card({ person: { basedIn, name, specialization } }: Props): JSX.Element {
	return (
		<StyledCard>
			<StyledCardTitle>{name}</StyledCardTitle>
			<img src="" alt="" />
			<StyledCardRow>
				<label>Specialization:</label>
				<h4>{specialization[0]}</h4>
			</StyledCardRow>
			<StyledCardRow>
				<label>Based In:</label>
				<h4>{basedIn}</h4>
			</StyledCardRow>
			<Button
				size="lg"
				theme="colorful"
			>
				Let's Work Together!
			</Button>
		</StyledCard>
	);
}
