import classes from './Input.module.css';

const Input = (props) => {
    return (
        <input {...props} type="text" placeholder="Добавить пост" className={classes.input}/>
    )
}

export default Input;