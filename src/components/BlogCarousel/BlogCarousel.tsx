import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import BlogCard from "@/components/BlogCarousel/components/BlogCard";
import {GetBlogsResponse} from "@/features/blog/types/blogs.types";
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
    NavigateToSlideButton,
} from "@/components/ui/carousel";

const BlogCarousel: React.FC = () => {
    const data: GetBlogsResponse = useStaticQuery(graphql`
        query getBlogs {
            allStrapiBlog(limit: 5, sort: { publishedAt: DESC }) {
                nodes {
                    name
                    image {
                        url
                    }
                }
            }
        }
    `);

    return (
        <div className="flex justify-center items-center min-h-screen mt-24">
            <Carousel className="w-full">
                <CarouselContent>
                    {data.allStrapiBlog.nodes.map((blog, index) => (
                        <BlogCard key={index} blog={blog}/>
                    ))}
                </CarouselContent>

                <div className="relative flex items-center justify-center">
                    <CarouselPrevious className="absolute left-10 z-10"/>
                    <div className="flex gap-2">
                        {data.allStrapiBlog.nodes.map((_, index) => (
                            <NavigateToSlideButton index={index} key={index}/>
                        ))}
                    </div>
                    <CarouselNext className="absolute right-10 z-10"/>
                </div>
            </Carousel>
        </div>
    );
};

export default BlogCarousel;
