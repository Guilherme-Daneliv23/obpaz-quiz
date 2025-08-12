import './fromField.css';

export const FormField = (props: any) =>  {
    return (
        <input
            style={{borderColor: props.borderColor}}
            className='form_input'
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />
    )
}