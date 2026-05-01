import { Button } from "@heroui/react";
import Link from "next/link";
import { Home, AlertTriangle } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-md w-full border border-slate-200">
        <div className="flex justify-center mb-5">
          <div className="bg-black p-5 rounded-full">
            <AlertTriangle className="text-white w-14 h-14" />
          </div>
        </div>

        <h1 className="text-6xl font-extrabold text-slate-800 mb-2">404</h1>

        <h2 className="text-2xl font-bold text-slate-700 mb-3">
          Page Not Found
        </h2>

        <p className="text-slate-500 mb-8">
          Sorry, the page you are looking for doesn t exist or has been moved.
        </p>

        <Link href={"/"}>
          <Button
            size="lg"
            className="font-semibold px-6 bg-black text-white"
            startContent={<Home size={18} />}
          >
            Back To Home
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
