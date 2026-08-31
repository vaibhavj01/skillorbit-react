import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import RmButton from "../components/RmButton";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    const result = await register(form);
    setBusy(false);
    if (!result.ok) {
      setErrors(result.errors || {});
      return;
    }
    navigate("/roadmap/dashboard", { replace: true });
  };

  return (
    <form className="rm-auth" onSubmit={onSubmit}>
      <p className="rm-chip">Create your path</p>
      <h1>Join SkillOrbit Roadmaps</h1>
      <p className="lead">Track courses, complete topics, and keep your career moving.</p>
      <div className="rm-field">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" autoComplete="name" value={form.name} onChange={onChange} />
        {errors.name ? <p className="rm-error">{errors.name}</p> : null}
      </div>
      <div className="rm-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} />
        {errors.email ? <p className="rm-error">{errors.email}</p> : null}
      </div>
      <div className="rm-field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="new-password" value={form.password} onChange={onChange} />
        {errors.password ? <p className="rm-error">{errors.password}</p> : null}
      </div>
      <div className="rm-field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" value={form.confirmPassword} onChange={onChange} />
        {errors.confirmPassword ? <p className="rm-error">{errors.confirmPassword}</p> : null}
      </div>
      <div className="rm-card-actions" style={{ marginTop: "1.1rem" }}>
        <RmButton type="submit" full disabled={busy}>
          {busy ? "Creating account…" : "Create Account"}
        </RmButton>
      </div>
      <p className="rm-muted" style={{ marginTop: "0.9rem", textAlign: "center" }}>
        Already have an account? <Link to="/roadmap/login">Login</Link>
      </p>
    </form>
  );
}
