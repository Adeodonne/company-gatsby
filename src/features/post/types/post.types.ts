import {BlogInfoForMainPagePost} from "@/features/blog/types/blogs.types";
import {UserForMainPagePost} from "@/features/user/types/user.types";
import {Image} from "@/features/image/types/image.types";

export interface LatestPost {
    name: string;
    subname: string;
    image: Image;
}

export interface GetLatestPostsResponse {
    allStrapiPost: {
        nodes: LatestPost[];
    };
}

export interface MainPagePost {
    name: string;
    onMainPage: boolean;
    subname: string;
    users_permissions_user: UserForMainPagePost;
    publishedDate: string;
    blog: BlogInfoForMainPagePost;
    image: Image;
}

export interface GetMainPagePostsResponse {
    allStrapiPost: {
        nodes: MainPagePost[];
    };
}
