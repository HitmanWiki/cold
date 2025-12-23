import {
    s as It,
    n as Et,
    g as Ht,
    q as Dt,
    u as Bt,
    v as jt,
    w as Pt,
    r as Vt
} from "../chunks/scheduler.Cviwv6GX.js";
import {
    S as Ct,
    i as Lt,
    e as a,
    H as Ot,
    k as kt,
    y as Ft,
    c as l,
    z as St,
    d as r,
    o as e,
    h as t,
    u as zt,
    s as k,
    t as F,
    v as Nt,
    f as x,
    a as i,
    b as S,
    A as z,
    w as Gt,
    g as xt,
    B as ce,
    n as Tt,
    l as Mt,
    x as qt
} from "../chunks/index.DopQeKMz.js";
import {
    h as At,
    g as Rt
} from "../chunks/new_head-1.B08dDXaL.js";
import "../chunks/entry.B3MiGN0c.js";
new TextEncoder;
const Ut = !1;
async function Kt({
    fetch: n
}) {
    const u = async () => ({
            item: await (await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0x2bbf5243e49e8f0025988754dac6620ab0d3e162")).json()
        }),
        f = async () => ({
            item: await (await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0xa43fe16908251ee70ef74718545e4fe6c5ccec9f")).json()
        }),
        v = async () => ({
            item: await (await n("https://api.dexscreener.com/latest/dex/pairs/ethereum/0x5c6919b79fac1c3555675ae59a9ac2484f3972f5")).json()
        });
    return {
        price: await u(),
        pricePepe: await f(),
        priceHoppy: await v()
    }
}
const ra = Object.freeze(Object.defineProperty({
    __proto__: null,
    load: Kt,
    prerender: Ut
}, Symbol.toStringTag, {
    value: "Module"
}));

function Wt(n) {
    let u, f, v, d, _, m, c, C, g, A, M, w, b, y, T, H, p = `  <script type="application/ld+json">{
       "@context": "https://schema.org",
       "@type": "Website",
       "name": "${n[0]},
       "url": "${n[3]}",
       "logo": ${n[2]}  }<\/script>`,
        U;
    return document.title = u = n[0], {
        c() {
            f = a("meta"), v = a("meta"), d = a("meta"), m = a("meta"), c = a("meta"), C = a("meta"), g = a("meta"), A = a("meta"), M = a("meta"), w = a("meta"), b = a("meta"), y = a("meta"), T = a("meta"), H = new Ot(!1), U = kt(), this.h()
        },
        l(h) {
            const s = Ft("svelte-1ul9k7v", document.head);
            f = l(s, "META", {
                name: !0,
                content: !0
            }), v = l(s, "META", {
                property: !0,
                content: !0
            }), d = l(s, "META", {
                property: !0,
                content: !0
            }), m = l(s, "META", {
                property: !0,
                content: !0
            }), c = l(s, "META", {
                property: !0,
                content: !0
            }), C = l(s, "META", {
                property: !0,
                content: !0
            }), g = l(s, "META", {
                property: !0,
                content: !0
            }), A = l(s, "META", {
                name: !0,
                content: !0
            }), M = l(s, "META", {
                property: !0,
                content: !0
            }), w = l(s, "META", {
                property: !0,
                content: !0
            }), b = l(s, "META", {
                name: !0,
                content: !0
            }), y = l(s, "META", {
                name: !0,
                content: !0
            }), T = l(s, "META", {
                name: !0,
                content: !0
            }), H = St(s, !1), U = kt(), s.forEach(r), this.h()
        },
        h() {
            e(f, "name", "description"), e(f, "content", n[1]), e(v, "property", "og_site_name"), e(v, "content", n[3]), e(d, "property", "og:url"), e(d, "content", _ = "https://" + n[3]), e(m, "property", "og:type"), e(m, "content", "website"), e(c, "property", "og:title"), e(c, "content", n[0]), e(C, "property", "og:description"), e(C, "content", n[1]), e(g, "property", "og:image"), e(g, "content", n[2]), e(A, "name", "twitter:card"), e(A, "content", "summary_large_image"), e(M, "property", "twitter:domain"), e(M, "content", n[3]), e(w, "property", "twitter:url"), e(w, "content", n[3]), e(b, "name", "twitter:title"), e(b, "content", n[0]), e(y, "name", "twitter:description"), e(y, "content", n[1]), e(T, "name", "twitter:image"), e(T, "content", n[2]), H.a = U
        },
        m(h, s) {
            t(document.head, f), t(document.head, v), t(document.head, d), t(document.head, m), t(document.head, c), t(document.head, C), t(document.head, g), t(document.head, A), t(document.head, M), t(document.head, w), t(document.head, b), t(document.head, y), t(document.head, T), H.m(p, document.head), t(document.head, U)
        },
        p(h, [s]) {
            s & 1 && u !== (u = h[0]) && (document.title = u), s & 2 && e(f, "content", h[1]), s & 8 && e(v, "content", h[3]), s & 8 && _ !== (_ = "https://" + h[3]) && e(d, "content", _), s & 1 && e(c, "content", h[0]), s & 2 && e(C, "content", h[1]), s & 4 && e(g, "content", h[2]), s & 8 && e(M, "content", h[3]), s & 8 && e(w, "content", h[3]), s & 1 && e(b, "content", h[0]), s & 2 && e(y, "content", h[1]), s & 4 && e(T, "content", h[2]), s & 13 && p !== (p = `  <script type="application/ld+json">{
       "@context": "https://schema.org",
       "@type": "Website",
       "name": "${h[0]},
       "url": "${h[3]}",
       "logo": ${h[2]}  }<\/script>`) && H.p(p)
        },
        i: Et,
        o: Et,
        d(h) {
            h && H.d(), r(f), r(v), r(d), r(m), r(c), r(C), r(g), r(A), r(M), r(w), r(b), r(y), r(T), r(U)
        }
    }
}

function Xt(n, u, f) {
    let {
        title: v = "Home | Example.com"
    } = u, {
        description: d = "Description of your website."
    } = u, {
        image: _
    } = u, {
        website: m
    } = u;
    return n.$$set = c => {
        "title" in c && f(0, v = c.title), "description" in c && f(1, d = c.description), "image" in c && f(2, _ = c.image), "website" in c && f(3, m = c.website)
    }, [v, d, _, m]
}
class Yt extends Ct {
    constructor(u) {
        super(), Lt(this, u, Xt, Wt, It, {
            title: 0,
            description: 1,
            image: 2,
            website: 3
        })
    }
}

function Jt(n) {
    let u = !1,
        f = () => {
            u = !1
        },
        v, d, _, m, c, C, g, A, M, w, b, y, T, H, p, U = n[3].priceChange.h24 >= 0 ? "+" : "",
        h, s = n[3].priceChange.h24 + "",
        ye, Ee, ke, Y, xe, Je = new Intl.NumberFormat().format(n[3].fdv) + "",
        Te, Me, K, J, Qe = "VOLUME (24h)",
        Ae, Q, Ie, Ze = new Intl.NumberFormat().format(n[3].volume.h24) + "",
        Ce, Le, Z, j, $, $e = `<a class="text-3xl text-stroke text-white font-Genty flex items-center gap-1 md:gap-5 svelte-yfya1p" href="/#home"><img src="${At}" class="-scale-x-[1] w-[49px] md:w-[70px]" alt=""/>
						groggo</a>`,
        He, ae, D, le, et = '<a href="/#about" class="">About</a>',
        De, ne, tt = '<a href="/#tokenomics" class="">Tokenomics</a>',
        Be, re, at = '<a href="/#how" class="">How to buy</a>',
        je, ue, P, Pe, Ve, ee, lt = '<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>',
        pe, Oe, Fe, W, te, Se, I, se, N, nt = `<img src="${At}" class="-scale-x-[1] w-[49px] md:w-[70px]" alt=""/>

					groggo`,
        ze, de, G, rt = "About",
        Ne, me, q, st = "Tokenomics",
        Ge, fe, R, ot = "How to buy",
        qe, he, B, Re, V, Ue, it;
    Ht(n[8]), d = new Yt({
        props: {
            title: Qt,
            description: Zt,
            image: n[4],
            website: $t
        }
    });
    const Ke = n[7].default,
        L = Dt(Ke, n, n[6], null);
    return {
        c() {
            zt(d.$$.fragment), _ = k(), m = a("div"), c = a("input"), C = k(), g = a("div"), A = a("div"), M = a("section"), w = a("a"), b = a("article"), y = a("div"), T = a("p"), H = F("MARKET CAP "), p = a("span"), h = F(U), ye = F(s), Ee = F("%"), ke = k(), Y = a("p"), xe = F("$"), Te = F(Je), Me = k(), K = a("div"), J = a("p"), J.textContent = Qe, Ae = k(), Q = a("p"), Ie = F("$"), Ce = F(Ze), Le = k(), Z = a("div"), j = a("div"), $ = a("div"), $.innerHTML = $e, He = k(), ae = a("div"), D = a("ul"), le = a("li"), le.innerHTML = et, De = k(), ne = a("li"), ne.innerHTML = tt, Be = k(), re = a("li"), re.innerHTML = at, je = k(), ue = a("li"), P = a("a"), Pe = F("Buy now"), Ve = k(), ee = a("div"), ee.innerHTML = lt, Oe = k(), L && L.c(), Fe = k(), W = a("div"), te = a("label"), Se = k(), I = a("ul"), se = a("div"), N = a("a"), N.innerHTML = nt, ze = k(), de = a("li"), G = a("a"), G.textContent = rt, Ne = k(), me = a("li"), q = a("a"), q.textContent = st, Ge = k(), fe = a("li"), R = a("a"), R.textContent = ot, qe = k(), he = a("li"), B = a("a"), Re = F("Buy now"), this.h()
        },
        l(o) {
            Nt(d.$$.fragment, o), _ = x(o), m = l(o, "DIV", {
                class: !0
            });
            var E = i(m);
            c = l(E, "INPUT", {
                id: !0,
                type: !0,
                class: !0
            }), C = x(E), g = l(E, "DIV", {
                class: !0
            });
            var oe = i(g);
            A = l(oe, "DIV", {
                class: !0
            });
            var ct = i(A);
            M = l(ct, "SECTION", {
                class: !0
            });
            var ut = i(M);
            w = l(ut, "A", {
                href: !0,
                target: !0,
                rel: !0
            });
            var dt = i(w);
            b = l(dt, "ARTICLE", {
                class: !0
            });
            var ge = i(b);
            y = l(ge, "DIV", {
                class: !0
            });
            var ve = i(y);
            T = l(ve, "P", {
                class: !0
            });
            var We = i(T);
            H = S(We, "MARKET CAP "), p = l(We, "SPAN", {
                class: !0
            });
            var _e = i(p);
            h = S(_e, U), ye = S(_e, s), Ee = S(_e, "%"), _e.forEach(r), We.forEach(r), ke = x(ve), Y = l(ve, "P", {
                class: !0
            });
            var Xe = i(Y);
            xe = S(Xe, "$"), Te = S(Xe, Je), Xe.forEach(r), ve.forEach(r), Me = x(ge), K = l(ge, "DIV", {
                class: !0
            });
            var we = i(K);
            J = l(we, "P", {
                class: !0,
                "data-svelte-h": !0
            }), z(J) !== "svelte-10gcuhl" && (J.textContent = Qe), Ae = x(we), Q = l(we, "P", {
                class: !0
            });
            var Ye = i(Q);
            Ie = S(Ye, "$"), Ce = S(Ye, Ze), Ye.forEach(r), we.forEach(r), ge.forEach(r), dt.forEach(r), ut.forEach(r), ct.forEach(r), Le = x(oe), Z = l(oe, "DIV", {
                class: !0
            });
            var mt = i(Z);
            j = l(mt, "DIV", {
                class: !0
            });
            var ie = i(j);
            $ = l(ie, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), z($) !== "svelte-1b4m99h" && ($.innerHTML = $e), He = x(ie), ae = l(ie, "DIV", {
                class: !0
            });
            var ft = i(ae);
            D = l(ft, "UL", {
                class: !0
            });
            var X = i(D);
            le = l(X, "LI", {
                "data-svelte-h": !0
            }), z(le) !== "svelte-igfu42" && (le.innerHTML = et), De = x(X), ne = l(X, "LI", {
                "data-svelte-h": !0
            }), z(ne) !== "svelte-5d8mk6" && (ne.innerHTML = tt), Be = x(X), re = l(X, "LI", {
                "data-svelte-h": !0
            }), z(re) !== "svelte-7hg093" && (re.innerHTML = at), je = x(X), ue = l(X, "LI", {});
            var ht = i(ue);
            P = l(ht, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var pt = i(P);
            Pe = S(pt, "Buy now"), pt.forEach(r), ht.forEach(r), X.forEach(r), ft.forEach(r), Ve = x(ie), ee = l(ie, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), z(ee) !== "svelte-6ei6i2" && (ee.innerHTML = lt), ie.forEach(r), mt.forEach(r), Oe = x(oe), L && L.l(oe), oe.forEach(r), Fe = x(E), W = l(E, "DIV", {
                class: !0
            });
            var be = i(W);
            te = l(be, "LABEL", {
                for: !0,
                "aria-label": !0,
                class: !0
            }), i(te).forEach(r), Se = x(be), I = l(be, "UL", {
                class: !0
            });
            var O = i(I);
            se = l(O, "DIV", {
                class: !0
            });
            var gt = i(se);
            N = l(gt, "A", {
                class: !0,
                href: !0,
                "data-svelte-h": !0
            }), z(N) !== "svelte-10m5ala" && (N.innerHTML = nt), gt.forEach(r), ze = x(O), de = l(O, "LI", {});
            var vt = i(de);
            G = l(vt, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), z(G) !== "svelte-isghzh" && (G.textContent = rt), vt.forEach(r), Ne = x(O), me = l(O, "LI", {});
            var _t = i(me);
            q = l(_t, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), z(q) !== "svelte-119h9qn" && (q.textContent = st), _t.forEach(r), Ge = x(O), fe = l(O, "LI", {});
            var wt = i(fe);
            R = l(wt, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), z(R) !== "svelte-uwwymy" && (R.textContent = ot), wt.forEach(r), qe = x(O), he = l(O, "LI", {});
            var bt = i(he);
            B = l(bt, "A", {
                target: !0,
                rel: !0,
                href: !0,
                class: !0
            });
            var yt = i(B);
            Re = S(yt, "Buy now"), yt.forEach(r), bt.forEach(r), O.forEach(r), be.forEach(r), E.forEach(r), this.h()
        },
        h() {
            e(c, "id", "my-drawer-3"), e(c, "type", "checkbox"), e(c, "class", "drawer-toggle"), e(p, "class", "font-black " + (n[3].priceChange.h24 >= 0 ? "text-green-500" : "text-red-500")), e(T, "class", "text-xs"), e(Y, "class", "lg:text-2xl font-bold"), e(y, "class", "grid"), e(J, "class", "text-xs"), e(Q, "class", "lg:text-2xl font-bold"), e(K, "class", "grid"), e(b, "class", "grid px-4 gap-6 lg:gap-40 grid-cols-2"), e(w, "href", n[1]), e(w, "target", "_blank"), e(w, "rel", "noopener noreferrer"), e(M, "class", "w-[95vw] flex items-center justify-between text-white lg:w-[70vw]"), e(A, "class", "bg-black grid items-center justify-center py-5 w-full"), e($, "class", "mx-2 flex-1 px-2"), e(P, "target", "_blank"), e(P, "rel", "noopener noreferrer"), e(P, "href", n[0]), e(P, "class", "btn text-xl btn-accent font-bold"), e(D, "class", "menu font-bold gap-2 items-center text-xl menu-horizontal"), e(ae, "class", "hidden flex-none md:block"), e(ee, "class", "flex-none md:hidden"), e(j, "class", "lg:w-[90vw] w-full xl:w-[70vw] py-2 items-center flex justify-center "), e(Z, "class", pe = "w-full transition-all duration-200 z-30 sticky " + (n[2] >= 200 ? "!bg-black text-white shadow-md" : "") + " top-0 h-full grid justify-items-center"), e(g, "class", "drawer-content bg-[#0adf44] flex lg:items-center relative flex-col"), e(te, "for", "my-drawer-3"), e(te, "aria-label", "close sidebar"), e(te, "class", "drawer-overlay"), e(N, "class", "text-3xl text-white font-Genty flex items-center gap-1 md:gap-5"), e(N, "href", "/#home"), e(se, "class", "mx-2 pb-10 px-2"), e(G, "href", "/#about"), e(G, "class", ""), e(q, "href", "/#tokenomics"), e(q, "class", ""), e(R, "href", "/#how"), e(R, "class", ""), e(B, "target", "_blank"), e(B, "rel", "noopener noreferrer"), e(B, "href", n[0]), e(B, "class", "btn text-2xl btn-accent font-bold"), e(I, "class", "menu text-2xl tracking-tighter gap-2 font-bold bg-black text-white min-h-full w-80 p-4"), e(W, "class", "drawer-side z-40"), e(m, "class", "!tracking-widest drawer font-Stim")
        },
        m(o, E) {
            Gt(d, o, E), xt(o, _, E), xt(o, m, E), t(m, c), t(m, C), t(m, g), t(g, A), t(A, M), t(M, w), t(w, b), t(b, y), t(y, T), t(T, H), t(T, p), t(p, h), t(p, ye), t(p, Ee), t(y, ke), t(y, Y), t(Y, xe), t(Y, Te), t(b, Me), t(b, K), t(K, J), t(K, Ae), t(K, Q), t(Q, Ie), t(Q, Ce), t(g, Le), t(g, Z), t(Z, j), t(j, $), t(j, He), t(j, ae), t(ae, D), t(D, le), t(D, De), t(D, ne), t(D, Be), t(D, re), t(D, je), t(D, ue), t(ue, P), t(P, Pe), t(j, Ve), t(j, ee), t(g, Oe), L && L.m(g, null), t(m, Fe), t(m, W), t(W, te), t(W, Se), t(W, I), t(I, se), t(se, N), t(I, ze), t(I, de), t(de, G), t(I, Ne), t(I, me), t(me, q), t(I, Ge), t(I, fe), t(fe, R), t(I, qe), t(I, he), t(he, B), t(B, Re), V = !0, Ue || (it = [ce(window, "scroll", () => {
                u = !0, clearTimeout(v), v = setTimeout(f, 100), n[8]()
            }), ce(N, "click", n[9]), ce(G, "click", n[10]), ce(q, "click", n[11]), ce(R, "click", n[12]), ce(B, "click", n[13])], Ue = !0)
        },
        p(o, [E]) {
            E & 4 && !u && (u = !0, clearTimeout(v), scrollTo(window.pageXOffset, o[2]), v = setTimeout(f, 100)), (!V || E & 2) && e(w, "href", o[1]), (!V || E & 1) && e(P, "href", o[0]), (!V || E & 4 && pe !== (pe = "w-full transition-all duration-200 z-30 sticky " + (o[2] >= 200 ? "!bg-black text-white shadow-md" : "") + " top-0 h-full grid justify-items-center")) && e(Z, "class", pe), L && L.p && (!V || E & 64) && Bt(L, Ke, o, o[6], V ? Pt(Ke, o[6], E, null) : jt(o[6]), null), (!V || E & 1) && e(B, "href", o[0])
        },
        i(o) {
            V || (Tt(d.$$.fragment, o), Tt(L, o), V = !0)
        },
        o(o) {
            Mt(d.$$.fragment, o), Mt(L, o), V = !1
        },
        d(o) {
            o && (r(_), r(m)), qt(d, o), L && L.d(o), Ue = !1, Vt(it)
        }
    }
}
let Qt = "GROGGO | ETH",
    Zt = "Groggo, the Blue Frog (aka Blue Pepe) is a community-take-over token. He’s an original character from Matt Furie’s book “Mindviscosity”. Follow his curious spirit and adventures into Memeland 🎒💙 - Name from 'Hedz by Matt Furie Collection' of original NFT's on OpenSea, #571.",
    $t = "groggocoin.vip";

function ea(n, u, f) {
    let {
        $$slots: v = {},
        $$scope: d
    } = u, {
        data: _
    } = u, {
        buy: m = "https://app.uniswap.org/swap?outputCurrency=0x420110D74c4c3ea14043A09E81FAD53e1932F54c"
    } = u, {
        dexscreener: c = "https://dexscreener.com/ethereum/0x2bbf5243e49e8f0025988754dac6620ab0d3e162"
    } = u, {
        price: {
            item: {
                pair: C
            }
        }
    } = _, g, A = Rt;

    function M() {
        f(2, g = window.pageYOffset)
    }
    const w = () => {
            document.getElementById("my-drawer-3").click()
        },
        b = () => {
            document.getElementById("my-drawer-3").click()
        },
        y = () => {
            document.getElementById("my-drawer-3").click()
        },
        T = () => {
            document.getElementById("my-drawer-3").click()
        },
        H = () => {
            document.getElementById("my-drawer-3").click()
        };
    return n.$$set = p => {
        "data" in p && f(5, _ = p.data), "buy" in p && f(0, m = p.buy), "dexscreener" in p && f(1, c = p.dexscreener), "$$scope" in p && f(6, d = p.$$scope)
    }, [m, c, g, C, A, _, d, v, M, w, b, y, T, H]
}
class sa extends Ct {
    constructor(u) {
        super(), Lt(this, u, ea, Jt, It, {
            data: 5,
            buy: 0,
            dexscreener: 1
        })
    }
}
export {
    sa as component, ra as universal
};