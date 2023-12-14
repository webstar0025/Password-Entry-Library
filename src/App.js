import { useState } from "react";
import "./App.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"|,.<>]/.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*()_-+={[}]|:;\"'<,>.)";
    }
    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = validatePassword();
    if (validationError) {
      setError(validationError);
    } else {
      setError("");
      alert("Password is valid!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Password-Entry">
      <div>
        <label for="pwd">Password</label>
        <input
          type="password"
          id="pwd"
          name="pwd"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label for="confirm-pwd">Confirm Password</label>
        <input
          type="password"
          id="confirm-pwd"
          name="confirm-pwd"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default App;
