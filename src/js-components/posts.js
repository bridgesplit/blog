import {frontMatter as flexAppeal} from '@site/blog/flex-appeal.mdx';
import {frontMatter as atomicMarkets} from '@site/blog/atomic-markets.mdx';
import {frontMatter as closedBeta} from '@site/blog/closed-beta.mdx'

// Add post to this line
const allPosts = [flexAppeal, atomicMarkets, closedBeta];

// Don't edit below this line
const BASE_TAGS = [
    "company",
    "product",
    "partnerships",
    "research",
    "community",
]

var sortedPosts = [...allPosts];
sortedPosts.sort(function(a,b) {
    return b.date - a.date;
});
const isFeatured = sortedPosts.map(post => post.tags.indexOf("featured")>=0)
var featuredIdx = Math.max(isFeatured.indexOf(true), 0);
console.log(sortedPosts);
console.log(isFeatured);
console.log(featuredIdx);
export const TAGS = [...new Set([...BASE_TAGS, ...allPosts.map(post => post.tags).flat()])];
export const FEATURED_POST = sortedPosts.at(featuredIdx)
sortedPosts.splice(featuredIdx, 1);
export const POSTS = sortedPosts;


