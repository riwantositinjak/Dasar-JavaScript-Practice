// object untuk dijadikan parameter di function
const biodata = {
  nama: "Riwanto",
  pekerjaan: "Freelancer",
  umur: 26,
};

const checkBiodata = ({ nama, pekerjaan, umur }) => {
  console.log(`nama saya adalah ${nama}`);
  console.log(`saya bekerja sebagai ${pekerjaan}`);
  console.log(`saya berusia ${umur} tahun`);
};

checkBiodata(biodata)