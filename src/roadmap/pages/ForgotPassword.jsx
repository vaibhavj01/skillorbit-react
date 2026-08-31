import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "../../data/siteConfig";
import { useAuth } from "../auth/AuthContext";
import RmButton from "../components/RmButton";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    const result = await resetPassword({ email });
    setBusy(false);
    setErrors(result.errors || {});
  };

  return (
    <form className="rm-auth" onSubmit={onSubmit}>
      <h1>Forgot Password</h1>
      <p className="lead">
        Enter your email. Without a live account server, SkillOrbit cannot reset passwords from this page.
      </p>
      {errors.form ? <p className="rm-error">{errors.form}</p> : null}
      <div className="rm-field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {errors.email ? <p className="rm-error">{errors.email}</p> : null}
      </div>
      <div className="rm-card-actions" style={{ marginTop: "1.1rem" }}>
        <RmButton type="submit" full disabled={busy}>
          {busy ? "Checking…" : "Request reset"}
        </RmButton>
      </div>
      <p className="rm-muted" style={{ marginTop: "0.9rem", textAlign: "center" }}>
        Need help? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        <Link to="/roadmap/login">Back to login</Link>
      </p>
    </form>
  );
}
