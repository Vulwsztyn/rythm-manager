import React from 'react'
import { connect } from 'react-redux'
import send from './send'
const { forwardRef, useImperativeHandle } = React

const Sender = forwardRef(({ command, prefix }, ref) => {
  useImperativeHandle(ref, () => ({
    sendWithPrefixAndCommand(text) {
      send(`${prefix}${command} ${text}`)
    },
    sendWithPrefix(text) {
      send(`${prefix} ${text}`)
    },
  }))

  return <></>
})

const mapStateToProps = (state) => {
  const { command, prefix } = state
  return {
    command,
    prefix,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // setCommand: (value) => dispatch({ type: 'CHANGE_COMMAND', value }),
    // setFunctions: (functions) => dispatch({ type: 'SET_FUNCTIONS', functions }),
    // setAlgorithmState: (value) =>
    //   dispatch({ type: 'SET_ALGORITHM_STATE', value }),
    // setCurrentGeneration: (value) =>
    //   dispatch({ type: 'SET_CURRENT_GENERATION', value }),
    // setBestSpecimens: (value) =>
    //   dispatch({ type: 'SET_BEST_SPECIMENS', value }),
    // setBestSpecimen: (value) => dispatch({ type: 'SET_BEST_SPECIMEN', value }),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(Sender)
export default Container
