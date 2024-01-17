export const initialFormValues = {
  model: "",
  desain: "",
  jumlah: "",
  namaPenerimaUndangan: "",
  alamatPenerimaUndangan: "",
  nomorPenerimaUndangan: "",
  bundling: "",
  temaVideo: "",
  temaWebsite: "",
  paketVideo: "",
  paketWebsite: "",
  bahasa: "",
  foto: "",
  linkFoto: "",
  barcode: "",
  linkBarcode: "",
  denah: "",
  namaAwal: "",
  panggilanWanita: "",
  lengkapWanita: "",
  wanitaAnakKe: "",
  namaIbuWanita: "",
  namaBapakWanita: "",
  panggilanPria: "",
  lengkapPria: "",
  priaAnakKe: "",
  namaIbuPria: "",
  namaBapakPria: "",
  akad: "",
  namaAcaraAkad: "",
  lainnyaAkad: "",
  hariAkad: "",
  pukulAkad: "",
  zonaWaktuAkad: "",
  tempatAkad: "",
  mapsAkad: "",
  namaAcaraResepsi: "",
  hariResepsi: "",
  resepsi: "",
  lainnyaResepsi: "",
  pukulResepsi: "",
  zonaWaktuResepsi: "",
  tempatResepsi: "",
  mapsResepsi: "",
  musik: "",
  musik2: "",
  visibleWebsite: false,
  visibleVideo: false,
  visibleWebnVid: false,
  dataBundling: 0,
  loveStory: "",
  live: "",
  nomorRek: "",
  namaBank: "",
  atasNama: "",
  nomorRek2: "",
  namaBank2: "",
  atasNama2: "",
  nomorRekVideo: "",
  namaBankVideo: "",
  atasNamaVideo: "",
  nomorRekVideo2: "",
  namaBankVideo2: "",
  atasNamaVideo2: "",
  daftarHadir: "",
  nomorCatin: "",
  alamat: "",
  alamatVideo: "",
  namaPenerima: "",
  namaPenerimaVideo: "",
  rsvp: "",
  waKonfirmasi: "",
  waKonfirmasiVideo: "",
  pakaiFilter: "",
  filterig: "",
  frame: "",
  penandaLokasi: "",
  qrCode: "",
  visibleQR: false,
  denahNote: false,
};
export const initialJumlah = {
  jumlah: "",
  visibleJumlah: false,
  visibleUnder: false,
  visibleHigher: false,
  visibleButtonJumlah: true,
  kata: "",
  verif: false,
  errText: "",
};
export const jumlahChosen = [
  { value: "30", text: "30" },
  { value: "50", text: "50" },
  { value: "80", text: "80" },
  { value: "100", text: "100" },
  { value: "Jumlah lain", text: "Jumlah lain" },
];
export const penandaPilih = [
  { value: "QR Code", text: "QR Code" },
  { value: "Denah", text: "Denah" },
  { value: "QR Code dan Denah", text: "QR Code dan Denah" },
  { value: "Tanpa Penanda", text: "Tanpa Penanda" },
];

export const designs = [
  { value: "Tema F", text: "Tema F" },
  { value: "Tema H", text: "Tema H" },
  { value: "Tema Q", text: "Tema Q" },
  { value: "Tema R", text: "Tema R" },
  { value: "Tema S", text: "Tema S" },
  { value: "Tema W", text: "Tema W" },
  { value: "Tema X", text: "Tema X" },
  { value: "Tema Z", text: "Tema Z" },
  { value: "Tema AA", text: "Tema AA" },
  { value: "Tema AC", text: "Tema AC" },
  { value: "Tema AE", text: "Tema AE" },
  { value: "Tema CA", text: "Tema CA" },
  { value: "Tema JAWA", text: "Tema JAWA" },
  { value: "Tema BATAK", text: "Tema BATAK" },
  { value: "Tema COKLAT BARU", text: "Tema COKLAT BARU" },
  { value: "Tema PINK", text: "Tema PINK" },
];

