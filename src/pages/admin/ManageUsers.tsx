import TitleBar from "../../components/recruit/titleBar/TitleBar";
import Container from "../../layout/Container";
import { CircleSlash2 } from "lucide-react";
import { TApiError } from "../../@types/TApiError";
import { useNavigate } from "react-router-dom";
import { useViewAllUserQuery } from "../../features/admin/get/viewAllUserApiSlice";
import Loader from "../../components/loader/Loader";
import DefaultUser from "../../assets/user-default-profile.png";
import { useRestrictUserMutation } from "../../features/admin/put/RestrictUserApiSlice";
import { useToast } from "../../ui/use-toast";
import { TUsers } from "../../@types/admin/TUsers";

const ManageUsers = () => {
	const { data, isLoading, isSuccess } = useViewAllUserQuery();
	const { toast } = useToast();
	const navigate = useNavigate();
	const [restrictUser] = useRestrictUserMutation();

	const handelRestrictUser = async (userId: string) => {
		try {
			await restrictUser(userId).unwrap();
			toast({
				description: "User restricted successfully"
			})
			navigate("/dashboard/admin/restricted_users");
		} catch (error) {
			const apiError = error as TApiError;
			toast({
				variant: "destructive",
				description: apiError?.data?.message
			})
		}
	}

	if (!data && isLoading) return <Loader />;
	return (
		<>
			{
				isSuccess && (<>
					<Container>
						<TitleBar
							title="Users"
							path="Admin / Dashboard / Users"
						/>
						<div>
							<div className="flex justify-between gap-x-5">

								<div className="flex items-center gap-x-5">
									<button>Total: {data?.length} Users</button>
								</div>
							</div>
							<div>
								{data?.map((user: TUsers, index: number) => (
									<div
										key={index}
										className="md:flex items-center justify-between p-4 mt-5 rounded-lg border bg-white gap-2"
									>
										<div className="md:flex items-center gap-5">
											<img
												className="w-[80px] h-[80px] rounded-full m-auto"
												src={DefaultUser}
												alt="user"
											/>

											<div>
												<div>
													<h2 className="font-bold text-slate-600 text-lg text-center md:text-left">
														{user?.name}
													</h2>
												</div>
												<div className="md:flex items-center">
													<p className="mt-2 text-center md:text-left mr-2 text-sm text-slate-600">
														{user?.email}
													</p>
													<p className="mt-2 text-center md:text-left text-sm text-slate-600">
														{user?.phoneNo}
													</p>
												</div>
												<div className="md:flex items-center">
													<p className="mt-2 text-center md:text-left text-sm text-slate-600">
														{user?.workStatus}
													</p>

												</div>
											</div>
										</div>
										<div className="flex items-center gap-x-5 justify-center mt-2 md:justify-right md:mt-0">
											<span
												onClick={() => handelRestrictUser(user?._id)}
												className="bg-red-500 px-3 py-2 rounded-lg cursor-pointer"
											>
												<CircleSlash2 className="w-[20px] bg-red-500" />
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</Container>
				</>)
			}
		</>
	)
}

export default ManageUsers