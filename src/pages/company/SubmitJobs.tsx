import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { TINITIAL_JOB_DATA } from "../../@types/recruit/jobPost";
import { INITIAL_JOB_DATA } from "../../@types/recruit/submitJob";
import BasicInfo from "../../components/recruit/submitJob/BasicInfo";
import TechnicalInfo from "../../components/recruit/submitJob/TechnicalInfo";
import TitleBar from "../../components/recruit/titleBar/TitleBar";
import useMultistepForm from "../../customHooks/useMultistepForm";
import { usePostJobMutation } from "../../features/company/post/setJobApiSlice";
import Container from "../../layout/Container";

const SubmitJob = () => {
  const [data, setData] = useState(INITIAL_JOB_DATA);
  const updateFields = (fields: Partial<TINITIAL_JOB_DATA>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    setCurrentStepIndex,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <BasicInfo key="basic" {...data} updateFields={updateFields} />,
    <TechnicalInfo key="technical" {...data} updateFields={updateFields} />,
  ]);

  const [postJob, { isLoading }] = usePostJobMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    }
    const { title, category, description, tags, ...other } = data;
    const newJobData = {
      title,
      category,
      description,
      tags,
      info: { ...other },
    };

    try {
      await postJob(newJobData).unwrap();
      setData(INITIAL_JOB_DATA);
      toast.success("Job posted successfully");
      navigate("/recruit/my_jobs");
    } catch (err: any) {
      toast.error(err.data.message);
      console.log("Error on company register", err);
    }
  };
  return (
    <Container>
      <TitleBar title="Post Jobs" path="Employer / Dashboard / Post Jobs" />
      <section className="w-full flex gap-10">
        <div className="flex flex-col items-start gap-y-4">
          <button
            onClick={() => setCurrentStepIndex(0)}
            className={` px-4 py-2 rounded-md text-white bg-cyan-400 ${
              currentStepIndex == 0 && "bg-cyan-500"
            }`}
          >
            Basic Information
          </button>
          <button
            onClick={() => setCurrentStepIndex(1)}
            className={` px-4 py-2 rounded-md text-white bg-cyan-400 ${
              currentStepIndex == 1 && "bg-cyan-500 "
            }`}
          >
            Technical Information
          </button>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">{step}</div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              {!isFirstStep && (
                <button
                  onClick={back}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default SubmitJob;
