import React from "react";
import {format, parseISO} from "date-fns";
import {useStaticQuery, graphql} from "gatsby";
import {GetMainPagePostsResponse, MainPagePost} from "@/features/post/types/post.types";

const MainPagePosts: React.FC = () => {

    const strapiUrl = process.env.STRAPI_URL || "";
    const data = useStaticQuery<GetMainPagePostsResponse>(graphql`
    query getMainPagePosts {
      allStrapiPost(filter: { onMainPage: { eq: true } }) {
        nodes {
          name
          subname
          users_permissions_user {
            username
          }
          publishedDate
          blog {
            name
          }
          image {
            url
          }
        }
      }
    }
  `);

    return (
        <div>
            {data.allStrapiPost.nodes.map((post: MainPagePost, index) => (
                <div
                    key={index}
                    className="w-[80%] h-[100%] rounded-[24px] mx-auto flex items-center justify-between gap-[6%] bg-[#FFFFFF66] p-[2%]"
                >
                    <div className="flex flex-col space-y-2">
                        <p className="font-poppins text-[16px] font-medium leading-[19.2px] tracking-[-0.03em] text-left underline-offset-[from-font] decoration-skip-ink-none">
                            {post.blog.name}
                        </p>

                        <p className="font-poppins text-5xl font-bold leading-[60px] tracking[-0.03em] text-left underline decoration-none">
                            {post.name}
                        </p>

                        <p className="font-source-sans-3 text-base font-normal leading-[30.8px] tracking[-0.03em] text-left underline decoration-none">
                            {post.subname}
                        </p>

                        <div
                            className="font-poppins text-base font-normal leading-[19.2px] flex items-center space-x-2">
                            <p>{format(parseISO(post.publishedDate), "dd.MM, yyyy · h:mm a")} · </p>
                            <p className="underline">{post.users_permissions_user.username}</p>
                        </div>
                    </div>

                    <div className="h-[90%] w-[100%]">
                        <img
                            src={`${strapiUrl}${post.image.url}`}
                            alt={`${post.name} image`}
                            className="object-cover w-full h-full rounded-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default React.memo(MainPagePosts);
