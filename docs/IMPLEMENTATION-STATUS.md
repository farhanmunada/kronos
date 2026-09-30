# Status Implementasi — Landing Page Kronos KD

**Tanggal:** 2026-09-30
**Status:** Selesai (build hijau) — menunggu review manusia.

---

## 1. Ringkasan

Landing page company profile Kronos Kinetic Dwellings telah diimplementasikan penuh sesuai `PRD.md` dan `ARCHITECTURE.md`. Enam section, form inquiry, dan endpoint email (Resend) sudah berfungsi.

**Verifikasi:**
- `npm run typecheck` → hijau (tsc -b)
- `npm run build` → hijau (39 modul, 903ms; JS 279.85 kB / 88.52 kB gzip; CSS 30.43 kB)
- Smoke test API: validasi, error mapping, dan jalur kirim email terverifikasi
- Render visual (CDP, Chrome headless): desktop 1440px & mobile 390px tanpa overflow horizontal; 5/5 gambar berhasil dimuat (`complete: true`)

---

## 2. Stack Aktual (berbeda dari rencana awal)

| Aspek | Rencana `ARCHITECTURE.md` | Aktual | Alasan |
|---|---|---|---|
| Tailwind | v3 + `tailwind.config.js` | **v4.3.3** (CSS-first, `@theme`) | v4 adalah versi stabil terkini; config via CSS |
| React | 18+ | **19.3.0** | Versi stabil terkini |
| Vite | — | **8.3.1** | Versi stabil terkini |
| TypeScript | — | **5.7** | Kompatibel toolchain |
| Animasi | Framer Motion (opsional) | **CSS murni** | Motion minimal (fade/rise + hover); tanpa JS tambahan |
| Aset | Foto (Lorem Picsum → AI) | **Foto stok Unsplash** | Fotorealistik, lisensi bebas, tanpa aset lokal |

**Catatan:** Framer Motion tidak dipakai karena filosofi motion minimal; CSS transition + Intersection Observer sudah memenuhi kebutuhan (fade-in, hover, media zoom).

---

## 3. Struktur File (24 file sumber)

```
src/
  App.tsx, main.tsx, vite-env.d.ts
  components/
    layout/    Header.tsx, Footer.tsx
    sections/  Hero, PodExplorer, Metrics, Workflow, Portfolio, Inquiry
    ui/        Button, Reveal, SectionHeading, Photo
    visuals/   HeroVisual, PodVisual, ProjectVisual
  data/        metrics, pods, workflow, projects, media
  hooks/       useScrollReveal
  lib/         cn
  styles/      globals.css
api/
  send-inquiry.ts     (Vercel Function — Web standard POST handler)
  _send-inquiry.ts    (logika bersama: validasi + kirim Resend)
```

---

## 4. Keputusan Teknis Penting

### 4.1 Token Desain (Tailwind v4 `@theme`)
Palet & font didefinisikan di `src/styles/globals.css` memakai blok `@theme` (bukan `tailwind.config.js`). Terverifikasi muncul di CSS hasil build: `#a16207`, `#171717`, `--font-sans: "Josefin Sans"`, `--font-serif: "Cinzel"`.

### 4.2 Endpoint Email
- **Produksi:** `api/send-inquiry.ts` (Vercel Function, runtime `nodejs22.x`).
- **Dev lokal:** middleware Vite (`inquiryDevApi` di `vite.config.ts`) memakai logika yang sama dari `api/_send-inquiry.ts`, sehingga form bisa dites tanpa deploy.
- **Keamanan:** API key hanya di server (`RESEND_API_KEY`), tidak pernah dikirim ke klien. Input divalidasi di server (nama 2–120 char, email regex, terrain whitelist, area 40–100000 m²). HTML email di-escape untuk mencegah injeksi.

### 4.3 Aksesibilitas
- Skip-to-content link, `aria-live` untuk status form, `role="tablist"/"tab"/"tabpanel"` pada Pod Explorer, `aria-invalid` + `aria-describedby` pada field error.
- `prefers-reduced-motion` dimatikan animasinya.
- Fokus terlihat (`:focus-visible` outline aksen).
- Setiap foto punya `alt` deskriptif; `width`/`height` intrinsik mencegah CLS.

### 4.4 Aset Fotografi (Unsplash)
- Semua foto berasal dari **Unsplash** (Unsplash License — bebas dipakai komersial, tanpa izin).
- Registry terpusat di `src/data/media.ts`: menyimpan `src` (tanpa query), dimensi intrinsik, `alt`, dan kredit fotografer.
- Komponen `src/components/ui/Photo.tsx` menambahkan parameter `auto=format&fit=crop&w=&q=` + `srcset` responsif (640–2000px), `loading="lazy"`/`decoding="async"` (kecuali Hero yang `priority`), dan `object-cover`.
- Atribusi sumber dicantumkan di footer. Foto bersifat ilustratif, bukan proyek nyata Kronos.

---

## 5. Yang BELUM Selesai / Perlu Aksi Manusia

1. **Kredensial email:** isi `.env` (salin dari `.env.example`) dengan `RESEND_API_KEY` asli + `INQUIRY_EMAIL`. Tanpa ini, submit form akan gagal (500/502) — perilaku sudah benar, hanya perlu kredensial.
2. **Aset visual:** sudah memakai foto stok Unsplash (lihat §4.4). Bila ingin foto milik sendiri, cukup ganti entri di `src/data/media.ts` — komponen tidak perlu diubah.
3. **Repo git:** diinisialisasi; branch `main` melacak `origin/main`.
4. **Deploy Vercel:** `vercel.json` siap; tinggal hubungkan repo + set env vars.
5. **PDF Tech Dossier:** tombol CTA saat ini mengarah ke anchor `#specs`; perlu file PDF asli bila diinginkan unduhan nyata.

---

## 6. Cara Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc -b
npm run build      # output ke dist/
npm run preview    # pratinjau hasil build
```

Form inquiry lokal: isi `.env` dulu agar pengiriman email berhasil.
