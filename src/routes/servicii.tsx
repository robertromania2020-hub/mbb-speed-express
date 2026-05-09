import { createFileRoute } from "@tanstack/react-router";
import { Users, Package, Phone, Check } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteLayout";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii — MBB Speed" },
      { name: "description", content: "Transport persoane și colete cu MBB Speed: curse regulate, livrări rapide, prețuri corecte." },
      { property: "og:title", content: "Servicii — MBB Speed" },
      { property: "og:description", content: "Transport persoane și colete." },
    ],
  }),
  component: ServiciiPage,
});

function ServiciiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Serviciile noastre</h1>
        <p className="mt-3 text-muted-foreground">Soluții complete pentru transportul tău.</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8">
          <Users className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-semibold">Transport persoane</h2>
          <p className="mt-2 text-muted-foreground">Curse zilnice cu microbuze moderne, climatizate, cu locuri confortabile.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              "Microbuze climatizate, scaune confortabile",
              "Șoferi profesioniști și atestați",
              "Plecări punctuale, la ore fixe",
              "Preluare și lăsare în puncte stabilite",
              "Bagaj inclus în preț",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />{t}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-8">
          <Package className="h-10 w-10 text-primary" />
          <h2 className="mt-4 text-2xl font-semibold">Transport colete</h2>
          <p className="mt-2 text-muted-foreground">Trimite colete rapid și în siguranță între orașe, cu MBB Speed.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {[
              "Livrare în aceeași zi pe rutele noastre",
              "Manipulare atentă a coletelor",
              "Predare directă către destinatar",
              "Confirmare telefonică",
              "Tarife transparente",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" />{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-border bg-secondary/40 p-8 text-center">
        <h3 className="text-xl font-semibold">Vrei o ofertă personalizată?</h3>
        <p className="mt-2 text-muted-foreground">Sună-ne și îți răspundem imediat.</p>
        <a href={`tel:${PHONE}`} className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
