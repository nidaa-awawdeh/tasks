class Tweet extends React.Component {

    render() {
        
        return (
            <div className="div">
                <p>{this.props.name}</p>
                <p>Tweet  message : welcome</p>
                <p>Date: 2020</p>


            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <Tweet />

            </div>
        );
    }
}


ReactDOM.render(<App name="Username:Nidaa"/>, document.getElementById('app'));