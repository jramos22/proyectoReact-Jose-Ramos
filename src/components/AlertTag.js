import ReactDOM from 'react-dom'

const alertContainer = document.querySelector("#alert-root")

const AlertTag = ({ message, type, isOpened, position}) => {

    if (!isOpened) return null
    return ReactDOM.createPortal(
            <div className={`alert ${!type ? "info" : type} ${position === null ? "right" : position}`}>
                <div className="closeAlert" onClick={(e) => {e.target.parentElement.style.display = 'none'}}>
                    X
                </div>
                <span>{message}</span>
            </div>,
        alertContainer
    )
}

export default AlertTag