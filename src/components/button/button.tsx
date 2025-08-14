import './button.css';

export const Button = (props: any) => {
    return  (
        <a  
            href={props.linkHref} 
            className="button-style" 
            style={{backgroundColor: props.backgroundColor}}
        >
            {props.texto}
        </a>
    )
}