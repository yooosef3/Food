import BlogListSidebar from './BlogListSidebar';
import BlogsList from './BlogsList';
import PagesHeader from '../PagesHeader';
import React from 'react';
import styles from '../../../styles/main/grid/BlogList.module.css'

const BlogList = () => {
    return (
        <div className={styles.blogList}>
            <PagesHeader page={'بلاگ'} headline={'لیست بلاگ'} path={'bloglist'}/>
            <div className={styles.bloglistContainer}>
                <BlogsList />
                <BlogListSidebar />
            </div>
        </div>
    );
};

export default BlogList;