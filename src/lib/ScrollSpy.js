import React, {Component, PropTypes} from 'react'
import Waypoint from 'react-waypoint'

const ABOVE = 'above'
const INSIDE = 'inside'

class ScrollSpy extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    offset: PropTypes.number,
    onActive: PropTypes.func.isRequired
  }

  static defaultProps = {
    offset: 0
  }

  topWaypointTriggered = ({currentPosition, previousPosition}) => {
    if (currentPosition === ABOVE && previousPosition === INSIDE) {
      const {name, onActive} = this.props
      onActive(name)
    }
  }
  bottomWaypointTriggered = ({currentPosition, previousPosition}) => {
    if (currentPosition === INSIDE && previousPosition === ABOVE) {
      const {name, onActive} = this.props
      onActive(name)
    }
  }

  render () {
    const {children, name, offset} = this.props

    return (
      <div className='ScrollSpy-wrapper'>
        <a name={name} />
        <Waypoint topOffset={offset} onPositionChange={this.topWaypointTriggered} />
        {children}
        <Waypoint topOffset={offset} onPositionChange={this.bottomWaypointTriggered} />
      </div>
    )
  }
}

export default ScrollSpy
