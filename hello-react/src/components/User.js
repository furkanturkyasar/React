import Proptypes from "prop-types";

function User({name, surname, isLogged, age, friends, address}) {
    if(!isLogged) {
        return <div>Giris Yapmadiniz</div>
    }
    return(
        <>
            <h1>
                {` Selam ${name} ${surname} (${age})`}
            </h1>

            {address.title} {address.zip}

            <br />
            <br />
            
            {friends && 
            friends.map((friend) =>  {
                return <div key={friend.id}> {friend.name}</div>
            }
            )}
        </>
    )
}

User.propTypes = {
    name: Proptypes.string.isRequired,
    surname: Proptypes.string.isRequired,
    isLogged: Proptypes.bool.isRequired,
    age: Proptypes.oneOfType([
        Proptypes.number,
        Proptypes.string
    ]).isRequired,
    friends: Proptypes.array,
    address: Proptypes.shape({
        title: Proptypes.string,
        zip: Proptypes.number
    })
}

User.defaultProps = {
    isLogged: false,
    age: "Bilinmiyor"
}

export default User;