export const config = { //projede sonradan değiştirme ihtimalinin olduğu yerleri buraya yaptık

//appConfig olarak değiştirebiliriz burayı eğer hata alırsam nextjs ile ilgili bi uyarı değil esnit le alakalı 
  project: {
    name: "Olex",
    slogan: "Kahramanmaraş olex Films şubesi Mükemmel koruma, kusursuz görünüm.",
    description:
      "Olex Films olarak her aracın en yüksek seviyede koruma ve bakımı hak ettiğine inanıyoruz. Bu nedenle yenilik, hassasiyet ve mükemmelliği bir araya getirerek müşterilerimizin araçlarının güzelliğini, değerini ve performansını yıllar boyunca korumalarına yardımcı oluyoruz.",
  },
  contact: {
    info: {
      phone1: {
        value: "+1(312)813 25 64",
        icon: "pi pi-phone",
        link: "tel:+13128132564",
      },
      phone2: {
        value: "+1(312)813 25 61",
        icon: "pi pi-headphones",
        link: "tel:+13128132561",
      },
      email: {
        value: "info@olexfilms.com",
        icon: "pi pi-envelope",
        link: "mailto:info@olexfilms.com",
      },
      address: {
        value: "Yavuz Selim, Mehmet Nuri Arıkan Cd. Küçük sanayi sitesi no: 68/A, 46080 Dulkadiroğlu/Kahramanmaraş",
        icon: "pi pi-map-marker",
        link: "https://www.google.com/maps/search/Yavuz+Selim,+Mehmet+Nuri+Ar%C4%B1kan+Cd.+K%C3%BC%C3%A7%C3%BCk+sanayi+sitesi+no:+68/A,+46080+Dulkadiro%C4%9Flu/Kahramanmara%C5%9F",
      },
    },
    website: "https://olexfilms.com",
    map: {
      embed:
        "https://www.google.com/maps/search/Olex+Films+Kahramanmaras",
    },
    socialMedia: {
      twitter: {
        url: "https://x.com",
        icon: "pi pi-twitter",
      },
      facebook: {
        url: "https://facebook.com",
        icon: "pi pi-facebook",
      },
      instagram: {
        url: "https://instagram.com",
        icon: "pi pi-instagram",
      },
      whatsapp: {
        url: "https://wa.me/905399414680?text=Merhaba%2C%20Olex%20Films%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
        icon: "pi pi-whatsapp",
      },
      linkedin: {
        url: "https://linkedin.com",
        icon: "pi pi-linkedin",
      },
      youtube: {
        url: "https://youtube.com",
        icon: "pi pi-youtube",
      },
    },
  },
  apiURL: "https://mycampusmates.com/app",
  educationTerms: [
    { label: "Fall", value: "FALL_SEMESTER" },
    { label: "Spring", value: "SPRING_SEMESTER" },
  ],
  genders: [
    { label: "Female", value: "FEMALE" },
    { label: "Male", value: "MALE" },
  ]
};
