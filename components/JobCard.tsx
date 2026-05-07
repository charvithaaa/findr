import { Job } from "@/types";

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {job.type}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-1">{job.company}</p>
      <p className="text-gray-400 text-sm mb-3">{job.location}</p>
      <div className="flex flex-wrap gap-2">
        {job.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
