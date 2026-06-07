import {
  ArrowUpRight,
  Banknote,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  Download,
  Eye,
  HandCoins,
  LayoutDashboard,
  Plus,
  QrCode,
  ReceiptText,
  Search,
  Settings,
  ShieldCheck,
  Shuffle,
  Ticket,
  Users
} from "lucide-react";

const campaigns = [
  {
    title: "Acao entre amigos - Reforma do salao",
    status: "Ativa",
    sold: 318,
    total: 500,
    raised: "R$ 6.360,00",
    drawDate: "22 jun"
  },
  {
    title: "Rifa solidaria dos jovens",
    status: "Rascunho",
    sold: 0,
    total: 300,
    raised: "R$ 0,00",
    drawDate: "A definir"
  },
  {
    title: "Cesta beneficente de inverno",
    status: "Sorteada",
    sold: 192,
    total: 200,
    raised: "R$ 3.840,00",
    drawDate: "02 jun"
  }
];

const payments = [
  { buyer: "Mariana Costa", numbers: "018, 019, 020", value: "R$ 60,00", status: "PIX confirmado" },
  { buyer: "Joao Henrique", numbers: "104, 105", value: "R$ 40,00", status: "Aguardando PIX" },
  { buyer: "Ana Paula", numbers: "221", value: "R$ 20,00", status: "PIX confirmado" }
];

const metrics = [
  { label: "Arrecadado", value: "R$ 10.200", icon: HandCoins, tone: "text-primary" },
  { label: "Numeros vendidos", value: "510", icon: Ticket, tone: "text-accent" },
  { label: "Pagamentos pendentes", value: "14", icon: CalendarClock, tone: "text-warning" },
  { label: "Campanhas ativas", value: "2", icon: ClipboardList, tone: "text-success" }
];

const flowSteps = [
  { label: "Venda online", icon: Ticket },
  { label: "PIX", icon: QrCode },
  { label: "Sorteio", icon: Shuffle },
  { label: "Contas", icon: ReceiptText }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-border bg-white px-5 py-6 lg:block">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded bg-primary text-white">
            <Ticket size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Sorteio</p>
            <h1 className="text-lg font-bold">Solidario</h1>
          </div>
        </div>

        <nav className="mt-8 space-y-1">
          {[
            { label: "Painel", icon: LayoutDashboard, active: true },
            { label: "Campanhas", icon: ClipboardList },
            { label: "Participantes", icon: Users },
            { label: "Pagamentos", icon: Banknote },
            { label: "Sorteios", icon: Shuffle },
            { label: "Prestacao", icon: ReceiptText },
            { label: "Configuracoes", icon: Settings }
          ].map((item) => (
            <a
              className={`flex items-center gap-3 rounded px-3 py-2 text-sm font-medium ${
                item.active
                  ? "bg-primary text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
              href="#"
              key={item.label}
            >
              <item.icon size={18} aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <section className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-border bg-white/92 px-4 py-4 backdrop-blur md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Painel do organizador</p>
              <h2 className="text-2xl font-bold text-slate-950">Campanhas beneficentes</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="inline-flex h-10 items-center gap-2 rounded border border-border bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50">
                <Eye size={17} aria-hidden="true" />
                Ver pagina publica
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded bg-primary px-3 text-sm font-semibold text-white shadow-sm hover:bg-teal-800">
                <Plus size={17} aria-hidden="true" />
                Nova campanha
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8">
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <article className="rounded border border-border bg-white p-4 shadow-panel" key={metric.label}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                    <strong className="mt-2 block text-2xl font-bold text-slate-950">{metric.value}</strong>
                  </div>
                  <metric.icon className={metric.tone} size={24} aria-hidden="true" />
                </div>
              </article>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
            <div className="rounded border border-border bg-white shadow-panel">
              <div className="flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-950">Campanhas</h3>
                  <p className="text-sm text-slate-500">Acompanhe vendas, status e data do sorteio.</p>
                </div>
                <label className="flex h-10 min-w-0 items-center gap-2 rounded border border-border px-3 text-sm text-slate-500 md:w-72">
                  <Search size={17} aria-hidden="true" />
                  <input
                    className="min-w-0 flex-1 border-0 bg-transparent text-slate-700 outline-none"
                    placeholder="Buscar campanha"
                    type="search"
                  />
                </label>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Campanha</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Vendidos</th>
                      <th className="px-4 py-3 font-semibold">Arrecadado</th>
                      <th className="px-4 py-3 font-semibold">Sorteio</th>
                      <th className="px-4 py-3 text-right font-semibold">Acoes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {campaigns.map((campaign) => (
                      <tr className="hover:bg-slate-50" key={campaign.title}>
                        <td className="px-4 py-4 font-semibold text-slate-950">{campaign.title}</td>
                        <td className="px-4 py-4">
                          <span className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
                            {campaign.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-slate-700">
                          {campaign.sold}/{campaign.total}
                        </td>
                        <td className="px-4 py-4 text-slate-700">{campaign.raised}</td>
                        <td className="px-4 py-4 text-slate-700">{campaign.drawDate}</td>
                        <td className="px-4 py-4 text-right">
                          <button className="inline-grid h-9 w-9 place-items-center rounded border border-border text-slate-600 hover:bg-slate-100">
                            <ArrowUpRight size={17} aria-label="Abrir campanha" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <section className="rounded border border-border bg-white p-4 shadow-panel">
                <div className="flex items-center justify-between gap-4">
                  <div>
                  <h3 className="text-base font-bold text-slate-950">Operacao da campanha</h3>
                    <p className="text-sm text-slate-500">Fila atual de tarefas.</p>
                  </div>
                  <ShieldCheck className="text-success" size={24} aria-hidden="true" />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {flowSteps.map((step) => (
                    <div className="rounded border border-border p-3" key={step.label}>
                      <step.icon className="text-primary" size={20} aria-hidden="true" />
                      <p className="mt-2 text-sm font-semibold text-slate-800">{step.label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded border border-border bg-white shadow-panel">
                <div className="border-b border-border p-4">
                  <h3 className="text-base font-bold text-slate-950">Pagamentos recentes</h3>
                </div>
                <div className="divide-y divide-border">
                  {payments.map((payment) => (
                    <article className="p-4" key={`${payment.buyer}-${payment.numbers}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-950">{payment.buyer}</h4>
                          <p className="text-sm text-slate-500">Numeros {payment.numbers}</p>
                        </div>
                        <strong className="text-sm text-slate-900">{payment.value}</strong>
                      </div>
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-success">
                        <CheckCircle2 size={14} aria-hidden="true" />
                        {payment.status}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>

          <section className="mt-6 rounded border border-border bg-white p-4 shadow-panel">
            <div className="grid gap-5 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <h3 className="text-base font-bold text-slate-950">Prestacao de contas</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                  Receita bruta de R$ 10.200,00, custos declarados de R$ 1.380,00 e saldo previsto de R$ 8.820,00
                  para a causa da campanha.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                <button className="inline-flex h-10 items-center gap-2 rounded border border-border bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                  <Download size={17} aria-hidden="true" />
                  Exportar CSV
                </button>
                <button className="inline-flex h-10 items-center gap-2 rounded bg-accent px-3 text-sm font-semibold text-white hover:bg-red-700">
                  <ReceiptText size={17} aria-hidden="true" />
                  Abrir relatorio
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
