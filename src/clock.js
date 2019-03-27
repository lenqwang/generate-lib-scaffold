import { h, Component } from 'preact';

export default class Clock extends Component {
	constructor() {
		super();

		this.state = {
			time: Date.now()
		};
	}

	handleClick(time) {
		alert(time);
	}

	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				time: Date.now()
			});
		}, 1e3);
	}

	componentWillUnmount() {
		if (this.timer) {
			clearInterval(this.timer);
		}
	}

	render() {
		const { name } = this.props;
		const time = new Date().toLocaleTimeString();

		return (
			<span onClick={(e) => this.handleClick(time, e)}>
				{time} - {name}
			</span>
		);
	}
}
