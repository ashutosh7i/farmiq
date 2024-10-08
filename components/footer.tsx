import Link from "next/link";
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <div className="dark bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/ashutosh7i/farmiq" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <GithubIcon className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
          </Link>
          <Link href="https://twitter.com/ashutosh7i" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </Link>
          {/* New Links */}
          <Link href="/about">About</Link>
          <Link href="https://github.com/ashutosh7">Contact Us</Link>
          {/* <Link href="/termsandconditions">Terms & Conditions</Link>
          <Link href="/refundandcancellation">Refund & Cancellation</Link> */}
        </div>
        <p className="mt-4 md:mt-0 text-sm text-gray-300">
          Made with 💖 by{" "}
          <a
            href="https://linkedin.com/in/ashutosh7i"
            className="hover:text-gray-400"
          >
            Ashutosh7i
          </a>
          👨🏻‍💻.
        </p>
      </div>
    </div>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
