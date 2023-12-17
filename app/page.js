"use client";
import Link from "next/link";
//import PopupWidget from "./components/popupWidget";
import UAuthButton from "./components/uauthbutton";
export default function Home() {
  return (
    <>
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold uppercase py-4">
            Lexington Tech Demo
          </h1>
          <h2 className="text-3xl font-bold uppercase py-4">
            High performance scalable full-stack Web applications
          </h2>
          <div className="py-4">
            <UAuthButton/>
            </div>
          <div className="py-4">
          </div>
          <div className="py-4">

          </div>

        </div>
      </div>      
    </div>
    </>
  );
}
