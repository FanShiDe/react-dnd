import React from 'react'
import Dustbin from './Dustbin'
import Box from './Box'
export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dustbin />
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" />
          <Box name="Banana" />
          <Box name="Paper" />
        </div>
      </div>
    )
  }
}
