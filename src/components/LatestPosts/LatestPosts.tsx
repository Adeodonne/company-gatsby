import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {GetLatestPostsResponse} from "@/features/post/types/post.types";
import PostItem from "@/components/LatestPosts/components/LatestPostsItem";

const LatestPosts: React.FC = () => {

    const data = useStaticQuery<GetLatestPostsResponse>(graphql`
    query getLatestPosts {
      allStrapiPost(sort: { publishedDate: DESC }, limit: 3) {
        nodes {
          name
          subname
          image {
            url
          }
        }
      }
    }
  `);

    return (
        <div>
            <p className="font-poppins text-5xl font-extrabold leading-[60px] tracking-[-0.03em] text-left ml-20 mt-8">
                Latest posts
            </p>

            <div className="w-[65%] mx-auto flex flex-col gap-16 mt-8">
                {data.allStrapiPost.nodes.map((post, index) => (
                    <PostItem key={post.name} post={post} isReverse={index % 2 === 0} />
                ))}
            </div>
        </div>
    );
};



export default LatestPosts;
