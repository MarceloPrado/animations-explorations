import type { ReactNode } from "react";

export function DemoView({ menu, demo }: { menu: ReactNode; demo: ReactNode }) {
  return (
    <div className="flex h-screen flex-col bg-slate-50">
      <div className="p-4 text-white">{menu}</div>

      <div className="flex-1 overflow-y-auto bg-slate-50 p-4">{demo}</div>
    </div>
  );
}
