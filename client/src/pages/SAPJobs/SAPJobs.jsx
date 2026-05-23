import "./SAPJobs.css";

const jobs = [
  {
    title: "SAP FICO Consultant",
    exp: "2-5 Years",
  },

  {
    title: "SAP MM Consultant",
    exp: "1-4 Years",
  },

  {
    title: "SAP SD Consultant",
    exp: "2-6 Years",
  },

  {
    title: "SAP ABAP Developer",
    exp: "1-3 Years",
  },

  {
    title: "SAP Basis Engineer",
    exp: "2-5 Years",
  },

  {
    title: "SAP HCM Consultant",
    exp: "1-4 Years",
  },

  {
    title: "SAP SuccessFactors Consultant",
    exp: "3-6 Years",
  },

  {
    title: "SAP BW Developer",
    exp: "2-5 Years",
  },

  {
    title: "SAP PP Consultant",
    exp: "1-5 Years",
  },

  {
    title: "SAP CRM Consultant",
    exp: "2-4 Years",
  },

  {
    title: "SAP Ariba Consultant",
    exp: "2-5 Years",
  },

  {
    title: "SAP S/4HANA Consultant",
    exp: "3-8 Years",
  },
];

function SAPJobs() {
  return (
    <div className="jobs-page">
      <div className="container">
        <h1>SAP Jobs</h1>

        <div className="row">
          {jobs.map((job, index) => (
            <div className="col-lg-4" key={index}>
              <div className="job-card">
                <h3>{job.title}</h3>

                <p>
                  Experience:
                  {job.exp}
                </p>

                <button
                  onClick={() => {
                    window.location.href = `mailto:info@sansetra.com?subject=Application for ${job.title}`;
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SAPJobs;
