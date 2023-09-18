const routes = [
  {
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
      return `Welcome ${username}, using password ${password}!`;
    },
  },
  {
    method: "*",
    path: "/login",
    handler: (request, h) => {
      return h
        .response(
          "Halaman login tidak bisa diakses menggunakan method tersebut"
        )
        .code(400);
    },
  },
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
      return h
        .response("Homepage tidak bisa diakses menggunakan method tersebut")
        .code(400);
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
      return h
        .response("About page tidak bisa diakses menggunakan method tersebut")
        .code(400);
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
    path: "/hello/{username?}",
    handler: (request, h) => {
      return h
        .response("Hello tidak bisa diakses menggunakan method tersebut")
        .code(400);
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return h.response("Halaman tidak ditemukan").code(404);
    },
  },
];

module.exports = routes;
