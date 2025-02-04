import {Image} from "@/features/image/types/image.types";

export interface BlogInfoForMainPagePost {
    name: string;
}

export interface Blog {
    name: string;
    image: Image;
}

export interface GetBlogsResponse {
    allStrapiBlog: {
        nodes: Blog[];
    };
}
