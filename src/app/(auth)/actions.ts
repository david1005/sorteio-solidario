"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";
import { clearSessionCookie, setSessionCookie } from "@/lib/session";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function signInAction(formData: FormData) {
  const email = getString(formData, "email").toLowerCase();
  const password = getString(formData, "password");

  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user || !verifyPassword(password, user.passwordHash)) {
    redirect("/login?erro=credenciais");
  }

  await setSessionCookie(user.id);
  redirect("/painel");
}

export async function signUpAction(formData: FormData) {
  const name = getString(formData, "name");
  const email = getString(formData, "email").toLowerCase();
  const phone = getString(formData, "phone");
  const password = getString(formData, "password");
  const organizationName = getString(formData, "organizationName");

  if (!name || !email || !phone || !organizationName || password.length < 8) {
    redirect("/cadastro?erro=dados");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true }
  });

  if (existingUser) {
    redirect("/cadastro?erro=email");
  }

  const baseSlug = slugify(organizationName);
  const organizationSlug = `${baseSlug || "organizacao"}-${Date.now().toString(36)}`;

  const user = await prisma.user.create({
    data: {
      name,
      email,
      phone,
      passwordHash: hashPassword(password),
      role: "OWNER",
      memberships: {
        create: {
          role: "OWNER",
          organization: {
            create: {
              name: organizationName,
              slug: organizationSlug
            }
          }
        }
      }
    },
    select: { id: true }
  });

  await setSessionCookie(user.id);
  redirect("/painel");
}

export async function signOutAction() {
  await clearSessionCookie();
  redirect("/login");
}
