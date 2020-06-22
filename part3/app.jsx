class Person extends React.Component {
    render() {
        var hobbies = this.props.hobbies;
       
        return (
            <div>
                <p>{this.props.name} Learn some information about this person</p>
                <h3> "have a drink! {this.props.hobbies}</h3>
                
                  
            </div>
        );
    }
}

ReactDOM.render(<Person name="Nidaa" hobbies= "[eat, write]" />, document.getElementById('app'));