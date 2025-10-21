import { f as u, j as e, r as t, G as x } from "./game2.js";
function f() {
  const [l, i] = t.useState(0),
    [r, n] = t.useState([]),
    [o, c] = t.useState([]),
    m = () => {
      dallinger
        .get("/api/init", {
          urlParams: window.location.search,
          roundNumber: roundNum,
        })
        .done((s) => {
          s.inventory
            ? n(s.inventory)
            : (n([]),
              alert(
                "Sorry! An error occurred in communicating with the server."
              )),
            c([]);
        });
    };
  return (
    t.useEffect(() => {
      m();
    }, []),
    t.useEffect(() => {
      const s = [...r, ...o],
        d = Math.max(...s.filter((a) => !a.tool).map((a) => a.value));
      i(Math.max(d, 0));
    }, [r, o]),
    e.jsxs("div", {
      className: "p-2",
      children: [
        e.jsx(x, {
          elements: r,
          setElements: n,
          placedElements: o,
          setPlacedElements: c,
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
u(document.getElementById("root")).render(
  e.jsx(t.StrictMode, { children: e.jsx(f, {}) })
);
