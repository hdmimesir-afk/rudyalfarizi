import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import alUla1 from "@/assets/al-ula-1.jpg";
import alUla2 from "@/assets/al-ula-2.jpg";
import alUla3 from "@/assets/al-ula-3.jpg";
import alUla4 from "@/assets/al-ula-4.jpg";
import alUla5 from "@/assets/al-ula-5.jpg";
import alUla6 from "@/assets/al-ula-6.jpg";
import alUla7 from "@/assets/al-ula-7.jpg";
import alUla8 from "@/assets/al-ula-8.jpg";
import madinah2 from "@/assets/madinah-2.jpg";
import madinah3 from "@/assets/madinah-3.jpg";
import madinah4 from "@/assets/madinah-4.jpg";
import madinah5 from "@/assets/madinah-5.jpg";
import madinah6 from "@/assets/madinah-6.jpg";
import madinah7 from "@/assets/madinah-7.jpg";
import badr1 from "@/assets/badr-1.jpg";
import badr2 from "@/assets/badr-2.jpg";
import badr3 from "@/assets/badr-3.jpg";
import badr4 from "@/assets/badr-4.jpg";
import badr5 from "@/assets/badr-5.jpg";
import badr6 from "@/assets/badr-6.jpg";
import badr7 from "@/assets/badr-7.jpg";
import badr8 from "@/assets/badr-8.jpg";
import badr9 from "@/assets/badr-9.jpg";

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface GalleryLocation {
  name: string;
  slug: string;
  images: GalleryImage[];
}

export const galleryLocations: GalleryLocation[] = [
  {
    name: "Al Ula",
    slug: "al-ula",
    images: [
      { src: alUla1, caption: "Tim Al Ula" },
      { src: alUla2, caption: "Wisata Old Town" },
      { src: alUla3, caption: "Old Town Al Ula" },
      { src: alUla4, caption: "Maraya Concert Hall" },
      { src: alUla5, caption: "Kuliner Al Ula" },
      { src: alUla6, caption: "Desert Safari" },
      { src: alUla7, caption: "Jamaah di Al Ula" },
      { src: alUla8, caption: "Bandara Al Ula" },
    ],
  },
  {
    name: "Badr",
    slug: "badr",
    images: [
      { src: badr1, caption: "I Love Badr" },
      { src: badr2, caption: "Selfie di Badr" },
      { src: badr3, caption: "Jamaah di Gunung Badr" },
      { src: badr4, caption: "Sumur Badr" },
      { src: badr5, caption: "Maqam Syuhada Badr" },
      { src: badr6, caption: "Bukit Pasir Badr" },
      { src: badr7, caption: "Masjid Badr" },
      { src: badr8, caption: "Kuliner di Badr" },
      { src: badr9, caption: "Foto Bersama Jamaah" },
    ],
  },
  {
    name: "Madinah",
    slug: "madinah",
    images: [
      { src: madinah7, caption: "Raudhah Masjid Nabawi" },
      { src: madinah2, caption: "Stasiun Kereta Madinah" },
      { src: madinah3, caption: "Selfie di Masjid Nabawi" },
      { src: madinah4, caption: "Jamaah di Masjid Nabawi" },
      { src: madinah5, caption: "Jabal Uhud" },
      { src: madinah6, caption: "Kuliner Kebun Kurma" },
    ],
  },
  {
    name: "Makkah",
    slug: "makkah",
    images: [
      { src: gallery2, caption: "Masjidil Haram" },
      { src: gallery4, caption: "Ka'bah" },
      { src: gallery2, caption: "Tawaf" },
      { src: gallery4, caption: "Sa'i" },
      { src: gallery2, caption: "Zamzam" },
      { src: gallery4, caption: "Mina" },
      { src: gallery2, caption: "Arafah" },
      { src: gallery4, caption: "Muzdalifah" },
      { src: gallery2, caption: "Jabal Rahmah" },
      { src: gallery4, caption: "Masjid Jin" },
    ],
  },
  {
    name: "Jeddah",
    slug: "jeddah",
    images: [
      { src: gallery4, caption: "Corniche Jeddah" },
      { src: gallery2, caption: "Al Balad" },
      { src: gallery4, caption: "Floating Mosque" },
      { src: gallery2, caption: "King Fahd Fountain" },
      { src: gallery4, caption: "Red Sea Mall" },
      { src: gallery2, caption: "Jeddah Tower" },
    ],
  },
  {
    name: "Thoif",
    slug: "thoif",
    images: [
      { src: gallery4, caption: "Kota Thoif" },
      { src: gallery2, caption: "Masjid Abdullah bin Abbas" },
      { src: gallery4, caption: "Kebun Anggur" },
      { src: gallery2, caption: "Shubra Palace" },
      { src: gallery4, caption: "Pasar Al Hada" },
      { src: gallery2, caption: "Al Rudaf Park" },
    ],
  },
];
