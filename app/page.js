"use client";
import Link from "next/link";
import Profile from "./components/profile";
import UAuthButton from "./components/uauthbutton";
export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/metaverseunstoppable.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold uppercase py-4 text-center">
            Lexington WEB3 Demo
          </h1>
          <h2 className="text-3xl font-bold uppercase py-4 text-center">
            Featuring Unstoppable Domains
          </h2>
          <div className="mx-auto card w-96 bg-base-300 shadow-xl">
            <figure>
              <img
                src="/logo_ud.png"
                alt="Unstoppable Domains"
                className="pr-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Unstoppable Domains</h2>
              <div className="text-sm">
                <p>WEB3 Identity Management & Messaging</p>
                <p>WEB3 Onboarding</p>
                <p>Humanity Check</p>
                <p>Client Privacy & Protection</p>
                <p>Client Analytics</p>
                <p>Wallet Messaging & Notification</p>
                <p>Mainnet & Solana Support</p>
              </div>
              <div className="card-actions justify-end">
                <Profile />
              </div>
            </div>
          </div>

          <p className="py-4 text-center text-pretty">
            Get an{" "}
            <Link
              href="https://unstoppabledomains.com/?ref=919f0efc41df4c6"
              alt="Unstoppable Domains"
              target="_blank"
              className="text-primary"
            >
              Unstoppable Domains
            </Link>{" "}
            Identity.
          </p>
        </div>
      </div>
    </div>
  );
}
