export const config = { //projede sonradan değiştirme ihtimalinin olduğu yerleri buraya yaptık

//appConfig olarak değiştirebiliriz burayı eğer hata alırsam nextjs ile ilgili bi uyarı değil esnit le alakalı 
  project: {
    name: "Olex Films",
    slogan: "Mükemmel koruma, kusursuz görünüm.",
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
        value: "1325 W Webster Ave, Chicago, IL 60614, USA",
        icon: "pi pi-address-book",
        link: "https://maps.app.goo.gl/kt8rZDCESpodJ66Q7",
      },
    },
    website: "https://olexfilms.com",
    map: {
      embed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.73226813356894!2d-87.66233122998248!3d41.921503806323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e3c2861885%3A0xbb24fc26bc6a201d!2s1325%20W%20Webster%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20USA!5e0!3m2!1sen!2sbe!4v1729095805299!5m2!1sen!2sbe",
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
