import Emoji from '../assets/emoji1.jpg'
import "./to-do-header.css"


function ToDoHeader() {
    return(
        <div className='to-do-header-container'>
            <div className='title'> To Do </div>
            <div className='img-div'>
                <img src={Emoji} alt="Logo" />
            </div>
        </div>
    )
}

export default ToDoHeader;