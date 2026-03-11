import jeddah1 from "@/assets/jeddah-1.jpg";
import jeddah2 from "@/assets/jeddah-2.jpg";
import jeddah3 from "@/assets/jeddah-3.jpg";
import jeddah4 from "@/assets/jeddah-4.jpg";
import jeddah5 from "@/assets/jeddah-5.jpg";
import jeddah6 from "@/assets/jeddah-6.jpg";
import thoif1 from "@/assets/thoif-1.jpg";
import thoif2 from "@/assets/thoif-2.jpg";
import thoif3 from "@/assets/thoif-3.jpg";
import thoif4 from "@/assets/thoif-4.jpg";
import thoif5 from "@/assets/thoif-5.jpg";
import thoif6 from "@/assets/thoif-6.jpg";
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
import makkah1 from "@/assets/makkah-1.jpg";
import makkah2 from "@/assets/makkah-2.jpg";
import makkah3 from "@/assets/makkah-3.jpg";
import makkah4 from "@/assets/makkah-4.jpg";
import makkah5 from "@/assets/makkah-5.jpg";
import makkah7 from "@/assets/makkah-7.jpg";

// Cover images
import coverMakkah from "@/assets/cover-makkah.jpg";
import coverMadinah from "@/assets/cover-madinah.jpg";
import coverJabalKhandamah from "@/assets/cover-jabal-khandamah.jpg";
import coverJabalNur from "@/assets/cover-jabal-nur.jpg";
import coverJabalTsur from "@/assets/cover-jabal-tsur.jpg";
import coverHudaibiyah from "@/assets/cover-hudaibiyah.jpg";
import coverBadr from "@/assets/cover-badr.jpg";
import coverJeddah from "@/assets/cover-jeddah.jpg";
import coverGuideMesir from "@/assets/cover-guide-mesir.jpg";
import coverJamaahPrivate from "@/assets/cover-jamaah-private.jpg";

export interface GalleryImage {
  src: string;
  caption: string;
}

export interface GalleryLocation {
  name: string;
  slug: string;
  description: string;
  cover: string;
  images: GalleryImage[];
}

export const galleryLocations: GalleryLocation[] = [
  {
    name: "Makkah",
    slug: "makkah",
    description: "Di kota suci inilah jutaan muslim dari seluruh dunia berkumpul menghadap Ka'bah, pusat ibadah umat Islam. Setiap langkah di Makkah mengingatkan kita pada perjalanan dakwah Rasulullah ﷺ dan perjuangan awal Islam.",
    cover: coverMakkah,
    images: [
      { src: makkah1, caption: "Jamaah di Ka'bah" },
      { src: makkah5, caption: "Selfie di Masjidil Haram" },
      { src: makkah7, caption: "Foto Bersama Jamaah" },
      { src: makkah2, caption: "Jabal Rahmah" },
      { src: makkah3, caption: "Revelation Exhibition" },
      { src: makkah4, caption: "Pemakaman Ma'la" },
    ],
  },
  {
    name: "Madinah",
    slug: "madinah",
    description: "Madinah adalah kota penuh ketenangan, tempat Rasulullah ﷺ membangun masyarakat Islam pertama. Di sinilah Masjid Nabawi berdiri dan Raudhah menjadi tempat yang selalu dirindukan setiap jamaah.",
    cover: coverMadinah,
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
    name: "Thoif",
    slug: "thoif",
    description: "Pegunungan sejuk bersejarah",
    cover: thoif1,
    images: [
      { src: thoif1, caption: "Masjid Abdullah bin Abbas" },
      { src: thoif2, caption: "Kuliner di Thoif" },
      { src: thoif3, caption: "Selfie di Thoif" },
      { src: thoif4, caption: "Cable Car Al Hada" },
      { src: thoif5, caption: "Jamaah di Miqat" },
      { src: thoif6, caption: "Shubra Palace" },
    ],
  },
  {
    name: "Al Ula",
    slug: "al-ula",
    description: "Warisan kuno UNESCO",
    cover: alUla1,
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
    name: "Jabal Khandamah",
    slug: "jabal-khandamah",
    description: "Gunung bersejarah di Makkah",
    cover: coverJabalKhandamah,
    images: [
      { src: coverJabalKhandamah, caption: "Foto Bersama di Jabal Khandamah" },
    ],
  },
  {
    name: "Jabal Nur",
    slug: "jabal-nur",
    description: "Tempat turunnya wahyu pertama",
    cover: coverJabalNur,
    images: [
      { src: coverJabalNur, caption: "Foto Bersama di Jabal Nur" },
    ],
  },
  {
    name: "Jabal Tsur",
    slug: "jabal-tsur",
    description: "Gua persembunyian Nabi ﷺ",
    cover: coverJabalTsur,
    images: [
      { src: coverJabalTsur, caption: "Foto Bersama di Jabal Tsur" },
    ],
  },
  {
    name: "Hudaibiyah",
    slug: "hudaibiyah",
    description: "Lokasi perjanjian bersejarah",
    cover: coverHudaibiyah,
    images: [
      { src: coverHudaibiyah, caption: "Foto Bersama di Hudaibiyah" },
    ],
  },
  {
    name: "Badr",
    slug: "badr",
    description: "Medan perang bersejarah",
    cover: coverBadr,
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
    name: "Jeddah",
    slug: "jeddah",
    description: "Gerbang Tanah Suci",
    cover: coverJeddah,
    images: [
      { src: jeddah1, caption: "Nonton Bola Al Nassr" },
      { src: jeddah2, caption: "City Tour Jeddah" },
      { src: jeddah3, caption: "Nonton Timnas Indonesia" },
      { src: jeddah4, caption: "Bandara King Abdulaziz" },
      { src: jeddah5, caption: "Kuliner di Jeddah" },
      { src: jeddah6, caption: "Tiba di Jeddah" },
    ],
  },
  {
    name: "Guide Mesir",
    slug: "guide-mesir",
    description: "Pemandu wisata di Mesir",
    cover: coverGuideMesir,
    images: [
      { src: coverGuideMesir, caption: "Foto Bersama di Mesir" },
    ],
  },
  {
    name: "Jamaah Private",
    slug: "jamaah-private",
    description: "Momen eksklusif jamaah privat",
    cover: coverJamaahPrivate,
    images: [
      { src: coverJamaahPrivate, caption: "Jamaah Private di Kereta" },
    ],
  },
];
