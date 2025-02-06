import clsx from 'clsx';
import React from 'react';
// import SearchBar from '@theme/SearchBar'
import styles from './styles.module.css';
import postImage from '@site/static/img/posts/closed-beta.png';
import {blogPosts, tags} from "./posts"
import AtomicMarkets from '@site/blog/atomic-markets.mdx';


function Header() {
  return (
    <div className={clsx("container")}>
      <div className={clsx("col col--8 col--offset-2", styles.header)}>
        <h1>Loopscale Docs</h1>
        <p className={clsx(styles.subtitle)}>
          Loopscale provides market-driven, modular credit infrastructure for the next generation of capital markets.
        </p>
        {/* <SearchBar /> */}
      </div>
    </div>
  )
}
const posts = [{
  title: "Access the Loopscale Closed Beta",
  subtitle: "Announcing our Closed Beta, offering market efficiency and flexibility for on-chain capital markets via fixed-rate borrowing, diverse collateral support, and more.",
  date: "June 4, 2024",
  tags: ["#product"],
  image: postImage,
  slug: "/closed-beta",
},
{
  title: "Access the Loopscale Closed Beta",
  subtitle: "Announcing our Closed Beta, offering market efficiency and flexibility for on-chain capital markets via fixed-rate borrowing, diverse collateral support, and more.",
  date: "June 4, 2024",
  tags: ["#product"],
  image: postImage,
  slug: "/closed-beta",
}
]

const featuredPost = posts[0];
function FeaturedPost() {
  // const parsedTags = featuredPost.tags;
  // parsedTags.splice(parsedTags.findIndex('#featured'), 1);

  return (
    <div className={clsx('col col--12 ')}>
      <a target="_self" href={featuredPost.slug}>

        <div className={clsx("card", styles.featuredCard)}>
          <img className={clsx(styles.featuredImage)} src={featuredPost.image} />
          <div className={clsx(styles.featuredContent)}>
            <div className={clsx(styles.featuredText)}>
              <p className={clsx(styles.featuredOverline)}>Featured</p>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.subtitle}</p>
            </div>
            <div className={clsx(styles.featuredMetadata)}>
              <p>{featuredPost.date}</p>
              {featuredPost.tags.map(tag => <div className={clsx(styles.tag)}>{tag}</div>)}
            </div>

          </div>
        </div>
      </a>
    </div>);
}

function Post(post) {
  const { image, title, date, tags, slug } = post;
  return (
    <div className={clsx('col col--4 ')}>
      <a target="_self" href={slug}>
        <div className={clsx(styles.postContainer)}>
          <img className={clsx("card", styles.postImage)} src={image} />
          <div className={clsx(styles.postContent)}>
            <h4>{title}</h4>
            <div className={clsx(styles.postMetadata)}>
              <p>{date}</p>
              {tags.map(tag => <div className={clsx(styles.tag)}>{tag}</div>)}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function NewHome() {
  return (
    <main className="homeContainer">
      <div className={clsx("container", styles.homeContainer)}>
        <div className={clsx('col col--12 ')}>
          <h1> Updates, stories, and announcements from the Loopscale team.</h1>
          <h1>{JSON.stringify(blogPosts)}</h1>
          <AtomicMarkets/>
          <div className={clsx(styles.tagContainer)}>
            <div className={clsx(styles.tag)}>#company</div>
            <div className={clsx(styles.tag)}>#product</div>
            <div className={clsx(styles.tag)}>#partnerships</div>
            <div className={clsx(styles.tag)}>#research</div>
            <div className={clsx(styles.tag)}>#community</div></div>
        </div>
        <FeaturedPost />
        <div className={clsx(styles.postsContainer)}>

          <h2 className={clsx('col col--12 ')}>Recent</h2>
          <div className="row">

            {posts.map((post, idx) => (
              <Post key={idx} {...post} />
            ))}</div>
        </div>
      </div>
    </main >
  );
}
