import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { cn } from '../lib/utils.ts';
interface BaseDialogProps {
    trigger: ReactNode; // ReactNode is used for any type of React content
    content: ReactNode;
    contentClassName?: string,
    title: string
}

const BaseDialog: React.FC<BaseDialogProps> = ({ trigger, content, contentClassName, title }) => {
    return (
        <>
            <Dialog>
                <DialogTrigger>
                    {trigger}
                </DialogTrigger>
                <DialogContent className={cn("sm:max-w-[800px] rounded", contentClassName)}>
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