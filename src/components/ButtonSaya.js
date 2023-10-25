import "../styles/ButtonSaya.css"
function ButtonSaya(props) {
    return (
        <a href={props.link} class="btn btn-saya btn-info">{props.text}</a>
    )
}
export default ButtonSaya