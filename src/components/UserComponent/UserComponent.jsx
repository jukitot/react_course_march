const UserComponent = (props) => {
    const {name, nickname, email} = props
    console.log(props);
    return(
        <div>
            <h1>{name}</h1>
            <h1>{nickname}</h1>
            <h1>{email}</h1>
            <h1>hello</h1>
            <h2>lesson-1</h2>
        </div>
    )
}
export default UserComponent;