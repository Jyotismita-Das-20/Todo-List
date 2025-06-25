const Button = ({btnType, btnText, handler}) => {

  if (btnType === 'success') {
    return <button className="btn btn-success" onclick = {handler}>{btnText}</button>

  }else if (btnType === 'danger') {
    return <button className="btn btn-danger" onclick={handler}>{btnText}</button>

  }else {
    return <button className="btn button-primary" onclick={handler}>{btnText}</button>
  }
};

export default Button;