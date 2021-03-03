import React from "react";

class Personne extends React.Component {
  state = {
    timer: 0,
    interval: null,
  };

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ timer: this.state.timer + 1 });
      }, 1000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    return (
      <div className="info">
        <h2 className="FullName">Anas Bedhiafi</h2>
        <h2 className="bio">
          I am 18 years old I'm a student.{" "}
        </h2>
        <img
          src="rick.jpg"
          alt="rick"
          style={{ width: "50%", height: "50%" }}
        />
        <h2 className="pofession">devoloper</h2>
        <h3>{this.state.timer}</h3>
      </div>
    );
  }
}

export default Personne;
