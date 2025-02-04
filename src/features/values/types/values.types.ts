import {Image} from "@/features/image/types/image.types";

export interface OurValue {
    description: string;
    image: Image;
    name: string;
}

export interface GetOurValuesResponse {
    allStrapiOurValue: {
        nodes: OurValue[];
    };
}
