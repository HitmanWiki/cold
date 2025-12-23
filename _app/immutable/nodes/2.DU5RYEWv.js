import {
    s as nt,
    q as ht,
    u as ft,
    v as ut,
    w as gt,
    n as O,
    x as X,
    y as _t,
    z as wt
} from "../chunks/scheduler.Cviwv6GX.js";
import {
    S as rt,
    i as at,
    e as C,
    c as x,
    a as $,
    d as h,
    o,
    g as k,
    n as H,
    l as V,
    u as T,
    v as q,
    w as N,
    x as j,
    A as R,
    s as D,
    f as I,
    h as u,
    t as tt,
    b as et,
    j as Mt,
    C as L,
    D as G,
    E as K,
    F as $t,
    G as Ht
} from "../chunks/index.DopQeKMz.js";
import {
    h as Yt,
    g as Wt
} from "../chunks/new_head-1.B08dDXaL.js";

function kt(a) {
    return (a == null ? void 0 : a.length) !== void 0 ? a : Array.from(a)
}

function vt(a, t) {
    const l = {},
        e = {},
        s = {
            $$scope: 1
        };
    let n = a.length;
    for (; n--;) {
        const r = a[n],
            i = t[n];
        if (i) {
            for (const c in r) c in i || (e[c] = 1);
            for (const c in i) s[c] || (l[c] = i[c], s[c] = 1);
            a[n] = i
        } else
            for (const c in r) s[c] = 1
    }
    for (const r in e) r in l || (l[r] = void 0);
    return l
}

function Jt(a) {
    let t, l, e;
    const s = a[2].default,
        n = ht(s, a, a[1], null);
    return {
        c() {
            t = C("section"), n && n.c(), this.h()
        },
        l(r) {
            t = x(r, "SECTION", {
                class: !0
            });
            var i = $(t);
            n && n.l(i), i.forEach(h), this.h()
        },
        h() {
            o(t, "class", l = "container grid items-center place-items-center " + a[0] + " w-[90vw] lg:w-[70vw] py-[5vh]")
        },
        m(r, i) {
            k(r, t, i), n && n.m(t, null), e = !0
        },
        p(r, [i]) {
            n && n.p && (!e || i & 2) && ft(n, s, r, r[1], e ? gt(s, r[1], i, null) : ut(r[1]), null), (!e || i & 1 && l !== (l = "container grid items-center place-items-center " + r[0] + " w-[90vw] lg:w-[70vw] py-[5vh]")) && o(t, "class", l)
        },
        i(r) {
            e || (H(n, r), e = !0)
        },
        o(r) {
            V(n, r), e = !1
        },
        d(r) {
            r && h(t), n && n.d(r)
        }
    }
}

function Kt(a, t, l) {
    let {
        $$slots: e = {},
        $$scope: s
    } = t, {
        styles: n
    } = t;
    return a.$$set = r => {
        "styles" in r && l(0, n = r.styles), "$$scope" in r && l(1, s = r.$$scope)
    }, [n, s, e]
}
class Ct extends rt {
    constructor(t) {
        super(), at(this, t, Kt, Jt, nt, {
            styles: 0
        })
    }
}
const Xt = "" + new URL("../assets/4.R9nnwCPj.png",
    import.meta.url).href;

function Qt(a) {
    let t, l = `<h1 class="h1 tracking-normal text-white">About</h1> <div class="grid items-center gap-10 lg:grid-cols-2"><img src="${Xt}" alt=""/> <p class="text-xl font-extrabold">We Introduce:
				<br/> <span class="">Groggo, the Blue Frog (by Matt Furie).</span> <br/> <br/>
				Matt Furie is the talented artist behind “The Boy’s Club” book (2006) where Pepe was introduced
				to the world.
				<br/> <br/>
				Through his third book, called “Mindviscosity” (2021), a conceptual graphical masterpiece of
				dreamlike scenes, Matt Furie introduced a plethora of new characters, were we can spot little
				<span class="font-bold">Groggo, a blue frog wondering around with his binoculars and backpack</span>.
				<br/> <br/>
				Matt will go on to baptize this new character himself through his published series of NFT characters
				(called #HEDZ).
				<br/> <br/>
				Groggo is the <span class="font-bold">only blue frog in all of his books</span>, adding him to his collection of endearing frogs
				that we all love. Due to his resemblance to Pepe, some call him The Blue Pepe.
				<br/> <br/>
				We hope Groggo will conquer your heart as it conquered ours!</p></div>`;
    return {
        c() {
            t = C("div"), t.innerHTML = l, this.h()
        },
        l(e) {
            t = x(e, "DIV", {
                id: !0,
                class: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1vlcwaf" && (t.innerHTML = l), this.h()
        },
        h() {
            o(t, "id", "about"), o(t, "class", "scroll-m-32 w-full gap-10 items-center grid justify-center")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function te(a) {
    let t, l;
    return t = new Ct({
        props: {
            styles: "gap-5",
            $$slots: {
                default: [Qt]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(e) {
            q(t.$$.fragment, e)
        },
        m(e, s) {
            N(t, e, s), l = !0
        },
        p(e, [s]) {
            const n = {};
            s & 1 && (n.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(n)
        },
        i(e) {
            l || (H(t.$$.fragment, e), l = !0)
        },
        o(e) {
            V(t.$$.fragment, e), l = !1
        },
        d(e) {
            j(t, e)
        }
    }
}
class ee extends rt {
    constructor(t) {
        super(), at(this, t, null, te, nt, {})
    }
}

function Vt(a) {
    let t, l;
    return {
        c() {
            t = C("p"), l = tt(a[1]), this.h()
        },
        l(e) {
            t = x(e, "P", {
                class: !0
            });
            var s = $(t);
            l = et(s, a[1]), s.forEach(h), this.h()
        },
        h() {
            o(t, "class", "hidden lg:block")
        },
        m(e, s) {
            k(e, t, s), u(t, l)
        },
        p(e, s) {
            s & 2 && Mt(l, e[1])
        },
        d(e) {
            e && h(t)
        }
    }
}

function le(a) {
    let t, l, e;
    const s = a[3].default,
        n = ht(s, a, a[2], null);
    let r = a[1] && Vt(a);
    return {
        c() {
            t = C("a"), n && n.c(), l = D(), r && r.c(), this.h()
        },
        l(i) {
            t = x(i, "A", {
                href: !0,
                "data-no-translate": !0,
                target: !0,
                class: !0,
                rel: !0
            });
            var c = $(t);
            n && n.l(c), l = I(c), r && r.l(c), c.forEach(h), this.h()
        },
        h() {
            o(t, "href", a[0]), o(t, "data-no-translate", ""), o(t, "target", "_blank"), o(t, "class", "btn font-bold btn-secondary "), o(t, "rel", "noopener noreferrer")
        },
        m(i, c) {
            k(i, t, c), n && n.m(t, null), u(t, l), r && r.m(t, null), e = !0
        },
        p(i, [c]) {
            n && n.p && (!e || c & 4) && ft(n, s, i, i[2], e ? gt(s, i[2], c, null) : ut(i[2]), null), i[1] ? r ? r.p(i, c) : (r = Vt(i), r.c(), r.m(t, null)) : r && (r.d(1), r = null), (!e || c & 1) && o(t, "href", i[0])
        },
        i(i) {
            e || (H(n, i), e = !0)
        },
        o(i) {
            V(n, i), e = !1
        },
        d(i) {
            i && h(t), n && n.d(i), r && r.d()
        }
    }
}

function se(a, t, l) {
    let {
        $$slots: e = {},
        $$scope: s
    } = t, {
        link: n
    } = t, {
        name: r
    } = t;
    return a.$$set = i => {
        "link" in i && l(0, n = i.link), "name" in i && l(1, r = i.name), "$$scope" in i && l(2, s = i.$$scope)
    }, [n, r, s, e]
}
class pt extends rt {
    constructor(t) {
        super(), at(this, t, se, le, nt, {
            link: 0,
            name: 1
        })
    }
}
const ne = "" + new URL("../assets/home1.C3xI4Ts3.svg",
    import.meta.url).href;

function re(a) {
    let t, l, e = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "32"
        }, {
            height: "32"
        }, {
            viewBox: "0 0 32 32"
        }, a[6]],
        s = {};
    for (let n = 0; n < e.length; n += 1) s = X(s, e[n]);
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(n) {
            t = G(n, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var r = $(t);
            l = G(r, "path", {
                fill: !0,
                d: !0
            }), $(l).forEach(h), r.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "d", "M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.328 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27m-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.432.265-.432c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"), K(t, s)
        },
        m(n, r) {
            k(n, t, r), u(t, l)
        },
        p(n, r) {
            K(t, s = vt(e, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "32"
            }, {
                height: "32"
            }, {
                viewBox: "0 0 32 32"
            }, r & 64 && n[6]]))
        },
        d(n) {
            n && h(t)
        }
    }
}

function ae(a) {
    let t, l, e = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "32"
        }, {
            height: "32"
        }, {
            viewBox: "0 0 24 24"
        }, a[6]],
        s = {};
    for (let n = 0; n < e.length; n += 1) s = X(s, e[n]);
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(n) {
            t = G(n, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var r = $(t);
            l = G(r, "path", {
                fill: !0,
                d: !0
            }), $(l).forEach(h), r.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "d", "M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"), K(t, s)
        },
        m(n, r) {
            k(n, t, r), u(t, l)
        },
        p(n, r) {
            K(t, s = vt(e, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "32"
            }, {
                height: "32"
            }, {
                viewBox: "0 0 24 24"
            }, r & 64 && n[6]]))
        },
        d(n) {
            n && h(t)
        }
    }
}

