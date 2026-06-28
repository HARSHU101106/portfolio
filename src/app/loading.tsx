export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent border-r-accent-2" />
          <div className="absolute inset-2 rounded-full bg-[radial-gradient(circle,var(--accent),transparent_70%)] opacity-40 blur-md" />
        </div>
        <p className="font-display text-sm tracking-widest text-subtle">
          LOADING
        </p>
      </div>
    </div>
  );
}
