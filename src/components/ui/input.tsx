import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
    HTMLInputElement,
    React.ComponentProps<"input"> & { label?: string }
>(({ className, type, label, ...props }, ref) => {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium text-foreground">{label}</label>}
            <input
                type={type}
                className={cn(
                    "flex w-full border-b border-black px-2 py-2 text-base outline-none placeholder:text-muted-foreground focus:border-black focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        </div>
    );
});

Input.displayName = "Input";

export { Input };
