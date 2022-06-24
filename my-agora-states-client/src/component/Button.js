import './Button.css'

const Button = ({ type, title }) => {

  return (
    <div className="form__submit">
      <input type={type} value={title} />
    </div>
  )
}

export default Button;