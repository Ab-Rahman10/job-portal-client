import Swal from "sweetalert2";
import useAuth from "../../Hooks/Context";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJobPost = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myPostedJobs");
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleAddJobPost}
        action="/submit-job"
        method="POST"
        className="max-w-3xl mx-auto bg-base-200 p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">Post a new job</h2>
        {/* Job Title */}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Job Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Software Engineer"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Location */}
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Halishohor, Chittagong"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Job Type */}
        <label
          htmlFor="jobType"
          className="block text-sm font-medium text-gray-700"
        >
          Job Type:
        </label>
        <select
          id="jobType"
          name="jobType"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Hybrid">Full-time</option>
          <option value="Onsite">Part-time</option>
          <option value="Remote">Remote</option>
        </select>

        {/* Job Field (Category) */}
        <label
          htmlFor="jobField"
          className="block text-sm font-medium text-gray-700"
        >
          Job Field:
        </label>
        <select
          id="jobField"
          name="category"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="Engineering">Engineering</option>
          <option value="Marketing">Marketing</option>
          <option value="Finance">Finance</option>
        </select>

        {/* Application Deadline */}
        <label
          htmlFor="applicationDeadline"
          className="block text-sm font-medium text-gray-700"
        >
          Application Deadline:
        </label>
        <input
          type="date"
          id="applicationDeadline"
          name="applicationDeadline"
          defaultValue="2024-12-31"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Salary Range */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="salaryMin"
              className="block text-sm font-medium text-gray-700"
            >
              Minimum Salary:
            </label>
            <input
              type="number"
              id="salaryMin"
              name="min"
              placeholder="40000"
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="salaryMax"
              className="block text-sm font-medium text-gray-700"
            >
              Maximum Salary:
            </label>
            <input
              type="number"
              id="salaryMax"
              name="max"
              placeholder="60000"
              required
              className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <label
          htmlFor="currency"
          className="block text-sm font-medium text-gray-700"
        >
          Currency:
        </label>
        <select
          id="currency"
          name="currency"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="bdt">BDT</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        {/* Description */}
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Job Description:
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          placeholder="We are seeking a skilled Software Engineer..."
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        {/* Company Name */}
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company:
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Favorite IT"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Requirements */}
        <label
          htmlFor="requirements"
          className="block text-sm font-medium text-gray-700"
        >
          Requirements:
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows="4"
          placeholder="Put each requirement in new line"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        {/* Responsibilities */}
        <label
          htmlFor="responsibilities"
          className="block text-sm font-medium text-gray-700"
        >
          Responsibilities:
        </label>
        <textarea
          id="responsibilities"
          name="responsibilities"
          rows="4"
          placeholder="Write each responsibilities in new line"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        {/* HR Name */}
        <label
          htmlFor="hrName"
          className="block text-sm font-medium text-gray-700"
        >
          HR Name:
        </label>
        <input
          type="text"
          id="hrName"
          name="hr_name"
          placeholder="Hr Name"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* HR Email */}
        <label
          htmlFor="hrEmail"
          className="block text-sm font-medium text-gray-700"
        >
          HR Email:
        </label>
        <input
          defaultValue={user?.email}
          type="email"
          id="hrEmail"
          name="hr_email"
          placeholder="Hr Email"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Company Logo */}
        <label
          htmlFor="companyLogo"
          className="block text-sm font-medium text-gray-700"
        >
          Company Logo URL:
        </label>
        <input
          type="url"
          id="companyLogo"
          name="company_logo"
          placeholder="Company logo"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />

        {/* Job Status */}
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status:
        </label>
        <select
          id="status"
          name="status"
          required
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
