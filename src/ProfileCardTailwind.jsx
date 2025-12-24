import { useState } from "react";

export default function ProfileCardTailwind() {
  const [online, setOnline] = useState(true);

  return (
    <div className="border border-neutral-300 rounded-xl p-4 flex gap-3 items-center max-[520px]:flex-col max-[520px]:items-start">
      <div className="w-14 h-14 rounded-full bg-neutral-200 flex-none" />

      <div>
        <h3 className="m-0 text-lg">Tailwind CSS</h3>
        <p className="mt-1 text-sm text-neutral-600">Internal Systems / MIS</p>

        <button
          className="mt-2 px-3 py-2 rounded-lg border border-neutral-300 bg-white"
          onClick={() => setOnline(!online)}
        >
          Toggle Online
        </button>
      </div>

      <span
        className={[
          "ml-auto text-xs px-2 py-1 rounded-full border",
          "max-[520px]:ml-0",
          online ? "border-green-700" : "border-red-700",
        ].join(" ")}
      >
        {online ? "Online" : "Offline"}
      </span>
    </div>
  );
}
