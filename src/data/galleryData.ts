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
import khandamah2 from "@/assets/khandamah-2.jpg";
import khandamah3 from "@/assets/khandamah-3.jpg";
import khandamah4 from "@/assets/khandamah-4.jpg";
import khandamah5 from "@/assets/khandamah-5.jpg";
import khandamah6 from "@/assets/khandamah-6.jpg";
import khandamah7 from "@/assets/khandamah-7.jpg";
import khandamah8 from "@/assets/khandamah-8.jpg";
import khandamah9 from "@/assets/khandamah-9.jpg";
import coverJabalNur from "@/assets/cover-jabal-nur.jpg";
import coverJabalTsur from "@/assets/cover-jabal-tsur.jpg";
import tsur2 from "@/assets/tsur-2.jpg";
import tsur3 from "@/assets/tsur-3.jpg";
import tsur4 from "@/assets/tsur-4.jpg";
import coverHudaibiyah from "@/assets/cover-hudaibiyah.jpg";
import hudaibiyah1 from "@/assets/hudaibiyah-1.jpg";
import hudaibiyah2 from "@/assets/hudaibiyah-2.jpg";
import hudaibiyah4 from "@/assets/hudaibiyah-4.jpg";
import coverBadr from "@/assets/cover-badr.jpg";
import coverJeddah from "@/assets/cover-jeddah.jpg";
import coverGuideMesir from "@/assets/cover-guide-mesir.jpg";
import mesir1 from "@/assets/mesir-1.jpg";
import mesir2 from "@/assets/mesir-2.jpg";
import mesir3 from "@/assets/mesir-3.jpg";
import mesir4 from "@/assets/mesir-4.jpg";
import mesir5 from "@/assets/mesir-5.jpg";
import mesir6 from "@/assets/mesir-6.jpg";
import mesir7 from "@/assets/mesir-7.jpg";
import coverJamaahPrivate from "@/assets/cover-jamaah-private.jpg";
import private1 from "@/assets/private-1.jpg";
import private2 from "@/assets/private-2.jpg";
import private3 from "@/assets/private-3.jpg";
import private4 from "@/assets/private-4.jpg";
import private5 from "@/assets/private-5.jpg";
import private6 from "@/assets/private-6.jpg";
import private7 from "@/assets/private-7.jpg";

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
    description: "Thaif menyimpan kisah perjuangan Rasulullah ﷺ ketika berdakwah di tengah penolakan yang berat. Dari kota pegunungan yang sejuk ini, kita belajar tentang kesabaran dan keteguhan dalam menyampaikan kebenaran.",
    cover: thoif1,
    images: [
      { src: thoif2, caption: "Kuliner di Thoif" },
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
    description: "Al Ula menghadirkan lanskap gurun yang luar biasa indah dengan jejak peradaban kuno yang masih tersisa hingga hari ini. Perjalanan ke sini terasa seperti menelusuri kisah sejarah yang membentang di tengah padang pasir.",
    cover: alUla1,
    images: [
      { src: alUla2, caption: "Wisata Old Town" },
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
    name: "Khandamah & Kuday",
    slug: "jabal-khandamah",
    description: "Dari kawasan perbukitan Khandamah dan Kuday, kita dapat melihat panorama kota Makkah yang berkembang mengelilingi Masjidil Haram. Pemandangan ini sering membuat jamaah berhenti sejenak untuk mengagumi kebesaran kota suci ini.",
    cover: coverJabalKhandamah,
    images: [
      { src: khandamah6, caption: "Jamaah Sunset di Khandamah" },
      { src: khandamah6, caption: "Jamaah Sunset di Khandamah" },
      { src: khandamah7, caption: "Foto Bersama Jamaah" },
      { src: khandamah8, caption: "Dinner Romantis di Khandamah" },
      { src: khandamah9, caption: "Panorama Abraj Al-Bait" },
    ],
  },
  {
    name: "Gua Hira",
    slug: "jabal-nur",
    description: "Di Gua Hira, Rasulullah ﷺ menerima wahyu pertama yang menjadi awal turunnya Al-Qur'an. Tempat ini mengingatkan kita pada momen ketika cahaya Islam pertama kali menyinari dunia.",
    cover: coverJabalNur,
    images: [
      { src: khandamah2, caption: "Jamaah di Puncak" },
      { src: khandamah2, caption: "Jamaah di Puncak" },
      { src: khandamah3, caption: "Di Dalam Gua" },
      { src: khandamah4, caption: "Panorama dari Puncak" },
      { src: khandamah5, caption: "Pendakian Jabal Nur" },
    ],
  },
  {
    name: "Jabal Tsur",
    slug: "jabal-tsur",
    description: "Di Jabal Tsur, Rasulullah ﷺ dan Abu Bakar bersembunyi saat perjalanan hijrah menuju Madinah. Gua ini menjadi saksi kepercayaan penuh kepada pertolongan Allah di saat-saat yang paling sulit.",
    cover: coverJabalTsur,
    images: [
      { src: coverJabalTsur, caption: "Foto Bersama di Jabal Tsur" },
      { src: tsur2, caption: "Jamaah di Gua Tsur" },
      { src: tsur3, caption: "Di Depan Gua Tsur" },
      { src: tsur4, caption: "Foto Bersama Jamaah" },
    ],
  },
  {
    name: "Hudaibiyah",
    slug: "hudaibiyah",
    description: "Di tempat inilah Perjanjian Hudaibiyah terjadi, sebuah peristiwa yang tampak sederhana namun menjadi titik penting kemenangan dakwah Islam. Kisah ini mengajarkan kesabaran dan kebijaksanaan Rasulullah ﷺ dalam menghadapi tantangan.",
    cover: coverHudaibiyah,
    images: [
      { src: coverHudaibiyah, caption: "Foto Bersama di Hudaibiyah" },
      { src: hudaibiyah1, caption: "Bersama Unta di Hudaibiyah" },
      { src: hudaibiyah2, caption: "Jamaah di Desa Tradisional" },
      { src: hudaibiyah4, caption: "Foto Bersama Rombongan" },
    ],
  },
  {
    name: "Badr",
    slug: "badr",
    description: "Di lembah Badr inilah terjadi salah satu pertempuran paling penting dalam sejarah Islam. Kisah kemenangan kaum muslimin di tempat ini selalu menjadi pengingat tentang pertolongan Allah bagi orang-orang yang beriman.",
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
    description: "Jeddah telah lama menjadi gerbang bagi para jamaah yang datang menuju Tanah Suci. Kota pesisir ini memadukan sejarah perjalanan haji dengan wajah modern Arab Saudi saat ini.",
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
    name: "Jamaah Private",
    slug: "jamaah-private",
    description: "Pendampingan private memberikan kesempatan bagi jamaah untuk menikmati perjalanan ibadah dengan lebih tenang dan personal. Setiap lokasi dapat dijelaskan dengan lebih mendalam sesuai kebutuhan jamaah.",
    cover: coverJamaahPrivate,
    images: [
      { src: coverJamaahPrivate, caption: "Jamaah Private di Kereta" },
      { src: private1, caption: "Kuliner Khas Arab" },
      { src: private2, caption: "Jamaah di Taman Kurma" },
      { src: private3, caption: "Dinner View Ka'bah" },
      { src: private4, caption: "Ziarah Masjid Bersejarah" },
      { src: private5, caption: "Kumpul Bersama Tim" },
      { src: private6, caption: "Jamaah di Jabal Uhud" },
      { src: private7, caption: "Foto Bersama di Ka'bah" },
    ],
  },
  {
    name: "Guide Mesir",
    slug: "guide-mesir",
    description: "Berpengalaman mendampingi tamu sejak tahun 2021 ke berbagai destinasi bersejarah di Mesir, mulai dari Kairo, Alexandria, Giza, Sinai, Matruh, Siwa, Hurghada, hingga Luxor",
    cover: coverGuideMesir,
    images: [
      { src: coverGuideMesir, caption: "Foto Bersama di Mesir" },
      { src: mesir1, caption: "Jeep Safari di Gurun" },
      { src: mesir2, caption: "Naik Unta di Piramida" },
      { src: mesir3, caption: "Selfie di Piramida" },
      { src: mesir4, caption: "Siwa Protected Area" },
      { src: mesir5, caption: "Eksplorasi Tebing" },
      { src: mesir6, caption: "City Tour Mesir" },
      { src: mesir7, caption: "Istirahat di Oasis" },
    ],
  },
];
