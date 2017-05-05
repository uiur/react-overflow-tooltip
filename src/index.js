import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

function isTextOverflow (element) {
  return element.clientWidth < element.scrollWidth
}

export default class OverflowTooltip extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      overflow: false
    }
  }

  componentDidMount () {
    this.checkOverflow()
  }

  componentWillReceiveProps () {
    this.setState({ overflow: false })
  }

  componentDidUpdate () {
    this.checkOverflow()
  }

  checkOverflow () {
    const element = ReactDOM.findDOMNode(this)

    const overflow = isTextOverflow(element)
    if (overflow !== this.state.overflow) {
      this.setState({ overflow: overflow })
    }
  }

  render () {
    let childProps = {}
    if (this.state.overflow) {
      childProps.title = this.props.title
    }

    return React.cloneElement(
      React.Children.only(this.props.children),
      childProps
    )
  }
}

OverflowTooltip.displayName = 'OverflowTooltip'
OverflowTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
