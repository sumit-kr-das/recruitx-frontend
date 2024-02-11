import Container from "../../layout/Container"
import TitleBar from "../../components/recruit/titleBar/TitleBar"
import DefaultPic from "../../assets/default-company-logo.png"
import { Mail, Phone } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useViewCvQuery } from "../../features/company/get/viewCvApiSlice"
import { convertDate } from "./MyJobs"
import countDays from "../../customFunctions/countDays"

const ViewCvPage = () => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const { data } = useViewCvQuery(userId);

    return (
        <>
            <Container>
                <TitleBar
                    title="Candidate Cv"
                    path="Employer / Dashboard / Cv"
                />
                <div className="relative flex items-center justify-between bg-white p-5 rounded-lg gap-5">
                    <div className="w-[20%] flex items-center flex-col">
                        <img
                            src={data?.info?.photo ? `http://localhost:8000/${data?.info?.photo}` : DefaultPic}
                            // width={180}
                            alt="user_default"
                            className="width-[180px] h-[180px] rounded-full object-cover border"
                        />
                    </div>
                    <div className="w-[80%]">
                        <div className="border-b flex items-end justify-between mb-4 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold capitalize">{data?.name}</h2>
                                <p className="text-lg text-slate-600 capitalize">
                                    {data?.workStatus}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
                                <div>
                                    <h3 className="text-slate-500 text-sm">Call</h3>
                                    <p className="text-sm">{data?.phoneNo}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md" />
                                <div>
                                    <h3 className="text-slate-500 text-sm">Email</h3>
                                    <p className="text-sm">{data?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="mx-auto mt-5">
                        <div className="bg-white p-5 rounded-lg shadow-lg">
                            <h1 className="text-3xl font-semibold">Other Information</h1>
                            <p className="text-gray-600">{data?.info?.objective}</p>

                            <hr className="my-4" />

                            <h2 className="text-xl font-semibold mb-2">Summary</h2>
                            <p className="text-gray-700">{data?.info?.bio}</p>

                            <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {
                                    data && data?.info?.skills.map((item, index) => (
                                        <>
                                            <li key={index}>{item}</li>
                                        </>
                                    ))
                                }

                            </ul>

                            <h2 className="text-xl font-semibold mt-2">
                                Highest qualification
                            </h2>
                            <p className="text-gray-700">{data?.info?.maxQualification}</p>

                            <h2 className="text-xl font-semibold mt-2">Address</h2>
                            <p className="text-gray-700">{data?.info?.address}</p>

                            <h2 className="text-xl font-semibold mt-2">Gender</h2>
                            <p className="text-gray-700 capitalize">{data?.info?.gender}</p>

                            <h2 className="text-xl font-semibold mt-2">Age</h2>
                            <p className="text-gray-700 capitalize">{data?.info?.age}Years</p>

                            <h2 className="text-xl font-semibold mt-2">Date of birth</h2>
                            <p className="text-gray-700 capitalize">
                                {convertDate(data?.info?.dateOfBirth)}
                            </p>

                            <h2 className="text-xl font-semibold mt-4 mb-2">Languages</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                {
                                    data && data?.info?.language.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                                {/* <li>Bengali</li>
                                <li>English</li> */}
                            </ul>

                            <h2 className="text-xl font-semibold mt-4 mb-2">Social links</h2>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>
                                    LinkedIn:{" "}
                                    <a
                                        href={`https://www.linkedin.com/in/${data?.info?.linkedIn}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        linkedin.com/in/{data?.info?.linkedIn}
                                    </a>
                                </li>
                                <li>
                                    Github:{" "}
                                    <a
                                        href={`https://github.com/${data?.info?.github}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        github.com/${data?.info?.github}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Education</h2>
                    </div>
                    {
                        data && data?.education?.map((edu, index) => (
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-bold text-lg">{edu?.course}</h2>
                                    </div>
                                    <h3 className="font-semibold">{edu?.college}</h3>
                                    <h3 className="font-semibold">Marks: {edu?.marks}</h3>
                                    <h3 className="font-semibold">Type: {edu?.courseType}</h3>
                                    <h3>
                                        {edu?.admissionYear} | {edu?.passYear}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Projects */}
                <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Projects</h2>
                    </div>
                    {
                        data && data?.project?.map((pro, index) => (
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-bold text-lg">{pro?.name}</h2>
                                    </div>
                                    <p>{pro?.description}</p>
                                    {
                                        pro?.skills?.map((item, index) => (
                                            <>
                                                <li key={index}>{item}</li>
                                            </>
                                        ))
                                    }
                                    {/* <li>Php</li>
                                    <li>Html</li> */}
                                    <h3 className="mt-2">
                                        {convertDate(pro?.startDate)} - {pro?.endDate ? (pro.endDate) : (<>present</>)}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Exprience */}
                <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Exprience</h2>
                    </div>
                    {
                        data && data?.exprience?.map((exp, index) => (
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-bold text-lg"> {exp?.designation
                                        } At {exp?.companyName}</h2>
                                    </div>
                                    <h3 className="font-semibold">{exp?.type}</h3>
                                    <div>
                                        <p>{exp?.jobProfile}</p>
                                    </div>
                                    <div>
                                        {
                                            exp?.skills?.map((item, index) => {
                                                <>
                                                    <li key={index}>{item}</li>
                                                </>
                                            })
                                        }
                                    </div>
                                    <h3>
                                        {convertDate(exp?.startDate)} - {exp?.endDate ? (convertDate(exp.endDate)) : (<>present</>)}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* certificate */}
                <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Certificate</h2>
                    </div>
                    {
                        data && data?.certificate?.map((cer, index) => (
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-bold text-lg"> {cer?.name}</h2>
                                    </div>
                                    <h3 className="font-semibold">{cer?.source}</h3>
                                    <h3 className="font-semibold">{cer?.description}</h3>
                                    <h3>
                                        {convertDate(cer?.startDate)} - {cer?.endDate ? (convertDate(cer.endDate)) : (<>present</>)}
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="font-bold text-lg"> Diploma in Web Dev</h2>
                            </div>
                            <h3 className="font-semibold">Udemy</h3>
                            <h3 className="font-semibold">This is a good course.</h3>
                            <h3>
                                30th June, 2022 - 30th June, 2023
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="mx-auto mt-5">
                        {
                            data && data?.carrer?.map((carrer, index) => (
                                <div className="bg-white p-5 rounded-lg shadow-lg">
                                    <h1 className="text-3xl font-semibold">User Carrer Profile</h1>
                                    <h2 className="text-xl font-semibold mb-2">Industry</h2>
                                    <p className="text-gray-700">{carrer?.industry}</p>

                                    <h2 className="text-xl font-semibold mt-4 mb-2">Role</h2>
                                    <p className="text-gray-700">{carrer?.role}</p>

                                    <h2 className="text-xl font-semibold mt-2">
                                        Job Role
                                    </h2>
                                    <p className="text-gray-700">{carrer?.role}</p>

                                    <h2 className="text-xl font-semibold mt-2">Job Type</h2>
                                    <p className="text-gray-700">{carrer?.type}</p>

                                    <h2 className="text-xl font-semibold mt-2">Employement Type</h2>
                                    <p className="text-gray-700 capitalize">{carrer?.employmentType}</p>

                                    <h2 className="text-xl font-semibold mt-2">Salary Expectation</h2>
                                    <p className="text-gray-700 capitalize">{carrer?.expectedSalary
                                    } LPA</p>


                                    <h2 className="text-xl font-semibold mt-2">Location</h2>
                                    {
                                        carrer?.location?.map((l, index) => (
                                            <li key={index}>{l}</li>
                                        ))
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>
            </Container>

        </>
    )
}

export default ViewCvPage