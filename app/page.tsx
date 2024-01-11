import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center">
      <div className="bg-secondary p-8 rounded shadow-md text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-primary">
          Welcome to My Landing Page
        </h1>
        <p className="text-gray-700 mb-8">
          This is a simple landing page built with React, TypeScript, and
          Tailwind CSS.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Button variant="default" size="default">
            Get Started
          </Button>
          <Link href="/admin">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}
