import { h, render, Component } from 'preact';

class Clock extends Component {
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
		let time = new Date().toLocaleTimeString();

		return <span onClick={(e) => this.handleClick(time, e)}>{time}</span>;
	}
}

// 将一个时钟渲染到 <body > 标签:
render(<Clock />, document.body);
