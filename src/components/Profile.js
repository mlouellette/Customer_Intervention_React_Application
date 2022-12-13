function Profile(props){
    console.log(props)
    props.name = "Jake"
    return (
    <h1>

      Name: {props.name} {props.lastname}

    </h1>
    )
}

export default Profile;