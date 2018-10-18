class Header extends React.Component {
    constructor(props){
        super()
        this.state={
            addDate:props.keyDown
        }
    }
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input onKeyDown={this.state.addDate}className="new-todo" placeholder="What needs to be done?" autoFocus />
            </header>
        )
    }
}