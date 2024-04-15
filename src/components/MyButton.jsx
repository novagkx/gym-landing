const MyButton = ({children, margin}) => {
    return (
        <button style={{marginBottom: margin}} className="main__btn">{children}</button>
    )
}
export default MyButton;