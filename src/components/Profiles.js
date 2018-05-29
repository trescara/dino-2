import React from "react";
import SingleProfile from './SingleProfile'

  class Profiles extends React.Component {

  state = {
    expandedProfiles: {}
  };

  toggleExpand = id => {
    const { expandedProfiles } = this.state;
    expandedProfiles[id] = !expandedProfiles[id];
    console.log(`expandedProfiles[${id}]`, expandedProfiles[id]);

    // this.setState({ expandedProfiles })
  };

  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {this.props.listings.map(listing => {
            return <SingleProfile key={listing.name} listing={listing}/>
        })}
        </ul>
      </section>
    );
  }
}

export default Profiles;
