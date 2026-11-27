 ![](https://img.shields.io/badge/Microverse-blueviolet)

# My Portfolio

``` sh
 Developing my portfolio page from scratch.
 This project gives detailed information about:
```
- Who Nicholas Amissah is
- My skills
- Projects I have worked on
- My Resume
- Recommendations from LinkedIn

## Built With

- React
- Vite and CSS

## Live Demo
[Live Demo Link](https://nicholas-amissah.vercel.app/)

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- An npm installed on your system.

#### Windows

[Visit the link to download the package](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x86.msi)

#### Linux

```sh
 sudo apt install nodejs
```

#### MacOS

[Visit the link to download the package](https://nodejs.org/dist/v18.15.0/node-v18.15.0.pkg)

### Setup

Clone this repository to your desired folder:

```sh
git clone https://github.com/atok624/Portfolio-Website.git && cd Portfolio-Website
```

### Install

Install this project with:

```sh
  npm install
```

### Production build and PWA

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 1000 --strictPort
```

Stop the development server first if it uses the same port. Service workers are enabled only in the production build; development remains free of offline caching.

The build generates a versioned `dist/sw.js` and pre-caches the application, project images, local font, installation icons and résumé. After one complete online visit, the homepage, case studies and résumé are available offline. The contact form needs a connection and never queues or caches messages.

Supporting browsers expose an **Install portfolio** button in the footer. On iOS, the footer explains how to add the portfolio to the home screen using Safari. Production hosting requires HTTPS; localhost is supported for testing.

New builds wait for the visitor to select **Update & reload**. **Later** keeps the current version active. The Vercel configuration prevents stale service-worker scripts from being served from HTTP caches.

To check offline behavior, open the production preview online, wait for **Available for offline viewing**, then enable Offline in the browser's Network panel and reload. Check a project URL and the résumé, and confirm that reconnecting enables the send button without clearing the message. Use a second build to check the update prompt. Actual message delivery must be checked separately.

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```


## Authors <a name="authors"></a>

👤 **Nicholas Amissah**

- GitHub: [Nicholas Amissah](https://github.com/atok624)
- Twitter: [Nicholas Amissah](https://twitter.com/MysticalAmissah)
- LinkedIn: [Nicholas Amissah](https://www.linkedin.com/in/nicholas-amissah-153b09154)

### 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/atok624/Portfolio-Website/issues).

## Acknowledgment

- Microverse' linting procedure

## 📝 License

This project is [MIT](./LICENSE) licensed.

