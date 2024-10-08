import Link from 'next/link';

export default function Navebar() {
  return (
    <div className="bg-blue-600 py-4 shadow-md">
      <ul className="flex items-center justify-center gap-x-8 text-white">
        <li>
          <Link
            href="/"
            className="hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Home1
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            About1
          </Link>
        </li>
        <li>
          <Link
            href="/contect"
            className="hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Contect1
          </Link>
        </li>
      </ul>
    </div>
  );
}

  