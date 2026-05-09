import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <>
      <Helmet><title>Pagina nu a fost găsită — MBB Speed</title></Helmet>
      <section className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-lg text-muted-foreground">Pagina căutată nu există.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
          Înapoi la pagina principală
        </Link>
      </section>
    </>
  );
}
