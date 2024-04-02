import { Card } from './components/molecule/card';
import { Header } from './components/molecule/header';

function App() {
	const person = { avatar: '', basedIn: 'Dublin, Ireland', name: 'Yuri Serafim de França', specialization: [ 'Frontend Developer', 'Backend Developer', 'Full Stack Developer' ] }
	return (
		<>
			<Header />
			<aside>
				<Card person={person}></Card>
			</aside>
			<main>Main</main>
			<footer>Footer</footer>
		</>
	);
}

export default App;
