export default function Header() {
  return (
    <header className="w-full border-b border-[#1e1e22] bg-[#0a0a0a] text-white py-3 px-6 text-xs uppercase tracking-widest flex justify-between items-center fixed top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#e50914] animate-pulse"></span>
        <span>BSCS STUDENT / GEN AI ENGINEER</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        <span>OPEN TO INTERNSHIPS & ROLES</span>
      </div>
    </header>
  );
}
