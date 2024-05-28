import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div class="relative max-w-xl mx-auto mt-20">
          <img
            class="h-64 w-full object-cover rounded-md"
            src="https://images.unsplash.com/photo-1680725779155-456faadefa26"
            alt="Random image"
          />
          <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <h2 class="text-white text-3xl font-bold">
              Hello, I am new to Nextjs
            </h2>
          </div>
        </div>
        <div className="justify-center m-8 text-black font-bold text-3xl flex underline">
          <Link href="/posts">Link to my Posts</Link>
        </div>
      </main>
    </>
  );
}
