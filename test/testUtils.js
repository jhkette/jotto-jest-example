import checkPropTypes from 'check-prop-types';

// a util function for testing. To find an element
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}



/**

/**
 * Assert that expected conforming props conform to propTypes definiton.
 * @param {React.Component} component - React component.
 * @param {object} conformingProps - Object of conforming props.
 * @returns {undefined} - Throws error if props do not conform.
 */
 export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
      component.propTypes,
      conformingProps,
      'prop',
      component.name);
    expect(propError).toBeUndefined();
  }