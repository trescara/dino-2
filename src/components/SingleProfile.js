import React from "react"
import Skills from "./Skills"
class SingleProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showSkills: false,
    }
  }
  toggleSkills = () => {
    console.log("test")
    console.log(this.state);

    const skills = this.state.showSkills
    this.setState({
      showSkills: !skills
    })
  }
  render() {
    console.log(this.props)
    return (
      <li key={this.props.listing.title} >
        <div className="profile-card" onClick={this.toggleSkills}>
          <header className="profile-header">
            <img src={this.props.listing.image} alt="listingImg" />
            <h2>{this.props.listing.name}</h2>
          </header>

          {this.state.showSkills === true && <Skills skills={this.props.listing.skills} />}
        </div>
      </li>

    )
  }
}

export default SingleProfile