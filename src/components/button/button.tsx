import './button.css';

export const Button = (props: any) => {
    return  (
        <button 
            className="button-style" 
            style={{backgroundColor: props.backgroundColor}}
        >
            {props.texto}
        </button>
    )
}