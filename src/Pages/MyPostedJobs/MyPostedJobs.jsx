import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Context";
import { Link } from "react-router-dom";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [myJobs, setMyJobs] = useState([]);
  console.log(myJobs);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyJobs(data));
  }, [user.email]);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-7 mb-4">
        My Posted Jobs: {myJobs.length}
      </h2>
      <div className="overflow-x-auto min-h-[60vh]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Deadline</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myJobs.map((job, idx) => (
              <tr key={job._id}>
                <th>{idx + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>
                  <Link to={`/viewApplication/${job._id}`}>
                    <button className="btn btn-link">View Application</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
