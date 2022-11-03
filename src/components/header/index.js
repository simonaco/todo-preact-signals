import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact App</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Todo using Context</Link>
			<Link activeClassName={style.active} href="/todo">Todo</Link>
		</nav>
	</header>
);

export default Header;
