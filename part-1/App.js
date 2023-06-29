const App = () => (
    <div>
        <FirstComponent />
        <NamedComponent  name="Romeo" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));