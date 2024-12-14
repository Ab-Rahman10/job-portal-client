import { useEffect, useState } from "react";
import useAuth from "../../Hooks/Context";

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
      <h2 className="text-3xl font-bold text-center">
        My Posted Jobs: {myJobs.length}
      </h2>
    </div>
  );
};

export default MyPostedJobs;
