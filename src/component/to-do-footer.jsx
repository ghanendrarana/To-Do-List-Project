import "./to-do-footer.css"
import Cloud from '../assets/cloud1.webp'


function ToDoFooter() {

    return(
        <div className="to-do-footer-container">
            <div className="cloud">
                <img src={Cloud} alt="Logo"></img>
                <img src={Cloud} alt="Logo"></img>
                <img src={Cloud} alt="Logo"></img>
            </div>
        </div>
    )
}

export default ToDoFooter;