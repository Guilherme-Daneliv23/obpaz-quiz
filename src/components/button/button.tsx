import { Link } from 'react-router-dom'
import './button.css';

export const Button = (props: any) => {
     if (props.linkHref) {
    return (
      <Link
        to={props.linkHref}
        className="button-style"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.texto}
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className="button-style"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {props.texto}
    </button>
  );
}