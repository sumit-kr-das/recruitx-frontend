import Container from "../../layout/Container"
import TitleBar from "../../components/recruit/titleBar/TitleBar"
import DefaultPic from "../../assets/default-company-logo.png"
import { Mail, Phone } from "lucide-react"
import { useSearchParams } from "react-router-dom"
import { useViewCvQuery } from "../../features/company/get/viewCvApiSlice"
import { convertDate } from "./MyJobs"
import { Card } from "../../ui/card"

type Education = {
    userId: string,
    degree: string,
    college: string,
    course: string,
    courseType: string,
    admissionYear: number,
    passYear: number,
    marks: number,
    createdAt: Date,
    updatedAt?: Date
}

type Project = {
    userId: string,
    name: string,
    description: string,
    skills: string[],
    startDate: string,
    endDate?: string,
    associate: string
}

type Exprience = {
    userId: string,
    skills: string[],
    companyName: string,
    designation: string,
    experience: number,
    type: string,
    startDate: string,
    endDate: string,
    jobProfile: string,
    createdAt: string,
    updatedAt?: string
}

type Certificate = {
    userId: string,
    title: string,
    source: string,
    description: string,
    startDate: string,
    endDate?: string
}

type Carrer = {
    userId: string,
    industry: string,
    jobType?: string,
    role: string,
    jobRole: string,
    employmentType: string,
    skills: string[],
    expectedSalary: number,
    location?: string[],
    __v: number
}

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
                <Card className="relative mt-4 sm:flex items-center justify-between bg-white p-5 rounded-lg sm:gap-5">
                    <div className="w-full sm:w-[15%] sm:flex items-center flex-col">
                        <img
                            src={data?.info?.photo ? `${data?.info?.photo}` : DefaultPic}
                            width={100}
                            alt="user_default"
                            className="width-[120px] h-[120px] rounded-full object-cover border"
                        />
                    </div>
                    <div className="w-[80%] mt-3 sm:mt-0 sm:w-[85%]">
                        <div className="border-b sm:flex sm:items-end justify-between mb-4 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold capitalize">{data?.name}</h2>
                                <p className="text-lg text-slate-600 capitalize">
                                    {data?.workStatus}
                                </p>
                            </div>
                        </div>
                        <div className="sm:flex items-center gap-5">
                            <div className="flex items-center gap-2">
                                <Phone className="w-[50px] h-[50px] bg-slate-200 p-4 rounded-md hidden sm:block" />
                                <div>
                                    <h3 className="text-slate-500 text-sm">Call</h3>
                                    <p className="text-sm">{data?.phoneNo}</p>
                                </div>
                            </div>
                            <div className="flex mt-2 sm:mt-0 items-center gap-2">
                                <Mail className="w-[50px] h-[50px] bg-slate-200 p-4 hidden sm:block rounded-md" />
                                <div>
                                    <h3 className="text-slate-500 text-sm">Email</h3>
                                    <p className="text-sm">{data?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="relative">
                    <div className="mx-auto mt-5">
                        <Card className=" relative mt-4 items-center bg-white p-5 rounded-lg sm:gap-5">
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mb-2">Other Information</h2>
                                    <p className="text-gray-700">{data?.info?.objective}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mb-2">Summary</h2>
                                    <p className="text-gray-700">{data?.info?.bio}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-4 mb-2">Skills</h2>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {
                                            data && data?.info?.skills.map((item: string, index: number) => (
                                                <>
                                                    <li key={index}>{item}</li>
                                                </>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-2">
                                        Highest qualification
                                    </h2>
                                    <p className="text-gray-700">{data?.info?.maxQualification}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-2">Address</h2>
                                    <p className="text-gray-700">{data?.info?.address}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-2">Gender</h2>
                                    <p className="text-gray-700 capitalize">{data?.info?.gender}</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-2">Age</h2>
                                    <p className="text-gray-700 capitalize">{data?.info?.age}Years</p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-2">Date of birth</h2>
                                    <p className="text-gray-700 capitalize">
                                        {convertDate(data?.info?.dateOfBirth)}
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <h2 className="text-xl font-semibold mt-4 mb-2">Languages</h2>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {
                                            data && data?.info?.language.map((item: string, index: number) => (
                                                <li key={index}>{item}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="mx-auto mt-5">
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
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
                        </Card>
                    </div>
                </div>
                {/* Education */}
                <Card className="relative mt-4 justify-between bg-white p-5 rounded-lg sm:gap-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Education</h2>
                    </div>
                    {
                        data && data?.education?.map((edu: Education, index: number) => (
                            <div className="mx-auto mt-5" key={index}>
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
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
                                </div>
                            </div>

                        ))
                    }
                </Card>
                {/* Projects */}
                <Card className="relative mt-4 justify-between bg-white p-5 rounded-lg sm:gap-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Projects</h2>
                    </div>
                    {
                        data && data?.project?.map((pro: Project, index: number) => (
                            <div className="mx-auto mt-5" key={index}>
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
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
                                            <h3 className="mt-2">
                                                {convertDate(pro?.startDate)} - {pro?.endDate ? (pro.endDate) : (<>present</>)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Card>
                {/* Exprience */}
                <Card className="relative mt-4 justify-between bg-white p-5 rounded-lg sm:gap-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Exprience</h2>
                    </div>
                    {
                        data && data?.exprience?.map((exp: Exprience, index: number) => (
                            <div className="mx-auto mt-5" key={index}>
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
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
                                                    exp?.skills?.map((item: string, index: number) => (
                                                        <>
                                                            <li key={index}>{item}</li>
                                                        </>
                                                    ))
                                                }
                                            </div>
                                            <h3>
                                                {convertDate(exp?.startDate)} - {exp?.endDate ? (convertDate(exp.endDate)) : (<>present</>)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Card>
                {/* certificate */}
                <Card className="relative mt-4 justify-between bg-white p-5 rounded-lg sm:gap-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="font-bold text-lg">Certificate</h2>
                    </div>
                    {
                        data && data?.certificate?.map((cer: Certificate, index: number) => (
                            <div className="mx-auto mt-5" key={index}>
                                <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h2 className="font-bold text-lg"> {cer?.title}</h2>
                                            </div>
                                            <h3 className="font-semibold">{cer?.source}</h3>
                                            <h3 className="font-semibold">{cer?.description}</h3>
                                            <h3>
                                                {convertDate(cer?.startDate)} - {cer?.endDate ? (convertDate(cer.endDate)) : (<>present</>)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </Card>
                <div className="relative">
                    <div className="mx-auto mt-5">
                        {
                            data && data?.carrer?.map((carrer: Carrer, index: number) => (
                                <Card className="relative mt-4 justify-between bg-white p-5 rounded-lg sm:gap-5" key={index}>
                                    <h2 className="text-xl font-semibold mb-2">User Career Profile</h2>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mb-2">Industry</h2>
                                            <p className="text-gray-700">{carrer?.industry}</p>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mt-2">
                                                Job Role
                                            </h2>
                                            <p className="text-gray-700">{carrer?.role}</p>

                                        </div>
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mt-2">Job Type</h2>
                                            <p className="text-gray-700">{carrer?.jobType}</p>

                                        </div>
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mt-2">Employement Type</h2>
                                            <p className="text-gray-700 capitalize">{carrer?.employmentType}</p>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mt-2">Salary Expectation</h2>
                                            <p className="text-gray-700 capitalize">{carrer?.expectedSalary
                                            } LPA</p>
                                        </div>
                                    </div>
                                    <div className="mx-auto mt-5">
                                        <div className="p-5 bg-[#FAFAFA] rounded-lg border mt-4">
                                            <h2 className="text-xl font-semibold mt-2">Location</h2>
                                            {
                                                carrer?.location?.map((l: string, index: number) => (
                                                    <li key={index}>{l}</li>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }

                    </div>
                </div>
            </Container>

        </>
    )
}

export default ViewCvPage