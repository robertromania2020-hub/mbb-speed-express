import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";

const COUNTRIES = ["România", "Austria", "Germania", "Olanda"] as const;
const WHATSAPP = "40784875133";

const schema = z.object({
  name: z.string().trim().min(2, "Nume prea scurt").max(80),
  phone: z.string().trim().min(6, "Număr invalid").max(25).regex(/^[+\d\s().-]+$/, "Număr invalid"),
  type: z.enum(["Persoană", "Colet"]),
  from: z.enum(COUNTRIES),
  to: z.enum(COUNTRIES),
  notes: z.string().trim().max(300).optional(),
}).refine((d) => d.from !== d.to, { message: "Țara de plecare trebuie să fie diferită de destinație", path: ["to"] });

export default function BookingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", phone: "", type: "Persoană", from: "România", to: "Germania", notes: "" });

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = result.data;
    const msg =
`*Rezervare nouă MBB Speed*
Nume: ${d.name}
Telefon: ${d.phone}
Tip: ${d.type}
De la: ${d.from}
Către: ${d.to}${d.notes ? `\nMențiuni: ${d.notes}` : ""}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const inputCls = "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Nume</span>
          <input className={inputCls} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Nume complet" maxLength={80} />
          {errors.name && <span className="mt-1 block text-xs text-destructive">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-medium">Telefon</span>
          <input className={inputCls} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+40 7xx xxx xxx" maxLength={25} />
          {errors.phone && <span className="mt-1 block text-xs text-destructive">{errors.phone}</span>}
        </label>
      </div>

      <div>
        <span className="text-sm font-medium">Tip rezervare</span>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {(["Persoană", "Colet"] as const).map((t) => (
            <button type="button" key={t} onClick={() => update("type", t)}
              className={`rounded-md border px-3 py-2 text-sm font-medium transition ${form.type === t ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background hover:bg-accent"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Țara de plecare</span>
          <select className={inputCls} value={form.from} onChange={(e) => update("from", e.target.value)}>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium">Țara de destinație</span>
          <select className={inputCls} value={form.to} onChange={(e) => update("to", e.target.value)}>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.to && <span className="mt-1 block text-xs text-destructive">{errors.to}</span>}
        </label>
      </div>

      <label className="block">
        <span className="text-sm font-medium">Mențiuni (opțional)</span>
        <textarea className={inputCls} rows={3} value={form.notes} onChange={(e) => update("notes", e.target.value)} maxLength={300} placeholder="Data dorită, oraș de plecare/sosire, detalii colet..." />
      </label>

      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow transition hover:bg-primary/90">
        <Send className="h-4 w-4" /> Trimite rezervarea pe WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">La trimitere se va deschide WhatsApp cu detaliile rezervării. Apasă „Send” pentru a finaliza.</p>
    </form>
  );
}
