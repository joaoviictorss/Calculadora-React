import './Button.css'

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.quadra ? 'quadra' : ''
    classes += props.reset ? 'reset' : ''
    classes += props.resultado ? 'resultado' : ''


    return (
        <button 
            onClick={e =>props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}
