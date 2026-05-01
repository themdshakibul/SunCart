"use client";

import UpdateProfile from "@/Components/App/UpdateProfile";
import { authClient } from "@/lib/auth-client";
import { Card, Avatar } from "@heroui/react";

const ProfielPage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <section>
      <div className="flex justify-center items-center py-10">
        <Card className="w-full max-w-md bg-white/70 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl">
          <div className="p-8">
            <div className="flex flex-col items-center">
              <Avatar className="w-40 h-40 border shadow-sm">
                <Avatar.Image
                  alt={user?.name ?? "Profile"}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback
                  className="text-4xl font-bold uppercase"
                  delayMs={600}
                >
                  {user?.name?.charAt(0) ?? "?"}
                </Avatar.Fallback>
              </Avatar>

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
