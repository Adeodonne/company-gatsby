import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { graphql, useStaticQuery } from "gatsby";
import OurValuesDialog from "@/components/OurValues/components/OurValuesDialog";
import { GetOurValuesResponse, OurValue } from "@/features/values/types/values.types";

const OurValues: React.FC = () => {
    const [currentValue, setCurrentValue] = useState<OurValue | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const data = useStaticQuery<GetOurValuesResponse>(graphql`
        query getOurValues {
            allStrapiOurValue {
                nodes {
                    description
                    image {
                        url
                    }
                    name
                }
            }
        }
    `);

    const handleViewMoreClick = (value: OurValue) => {
        setCurrentValue(value);
        setIsDialogOpen(true);
    };

    return (
        <div className="w-[90%] mx-auto">
            <h2 className="font-poppins text-5xl font-bold leading-[60px] tracking-[-0.03em] text-left underline-from-font decoration-none">
                Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {data.allStrapiOurValue.nodes.map((item) => {
                    const { name, description, image } = item;
                    const imageUrl = process.env.STRAPI_URL + image.url;

                    return (
                        <div
                            key={name}
                            className="rounded-lg p-[1px] bg-gradient-to-r from-[#F367A3] via-[#F0CBEB] to-[#AF8AF3]"
                        >
                            <div className="max-w-[480px] p-6 flex flex-col gap-6 rounded-lg bg-white h-full">
                                <h3 className="font-poppins text-4xl font-bold leading-[38.4px] tracking-[-0.03em] text-left">
                                    {name}
                                </h3>
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-48 object-cover"
                                />
                                <p className="font-source-sans-3 flex-grow text-base font-semibold leading-[21px] tracking-[-0.03em] text-left underline-from-font decoration-none">
                                    {description}
                                </p>
                                <div className="w-full">
                                    <Button
                                        onClick={() => handleViewMoreClick(item)}
                                        className="mt-auto"
                                    >
                                        <p className="font-poppins font-semibold leading-6">
                                            View more
                                        </p>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <OurValuesDialog
                value={currentValue}
                open={isDialogOpen}
                setOpen={setIsDialogOpen}
            />
        </div>
    );
};

export default OurValues;
