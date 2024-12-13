const JobApply = () => {
  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);
  };
  return (
    <div className="w-full md:w-8/12 lg:w-5/12 mx-auto">
      <form onSubmit={submitJobApplication} className="card-body">
        <h2 className="text-2xl mx-auto font-bold text-center">Apply now</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn Url</span>
          </label>
          <input
            name="linkedIn"
            type="url"
            placeholder="LinkedIn Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github Url</span>
          </label>
          <input
            name="github"
            type="url"
            placeholder="Github Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            name="resume"
            type="url"
            placeholder="Resume"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Apply now</button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
