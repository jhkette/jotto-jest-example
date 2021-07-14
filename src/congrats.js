import React from 'react'
import PropTypes from 'prop-types';
/**
 * @function
 * @param {object} props
 * @returns jsx
 */

export default function Congrats(props) {
  if (props.success){ return ( 
    <div data-test="component-congrats">
     <span  data-test="congrats-message">
       congratulations! You guessed the word
     </span>
    </div> 
  )
  }else{
    return (
      <div data-test="component-congrats" />
    )
  }
  }

  Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
  };