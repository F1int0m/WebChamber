import React from 'react';
import Post from "../../Post/Post";
import styles from './styles.module.scss.css'

const ContentGrid = ({data}) => {
    console.log(data)
    return (
        <div className={styles.flexContainer}>
            {data.map(postInfo =>
                <Post key={postInfo.id} data={postInfo}/>
            )}
        </div>
    );
};

export default ContentGrid;