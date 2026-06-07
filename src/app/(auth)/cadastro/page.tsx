import Link from "next/link";
import { Building2, LockKeyhole, Mail, Phone, Ticket, UserRound } from "lucide-react";
import { signUpAction } from "@/app/(auth)/actions";

type SignUpPageProps = {
  searchParams?: Promise<{
    erro?: string;
  }>;
};

function getErrorMessage(error?: string) {
  if (error === "email") {
    return "Este e-mail ja esta cadastrado.";
  }

  if (error === "dados") {
    return "Preencha todos os campos e use uma senha com pelo menos 8 caracteres.";
  }

  return null;
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const params = await searchParams;
  const errorMessage = getErrorMessage(params?.erro);

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto grid min-h-screen w-full max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[420px_1fr] lg:items-center">
        <aside className="rounded border border-border bg-slate-950 p-6 text-white shadow-panel">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded bg-primary">
              <Ticket size={24} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">Sorteio</p>
              <h1 className="text-xl font-bold">Solidario</h1>
            </div>
          </div>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-semibold text-teal-200">Campanhas</dt>
              <dd className="mt-1 text-2xl font-bold">Online</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-teal-200">Pagamentos</dt>
              <dd className="mt-1 text-2xl font-bold">PIX</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-teal-200">Transparencia</dt>
              <dd className="mt-1 text-2xl font-bold">Relatorios</dd>
            </div>
          </dl>
        </aside>

        <div className="w-full max-w-xl lg:mx-auto">
          <h2 className="text-2xl font-bold text-slate-950">Criar organizacao</h2>
          <p className="mt-2 text-sm text-slate-500">Cadastre o administrador principal do painel.</p>

          {errorMessage ? (
            <p className="mt-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700">
              {errorMessage}
            </p>
          ) : null}

          <form action={signUpAction} className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Organizacao</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <Building2 size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="organizationName"
                  placeholder="Nome da igreja, grupo ou ONG"
                  required
                />
              </span>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Nome</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <UserRound size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="name"
                  placeholder="Seu nome"
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">E-mail</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <Mail size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="email"
                  placeholder="voce@email.com"
                  required
                  type="email"
                />
              </span>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Telefone</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <Phone size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  name="phone"
                  placeholder="(11) 99999-9999"
                  required
                  type="tel"
                />
              </span>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Senha</span>
              <span className="mt-2 flex h-11 items-center gap-2 rounded border border-border px-3">
                <LockKeyhole size={17} className="text-slate-400" aria-hidden="true" />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-slate-900 outline-none"
                  minLength={8}
                  name="password"
                  placeholder="Minimo de 8 caracteres"
                  required
                  type="password"
                />
              </span>
            </label>

            <button className="h-11 rounded bg-primary text-sm font-bold text-white hover:bg-teal-800 sm:col-span-2">
              Criar e entrar
            </button>
          </form>

          <p className="mt-5 text-sm text-slate-600">
            Ja tem conta?{" "}
            <Link className="font-bold text-primary hover:text-teal-800" href="/login">
              Entrar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