export const pilihanBundling = [
  { value: "Website", text: "Website" },
  { value: "Video/Jpeg", text: "Video/Jpeg" },
  {
    value: "Website dan Video/Jpeg",
    text: "Website dan Video/Jpeg",
  },
];
export const nameAcaraAkad = [
  { value: "Akad Nikah", text: "Akad Nikah" },
  { value: "Resepsi", text: "Resepsi" },
  { value: "Pemberkatan", text: "Pemberkatan" },
  { value: "Lainnya", text: "Lainnya" },
];
export const nameAcaraResepsi = [
  { value: "Akad Nikah", text: "Akad Nikah" },
  { value: "Resepsi", text: "Resepsi" },
  { value: "Pemberkatan", text: "Pemberkatan" },
  { value: "Lainnya", text: "Lainnya" },
];
export const namaPertama = [
  { value: "Wanita", text: "Wanita" },
  { value: "Pria", text: "Pria" },
];
export const bahasaPackages = [
  { value: "Indonesia", text: "Indonesia" },
  { value: "Inggris", text: "Inggris" },
];
export const pakaiFilterPackages = [
  { value: "Iya", text: "Iya" },
  { value: "Tidak", text: "Tidak" },
];
export const filterPackages = [
  { value: "Filter Wedding P", text: "Filter Wedding P" },
  { value: "Filter Wedding Q", text: "Filter Wedding Q" },
  { value: "Filter Wedding W", text: "Filter Wedding W" },
  { value: "Filter Wedding X", text: "Filter Wedding X" },
  { value: "Filter Wedding Y", text: "Filter Wedding Y" },
  { value: "Filter Wedding Z", text: "Filter Wedding Z" },
  { value: "Filter Wedding AA", text: "Filter Wedding AA" },
  { value: "Filter Wedding AC", text: "Filter Wedding AC" },
  { value: "Filter Wedding AD", text: "Filter Wedding AD" },
  { value: "Filter Wedding AE", text: "Filter Wedding AE" },
  { value: "Filter Wedding AF", text: "Filter Wedding AF" },
  { value: "Filter Wedding 01", text: "Filter Wedding 01" },
  { value: "Filter Wedding 02", text: "Filter Wedding 02" },
  { value: "Filter Wedding Jawa", text: "Filter Wedding Jawa" },
];
export const framePackages = [
  { value: "Frame 1", text: "Frame 1" },
  { value: "Frame 1 dan 2", text: "Frame 1 dan 2" },
  { value: "Frame 1, 2 dan 3", text: "Frame 1, 2 dan 3" },
];
export const fotoPackages = [
  { value: "Dengan Foto", text: "Dengan Foto" },
  { value: "Tanpa Foto", text: "Tanpa Foto" },
  { value: "Animasi", text: "Animasi" },
];
export const zona = [
  { value: "WIB", text: "WIB" },
  { value: "WITA", text: "WITA" },
  { value: "WIT", text: "WIT" },
];
export const namaHari = [
  { value: "Senin", text: "Senin" },
  { value: "Selasa", text: "Selasa" },
  { value: "Rabu", text: "Rabu" },
  { value: "Kamis", text: "Kamis" },
  { value: "Jumat", text: "Jumat" },
  { value: "Sabtu", text: "Sabtu" },
  { value: "Minggu", text: "Minggu" },
];
export const videoThemes = [
  { value: "Tema A", text: "Tema A" },
  { value: "Tema B", text: "Tema B" },
  { value: "Tema C", text: "Tema C" },
  { value: "Tema D", text: "Tema D" },
  { value: "Tema E", text: "Tema E" },
  { value: "Tema F", text: "Tema F" },
  { value: "Tema G", text: "Tema G" },
  { value: "Tema H", text: "Tema H" },
  { value: "Tema J", text: "Tema J" },
  { value: "Tema K", text: "Tema K" },
  { value: "Tema L", text: "Tema L" },
  { value: "Tema M", text: "Tema M" },
  { value: "Tema N", text: "Tema N" },
  { value: "Tema P", text: "Tema P" },
  { value: "Tema Q", text: "Tema Q" },
  { value: "Tema R", text: "Tema R" },
  { value: "Tema S", text: "Tema S" },
  { value: "Tema T", text: "Tema T" },
  { value: "Tema V", text: "Tema V" },
  { value: "Tema W", text: "Tema W" },
  { value: "Tema X", text: "Tema X" },
  { value: "Tema Y", text: "Tema Y" },
  { value: "Tema Z", text: "Tema Z" },
  { value: "Tema AA", text: "Tema AA" },
  { value: "Tema AB", text: "Tema AB" },
  { value: "Tema AC", text: "Tema AC" },
  { value: "Tema AD", text: "Tema AD" },
  { value: "Tema AE", text: "Tema AE" },
  { value: "Tema AF", text: "Tema AF" },
  { value: "Tema AG", text: "Tema AG" },
  { value: "Tema 01", text: "Tema 01" },
  { value: "Tema 02", text: "Tema 02" },
  { value: "Tema 03", text: "Tema 03" },
  { value: "Tema 04", text: "Tema 04" },
  { value: "Tema AQ1", text: "Tema AQ1" },
  { value: "Tema AQ2", text: "Tema AQ2" },
  { value: "Tema AQ3", text: "Tema AQ3" },
  { value: "Tema JAWA 02", text: "Tema JAWA 02" },
  { value: "Tema W BATAK", text: "Tema W BATAK" },
  { value: "Tema LAMA", text: "Tema LAMA" },
];
export const webThemes = [
  { value: "Tema P", text: "Tema P" },
  { value: "Tema Q", text: "Tema Q" },
  { value: "Tema W", text: "Tema W" },
  { value: "Tema X", text: "Tema X" },
  { value: "Tema Y", text: "Tema Y" },
  { value: "Tema Z", text: "Tema Z" },
  { value: "Tema AA", text: "Tema AA" },
  { value: "Tema AC", text: "Tema AC" },
  { value: "Tema AD", text: "Tema AD" },
  { value: "Tema AE", text: "Tema AE" },
  { value: "Tema AF", text: "Tema AF" },
  { value: "Tema AG", text: "Tema AG" },
  { value: "Tema 01", text: "Tema 01" },
  { value: "Tema 02", text: "Tema 02" },
  { value: "Tema 03", text: "Tema 03" },
  { value: "Tema 04", text: "Tema 04" },
  { value: "Tema Jawa", text: "Tema Jawa" },
  { value: "Tema Minang", text: "Tema Minang" },
  { value: "Tema Aqiqah", text: "Tema Aqiqah" },
];

export const videoPackages = [
  { value: "Gambar/Jpeg", text: "Gambar/Jpeg" },
  { value: "Video 15/30 detik", text: "Video 15/30 detik" },
  { value: "Video 60 detik", text: "Video 60 detik" },
];
