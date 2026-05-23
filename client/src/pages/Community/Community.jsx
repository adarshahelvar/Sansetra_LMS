import "./Community.css";

import { useState } from "react";

function Community() {
  const [showGroup, setShowGroup] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    skill: "",
    experience: "",
  });

  const submit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:info@sansetra.com
?subject=Community Join Request
&body=

Name:${data.name}

Email:${data.email}

Phone:${data.phone}

Skill:${data.skill}

Experience:${data.experience}

`;

    setShowGroup(true);
  };

  return (
    <div className="community-page">
      <div className="container">
        <h1>Join Community</h1>

        <form onSubmit={submit}>
          <input
            placeholder="Name"
            onChange={(e) =>
              setData({
                ...data,

                name: e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            onChange={(e) =>
              setData({
                ...data,

                email: e.target.value,
              })
            }
          />

          <input
            placeholder="Phone"
            onChange={(e) =>
              setData({
                ...data,

                phone: e.target.value,
              })
            }
          />

          <input
            placeholder="Current Skill"
            onChange={(e) =>
              setData({
                ...data,

                skill: e.target.value,
              })
            }
          />

          <input
            placeholder="Experience"
            onChange={(e) =>
              setData({
                ...data,

                experience: e.target.value,
              })
            }
          />

          <button>Join Community</button>
        </form>

        {showGroup && (
          <div className="whatsapp-card">
            <h3>Community Request Sent</h3>

            <a href="https://chat.whatsapp.com/yourgroup" target="_blank">
              Join WhatsApp Group
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Community;
