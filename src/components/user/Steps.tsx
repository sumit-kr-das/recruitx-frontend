import { Briefcase, FileMinus, SearchCheck, UserCheck } from "lucide-react";

const stepsData = [
  {
    styles: "text-red-400 bg-red-100 w-14 h-14 rounded-full p-4",
    icon: <UserCheck />,
    title: "Create an Account",
    des: "Signup for the job applicant profile,mention your qualifications, past experiences, and expertise, and scope your interests. Voila! You're all set to find your dream jobs.",
  },
  {
    styles: "text-violet-400 bg-violet-100 w-14 h-14 rounded-full p-4",
    icon: <SearchCheck />,
    title: "Search Job",
    des: "Once you set your job hunting parameters, you'll find many openings related to your career interest on the home page and even filter out some of the best job openings.",
  },
  {
    styles: "text-emerald-400 bg-emerald-100 w-14 h-14 rounded-full p-4",
    icon: <FileMinus />,
    title: "Create Your Profile",
    des: "From numerous job openings, shortlist the right-match vacancy to your profile and apply right after by uploading your CV/ Resume and answering a couple of questions, if any.",
  },
  {
    styles: "text-orange-400 bg-orange-100 w-14 h-14 rounded-full p-4",
    icon: <Briefcase />,
    title: "Get Job",
    des: "After applying, wait for some time, schedule an interview, and if everything goes right, then get hired more quickly than traditional hiring methods.",
  },
];

const Steps = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      {stepsData.map((item, index) => (
        <div
          key={index}
          className={`bg-white border rounded-lg shadow p-6 flex-1 h-80 `}
        >
          <item.icon.type className={item.styles} />
          <h2 className="my-4 mb-2 text-xl font-semibold">{item.title}</h2>
          <p>{item.des}</p>
        </div>
      ))}
    </div>
  );
};

export default Steps;
