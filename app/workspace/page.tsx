import { auth } from "@clerk/nextjs/server";

// The active organization is read from the request's Clerk session token.
export const instant = false;

export default async function WorkspacePage() {
  const { orgId, orgSlug } = await auth();

  return (
    <section className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
        <p className="font-mono text-xs text-[var(--muted)]">CURRENT TEAM</p>
        <h1 className="mt-2 text-xl font-semibold tracking-tight">
          {orgSlug ?? orgId ?? "No active organization"}
        </h1>
        <p className="mt-4 max-w-prose text-sm leading-6 text-[var(--muted)]">
          This workspace belongs to the active organization in your session.
          Use the team menu to switch organizations or invite a teammate.
        </p>
      </div>
    </section>
  );
}
