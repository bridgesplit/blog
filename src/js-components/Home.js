import clsx from 'clsx';
import React from 'react';
// import SearchBar from '@theme/SearchBar'
import styles from './styles.module.css';
import postImage from '@site/static/img/posts/closed-beta.png';
import {POSTS, TAGS, FEATURED_POST} from "./posts"
import AtomicMarkets from '@site/blog/atomic-markets.mdx';


function parseImagePath(path){
  return '/img/posts/' + path.split("/").pop();
}


function filterTags(tags) {
  const idx = tags.findIndex((tag) => tag == 'featured');
  const parsedTags = tags
  if(idx != -1) {
    parsedTags.splice(idx, 1);
  }
  return parsedTags
}

function FeaturedPost({post}) {
  const { image, title,description, date, tags, slug } = post;
  const imagePath = parseImagePath(image)
  const filteredTags = filterTags(tags)
  return (
    <div className={clsx('col col--12 ')}>
      <a target="_self" href={slug}>

        <div className={clsx("card", styles.featuredCard)}>
          <img className={clsx(styles.featuredImage)} src={imagePath}/>
          <div className={clsx(styles.featuredContent)}>
            <div className={clsx(styles.featuredText)}>
              <p className={clsx(styles.featuredOverline)}>Featured</p>
              <h3>{title}</h3>
              <p>{description}</p>

            </div>
            <div className={clsx(styles.featuredMetadata)}>
              <p>{date}</p>
              {filteredTags.map((tag,i) => <div key={i} className={clsx(styles.tag)}>{tag}</div>)}
            </div>

          </div>
        </div>
      </a>
    </div>);
}

function Post({post}) {
  const { image, title, date, tags, slug } = post;
  const imagePath = parseImagePath(image)
  const filteredTags = filterTags(tags)
  return (
    <div className={clsx('col col--4 ')}>
      <a target="_self" href={slug}>
        <div className={clsx(styles.postContainer)}>
          <img className={clsx("card", styles.postImage)} src={imagePath} />
          <div className={clsx(styles.postContent)}>
            <h4>{title}</h4>

            <div className={clsx(styles.postMetadata)}>
              <p>{date}</p>
              {filteredTags.map((tag, i) => <div key={i} className={clsx(styles.tag)}>{tag}</div>)}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  const tags = filterTags(TAGS);
  return (
    <main className="homeContainer">
      <div className={clsx("container", styles.homeContainer)}>
        <div className={clsx('col col--12 ')}>
          <h1> Updates, stories, and announcements from the Loopscale team.</h1>
          <div className={clsx(styles.tagContainer)}>
            {
              tags.map((tag, i) => (
<div className={clsx(styles.tag)} key={i}>{tag}</div>
              ))
            }
            </div>
        </div>
        <FeaturedPost post={FEATURED_POST}/>
        
        <div className={clsx(styles.postsContainer)}>

          <h2 className={clsx('col col--12 ')}>Recent</h2>
          <div className="row">
            {POSTS.map((post, idx) => (
              <Post key={idx} post={post} />
            ))}</div>
        </div>
      </div>
    </main >
  );
}
