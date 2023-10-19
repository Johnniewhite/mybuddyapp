"use client"
import { useRouter } from "next/navigation";
import { Journal } from "@prisma/client";

export function JournalItem({ journals }: { journals: Journal[] }) {
  const router = useRouter();

  const deleteJournal = async (journal: Journal) => {
    await fetch(`/api/journal/${journal.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: journal.id,
      }),
    });

    router.refresh();
  };

  return (
    <div>
      {journals.map((journal) => (
        <div
          key={journal.id}
          className="flex justify-between items-center border-b border-slate-100 py-4"
        >
          <div className="flex gap-4 items-center">
            <div>
              <h3 className="text-lg font-semibold text-slate-500">
                {journal.title}
              </h3>
              <p className="text-sm text-slate-400">{journal.body}</p>
            </div>
          </div>
          <button
            onClick={() => deleteJournal(journal)}
            className="bg-slate-50 rounded-full p-1 border border-slate-400 text-slate-400 hover:text-slate-500 text-base hover:ring-0 hover:ring-slate-100 hover:border-slate-500"
          >
            <p className="text-center">-</p>
          </button>
        </div>
      ))}
    </div>
  );
}
