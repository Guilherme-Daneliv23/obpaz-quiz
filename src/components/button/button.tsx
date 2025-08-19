import './button.css';

export const Button = (props: any) => {
     if (props.linkHref) {
    return (
      <a
        href={props.linkHref}
        className="button-style"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.texto}
      </a>
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