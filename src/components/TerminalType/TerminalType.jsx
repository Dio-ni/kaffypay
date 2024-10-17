import "./TerminalType.scss";
import MobileTerminal from "../../assets/main-terminal.png";
import StationaryTerminal from "../../assets/стационарный.png";

const TerminalType = () => {
  return (
    <section className="terminal_type">
        <div className="terminal_type_container wrapper">
            <h2>Терминал под каждого</h2>
            <div className="terminals">
                <div className="terminals_card">
                    <img src={MobileTerminal} alt="" />
                    <div className="card_text">
                    <h3>Мобильный</h3>
                    <p>Компактный переносной терминал</p>
                    </div>
                    
                </div>
                <div className="terminals_card">
                    <img src={StationaryTerminal} alt="" />
                    <div className="card_text">
                    <h3>Стационарный</h3>
                    <p>Настольный терминал с чековым принтером</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default TerminalType