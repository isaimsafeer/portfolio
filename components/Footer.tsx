export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Saim Safeer. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
