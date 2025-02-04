import React from "react";
import clsx from "clsx";
import {LatestPost} from "@/features/post/types/post.types";

const PostItem: React.FC = ({post, isReverse}: { post: LatestPost, isReverse: boolean }) => {
    const strapiUrl = process.env.STRAPI_URL || "";
    return (
        <div className={clsx("flex gap-16", isReverse && "flex-row-reverse")}>
            <div className="flex-1">
                <p className="font-poppins text-2xl font-extrabold leading-9 tracking-[-0.03em] text-left">
                    {post.name}
                </p>
                <p className="font-source-sans-3 text-base font-normal leading-8 tracking-[-0.03em] text-left">
                    {post.subname}
                </p>
            </div>

            {post.image?.url && (
                <img
                    src={`${strapiUrl}${post.image.url}`}
                    alt={post.name}
                    className="w-[45%] gap-0 rounded-lg"
                />
            )}
        </div>
    )
};

export default PostItem;