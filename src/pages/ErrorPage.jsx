import { useRouteError } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div className="error-container">
			<h1>Oh, golly!</h1>
			<p>{"I'm sorry, it seems we've run into a spot of bother:"}</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	);
}
