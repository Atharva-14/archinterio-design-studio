/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "images.unsplash.com"],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1518710843675-2540dd79065c/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1600271772470-bd22a42787b3/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1505142468610-359e7d316be0/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1486915309851-b0cc1f8a0084/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1507041957456-9c397ce39c97/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "/photo-1485433592409-9018e83a1f0d/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/About%2Fabout_interior_img.jpg",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_1.jpg",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_2.jpg",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_3.jpg",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_4.jpg",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_5.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_6.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMANKAR%20RESIDENCE%2Fmankar_residence_7.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_1.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_2.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_3.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_4.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_5.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHANTI%20VILLA%2Fshanti_villa_6.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHUBHAM%20RESIDENCE%2Fshubham_residence_1.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHUBHAM%20RESIDENCE%2Fshubham_residence_2.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSHUBHAM%20RESIDENCE%2Fshubham_residence_3.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSURGITECH%20MULTISPECIALITY%20HOSPITAL%2Fsurgitech_multispecialty_hospital_1.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSURGITECH%20MULTISPECIALITY%20HOSPITAL%2Fsurgitech_multispecialty_hospital_2.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FSURGITECH%20MULTISPECIALITY%20HOSPITAL%2Fsurgitech_multispecialty_hospital_3.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_1.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_2.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_3.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_4.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_5.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_6.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_7.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_8.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FYOGESH%20RESIDENCE%2Fyogesh_residence_9.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FPADMAVATI%20RESIDENCE%2Fpadmavati_residence_1.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FPADMAVATI%20RESIDENCE%2Fpadmavati_residence_2.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FPADMAVATI%20RESIDENCE%2Fpadmavati_residence_3.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FPADMAVATI%20RESIDENCE%2Fpadmavati_residence_4.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FPADMAVATI%20RESIDENCE%2Fpadmavati_residence_5.png",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "firebasestorage.googleapis.com",
  //       port: "",
  //       pathname:
  //         "/v0/b/archinterio-portfolio.appspot.com/o/Projects%2FMIRAVAT%2Fmiravat_1.png",
  //     },
  //   ],
  // },
};

export default nextConfig;
