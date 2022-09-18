const keluarga = {
  "kepala Keluarga" : "Ayah",
  "Ibu Rumah Tangga" : "Ibu",
  anak : 2,
  introduceSelf : (kk, irt, child) => {
    console.log(`perkenalkan keluarga ini memiliki seorang ${kk} sebagai kepala keluarga dan ${irt} sebagai ibu rumah tangga, mereka memiliki anak ${child}`)
  }
}

keluarga.introduceSelf(keluarga["kepala Keluarga"], keluarga["Ibu Rumah Tangga"], keluarga.anak);
