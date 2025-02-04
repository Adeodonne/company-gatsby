import React from "react";
import {CarouselItem} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

const BlogCard: React.FC<{ blog: { name: string; image: { url: string } } }> = ({ blog }) => {
    const strapiUrl = process.env.STRAPI_URL || "";

    return (
        <CarouselItem className="p-6 rounded-tl-lg">
            <Card className="w-3/5 mx-auto">
                <CardContent className="flex h-full items-center justify-center p-0">
                    <CardContent className="flex flex-col h-full items-start justify-center p-0 gap-6">
                        <p className="font-roboto text-2xl font-bold text-left pt-6 pl-4">{blog.name}</p>
                        <img src={`${strapiUrl}${blog.image.url}`} className="w-11/12 mx-auto" alt={blog.name} />
                        <p className="font-roboto text-base font-normal text-left underline pl-4 pb-6">
                            See more
                        </p>
                    </CardContent>
                </CardContent>
            </Card>
        </CarouselItem>
    );
};

export default BlogCard;