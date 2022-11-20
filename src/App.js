// import logo from './logo.svg';
import "./App.css";
import React from "react";
import logo from "./assets/bridgelabz img.png";

class App extends React.Component {
  url = "https://www.bridgelabz.com/";
  constructor() {
    super();

    this.state = {
      username: "",
      nameError: "",
    };
  }

  //onClick function

  onClick = ($event) => {
    console.log("save button is clicked", $event);
    window.open(this.url, "blank");
  };
  onNameChange = (event) => {
    console.log("value is", event.target.value);
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}");
    //set the title using setState method
    this.setState({ username: event.target.value });
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: "" });
    } else {
      this.setState({ nameError: "Name is Incorrect" });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1>Hello {this.state.username} from Bridgelabz</h1>
          <img src={logo} onClick={this.onClick} alt="The bridgelabz logo" />
        </div>
        <div className="center">
          <input onChange={this.onNameChange} />
          <button onClick={this.onClick}>Submit</button>
          <span className="error-output">{this.state.nameError}</span>
        </div>
        <div>
          <p> At Bridgelabz, We are a techie community of</p>
          <ul>
            <li>technoligists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <p>
            Bridgelabz is an AWS recognised incubator and is soley focused on
            solving tech employability. Over the last 5 years, it has worked
            with 500+ top tech companies and 2500+ engineers have been hired
            from Bridgelabz. It has labs in Mumbai and Bangalore. It has
            partnered with over 500 companies, including Yatra, Capgemini, Meru
            Cabs, LafargeHolcim, JDA, UrbanLadder, Fullerton India, and RBL
            bank. Bridgelabz recently won Business World Techtor Award 2020 and
            secured 2nd position at Global Edtech Startup Awards 2019, India.
            Also, was selected by the Maharashtra state government as Top 100
            Startups 2019. More than 350+ learners placed in last 6 months
            despite covid downturn while most organizations were not hiring or
            were laying off!
          </p>
          <p>
            To know about us, visit{" "}
            <a href="https://bridgelabz.com/" target="_blank">
              Bridgelabz
            </a>{" "}
            to learn even more about our mission i.e.{" "}
            <strong>Employability to all.</strong>
          </p>
        </div>
      </>
    );
  }
}

export default App;
