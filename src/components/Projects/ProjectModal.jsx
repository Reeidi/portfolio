export default function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-gray-700 shadow-md transition hover:bg-gray-100"
          aria-label="Close project details"
        >
          x
        </button>

        <div className="grid max-h-[90vh] md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex items-center justify-center bg-gray-100 p-4 md:p-6">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="max-h-[75vh] w-full rounded-xl object-contain"
            />
          </div>

          <div className="overflow-y-auto p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
              {project.category}
            </p>
            <h3
              id="project-modal-title"
              className="pt-3 text-2xl font-semibold text-gray-900 md:text-3xl"
            >
              {project.title}
            </h3>
            <p className="pt-5 text-sm leading-7 text-gray-600 md:text-base">
              {project.description}
            </p>

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">Project overview</p>
              <p className="pt-2 text-sm leading-7 text-gray-600">
                This preview shows a larger project visual together with the main
                project description, so visitors can quickly understand the work in
                more detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
