import { useUpdateUserCertificateMutation } from '../../../../features/user/put/updateUserCertificateApiSlice';
import { useToast } from '../../../../ui/use-toast';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import UserCertificateSchema from '../../../../@types/zod/UserCertificareSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { TUserCertificate } from '../../../../@types/user/TUserCertificate';
import { CertificateFormValue } from './AddUserCertificate';
import { TApiError } from '../../../../@types/TApiError';
import Loader from '../../../loader/Loader';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../../../../ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../../../ui/form';
import { Input } from '../../../../ui/input';
import { Textarea } from '../../../../ui/textarea';
import { Button } from '../../../../ui/button';
type TProps = {
    data: TUserCertificate,
    openDialog: boolean,
    setOpenDialog: (value: boolean) => void;

}

const UpdateCertificate = ({ data, openDialog, setOpenDialog }: TProps) => {
    const [updateUserCertificate] = useUpdateUserCertificateMutation();
    const { toast } = useToast();

    const getDate = (srcDate: string) => {
        if (srcDate === "") return "";
        const originalDate = new Date(srcDate);
        const day = originalDate.getDate().toString().padStart(2, '0');
        const month = (originalDate.getMonth() + 1).toString().padStart(2, '0');
        const year = originalDate.getFullYear();
        return `${year}-${month}-${day}`
    };
    const form = useForm<z.infer<typeof UserCertificateSchema>>({
        resolver: zodResolver(UserCertificateSchema),
        defaultValues: {
            title: data?.title || "",
            source: data?.source || "",
            description: data?.description || "",
            startDate: getDate(data?.startDate || ""),
            endDate: getDate(data?.endDate || ""),
        },
    });

    const UpdateCertificate = async (values: CertificateFormValue) => {
        try {
            const id = data?._id;
            await updateUserCertificate({ id, val: values }).unwrap();
            toast({
                description: "User project added successfully"
            });
            setOpenDialog(false);
        } catch (err) {
            const apiError = err as TApiError;
            toast({
                variant: "destructive",
                description: apiError.data.message,
            });
        }
    }

    if (!data) return <Loader />
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-[50%] rounded scrollbar-hide overflow-y-scroll max-h-full">
                <DialogHeader>
                    <DialogTitle>Edit Experience</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(UpdateCertificate)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Certificate Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Source</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Source"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Description </FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter Title"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="startDate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> Start Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="endDate"
                            render={({ field }) => (
                                <FormItem className="">
                                    <FormLabel> End Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="float-right">Update</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateCertificate