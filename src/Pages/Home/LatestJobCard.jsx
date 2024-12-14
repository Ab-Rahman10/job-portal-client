import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-[#F8FAFF] shadow-xl">
        <div className="flex items-center gap-3 ml-3">
          <figure>
            <img className="w-16" src={company_logo} alt="Shoes" />
          </figure>
          <div className="">
            <h4 className="font-semibold text-2xl mb-1.5">{company}</h4>
            <p className="text-sm flex items-center gap-1">
              <FaMapMarkerAlt />
              {location}
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title} <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="flex-grow">{description}</p>
          <ul className="flex flex-wrap gap-2">
            {requirements.map((skill, idx) => (
              <li
                key={idx}
                className="border rounded-md py-1 px-2 text-blue-500 hover:text-purple-600"
              >
                {skill}
              </li>
            ))}
          </ul>
          <div className="card-actions justify-end items-center mt-5">
            <p className="flex items-center">
              Salary:
              <FaDollarSign className="ml-1"></FaDollarSign>
              {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </p>
            <Link to={`/jobs/${_id}`}>
              <button className="btn btn-primary">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
