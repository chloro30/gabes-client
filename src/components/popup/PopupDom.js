import ReactDom from 'react-dom';
 
const PopupDom = ({ children }) => {
    const popup = document.getElementById('popupDom');
    return ReactDom.createPortal(children, popup);
};
 
export default PopupDom;