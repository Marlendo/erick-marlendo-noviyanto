export interface IPortfilioList {
  type: 'mobile apps' | 'web apps';
  title: string;
  desc: string;
  image: string;
}

export function portfolioService() {
  return [
    {
      type: 'mobile apps',
      title: 'Indosat Saldo Mobo Apps',
      desc: `Indosat Saldo Mobo Apps is a mobile application developed by Indosat using Ionic and Cordova. It is a hybrid app, designed to run smoothly on both Android and iOS platforms.
The app was initially built for voucher injection, and is now being progressively enhanced to assist and streamline the daily operations of Indosat’s partner outlets.

I was responsible as the mobile developer, handling the implementation of core features, cross-platform optimization, and ongoing improvements to ensure a smooth user experience.`,
      image: "/pf_mobile_mobo.png"
    },
    {
      type: 'mobile apps',
      title: 'Seeds Investment',
      desc: `Seeds is a mobile social investing application built using React Native. It is designed for both Android and iOS platforms, providing a seamless and real-time experience for users who want to invest in stocks and crypto assets together with their friends.

The app includes real-time charting for live asset tracking, real-time chat for group discussions, and social investing features that allow users to create or join investment groups. These features aim to make investing more interactive, social, and accessible.

I was responsible as the mobile developer, handling the implementation of real-time features (chart and chat), state management, and optimizing the app for cross-platform performance and user engagement.`,
      image: "/pf_mobile_seeds.png"
    },
    {
      type: 'mobile apps',
      title: 'Weplay Apps',
      desc: `Weplay is a mobile application built using React Native, designed to run smoothly on both Android and iOS platforms. The app helps users easily book sports fields online and find sports buddies to play with, making it more convenient to stay active and social.

Weplay also features real-time chat, allowing users to communicate instantly, schedule matches, or coordinate with new teammates. Whether you're into futsal, badminton, or basketball, the app connects you with people who share the same sports interests in your area.

I was responsible as the mobile developer, focusing on the implementation of booking features, real-time chat integration, and optimizing cross-platform performance to deliver a seamless user experience.`,
      image: "/pf_mobile_weplay_v1.png"
    }, 
    {
      type: 'mobile apps',
      title: 'Untung Marketplace Apps',
      desc: `Untung is a marketplace mobile application developed for CV Untung Sukses Abadi, built using the Ionic 3 framework. As a hybrid app, it is designed to run on both Android and iOS devices, providing a smooth and accessible experience for users.

The app serves as a platform for buying and selling various products, helping local businesses and individuals reach more customers through mobile commerce. It includes essential marketplace features such as product listings, search and filter, order management, and user accounts.

I was responsible as the mobile developer, handling the development of core marketplace functionalities, UI components, and ensuring cross-platform compatibility for optimal performance on both Android and iOS.`,
      image: "/pf_mobile_untung.png"
    },
    {
      type: 'mobile apps',
      title: 'Cantik Homeservices Apps',
      desc: `Cantik Homeservices is a mobile application built using React Native, designed for both Android and iOS platforms. The app provides on-demand salon and massage services, allowing users to book beauty treatments and wellness services directly to their homes.

With features like service scheduling, location-based booking, and real-time updates, Cantik Homeservices aims to bring convenience, comfort, and a premium experience to users who prefer self-care at home.

I was responsible as the mobile developer, implementing the booking system, managing state and user flows, and ensuring smooth performance across platforms with an intuitive and user-friendly interface.`,
      image: "/pf_mobile_salon.png"
    },
    {
      type: 'mobile apps',
      title: 'Weplay Apps V2',
      desc: `Weplay v2 is the redesigned and improved version of the original Weplay app, built using React Native for both Android and iOS. Just like the first version, it helps users book sports fields online, find teammates to play with, and chat in real-time — but now with a much more modern and polished user interface.

This version focuses heavily on better user experience, introducing a cleaner layout, smoother animations, and enhanced performance to make the app feel faster and more intuitive. Weplay v2 makes social sports planning easier and more enjoyable than ever.

I was responsible as the mobile developer, handling the full UI/UX revamp, optimizing performance, and improving the integration of real-time features such as chat and booking updates.`,
      image: "/pf_mobile_weplay_v2.png"
    },
    {
      type: 'web apps',
      title: 'Woowa Web Apps',
      desc: `Woowa is a web application built using React.js for the frontend and Node.js for the backend. It serves as an unofficial WhatsApp admin dashboard that helps users manage and automate their WhatsApp accounts. The platform enables sending broadcast messages, managing multiple WhatsApp sessions, creating an open API for programmatic message sending, and authenticating accounts via QR code scanning. It also supports webhook integration for real-time event handling and provides an intuitive interface similar to WhatsApp Web for contact and message management.

I was responsible as a fullstack developer, handling the implementation of frontend components, backend API logic, WhatsApp service integration, QR authentication, and real-time webhook processing to ensure a seamless and efficient user experience.`,
      image: "/pf_web_woowa.png"
    },
    {
      type: 'web apps',
      title: 'Sinbad Admin Celler Center Web Apps',
      desc: `Sinbad Admin Seller Center is a web dashboard application designed for managing all products and related data from Sinbad’s partner suppliers, including discounts, stores, warehouses, and products. The platform helps streamline the maintenance and administration process for sellers.

I was responsible for developing new features for the Sinbad Seller Center using both React and Angular, focusing on enhancing functionality, improving user workflows, and ensuring smooth integration across the system.`,
      image: "/pf_web_sinbad.png"
    },
    {
      type: 'web apps',
      title: 'Emoji Web Apps',
      desc: `Emoji Apps is a web application developed for internal use by BCA (Bank Central Asia), built using React.js for the frontend and Spring Boot (Java) for the backend. The app functions as an OCR (Optical Character Recognition) system, designed to automate the extraction and processing of text from images and documents.

This system helps streamline data entry and document management within BCA, improving accuracy and operational efficiency.

I was responsible as a fullstack developer, implementing the frontend interfaces with React.js and developing backend OCR processing services with Spring Boot, ensuring seamless integration and reliable performance.`,
      image: "/pf_web_emoji.png"
    },
    {
      type: 'web apps',
      title: 'Cantik Homeservices Web Apps',
      desc: `This website serves as an introduction and promotional platform for Cantik Homeservices, showcasing the app’s features and services. Built using HTML, CSS, and JavaScript, the site provides a clean and responsive design that highlights on-demand salon and massage services available through the mobile app.

I was responsible for developing the website’s frontend, focusing on user-friendly navigation, visual presentation, and ensuring compatibility across different browsers and devices.`,
      image: "/pf_web_salon.png"
    },
    {
      type: 'web apps',
      title: 'UCC Web Apps',
      desc: `UCC Web Apps is a universal campus consortium system designed to unify various campus systems worldwide. Built using Next.js, the platform aims to integrate and standardize administrative, academic, and communication tools across multiple universities, creating a seamless experience for students, staff, and faculty.

I was responsible for contributing to the development and maintenance of the web application, focusing on feature implementation, system integration, and ensuring scalability to support a global network of campuses.`,
      image: "/pf_web_ucc.png"
    }
  ]
}
