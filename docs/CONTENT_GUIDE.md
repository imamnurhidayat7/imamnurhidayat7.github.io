# Panduan Mengedit Konten Portfolio

Semua konten portfolio dipisahkan dari kode UI dan disimpan di folder `data/`. Untuk mengubah teks, daftar project, experience, atau skills, **cukup edit file di folder `data/`** — tidak perlu menyentuh komponen React.

## Daftar File Konten

| File | Isi | Komponen yang memakainya |
| --- | --- | --- |
| `data/profile.ts` | Nama, title, tagline, bio, link sosial, quick facts | `Hero`, `About`, `Contact`, `Footer`, `Navbar`, `layout.tsx` |
| `data/projects.ts` | Daftar project + field detail untuk halaman project | `Projects`, `app/projects/[slug]/page.tsx` |
| `data/experience.ts` | Riwayat pendidikan & pengalaman kerja | `Experience` |
| `data/skills.ts` | Daftar skill dikelompokkan per kategori | `Skills` |

> **Tip:** Setelah edit, simpan file lalu jalankan `npm run dev`. Perubahan langsung muncul (hot reload). Untuk production: `npm run build`.

---

## 1. `data/profile.ts` — Identitas & Bio

```ts
export const profile = {
  name: 'Imam Nurhidayat',
  initials: 'IN',
  title: 'Full-Stack Developer',
  tagline: 'I build modern web applications...',
  bio: [
    "Hi, I'm Imam — ...",     // paragraf 1
    'I enjoy working across the stack: ...', // paragraf 2
    "I'm currently open to ...",             // paragraf 3
  ],
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/imamnurhidayat7',
    linkedin: 'https://linkedin.com/in/imamnurhidayat7',
    instagram: 'https://instagram.com/imamnurhidayat7',
  },
  quickFacts: [
    { label: 'Role', value: 'Full-Stack Developer' },
    { label: 'Location', value: 'Indonesia' },
    { label: 'Status', value: 'Open to opportunities' },
    { label: 'Languages', value: 'Indonesian, English' },
  ],
} as const;
```

### Yang sering diubah
- **`name`, `initials`, `title`, `tagline`** → tampil di Hero section.
- **`bio`** → array paragraf. Tambah/ubah elemen array untuk menambah/hapus paragraf. Gunakan tanda kutip ganda `"..."` jika teks mengandung apostrof (contoh: `"I'm Imam"`).
- **`social`** → ganti URL dengan akun Anda. Hapus baris jika tidak dipakai (pastikan komponen yang mengaksesnya mengecek `?.` opsional — `Hero.tsx` sudah aman).
- **`quickFacts`** → baris info singkat di section About.
- **`resumeUrl`** → letakkan file PDF di `public/resume.pdf` lalu path ini otomatis berfungsi.

### Menambah social link baru
Saat ini hanya `github`, `linkedin`, `instagram` yang dipakai. Untuk menambah (mis. Twitter/X):
1. Tambahkan `twitter: 'https://x.com/username'` ke object `social`.
2. Edit `components/sections/Hero.tsx` dan `Contact.tsx` untuk menambahkan ikon dari `lucide-react` (mis. `Twitter`) dan `<a>` link.

---

## 2. `data/projects.ts` — Daftar Project

Setiap project punya field **wajib** dan **opsional**. Field wajib harus ada; field opsional boleh dihapus atau dikosongkan.

### Field Reference

| Field | Wajib | Tipe | Keterangan |
| --- | --- | --- | --- |
| `slug` | ✅ | `string` | ID unik untuk URL, contoh: `task-management-app`. Hanya huruf kecil, angka, dan tanda hubung. Dipakai di URL `/projects/[slug]`. |
| `title` | ✅ | `string` | Judul project. |
| `description` | ✅ | `string` | Ringkasan singkat untuk kartu project (1–2 kalimat). |
| `image` | ✅ | `string` | Path gambar relatif terhadap `public/`, contoh: `/images/project-1.svg`. |
| `techStack` | ✅ | `string[]` | Array teknologi. |
| `featured` | ✅ | `boolean` | `true` untuk menandai sebagai featured (bisa dipakai untuk filter di masa depan). |
| `longDescription` | opsional | `string[]` | Paragraf panjang untuk halaman detail. Tiap elemen = 1 paragraf. |
| `role` | opsional | `string` | Peran Anda di project. |
| `timeline` | opsional | `string` | Tahun atau rentang tanggal, mis. `2024` atau `Jan 2024 – Mar 2024`. |
| `highlights` | opsional | `string[]` | Poin pencapaian/achievement. |
| `features` | opsional | `string[]` | Fitur utama project. |
| `liveUrl` | opsional | `string` | URL live demo. |
| `repoUrl` | opsional | `string` | URL repository. |
| `gallery` | opsional | `string[]` | Path screenshot tambahan untuk galeri di halaman detail. |

### Template project baru (copy-paste)

