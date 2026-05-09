import { Helmet } from "react-helmet-async";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ROUTES = [
  { from: "România", to: "Germania", days: "Marți, Joi, Sâmbătă", duration: "~22 ore" },
  { from: "România", to: "Austria", days: "Marți, Joi, Sâmbătă", duration: "~16 ore" },
  { from: "România", to: "Olanda", days: "Marți, Joi, Sâmbătă", duration: "~26 ore" },
  { from: "Germania", to: "România", days: "Marți, Joi, Duminică", duration: "~22 ore" },
  { from: "Austria", to: "România", days: "Miercuri, Vineri, Duminică", duration: "~16 ore" },
  { from: "Olanda", to: "România", days: "Marți, Vineri", duration: "~26 ore" },
];

export default function Rute() {
  return (
    <>
      <Helmet>
        <title>Rute transport — România · Austria · Germania · Olanda | MBB Speed</title>
        <meta name="description" content="Rute regulate MBB Speed între România, Austria, Germania și Olanda. Transport persoane și colete săptămânal." />
        <link rel="canonical" href="https://mbb-speed-express.lovable.app/rute" />
      </Helmet>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Rutele noastre</h1>
        <p className="mt-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          Plecări din România: Marți, Joi și Sâmbătă
        </p>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Operăm rute regulate între România, Austria, Germania și Olanda. Transport persoane și colete cu plecări săptămânale.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {ROUTES.map((r) => (
            <div key={`${r.from}-${r.to}`} className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3 text-lg font-semibold">
                <MapPin className="h-5 w-5 text-primary" />
                <span>{r.from}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span>{r.to}</span>
              </div>
              <div className="mt-3 grid gap-1 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Plecări:</span> {r.days}</p>
                <p><span className="font-medium text-foreground">Durată estimată:</span> {r.duration}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-secondary/60 p-8 text-center">
          <h2 className="text-2xl font-bold">Nu vezi ruta ta?</h2>
          <p className="mt-2 text-muted-foreground">Putem organiza curse pe cerere între cele 4 țări. Trimite o rezervare și te contactăm.</p>
          <Link to="/#rezervare" className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Rezervă acum
          </Link>
        </div>
      </section>
    </>
  );
}
