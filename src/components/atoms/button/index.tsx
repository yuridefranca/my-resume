import { StyledButton } from './button.styles';

const ButtonSizes = {
	sm: 'small',
	md: 'medium',
	lg: 'large',
	xl: 'extraLarge',
};

const ButtonThemes = {
	blur: 'blur',
	colorful: 'colorful',
	none: 'none',
};

const ButtonTypes = {
	button: 'button',
	submit: 'submit',
	reset: 'reset',
};

type Props = {
	classNames?: string[];
	children: React.ReactNode;
	size?: keyof typeof ButtonSizes;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	outlined?: string;
	theme?: keyof typeof ButtonThemes;
	type?: keyof typeof ButtonTypes;
};

export function Button({ children, onClick, outlined, size, theme, type }: Props): JSX.Element {
	return (
		<StyledButton
			onClick={onClick ?? (() => console.log('Button clicked'))}
			outlined={outlined!}
			size={ButtonSizes[size!] ?? 'medium'}
			type={type ?? 'button'}
			theme={ButtonThemes[theme!] ?? 'none'}
		>
			{children}
		</StyledButton>
	);
}
