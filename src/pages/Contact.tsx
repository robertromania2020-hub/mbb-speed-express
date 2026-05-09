import { Helmet } from "react-helmet-async";
import { Phone, Clock, MapPin } from "lucide-react";
import { PHONE, PHONE_DISPLAY } from "@/components/SiteLayout";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact — MBB Speed</title>
        <meta name="description" content="Contactează MBB Speed pentru rezervări de transport persoane și colete." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">Pentru rezervări sau informații, sună-ne oricând.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <Phone className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Telefon rezervări</h3>
            <a href={`tel:${PHONE}`} className="mt-2 block text-lg font-semibold text-primary hover:underline">{PHONE_DISPLAY}</a>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <Clock className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Program</h3>
            <p className="mt-2 text-sm text-muted-foreground">Rezervări telefonice 24/7</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">Acoperire</h3>
            <p className="mt-2 text-sm text-muted-foreground">Rute zilnice între multiple orașe</p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">Sună acum pentru rezervare</h2>
          <a href={`tel:${PHONE}`} className="mt-4 inline-flex items-center gap-2 rounded-md bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-background/90">
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