function oe(a) {
    let t, l, e;
    return {
        c() {
            t = L("svg"), l = L("path"), e = L("path"), this.h()
        },
        l(s) {
            t = G(s, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var n = $(t);
            l = G(n, "path", {
                d: !0,
                fill: !0
            }), $(l).forEach(h), e = G(n, "path", {
                d: !0,
                fill: !0
            }), $(e).forEach(h), n.forEach(h), this.h()
        },
        h() {
            o(l, "d", "M25.29 57.9139C25.2901 57.2347 25.4244 56.5623 25.6851 55.9352C25.9458 55.308 26.3278 54.7386 26.8092 54.2595C27.2907 53.7804 27.8619 53.4011 28.4903 53.1434C29.1187 52.8858 29.7918 52.7532 30.471 52.7579L39.061 52.7859C40.4305 52.7859 41.744 53.33 42.7124 54.2984C43.6809 55.2669 44.225 56.5803 44.225 57.9499V90.4299C45.192 90.1429 46.434 89.8369 47.793 89.5169C32.737 89.2952 49.5783 88.761 50.1805 88.0009C50.7826 87.2409 51.1102 86.2996 51.11 85.3299V45.0399C51.11 43.6702 51.654 42.3567 52.6224 41.3881C53.5908 40.4195 54.9043 39.8752 56.274 39.8749H64.881C66.2506 39.8752 67.5641 40.4195 68.5325 41.3881C69.5009 42.3567 70.045 43.6702 70.045 45.0399V82.4329C70.045 82.4329 72.2 81.5609 74.299 80.6749C75.0787 80.3452 75.7441 79.7931 76.2122 79.0877C76.6803 78.3822 76.9302 77.5545 76.931 76.7079V32.1299C76.931 30.7605 77.4749 29.4472 78.4431 28.4788C79.4113 27.5103 80.7245 26.9662 82.0939 26.9659H90.701C92.0706 26.9659 93.384 27.51 94.3525 28.4784C95.3209 29.4468 95.865 30.7603 95.865 32.1299V68.8389C103.327 63.4309 110.889 56.9269 116.89 49.1059C117.761 47.9707 118.337 46.6377 118.567 45.2257C118.797 43.8138 118.674 42.3668 118.209 41.0139C115.431 33.0217 111.016 25.6973 105.245 19.5096C99.474 13.3218 92.4749 8.40687 84.6955 5.07934C76.9161 1.75182 68.5277 0.0849617 60.0671 0.185439C51.6065 0.285917 43.2601 2.15152 35.562 5.66286C27.8638 9.17419 20.9834 14.2539 15.3611 20.577C9.73881 26.9001 5.49842 34.3272 2.91131 42.3832C0.324207 50.4391 -0.552649 58.9464 0.336851 67.3607C1.22635 75.775 3.86263 83.911 8.07696 91.2479C8.81111 92.5135 9.89118 93.5434 11.1903 94.2165C12.3294 94.8896 13.9536 95.178 15.411 95.0479C17.039 94.9049 19.066 94.7019 21.476 94.4189C22.5251 94.2998 23.4937 93.7989 24.1972 93.0116C24.9008 92.2244 25.2901 91.2058 25.291 90.1499L25.29 57.9139Z"), o(l, "fill", "currentColor"), o(e, "d", "M25.1021 110.009C34.1744 116.609 44.8959 120.571 56.0802 121.456C67.2646 122.34 78.4757 120.114 88.4731 115.022C98.4705 109.93 106.864 102.172 112.726 92.6059C118.587 83.0395 121.688 72.0381 121.685 60.8188C121.685 59.4188 121.62 58.0337 121.527 56.6567C99.308 89.7947 58.2831 105.287 25.104 110.004"), o(e, "fill", "currentColor"), o(t, "width", "32"), o(t, "height", "32"), o(t, "viewBox", "0 0 122 122"), o(t, "fill", "none"), o(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(s, n) {
            k(s, t, n), u(t, l), u(t, e)
        },
        p: O,
        d(s) {
            s && h(t)
        }
    }
}

function ie(a) {
    let t, l, e, s, n, r, i;
    return {
        c() {
            t = L("svg"), l = L("g"), e = L("path"), s = L("path"), n = L("defs"), r = L("clipPath"), i = L("rect"), this.h()
        },
        l(c) {
            t = G(c, "svg", {
                class: !0,
                viewBox: !0,
                fill: !0,
                xmlns: !0
            });
            var m = $(t);
            l = G(m, "g", {
                "clip-path": !0
            });
            var _ = $(l);
            e = G(_, "path", {
                d: !0,
                fill: !0
            }), $(e).forEach(h), s = G(_, "path", {
                d: !0,
                fill: !0
            }), $(s).forEach(h), _.forEach(h), n = G(m, "defs", {});
            var f = $(n);
            r = G(f, "clipPath", {
                id: !0
            });
            var b = $(r);
            i = G(b, "rect", {
                width: !0,
                height: !0,
                fill: !0
            }), $(i).forEach(h), b.forEach(h), f.forEach(h), m.forEach(h), this.h()
        },
        h() {
            o(e, "d", "M48.121 0.000478285C21.8001 0.120899 0.560745 21.7064 0.676989 48.2158C0.796553 74.7251 22.2318 96.1166 48.5493 95.9995C74.8702 95.8791 96.1096 74.2936 95.9933 47.7876C95.8738 21.2749 74.4418 -0.116598 48.121 0.000478285ZM42.0862 45.6468C37.38 45.6468 33.5639 41.8067 33.5639 37.0668C33.5639 32.3269 37.38 28.4868 42.0862 28.4868C46.7924 28.4868 50.6053 32.3302 50.6053 37.0668C50.6053 41.8033 46.7891 45.6468 42.0862 45.6468ZM48.8815 54.9225L48.9247 54.869L48.9711 54.8155C51.4023 56.3944 54.1789 56.953 56.9521 57.0333C59.7287 57.1068 62.5584 56.8961 65.3416 56.3308C68.1214 55.7488 70.8548 54.8891 73.4952 53.7919C74.9765 53.1764 76.4511 52.5041 77.856 51.7147C77.8659 51.708 77.8726 51.7046 77.8826 51.6979C78.7561 51.1694 79.6096 50.6108 80.4466 50.0355C80.6292 49.905 80.8053 49.7678 80.978 49.6274L80.9979 49.6508L81.071 49.7377C78.9288 51.7013 76.3781 53.1597 73.7809 54.4475C71.1571 55.6919 68.4204 56.7121 65.594 57.448C62.7776 58.1806 59.8383 58.7359 56.8624 58.4616C53.9331 58.2007 50.8477 57.1671 48.8749 54.9259L48.8815 54.9225ZM70.7486 45.6468C70.7452 44.6165 71.5689 43.7869 72.5852 43.7769C73.6082 43.7736 74.4319 44.5998 74.4418 45.6267C74.4451 46.6536 73.6215 47.4932 72.6052 47.4966C71.5855 47.4999 70.7585 46.6704 70.7486 45.6468ZM56.1517 91.6844C54.3117 78.6957 65.5741 65.9745 71.9243 59.4651C73.3657 57.9899 75.5943 55.9562 77.6667 53.7953C85.9101 46.0315 87.5507 36.7557 70.6788 32.1195C67.4805 31.1862 64.1659 29.8649 60.8081 28.5302C60.7018 28.2192 60.5822 27.9248 60.4427 27.6472C60.0575 26.9782 59.3833 26.2088 58.3636 25.3357C56.1716 23.419 52.05 23.4692 48.4929 24.3189C44.5606 23.3856 40.6813 23.0544 36.9516 23.9542C20.6343 28.4834 18.0106 36.4981 17.3762 46.1552C16.5127 56.5917 16.0079 64.3689 12.0855 73.2533C7.18998 66.1418 4.3038 57.5149 4.26395 48.2057C4.15435 23.6933 23.7961 3.73353 48.1342 3.62315C72.4722 3.51276 92.2901 23.2953 92.3997 47.8077C92.4994 69.7009 76.8364 87.9681 56.1484 91.6911L56.1517 91.6844Z"), o(e, "fill", "#0D1217"), o(s, "d", "M48.0777 37.1438C48.0777 40.4788 45.3941 43.1782 42.0862 43.1782C38.7782 43.1782 36.0913 40.4788 36.0913 37.1438C36.0913 33.8088 38.7749 31.1094 42.0862 31.1094C45.3974 31.1094 48.0777 33.8088 48.0777 37.1438Z"), o(s, "fill", "#0D1217"), o(l, "clip-path", "url(#clip0_238_5103)"), o(i, "width", "96"), o(i, "height", "96"), o(i, "fill", "white"), o(r, "id", "clip0_238_5103"), o(t, "class", "h-8"), o(t, "viewBox", "0 0 96 96"), o(t, "fill", "none"), o(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(c, m) {
            k(c, t, m), u(t, l), u(l, e), u(l, s), u(t, n), u(n, r), u(r, i)
        },
        p: O,
        d(c) {
            c && h(t)
        }
    }
}

function ce(a) {
    let t, l;
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(e) {
            t = G(e, "svg", {
                viewBox: !0,
                xmlns: !0,
                class: !0
            });
            var s = $(t);
            l = G(s, "path", {
                d: !0,
                fill: !0
            }), $(l).forEach(h), s.forEach(h), this.h()
        },
        h() {
            o(l, "d", "m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z"), o(l, "fill", "currentColor"), o(t, "viewBox", "0 0 76.52 77.67"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "class", "h-8")
        },
        m(e, s) {
            k(e, t, s), u(t, l)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function he(a) {
    let t, l, e, s, n, r;
    return {
        c() {
            t = L("svg"), l = L("path"), e = L("path"), s = L("path"), n = L("path"), r = L("path"), this.h()
        },
        l(i) {
            t = G(i, "svg", {
                id: !0,
                "data-name": !0,
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var c = $(t);
            l = G(c, "path", {
                fill: !0,
                class: !0,
                d: !0
            }), $(l).forEach(h), e = G(c, "path", {
                fill: !0,
                class: !0,
                d: !0
            }), $(e).forEach(h), s = G(c, "path", {
                fill: !0,
                class: !0,
                d: !0
            }), $(s).forEach(h), n = G(c, "path", {
                fill: !0,
                class: !0,
                d: !0
            }), $(n).forEach(h), r = G(c, "path", {
                fill: !0,
                class: !0,
                d: !0
            }), $(r).forEach(h), c.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "class", "cls-1"), o(l, "d", "M0,256.75c9.1-20.22,15.67-40.87,19.55-62.41,3.32-18.44,3.72-37.06,3.88-55.71.13-15.47-1-31,1.7-46.36,1.94-11.06,5.96-21.43,11.06-31.41,1.16-2.28,2.1-1.53,3.18-.08,4.29,5.73,8.64,11.42,13.78,16.43,2,1.94.78,3.63-.1,5.38-3.12,6.22-4.77,12.76-4.32,19.74,1.17,18.2,16.83,30.77,36.01,32.3,3.32.27,3.5.8,3.83,4.12.95,9.42-3.77,13.99-11.54,17.61-6.91,3.22-13.21,7.73-19.96,11.32-3.85,2.05-3.06,3.41.02,5.11,6.84,3.78,13.53,7.86,20.54,11.29,9.64,4.71,15.67,12.65,20.7,21.62,9.91,17.66,15.99,36.82,21.79,56.08,3.29,10.94,6.47,21.91,9.81,33.21,2.51-1.37,2.57-3.46,3.1-5.22,6.3-21.19,11.92-42.59,20.21-63.14,4.36-10.8,9.32-21.28,16.37-30.72,6.5-8.7,16.24-12.46,25.06-17.68,3.15-1.86,6.41-3.52,9.65-5.23,3.16-1.67,3.32-3.05.03-4.97-8.87-4.92-17.54-10.2-26.44-15.06-3.16-1.72-4.81-3.72-4.41-7.4.38-3.44-2.55-7.37-.57-10.08,1.91-2.62,6.25-.63,9.32-1.32,13.98-3.68,25.31-10.39,29.18-25.47,2.14-8.35,1.09-16.58-2.94-24.21-1.8-3.4-1.95-5.6,1.1-8.6,5.08-4.99,9.54-10.62,13.43-16.72,2.25.63,2.5,2.64,3.24,4.15,7.75,15.77,11.71,32.38,11.68,50.03-.03,18.81-.6,37.62.77,56.43,2.12,29.01,9.17,56.68,21.53,83,.56,1.19,1.06,2.42,1.56,3.64.04.09-.14.28-.52.95-8.29-6.67-16.5-13.29-24.74-19.87-2.99-2.38-6.18-6.63-9.06-6.45-3.11.19-4.4,5.65-6.41,8.84-6.04,9.56-12.01,19.18-17.78,28.91-1.71,2.88-2.78,2.83-5.06.59-6.78-6.64-13.86-12.97-20.65-19.6-2.79-2.72-4.23-2.85-6.46.82-12.32,20.65-25.23,41.13-37.9,61.67-.85,1.38-1.77,2.73-3,4.62-6.21-10.03-12.16-19.6-18.06-29.19-7.67-12.46-15.35-24.92-22.91-37.45-1.91-3.17-3.3-3.6-6.15-.72-6.8,6.85-14.11,13.18-20.96,19.99-2.51,2.5-3.37,1.79-4.92-.81-6.99-11.71-14.26-23.25-21.22-34.97-1.93-3.25-3.26-3.58-6.29-1.04-9.8,8.24-19.9,16.14-29.88,24.17Z"), o(e, "fill", "currentColor"), o(e, "class", "cls-1"), o(e, "d", "M29.35,17.57c4.39,5.54,9.19,9.33,14.63,12.29,6.64,3.61,9,3.34,14.47-1.6,42.02-38.02,104.45-37.67,145.88,1.03,3.53,3.29,6.5,3.84,10.6,1.89,5.76-2.74,10.86-6.38,15.89-11.35-.13,3.57-1.79,5.81-3.09,8.09-10.53,18.33-25.25,32.94-41.42,46.21-10.7,8.78-22.11,16.53-34.43,22.9-2.33,1.2-4.03,1.14-6.35-.25-10.17-6.11-20.32-6.07-30.63.19-1.67,1.03-3.08,1.6-5.03.53-31.03-16.93-57.7-38.66-76.34-69.22-1.64-2.69-2.87-5.62-4.25-8.46-.12-.25.01-.63.08-2.24Z"), o(s, "fill", "currentColor"), o(s, "class", "cls-1"), o(s, "d", "M172.12,169.87c-26.04,15.35-32.99,41.5-41.59,68-2.21-6.76-4-12.49-5.96-18.17-4.68-13.58-10.26-26.67-20.27-37.39-3.66-3.92-7.72-7.33-12.21-10.23-2.17-1.4-2.58-2.29.04-3.6,2.67-1.33,5.08-3.31,7.84-4.34,4.96-1.86,6.09-5.45,5.99-10.24-.23-11.6.58-23.04,7.64-32.94,10.69-14.99,25.62-14.42,35.35,1.32,4.98,8.06,7.13,17.11,6.18,26.28-.99,9.65,2.91,15.05,11.37,18.28,1.68.64,3.2,1.71,5.61,3.03Z"), o(n, "fill", "currentColor"), o(n, "class", "cls-1"), o(n, "d", "M102.5,112.97c-10.07,4.67-19.29,5.3-28.36.13-6.76-3.85-9.15-11.9-6.26-19.07.83-2.05,1.77-2.16,3.26-.94,9.41,7.67,20.01,13.32,31.36,19.89Z"), o(r, "fill", "currentColor"), o(r, "class", "cls-1"), o(r, "d", "M158.74,113.3c11.44-6.41,21.91-12.22,31.25-19.75,2.78-2.24,3.28-.5,3.92,1.59,2.09,6.84-.16,13.43-6.37,17.39-9.06,5.78-18.42,5.08-28.8.78Z"), o(t, "id", "Capa_1"), o(t, "data-name", "Capa 1"), o(t, "xmlns", "http://www.w3.org/2000/svg"), o(t, "width", "32"), o(t, "height", "32"), o(t, "viewBox", "0 0 261.98 316.77")
        },
        m(i, c) {
            k(i, t, c), u(t, l), u(t, e), u(t, s), u(t, n), u(t, r)
        },
        p: O,
        d(i) {
            i && h(t)
        }
    }
}

function fe(a) {
    let t, l;
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(e) {
            t = G(e, "svg", {
                fill: !0,
                viewBox: !0,
                width: !0,
                height: !0,
                xmlns: !0
            });
            var s = $(t);
            l = G(s, "path", {
                "clip-rule": !0,
                d: !0,
                fill: !0,
                "fill-rule": !0
            }), $(l).forEach(h), s.forEach(h), this.h()
        },
        h() {
            o(l, "clip-rule", "evenodd"), o(l, "d", "m280.395 49.025c-51.649 26.905-93.905 49.672-93.896 50.598.023 2.39 123.959 65.156 128.358 65.003 2.001-.067 16.517-6.749 32.256-14.847l28.621-14.721 31.258 16.067 31.256 16.07 51.188-23.001c77.13-34.659 85.141-38.457 83.885-39.733-1.666-1.693-29.331-16.555-104.388-56.07-36.274-19.098-71.321-37.823-78.24-41.612-6.758-3.789-13.21-6.837-14.337-6.778s-44.311 22.12-95.961 49.024zm-226.532 117.306-53.766 27.772v121.886c0 67.038.706 121.885 1.572 121.885.863 0 27.316-11.467 58.783-25.322l57.213-25.322v-128.476l27.958 15.232a33224.294 33224.294 0 0 0 64.671 35.109l36.712 19.877 16.336-7.387a3822.03 3822.03 0 0 0 30.674-14.056c7.885-3.672 27.241-12.39 43.012-19.377 15.771-6.99 30.37-14.019 32.44-15.621 2.75-2.128-30.782-20.658-124.025-68.54-70.285-36.093-130.046-65.509-132.802-65.368s-29.206 12.752-58.778 28.028zm529.132 7.799c-36.618 16.531-66.604 30.717-66.638 31.526-.032.808 19.926 12.675 44.354 26.367 24.426 13.695 44.412 25.632 44.412 26.531 0 .897-21.615 11.37-32.03 23.278-26.419 11.905-93.194 42.061-132.393 67.014l-184.954 83.602c-46.525 21.032-88.462 39.989-93.193 42.132-95.03 43.019-121.15 54.956-124.737 57.005-3.607 2.063-4.424 14.032-5.066 74.201l-.766 71.744 32.08 24.498 32.079 24.497 66.669-30.088c36.669-16.547 66.669-30.953 66.669-32.014 0-1.058-6.776-5.473-15.054-9.815-8.282-4.342-25.378-13.954-37.995-21.364-12.616-7.411-25.196-14.21-27.958-15.112-2.761-.899-4.98-2.472-4.935-3.498.046-1.023 29.404-14.968 65.236-30.991 69.597-31.117 122.858-55.1 237.202-106.809a305577.39 305577.39 0 0 1 153.411-69.31c44.932-20.288 97.208-43.983 116.134-52.655l34.41-15.767.765-72.561.769-72.558-32.765-25.03c-26.822-13.765-49.732-24.994-50.95-24.953-1.201.038-32.141 13.595-68.756 30.13zm153.872 261.772c-7.186 3.51-21.38 10.082-31.542 14.603s-29.446 13.222-42.852 19.339l-24.374 11.117-.556 63.702c-.307 35.035-1.597 63.545-2.867 63.36-2.885-.429-32.567-23.857-94.327-32.463-33.143-17.757-35.225-18.463-43.013-14.606-4.502 2.231-31.413 14.3-59.801 26.825-28.389 12.523-52.541 23.587-53.677 24.589-1.133 1 56.002 31.967 126.97 68.819l129.029 67.003 55.119-28.513c30.312-15.68 56.088-29.983 57.275-31.782 2.672-4.045 2.443-242.93-.232-242.607-1.058.127-7.806 3.104-14.992 6.614zm-305.227 280.391a25013.26 25013.26 0 0 0 -28.675 12.349c-28.856 12.324-23.201 12.898-57.531-4.192-22.865-11.382-32.721-14.894-36.999-13.189-3.209 1.278-30.826 13.703-61.376 27.61-30.532 13.907-56.602 25.285-57.898 25.285-12.817 0 8.491 12.731 90.714 54.207l96.428 32.637 40.572-20.03c22.315-11.017 67.323-33.078 100.021-49.024 32.695-15.95 59.042-29.413 58.549-29.921-.497-.506-27.893-14.574-60.883-31.262l-59.982-30.338z"), o(l, "fill", "currentColor"), o(l, "fill-rule", "evenodd"), o(t, "fill", "none"), o(t, "viewBox", "0 -.058 754.779 867.058"), o(t, "width", "32"), o(t, "height", "32"), o(t, "xmlns", "http://www.w3.org/2000/svg")
        },
        m(e, s) {
            k(e, t, s), u(t, l)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function ue(a) {
    let t, l = `<img src="${ne}" class="w-[50vw] lg:w-[40vw]" alt=""/> <img src="${Yt}" class="w-[80vw]" alt=""/>`,
        e, s, n, r, i, c, m, _, f, b, d, g, w, p, v, P, A, Z, Q, W;
    return n = new pt({
        props: {
            link: a[0],
            name: "Telegram",
            $$slots: {
                default: [re]
            },
            $$scope: {
                ctx: a
            }
        }
    }), i = new pt({
        props: {
            link: a[2],
            name: "Twitter",
            $$slots: {
                default: [ae]
            },
            $$scope: {
                ctx: a
            }
        }
    }), m = new pt({
        props: {
            link: a[5],
            name: "Etherscan",
            $$slots: {
                default: [oe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), f = new pt({
        props: {
            link: "https://www.coingecko.com/en/coins/groggo-by-matt-furie",
            name: "Coingecko",
            $$slots: {
                default: [ie]
            },
            $$scope: {
                ctx: a
            }
        }
    }), d = new pt({
        props: {
            link: "https://coinmarketcap.com/currencies/groggo-by-matt-furie/",
            name: "CoinMarketCap",
            $$slots: {
                default: [ce]
            },
            $$scope: {
                ctx: a
            }
        }
    }), w = new pt({
        props: {
            link: a[4],
            name: "Dexscreener",
            $$slots: {
                default: [he]
            },
            $$scope: {
                ctx: a
            }
        }
    }), v = new pt({
        props: {
            link: a[3],
            name: "Dextools",
            $$slots: {
                default: [fe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            t = C("div"), t.innerHTML = l, e = D(), s = C("div"), T(n.$$.fragment), r = D(), T(i.$$.fragment), c = D(), T(m.$$.fragment), _ = D(), T(f.$$.fragment), b = D(), T(d.$$.fragment), g = D(), T(w.$$.fragment), p = D(), T(v.$$.fragment), P = D(), A = C("p"), Z = tt("CA: "), Q = tt(a[1]), this.h()
        },
        l(M) {
            t = x(M, "DIV", {
                id: !0,
                class: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1qiuuyt" && (t.innerHTML = l), e = I(M), s = x(M, "DIV", {
                class: !0
            });
            var B = $(s);
            q(n.$$.fragment, B), r = I(B), q(i.$$.fragment, B), c = I(B), q(m.$$.fragment, B), _ = I(B), q(f.$$.fragment, B), b = I(B), q(d.$$.fragment, B), g = I(B), q(w.$$.fragment, B), p = I(B), q(v.$$.fragment, B), P = I(B), A = x(B, "P", {
                class: !0
            });
            var J = $(A);
            Z = et(J, "CA: "), Q = et(J, a[1]), J.forEach(h), B.forEach(h), this.h()
        },
        h() {
            o(t, "id", "home"), o(t, "class", "scroll-m-32 w-full gap-10 grid place-items-center lg:grid-cols-2"), o(A, "class", "text-[8px] sm:text-xs lg:text-xl p-[1vw] font-bold"), o(s, "class", "flex-wrap items-center inline-flex gap-5 justify-center")
        },
        m(M, B) {
            k(M, t, B), k(M, e, B), k(M, s, B), N(n, s, null), u(s, r), N(i, s, null), u(s, c), N(m, s, null), u(s, _), N(f, s, null), u(s, b), N(d, s, null), u(s, g), N(w, s, null), u(s, p), N(v, s, null), u(s, P), u(s, A), u(A, Z), u(A, Q), W = !0
        },
        p(M, B) {
            const J = {};
            B & 1 && (J.link = M[0]), B & 192 && (J.$$scope = {
                dirty: B,
                ctx: M
            }), n.$set(J);
            const F = {};
            B & 4 && (F.link = M[2]), B & 192 && (F.$$scope = {
                dirty: B,
                ctx: M
            }), i.$set(F);
            const ot = {};
            B & 32 && (ot.link = M[5]), B & 128 && (ot.$$scope = {
                dirty: B,
                ctx: M
            }), m.$set(ot);
            const E = {};
            B & 128 && (E.$$scope = {
                dirty: B,
                ctx: M
            }), f.$set(E);
            const y = {};
            B & 128 && (y.$$scope = {
                dirty: B,
                ctx: M
            }), d.$set(y);
            const z = {};
            B & 16 && (z.link = M[4]), B & 128 && (z.$$scope = {
                dirty: B,
                ctx: M
            }), w.$set(z);
            const st = {};
            B & 8 && (st.link = M[3]), B & 128 && (st.$$scope = {
                dirty: B,
                ctx: M
            }), v.$set(st), (!W || B & 2) && Mt(Q, M[1])
        },
        i(M) {
            W || (H(n.$$.fragment, M), H(i.$$.fragment, M), H(m.$$.fragment, M), H(f.$$.fragment, M), H(d.$$.fragment, M), H(w.$$.fragment, M), H(v.$$.fragment, M), W = !0)
        },
        o(M) {
            V(n.$$.fragment, M), V(i.$$.fragment, M), V(m.$$.fragment, M), V(f.$$.fragment, M), V(d.$$.fragment, M), V(w.$$.fragment, M), V(v.$$.fragment, M), W = !1
        },
        d(M) {
            M && (h(t), h(e), h(s)), j(n), j(i), j(m), j(f), j(d), j(w), j(v)
        }
    }
}

function ge(a) {
    let t, l;
    return t = new Ct({
        props: {
            styles: "  gap-5 py-[6vh] ",
            $$slots: {
                default: [ue]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(e) {
            q(t.$$.fragment, e)
        },
        m(e, s) {
            N(t, e, s), l = !0
        },
        p(e, [s]) {
            const n = {};
            s & 255 && (n.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(n)
        },
        i(e) {
            l || (H(t.$$.fragment, e), l = !0)
        },
        o(e) {
            V(t.$$.fragment, e), l = !1
        },
        d(e) {
            j(t, e)
        }
    }
}

function me(a, t, l) {
    let {
        telegram: e
    } = t, {
        ca: s
    } = t, {
        twitter: n
    } = t, {
        dextools: r
    } = t, {
        dexscreener: i
    } = t, {
        etherscan: c
    } = t;
    return a.$$set = m => {
        l(6, t = X(X({}, t), _t(m))), "telegram" in m && l(0, e = m.telegram), "ca" in m && l(1, s = m.ca), "twitter" in m && l(2, n = m.twitter), "dextools" in m && l(3, r = m.dextools), "dexscreener" in m && l(4, i = m.dexscreener), "etherscan" in m && l(5, c = m.etherscan)
    }, t = _t(t), [e, s, n, r, i, c, t]
}
class de extends rt {
    constructor(t) {
        super(), at(this, t, me, ge, nt, {
            telegram: 0,
            ca: 1,
            twitter: 2,
            dextools: 3,
            dexscreener: 4,
            etherscan: 5
        })
    }
}
const pe = "" + new URL("../assets/2.G0S1CwdD.png",
        import.meta.url).href,
    ve = a => ({}),
    yt = a => ({}),
    _e = a => ({}),
    St = a => ({}),
    $e = a => ({}),
    Tt = a => ({});

function we(a) {
    let t, l, e, s, n, r, i;
    const c = a[1].image,
        m = ht(c, a, a[0], Tt),
        _ = a[1].title,
        f = ht(_, a, a[0], St),
        b = a[1].text,
        d = ht(b, a, a[0], yt);
    return {
        c() {
            t = C("div"), m && m.c(), l = D(), e = C("div"), s = C("h4"), f && f.c(), n = D(), r = C("p"), d && d.c(), this.h()
        },
        l(g) {
            t = x(g, "DIV", {
                class: !0
            });
            var w = $(t);
            m && m.l(w), l = I(w), e = x(w, "DIV", {
                class: !0
            });
            var p = $(e);
            s = x(p, "H4", {
                class: !0
            });
            var v = $(s);
            f && f.l(v), v.forEach(h), n = I(p), r = x(p, "P", {
                class: !0
            });
            var P = $(r);
            d && d.l(P), P.forEach(h), p.forEach(h), w.forEach(h), this.h()
        },
        h() {
            o(s, "class", "text-3xl tracking-widest font-black "), o(r, "class", ""), o(e, "class", "lg:col-span-5 text-center lg:text-left grid gap-5"), o(t, "class", "place-items-center border-4 border-black bg-secondary grid lg:grid-cols-6 p-10 card gap-5")
        },
        m(g, w) {
            k(g, t, w), m && m.m(t, null), u(t, l), u(t, e), u(e, s), f && f.m(s, null), u(e, n), u(e, r), d && d.m(r, null), i = !0
        },
        p(g, [w]) {
            m && m.p && (!i || w & 1) && ft(m, c, g, g[0], i ? gt(c, g[0], w, $e) : ut(g[0]), Tt), f && f.p && (!i || w & 1) && ft(f, _, g, g[0], i ? gt(_, g[0], w, _e) : ut(g[0]), St), d && d.p && (!i || w & 1) && ft(d, b, g, g[0], i ? gt(b, g[0], w, ve) : ut(g[0]), yt)
        },
        i(g) {
            i || (H(m, g), H(f, g), H(d, g), i = !0)
        },
        o(g) {
            V(m, g), V(f, g), V(d, g), i = !1
        },
        d(g) {
            g && h(t), m && m.d(g), f && f.d(g), d && d.d(g)
        }
    }
}

function Ce(a, t, l) {
    let {
        $$slots: e = {},
        $$scope: s
    } = t;
    return a.$$set = n => {
        "$$scope" in n && l(0, s = n.$$scope)
    }, [s, e]
}
class Et extends rt {
    constructor(t) {
        super(), at(this, t, Ce, we, nt, {})
    }
}

function xe(a) {
    let t, l, e, s, n = [{
            slot: "image"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "48"
        }, {
            height: "48"
        }, {
            viewBox: "0 0 24 24"
        }, a[0]],
        r = {};
    for (let i = 0; i < n.length; i += 1) r = X(r, n[i]);
    return {
        c() {
            t = L("svg"), l = L("g"), e = L("path"), s = L("path"), this.h()
        },
        l(i) {
            t = G(i, "svg", {
                slot: !0,
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var c = $(t);
            l = G(c, "g", {
                fill: !0,
                stroke: !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                color: !0
            });
            var m = $(l);
            e = G(m, "path", {
                d: !0
            }), $(e).forEach(h), s = G(m, "path", {
                d: !0
            }), $(s).forEach(h), m.forEach(h), c.forEach(h), this.h()
        },
        h() {
            o(e, "d", "M16.002 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"), o(s, "d", "M2.002 11c0-3.771 0-5.657 1.172-6.828S6.23 3 10.002 3h4c.93 0 1.395 0 1.776.102A3 3 0 0 1 17.9 5.224c.102.381.102.846.102 1.776m-8 0h6c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-3.501M10 17H6m0 0H2m4 0v4m0-4v-4"), o(l, "fill", "none"), o(l, "stroke", "currentColor"), o(l, "stroke-linecap", "round"), o(l, "stroke-linejoin", "round"), o(l, "stroke-width", "1.5"), o(l, "color", "currentColor"), K(t, r), $t(t, "svelte-1weqq20", !0)
        },
        m(i, c) {
            k(i, t, c), u(t, l), u(l, e), u(l, s)
        },
        p(i, c) {
            K(t, r = vt(n, [{
                slot: "image"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "48"
            }, {
                height: "48"
            }, {
                viewBox: "0 0 24 24"
            }, c & 1 && i[0]])), $t(t, "svelte-1weqq20", !0)
        },
        d(i) {
            i && h(t)
        }
    }
}

function be(a) {
    let t, l = "Create a wallet";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-k6xx15" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function ke(a) {
    let t, l = `download metamask or your wallet of choice from the app store or google play store for
					free. Desktop users, download the google chrome extension by going to metamask.io.`;
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-m6660l" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Ee(a) {
    let t, l, e, s, n = [{
            slot: "image"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "48"
        }, {
            height: "48"
        }, {
            viewBox: "0 0 24 24"
        }, a[0]],
        r = {};
    for (let i = 0; i < n.length; i += 1) r = X(r, n[i]);
    return {
        c() {
            t = L("svg"), l = L("g"), e = L("path"), s = L("path"), this.h()
        },
        l(i) {
            t = G(i, "svg", {
                slot: !0,
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var c = $(t);
            l = G(c, "g", {
                fill: !0,
                stroke: !0,
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                color: !0
            });
            var m = $(l);
            e = G(m, "path", {
                d: !0
            }), $(e).forEach(h), s = G(m, "path", {
                d: !0
            }), $(s).forEach(h), m.forEach(h), c.forEach(h), this.h()
        },
        h() {
            o(e, "d", "M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"), o(s, "d", "m8 12l4-6l4 6m-8 0l4 6l4-6m-8 0l4 1.5l4-1.5"), o(l, "fill", "none"), o(l, "stroke", "currentColor"), o(l, "stroke-linecap", "round"), o(l, "stroke-linejoin", "round"), o(l, "stroke-width", "1.5"), o(l, "color", "currentColor"), K(t, r), $t(t, "svelte-1weqq20", !0)
        },
        m(i, c) {
            k(i, t, c), u(t, l), u(l, e), u(l, s)
        },
        p(i, c) {
            K(t, r = vt(n, [{
                slot: "image"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "48"
            }, {
                height: "48"
            }, {
                viewBox: "0 0 24 24"
            }, c & 1 && i[0]])), $t(t, "svelte-1weqq20", !0)
        },
        d(i) {
            i && h(t)
        }
    }
}

function Pe(a) {
    let t, l = "Get some ETH";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1abp90c" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Me(a) {
    let t, l = `Have ETH in your wallet to switch to $GROGGO. If you don’t have any ETH, you can buy
					directly on metamask, transfer from another wallet, or buy on another exchange and send it
					to your wallet.`;
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-lm2djg" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Ae(a) {
    let t, l, e, s, n, r, i = [{
            slot: "image"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "48"
        }, {
            height: "48"
        }, {
            viewBox: "0 0 24 24"
        }, a[0]],
        c = {};
    for (let m = 0; m < i.length; m += 1) c = X(c, i[m]);
    return {
        c() {
            t = L("svg"), l = L("path"), e = L("path"), s = L("path"), n = L("path"), r = L("path"), this.h()
        },
        l(m) {
            t = G(m, "svg", {
                slot: !0,
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var _ = $(t);
            l = G(_, "path", {
                fill: !0,
                "fill-rule": !0,
                d: !0,
                "clip-rule": !0
            }), $(l).forEach(h), e = G(_, "path", {
                fill: !0,
                d: !0
            }), $(e).forEach(h), s = G(_, "path", {
                fill: !0,
                d: !0
            }), $(s).forEach(h), n = G(_, "path", {
                fill: !0,
                d: !0
            }), $(n).forEach(h), r = G(_, "path", {
                fill: !0,
                "fill-rule": !0,
                d: !0,
                "clip-rule": !0
            }), $(r).forEach(h), _.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "fill-rule", "evenodd"), o(l, "d", "m7.6 7.312l.003.002q.29.243.428.37l.056.055l.039.043c.192.253.12.48-.21.657a2.1 2.1 0 0 1-.747.198c-.213 0-.286-.078-.286-.078l-.044-.037c-.105-.085-.226-.184-.784-1.123q-.591-.87-1.187-1.74a29 29 0 0 0-.45-.65c-.047-.042-.047-.04 1.547 2.665c.205.45.116.672.071.785a.2.2 0 0 0-.02.067c0 .163-.046.249-.259.474c-.354.375-.512.796-.627 1.669c-.127.977-.487 1.667-1.486 2.848c-.584.692-.68.82-.828 1.098c-.185.35-.236.547-.257.99c-.022.47.02.772.172 1.22c.131.392.27.652.622 1.17c.304.447.48.78.48.91c0 .102.02.103.492.002c1.128-.242 2.043-.667 2.559-1.188c.319-.323.394-.5.396-.943c.001-.29-.01-.35-.092-.516c-.133-.27-.378-.496-.915-.844c-.705-.458-1.007-.825-1.09-1.332c-.068-.415.012-.708.4-1.483c.405-.803.505-1.146.573-1.954c.044-.523.104-.729.262-.894c.165-.173.313-.231.722-.284c.666-.086 1.09-.25 1.439-.555c.302-.265.429-.519.448-.903l.014-.29l-.168-.187C8.26 6.857 2.35 2 2.313 2c-.008 0 .193.24.447.532c2.265 2.61 4.005 4.075 4.84 4.78m-3.425 8.824a.5.5 0 0 0-.165-.677c-.22-.138-.56-.073-.56.106q.001.027.013.053l.008.014q.014.018.032.031l.027.02l.025.012c.121.06.13.126.035.262c-.097.138-.09.26.021.342c.18.133.432.06.564-.163"), o(l, "clip-rule", "evenodd"), o(e, "fill", "currentColor"), o(e, "d", "M8.119 3.42c-.034-.01-.006-.016.064-.026c.247-.037.828.012 1.228.103c.936.211 1.787.751 2.695 1.711l.24.255l.346-.052c1.454-.222 2.934-.046 4.172.496c.34.15.877.447.944.523c.021.024.06.181.087.348c.091.578.046 1.021-.14 1.352a1 1 0 0 0-.064.129l-.012.036c-.02.073-.006.131.037.227c.054.123.206.214.356.213c.307 0 .638-.471.792-1.128l.061-.26l.12.13c.662.711 1.182 1.682 1.271 2.372l.023.18l-.11-.164a2.1 2.1 0 0 0-.63-.628c-.445-.278-.915-.373-2.158-.436c-1.123-.056-1.759-.147-2.389-.342c-1.073-.332-1.613-.773-2.887-2.36c-.566-.705-.916-1.094-1.264-1.408c-.79-.714-1.567-1.087-2.562-1.234a3 3 0 0 1-.22-.037"), o(s, "fill", "currentColor"), o(s, "d", "M18.06 5.03c.03-.472.096-.783.232-1.068c.054-.113.104-.204.112-.204a.7.7 0 0 1-.052.185c-.098.275-.115.653-.047 1.092c.087.558.136.638.756 1.24c.291.282.63.638.753.791l.223.278l-.223-.198c-.273-.244-.9-.717-1.04-.785a.3.3 0 0 0-.082-.032h-.022c-.019.005-.035.018-.06.042c-.052.05-.064.125-.071.479c-.011.553-.09.907-.283 1.262c-.103.192-.12.15-.026-.066c.07-.162.078-.232.077-.767c-.001-1.075-.136-1.334-.924-1.776a8 8 0 0 0-.732-.36a3 3 0 0 1-.357-.165c.022-.022.791.191 1.101.305c.46.168.536.19.592.169c.037-.013.056-.117.074-.421M8.048 4.206c-.074.83.269 1.94.823 2.664c.43.562 1.095.997 1.587 1.04c.322.027.419-.069.273-.27c-.202-.28-.451-.712-.517-.896a10 10 0 0 1-.197-.754c-.232-1.023-.458-1.42-.983-1.723c-.192-.11-.6-.255-.837-.296l-.126-.022zm9.342 8.053c-2.59-.99-3.502-1.849-3.502-3.298c0-.213.008-.387.017-.387s.11.07.223.156c.525.4 1.113.57 2.741.795c.958.133 1.497.24 1.994.397c1.581.497 2.56 1.507 2.792 2.882c.068.4.028 1.149-.081 1.544c-.088.312-.352.874-.422.896q-.016.002-.026-.038a.6.6 0 0 1-.018-.124c-.026-.516-.301-1.018-.763-1.395c-.525-.428-1.23-.77-2.955-1.428m-1.943-.11c.036.103.092.338.125.52c.207 1.172-.44 2.119-1.702 2.486a4 4 0 0 1-.281.062q-.177.035-.354.065l-.233.04l-.3.05c-1.03.162-1.49.278-1.952.49c-.328.149-.725.373-.7.395q.006.005.044-.003c.031-.007.075-.02.121-.034c.583-.195 1.232-.295 2.217-.344a20 20 0 0 0 .43-.024l.187-.013l.188-.014l.085-.007l.098-.01c.877-.105 1.486-.358 1.959-.815c.263-.254.42-.49.547-.825c.08-.212.09-.29.091-.666c0-.382-.01-.452-.096-.687c-.114-.309-.247-.54-.417-.722l-.123-.13z"), o(n, "fill", "currentColor"), o(n, "d", "M16.758 14.67c-.344-.703-.423-1.38-.235-2.013c.02-.067.053-.122.073-.122a.3.3 0 0 1 .079.033q.047.025.1.06c.16.1.478.271 1.325.71c1.057.547 1.66.97 2.07 1.454c.358.424.58.907.688 1.495c.06.333.025 1.136-.065 1.472c-.285 1.058-.945 1.89-1.888 2.375q-.133.073-.275.13q-.005 0 .003-.027l.012-.032c.019-.05.054-.126.096-.21c.318-.63.354-1.241.114-1.923c-.147-.416-.446-.925-1.05-1.785c-.702-1-.875-1.265-1.047-1.618m-6.481 2.302c-1.09.168-2.285.715-3.246 1.485l-.286.23l.25.037c1.313.193 1.667.366 2.577 1.256c.524.512.7.626 1.135.731c.638.155 1.267-.13 1.483-.67c.096-.241.083-.64-.027-.841c-.263-.478-1.03-.633-1.4-.283c-.309.292-.219.732.165.807c.087.017.085.013-.023-.033c-.168-.072-.24-.172-.242-.331c-.002-.373.448-.583.867-.403c.306.13.428.302.428.603c0 .462-.415.812-.898.754a1.35 1.35 0 0 1-.744-.369c-.426-.456-.26-1.178.335-1.455c.453-.21 1.055-.158 1.522.132c.535.333.764.637 1.225 1.637c.151.325.344.692.431.815c.438.62.961.926 1.593.926c.348 0 .61-.06.94-.217c.244-.116.591-.336.566-.36a1 1 0 0 0-.225.067c-.69.255-1.39.237-1.798-.046c-.256-.178-.462-.532-.569-.975a21 21 0 0 1-.135-.754c-.141-.856-.277-1.24-.594-1.681c-.324-.452-.947-.832-1.644-1c-.435-.106-1.217-.135-1.686-.062"), o(r, "fill", "currentColor"), o(r, "fill-rule", "evenodd"), o(r, "d", "M8.751 10.356c.094-.33.398-.644.71-.735c.199-.058.61-.021.803.072c.375.181.647.592.588.89c-.072.362-.692.651-1.404.655c-.363.004-.498-.043-.636-.219c-.086-.11-.118-.463-.06-.663m1.418-.534c.186.108.234.269.125.416c-.076.102-.31.2-.482.2c-.256 0-.537-.174-.537-.332c0-.319.538-.49.894-.284"), o(r, "clip-rule", "evenodd"), K(t, c), $t(t, "svelte-1weqq20", !0)
        },
        m(m, _) {
            k(m, t, _), u(t, l), u(t, e), u(t, s), u(t, n), u(t, r)
        },
        p(m, _) {
            K(t, c = vt(i, [{
                slot: "image"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "48"
            }, {
                height: "48"
            }, {
                viewBox: "0 0 24 24"
            }, _ & 1 && m[0]])), $t(t, "svelte-1weqq20", !0)
        },
        d(m) {
            m && h(t)
        }
    }
}

function Be(a) {
    let t, l = "Go to Uniswap";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-18155z3" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function De(a) {
    let t, l = `Visit App.uniswap.org（MetaMask Mobile Features An Integrated Browser) To Connect Your
					Wallet. Then Paste The $GROGGO Address Into The field To Indicate Which Coin You Wish To
					Exchange Your Eth for.`;
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1ml6rve" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Ie(a) {
    let t, l, e = [{
            slot: "image"
        }, {
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "48"
        }, {
            height: "48"
        }, {
            viewBox: "0 0 256 256"
        }, a[0]],
        s = {};
    for (let n = 0; n < e.length; n += 1) s = X(s, e[n]);
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(n) {
            t = G(n, "svg", {
                slot: !0,
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var r = $(t);
            l = G(r, "path", {
                fill: !0,
                d: !0
            }), $(l).forEach(h), r.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "d", "M224 48v104a16 16 0 0 1-16 16H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 152H208V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h108.69l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L156.69 88H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8"), K(t, s), $t(t, "svelte-1weqq20", !0)
        },
        m(n, r) {
            k(n, t, r), u(t, l)
        },
        p(n, r) {
            K(t, s = vt(e, [{
                slot: "image"
            }, {
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "48"
            }, {
                height: "48"
            }, {
                viewBox: "0 0 256 256"
            }, r & 1 && n[0]])), $t(t, "svelte-1weqq20", !0)
        },
        d(n) {
            n && h(t)
        }
    }
}

function Le(a) {
    let t, l = "Swap ETH For $GROGGO";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-uku97j" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Ge(a) {
    let t, l = `Choose the Amount You Wish to Trade, Click "swap," And Confirm The Transaction. When Your
					Wallet Prompts You, Confirm the Action. Congratulations, You Are Now A Proud Holder Of
					$GROGGO.`;
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1ndpj8p" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function He(a) {
    let t, l, e = "How to buy",
        s, n, r, i, c, m, _, f, b, d;
    return r = new Et({
        props: {
            $$slots: {
                text: [ke],
                title: [be],
                image: [xe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), c = new Et({
        props: {
            $$slots: {
                text: [Me],
                title: [Pe],
                image: [Ee]
            },
            $$scope: {
                ctx: a
            }
        }
    }), _ = new Et({
        props: {
            $$slots: {
                text: [De],
                title: [Be],
                image: [Ae]
            },
            $$scope: {
                ctx: a
            }
        }
    }), b = new Et({
        props: {
            $$slots: {
                text: [Ge],
                title: [Le],
                image: [Ie]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            t = C("div"), l = C("h1"), l.textContent = e, s = D(), n = C("div"), T(r.$$.fragment), i = D(), T(c.$$.fragment), m = D(), T(_.$$.fragment), f = D(), T(b.$$.fragment), this.h()
        },
        l(g) {
            t = x(g, "DIV", {
                id: !0,
                class: !0
            });
            var w = $(t);
            l = x(w, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), R(l) !== "svelte-1b0wfr8" && (l.textContent = e), s = I(w), n = x(w, "DIV", {
                class: !0
            });
            var p = $(n);
            q(r.$$.fragment, p), i = I(p), q(c.$$.fragment, p), m = I(p), q(_.$$.fragment, p), f = I(p), q(b.$$.fragment, p), p.forEach(h), w.forEach(h), this.h()
        },
        h() {
            o(l, "class", "h1 text-white"), o(n, "class", "flex gap-5 flex-wrap"), o(t, "id", "how"), o(t, "class", "scroll-m-32 w-full gap-10 items-center grid justify-center")
        },
        m(g, w) {
            k(g, t, w), u(t, l), u(t, s), u(t, n), N(r, n, null), u(n, i), N(c, n, null), u(n, m), N(_, n, null), u(n, f), N(b, n, null), d = !0
        },
        p(g, w) {
            const p = {};
            w & 3 && (p.$$scope = {
                dirty: w,
                ctx: g
            }), r.$set(p);
            const v = {};
            w & 3 && (v.$$scope = {
                dirty: w,
                ctx: g
            }), c.$set(v);
            const P = {};
            w & 3 && (P.$$scope = {
                dirty: w,
                ctx: g
            }), _.$set(P);
            const A = {};
            w & 3 && (A.$$scope = {
                dirty: w,
                ctx: g
            }), b.$set(A)
        },
        i(g) {
            d || (H(r.$$.fragment, g), H(c.$$.fragment, g), H(_.$$.fragment, g), H(b.$$.fragment, g), d = !0)
        },
        o(g) {
            V(r.$$.fragment, g), V(c.$$.fragment, g), V(_.$$.fragment, g), V(b.$$.fragment, g), d = !1
        },
        d(g) {
            g && h(t), j(r), j(c), j(_), j(b)
        }
    }
}

function Ve(a) {
    let t, l;
    return t = new Ct({
        props: {
            styles: "gap-5",
            $$slots: {
                default: [He]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(e) {
            q(t.$$.fragment, e)
        },
        m(e, s) {
            N(t, e, s), l = !0
        },
        p(e, [s]) {
            const n = {};
            s & 3 && (n.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(n)
        },
        i(e) {
            l || (H(t.$$.fragment, e), l = !0)
        },
        o(e) {
            V(t.$$.fragment, e), l = !1
        },
        d(e) {
            j(t, e)
        }
    }
}

function ye(a, t, l) {
    return a.$$set = e => {
        l(0, t = X(X({}, t), _t(e)))
    }, t = _t(t), [t]
}
class Se extends rt {
    constructor(t) {
        super(), at(this, t, ye, Ve, nt, {})
    }
}

function qt(a, t, l) {
    const e = a.slice();
    return e[1] = t[l], e[3] = l, e
}

function Nt(a, t, l) {
    const e = a.slice();
    return e[1] = t[l], e[3] = l, e
}

function jt(a) {
    let t, l, e, s, n;
    return {
        c() {
            t = C("div"), l = C("p"), e = tt("$"), s = tt(a[0]), n = D(), this.h()
        },
        l(r) {
            t = x(r, "DIV", {
                class: !0
            });
            var i = $(t);
            l = x(i, "P", {
                class: !0
            });
            var c = $(l);
            e = et(c, "$"), s = et(c, a[0]), c.forEach(h), n = I(i), i.forEach(h), this.h()
        },
        h() {
            o(l, "class", ""), o(t, "class", "pr-20 lg:pr-40")
        },
        m(r, i) {
            k(r, t, i), u(t, l), u(l, e), u(l, s), u(t, n)
        },
        p(r, i) {
            i & 1 && Mt(s, r[0])
        },
        d(r) {
            r && h(t)
        }
    }
}

function Rt(a) {
    let t, l, e;
    return {
        c() {
            t = C("div"), l = tt("$"), e = tt(a[0]), this.h()
        },
        l(s) {
            t = x(s, "DIV", {
                class: !0
            });
            var n = $(t);
            l = et(n, "$"), e = et(n, a[0]), n.forEach(h), this.h()
        },
        h() {
            o(t, "class", "pr-20 lg:pr-40")
        },
        m(s, n) {
            k(s, t, n), u(t, l), u(t, e)
        },
        p(s, n) {
            n & 1 && Mt(e, s[0])
        },
        d(s) {
            s && h(t)
        }
    }
}

function Te(a) {
    let t, l, e, s, n, r, i = kt(Array.from({
            length: 10
        })),
        c = [];
    for (let f = 0; f < i.length; f += 1) c[f] = jt(Nt(a, i, f));
    let m = kt(Array.from({
            length: 10
        })),
        _ = [];
    for (let f = 0; f < m.length; f += 1) _[f] = Rt(qt(a, m, f));
    return {
        c() {
            t = C("div"), l = C("div"), e = C("div"), s = C("div");
            for (let f = 0; f < c.length; f += 1) c[f].c();
            n = D(), r = C("div");
            for (let f = 0; f < _.length; f += 1) _[f].c();
            this.h()
        },
        l(f) {
            t = x(f, "DIV", {
                class: !0
            });
            var b = $(t);
            l = x(b, "DIV", {
                class: !0
            });
            var d = $(l);
            e = x(d, "DIV", {
                class: !0
            });
            var g = $(e);
            s = x(g, "DIV", {
                class: !0
            });
            var w = $(s);
            for (let v = 0; v < c.length; v += 1) c[v].l(w);
            w.forEach(h), n = I(g), r = x(g, "DIV", {
                "aria-hidden": !0,
                class: !0
            });
            var p = $(r);
            for (let v = 0; v < _.length; v += 1) _[v].l(p);
            p.forEach(h), g.forEach(h), d.forEach(h), b.forEach(h), this.h()
        },
        h() {
            o(s, "class", "move flex svelte-3o2esa"), o(r, "aria-hidden", "true"), o(r, "class", "move flex svelte-3o2esa"), o(e, "class", "pl-20 text-2xl py-4 w-full flex"), o(l, "class", "grid overflow-hidden"), o(t, "class", "bg-black items-center overflow-hidden text-base-100 w-full justify-items-center")
        },
        m(f, b) {
            k(f, t, b), u(t, l), u(l, e), u(e, s);
            for (let d = 0; d < c.length; d += 1) c[d] && c[d].m(s, null);
            u(e, n), u(e, r);
            for (let d = 0; d < _.length; d += 1) _[d] && _[d].m(r, null)
        },
        p(f, [b]) {
            if (b & 1) {
                i = kt(Array.from({
                    length: 10
                }));
                let d;
                for (d = 0; d < i.length; d += 1) {
                    const g = Nt(f, i, d);
                    c[d] ? c[d].p(g, b) : (c[d] = jt(g), c[d].c(), c[d].m(s, null))
                }
                for (; d < c.length; d += 1) c[d].d(1);
                c.length = i.length
            }
            if (b & 1) {
                m = kt(Array.from({
                    length: 10
                }));
                let d;
                for (d = 0; d < m.length; d += 1) {
                    const g = qt(f, m, d);
                    _[d] ? _[d].p(g, b) : (_[d] = Rt(g), _[d].c(), _[d].m(r, null))
                }
                for (; d < _.length; d += 1) _[d].d(1);
                _.length = m.length
            }
        },
        i: O,
        o: O,
        d(f) {
            f && h(t), Ht(c, f), Ht(_, f)
        }
    }
}

function qe(a, t, l) {
    let {
        ticker: e
    } = t;
    return a.$$set = s => {
        "ticker" in s && l(0, e = s.ticker)
    }, [e]
}
class Pt extends rt {
    constructor(t) {
        super(), at(this, t, qe, Te, nt, {
            ticker: 0
        })
    }
}
const Ne = "" + new URL("../assets/3.DqEjcXNl.png",
        import.meta.url).href,
    je = "data:image/svg+xml,%3csvg%20id='visual'%20viewBox='0%200%203000%20250'%20width='3000'%20height='250'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%3e%3cpath%20d='M0%20128L27.8%20116.7C55.7%20105.3%20111.3%2082.7%20166.8%2079C222.3%2075.3%20277.7%2090.7%20333.2%2099.5C388.7%20108.3%20444.3%20110.7%20500%20101.8C555.7%2093%20611.3%2073%20666.8%2078.5C722.3%2084%20777.7%20115%20833.2%20120.7C888.7%20126.3%20944.3%20106.7%201000%2099.8C1055.7%2093%201111.3%2099%201166.8%20103.7C1222.3%20108.3%201277.7%20111.7%201333.2%20109.8C1388.7%20108%201444.3%20101%201500%20104.7C1555.7%20108.3%201611.3%20122.7%201666.8%20125.3C1722.3%20128%201777.7%20119%201833.2%20119.7C1888.7%20120.3%201944.3%20130.7%202000%20135.8C2055.7%20141%202111.3%20141%202166.8%20137.8C2222.3%20134.7%202277.7%20128.3%202333.2%20121.8C2388.7%20115.3%202444.3%20108.7%202500%20107.3C2555.7%20106%202611.3%20110%202666.8%20118.8C2722.3%20127.7%202777.7%20141.3%202833.2%20141.5C2888.7%20141.7%202944.3%20128.3%202972.2%20121.7L3000%20115L3000%20251L2972.2%20251C2944.3%20251%202888.7%20251%202833.2%20251C2777.7%20251%202722.3%20251%202666.8%20251C2611.3%20251%202555.7%20251%202500%20251C2444.3%20251%202388.7%20251%202333.2%20251C2277.7%20251%202222.3%20251%202166.8%20251C2111.3%20251%202055.7%20251%202000%20251C1944.3%20251%201888.7%20251%201833.2%20251C1777.7%20251%201722.3%20251%201666.8%20251C1611.3%20251%201555.7%20251%201500%20251C1444.3%20251%201388.7%20251%201333.2%20251C1277.7%20251%201222.3%20251%201166.8%20251C1111.3%20251%201055.7%20251%201000%20251C944.3%20251%20888.7%20251%20833.2%20251C777.7%20251%20722.3%20251%20666.8%20251C611.3%20251%20555.7%20251%20500%20251C444.3%20251%20388.7%20251%20333.2%20251C277.7%20251%20222.3%20251%20166.8%20251C111.3%20251%2055.7%20251%2027.8%20251L0%20251Z'%20fill='%2350f27d'%3e%3c/path%3e%3cpath%20d='M0%20175L27.8%20173.8C55.7%20172.7%20111.3%20170.3%20166.8%20175C222.3%20179.7%20277.7%20191.3%20333.2%20195C388.7%20198.7%20444.3%20194.3%20500%20188.8C555.7%20183.3%20611.3%20176.7%20666.8%20168C722.3%20159.3%20777.7%20148.7%20833.2%20151.5C888.7%20154.3%20944.3%20170.7%201000%20168.7C1055.7%20166.7%201111.3%20146.3%201166.8%20145.2C1222.3%20144%201277.7%20162%201333.2%20165.7C1388.7%20169.3%201444.3%20158.7%201500%20156.5C1555.7%20154.3%201611.3%20160.7%201666.8%20157.7C1722.3%20154.7%201777.7%20142.3%201833.2%20142.7C1888.7%20143%201944.3%20156%202000%20158.3C2055.7%20160.7%202111.3%20152.3%202166.8%20155C2222.3%20157.7%202277.7%20171.3%202333.2%20179C2388.7%20186.7%202444.3%20188.3%202500%20184.8C2555.7%20181.3%202611.3%20172.7%202666.8%20164.8C2722.3%20157%202777.7%20150%202833.2%20152.3C2888.7%20154.7%202944.3%20166.3%202972.2%20172.2L3000%20178L3000%20251L2972.2%20251C2944.3%20251%202888.7%20251%202833.2%20251C2777.7%20251%202722.3%20251%202666.8%20251C2611.3%20251%202555.7%20251%202500%20251C2444.3%20251%202388.7%20251%202333.2%20251C2277.7%20251%202222.3%20251%202166.8%20251C2111.3%20251%202055.7%20251%202000%20251C1944.3%20251%201888.7%20251%201833.2%20251C1777.7%20251%201722.3%20251%201666.8%20251C1611.3%20251%201555.7%20251%201500%20251C1444.3%20251%201388.7%20251%201333.2%20251C1277.7%20251%201222.3%20251%201166.8%20251C1111.3%20251%201055.7%20251%201000%20251C944.3%20251%20888.7%20251%20833.2%20251C777.7%20251%20722.3%20251%20666.8%20251C611.3%20251%20555.7%20251%20500%20251C444.3%20251%20388.7%20251%20333.2%20251C277.7%20251%20222.3%20251%20166.8%20251C111.3%20251%2055.7%20251%2027.8%20251L0%20251Z'%20fill='%23000000'%3e%3c/path%3e%3c/svg%3e";

function Re(a) {
    let t, l, e = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "32"
        }, {
            height: "32"
        }, {
            viewBox: "0 0 32 32"
        }, a[2]],
        s = {};
    for (let n = 0; n < e.length; n += 1) s = X(s, e[n]);
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(n) {
            t = G(n, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var r = $(t);
            l = G(r, "path", {
                fill: !0,
                d: !0
            }), $(l).forEach(h), r.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "d", "M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.328 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27m-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.432.265-.432c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"), K(t, s)
        },
        m(n, r) {
            k(n, t, r), u(t, l)
        },
        p(n, r) {
            K(t, s = vt(e, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "32"
            }, {
                height: "32"
            }, {
                viewBox: "0 0 32 32"
            }, r & 4 && n[2]]))
        },
        d(n) {
            n && h(t)
        }
    }
}

function Oe(a) {
    let t, l, e = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "32"
        }, {
            height: "32"
        }, {
            viewBox: "0 0 24 24"
        }, a[2]],
        s = {};
    for (let n = 0; n < e.length; n += 1) s = X(s, e[n]);
    return {
        c() {
            t = L("svg"), l = L("path"), this.h()
        },
        l(n) {
            t = G(n, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var r = $(t);
            l = G(r, "path", {
                fill: !0,
                d: !0
            }), $(l).forEach(h), r.forEach(h), this.h()
        },
        h() {
            o(l, "fill", "currentColor"), o(l, "d", "M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"), K(t, s)
        },
        m(n, r) {
            k(n, t, r), u(t, l)
        },
        p(n, r) {
            K(t, s = vt(e, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "32"
            }, {
                height: "32"
            }, {
                viewBox: "0 0 24 24"
            }, r & 4 && n[2]]))
        },
        d(n) {
            n && h(t)
        }
    }
}

function ze(a) {
    let t, l, e = "Groggo",
        s, n, r, i, c, m = `$GROGGO Coin has no association with Matt Furie or his creation “Mindviscosity.” Instead,
			$GROGGO Coin pays homage to a beloved meme that has captured the hearts of millions.`,
        _, f, b, d, g, w;
    return b = new pt({
        props: {
            link: a[1],
            $$slots: {
                default: [Re]
            },
            $$scope: {
                ctx: a
            }
        }
    }), g = new pt({
        props: {
            link: a[0],
            $$slots: {
                default: [Oe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            t = C("div"), l = C("h1"), l.textContent = e, s = D(), n = C("img"), i = D(), c = C("p"), c.textContent = m, _ = D(), f = C("div"), T(b.$$.fragment), d = D(), T(g.$$.fragment), this.h()
        },
        l(p) {
            t = x(p, "DIV", {
                class: !0
            });
            var v = $(t);
            l = x(v, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), R(l) !== "svelte-1r2i0oc" && (l.textContent = e), s = I(v), n = x(v, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), i = I(v), c = x(v, "P", {
                class: !0,
                "data-svelte-h": !0
            }), R(c) !== "svelte-1rso536" && (c.textContent = m), _ = I(v), f = x(v, "DIV", {
                class: !0
            });
            var P = $(f);
            q(b.$$.fragment, P), d = I(P), q(g.$$.fragment, P), P.forEach(h), v.forEach(h), this.h()
        },
        h() {
            o(l, "class", "h1 text-white"), wt(n.src, r = Ne) || o(n, "src", r), o(n, "class", "h-[270px]"), o(n, "alt", "Fullbody"), o(c, "class", "text-center font-bold"), o(f, "class", "inline-flex gap-5 w-full justify-center"), o(t, "class", "scroll-m-10 w-full gap-10 flex flex-col items-center px-[10vw]")
        },
        m(p, v) {
            k(p, t, v), u(t, l), u(t, s), u(t, n), u(t, i), u(t, c), u(t, _), u(t, f), N(b, f, null), u(f, d), N(g, f, null), w = !0
        },
        p(p, v) {
            const P = {};
            v & 2 && (P.link = p[1]), v & 12 && (P.$$scope = {
                dirty: v,
                ctx: p
            }), b.$set(P);
            const A = {};
            v & 1 && (A.link = p[0]), v & 12 && (A.$$scope = {
                dirty: v,
                ctx: p
            }), g.$set(A)
        },
        i(p) {
            w || (H(b.$$.fragment, p), H(g.$$.fragment, p), w = !0)
        },
        o(p) {
            V(b.$$.fragment, p), V(g.$$.fragment, p), w = !1
        },
        d(p) {
            p && h(t), j(b), j(g)
        }
    }
}

function Fe(a) {
    let t, l, e, s, n, r, i, c, m = '<a href="mailto:contact@groggocoin.vip">contact@groggocoin.vip</a>',
        _, f, b, d = new Date().getFullYear() + "",
        g, w, p;
    return t = new Ct({
        props: {
            styles: "  gap-5",
            $$slots: {
                default: [ze]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment), l = D(), e = C("img"), n = D(), r = C("footer"), i = C("aside"), c = C("p"), c.innerHTML = m, _ = D(), f = C("p"), b = tt("@ "), g = tt(d), w = tt(" All Rights Reverved by GROGGO"), this.h()
        },
        l(v) {
            q(t.$$.fragment, v), l = I(v), e = x(v, "IMG", {
                src: !0,
                alt: !0
            }), n = I(v), r = x(v, "FOOTER", {
                class: !0
            });
            var P = $(r);
            i = x(P, "ASIDE", {
                class: !0
            });
            var A = $(i);
            c = x(A, "P", {
                class: !0,
                "data-svelte-h": !0
            }), R(c) !== "svelte-10mgjcn" && (c.innerHTML = m), _ = I(A), f = x(A, "P", {
                class: !0
            });
            var Z = $(f);
            b = et(Z, "@ "), g = et(Z, d), w = et(Z, " All Rights Reverved by GROGGO"), Z.forEach(h), A.forEach(h), P.forEach(h), this.h()
        },
        h() {
            wt(e.src, s = je) || o(e, "src", s), o(e, "alt", ""), o(c, "class", "col-span-2 font-black text-center"), o(f, "class", "font-black col-span-2 text-center"), o(i, "class", "grid gap-5"), o(r, "class", "footer footer-center bg-gradient-to-b from-black to-neutral-900 text-base-100 p-4")
        },
        m(v, P) {
            N(t, v, P), k(v, l, P), k(v, e, P), k(v, n, P), k(v, r, P), u(r, i), u(i, c), u(i, _), u(i, f), u(f, b), u(f, g), u(f, w), p = !0
        },
        p(v, [P]) {
            const A = {};
            P & 15 && (A.$$scope = {
                dirty: P,
                ctx: v
            }), t.$set(A)
        },
        i(v) {
            p || (H(t.$$.fragment, v), p = !0)
        },
        o(v) {
            V(t.$$.fragment, v), p = !1
        },
        d(v) {
            v && (h(l), h(e), h(n), h(r)), j(t, v)
        }
    }
}

function Ze(a, t, l) {
    let {
        twitter: e
    } = t, {
        telegram: s
    } = t;
    return a.$$set = n => {
        l(2, t = X(X({}, t), _t(n))), "twitter" in n && l(0, e = n.twitter), "telegram" in n && l(1, s = n.telegram)
    }, t = _t(t), [e, s, t]
}
class Ue extends rt {
    constructor(t) {
        super(), at(this, t, Ze, Fe, nt, {
            twitter: 0,
            telegram: 1
        })
    }
}
const Ye = a => ({}),
    Ot = a => ({}),
    We = a => ({}),
    zt = a => ({});

function Je(a) {
    let t, l, e, s, n, r;
    const i = a[1].title,
        c = ht(i, a, a[0], zt),
        m = a[1].text,
        _ = ht(m, a, a[0], Ot);
    return {
        c() {
            t = C("div"), l = C("div"), e = C("h4"), c && c.c(), s = D(), n = C("p"), _ && _.c(), this.h()
        },
        l(f) {
            t = x(f, "DIV", {
                class: !0
            });
            var b = $(t);
            l = x(b, "DIV", {
                class: !0
            });
            var d = $(l);
            e = x(d, "H4", {
                class: !0
            });
            var g = $(e);
            c && c.l(g), g.forEach(h), s = I(d), n = x(d, "P", {
                class: !0
            });
            var w = $(n);
            _ && _.l(w), w.forEach(h), d.forEach(h), b.forEach(h), this.h()
        },
        h() {
            o(e, "class", "text-xl tracking-widest "), o(n, "class", "font-black text-2xl "), o(l, "class", "text-center grid gap-5"), o(t, "class", "place-items-center border-4 border-black bg-base-100 grid p-10 card gap-5")
        },
        m(f, b) {
            k(f, t, b), u(t, l), u(l, e), c && c.m(e, null), u(l, s), u(l, n), _ && _.m(n, null), r = !0
        },
        p(f, [b]) {
            c && c.p && (!r || b & 1) && ft(c, i, f, f[0], r ? gt(i, f[0], b, We) : ut(f[0]), zt), _ && _.p && (!r || b & 1) && ft(_, m, f, f[0], r ? gt(m, f[0], b, Ye) : ut(f[0]), Ot)
        },
        i(f) {
            r || (H(c, f), H(_, f), r = !0)
        },
        o(f) {
            V(c, f), V(_, f), r = !1
        },
        d(f) {
            f && h(t), c && c.d(f), _ && _.d(f)
        }
    }
}

function Ke(a, t, l) {
    let {
        $$slots: e = {},
        $$scope: s
    } = t;
    return a.$$set = n => {
        "$$scope" in n && l(0, s = n.$$scope)
    }, [s, e]
}
class Bt extends rt {
    constructor(t) {
        super(), at(this, t, Ke, Je, nt, {})
    }
}

function Xe(a) {
    let t, l = "Total Supply";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1nd5pe2" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function Qe(a) {
    let t, l = "420,690,000";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1heubg1" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function t2(a) {
    let t, l = "Liquidity";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-s66upx" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function e2(a) {
    let t, l = "Burned";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-92ue28" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function l2(a) {
    let t, l = "Contract Ownership";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1f5ne1k" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "title")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function s2(a) {
    let t, l = "Renounced";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1g9tbyz" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "text")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function n2(a) {
    let t, l, e = "Tokenomics",
        s, n, r, i, c, m, _, f, b, d, g, w;
    return i = new Bt({
        props: {
            $$slots: {
                text: [Qe],
                title: [Xe]
            },
            $$scope: {
                ctx: a
            }
        }
    }), m = new Bt({
        props: {
            $$slots: {
                text: [e2],
                title: [t2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), f = new Bt({
        props: {
            $$slots: {
                text: [s2],
                title: [l2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            t = C("div"), l = C("h1"), l.textContent = e, s = D(), n = C("div"), r = C("div"), T(i.$$.fragment), c = D(), T(m.$$.fragment), _ = D(), T(f.$$.fragment), b = D(), d = C("img"), this.h()
        },
        l(p) {
            t = x(p, "DIV", {
                id: !0,
                class: !0
            });
            var v = $(t);
            l = x(v, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), R(l) !== "svelte-o2c0jj" && (l.textContent = e), s = I(v), n = x(v, "DIV", {
                class: !0
            });
            var P = $(n);
            r = x(P, "DIV", {
                class: !0
            });
            var A = $(r);
            q(i.$$.fragment, A), c = I(A), q(m.$$.fragment, A), _ = I(A), q(f.$$.fragment, A), A.forEach(h), b = I(P), d = x(P, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), P.forEach(h), v.forEach(h), this.h()
        },
        h() {
            o(l, "class", "h1 text-base-100"), o(r, "class", "grid gap-5 card p-4 text-center"), wt(d.src, g = pe) || o(d, "src", g), o(d, "class", "card"), o(d, "alt", ""), o(n, "class", "grid lg:grid-cols-2 items-center gap-10"), o(t, "id", "tokenomics"), o(t, "class", "scroll-m-32 w-full gap-10 items-center grid justify-center")
        },
        m(p, v) {
            k(p, t, v), u(t, l), u(t, s), u(t, n), u(n, r), N(i, r, null), u(r, c), N(m, r, null), u(r, _), N(f, r, null), u(n, b), u(n, d), w = !0
        },
        p(p, v) {
            const P = {};
            v & 1 && (P.$$scope = {
                dirty: v,
                ctx: p
            }), i.$set(P);
            const A = {};
            v & 1 && (A.$$scope = {
                dirty: v,
                ctx: p
            }), m.$set(A);
            const Z = {};
            v & 1 && (Z.$$scope = {
                dirty: v,
                ctx: p
            }), f.$set(Z)
        },
        i(p) {
            w || (H(i.$$.fragment, p), H(m.$$.fragment, p), H(f.$$.fragment, p), w = !0)
        },
        o(p) {
            V(i.$$.fragment, p), V(m.$$.fragment, p), V(f.$$.fragment, p), w = !1
        },
        d(p) {
            p && h(t), j(i), j(m), j(f)
        }
    }
}

function r2(a) {
    let t, l;
    return t = new Ct({
        props: {
            styles: "gap-5",
            $$slots: {
                default: [n2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(e) {
            q(t.$$.fragment, e)
        },
        m(e, s) {
            N(t, e, s), l = !0
        },
        p(e, [s]) {
            const n = {};
            s & 1 && (n.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(n)
        },
        i(e) {
            l || (H(t.$$.fragment, e), l = !0)
        },
        o(e) {
            V(t.$$.fragment, e), l = !1
        },
        d(e) {
            j(t, e)
        }
    }
}
class a2 extends rt {
    constructor(t) {
        super(), at(this, t, null, r2, nt, {})
    }
}
const o2 = "" + new URL("../assets/boys-club.BsyoJUTV.jpg",
        import.meta.url).href,
    i2 = "" + new URL("../assets/mindviscosity.CMBr-2Kz.jpg",
        import.meta.url).href,
    c2 = "" + new URL("../assets/thenightriders.6wbSYB8A.jpg",
        import.meta.url).href,
    h2 = "" + new URL("../assets/pepe.DVKu0Hc7.webp",
        import.meta.url).href,
    f2 = "" + new URL("../assets/hoppy.CcJk_cCE.webp",
        import.meta.url).href,
    u2 = a => ({}),
    Ft = a => ({}),
    g2 = a => ({}),
    Zt = a => ({}),
    m2 = a => ({}),
    Ut = a => ({});

function d2(a) {
    let t, l = a[4](a[3]) + "",
        e, s;
    return {
        c() {
            t = C("p"), e = tt(l), this.h()
        },
        l(n) {
            t = x(n, "P", {
                class: !0
            });
            var r = $(t);
            e = et(r, l), r.forEach(h), this.h()
        },
        h() {
            o(t, "class", s = (a[2] ? "text-blue-500 " : "") + " text-xl")
        },
        m(n, r) {
            k(n, t, r), u(t, e)
        },
        p(n, r) {
            r & 4 && s !== (s = (n[2] ? "text-blue-500 " : "") + " text-xl") && o(t, "class", s)
        },
        d(n) {
            n && h(t)
        }
    }
}

function p2(a) {
    let t, l, e = a[4](a[3]) + "",
        s, n, r;
    return {
        c() {
            t = C("p"), l = C("span"), s = tt(e), n = tt(" and growing..."), this.h()
        },
        l(i) {
            t = x(i, "P", {
                class: !0
            });
            var c = $(t);
            l = x(c, "SPAN", {
                class: !0
            });
            var m = $(l);
            s = et(m, e), m.forEach(h), n = et(c, " and growing..."), c.forEach(h), this.h()
        },
        h() {
            o(l, "class", "font-black"), o(t, "class", r = (a[2] ? "text-blue-500 " : "") + " text-xl")
        },
        m(i, c) {
            k(i, t, c), u(t, l), u(l, s), u(t, n)
        },
        p(i, c) {
            c & 4 && r !== (r = (i[2] ? "text-blue-500 " : "") + " text-xl") && o(t, "class", r)
        },
        d(i) {
            i && h(t)
        }
    }
}

function v2(a) {
    let t, l, e, s, n, r, i, c, m, _, f, b, d, g = "Gave us",
        w, p, v, P, A, Z, Q, W, M, B, J, F;
    const ot = a[8].book,
        E = ht(ot, a, a[7], Ut),
        y = a[8].year,
        z = ht(y, a, a[7], Zt);
    let st = [{
            xmlns: "http://www.w3.org/2000/svg"
        }, {
            width: "24"
        }, {
            height: "24"
        }, {
            viewBox: "0 0 16 16"
        }, a[5]],
        ct = {};
    for (let S = 0; S < st.length; S += 1) ct = X(ct, st[S]);
    const mt = a[8].coin,
        U = ht(mt, a, a[7], Ft);

    function dt(S, Y) {
        return S[2] ? p2 : d2
    }
    let xt = dt(a),
        it = xt(a);
    return {
        c() {
            t = C("div"), l = C("div"), e = C("img"), n = D(), r = C("div"), i = C("h3"), c = tt('"'), E && E.c(), m = tt('"'), _ = D(), f = C("p"), z && z.c(), b = D(), d = C("p"), d.textContent = g, w = D(), p = L("svg"), v = L("path"), P = D(), A = C("img"), Q = D(), W = C("h4"), M = tt("$"), U && U.c(), J = D(), it.c(), this.h()
        },
        l(S) {
            t = x(S, "DIV", {
                class: !0
            });
            var Y = $(t);
            l = x(Y, "DIV", {
                class: !0
            });
            var It = $(l);
            e = x(It, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), It.forEach(h), n = I(Y), r = x(Y, "DIV", {
                class: !0
            });
            var lt = $(r);
            i = x(lt, "H3", {
                class: !0
            });
            var bt = $(i);
            c = et(bt, '"'), E && E.l(bt), m = et(bt, '"'), bt.forEach(h), _ = I(lt), f = x(lt, "P", {
                class: !0
            });
            var Lt = $(f);
            z && z.l(Lt), Lt.forEach(h), b = I(lt), d = x(lt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), R(d) !== "svelte-yk10q2" && (d.textContent = g), w = I(lt), p = G(lt, "svg", {
                xmlns: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var Gt = $(p);
            v = G(Gt, "path", {
                fill: !0,
                d: !0
            }), $(v).forEach(h), Gt.forEach(h), P = I(lt), A = x(lt, "IMG", {
                src: !0,
                class: !0,
                alt: !0
            }), Q = I(lt), W = x(lt, "H4", {
                class: !0
            });
            var At = $(W);
            M = et(At, "$"), U && U.l(At), At.forEach(h), J = I(lt), it.l(lt), lt.forEach(h), Y.forEach(h), this.h()
        },
        h() {
            wt(e.src, s = a[0]) || o(e, "src", s), o(e, "class", "w-[340px] shadow-xl "), o(e, "alt", ""), o(l, "class", "h-full flex items-center"), o(i, "class", "font-bold text-3xl"), o(f, "class", "font-bold opacity-75"), o(d, "class", ""), o(v, "fill", "currentColor"), o(v, "d", "M12.5 8.6L9 12.2V0H7v12.2L3.5 8.6l-1.4 1.5L8 16l5.9-5.9z"), K(p, ct), wt(A.src, Z = a[1]) || o(A, "src", Z), o(A, "class", "card shadow-xl mb-5 w-[100px]"), o(A, "alt", ""), o(W, "class", B = (a[2] ? "text-blue-500 " : "") + " text-4xl"), o(r, "class", "flex flex-col place-items-center"), o(t, "class", "flex flex-col gap-4 xl:h-[820px] p-4 text-center font-medium place-items-center")
        },
        m(S, Y) {
            k(S, t, Y), u(t, l), u(l, e), u(t, n), u(t, r), u(r, i), u(i, c), E && E.m(i, null), u(i, m), u(r, _), u(r, f), z && z.m(f, null), u(r, b), u(r, d), u(r, w), u(r, p), u(p, v), u(r, P), u(r, A), u(r, Q), u(r, W), u(W, M), U && U.m(W, null), u(r, J), it.m(r, null), F = !0
        },
        p(S, [Y]) {
            (!F || Y & 1 && !wt(e.src, s = S[0])) && o(e, "src", s), E && E.p && (!F || Y & 128) && ft(E, ot, S, S[7], F ? gt(ot, S[7], Y, m2) : ut(S[7]), Ut), z && z.p && (!F || Y & 128) && ft(z, y, S, S[7], F ? gt(y, S[7], Y, g2) : ut(S[7]), Zt), K(p, ct = vt(st, [{
                xmlns: "http://www.w3.org/2000/svg"
            }, {
                width: "24"
            }, {
                height: "24"
            }, {
                viewBox: "0 0 16 16"
            }, Y & 32 && S[5]])), (!F || Y & 2 && !wt(A.src, Z = S[1])) && o(A, "src", Z), U && U.p && (!F || Y & 128) && ft(U, mt, S, S[7], F ? gt(mt, S[7], Y, u2) : ut(S[7]), Ft), (!F || Y & 4 && B !== (B = (S[2] ? "text-blue-500 " : "") + " text-4xl")) && o(W, "class", B), xt === (xt = dt(S)) && it ? it.p(S, Y) : (it.d(1), it = xt(S), it && (it.c(), it.m(r, null)))
        },
        i(S) {
            F || (H(E, S), H(z, S), H(U, S), F = !0)
        },
        o(S) {
            V(E, S), V(z, S), V(U, S), F = !1
        },
        d(S) {
            S && h(t), E && E.d(S), z && z.d(S), U && U.d(S), it.d()
        }
    }
}

function _2(a, t, l) {
    let {
        $$slots: e = {},
        $$scope: s
    } = t, {
        price: n
    } = t, {
        image: r
    } = t, {
        coin: i
    } = t, {
        groggo: c = !1
    } = t, {
        item: {
            pair: {
                marketCap: m
            }
        }
    } = n;
    const _ = f => {
        const b = [{
                value: 1,
                symbol: ""
            }, {
                value: 1e3,
                symbol: "K"
            }, {
                value: 1e6,
                symbol: "M"
            }, {
                value: 1e9,
                symbol: "B"
            }],
            d = /\.0+$|(\.[0-9]*[1-9])0+$/;
        for (let g = b.length - 1; g > 0; g--)
            if (f >= b[g].value) return `$${(f/b[g].value).toFixed(2).replace(d,"$1")}${b[g].symbol}`;
        return `$${f}`
    };
    return a.$$set = f => {
        l(5, t = X(X({}, t), _t(f))), "price" in f && l(6, n = f.price), "image" in f && l(0, r = f.image), "coin" in f && l(1, i = f.coin), "groggo" in f && l(2, c = f.groggo), "$$scope" in f && l(7, s = f.$$scope)
    }, t = _t(t), [r, i, c, m, _, t, n, s, e]
}
class Dt extends rt {
    constructor(t) {
        super(), at(this, t, _2, v2, nt, {
            price: 6,
            image: 0,
            coin: 1,
            groggo: 2
        })
    }
}

function $2(a) {
    let t, l = "The Boy's Club";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-g0smfr" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "book")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function w2(a) {
    let t, l = "2006";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-dhvvkm" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "year")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function C2(a) {
    let t, l = "PEPE";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-29gcby" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "coin")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function x2(a) {
    let t, l = "The Night Riders";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-lpgs6s" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "book")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function b2(a) {
    let t, l = "2012";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-wp6p5r" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "year")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function k2(a) {
    let t, l = "HOPPY";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-v7af72" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "coin")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function E2(a) {
    let t, l = "Mindviscosity";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-baaw47" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "book")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function P2(a) {
    let t, l = "2021";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-lphkkh" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "year")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function M2(a) {
    let t, l = "GROGGO";
    return {
        c() {
            t = C("span"), t.textContent = l, this.h()
        },
        l(e) {
            t = x(e, "SPAN", {
                slot: !0,
                "data-svelte-h": !0
            }), R(t) !== "svelte-1twj52j" && (t.textContent = l), this.h()
        },
        h() {
            o(t, "slot", "coin")
        },
        m(e, s) {
            k(e, t, s)
        },
        p: O,
        d(e) {
            e && h(t)
        }
    }
}

function A2(a) {
    let t, l, e = "Matt's Books",
        s, n, r = "Following the Frog Narrative",
        i, c, m, _, f, b, d, g;
    return m = new Dt({
        props: {
            coin: h2,
            image: o2,
            price: a[0],
            $$slots: {
                coin: [C2],
                year: [w2],
                book: [$2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), f = new Dt({
        props: {
            coin: f2,
            image: c2,
            price: a[1],
            $$slots: {
                coin: [k2],
                year: [b2],
                book: [x2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), d = new Dt({
        props: {
            groggo: !0,
            coin: Wt,
            image: i2,
            price: a[2],
            $$slots: {
                coin: [M2],
                year: [P2],
                book: [E2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            t = C("div"), l = C("h1"), l.textContent = e, s = D(), n = C("p"), n.textContent = r, i = D(), c = C("div"), T(m.$$.fragment), _ = D(), T(f.$$.fragment), b = D(), T(d.$$.fragment), this.h()
        },
        l(w) {
            t = x(w, "DIV", {
                class: !0
            });
            var p = $(t);
            l = x(p, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), R(l) !== "svelte-1ppbbhy" && (l.textContent = e), s = I(p), n = x(p, "P", {
                class: !0,
                "data-svelte-h": !0
            }), R(n) !== "svelte-1g31gck" && (n.textContent = r), i = I(p), c = x(p, "DIV", {
                class: !0
            });
            var v = $(c);
            q(m.$$.fragment, v), _ = I(v), q(f.$$.fragment, v), b = I(v), q(d.$$.fragment, v), v.forEach(h), p.forEach(h), this.h()
        },
        h() {
            o(l, "class", "h1 tracking-normal text-white"), o(n, "class", "text-2xl text-white font-Genty text-center"), o(c, "class", "pt-10 flex w-full justify-around flex-wrap gap-20 "), o(t, "class", "w-full scroll-m-32 gap-10 place-items-center ")
        },
        m(w, p) {
            k(w, t, p), u(t, l), u(t, s), u(t, n), u(t, i), u(t, c), N(m, c, null), u(c, _), N(f, c, null), u(c, b), N(d, c, null), g = !0
        },
        p(w, p) {
            const v = {};
            p & 1 && (v.price = w[0]), p & 8 && (v.$$scope = {
                dirty: p,
                ctx: w
            }), m.$set(v);
            const P = {};
            p & 2 && (P.price = w[1]), p & 8 && (P.$$scope = {
                dirty: p,
                ctx: w
            }), f.$set(P);
            const A = {};
            p & 4 && (A.price = w[2]), p & 8 && (A.$$scope = {
                dirty: p,
                ctx: w
            }), d.$set(A)
        },
        i(w) {
            g || (H(m.$$.fragment, w), H(f.$$.fragment, w), H(d.$$.fragment, w), g = !0)
        },
        o(w) {
            V(m.$$.fragment, w), V(f.$$.fragment, w), V(d.$$.fragment, w), g = !1
        },
        d(w) {
            w && h(t), j(m), j(f), j(d)
        }
    }
}

function B2(a) {
    let t, l;
    return t = new Ct({
        props: {
            styles: "   py-[7vh] lg:w-[100vw]  gap-5",
            $$slots: {
                default: [A2]
            },
            $$scope: {
                ctx: a
            }
        }
    }), {
        c() {
            T(t.$$.fragment)
        },
        l(e) {
            q(t.$$.fragment, e)
        },
        m(e, s) {
            N(t, e, s), l = !0
        },
        p(e, [s]) {
            const n = {};
            s & 15 && (n.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(n)
        },
        i(e) {
            l || (H(t.$$.fragment, e), l = !0)
        },
        o(e) {
            V(t.$$.fragment, e), l = !1
        },
        d(e) {
            j(t, e)
        }
    }
}

function D2(a, t, l) {
    let {
        pricePepe: e
    } = t, {
        priceHoppy: s
    } = t, {
        price: n
    } = t;
    return a.$$set = r => {
        "pricePepe" in r && l(0, e = r.pricePepe), "priceHoppy" in r && l(1, s = r.priceHoppy), "price" in r && l(2, n = r.price)
    }, [e, s, n]
}
class I2 extends rt {
    constructor(t) {
        super(), at(this, t, D2, B2, nt, {
            pricePepe: 0,
            priceHoppy: 1,
            price: 2
        })
    }
}

function L2(a) {
    let t, l, e, s, n, r, i, c, m, _, f, b, d, g, w, p, v, P, A, Z, Q, W, M, B, J, F, ot;
    return e = new de({
        props: {
            ca: a[1],
            dexscreener: a[5],
            etherscan: a[6],
            telegram: a[2],
            twitter: a[3],
            dextools: a[4]
        }
    }), n = new Pt({
        props: {
            ticker: a[0]
        }
    }), c = new ee({}), f = new I2({
        props: {
            price: a[7],
            pricePepe: a[9],
            priceHoppy: a[8]
        }
    }), d = new Pt({
        props: {
            ticker: a[0]
        }
    }), p = new a2({}), P = new Pt({
        props: {
            ticker: a[0]
        }
    }), Q = new Se({}), M = new Pt({
        props: {
            ticker: a[0]
        }
    }), F = new Ue({
        props: {
            telegram: a[2],
            twitter: a[3]
        }
    }), {
        c() {
            t = C("main"), l = C("div"), T(e.$$.fragment), s = D(), T(n.$$.fragment), r = D(), i = C("div"), T(c.$$.fragment), m = D(), _ = C("div"), T(f.$$.fragment), b = D(), T(d.$$.fragment), g = D(), w = C("div"), T(p.$$.fragment), v = D(), T(P.$$.fragment), A = D(), Z = C("div"), T(Q.$$.fragment), W = D(), T(M.$$.fragment), B = D(), J = C("div"), T(F.$$.fragment), this.h()
        },
        l(E) {
            t = x(E, "MAIN", {
                class: !0
            });
            var y = $(t);
            l = x(y, "DIV", {
                class: !0
            });
            var z = $(l);
            q(e.$$.fragment, z), z.forEach(h), s = I(y), q(n.$$.fragment, y), r = I(y), i = x(y, "DIV", {
                class: !0
            });
            var st = $(i);
            q(c.$$.fragment, st), st.forEach(h), m = I(y), _ = x(y, "DIV", {
                class: !0
            });
            var ct = $(_);
            q(f.$$.fragment, ct), ct.forEach(h), b = I(y), q(d.$$.fragment, y), g = I(y), w = x(y, "DIV", {
                class: !0
            });
            var mt = $(w);
            q(p.$$.fragment, mt), mt.forEach(h), v = I(y), q(P.$$.fragment, y), A = I(y), Z = x(y, "DIV", {
                class: !0
            });
            var U = $(Z);
            q(Q.$$.fragment, U), U.forEach(h), W = I(y), q(M.$$.fragment, y), B = I(y), J = x(y, "DIV", {
                class: !0
            });
            var dt = $(J);
            q(F.$$.fragment, dt), dt.forEach(h), y.forEach(h), this.h()
        },
        h() {
            o(l, "class", "w-full h-full grid place-items-center bg-gradient-to-b from-[#0adf44] to-base-100"), o(i, "class", "bg-[#0adf44] w-full h-full grid place-items-center"), o(_, "class", "bg-gradient-to-b from-[#0adf44] to-base-100 w-full h-full grid place-items-center"), o(w, "class", "bg-base-content w-full h-full grid place-items-center"), o(Z, "class", "bg-gradient-to-b from-[#0adf44] via-base-300 to-[#0adf44] w-full h-full grid place-items-center"), o(J, "class", "bg-gradient-to-b to-70% from-[#0adf44] to-base-100 w-full h-full grid place-items-center"), o(t, "class", "grid bg-base-100 place-items-center ")
        },
        m(E, y) {
            k(E, t, y), u(t, l), N(e, l, null), u(t, s), N(n, t, null), u(t, r), u(t, i), N(c, i, null), u(t, m), u(t, _), N(f, _, null), u(t, b), N(d, t, null), u(t, g), u(t, w), N(p, w, null), u(t, v), N(P, t, null), u(t, A), u(t, Z), N(Q, Z, null), u(t, W), N(M, t, null), u(t, B), u(t, J), N(F, J, null), ot = !0
        },
        p(E, [y]) {
            const z = {};
            y & 2 && (z.ca = E[1]), y & 32 && (z.dexscreener = E[5]), y & 64 && (z.etherscan = E[6]), y & 4 && (z.telegram = E[2]), y & 8 && (z.twitter = E[3]), y & 16 && (z.dextools = E[4]), e.$set(z);
            const st = {};
            y & 1 && (st.ticker = E[0]), n.$set(st);
            const ct = {};
            y & 1 && (ct.ticker = E[0]), d.$set(ct);
            const mt = {};
            y & 1 && (mt.ticker = E[0]), P.$set(mt);
            const U = {};
            y & 1 && (U.ticker = E[0]), M.$set(U);
            const dt = {};
            y & 4 && (dt.telegram = E[2]), y & 8 && (dt.twitter = E[3]), F.$set(dt)
        },
        i(E) {
            ot || (H(e.$$.fragment, E), H(n.$$.fragment, E), H(c.$$.fragment, E), H(f.$$.fragment, E), H(d.$$.fragment, E), H(p.$$.fragment, E), H(P.$$.fragment, E), H(Q.$$.fragment, E), H(M.$$.fragment, E), H(F.$$.fragment, E), ot = !0)
        },
        o(E) {
            V(e.$$.fragment, E), V(n.$$.fragment, E), V(c.$$.fragment, E), V(f.$$.fragment, E), V(d.$$.fragment, E), V(p.$$.fragment, E), V(P.$$.fragment, E), V(Q.$$.fragment, E), V(M.$$.fragment, E), V(F.$$.fragment, E), ot = !1
        },
        d(E) {
            E && h(t), j(e), j(n), j(c), j(f), j(d), j(p), j(P), j(Q), j(M), j(F)
        }
    }
}

function G2(a, t, l) {
    let {
        data: e
    } = t, {
        ticker: s = "GROGGO"
    } = t, {
        ca: n = "0x420110D74c4c3ea14043A09E81FAD53e1932F54c"
    } = t, {
        telegram: r = "https://t.me/groggo_eth"
    } = t, {
        twitter: i = "https://x.com/Groggo_eth"
    } = t, {
        dextools: c = "https://www.dextools.io/app/en/ether/pair-explorer/0x2bbf5243e49e8f0025988754dac6620ab0d3e162"
    } = t, {
        dexscreener: m = "https://dexscreener.com/ethereum/0x2bbf5243e49e8f0025988754dac6620ab0d3e162"
    } = t, {
        etherscan: _ = "https://etherscan.io/token/0x420110D74c4c3ea14043A09E81FAD53e1932F54c"
    } = t, {
        price: f,
        priceHoppy: b,
        pricePepe: d
    } = e;
    return a.$$set = g => {
        "data" in g && l(10, e = g.data), "ticker" in g && l(0, s = g.ticker), "ca" in g && l(1, n = g.ca), "telegram" in g && l(2, r = g.telegram), "twitter" in g && l(3, i = g.twitter), "dextools" in g && l(4, c = g.dextools), "dexscreener" in g && l(5, m = g.dexscreener), "etherscan" in g && l(6, _ = g.etherscan)
    }, [s, n, r, i, c, m, _, f, b, d, e]
}
class S2 extends rt {
    constructor(t) {
        super(), at(this, t, G2, L2, nt, {
            data: 10,
            ticker: 0,
            ca: 1,
            telegram: 2,
            twitter: 3,
            dextools: 4,
            dexscreener: 5,
            etherscan: 6
        })
    }
}
export {
    S2 as component
};