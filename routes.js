const routes = [
  {
    method: "GET",
    path: "/homepage",
    handler: () => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/homepage",
    handler: (request, h) => {
      return "Homepage tidak bisa diakses menggunakan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: () => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "About page tidak bisa diakses menggunakan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{username?}",
    handler: (request, h) => {
      const { username = "Stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `Hai ${username}!`;
      }

      return `Hello ${username}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
