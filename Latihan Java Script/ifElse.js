function scoreChecker(score) {
  let result;
  // TODO
  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A.";
  } else if (score > 80) {
    result = "Anda mendapatkan nilai B.";
  } else if (score >= 70) {
    result = "Anda mendapatkan nilai C.";
  } else if (score >= 60) {
    result = "Anda mendapatkan nilai D.";
  } else {
    result = "Anda mendaptkan nilai E.";
  }

  // Jangan hapus kode ini
  return result;
}

console.log(scoreChecker(65));


