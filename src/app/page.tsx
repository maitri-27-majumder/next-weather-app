"use client";
import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function Home() {

  return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex  flex-col items-center px-7 ">
          <div>
            <Image
              src="/GoogleLogo.png"
              alt="google Logo"
              className="mb-11"
              width={200}
              height={44}
              priority
            />
          </div>
          <SearchBar />

          <div className="flex pl-3 gap-10 text-gray-600 mt-10">
            <div>Google Search</div>
            <div>I am Feeling Lucky</div>
          </div>
        </main>
        <Footer />
      </div>
  );
}
