const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${Math.round(w * 0.7)}&q=80`;

const site = {
  name: "Obrazek",
  domain: "obrazek.info",
  tagline: "Galeria tekstów o obrazie, świetle, kadrze i tym, co zostaje poza ramą",
  email: "kontakt@obrazek.info",
  city: "Kraków",
  address: "ul. Józefa 14/3, 31-056 Kraków",
  author: "Zofia Malinowska",
  authorBio: "Kuratorka tekstów. Pisze o fotografii, malarstwie i codziennym patrzeniu.",
  authorRole: "Redaktorka",
  authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  heroImage: u("photo-1577083552431-6e5fd01988ec", 1600),
  covers: {
    Fotografia: u("photo-1452587925148-ce544e77e70d"),
    Malarstwo: u("photo-1579783902614-a3fb3927b6a5"),
    Design: u("photo-1561070791-2526d30994b5"),
    Ulice: u("photo-1449824913935-59a10b8d2000"),
    Natura: u("photo-1500530855697-b586d89ba3ee"),
    default: u("photo-1577083552431-6e5fd01988ec"),
  } as Record<string, string>,
  rooms: [
    { name: "Fotografia", blurb: "Kadr, światło, błędy, które zostają w głowie." },
    { name: "Malarstwo", blurb: "Farba, płótno i to, czego nie widać na reprodukcji." },
    { name: "Design", blurb: "Układy, typografia, przedmioty codziennego użytku." },
    { name: "Ulice", blurb: "Miasto jako wystawa bez biletu." },
  ],
};

export function roomSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/ą/g, "a").replace(/ć/g, "c").replace(/ę/g, "e")
    .replace(/ł/g, "l").replace(/ń/g, "n").replace(/ó/g, "o")
    .replace(/ś/g, "s").replace(/ź|ż/g, "z")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export function coverFor(category?: string, image?: string) {
  if (image && !image.includes("source.unsplash.com")) return image;
  return site.covers[category || ""] || site.covers.default;
}

export default site;
