import Button from "../UI/Button"
import Input from "../UI/Input"
import classes from '../FormPost.module.css'
import { useState } from "react"

const PostForm = ({create}) => {

    const [value, setValue] = useState([{title: '123'}])

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
           ...value, id: Date.now()
        }
        create(newPost)
        setValue({title: ''})
    }
    return (
        <form className={classes.form}>
            <div>
                <Input value={value.title} onChange={e => setValue({...value, title: e.target.value})}/>
            </div>
            <Button onClick={addNewPost}>Add post</Button>
        </form>
    )
}

export default PostForm;