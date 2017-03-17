import React, {PropTypes} from 'react'

const HelloWorld = ({name}) => {
  const greeting = `Greetings, ${name}. Glad you made it.`
  return <span>{greeting}</span>
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired
}

export {HelloWorld}
