"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const NewEntry = () => {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");

  const router = useRouter();
  const create = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    await fetch(`/api/journal`, { 
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newTitle,
        body: newBody, 
      }),
    });

    router.refresh();
    setNewTitle("");
    setNewBody("");
  };

  return (
    <div className="mx-8 mt-4 mb-6 flex items-center justify-center">
      <form onSubmit={create} className="flex gap-3">
        <div className="mt-4">
        <input
          type="text"
          name="title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
          className=" p-3 rounded-full placeholder:text-center"
          required
        />
        </div>
        <div>
        <textarea
          name="body"
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          placeholder="Body"
          className="p-3 rounded-full placeholder:text-center"
          required
        />
        </div>
        <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        >
          <p className="">Add</p>
        </button>
        </div>
      </form>
    </div>
  );
};