```ts
{
  slug: 'nama-project-uniq',
  title: 'Nama Project',
  description: 'Ringkasan singkat 1-2 kalimat untuk kartu project.',
  longDescription: [
    'Paragraf 1: konteks & masalah yang diselesaikan.',
    'Paragraf 2: solusi & teknologi yang dipakai.',
  ],
  image: '/images/project-baru.svg',
  techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://demo-url.com',
  repoUrl: 'https://github.com/username/repo',
  featured: true,
  role: 'Full-Stack Developer',
  timeline: '2024',
  highlights: [
    'Pencapaian 1 (kuanitfisik: angka/metric)',
    'Pencapaian 2',
  ],
  features: [
    'Fitur 1',
    'Fitur 2',
    'Fitur 3',
  ],
  // gallery: ['/images/project-baru-1.png', '/images/project-baru-2.png'],
},
```

### Aturan penting
1. **`slug` harus unik** untuk setiap project. Jika duplikat, halaman detail akan konflik.
2. **`slug` hanya boleh** huruf kecil `a-z`, angka `0-9`, dan tanda hubung `-`. Jangan pakai spasi atau karakter khusus.
3. **Gambar** disimpan di folder `public/images/`. Path di `image` harus diawali `/` (contoh: `/images/project-1.svg`).
4. **Menghapus project**: hapus seluruh object project (dari `{` hingga `},`) dari array `projects`. Pastikan koma antar elemen tetap valid.
5. **Mengubah urutan**: urutan di array = urutan tampil di grid.

### Menambah gambar project baru
1. Letakkan file (mis. `project-5.svg` atau `.png`/`.jpg`) di `public/images/`.
2. Set `image: '/images/project-5.svg'` di data project.

---

## 3. `data/experience.ts` — Pengalaman & Pendidikan

```ts
export const experiences: Experience[] = [
  {
    role: 'Full-Stack Developer Intern',
    company: 'Tech Company',
    location: 'Remote',
    startDate: 'Jan 2024',
    endDate: 'Present',        // atau 'Jun 2024'
    description: [
      'Bullet point 1 (apa yang Anda kerjakan).',
      'Bullet point 2 (dampak/hasil).',
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  // ... tambah pengalaman lain
];
```

### Tips
- `description` adalah array — tiap elemen jadi bullet point.
- `endDate: 'Present'` jika masih berjalan, jika tidak pakai tanggal akhir.
- Urutan di array = urutan tampil (biasanya dari yang paling baru).
- `techStack` opsional — hapus baris jika tidak ingin ditampilkan untuk entri tertentu.

---

## 4. `data/skills.ts` — Daftar Skill

```ts
export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React' },
      { name: 'Next.js' },
      // ...
    ],
  },
  // ...
];
```

### Tips
- Dikelompokkan per `category` (Frontend, Backend, Tools & Others, dst).
- Untuk menambah kategori baru, tambahkan object `{ category: '...', skills: [...] }` ke array.
- Untuk menambah skill, tambahkan `{ name: 'SkillName' }` ke array `skills` kategori terkait.

---

## Workflow Editing (Singkat)

1. Buka file di `data/` yang ingin diubah.
2. Edit nilai (nama, deskripsi, URL, dll). Simpan file (`Cmd+S` / `Ctrl+S`).
3. Lihat preview di browser — perubahan langsung muncul (dev mode).
4. Commit perubahan ke git:
   ```bash
   git add data/
   git commit -m "Update portfolio content"
   ```

## Validasi sebelum deploy

Jalankan perintah berikut untuk memastikan tidak ada error:

```bash
npm run lint     # cek error lint
npm run build    # build production, akan error jika ada masalah tipe/eksport
```

Jika build gagal dengan pesan seperti "Cannot find module" atau "Type error", periksa kembali:
- Semua field wajib terisi.
- Koma antar elemen array/object ada.
- Tidak ada trailing comma yang menyebabkan masalah (TS modern biasanya aman).
- `slug` unik untuk tiap project.

## FAQ

**Q: Bisakah pakai bahasa Indonesia di konten?**
A: Bisa. Semua field teks bebas. Tapi pastikan konsisten (jangan campur EN/ID dalam satu section kecuali memang sengaja).

**Q: Bagaimana menambah section baru (mis. "Certifications")?**
A: 1) Buat file `data/certifications.ts` dengan struktur serupa. 2) Buat komponen `components/sections/Certifications.tsx`. 3) Import & render di `app/page.tsx`.

**Q: Apakah perlu restart server setelah edit data?**
A: Tidak. Next.js hot reload otomatis. Kecuali Anda menambah **field baru ke type** yang dipakai `generateStaticParams`/`generateMetadata`, yang kadang butuh restart dev server.

**Q: Bagaimana mengubah warna/font?**
A: Itu bukan konten, tapi styling. Edit `tailwind.config.ts` (untuk warna tema seperti `accent`) dan `app/globals.css` (untuk base styles).
