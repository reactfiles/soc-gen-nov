import { Component } from "react";
import Avengers from "./avengers";
import JusticeLeague from "./justiceleague";
import IndicHero from "./indicheroes";

class App extends Component{
    state = {
        avengers : ["Ironman","Black Widow", "Black Panther"],
        justiceleague : ["Batman", "Superman" ,"Wonder Women"],
        indicheroes : ["Krissh", "Phantom"]
    }
    render(){
        return <div>
                    <Avengers version={1001} data={this.state.avengers} title="Avengers"/>
                    <JusticeLeague version={2001} data={this.state.justiceleague} title="Justice League"/>
                    <IndicHero version={3001} data={this.state.indicheroes} title="Indic Hereoes"/>
                </div>
    }
}

export default App;