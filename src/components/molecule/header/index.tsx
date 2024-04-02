import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../../atoms/button';
import { faMessage, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { StyledNav, StyledNavList } from './header.styles';

// switch color-scheme property from html tag
const swithTheme = () => {
	const html = document.querySelector('html');
	if (!html) return;

	const currentThem = html.getAttribute('color-scheme');
	if (currentThem === 'dark') {
		html.setAttribute('color-scheme', 'light');
		return;
	}

	html.setAttribute('color-scheme', 'dark');
};

export function Header() {
	return (
		<header>
			<StyledNav>
				<StyledNavList>
					<li>
						<Button
							outlined="true"
							size="lg"
							theme="blur"
						>
							Home
						</Button>
					</li>
					<li>
						<Button
							size="lg"
							theme="blur"
						>
							Portifolio
						</Button>
					</li>
					<li>
						<Button
							size="lg"
							theme="blur"
						>
							About Me
						</Button>
					</li>
					<li>
						<Button
							size="lg"
							theme="blur"
						>
							Resume
						</Button>
					</li>
					<li>
						<Button
							size="lg"
							theme="blur"
						>
							Contact
						</Button>
					</li>
				</StyledNavList>
				<StyledNavList>
					<li>
						<Button
							size="lg"
							onClick={swithTheme}
						>
							<FontAwesomeIcon icon={faSun} />
							<FontAwesomeIcon icon={faMoon} />
						</Button>
					</li>
					<li>
						<Button
							size="lg"
							theme="colorful"
						>
							Let's Talk <FontAwesomeIcon icon={faMessage} />
						</Button>
					</li>
				</StyledNavList>
			</StyledNav>
		</header>
	);
}
