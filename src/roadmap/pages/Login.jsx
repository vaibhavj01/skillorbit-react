import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import RmButton from "../components/RmButton";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/roadmap/dashboard";
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const onChange = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    const result = await login(form);
    setBusy(false);
    if (!result.ok) {
      setErrors(result.errors || {});
      return;
    }
    navigate(from, { replace: true });
  };

  return (
    <form className="rm-auth" onSubmit={onSubmit}>
      <p className="rm-chip">SkillOrbit Roadmaps</p>
      <h1>Welcome back</h1>
      <p className="lead">Sign in to continue your learning path.</p>
      {errors.form ? <p className="rm-error">{errors.form}</p> : null}
      <div className="rm-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} />
        {errors.email ? <p className="rm-error">{errors.email}</p> : null}
      </div>
      <div className="rm-field">
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" value={form.password} onChange={onChange} />
        {errors.password ? <p className="rm-error">{errors.password}</p> : null}
      </div>
      <label className="rm-check">
        <input type="checkbox" name="remember" checked={form.remember} onChange={onChange} />
        Remember me
      </label>
      <p style={{ marginTop: "0.65rem" }}>
        <Link to="/roadmap/forgot-password">Forgot Password</Link>
      </p>
      <div className="rm-card-actions" style={{ marginTop: "1.1rem" }}>
        <RmButton type="submit" full disabled={busy}>
          {busy ? "Signing in…" : "Login"}
        </RmButton>
        <RmButton to="/roadmap/register" variant="ghost" full>
          Create Account
        </RmButton>
      </div>
    </form>
  );
}
