import HankoProfile from "@/components/hanko-components/HankoProfile";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/journal"><h1 className="text-3xl text-center text-slate-700">Go back to My Buddy App </h1></Link>
      <HankoProfile />
    </div>
  );
};

export default DashboardPage;
