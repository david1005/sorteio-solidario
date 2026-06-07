import Link from "next/link";
import { LockKeyhole, Mail, Ticket } from "lucide-react";
import { signInAction } from "@/app/(auth)/actions";

type LoginPageProps = {
  searchParams?: Promise<{
    erro?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const errorMessage =
    params?.erro === "credenciais" ? "E-mail ou senha invalidos." : null;

  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[1fr_520px]">
      <section className="hidden bg-slate-950 px-10 py-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded bg-primary">
            <Ticket size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">Sorteio</p>
            <h1 className="text-xl font-bold">Solidario</h1>
          </div>
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">Painel seguro</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Controle campanhas, pagamentos e prestacao de contas em um unico lugar.
          </h2>
        </div>
      </section>

      <section className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="grid h-10 w-10 place-items-center rounded bg-primary text-white">
              <Ticket size={22} aria-hidden="true" />
            </div>
            <strong className="text-lg">Sorteio Solidario</strong>
          </div>

          <h2 className="text-2xl font-bold text-slate-950">Entrar</h2>
          <p className="mt-2 text-sm text-slate-500">Acesse o painel da sua organizacao.</p>

          {errorMessage ? (
            <p className="mt-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <form action={signInAction} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">E-mail</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <Mail size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="email"
                  placeholder="voce@organizacao.com"
                  required
                  type="email"
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Senha</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <LockKeyhole size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="password"
                  placeholder="Sua senha"
                  required
                  type="password"
                />
              </span>
            </label>

            <button className="h-11 w-full rounded bg-primary text-sm font-bold text-white hover:bg-teal-800">
              Entrar no painel
            </button>
          </form>

          <p className="mt-5 text-sm text-slate-600">
            Ainda nao tem conta?{" "}
            <Link className="font-bold text-primary hover:text-teal-800" href="/cadastro">
              Criar organizacao
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
