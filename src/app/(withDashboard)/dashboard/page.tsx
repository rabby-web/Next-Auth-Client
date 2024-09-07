import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log("ss", session);
  return (
    <div>
      {session?.user && (
        <>
          <Image
            src={session?.user?.image}
            width={100}
            height={100}
            alt="Image"
            className="mx-auto rounded-full mt-6 p-2 border-2 border-purple-800 "
          ></Image>
          <h1 className="text-4xl text-center mt-5">
            Welcome{" "}
            <span className="text-purple-700">{session?.user?.name}</span>
          </h1>
          <h1 className="text-4xl text-center mt-5">
            Email: {session?.user?.email}
          </h1>
        </>
      )}
    </div>
  );
};

export default DashboardPage;
