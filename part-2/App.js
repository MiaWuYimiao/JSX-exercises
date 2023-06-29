const App = () => (
    <div>
        <Tweet username="dogiscute" name="Mia" date={new Date().toDateString()} message="He is the most good looking dog" />
        <Tweet username="Romeoissilly" name="Romeo" date={new Date().toDateString()} message="He is always silly" />
        <Tweet username="barkevil" name="bigRomeo" date={new Date().toDateString()} message="He barks whenever there is sound outside" />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
