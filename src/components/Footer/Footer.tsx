import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'

const Footer = () => {
  return (
    <footer className="bg-secondary border-border border-t px-4 py-10 md:px-14 md:py-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
        <div>
          <h5 className="mb-4 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">AU Bumanglag</span>
          </h5>

          <p className="text-tertiary-content max-w-md text-sm leading-6">
            Computer Science graduate focused on full-stack web development, backend systems,
            databases, and AI-focused applications.
          </p>

          <ul className="mt-6 flex flex-wrap gap-5">
            {socials.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-neutral hover:text-accent inline-flex transition-colors duration-300">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-neutral mb-4 text-base font-medium">Navigation</h5>

          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-tertiary-content hover:text-accent w-fit text-sm transition-colors duration-300">
                {link.title}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h5 className="text-neutral mb-4 text-base font-medium">Contact</h5>

          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:aubumanglag404@gmail.com"
              className="text-tertiary-content hover:text-accent transition-colors duration-300">
              aubumanglag404@gmail.com
            </a>

            <a
              href="tel:+639619793299"
              className="text-tertiary-content hover:text-accent transition-colors duration-300">
              +63 961 979 3299
            </a>

            <p className="text-tertiary-content">Baguio City, Philippines</p>
            <p className="text-tertiary-content">English · Filipino</p>
          </div>
        </div>
      </div>

      <div className="border-border mx-auto mt-10 flex max-w-[1200px] flex-col gap-2 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-tertiary-content">© 2026 AU Bumanglag. All rights reserved.</p>

        <a
          href="#"
          className="text-tertiary-content hover:text-accent w-fit transition-colors duration-300">
          Back to top
        </a>
      </div>
    </footer>
  )
}

export default Footer