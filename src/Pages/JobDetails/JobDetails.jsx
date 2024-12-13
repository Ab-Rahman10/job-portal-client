import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header: Company Info */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={job.company_logo}
          alt={`${job.company} logo`}
          className="w-16 h-16 object-contain rounded-full mb-4 md:mb-0"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">{job.company}</h2>
          <p className="text-md text-gray-500">{job.location}</p>
        </div>
      </div>

      {/* Job Details Section */}
      <div>
        <h3 className="text-2xl font-semibold text-center md:text-left mt-6">
          {job.title}
        </h3>
        {/* Left Column: Job Type, Category, and Salary */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-6">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold w-36">Job Type:</h3>
              <p className="text-lg text-gray-600">{job.jobType}</p>
            </div>
            <div className="flex items-center">
              <h3 className="text-xl font-semibold w-36">Category:</h3>
              <p className="text-lg text-gray-600">{job.category}</p>
            </div>
            <div className="flex items-center">
              <h3 className="text-xl font-semibold w-36">Salary Range:</h3>
              <p className="text-lg text-gray-600">
                {job.salaryRange.currency} {job.salaryRange.min} -{" "}
                {job.salaryRange.max}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <h3 className="text-xl font-semibold w-36">
              Application Deadline:
            </h3>
            <p className="text-lg text-gray-600">{job.applicationDeadline}</p>
          </div>
        </div>

        {/* Job Description Section */}
        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-semibold">Job Description:</h3>
          <p className="text-lg text-gray-600">{job.description}</p>
        </div>
      </div>

      {/* Requirements and Responsibilities Section */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Requirements</h3>
          <ul className="list-disc pl-5 text-lg text-gray-600">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Responsibilities</h3>
          <ul className="list-disc pl-5 text-lg text-gray-600">
            {job.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* HR Contact Section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">HR Contact</h3>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p className="text-lg text-gray-600">
            <strong>Name: </strong>
            {job.hr_name}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email: </strong>
            <a href={`mailto:${job.hr_email}`} className="text-blue-500">
              {job.hr_email}
            </a>
          </p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 flex justify-center">
        <Link to={`/jobApply/${job._id}`}>
          {" "}
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
