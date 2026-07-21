import { motion } from "framer-motion";

const projects = [
  { id: "01", title: "AutoAgent Framework", category: "Agentic AI Platform" },
  { id: "02", title: "RAG Pipeline Suite", category: "LLM Infrastructure" },
  { id: "03", title: "DeFi Trading Bot", category: "Autonomous Trading" },
  { id: "04", title: "LangGraph Orchestrator", category: "Workflow Engine" },
  { id: "05", title: "CrewAI Multi-Agent", category: "Collaborative AI" },
  { id: "06", title: "Vector Search Engine", category: "RAG & Embeddings" },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 flex items-end justify-between">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-display font-bold tracking-tight">
          SELECTED <span className="text-crimson">PROJECTS</span>
        </h2>
        <a
          href="#"
          className="hidden items-center gap-1 text-sm text-gray-450 hover:text-crimson transition-colors md:flex"
        >
          VIEW ALL PROJECTS <span className="text-lg leading-none">&nbsp;↗</span>
        </a>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-5 md:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-crimson/50"
          >
            <div className="relative w-full aspect-[16/10] bg-[#161618] border-b border-[#27272A] overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 rounded-t-xl">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="relative p-5">
              <div className="flex items-start justify-between">
                <span className="text-3xl font-black font-display text-crimson leading-none">
                  {project.id}
                </span>
                <span className="text-crimson text-xl opacity-0 transition-opacity group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <h3 className="mt-2 text-sm font-semibold uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="mt-0.5 text-xs text-gray-500">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <a
        href="#"
        className="mt-8 flex items-center justify-center gap-1 text-sm text-gray-450 hover:text-crimson transition-colors md:hidden"
      >
        VIEW ALL PROJECTS <span className="text-lg leading-none">&nbsp;↗</span>
      </a>
    </section>
  );
}
