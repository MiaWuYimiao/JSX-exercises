const Person = ({name, age, hobbies}) => {
    let message;
    if(age > 18){
        message = <h3>please go vote!</h3>
    } else {
        message = <h3>you must be 18</h3>
    }

    if(name.length>8) name = name.slice(0,8);
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>{name}</p>
            <span>{message}</span>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
    )
}