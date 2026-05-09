import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Users, Package, Clock, ShieldCheck, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-transport.jpg";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteLayout";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MBB Speed — Transport persoane și colete</title>
        <meta name="description" content="MBB Speed: transport persoane și colete rapid, sigur și confortabil. Rezervări la +40 784 875 133." />
      </Helmet>

      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Microbuz MBB Speed pe autostradă" width={1600} height={900} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Servicii autorizate de transport
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">MBB Speed — transport persoane și colete</h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">Călătorii confortabile și livrări rapide, la prețuri corecte. Rezervă-ți locul sau trimite un colet cu un singur telefon.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90">
                <Phone className="h-4 w-4" /> Rezervă: {PHONE_DISPLAY}
              </a>
              <Link to="/servicii" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold transition hover:bg-accent">Vezi serviciile</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ce oferim</h2>
          <p className="mt-3 text-muted-foreground">Două servicii principale, gândite pentru rapiditate și siguranță.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md">
            <Users className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Transport persoane</h3>
            <p className="mt-2 text-muted-foreground">Curse regulate cu microbuze moderne, climatizate. Locuri confortabile, șoferi profesioniști, plecări la timp.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm transition hover:shadow-md">
            <Package className="h-10 w-10 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">Transport colete</h3>
            <p className="mt-2 text-muted-foreground">Expediem colete între orașe în siguranță, cu predare rapidă. Ideal pentru documente, pachete sau bagaje.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">De ce MBB Speed</h2></div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Clock, title: "Punctualitate", desc: "Plecări și livrări la ora stabilită." },
              { icon: ShieldCheck, title: "Siguranță", desc: "Vehicule verificate, șoferi atestați." },
              { icon: MapPin, title: "Rute extinse", desc: "Acoperim multiple destinații zilnic." },
              { icon: Star, title: "Prețuri corecte", desc: "Tarife transparente, fără costuri ascunse." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6">
                <f.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-3 font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-lg">
          <h2 className="text-3xl font-bold md:text-4xl">Rezervă-ți cursa acum</h2>
          <p className="mt-3 text-primary-foreground/80">Suntem disponibili 24/7 pentru rezervări și informații.</p>
          <a href={`tel:${PHONE}`} className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground transition hover:bg-background/90">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
