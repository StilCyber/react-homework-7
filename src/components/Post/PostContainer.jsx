import PostItem from "./PostItem";
import classes from '../styles/PostContainer.module.css'

const PostContainer = ({posts, remove}) => {
    return (
        <div className={classes.posts}>
            {posts.map((m, index) => <PostItem remove={remove} number={index + 1} item={m} key={posts.id}/>)}
        </div>
    )
}

export default PostContainer;