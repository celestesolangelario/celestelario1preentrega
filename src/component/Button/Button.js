const Button = (props) => {
    console.log(props)
    return <button class="btn btn-light" onClick={props.callback}>{props.label}</button>
}
export default Button