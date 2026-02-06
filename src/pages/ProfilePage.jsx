import { Loader2, UserCircle2, Mail, Shield } from "lucide-react";
import { getInitials } from "../helpers";

export default function ProfilePage() {
  const loading = false;

  const user = {
    name: "Daffa Anaqi Farid",
    email: "daffaanaqfarid@gmail.com",
    role: "Admin",
  };

  const logout = (e) => {
    e.preventDefault();
  };

  return (
    <div className="profile-page">
      <h2 className="profile-title">My Profile</h2>

      {loading ? (
        <div className="profile-loader">
          <Loader2 className="spin" size={32} />
        </div>
      ) : (
        <div className="profile-card">
          {/* Avatar */}
          <div
            style={{ alignSelf: "center", scale: "1.5" }}
            className="avatar-circle"
          >
            {getInitials("Daffa Anaqi Farid")}
          </div>

          {/* Info */}
          <div className="profile-table">
            <div className="row">
              <span className="label">
                <UserCircle2 size={28} /> Name
              </span>
              <span className="value">{user.name}</span>
            </div>

            <div className="row">
              <span className="label">
                <Mail size={28} /> Email
              </span>
              <span className="value">{user.email}</span>
            </div>

            <div className="row">
              <span className="label">
                <Shield size={28} /> Role
              </span>
              <span className="value badge">{user.role}</span>
            </div>
          </div>

          <button className="btn destructive logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
