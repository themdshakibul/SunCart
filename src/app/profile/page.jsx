"use client";

import UpdateProfile from "@/Components/App/UpdateProfile";
import { useSession } from "@/lib/auth-client";
import { Card, Avatar, Button } from "@heroui/react";
import { Briefcase, Mail, MapPin } from "lucide-react";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const ProfielPage = () => {
  const userData = useSession();
  const user = userData.data?.user;

  return (
    <section>
      <div className="flex justify-center items-center py-10">
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl">
          <div className="p-8">
            <div className="flex flex-col items-center">
              {/* User Avatar */}
              <div>
                <Avatar
                  src={user?.image}
                  className="w-32 h-32 text-large ring-4 ring-offset-4 ring-black"
                />
              </div>

              {/* User Info */}
              <div className="text-center mt-6 space-y-2">
                <h1 className="text-2xl font-bold text-gray-900  tracking-tight">
                  {user?.name}
                </h1>
                <p className="text-zinc-600 font-medium">{user?.email}</p>
              </div>

              <div className="flex gap-3 w-full mt-8">
                <UpdateProfile />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfielPage;
