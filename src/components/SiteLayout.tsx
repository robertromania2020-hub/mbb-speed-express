import { Link, Outlet } from "react-router-dom";
import { Phone, Bus } from "lucide-react";

const PHONE = "+40784875133";
const PHONE_DISPLAY = "+40 784 875 133";

function NavItem({ to, children, end }: { to: string; children: React.ReactNode; end?: boolean }) {
  return (
    <Link to={to} className="text-foreground/80 hover:text-foreground" {...(end ? {} : {})}>
      {children}
    </Link>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Bus className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">MBB Speed</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <NavItem to="/" end>Acasă</NavItem>
          <NavItem to="/servicii">Servicii</NavItem>
          <NavItem to="/despre">Despre noi</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Sună</span>
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Bus className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">MBB Speed</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Transport persoane și colete, rapid, sigur și confortabil — la prețuri corecte.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Navigare</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Acasă</Link></li>
            <li><Link to="/servicii" className="hover:text-foreground">Servicii</Link></li>
            <li><Link to="/despre" className="hover:text-foreground">Despre noi</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Rezervări</h3>
          <p className="mt-3 text-sm text-muted-foreground">Disponibili 24/7 pentru rezervări telefonice.</p>
          <a href={`tel:${PHONE}`} className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MBB Speed. Toate drepturile rezervate.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export { PHONE, PHONE_DISPLAY };
