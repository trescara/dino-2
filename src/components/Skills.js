import React from "react"
class Skills extends React.Component{



  render() {
    var skillClasses = "skills-container"
    // if (this.state.skills === true) {
    //   skillClasses = "skills-container"
    // }
      return (
        <section className={skillClasses}>
          <h4>Skills</h4>
          <ul key="Skills">
            {this.props.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>

      )
  }

}

export default Skills