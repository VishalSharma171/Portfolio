export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t">
      <div className="max-w-6xl mx-auto px-6 text-sm text-center text-slate-500">
        © {new Date().getFullYear()} Vishal Sharma — Built with Next.js & Tailwind
      </div>
    </footer>
  );
}
