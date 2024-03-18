import PropTypes from "prop-types";


const Button = ({
    width = 0,
    padding = 0,
    margin = 0,
    backgroundColor = "",
    color = "",
    fontSize = 20,
    borderRadius = 0,
    className = "",
    externalFunction,
    type = "",
    payload,
    children
}) => {

  const buttonStyles = {
    width: `${width}px`,
    padding: `${padding}px`,
    margin: `${margin}px`,
    backgroundColor: `${backgroundColor}`, //#fff or rgba(0,0,0,0.5), etc
    color: `#${color}`,
    fontSize: `${fontSize}px`,
    cursor: "pointer",
    borderRadius: `${borderRadius}px`,
    outlineStyle: "none",
    borderStyle: "none"
  }

  

  return (
    <button style={buttonStyles}  className={className} onClick={() => externalFunction({type: `${type}`, payload: payload })} >
        {children}
    </button>
  )
}

export default Button

Button.propTypes = {
    children: PropTypes.any,
    width: PropTypes.number,
    padding: PropTypes.number,
    margin: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    borderRadius: PropTypes.number,
    className: PropTypes.string,
    externalFunction: PropTypes.func,
    type: PropTypes.string,
    payload: PropTypes.object,
}