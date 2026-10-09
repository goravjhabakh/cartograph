import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { ThemeControl } from "@/components/theme-control";

export default function WorkspaceLayout({ children }: LayoutProps<"/workspace">) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--border)] bg-[var(--surface)] px-4">
        <span className="font-mono text-sm font-semibold tracking-tight">cartograph</span>
        <div className="flex items-center gap-3">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/workspace"
            afterSelectOrganizationUrl="/workspace"
            hidePersonal
          />
          <ThemeControl />
          <UserButton />
        </div>
      </header>
      <main className="flex min-h-0 flex-1">{children}</main>
    </div>
  );
}
