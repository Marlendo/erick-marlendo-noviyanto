export interface IPortfilioList {
  type: 'mobile' | 'web';
  src: string;
  original: string;
  tags: string[];
  width: number;
  height: number;
  caption: string;
}

function tag(name: 'android' | 'ios' | 'backend' | 'web app') {
  return { value: name, title: name }
}

export function portfolioService() {
  return [
    {
      type: '',
      src: "/public/pf_mobile_mobo.png",
      original: "/public/pf_mobile_mobo.png",
      tags: [
        tag('android'),
        tag('ios')
      ],
      width: 100,
      height: 100,
      caption: `Indosat Saldo Mobo Apps is a mobile application developed by Indosat using Ionic and Cordova. It is a hybrid app, designed to run smoothly on both Android and iOS platforms.
The app was initially built for voucher injection, and is now being progressively enhanced to assist and streamline the daily operations of Indosat’s partner outlets.

I was responsible as the mobile developer, handling the implementation of core features, cross-platform optimization, and ongoing improvements to ensure a smooth user experience.`,
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      original: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      tags: [
        { value: "Nature", title: "Nature" },
        { value: "Flora", title: "Flora" },
      ],
      width: 100,
      height: 50,
      caption: "Boats (Jeshu John - designerspics.com)",
    }
  ]
}
