import { Helmet } from "react-helmet-async";
import { Phone, Users, Package, Check } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteLayout";

export default function Servicii() {
  return (
    <>
      <Helmet>
        <title>Servicii — MBB Speed</title>
        <meta name="description" content="Transport persoane și transport colete cu MBB Speed. Curse regulate, livrări rapide între orașe." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Serviciile noastre</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Două servicii principale, ambele dedicate rapidității și siguranței tale.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <Users className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">Transport persoane</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Microbuze moderne, climatizate", "Locuri confortabile cu spațiu generos", "Șoferi profesioniști, atestați", "Plecări punctuale, rute zilnice", "Bagaj inclus în preț"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-8">
            <Package className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">Transport colete</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Expediere rapidă între orașe", "Predare în aceeași zi pe rutele active", "Confirmare la livrare", "Tarife clare, fără costuri ascunse", "Documente, pachete sau bagaje"].map((t) => (
                <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-secondary/60 p-8 text-center">
          <h2 className="text-2xl font-bold">Ai nevoie de o ofertă personalizată?</h2>
          <p className="mt-2 text-muted-foreground">Sună-ne și îți facem o ofertă în câteva minute.</p>
          <a href={`tel:${PHONE}`} className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
