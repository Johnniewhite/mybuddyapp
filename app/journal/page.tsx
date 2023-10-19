import { NewEntry } from "@/components/journals/NewEntry"; // Replace with the actual path to your NewEntry component
import { JournalItem } from "@/components/journals/JournalItem"; // Replace with the actual path to your EntryItem component
import { prisma } from "@/db";
import { title } from "process";
import Link from "next/link";

export default async function Entry() {
  const journal = await prisma.journal.findMany(); // Replace "yourSchemaName" with the actual schema name for your entries

  return (
    <main className="flex min-h-screen justify-center bg-slate-50 h-full w-full">
      <div className="bg-slate-300 py-6 h-full w-full flex flex-col text-slate-800">
        <h1 className="text-3xl text-center text-slate-700">My Buddy App</h1>
        <div className="text-center m-5"><Link className="bg-blue-500 text-white p-3 rounded-full" href="/dashboard">Go to Profile</Link></div>
        <div className="items-center justify-center flex">
        <NewEntry />
        </div>
        <ul className="px-4">
          <JournalItem journals={journal} />
        </ul>
      </div>
    </main>
  );
}
