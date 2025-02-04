import React from "react";
import {Dialog, DialogContent} from "@/components/ui/dialog";

const OurValuesDialog: React.FC = ({value, open, setOpen}) => {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="w-[50%] bg-white p-6 rounded-lg shadow-lg">
                <p className="font-poppins text-4xl font-bold leading-9 text-left mt-6">{value?.name}</p>
                <img src={process.env.STRAPI_URL + value?.image.url} alt="Value image" className="w-[100%]"/>
                <p className="font-source-sans text-sm font-semibold leading-5 text-left">{value?.description}</p>
            </DialogContent>
        </Dialog>
    )
}

export default OurValuesDialog;