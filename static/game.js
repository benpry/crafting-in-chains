import { f as x, j as e, r as t, G as f } from "./game2.js";
function h() {
  const [l, i] = t.useState(0),
    [n, o] = t.useState([]),
    [r, c] = t.useState([]),
    m = "cooking",
    d = () => {
      dallinger
        .get("/api/init", {
          urlParams: window.location.search,
          roundNumber: roundNumber,
        })
        .done((s) => {
          console.log("got data", s),
            s.inventory
              ? o(s.inventory)
              : (o([]),
                alert(
                  "Sorry! An error occurred in communicating with the server."
                )),
            c([]);
        });
    };
  return (
    t.useEffect(() => {
      d();
    }, []),
    t.useEffect(() => {
      const s = [...n, ...r],
        u = Math.max(...s.filter((a) => !a.tool).map((a) => a.value));
      i(Math.max(u, 0));
    }, [n, r]),
    e.jsxs("div", {
      className: "p-2",
      children: [
        e.jsx(f, {
          elements: n,
          setElements: o,
          placedElements: r,
          setPlacedElements: c,
          domain: m,
          setActions: () => {},
        }),
        e.jsx("div", {
          className: "flex flex-col items-center justify-center mt-4",
          children: e.jsxs("h1", {
            id: "score-display",
            className: "text-2xl",
            children: [
              "Score: ",
              e.jsx("strong", { children: Math.round(l * 100) / 100 }),
            ],
          }),
        }),
      ],
    })
  );
}
x(document.getElementById("root")).render(
  e.jsx(t.StrictMode, { children: e.jsx(h, {}) })
);
