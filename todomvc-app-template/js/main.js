
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			dataList: [
				{ name: "asd1" },
				{ name: "asd2" },
				{ name: "asd3" }
			],
			asd741: "what?"
		}
		this.addData = this.addData.bind(this);
	}

	showState() {
		return (
			this.state.dataList.map((item, index) => {
				return (
					<li key={index}>
						<div className="view">
							<input className="toggle" type="checkbox" />
							<label>{item.name}</label>
							<button className="destroy"></button>
						</div>
						<input className="edit" defaultValue="Rule the web" />
					</li>
				)
			})
		)
	}
	addData(e) {
		e = e || window.event;
		const { target, keyCode } = e;
		if (keyCode !== 13 || target.value === "") {
			return;
		}
		this.state.dataList.push({ name: target.value.trim() });
		this.setState({ dataList: this.state.dataList });
		target.value = "";
	}
	render() {
		return (
			<section>
				<section className="todoapp">
					<Header keyDown={this.addData} />
					{/* <!-- This section should be hidden by default and shown when there are todos --> */}
					<section className="main">
						<input id="toggle-all" className="toggle-all" type="checkbox" />
						<label htmlFor="toggle-all">Mark all as complete</label>
						<ul className="todo-list">
							{/* <!-- These are here just to show the structure of the list items --> */}
							{/* <!-- List items should get the className `editing` when editing and `completed` when marked as completed --> */}
							<li className="completed">
								<div className="view">
									<input className="toggle" type="checkbox" defaultChecked />
									<label>Taste JavaScript</label>
									<button className="destroy"></button>
								</div>
								<input className="edit" defaultValue="Create a TodoMVC template" />
							</li>
							<li>
								<div className="view">
									<input className="toggle" type="checkbox" />
									<label>Buy a unicorn</label>
									<button className="destroy"></button>
								</div>
								<input className="edit" defaultValue="Rule the web" />
							</li>
							{this.showState()}
						</ul>
					</section>
					{/* <!-- This footer should hidden by default and shown when there are todos --> */}
					<footer className="footer">
						{/* <!-- This should be `0 items left` by default --> */}
						<span className="todo-count"><strong>0</strong> item left</span>
						{/* <!-- Remove this if you don't implement routing --> */}
						<ul className="filters">
							<li>
								<a className="selected" href="#/">All</a>
							</li>
							<li>
								<a href="#/active">Active</a>
							</li>
							<li>
								<a href="#/completed">Completed</a>
							</li>
						</ul>
						{/* <!-- Hidden if no completed items are left ↓ --> */}
						<button className="clear-completed">Clear completed</button>
					</footer>
				</section>
				<Footer />
			</section>
		)
	}
}
ReactDOM.render(
	<App />,
	document.querySelector("#app")
)
