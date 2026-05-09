import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre noi — MBB Speed" },
      { name: "description", content: "MBB Speed este o companie de transport persoane și colete dedicată confortului și siguranței pasagerilor." },
      { property: "og:title", content: "Despre noi — MBB Speed" },
      { property: "og:description", content: "Cine suntem și de ce ne aleg clienții." },
    ],
  }),
  component: DesprePage,
});

function DesprePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Despre MBB Speed</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        MBB Speed este o companie de transport dedicată oferirii unor servicii rapide, sigure și confortabile,
        atât pentru pasageri cât și pentru colete. Cu o flotă modernă și o echipă de șoferi profesioniști,
        ne mândrim cu punctualitatea și grija față de fiecare client.
      </p>
      <p className="mt-4 text-muted-foreground">
        Misiunea noastră este simplă: să te aducem la destinație în cele mai bune condiții și să livrăm coletele
        tale în siguranță, la timp, de fiecare dată.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "Siguranță", desc: "Vehicule verificate tehnic și șoferi atestați." },
          { icon: Heart, title: "Grijă față de client", desc: "Comunicare promptă și soluții personalizate." },
          { icon: Award, title: "Experiență", desc: "Sute de curse efectuate cu succes." },
        ].map((v) => (
          <div key={v.title} className="rounded-xl border border-border bg-card p-6">
            <v.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">{v.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
