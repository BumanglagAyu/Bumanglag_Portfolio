import SectionHeading from '../SectionHeading/SectionHeading'

const InternshipExperienceSection = () => {
  return (
    <section id="experience">
      <SectionHeading
        title="// Internship Experience"
        subtitle="Hands-on experience in software development, backend systems, networking setup, and technical support."
      />

      <div className="bg-secondary border-border my-8 rounded-[14px] border p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-secondary-content text-xl font-semibold">
            Software Developer Intern
          </h3>

          <p className="text-accent text-sm md:text-base">
            Department of Information and Communications Technology
          </p>

          <p className="text-tertiary-content text-sm">
            June 2025 – July 2025 · Baguio City, Philippines
          </p>
        </div>

        <div className="bg-primary text-primary-content mt-5 rounded-2xl px-5 py-4">
          <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
            <li>
              Developed and supported a ticketing system for managing technical issues.
            </li>
            <li>
              Built backend functionalities using Node.js, Express.js, and MySQL.
            </li>
            <li>
              Assisted in the installation and setup of networking systems, including Starlink and servers.
            </li>
            <li>
              Conducted internet diagnostics and documented system performance.
            </li>
            <li>
              Supported seminars and training through logistics and technical setup.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InternshipExperienceSection