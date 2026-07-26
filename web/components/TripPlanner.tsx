"use client";

import { FormEvent, useState } from "react";

type GenerateTripResponse = {
  itinerary?: string;
  error?: string;
};

export default function TripPlanner() {
  const [itinerary, setItinerary] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setItinerary("");
    setError("");
    setIsLoading(true);

    const form = new FormData(event.currentTarget);

    const tripDetails = {
      destination: String(form.get("destination") ?? ""),
      startDate: String(form.get("startDate") ?? ""),
      endDate: String(form.get("endDate") ?? ""),
      travellers: Number(form.get("travellers") ?? 1),
      budget: Number(form.get("budget") ?? 0),
      interests: String(form.get("interests") ?? ""),
    };

    if (tripDetails.endDate < tripDetails.startDate) {
      setError("End date, start date ke baad honi chahiye.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/generate-trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tripDetails),
      });

      const data = (await response.json()) as GenerateTripResponse;

      if (!response.ok) {
        throw new Error(data.error || "Trip generate nahi ho saka.");
      }

      setItinerary(data.itinerary || "Itinerary response empty hai.");
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Kuch galat ho gaya. Dobara try karo.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            AI Trip Planner
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            Plan your next journey.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Enter your travel details and let Trip Mosaic create a personalized
            itinerary.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10"
        >
          <div>
            <label htmlFor="destination" className="mb-2 block font-semibold">
              Destination
            </label>

            <input
              id="destination"
              name="destination"
              type="text"
              required
              placeholder="Example: Goa, India"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="startDate" className="mb-2 block font-semibold">
                Start date
              </label>

              <input
                id="startDate"
                name="startDate"
                type="date"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="endDate" className="mb-2 block font-semibold">
                End date
              </label>

              <input
                id="endDate"
                name="endDate"
                type="date"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="travellers" className="mb-2 block font-semibold">
                Travellers
              </label>

              <input
                id="travellers"
                name="travellers"
                type="number"
                min="1"
                defaultValue="1"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block font-semibold">
                Budget
              </label>

              <input
                id="budget"
                name="budget"
                type="number"
                min="0"
                placeholder="Example: 50000"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>
          </div>

          <div>
            <label htmlFor="interests" className="mb-2 block font-semibold">
              Interests
            </label>

            <textarea
              id="interests"
              name="interests"
              rows={4}
              placeholder="Beaches, food, adventure, history..."
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Generating your trip..." : "Generate Trip"}
          </button>

          {error && (
            <p className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-center text-red-200">
              {error}
            </p>
          )}
        </form>

        {itinerary && (
          <section className="mt-10 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Your itinerary
            </p>

            <pre className="mt-6 whitespace-pre-wrap font-sans leading-8 text-slate-200">
              {itinerary}
            </pre>
          </section>
        )}
      </div>
    </main>
  );
}
