import Header from "../Components/header";
import './member.css'

const Member = () => {
    return (
        <div>
            <Header/>
            <div className="body">
                <div className="section first">
                    <div className="generation"><h1 className="quicksand project">Pixela Project</h1></div>
                    <div className="member">
                        <span id="hongfei">
                            <a href="#" target="_blank"><img src="/First_generation/Hongfei.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Hinabe Hongfei</h4></div>
                        </span>
                        <span id="juju">
                            <a href="#" target="_blank"><img src="/First_generation/Juju.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Laguna Juju</h4></div>
                        </span>
                        <span id="zelina">
                            <a href="#" target="_blank"><img src="/First_generation/Zelina.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Princess Zelina</h4></div>
                        </span>
                        <span id="melita">
                            <a href="#" target="_blank"><img src="/First_generation/MelitaX.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Melita X</h4></div>
                        </span>
                    </div>
                </div>
                <div className="section second">
                    <div className="generation"><h1 className="quicksand isekai">Pixela Isekai</h1></div>
                    <div className="member">
                        <span id="estaa">
                            <a href="#" target="_blank"><img src="/Second_generation/Estaa.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Jolly Estaa</h4></div>
                        </span>
                        <span id="elvene">
                            <a href="#" target="_blank"><img src="/Second_generation/Elvene.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Aranis Elvene</h4></div>
                        </span>
                        <span id="lafy">
                            <a href="#" target="_blank"><img src="/Second_generation/Lafy.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Hanabi Lafy</h4></div>
                        </span>
                        <span id="kona">
                            <a href="#" target="_blank"><img src="/Second_generation/Kona.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Draki Kona</h4></div>
                        </span>
                        <span id="mewten">
                            <a href="#" target="_blank"><img src="/Second_generation/Mewten.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Kisuneko Mewten</h4></div>
                        </span>
                        <span id="reirin">
                            <a href="#" target="_blank"><img src="/Second_generation/Reirin.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Kamiyu Reirin</h4></div>
                        </span>
                    </div>
                </div>
                <div className="section third">
                    <div className="generation"><h1 className="quicksand legend">Pixela Legend</h1></div>
                    <div className="member">
                        <span id="pero">
                            <a href="#" target="_blank"><img src="/Third_generation/Pero.png"></img></a>
                            <div className="member-name"><h4 className="quicksand">Superpretty TAKOPERO</h4></div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member