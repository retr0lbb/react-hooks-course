import React from "react";
import {twMerge} from "tailwind-merge"

interface PageContentProps extends React.ComponentProps<"input">{
    children?: React.ReactNode;
}

export const PageContent: React.FC<PageContentProps> = ({ children, ...rest }) => {
    return (
        <div 
            {...rest}
            className={twMerge("w-full h-full flex flex-col items-center", rest.className)}
            >
            {children}
        </div>
    );
};
