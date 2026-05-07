"use client";
import { useState } from "react";
import { Application, Stage } from "@/types";

const STAGES: Stage[] = ["Applied", "Interview", "Offer", "Rejected"];

const initialApplications: Application[] = [
  { id: "1", company: "Multibagg AI", role: "Frontend Intern", stage: "Applied" },
  { id: "2", company: "Google", role: "SWE Intern", stage: "Interview" },
  { id: "3", company: "Razorpay", role: "React Developer", stage: "Offer" },
];

export default function KanbanBoard() {
  const [applications, setApplications] = useState(initialApplications);

  const moveCard = (id: string, newStage: Stage) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, stage: newStage } : app))
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {STAGES.map((stage) => (
        <div key={stage} className="bg-white rounded-xl border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-700 mb-3">{stage}</h3>
          <div className="flex flex-col gap-3">
            {applications
              .filter((app) => app.stage === stage)
              .map((app) => (
                <div
                  key={app.id}
                  className="bg-gray-50 rounded-lg p-3 border border-gray-100"
                >
                  <p className="font-medium text-sm text-gray-800">{app.company}</p>
                  <p className="text-xs text-gray-500 mb-2">{app.role}</p>
                  <select
                    className="text-xs border border-gray-200 rounded px-1 py-1 w-full"
                    value={app.stage}
                    onChange={(e) => moveCard(app.id, e.target.value as Stage)}
                  >
                    {STAGES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
