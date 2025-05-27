import { useState } from "react";
import "./index.css"

const LeadGenerationForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [error, setError] = useState("");

  const validate = () => {
    if (!formData.name || !formData.email) return "Name and Email are required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Invalid email format.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMsg = validate();
    if (errorMsg) return setError(errorMsg);

    try {
      const response = await fetch("https://lead-generation-backend-2.onrender.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
        if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Server error");
      }
      
      alert("Lead submitted successfully!");
      setFormData({ name: "", email: "", company: "", message: "" });
      setError("");
    } catch {
      setError("Failed to submit lead.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Name*" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email*" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="text" placeholder="Company" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
      <textarea placeholder="Message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} />
      {error && <p>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default LeadGenerationForm