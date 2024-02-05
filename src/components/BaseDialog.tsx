import React, { ReactNode, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { cn } from '../lib/utils.ts';
interface BaseDialogProps {
    open: boolean,
    setOpen: Function,
    trigger: ReactNode; // ReactNode is used for any type of React content
    content: ReactNode;
    contentClassName?: string,
    title: string
}

const BaseDialog: React.FC<BaseDialogProps> = ({ open, setOpen, trigger, content, contentClassName, title }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(open)
    }, [open]);
    return (
        <>
            <Dialog open={show} onOpenChange={setShow}>
                <DialogTrigger>
                    {trigger}
                </DialogTrigger>
                <DialogContent className={cn("sm:max-w-[800px] rounded scrollbar-hide", contentClassName)}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                    </DialogHeader>
                    {content}
                </DialogContent>
            </Dialog>
        </>
    )
}

export default BaseDialog