import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useProgress } from "../auth/ProgressContext";
import { formatDate, initials } from "../utils";
import RmButton from "../components/RmButton";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const { stats } = useProgress();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [message, setMessage] = useState("");

  const save = (event) => {
    event.preventDefault();
    const result = updateProfile({ name });
    if (result.ok) {
      setEditing(false);
      setMessage("Profile updated.");
    }
  };

  return (
    <div>
      <section className="rm-hero">
        <h1>My Profile</h1>
        <p>Your SkillOrbit learning identity.</p>
      </section>
      <article className="rm-card" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <div className="rm-avatar-btn" style={{ width: "3.4rem", height: "3.4rem", fontSize: "1rem" }}>{initials(user.name)}</div>
        <div>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="rm-muted">Joined {formatDate(user.createdAt)}</p>
        </div>
      </article>

      <section className="rm-stats" style={{ marginTop: "1rem" }}>
        <article className="rm-stat"><strong>{stats.started}</strong><span>Roadmaps Started</span></article>
        <article className="rm-stat"><strong>{stats.completedRoadmaps}</strong><span>Roadmaps Completed</span></article>
        <article className="rm-stat"><strong>{stats.completedTopics}</strong><span>Topics Completed</span></article>
        <article className="rm-stat"><strong>{stats.streak}</strong><span>Learning Streak</span></article>
      </section>

      <section className="rm-card">
        <div className="rm-section-head">
          <h2>Edit Profile</h2>
        </div>
        {editing ? (
          <form onSubmit={save}>
            <div className="rm-field">
              <label htmlFor="name">Full name</label>
              <input id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className="rm-card-actions">
              <RmButton type="submit">Save</RmButton>
              <RmButton type="button" variant="ghost" onClick={() => setEditing(false)}>Cancel</RmButton>
            </div>
          </form>
        ) : (
          <RmButton onClick={() => setEditing(true)}>Edit Profile</RmButton>
        )}
        {message ? <p className="rm-muted" style={{ marginTop: "0.7rem" }}>{message}</p> : null}
      </section>
    </div>
  );
}
