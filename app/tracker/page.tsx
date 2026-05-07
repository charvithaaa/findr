"use client";
import KanbanBoard from "@/components/KanbanBoard";

export default function TrackerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Application Tracker
        </h1>
        <p className="text-gray-500 mb-8">
          Track where you are in each interview process.
        </p>
        <KanbanBoard />
      </div>
    </main>
  );
}
