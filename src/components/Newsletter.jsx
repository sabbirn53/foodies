import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");

    let saved = JSON.parse(localStorage.getItem("newsletterEmails") || "[]");
    if (!saved.includes(email)) {
      saved.push(email);
      localStorage.setItem("newsletterEmails", JSON.stringify(saved));
    }
  };

  return (
    <section className="max-w-3xl px-4 py-12 mx-auto mt-16 rounded-lg shadow-lg bg-brand-light dark:bg-gray-900">
      <h3 className="mb-4 text-3xl font-semibold text-center text-gray-900 dark:text-gray-100">
        Join Our Newsletter
      </h3>
      <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
        Get tasty recipes, updates, and cooking tips delivered to your inbox.
      </p>
      {submitted ? (
        <p className="font-medium text-center text-green-600">
          Thanks for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md sm:w-auto focus:outline-none focus:ring-2 focus:ring-brand"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white transition rounded-md bg-brand hover:bg-orange-600"
          >
            Subscribe
          </button>
        </form>
      )}
      {error && (
        <p className="mt-2 font-medium text-center text-red-600">{error}</p>
      )}
    </section>
  );
}
