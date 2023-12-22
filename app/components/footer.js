"use client";
import Link from "next/link";

export default function Footer(props) {
  return (
    <div className="btm-nav py-2">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="text-sm font-semibold py-2 text-center">
            Copyright © {new Date().getFullYear()} Powered by{" "}
            <Link
              href="https://lexingtontech.us"
              target="_blank"
              className="font-bold text-secondary uppercase"
            >
              Lexington Tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
