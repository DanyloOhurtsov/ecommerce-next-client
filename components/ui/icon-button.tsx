import { MouseEventHandler, ReactElement } from "react";
import { Button } from "./button";

interface IconButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    icon: ReactElement;
    className?: string;
}

const IconButton = ({ className, icon, onClick }: IconButtonProps) => {
    return (
        <Button variant={'expand'} size={'icon'} onClick={onClick} className={className}>
            {icon}
        </Button>
    );
};

export default IconButton;
