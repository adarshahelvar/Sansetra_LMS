import "./UserProfile.css";

function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-card">
          <h1>My Profile</h1>

          <div className="profile-item">
            <label>Name</label>
            <p>{user?.name}</p>
          </div>

          <div className="profile-item">
            <label>Email</label>
            <p>{user?.email}</p>
          </div>

          <div className="profile-item">
            <label>Phone</label>
            <p>{user?.phone}</p>
          </div>

          <div className="profile-item">
            <label>Role</label>
            <p>{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
