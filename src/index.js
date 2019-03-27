import { h, render } from 'preact';
import Clock from './clock';

export default class Library {
	constructor(el, options) {
		this.el = typeof el === 'string' ? document.querySelector(el) : el;
		this.options = options;
		this.renderedDom = null;
		this.render(options);
	}

	render(options) {
		this.destroy();
		this.renderedDom = render(<Clock {...options} />, this.el);
	}

	setOptions(options) {
		this.render(options);
	}

	destroy() {
		if (this.renderedDom) {
			this.el.removeChild(this.renderedDom);
			this.renderedDom = null;
		}
	}
}
