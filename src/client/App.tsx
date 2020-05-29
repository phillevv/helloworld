import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			users: []
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/users');
			let users = await r.json();
			this.setState({ users });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<h1 className="text-primary text-center">Users</h1>

				<ul className="list-group">
					{this.state.users.map(users => {
						return <li className="list-group-item">{users.name}</li>
					})}
				</ul>
			</main>
		);
	}
}

export interface IAppProps {

}

export interface IAppState {
	users: Array<{name: string,body: string}>;
}

export default App;
