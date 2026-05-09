import { Helmet } from "react-helmet-async";
import { ShieldCheck, Heart, Award } from "lucide-react";

export default function Despre() {
  return (
    <>
      <Helmet>
        <title>Despre noi — MBB Speed</title>
        <meta name="description" content="MBB Speed — echipa dedicată transportului de persoane și colete, cu accent pe siguranță și seriozitate." />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Despre MBB Speed</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Suntem o echipă dedicată transportului de persoane și colete, cu accent pe siguranță, punctualitate și grijă față de fiecare client. Construim relații de încredere prin profesionalism și prețuri corecte.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Siguranță", desc: "Vehicule verificate periodic și șoferi atestați pentru transport persoane." },
            { icon: Heart, title: "Grija pentru client", desc: "Tratăm fiecare călător și fiecare colet cu maximă atenție." },
            { icon: Award, title: "Experiență", desc: "Ani de experiență pe rutele pe care le acoperim, în beneficiul tău." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6">
              <v.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-semibold">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
