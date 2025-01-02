import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Link to={"/"}>
              <span className="self-center text-3xl font-bold text-gray-900 tracking-[-0.12em]">
                coconut.
              </span>
            </Link>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-700 sm:text-center">
          © 2025{" "}
          <a className="hover:underline">
            <span className="tracking-[-0.12em]">coconut.</span>™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
