import { Link } from "remix";
import Logo from "~/assets/images/logo.png";

export default function Layout() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img
                  className="block h-16 w-auto"
                  src={Logo}
                  alt="Bob's Burger"
                />
              </Link>
            </div>
            <div className="sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="characters"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Characters
                </Link>

                <Link
                  to="Episodes"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Episodes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
