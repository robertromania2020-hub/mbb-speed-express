import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Users, Package, Clock, ShieldCheck, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-transport.jpg";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteLayout";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>MBB Speed — Transport persoane și colete România · Austria · Germania · Olanda</title>
        <meta name="description" content="MBB Speed: transport persoane și colete între România, Austria, Germania și Olanda. Rezervări rapide la +40 784 875 133 sau pe WhatsApp." />
        <link rel="canonical" href="https://mbb-speed-express.lovable.app/" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Plecări din România: Marți, Joi și Sâmbătă
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              MBB Speed — transport persoane și colete
            </h1>
            <div className="mt-5 rounded-xl border-2 border-primary bg-primary/10 px-5 py-3 text-center">
              <p className="text-base font-bold text-primary md:text-lg">
                🚐 Plecări din România: MARȚI · JOI · SÂMBĂTĂ
              </p>
            </div>
            <p className="mt-4 text-lg text-muted-foreground">
              Curse săptămânale între România, Austria, Germania și Olanda. Microbuze moderne, șoferi atestați, livrări rapide.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
              <a href="#rezervare" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-3 text-sm font-semibold transition hover:bg-accent">
                Rezervă online
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="Microbuz Renault Master 8+1 gri MBB Speed cu numărul de telefon afișat"
              width={1536}
              height={1024}
              className="h-auto w-full rounded-2xl border border-border shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="rezervare" className="bg-secondary/40 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Rezervă acum</h2>
            <p className="mt-3 text-muted-foreground">Completează formularul — rezervarea este trimisă direct pe WhatsApp.</p>
          </div>
          <div className="mt-8">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
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
            <p className="mt-2 text-muted-foreground">Expediem colete între țări în siguranță, cu predare rapidă. Ideal pentru documente, pachete sau bagaje.</p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <div className="text-center"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">De ce MBB Speed</h2></div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { icon: Clock, title: "Punctualitate", desc: "Plecări și livrări la ora stabilită." },
              { icon: ShieldCheck, title: "Siguranță", desc: "Vehicule verificate, șoferi atestați." },
              { icon: MapPin, title: "4 țări", desc: "România, Austria, Germania, Olanda." },
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-lg">
          <h2 className="text-3xl font-bold md:text-4xl">Vezi rutele noastre</h2>
          <p className="mt-3 text-primary-foreground/80">Curse regulate între România și Europa de Vest.</p>
          <Link to="/rute" className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground transition hover:bg-background/90">
            <MapPin className="h-5 w-5" /> Vezi rutele
          </Link>
        </div>
      </section>
    </>
  );
}
