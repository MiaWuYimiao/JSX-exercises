const App = () => {
    return (
        <div>
            <Person name="Romeo" age={1} 
                    hobbies={["fetch ball", "runing", "eating", "sleeping"]}/>
            <Person name="Mia" age={30} 
                    hobbies={["dance", "watch TV", "gardening"]}/>   
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));