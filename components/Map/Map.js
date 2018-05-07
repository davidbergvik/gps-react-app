var React = require('react');
class Map extends React.Component {
  render() {
    return (
      <div className="map">
        <p>Your map coords are:
        ({this.props.mapCoords.x}, {this.props.mapCoords.y})
        </p>
        { this.props.children }
      </div>
    )
  }
};

module.exports = Map;
