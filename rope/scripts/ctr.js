var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    var aa = void 0,
        i = !0,
        n = null,
        p = !1;

    function ca() {
        return function() {}
    }

    function fa(b) {
        return function(c) {
            this[b] = c
        }
    }

    function ga(b) {
        return function() {
            return this[b]
        }
    }

    function ha(b) {
        return function() {
            return b
        }
    }
    var r = {
            Et: 0,
            Ht: 1,
            Ct: 2,
            Lt: 3,
            qg: 4,
            ci: 5,
            Qt: 6,
            qa: 7,
            zu: 8,
            Bp: 9,
            al: 10,
            zg: 11,
            cl: 12,
            hl: 13,
            il: 14,
            jl: 15,
            kl: 16,
            Ep: 17,
            nl: 18,
            Fp: 19,
            Gp: 20,
            Hp: 21,
            ol: 22,
            wl: 23,
            Ip: 24,
            Jp: 25,
            vi: 26,
            ll: 27,
            Cp: 28,
            Dp: 29,
            ml: 30,
            rl: 31,
            sl: 32,
            tl: 33,
            yl: 34,
            zl: 35,
            fl: 36,
            gl: 37,
            dl: 38,
            $k: 39,
            It: 40,
            Jt: 41,
            Ut: 42,
            Kt: 43,
            Rt: 44,
            Pt: 45,
            St: 46,
            Nt: 47,
            Ot: 48,
            Mt: 49,
            Ft: 50,
            Wc: 51,
            ug: 52,
            Dt: 53,
            Tt: 54,
            Vt: 55,
            ik: 56,
            Gt: 57,
            Wt: 58,
            Ik: 59,
            sg: 60,
            yk: 61,
            mi: 62,
            Hk: 63,
            li: 64,
            Ak: 65,
            Bk: 66,
            Xc: 67,
            vk: 68,
            Gk: 69,
            Fk: 70,
            Ek: 71,
            ii: 72,
            tf: 73,
            zk: 74,
            tg: 75,
            ni: 76,
            Jk: 77,
            pi: 78,
            wk: 79,
            xk: 80,
            kc: 81,
            pl: 82,
            ql: 83,
            bl: 84,
            xl: 85,
            wi: 105,
            el: 106,
            su: 107,
            uk: 108,
            Dk: 111,
            Xo: 112,
            Yo: 113,
            Zo: 114,
            oi: 115,
            ki: 116,
            Ck: 117,
            ul: 118,
            vl: 119,
            ji: 120,
            pk: 121,
            qk: 122,
            rk: 123,
            sk: 124,
            Go: 125,
            Ho: 126,
            Io: 127,
            Jo: 128,
            Ko: 129,
            Lo: 130,
            Mo: 131,
            No: 132,
            Oo: 133,
            Po: 134,
            tk: 135,
            Qo: 136,
            Ro: 137,
            So: 138,
            To: 139,
            Uo: 140,
            Vo: 141,
            Wo: 142,
            hi: 143,
            Vz: 144
        },
        ia = {
            wg: "NORMAL",
            Fo: "IEPINNED",
            uf: "MORECOMING"
        },
        A = {
            i: 0,
            X: 1,
            di: 2,
            yu: 3
        };

    function C(b, c) {
        this.path = b;
        this.type = c
    }
    var E = [];
    E[r.Et] = new C("zeptolab.png", A.i);
    E[r.Ht] = new C("loaderbar_full.png", A.i);
    E[r.Ct] = new C("Default.png", A.i);
    E[r.Lt] = new C("menu_button_default.png", A.i);
    E[r.qg] = new C("big_font.png", A.di);
    E[r.ci] = new C("small_font.png", A.di);
    E[r.Qt] = new C("menu_loading.png", A.i);
    E[r.qa] = new C("tap", A.X);
    E[r.zu] = new C("menu_strings.xml", A.yu);
    E[r.Bp] = new C("button", A.X);
    E[r.al] = new C("bubble_break", A.X);
    E[r.zg] = new C("bubble", A.X);
    E[r.cl] = new C("candy_break", A.X);
    E[r.hl] = new C("monster_chewing", A.X);
    E[r.il] = new C("monster_close", A.X);
    E[r.jl] = new C("monster_open", A.X);
    E[r.kl] = new C("monster_sad", A.X);
    E[r.Ep] = new C("ring", A.X);
    E[r.nl] = new C("rope_bleak_1", A.X);
    E[r.Fp] = new C("rope_bleak_2", A.X);
    E[r.Gp] = new C("rope_bleak_3", A.X);
    E[r.Hp] = new C("rope_bleak_4", A.X);
    E[r.ol] = new C("rope_get", A.X);
    E[r.wl] = new C("star_1", A.X);
    E[r.Ip] = new C("star_2", A.X);
    E[r.Jp] = new C("star_3", A.X);
    E[r.vi] = new C("electric", A.X);
    E[r.ll] = new C("pump_1", A.X);
    E[r.Cp] = new C("pump_2", A.X);
    E[r.Dp] = new C("pump_3", A.X);
    E[r.ml] = new C("pump_4", A.X);
    E[r.rl] = new C("spider_activate", A.X);
    E[r.sl] = new C("spider_fall", A.X);
    E[r.tl] = new C("spider_win", A.X);
    E[r.yl] = new C("wheel", A.X);
    E[r.zl] = new C("win", A.X);
    E[r.fl] = new C("gravity_off", A.X);
    E[r.gl] = new C("gravity_on", A.X);
    E[r.dl] = new C("candy_link", A.X);
    E[r.$k] = new C("bouncer", A.X);
    E[r.It] = new C("menu_bgr.png", A.i);
    E[r.Jt] = new C("menu_button_crystal.png", A.i);
    E[r.Ut] = new C("menu_popup.png", A.i);
    E[r.Kt] = new C("menu_button_crystal_icon.png", A.i);
    E[r.Rt] = new C("menu_logo.png", A.i);
    E[r.Pt] = new C("menu_level_selection.png", A.i);
    E[r.St] = new C("menu_pack_selection.png", A.i);
    E[r.Nt] = new C("menu_extra_buttons.png", A.i);
    E[r.Ot] = new C("menu_extra_buttons_en.png", A.i);
    E[r.Mt] = new C("menu_button_short.png", A.i);
    E[r.Ft] = new C("hud_buttons.png", A.i);
    E[r.Wc] = new C("obj_candy_01.png", A.i);
    E[r.ug] = new C("obj_spider.png", A.i);
    E[r.Dt] = new C("confetti_particles.png", A.i);
    E[r.Tt] = new C("menu_pause.png", A.i);
    E[r.Vt] = new C("menu_result.png", A.i);
    E[r.ik] = new C("font_numbers_big.png", A.di);
    E[r.Gt] = new C("hud_buttons_en.png", A.i);
    E[r.Wt] = new C("menu_result_en.png", A.i);
    E[r.Ik] = new C("obj_star_disappear.png", A.i);
    E[r.sg] = new C("obj_bubble_flight.png", A.i);
    E[r.yk] = new C("obj_bubble_pop.png", A.i);
    E[r.mi] = new C("obj_hook_auto.png", A.i);
    E[r.Hk] = new C("obj_spikes_04.png", A.i);
    E[r.li] = new C("obj_bubble_attached.png", A.i);
    E[r.Ak] = new C("obj_hook_01.png", A.i);
    E[r.Bk] = new C("obj_hook_02.png", A.i);
    E[r.Xc] = new C("obj_star_idle.png", A.i);
    E[r.vk] = new C("hud_star.png", A.i);
    E[r.Gk] = new C("obj_spikes_03.png", A.i);
    E[r.Fk] = new C("obj_spikes_02.png", A.i);
    E[r.Ek] = new C("obj_spikes_01.png", A.i);
    E[r.ii] = new C("char_animations.png", A.i);
    E[r.tf] = new C("obj_hook_regulated.png", A.i);
    E[r.zk] = new C("obj_electrodes.png", A.i);
    E[r.tg] = new C("obj_hook_movable.png", A.i);
    E[r.ni] = new C("obj_pump.png", A.i);
    E[r.Jk] = new C("tutorial_signs.png", A.i);
    E[r.pi] = new C("obj_hat.png", A.i);
    E[r.wk] = new C("obj_bouncer_01.png", A.i);
    E[r.xk] = new C("obj_bouncer_02.png", A.i);
    E[r.wi] = new C("menu_music", A.X);
    E[r.el] = new C("game_music", A.X);
    E[r.su] = new C("game_music2", A.X);
    E[r.uk] = new C("obj_drawing_hidden.png", A.i);
    E[r.Dk] = new C("obj_rotatable_spikes_01.png", A.i);
    E[r.Xo] = new C("obj_rotatable_spikes_02.png", A.i);
    E[r.Yo] = new C("obj_rotatable_spikes_03.png", A.i);
    E[r.Zo] = new C("obj_rotatable_spikes_04.png", A.i);
    E[r.oi] = new C("obj_rotatable_spikes_button.png", A.i);
    E[r.ki] = new C("obj_bee_hd.png", A.i);
    E[r.Ck] = new C("obj_pollen_hd.png", A.i);
    E[r.ul] = new C("spike_rotate_in", A.X);
    E[r.vl] = new C("spike_rotate_out", A.X);
    E[r.ji] = new C("char_supports.png", A.i);
    E[r.kc] = new C("obj_vinil.png", A.i);
    E[r.pl] = new C("scratch_in", A.X);
    E[r.ql] = new C("scratch_out", A.X);
    E[r.bl] = new C("buzz", A.X);
    E[r.xl] = new C("teleport", A.X);
    E[r.pk] = new C("bgr_01_p1.jpg", A.i);
    E[r.qk] = new C("bgr_01_p2.jpg", A.i);
    E[r.rk] = new C("bgr_02_p1.jpg", A.i);
    E[r.sk] = new C("bgr_02_p2.jpg", A.i);
    E[r.Go] = new C("bgr_03_p1.jpg", A.i);
    E[r.Ho] = new C("bgr_03_p2.jpg", A.i);
    E[r.Io] = new C("bgr_04_p1.jpg", A.i);
    E[r.Jo] = new C("bgr_04_p2.jpg", A.i);
    E[r.Ko] = new C("bgr_05_p1.jpg", A.i);
    E[r.Lo] = new C("bgr_05_p2.jpg", A.i);
    E[r.Mo] = new C("bgr_06_p1.jpg", A.i);
    E[r.No] = new C("bgr_06_p2.jpg", A.i);
    E[r.Oo] = new C("bgr_07_p1.jpg", A.i);
    E[r.Po] = new C("bgr_07_p2.jpg", A.i);
    E[r.tk] = new C("bgr_08_p1.png", A.i);
    E[r.Qo] = new C("bgr_08_p2.png", A.i);
    E[r.Ro] = new C("bgr_09_p1.jpg", A.i);
    E[r.So] = new C("bgr_09_p2.jpg", A.i);
    E[r.To] = new C("bgr_10_p1.jpg", A.i);
    E[r.Uo] = new C("bgr_10_p2.jpg", A.i);
    E[r.Vo] = new C("bgr_11_p1.jpg", A.i);
    E[r.Wo] = new C("bgr_11_p2.jpg", A.i);
    E[r.hi] = new C("bgr_ie.jpg", A.i);
    var ja;
    Array.isArray || (Array.isArray = function(b) {
        return "[object Array]" == Object.prototype.toString.call(b)
    });
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        if (this == n) throw new TypeError;
        var c = Object(this),
            e = c.length >>> 0;
        if (e === 0) return -1;
        var a = 0;
        if (arguments.length > 0) {
            a = Number(arguments[1]);
            a != a ? a = 0 : a != 0 && a != Infinity && a != -Infinity && (a = (a > 0 || -1) * Math.floor(Math.abs(a)))
        }
        if (a >= e) return -1;
        for (a = a >= 0 ? a : Math.max(e - Math.abs(a), 0); a < e; a++)
            if (a in c && c[a] === b) return a;
        return -1
    });
    ja = function(b) {
        function c(d, a) {
            for (var f = n, c = 0, b = h.length; c < b; c++)
                if (h[c].gc === d) {
                    f = h[c];
                    break
                }
            if (!(f == n || f.status !== 1)) {
                f.status = a;
                l = +new Date;
                c = 0;
                for (b = g.length; c < b; c++) {
                    var k = g[c];
                    if (k.Ob.length === 0 || e(d.Ob, k.Ob)) {
                        for (var s = f, j = 0, z = 0, J = 0, G = h.length; J < G; J++) {
                            var I = h[J];
                            if (k.Ob.length === 0 || e(I.gc.Ob, k.Ob)) {
                                z++;
                                (I.status === 2 || I.status === 3 || I.status === 4) && j++
                            }
                        }
                        k.Xd({
                            gc: s.gc,
                            loaded: s.status === 2,
                            error: s.status === 3,
                            timeout: s.status === 4,
                            bm: j,
                            Fn: z
                        })
                    }
                }
            }
        }

        function e(d, a) {
            for (var f = 0, c = d.length; f < c; f++)
                if (a.indexOf(d[f]) >=
                    0) return i;
            return p
        }

        function a() {
            for (var d = p, f = +new Date - l, c = f >= b.uh, f = f >= b.xr, e = 0, k = h.length; e < k; e++) {
                var g = h[e];
                if (g.status === 1) {
                    g.gc.Jq();
                    g.status === 1 && (c ? g.gc.$e() : d = i)
                }
            }
            f && d && s();
            d && setTimeout(a, b.Rs)
        }

        function d(d) {
            function a(f) {
                for (var f = f.gc, c = Infinity, l = 0, e = f.Ob.length; l < e; l++) {
                    var h = d.indexOf(f.Ob[l]);
                    h >= 0 && h < c && (c = h)
                }
                return c
            }
            d = f(d);
            return function(d, f) {
                var c = a(d),
                    l = a(f);
                return c < l ? -1 : c > l ? 1 : d.df < f.df ? -1 : d.df > f.df ? 1 : 0
            }
        }

        function f(d) {
            return d == n ? [] : Array.isArray(d) ? d : [d]
        }
        b = b || {};
        if (b.Rs ==
            n) b.Rs = 5E3;
        if (b.xr == n) b.xr = 2E4;
        if (b.uh == n) b.uh = Infinity;
        var h = [],
            g = [],
            k, l = +new Date;
        this.add = function(d) {
            d.Ob = f(d.Ob);
            if (d.df == n) d.df = Infinity;
            h.push({
                gc: d,
                state: 0
            })
        };
        this.sq = function(d, a) {
            g.push({
                Xd: d,
                Ob: f(a)
            })
        };
        this.oq = function(d) {
            g.push({
                Ob: f(aa),
                Xd: function(a) {
                    a.bm === a.Fn && d()
                }
            })
        };
        this.start = function(f) {
            k = +new Date;
            f = d(f);
            h.sort(f);
            for (var f = 0, c = h.length; f < c; f++) {
                var l = h[f];
                l.status = 1;
                l.gc.start(this)
            }
            setTimeout(a, 100)
        };
        this.Ze = function(d) {
            c(d, 2)
        };
        this.Jr = function(d) {
            c(d, 3)
        };
        this.$e = function(d) {
            c(d,
                4)
        };
        var s = this.log = function(d) {
            if (window.console) {
                var a = Math.round((+new Date - k) / 1E3);
                window.console.log("PxLoader elapsed: " + a + " sec");
                for (var a = 0, f = h.length; a < f; a++) {
                    var c = h[a];
                    if (d || c.status === 1) {
                        var l = "PxLoader: #" + a + " " + c.gc.getName();
                        switch (c.status) {
                            case 0:
                                l = l + " (Not Started)";
                                break;
                            case 1:
                                l = l + " (Waiting)";
                                break;
                            case 2:
                                l = l + " (Loaded)";
                                break;
                            case 3:
                                l = l + " (Error)";
                                break;
                            case 4:
                                l = l + " (Timeout)"
                        }
                        c.gc.Ob.length > 0 && (l = l + (" Tags: [" + c.gc.Ob.join(",") + "]"));
                        window.console.log(l)
                    }
                }
            }
        }
    };
    var ka = function(b) {
            function c(c, a, d, f) {
                var h = this,
                    b = n;
                this.Ob = d;
                this.df = f;
                this.Ns = soundManager.createSound({
                    id: c,
                    url: a,
                    dA: p,
                    onload: function() {
                        b.Ze(h)
                    },
                    KA: function() {
                        b.$e(h)
                    },
                    fB: function() {
                        var d = this.bytesLoaded,
                            a = this.bytesTotal;
                        d > 0 && d === a && b.Ze(h)
                    }
                });
                this.start = function(d) {
                    b = d;
                    navigator.userAgent.match(/(ipad|iphone|ipod)/i) ? b.$e(h) : this.Ns.load()
                };
                this.Jq = function() {
                    switch (h.Ns.readyState) {
                        case 2:
                            b.Jr(h);
                            break;
                        case 3:
                            b.Ze(h)
                    }
                };
                this.$e = function() {
                    b.$e(h)
                };
                this.getName = function() {
                    return a
                }
            }
            b.prototype.tq =
                function(e, a, d) {
                    this.add(new c(e, a, d, aa))
                };
            return c
        }(ja),
        la = function(b) {
            function c(c, a, d) {
                function f() {
                    l.unbind("load", b);
                    l.unbind("readystatechange", k);
                    l.unbind("error", h)
                }

                function h() {
                    f();
                    s.Jr(l)
                }

                function b() {
                    f();
                    s.Ze(l)
                }

                function k() {
                    if (l.W.readyState == "complete") {
                        f();
                        s.Ze(l)
                    }
                }
                var l = this,
                    s = n;
                this.W = new Image;
                this.Ob = a;
                this.df = d;
                this.start = function(d) {
                    s = d;
                    l.bind("load", b);
                    l.bind("readystatechange", k);
                    l.bind("error", h);
                    l.W.src = c
                };
                this.Jq = function() {
                    if (l.W.complete) {
                        f();
                        s.Ze(l)
                    }
                };
                this.$e = function() {
                    f();
                    l.W.complete ? s.Ze(l) : s.$e(l)
                };
                this.getName = function() {
                    return c
                };
                this.bind = function(d, a) {
                    l.W.addEventListener ? l.W.addEventListener(d, a, p) : l.W.attachEvent && l.W.attachEvent("on" + d, a)
                };
                this.unbind = function(d, a) {
                    l.W.removeEventListener ? l.W.removeEventListener(d, a, p) : l.W.detachEvent && l.W.detachEvent("on" + d, a)
                }
            }
            b.prototype.Fg = function(e, a) {
                var d = new c(e, a, aa);
                this.add(d);
                return d.W
            };
            return c
        }(ja),
        oa = new function() {
            this.Lm = function(b, c, e) {
                return c * b / e + 0
            };
            this.Jv = function(b) {
                return 0.05 * Math.sin(b / 5 * (Math.PI /
                    2)) + 0
            };
            this.Wq = function(b, c, e, a) {
                return e * ((b = b / a - 1) * b * b + 1) + c
            };
            this.Sg = function(b, c, e, a) {
                return (b = b / (a / 2)) < 1 ? e / 2 * b * b * b + c : e / 2 * ((b = b - 2) * b * b + 2) + c
            };
            this.Oe = function(b, c, e, a) {
                return b == a ? c + e : e * (-Math.pow(2, -10 * b / a) + 1) + c
            };
            this.Ki = function(b, c, e) {
                return b == 0 ? 0 : b == e ? 0 + c : (b = b / (e / 2)) < 1 ? c / 2 * Math.pow(2, 10 * (b - 1)) + 0 : c / 2 * (-Math.pow(2, -10 * --b) + 2) + 0
            };
            this.km = function(b, c, e, a) {
                var d = 1.5;
                d == aa && (d = 1.70158);
                return e * ((b = b / a - 1) * b * ((d + 1) * b + d) + 1) + c
            };
            this.Ji = function(b, c, e, a) {
                a == aa && (a = 1.70158);
                return (b = b / (e / 2)) < 1 ? c / 2 * b *
                    b * (((a = a * 1.525) + 1) * b - a) + 0 : c / 2 * ((b = b - 2) * b * (((a = a * 1.525) + 1) * b + a) + 2) + 0
            };
            this.Vq = function(b, c, e, a) {
                return (b = b / (a / 2)) < 1 ? e / 2 * b * b + c : -e / 2 * (--b * (b - 2) - 1) + c
            }
        },
        pa = function(b, c, e) {
            return new function() {
                function a() {
                    function j() {
                        var d = +new Date - b;
                        if (o == n) {
                            s = k;
                            o = 0
                        } else if (k > g) {
                            var f = 100 / (100 - s) * (k - g);
                            f < 0 && (f = 0);
                            o = o + f
                        }
                        o < g && (o = o + 0.3);
                        g = k;
                        o > 99 && (o = 99);
                        a.save();
                        a.setTransform(1, 0, 0, 1, 0, 0);
                        a.clearRect(0, 0, t.width, t.height);
                        a.restore();
                        for (f = 0; f < x.length; f++) {
                            var m = x[f];
                            if (m.Sf) {
                                m.y.offset = 250;
                                m.x.offset = e / 2 - (m.W.width +
                                    m.x.td) / 2
                            } else if (d < m.delay) {
                                m.y.offset = -1E4;
                                m.y.bd = d
                            } else {
                                if (d - m.y.bd >= m.y.duration) {
                                    m.y.bd = d;
                                    m.re = 0.5 + Math.random() * 0.5;
                                    m.x.offset = Math.random() * (e - m.x.td * (1 / m.re))
                                }
                                m.y.offset = h + m.W.height * 2 - c.Lm(d - m.y.bd, 1, m.y.duration) * (h + m.W.height * 2) - m.W.height
                            }
                            if (d - m.x.bd >= m.x.duration) {
                                m.x.bd = d;
                                if (m.x.Hf) m.x.Kf = !m.x.Kf
                            }
                            m.x.val = c.Vq(d - m.x.bd, m.x.fe, m.x.td - m.x.fe, m.x.duration);
                            m.x.abs = m.x.offset + (m.x.Kf ? m.x.td - m.x.val : m.x.val);
                            if (m.x.abs > e - m.W.width * m.re) m.x.abs = e - m.W.width * m.re;
                            if (m.Sf) {
                                if (d - m.y.bd >= m.y.duration) {
                                    m.y.bd =
                                        d;
                                    if (m.y.Hf) m.y.Kf = !m.y.Kf
                                }
                                m.y.val = c.Vq(d - m.y.bd, m.y.fe, m.y.td - m.y.fe, m.y.duration)
                            } else m.y.val = 0;
                            m.y.abs = m.y.offset + (m.y.Kf ? m.y.td - m.y.val : m.y.val);
                            if (m.Sf) {
                                var q = Math.floor(Math.round(o) / 10) % 10,
                                    u = Math.round(o) % 10;
                                a.drawImage(w, q * 100, 0, 100, 100, m.x.abs + 65, m.y.abs + 75, 100, 100);
                                a.drawImage(w, u * 100, 0, 100, 100, m.x.abs + 105, m.y.abs + 75, 100, 100);
                                a.drawImage(w, 1E3, 0, 100, 100, m.x.abs + 145, m.y.abs + 75, 100, 100)
                            }
                            a.save();
                            if (m.Sf) a.drawImage(m.W, m.x.abs, m.y.abs);
                            else {
                                a.scale(m.re, m.re);
                                a.drawImage(m.W, m.x.abs * (1 / m.re),
                                    m.y.abs * (1 / m.re))
                            }
                            a.restore()
                        }
                        l && window.requestAnimationFrame(j)
                    }
                    l = i;
                    f();
                    var a = t.getContext("2d"),
                        h = t.height,
                        e = t.width,
                        b = +new Date,
                        o = n,
                        s = n,
                        g = -1,
                        x = [new d(i), new d(p, 0, 3E3, 5E3, 300), new d(p, 300, 5E3, 6E3, 400), new d(p, 2E3, 2E3, 4E3, 200), new d(p, 3200, 3E3, 5E3, 300)];
                    window.requestAnimationFrame(j)
                }

                function d(j, d, a, f, c) {
                    function l() {
                        this.duration = this.td = this.fe = this.bd = this.val = this.abs = 0;
                        this.Kf = this.Hf = p;
                        this.offset = 0
                    }
                    this.y = new l;
                    this.x = new l;
                    this.Sf = j;
                    this.delay = d;
                    this.W = this.Sf ? x : m;
                    this.re = 0.5 + Math.random() *
                        0.5;
                    if (this.Sf) {
                        this.x.fe = 0;
                        this.x.td = 150;
                        this.x.duration = 2800;
                        this.x.Hf = i;
                        this.y.fe = 0;
                        this.y.td = 60;
                        this.y.duration = 1300;
                        this.y.Hf = i
                    } else {
                        this.x.fe = 0;
                        this.x.td = c;
                        this.x.duration = a;
                        this.x.Hf = i;
                        this.y.fe = 0;
                        this.y.td = 1;
                        this.y.duration = f;
                        this.y.Hf = p
                    }
                }

                function f() {
                    if (!g && o && t) {
                        t.width = o.offsetWidth;
                        t.height = o.offsetHeight
                    }
                }

                function h() {
                    if (q && u && j) {
                        b(window).on("resize", f);
                        s = setTimeout(function() {
                            if (!g) {
                                b("#loaderWindow").fadeIn();
                                b("#loaderLogo").fadeIn(200);
                                a()
                            }
                            s = n
                        }, 1E3)
                    }
                }
                var g = p,
                    k = 0,
                    l = p,
                    s = n,
                    o, t, x, m,
                    w, q = p,
                    u = p,
                    j = p;
                this.init = function() {
                    var j = new e({
                        uh: 3E4
                    });
                    j.Fg("images/page/tilebg.jpg");
                    x = j.Fg("images/page/loader-bubble.png");
                    m = j.Fg("images/page/loader-smallbubble.png");
                    w = j.Fg("images/page/loader-numbers.png");
                    j.oq(function() {
                        q = i;
                        h()
                    });
                    j.start()
                };
                this.Za = function() {
                    o = document.getElementById("loaderCanvasHost");
                    t = document.getElementById("loaderCanvas");
                    u = i;
                    h()
                };
                this.dx = function() {
                    l = p;
                    g = i;
                    k = 100
                };
                this.cx = function(j) {
                    k = j
                };
                this.show = function() {
                    j = i;
                    h()
                };
                this.hide = function() {
                    function j() {
                        b("#loaderWindow").hide()
                    }
                    if (s) {
                        clearTimeout(s);
                        s = n
                    }
                    if (l) {
                        l = p;
                        if (u) {
                            var d = t.getContext("2d");
                            d.save();
                            d.setTransform(1, 0, 0, 1, 0, 0);
                            d.clearRect(0, 0, t.width, t.height);
                            d.restore()
                        }
                        b("#loaderWindow").fadeOut(500, j)
                    } else j();
                    b(window).off("resize", f)
                }
            }
        }($, oa, ja, la),
        ra = [{
            id: 0
        }, {
            id: 1
        }, {
            id: 2
        }, {
            id: 4,
            ed: -1,
            vc: -42,
            hc: 20,
            Ff: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a9\u00c0\u00e0\u00c2\u00e2\u00c6\u00e6\u00c7\u00e7\u00c8\u00e8\u00c9\u00e9\u00ca\u00ea\u00cb\u00eb\u00ce\u00ee\u00cf\u00ef\u00d4\u00f4\u0152\u0153\u00d9\u00f9\u00db\u00fb\u00dc\u00fc\u00ab\u00bb\u20ac\u00c4\u00e4\u00c9\u00e9\u00d6\u00f6\u00dc\u00fc\u00df\u201e\u201c\u201d\u00b0\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",
            Te: {},
            d: [4, 4, 33, 156, 41, 4, 38, 156, 83, 4, 61, 156, 148, 4, 41, 156, 193, 4, 73, 156, 270, 4, 38, 156, 312, 4, 19, 156, 335, 4, 44, 156, 383, 4, 41, 156, 428, 4, 54, 156, 486, 4, 43, 156, 533, 4, 22, 156, 559, 4, 46, 156, 609, 4, 23, 156, 636, 4, 51, 156, 691, 4, 54, 156, 749, 4, 23, 156, 776, 4, 53, 156, 833, 4, 44, 156, 881, 4, 48, 156, 933, 4, 51, 156, 4, 164, 49, 156, 57, 164, 52, 156, 113, 164, 55, 156, 172, 164, 41, 156, 217, 164, 24, 156, 245, 164, 24, 156, 273, 164, 59, 156, 336, 164, 36, 156, 376, 164, 51, 156, 431, 164, 44, 156, 479, 164, 62, 156, 545, 164, 51, 156, 600, 164, 51, 156, 655, 164, 58, 156, 717, 164, 48, 156, 769,
                164, 46, 156, 819, 164, 45, 156, 868, 164, 50, 156, 922, 164, 49, 156, 975, 164, 24, 156, 4, 324, 45, 156, 53, 324, 45, 156, 102, 324, 54, 156, 160, 324, 73, 156, 237, 324, 43, 156, 284, 324, 63, 156, 351, 324, 59, 156, 414, 324, 54, 156, 472, 324, 51, 156, 527, 324, 57, 156, 588, 324, 56, 156, 648, 324, 59, 156, 711, 324, 52, 156, 767, 324, 74, 156, 845, 324, 63, 156, 912, 324, 47, 156, 4, 484, 67, 156, 75, 484, 65, 156, 144, 484, 54, 156, 202, 484, 56, 156, 262, 484, 40, 156, 306, 484, 74, 156, 384, 484, 24, 156, 412, 484, 45, 156, 461, 484, 51, 156, 516, 484, 49, 156, 569, 484, 48, 156, 621, 484, 43, 156, 668, 484, 47, 156, 719,
                484, 42, 156, 765, 484, 43, 156, 812, 484, 25, 156, 841, 484, 39, 156, 884, 484, 50, 156, 938, 484, 22, 156, 4, 644, 69, 156, 77, 644, 40, 156, 121, 644, 37, 156, 162, 644, 45, 156, 211, 644, 63, 156, 278, 644, 43, 156, 325, 644, 44, 156, 373, 644, 52, 156, 429, 644, 46, 156, 479, 644, 54, 156, 537, 644, 73, 156, 614, 644, 59, 156, 677, 644, 54, 156, 735, 644, 58, 156, 797, 644, 57, 156, 858, 644, 25, 156, 887, 644, 42, 156, 933, 644, 49, 156, 4, 804, 75, 156, 83, 804, 51, 156, 138, 804, 44, 156, 186, 804, 51, 156, 241, 804, 47, 156, 292, 804, 83, 156, 379, 804, 62, 156, 445, 804, 54, 156, 503, 804, 43, 156, 550, 804, 45, 156, 599,
                804, 45, 156, 648, 804, 45, 156, 697, 804, 45, 156, 746, 804, 45, 156, 795, 804, 45, 156, 844, 804, 45, 156, 893, 804, 45, 156, 942, 804, 41, 156, 4, 964, 41, 156, 49, 964, 33, 156, 86, 964, 34, 156, 124, 964, 63, 156, 191, 964, 48, 156, 243, 964, 82, 156, 329, 964, 61, 156, 394, 964, 53, 156, 451, 964, 44, 156, 499, 964, 53, 156, 556, 964, 43, 156, 603, 964, 53, 156, 660, 964, 43, 156, 707, 964, 53, 156, 764, 964, 59, 156, 827, 964, 65, 156, 896, 964, 51, 156, 951, 964, 44, 156, 4, 1124, 45, 156, 53, 1124, 45, 156, 102, 1124, 63, 156, 169, 1124, 48, 156, 221, 1124, 53, 156, 278, 1124, 43, 156, 325, 1124, 53, 156, 382, 1124, 43,
                156, 429, 1124, 43, 156, 476, 1124, 43, 156, 523, 1124, 40, 156, 567, 1124, 65, 156, 636, 1124, 47, 156, 687, 1124, 50, 156, 741, 1124, 49, 156, 794, 1124, 64, 156, 862, 1124, 46, 156, 912, 1124, 46, 156, 4, 1284, 73, 156, 81, 1284, 46, 156, 131, 1284, 54, 156, 189, 1284, 54, 156, 247, 1284, 62, 156, 313, 1284, 62, 156, 379, 1284, 64, 156, 447, 1284, 52, 156, 503, 1284, 59, 156, 566, 1284, 53, 156, 623, 1284, 48, 156, 675, 1284, 49, 156, 728, 1284, 59, 156, 791, 1284, 55, 156, 850, 1284, 59, 156, 913, 1284, 55, 156, 4, 1444, 58, 156, 66, 1444, 49, 156, 119, 1444, 72, 156, 195, 1444, 83, 156, 282, 1444, 62, 156, 348, 1444,
                58, 156, 410, 1444, 50, 156, 464, 1444, 48, 156, 516, 1444, 67, 156, 587, 1444, 51, 156, 642, 1444, 44, 156, 690, 1444, 41, 156, 735, 1444, 39, 156, 778, 1444, 37, 156, 819, 1444, 41, 156, 864, 1444, 40, 156, 908, 1444, 40, 156, 952, 1444, 61, 156, 4, 1604, 38, 156, 46, 1604, 43, 156, 93, 1604, 43, 156, 140, 1604, 44, 156, 188, 1604, 45, 156, 237, 1604, 62, 156, 303, 1604, 42, 156, 349, 1604, 40, 156, 393, 1604, 49, 156, 446, 1604, 46, 156, 496, 1604, 38, 156, 538, 1604, 69, 156, 611, 1604, 42, 156, 657, 1604, 61, 156, 722, 1604, 43, 156, 769, 1604, 45, 156, 818, 1604, 40, 156, 862, 1604, 63, 156, 929, 1604, 65, 156, 4,
                1764, 51, 156, 59, 1764, 51, 156, 114, 1764, 40, 156, 158, 1764, 39, 156, 201, 1764, 60, 156, 265, 1764, 40, 156, 309, 1764, 112, 156
            ]
        }, {
            id: 5,
            ed: 2,
            vc: -90,
            hc: 15,
            Ff: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u00a9\u00c0\u00e0\u00c2\u00e2\u00c6\u00e6\u00c7\u00e7\u00c8\u00e8\u00c9\u00e9\u00ca\u00ea\u00cb\u00eb\u00ce\u00ee\u00cf\u00ef\u00d4\u00f4\u0152\u0153\u00d9\u00f9\u00db\u00fb\u00dc\u00fc\u00ab\u00bb\u20ac\u00c4\u00e4\u00c9\u00e9\u00d6\u00f6\u00dc\u00fc\u00df\u201e\u201c\u201d\u00b0\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f",
            Te: {},
            d: [4, 4, 16, 156, 24, 4, 19, 156, 47, 4, 35, 156, 86, 4, 21, 156, 111, 4, 43, 156, 158, 4, 19, 156, 181, 4, 7, 156, 192, 4, 24, 156, 220, 4, 23, 156, 247, 4, 30, 156, 281, 4, 24, 156, 309, 4, 9, 156, 322, 4, 25, 156, 351, 4, 10, 156, 365, 4, 28, 156, 397, 4, 31, 156, 432, 4, 10, 156, 446, 4, 29, 156, 479, 4, 24, 156, 507, 4, 26, 156, 537, 4, 29, 156, 570, 4, 28, 156, 602, 4, 29, 156, 635, 4, 31, 156, 670, 4, 21, 156, 695, 4, 10, 156, 709, 4, 10, 156, 723, 4, 33, 156, 760, 4, 19, 156, 783, 4, 28, 156, 815, 4, 24, 156, 843, 4, 36, 156, 883, 4, 28, 156, 915, 4, 28, 156, 947, 4, 32, 156, 983, 4, 27, 156, 4, 164, 25, 156, 33, 164, 24, 156, 61, 164,
                28, 156, 93, 164, 28, 156, 125, 164, 10, 156, 139, 164, 25, 156, 168, 164, 24, 156, 196, 164, 31, 156, 231, 164, 43, 156, 278, 164, 24, 156, 306, 164, 37, 156, 347, 164, 34, 156, 385, 164, 30, 156, 419, 164, 29, 156, 452, 164, 32, 156, 488, 164, 31, 156, 523, 164, 34, 156, 561, 164, 29, 156, 594, 164, 43, 156, 641, 164, 36, 156, 681, 164, 26, 156, 711, 164, 39, 156, 754, 164, 38, 156, 796, 164, 30, 156, 830, 164, 32, 156, 866, 164, 22, 156, 892, 164, 44, 156, 940, 164, 11, 156, 955, 164, 25, 156, 984, 164, 29, 156, 4, 324, 27, 156, 35, 324, 26, 156, 65, 324, 24, 156, 93, 324, 26, 156, 123, 324, 23, 156, 150, 324, 24, 156, 178, 324,
                11, 156, 193, 324, 20, 156, 217, 324, 28, 156, 249, 324, 9, 156, 262, 324, 41, 156, 307, 324, 21, 156, 332, 324, 20, 156, 356, 324, 25, 156, 385, 324, 36, 156, 425, 324, 22, 156, 451, 324, 24, 156, 479, 324, 29, 156, 512, 324, 26, 156, 542, 324, 31, 156, 577, 324, 43, 156, 624, 324, 34, 156, 662, 324, 30, 156, 696, 324, 33, 156, 733, 324, 32, 156, 769, 324, 12, 156, 785, 324, 22, 156, 811, 324, 27, 156, 842, 324, 45, 156, 891, 324, 29, 156, 924, 324, 24, 156, 952, 324, 29, 156, 985, 324, 26, 156, 4, 484, 49, 156, 57, 484, 36, 156, 97, 484, 30, 156, 131, 484, 23, 156, 158, 484, 24, 156, 186, 484, 24, 156, 214, 484, 24, 156, 242,
                484, 24, 156, 270, 484, 24, 156, 298, 484, 24, 156, 326, 484, 24, 156, 354, 484, 24, 156, 382, 484, 22, 156, 408, 484, 22, 156, 434, 484, 17, 156, 455, 484, 17, 156, 476, 484, 36, 156, 516, 484, 27, 156, 547, 484, 50, 156, 601, 484, 35, 156, 640, 484, 29, 156, 673, 484, 24, 156, 701, 484, 29, 156, 734, 484, 23, 156, 761, 484, 29, 156, 794, 484, 23, 156, 821, 484, 30, 156, 855, 484, 34, 156, 893, 484, 37, 156, 934, 484, 29, 156, 967, 484, 24, 156, 995, 484, 24, 156, 4, 644, 24, 156, 32, 644, 36, 156, 72, 644, 27, 156, 103, 644, 29, 156, 136, 644, 23, 156, 163, 644, 30, 156, 197, 644, 23, 156, 224, 644, 23, 156, 251, 644, 23, 156,
                278, 644, 22, 156, 304, 644, 38, 156, 346, 644, 26, 156, 376, 644, 28, 156, 408, 644, 28, 156, 440, 644, 38, 156, 482, 644, 25, 156, 511, 644, 25, 156, 540, 644, 44, 156, 588, 644, 26, 156, 618, 644, 30, 156, 652, 644, 30, 156, 686, 644, 37, 156, 727, 644, 36, 156, 767, 644, 37, 156, 808, 644, 29, 156, 841, 644, 34, 156, 879, 644, 30, 156, 913, 644, 28, 156, 945, 644, 27, 156, 976, 644, 34, 156, 4, 804, 31, 156, 39, 804, 34, 156, 77, 804, 31, 156, 112, 804, 33, 156, 149, 804, 28, 156, 181, 804, 43, 156, 228, 804, 51, 156, 283, 804, 36, 156, 323, 804, 33, 156, 360, 804, 28, 156, 392, 804, 27, 156, 423, 804, 40, 156, 467, 804, 29,
                156, 500, 804, 24, 156, 528, 804, 22, 156, 554, 804, 20, 156, 578, 804, 19, 156, 601, 804, 22, 156, 627, 804, 21, 156, 652, 804, 21, 156, 677, 804, 36, 156, 717, 804, 20, 156, 741, 804, 24, 156, 769, 804, 24, 156, 797, 804, 24, 156, 825, 804, 25, 156, 854, 804, 35, 156, 893, 804, 24, 156, 921, 804, 22, 156, 947, 804, 28, 156, 979, 804, 26, 156, 4, 964, 20, 156, 28, 964, 41, 156, 73, 964, 23, 156, 100, 964, 36, 156, 140, 964, 24, 156, 168, 964, 25, 156, 197, 964, 22, 156, 223, 964, 37, 156, 264, 964, 38, 156, 306, 964, 30, 156, 340, 964, 29, 156, 373, 964, 22, 156, 399, 964, 21, 156, 424, 964, 35, 156, 463, 964, 22, 156, 489, 964,
                112, 156
            ]
        }, {
            id: 51,
            k: 393,
            j: 418,
            d: [2, 2, 218, 226, 224, 2, 151, 151, 2, 232, 157, 158, 224, 157, 98, 62, 326, 157, 48, 45, 379, 2, 49, 59, 432, 2, 55, 57, 379, 65, 53, 63, 163, 232, 146, 147, 2, 394, 153, 163, 2, 561, 153, 166, 2, 731, 156, 169, 2, 904, 163, 175, 169, 904, 159, 175, 159, 394, 159, 159, 313, 232, 150, 150, 322, 394, 144, 150, 159, 561, 138, 146, 2, 1083, 302, 303, 301, 561, 107, 158, 412, 561, 96, 157, 2, 1390, 252, 268, 2, 1662, 278, 305, 2, 1971, 371, 397, 2, 2372, 385, 396, 2, 2772, 377, 386],
            g: [103, 130, 122, 133, 119, 131, 145, 176, 168, 182, 171, 177, 168, 182, 160, 176, 119, 128, 115, 115, 115, 112,
                115, 112, 115, 112, 119, 115, 122, 134, 131, 143, 137, 143, 140, 147, 47, 56, 143, 133, 155, 133, 69, 83, 50, 37, 6, -2, 0, -5, 8, 2
            ]
        }, {
            id: 52,
            k: 552,
            j: 552,
            d: [0, 0, 88, 85, 0, 85, 46, 152, 46, 85, 106, 149, 0, 237, 78, 162, 78, 237, 93, 155, 0, 399, 88, 158, 152, 85, 46, 152, 88, 399, 144, 145, 0, 557, 138, 141, 0, 698, 145, 145, 0, 843, 146, 141, 0, 984, 161, 140, 0, 1124, 130, 155],
            g: [235, 190, 256, 121, 226, 124, 240, 111, 233, 118, 235, 115, 256, 121, 213, 220, 219, 232, 212, 220, 211, 232, 203, 178, 211, 273]
        }, {
            id: 53,
            k: 290,
            j: 228,
            d: [0, 0, 42, 38, 0, 38, 43, 36, 0, 74, 46, 33, 0, 107, 46, 33, 0, 140, 44, 36, 0, 176, 42,
                38, 0, 214, 40, 41, 0, 255, 43, 43, 0, 298, 40, 41, 0, 339, 45, 33, 0, 372, 48, 31, 0, 403, 49, 38, 0, 441, 50, 45, 0, 486, 52, 53, 0, 539, 50, 39, 0, 578, 49, 28, 0, 606, 47, 31, 0, 637, 45, 33, 0, 670, 53, 53, 0, 723, 43, 53, 0, 776, 32, 54, 32, 776, 23, 53, 52, 486, 12, 53, 43, 723, 12, 53, 0, 830, 23, 55, 23, 830, 32, 54, 0, 885, 43, 53
            ],
            g: [123, 98, 122, 99, 121, 100, 121, 100, 122, 99, 123, 98, 124, 96, 122, 95, 124, 96, 121, 100, 120, 101, 119, 97, 119, 94, 118, 90, 119, 97, 119, 103, 120, 101, 121, 100, 118, 89, 123, 89, 128, 89, 133, 89, 138, 89, 138, 89, 133, 88, 128, 89, 123, 89]
        }, {
            id: 56,
            ed: 2,
            vc: 2,
            hc: 10,
            Ff: "0123456789",
            Te: {},
            d: [5, 5, 49, 156, 59, 5, 16, 156, 80, 5, 48, 156, 133, 5, 38, 156, 176, 5, 41, 156, 222, 5, 45, 156, 272, 5, 43, 156, 320, 5, 47, 156, 372, 5, 49, 156, 426, 5, 35, 156]
        }, {
            id: 57,
            k: 2560,
            j: 122,
            d: [0, 0, 203, 99, 0, 99, 203, 99],
            g: [2347, 9, 2347, 9]
        }, {
            id: 59,
            k: 552,
            j: 552,
            d: [0, 0, 246, 268, 0, 268, 334, 370, 246, 0, 205, 231, 0, 638, 308, 353, 0, 991, 387, 461, 0, 1452, 324, 399, 0, 1851, 335, 328, 0, 2179, 296, 266, 0, 2445, 240, 230, 296, 2179, 207, 217, 308, 638, 204, 205, 240, 2445, 200, 194, 308, 843, 195, 133],
            g: [145, 116, 76, 38, 166, 132, 113, 56, 75, -2, 113, 34, 87, 82, 102, 114, 128, 124, 148, 130, 149, 134, 151,
                138, 153, 141
            ]
        }, {
            id: 60,
            k: 250,
            j: 250,
            d: [0, 0, 139, 170, 139, 0, 142, 169, 281, 0, 148, 163, 429, 0, 155, 155, 584, 0, 163, 148, 747, 0, 169, 142, 584, 148, 171, 139, 584, 287, 169, 141, 755, 148, 165, 145, 755, 293, 159, 151, 429, 155, 153, 159, 281, 163, 147, 164, 139, 169, 141, 169, 0, 170, 139, 170],
            g: [55, 40, 54, 41, 51, 44, 47, 48, 43, 51, 40, 54, 39, 56, 40, 55, 42, 53, 46, 50, 48, 46, 51, 44, 54, 41, 55, 40]
        }, {
            id: 61,
            k: 449,
            j: 446,
            d: [0, 0, 308, 285, 0, 285, 302, 282, 0, 567, 297, 281, 0, 848, 296, 277, 0, 1125, 293, 274, 0, 1399, 293, 273, 0, 1672, 295, 271, 0, 1943, 297, 269, 0, 2212, 239, 226, 239, 2212, 241, 223,
                0, 2438, 244, 221, 244, 2438, 249, 219
            ],
            g: [83, 82, 87, 84, 90, 86, 91, 90, 93, 94, 92, 99, 90, 104, 88, 111, 101, 119, 97, 128, 92, 138, 86, 148]
        }, {
            id: 62,
            k: 275,
            j: 275,
            d: [0, 0, 140, 144, 0, 144, 42, 37],
            g: [69, 62, 117, 119]
        }, {
            id: 63,
            k: 833,
            j: 250,
            d: [0, 0, 566, 93],
            g: [133, 76]
        }, {
            id: 64,
            k: 250,
            j: 250,
            d: [0, 0, 155, 154, 0, 154, 181, 210, 0, 364, 185, 180, 0, 544, 183, 178],
            g: [47, 50, 32, 36, 35, 40, 35, 40]
        }, {
            id: 65,
            k: 275,
            j: 275,
            d: [0, 0, 125, 126, 0, 126, 37, 35],
            g: [78, 76, 122, 121]
        }, {
            id: 66,
            k: 275,
            j: 275,
            d: [0, 0, 125, 126, 0, 126, 37, 35],
            g: [75, 76, 119, 121]
        }, {
            id: 67,
            k: 552,
            j: 552,
            d: [2, 2, 234, 221,
                240, 2, 77, 76, 240, 82, 70, 76, 321, 2, 64, 76, 321, 82, 58, 76, 389, 2, 51, 76, 389, 82, 46, 76, 444, 2, 40, 77, 444, 83, 34, 77, 488, 2, 28, 78, 488, 84, 28, 78, 520, 2, 35, 77, 559, 2, 42, 77, 605, 2, 48, 77, 657, 2, 56, 77, 717, 2, 63, 77, 784, 2, 69, 77, 857, 2, 76, 77, 857, 83, 83, 78, 2, 227, 175, 175, 181, 227, 175, 175, 360, 227, 175, 175, 539, 227, 175, 175, 718, 227, 175, 175, 2, 406, 175, 175, 181, 406, 175, 175, 360, 406, 175, 175, 539, 406, 175, 175, 718, 406, 175, 175, 2, 585, 175, 175, 181, 585, 175, 175, 360, 585, 175, 175, 539, 585, 175, 175, 718, 585, 175, 175, 2, 764, 175, 175, 181, 764, 175, 175, 360, 764, 175, 175,
                539, 764, 175, 175, 718, 764, 175, 175, 2, 943, 175, 175, 181, 943, 175, 175, 360, 943, 175, 175, 539, 943, 175, 175, 718, 943, 175, 175, 2, 1122, 175, 175, 2, 1301, 175, 175, 2, 1480, 175, 175, 2, 1659, 175, 175, 2, 1838, 175, 175, 181, 1122, 175, 175, 360, 1122, 175, 175, 539, 1122, 175, 175, 718, 1122, 175, 175, 181, 1301, 175, 175, 181, 1480, 175, 175, 181, 1659, 175, 175, 360, 1301, 229, 231, 593, 1301, 229, 231, 360, 1536, 490, 492
            ],
            g: [156, 156, 233, 231, 236, 231, 239, 231, 242, 231, 246, 231, 248, 231, 251, 231, 254, 231, 257, 231, 257, 231, 253, 231, 250, 231, 247, 231, 243, 231, 240, 231, 237, 231, 234, 231,
                230, 230, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 184, 155, 159, 155, 159, 27, 21
            ]
        }, {
            id: 68,
            k: 100,
            j: 100,
            d: [0, 0, 84, 85, 84, 0, 58, 85, 142, 0, 32, 85, 174, 0, 12, 85, 186, 0, 28, 85, 214, 0, 44, 85, 258, 0, 60, 85, 318, 0, 70, 85, 388, 0, 78, 85, 466, 0, 84, 85, 550, 0, 84, 85]
        }, {
            id: 69,
            k: 833,
            j: 250,
            d: [0,
                0, 453, 93
            ],
            g: [191, 76]
        }, {
            id: 70,
            k: 833,
            j: 250,
            d: [0, 0, 333, 93],
            g: [251, 79]
        }, {
            id: 71,
            k: 833,
            j: 250,
            d: [0, 0, 212, 93],
            g: [310, 79]
        }, {
            id: 72,
            k: 640,
            j: 640,
            d: [0, 0, 291, 302, 291, 0, 363, 409, 654, 0, 383, 309, 1037, 0, 314, 335, 1351, 0, 326, 334, 1677, 0, 374, 330, 291, 409, 405, 492, 2051, 0, 350, 334, 0, 302, 201, 207, 0, 509, 201, 206, 0, 715, 201, 207, 0, 922, 201, 207, 0, 1129, 201, 206, 0, 1335, 201, 210, 0, 1545, 201, 213, 0, 1758, 201, 215, 0, 1973, 201, 219, 0, 2192, 201, 222, 0, 2414, 201, 223, 0, 2637, 201, 222, 0, 2859, 201, 224, 0, 3083, 201, 224, 0, 3307, 201, 224, 0, 3531, 201, 221, 0, 3752, 201, 218,
                2401, 0, 201, 214, 2602, 0, 201, 211, 2803, 0, 222, 196, 2803, 196, 210, 201, 3025, 0, 203, 209, 3228, 0, 197, 214, 3425, 0, 193, 217, 3618, 0, 194, 219, 3812, 0, 197, 210, 291, 901, 200, 202, 3812, 210, 204, 197, 291, 1103, 208, 199, 291, 1302, 212, 202, 291, 1504, 214, 205, 291, 1709, 216, 206, 291, 1915, 204, 226, 291, 2141, 203, 213, 495, 1915, 201, 210, 494, 2141, 201, 208, 291, 2354, 201, 203, 3025, 209, 201, 200, 491, 901, 201, 200, 492, 2354, 201, 200, 291, 2557, 201, 200, 291, 2757, 201, 207, 291, 2964, 201, 216, 492, 2557, 204, 194, 291, 3180, 221, 171, 291, 3351, 249, 197, 291, 3548, 225, 201, 291, 3749,
                205, 205, 492, 2964, 202, 213, 696, 409, 201, 222, 897, 409, 201, 222, 1098, 409, 205, 221, 1303, 409, 229, 213, 1532, 409, 243, 205, 0, 3970, 153, 86, 654, 309, 140, 89, 1775, 409, 212, 196, 1987, 409, 208, 209, 496, 3749, 197, 233, 696, 631, 186, 247, 882, 631, 181, 245, 1063, 631, 186, 243, 1249, 631, 194, 234, 1443, 631, 199, 230, 2195, 409, 199, 221, 1642, 631, 199, 223, 1841, 631, 199, 226, 2040, 631, 199, 228, 2239, 631, 199, 230, 2438, 631, 199, 230, 2637, 631, 199, 230, 2836, 631, 195, 234, 3031, 631, 190, 238, 3221, 631, 194, 231, 2394, 409, 201, 217, 2595, 409, 207, 209, 2802, 409, 218, 202, 3020, 409,
                211, 206, 3231, 409, 206, 210, 3437, 409, 210, 213, 3647, 409, 215, 218, 3415, 631, 220, 223, 3862, 409, 224, 216, 3635, 631, 219, 212, 492, 2757, 195, 205, 3854, 631, 195, 207, 696, 878, 195, 210, 891, 878, 217, 214, 891, 1092, 225, 215, 891, 1307, 219, 215, 696, 1088, 195, 215, 696, 1303, 195, 215, 696, 1518, 195, 215, 891, 1522, 217, 215, 891, 1737, 225, 215, 891, 1952, 223, 218, 891, 2170, 219, 222, 891, 2392, 215, 224, 891, 2616, 216, 216, 1108, 878, 210, 206, 1318, 878, 218, 202, 1536, 878, 205, 190, 1741, 878, 203, 194, 1944, 878, 202, 206, 2146, 878, 203, 214, 891, 2832, 204, 217, 891, 3049, 204, 216, 2349,
                878, 204, 213, 2553, 878, 205, 204, 2758, 878, 205, 192, 2401, 214, 201, 195, 2963, 878, 201, 206, 3164, 878, 204, 212, 3368, 878, 205, 214, 891, 3265, 207, 215, 891, 3480, 208, 216, 3573, 878, 205, 205, 3778, 878, 226, 202, 891, 3696, 212, 204, 696, 1733, 195, 210, 696, 1943, 189, 213, 696, 2156, 190, 218, 696, 2374, 193, 222, 1116, 1092, 198, 213, 1314, 1092, 203, 210, 1517, 1092, 207, 202, 1724, 1092, 211, 204, 1935, 1092, 214, 207, 2149, 1092, 216, 211, 2365, 1092, 216, 212, 2581, 1092, 216, 212, 2797, 1092, 216, 212, 3013, 1092, 216, 212, 3229, 1092, 216, 212, 3445, 1092, 216, 212, 3661, 1092, 216, 212,
                3877, 1092, 216, 212, 1116, 1305, 216, 212, 1116, 1517, 212, 216, 1116, 1733, 206, 222, 1116, 1955, 202, 225, 1116, 2180, 205, 222, 1116, 2402, 210, 213, 1116, 2615, 212, 208, 1116, 2823, 198, 223, 1116, 3046, 196, 232, 696, 2596, 195, 236, 1116, 3278, 198, 236, 1116, 3514, 206, 238, 1116, 3752, 211, 226, 1332, 1305, 217, 207, 891, 3900, 213, 195, 1549, 1305, 212, 179, 1761, 1305, 221, 178, 1982, 1305, 221, 181, 2203, 1305, 215, 180, 2418, 1305, 212, 179, 2630, 1305, 221, 177, 2851, 1305, 221, 180, 3072, 1305, 215, 180, 3287, 1305, 212, 179, 3499, 1305, 221, 177, 3720, 1305, 221, 180, 1332, 1512, 215, 180,
                1332, 1692, 212, 179, 1547, 1512, 216, 176, 1332, 1871, 213, 175, 696, 2832, 194, 205, 696, 3037, 188, 236, 696, 3273, 194, 233, 1332, 2046, 210, 202, 1332, 2248, 204, 194, 1332, 2442, 202, 204
            ],
            g: [173, 274, 137, 156, 133, 207, 152, 237, 154, 244, 134, 240, 107, 104, 148, 242, 220, 227, 220, 227, 220, 227, 220, 227, 220, 227, 220, 224, 220, 221, 220, 218, 220, 215, 220, 212, 220, 211, 220, 211, 220, 210, 220, 210, 220, 210, 220, 213, 220, 216, 220, 220, 220, 223, 211, 238, 216, 233, 220, 225, 223, 220, 225, 217, 224, 215, 223, 224, 221, 232, 219, 237, 217, 235, 215, 232, 214, 229, 213, 228, 217, 208, 218, 221, 219,
                224, 219, 226, 219, 231, 219, 234, 219, 234, 219, 234, 219, 234, 219, 226, 219, 218, 218, 240, 210, 263, 192, 237, 204, 233, 217, 229, 220, 221, 220, 212, 220, 212, 217, 212, 202, 221, 195, 229, 240, 264, 249, 265, 215, 238, 217, 225, 223, 201, 228, 187, 231, 189, 228, 191, 223, 200, 220, 204, 220, 213, 220, 211, 220, 208, 220, 206, 220, 204, 220, 204, 220, 204, 222, 200, 225, 196, 223, 203, 220, 217, 216, 225, 211, 232, 216, 228, 218, 224, 212, 221, 208, 216, 205, 211, 202, 218, 208, 222, 232, 229, 232, 227, 232, 224, 210, 220, 202, 219, 208, 219, 232, 219, 232, 219, 232, 219, 210, 219, 202, 219, 202, 216, 205, 212, 207,
                210, 208, 218, 217, 228, 211, 232, 216, 244, 218, 240, 219, 227, 220, 219, 220, 216, 220, 217, 220, 221, 218, 230, 216, 242, 220, 239, 220, 228, 217, 222, 216, 220, 214, 219, 213, 218, 216, 229, 207, 232, 214, 230, 224, 224, 227, 221, 226, 216, 225, 212, 222, 220, 219, 224, 218, 231, 216, 229, 214, 226, 213, 222, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 213, 221, 215, 217, 218, 211, 220, 208, 218, 212, 216, 221, 215, 226, 222, 210, 223, 201, 223, 197, 222, 197, 219, 195, 216, 206, 211, 225, 213, 238, 213, 254, 207, 255, 207, 252, 210, 253, 213, 254, 207, 256, 207, 253, 210, 253, 213,
                254, 207, 256, 207, 253, 210, 253, 213, 254, 211, 257, 214, 258, 227, 227, 230, 195, 226, 199, 215, 232, 218, 239, 220, 230
            ]
        }, {
            id: 73,
            k: 275,
            j: 275,
            d: [0, 0, 137, 139, 137, 0, 105, 100, 0, 139, 235, 235, 0, 374, 240, 246],
            g: [65, 70, 84, 86, 18, 19, 13, 14]
        }, {
            id: 74,
            k: 833,
            j: 250,
            d: [0, 0, 507, 85, 0, 85, 507, 100, 0, 185, 507, 100, 0, 285, 507, 97, 0, 382, 507, 92],
            g: [163, 82, 163, 73, 163, 71, 163, 70, 163, 75]
        }, {
            id: 75,
            k: 276,
            j: 276,
            d: [0, 0, 84, 128, 84, 0, 68, 109, 152, 0, 50, 109, 0, 128, 140, 121, 0, 249, 148, 147]
        }, {
            id: 76,
            k: 761,
            j: 761,
            d: [0, 0, 220, 239, 0, 239, 206, 290, 0, 529, 205, 290, 0, 819, 220, 246, 0,
                1065, 237, 219, 0, 1284, 226, 231, 220, 0, 18, 17, 238, 0, 11, 11, 206, 239, 38, 39
            ],
            g: [271, 262, 286, 232, 287, 232, 271, 249, 262, 272, 268, 266, 382, 376, 385, 379, 372, 365]
        }, {
            id: 77,
            k: 998,
            j: 1058,
            d: [3, 3, 148, 12, 3, 21, 39, 187, 48, 21, 182, 150, 236, 21, 144, 130, 3, 214, 244, 233, 253, 214, 159, 143, 157, 3, 49, 9, 386, 21, 89, 84, 3, 453, 102, 148, 3, 607, 260, 315],
            g: [585, 767, 160, 241, 412, 548, 307, 397, 184, 663, 530, 224, 676, 540, 540, 425, 351, 211, 684, 200]
        }, {
            id: 78,
            k: 431,
            j: 431,
            d: [0, 0, 294, 335, 294, 0, 297, 336, 0, 335, 291, 252, 591, 0, 307, 293, 0, 587, 276, 224],
            g: [53, 6, 51, 3, 55, 78, 47, 57,
                63, 98
            ]
        }, {
            id: 79,
            k: 833,
            j: 250,
            d: [0, 0, 194, 127, 0, 127, 201, 103, 0, 230, 204, 96, 0, 326, 193, 142, 0, 468, 194, 111],
            g: [319, 69, 316, 81, 314, 87, 319, 55, 319, 77]
        }, {
            id: 80,
            k: 833,
            j: 250,
            d: [0, 0, 302, 123, 302, 0, 319, 99, 621, 0, 322, 95, 302, 99, 292, 136, 0, 123, 302, 111],
            g: [268, 70, 260, 85, 258, 87, 273, 58, 268, 77]
        }, {
            id: 58,
            k: 2028,
            j: 1597,
            d: [0, 0, 239, 239],
            g: [811, 344]
        }, {
            id: 3,
            k: 936,
            j: 418,
            d: [0, 0, 735, 174, 0, 174, 727, 173],
            g: [102, 116, 107, 117]
        }, {
            id: 6,
            k: 2560,
            j: 1440,
            d: [2, 2, 58, 1303, 64, 2, 65, 1303, 133, 2, 305, 405, 133, 411, 835, 789],
            g: [1216, 67, 1274, 67, 1096, 31, 455, 578]
        }, {
            id: 40,
            k: 2560,
            j: 1440,
            d: [2, 2, 2560, 1440, 2566, 2, 2560, 920, 5130, 2, 1781, 1781],
            g: [0, 0, 0, 520, 388, -172]
        }, {
            id: 41,
            k: 193,
            j: 193,
            d: [0, 0, 187, 149, 0, 149, 187, 149],
            g: [4, 23, 4, 23]
        }, {
            id: 42,
            k: 2560,
            j: 1440,
            d: [0, 0, 792, 792, 792, 0, 7, 8, 799, 0, 7, 8, 806, 0, 7, 7, 813, 0, 7, 7, 820, 0, 7, 8],
            g: [880, 283, 1289, 403, 1289, 665, 1289, 770, 1289, 1026, 1289, 531]
        }, {
            id: 43,
            k: 833,
            j: 250,
            d: [0, 0, 128, 93],
            g: [133, 76]
        }, {
            id: 44,
            k: 1076,
            j: 983,
            d: [0, 0, 868, 795, 0, 795, 267, 300, 267, 795, 305, 135],
            g: [101, 113, 434, 316, 408, 405]
        }, {
            id: 45,
            k: 218,
            j: 218,
            d: [0, 0, 190, 196, 0, 196, 202, 208, 0, 404,
                143, 77, 0, 481, 141, 77, 0, 558, 143, 77, 0, 635, 142, 77
            ],
            g: [10, 10, 5, 7, 58, 139, 59, 139, 58, 139, 58, 139]
        }, {
            id: 46,
            k: 1129,
            j: 1092,
            d: [2, 2, 229, 183, 235, 2, 166, 174, 405, 2, 146, 69, 405, 75, 146, 85, 555, 2, 144, 140, 703, 2, 173, 166, 2, 189, 162, 168, 2, 361, 169, 170, 2, 535, 166, 171, 2, 710, 166, 175, 172, 710, 166, 172, 342, 710, 166, 174, 512, 710, 166, 174, 682, 710, 166, 174, 2, 889, 477, 221, 880, 2, 58, 58, 2, 1114, 434, 472, 2, 1590, 445, 481, 440, 1114, 434, 472, 451, 1590, 434, 472, 2, 2075, 434, 481, 440, 2075, 434, 473, 2, 2560, 434, 473, 440, 2560, 467, 473, 2, 3037, 436, 459, 168, 189, 103, 124, 880,
                64, 84, 103, 275, 189, 103, 124, 382, 189, 83, 103
            ],
            g: [464, 598, 499, 616, 513, 714, 511, 695, 513, 622, 496, 632, 503, 645, 497, 627, 499, 619, 499, 617, 499, 618, 499, 616, 499, 616, 499, 616, 339, 558, 548, 667, 362, 365, 358, 364, 362, 364, 362, 364, 362, 364, 362, 363, 362, 363, 329, 363, 360, 363, 533, 586, 543, 595, 534, 586, 543, 595]
        }, {
            id: 47,
            k: 679,
            j: 206,
            d: [0, 0, 208, 206, 0, 206, 205, 204, 0, 410, 92, 95, 92, 410, 92, 95],
            g: [0, -2, 1, 1, 457, 90, 563, 90]
        }, {
            id: 48,
            k: 679,
            j: 206,
            d: [0, 0, 291, 49],
            g: [143, 106]
        }, {
            id: 49,
            k: 936,
            j: 418,
            d: [0, 0, 420, 174, 0, 174, 419, 173],
            g: [262, 115, 263, 115]
        }, {
            id: 50,
            k: 2560,
            j: 122,
            d: [0, 0, 96, 97, 96, 0, 96, 97],
            g: [2237, 9, 2237, 9]
        }, {
            id: 54,
            k: 2560,
            j: 380,
            d: [0, 0, 2560, 310]
        }, {
            id: 55,
            k: 2560,
            j: 1597,
            d: [1, 1, 7, 7, 10, 1, 7, 7, 19, 1, 7, 7, 28, 1, 7, 7, 37, 1, 7, 7, 46, 1, 8, 7, 56, 1, 7, 7, 65, 1, 7, 7, 74, 1, 7, 7, 83, 1, 7, 7, 92, 1, 7, 7, 101, 1, 7, 7, 110, 1, 7, 7, 1, 10, 228, 218, 231, 10, 210, 203, 1, 230, 626, 11, 1, 243, 889, 398],
            g: [1052, 556, 1261, 556, 1467, 556, 1261, 378, 1264, 771, 1117, 721, 1461, 721, 1264, 721, 1264, 840, 1261, 1186, 1495, 993, 1052, 993, 1617, 768, 816, 350, 825, 358, 603, 465, 153, 89]
        }, {
            id: 108,
            d: [0, 0, 198, 194, 0, 194, 198, 194, 0, 388, 198, 194]
        }, {
            id: 111,
            d: [0, 0, 202, 81],
            g: [316, 87],
            k: 833,
            j: 250
        }, {
            id: 112,
            d: [0, 0, 319, 83],
            g: [260, 87],
            k: 833,
            j: 250
        }, {
            id: 113,
            d: [0, 0, 444, 86],
            g: [195, 81],
            k: 833,
            j: 250
        }, {
            id: 114,
            d: [0, 0, 559, 89],
            g: [137, 77],
            k: 833,
            j: 250
        }, {
            id: 115,
            d: [0, 0, 101, 102, 0, 102, 101, 102, 0, 204, 101, 102, 0, 306, 101, 102],
            g: [219, 29, 218, 29, 219, 29, 219, 29],
            k: 534,
            j: 160
        }, {
            id: 116,
            k: 275,
            j: 275,
            d: [0, 0, 4, 4, 2, 2, 89, 116, 95, 2, 177, 37, 276, 2, 187, 77, 95, 43, 87, 61],
            g: [143, 196, 93, 75, 50, 84, 45, 39, 95, 35]
        }, {
            id: 117,
            k: 25,
            j: 25,
            d: [0, 0, 25, 25]
        }, {
            id: r.ji,
            d: [0, 0, 291, 302, 0, 302, 363, 409, 363, 302, 383, 309, 0, 711,
                405, 492, 405, 711, 374, 330, 0, 1203, 350, 334, 0, 1537, 314, 335, 350, 1203, 326, 334, 291, 0, 339, 288, 630, 0, 275, 162, 350, 1537, 372, 317
            ],
            g: [173, 274, 137, 156, 133, 207, 107, 104, 134, 240, 148, 242, 152, 237, 154, 244, 145, 259, 181, 392, 123, 236],
            k: 640,
            j: 640
        }, {
            id: r.kc,
            d: [1, 1, 1064, 1064, 1067, 1, 532, 495, 1601, 1, 145, 286, 1601, 289, 38, 38, 1748, 1, 204, 174, 1748, 177, 183, 154],
            g: [55, 154, 55, 686, 442, 543, 568, 667, 484, 1083, 493, 1093],
            k: 1174,
            j: 1498
        }, {
            id: r.pk,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2305
        }, {
            id: r.qk,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 708],
            g: [0, 896],
            k: 2048,
            j: 2305
        }, {
            id: r.rk,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.sk,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 874],
            g: [0, 835],
            k: 2048,
            j: 2304
        }, {
            id: r.Go,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.Ho,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1052],
            g: [0, 756],
            k: 2048,
            j: 2304
        }, {
            id: r.Io,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.Jo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1072],
            g: [0, 768],
            k: 2048,
            j: 2304
        }, {
            id: r.Ko,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.Lo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1124],
            g: [0, 624],
            k: 2048,
            j: 2304
        }, {
            id: r.Mo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 1866
        }, {
            id: r.No,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 948],
            g: [0, 760],
            k: 2048,
            j: 1866
        }, {
            id: r.Oo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.Po,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 886],
            g: [0, 881],
            k: 2048,
            j: 2304
        }, {
            id: r.tk,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152, 0, 0, 4, 3],
            g: [0, 0, 1028.5, 581],
            k: 2048,
            j: 2304
        }, {
            id: r.Qo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 642, 0, 0, 4, 3],
            g: [0, 889, 1028.5, 581],
            k: 2048,
            j: 2304
        }, {
            id: r.Ro,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.So,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 858],
            g: [0, 780],
            k: 2048,
            j: 1638
        }, {
            id: r.To,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 2304
        }, {
            id: r.Uo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 887],
            g: [0, 792],
            k: 2048,
            j: 2304
        }, {
            id: r.Vo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1153],
            g: [0, -1],
            k: 2048,
            j: 2304
        }, {
            id: r.Wo,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 980],
            g: [0, 802],
            k: 2048,
            j: 2304
        }, {
            id: r.hi,
            Wa: 1.25,
            ab: i,
            d: [0, 0, 2048, 1152],
            g: [0, 0],
            k: 2048,
            j: 1866
        }],
        sa = function() {
            var b;
            (function() {
                var c = p,
                    e = /var xyz/.test(ca()) ? /\b_super\b/ : /.*/;
                b = ca();
                b.extend = function(a) {
                    function d() {
                        !c &&
                            this.init && this.init.apply(this, arguments)
                    }
                    var f = this.prototype;
                    c = i;
                    var h = new this;
                    c = p;
                    for (var b in a) h[b] = typeof a[b] == "function" && typeof f[b] == "function" && e.test(a[b]) ? function(d, a) {
                        return function() {
                            var c = this.h;
                            this.h = f[d];
                            var b = a.apply(this, arguments);
                            this.h = c;
                            return b
                        }
                    }(b, a[b]) : a[b];
                    d.prototype = h;
                    d.extend = arguments.callee;
                    return d
                }
            })();
            return b
        }(),
        ta = function() {
            function b(c, b, a, d) {
                this.z = c;
                this.F = b;
                this.D = a;
                this.r = d
            }
            b.prototype.Hh = function() {
                return "rgba(" + (this.z * 255 >> 0) + "," + (this.F * 255 >> 0) +
                    "," + (this.D * 255 >> 0) + "," + this.r.toFixed(2) + ")"
            };
            b.prototype.Qi = function(c) {
                return this.z === c.z && this.F === c.F && this.D === c.D && this.r === c.r
            };
            b.prototype.copy = function() {
                return new b(this.z, this.F, this.D, this.r)
            };
            b.prototype.ba = function(c) {
                this.z = c.z;
                this.F = c.F;
                this.D = c.D;
                this.r = c.r
            };
            b.prototype.add = function(c) {
                this.z = this.z + c.z;
                this.F = this.F + c.F;
                this.D = this.D + c.D;
                this.r = this.r + c.r
            };
            b.prototype.multiply = function(c) {
                this.z = this.z * c;
                this.F = this.F * c;
                this.D = this.D * c;
                this.r = this.r * c
            };
            b.Gb = new b(0, 0, 0, 0);
            b.kb =
                new b(1, 1, 1, 1);
            b.red = new b(1, 0, 0, 1);
            b.blue = new b(0, 0, 1, 1);
            b.green = new b(0, 1, 0, 1);
            b.eA = new b(0, 0, 0, 1);
            b.ut = b.kb;
            b.Dn = {
                Dl: "rgba(255,255,255,1)",
                $z: "rgba(0,0,0,0)"
            };
            return b
        }(),
        ua = {
            c: 0,
            rb: 1,
            Dc: 2,
            xf: 4,
            Qb: 8,
            zf: 16,
            rf: 32,
            R: 18,
            parse: function(b) {
                var c = this.c;
                if (b.indexOf("LEFT") > 0) c = this.rb;
                else if (b.indexOf("HCENTER") > 0 || b === "CENTER") c = this.Dc;
                else if (b.indexOf("RIGHT") > 0) c = this.xf;
                b.indexOf("TOP") > 0 ? c = c | this.Qb : b.indexOf("VCENTER") > 0 || b === "CENTER" ? c = c | this.zf : b.indexOf("BOTTOM") > 0 && (c = c | this.rf);
                return c
            }
        },
        va = function() {
            function b(c, a, d) {
                this.kq = c;
                this.lq = a;
                this.Dg = d
            }

            function c(c, a) {
                this.Pu = c;
                this.data = a
            }
            c.create = function(e, a, d, f) {
                return new c(e, new b(a, d, f))
            };
            return c
        }(),
        ya = {
            Sd: 0,
            Ge: 1,
            Fe: 2,
            ze: 3,
            vd: 4,
            eo: 5
        },
        za = {
            kA: 6.283185307179586,
            dc: function(b) {
                return b * 0.017453292519943295
            },
            kg: function(b) {
                return b * 57.29577951308232
            }
        },
        Ba = {
            rp: "ACTION_SET_VISIBLE",
            pu: "ACTION_SET_TOUCHABLE",
            qu: "ACTION_SET_UPDATEABLE",
            ti: "ACTION_SET_DRAWQUAD",
            kp: "ACTION_PLAY_TIMELINE",
            hp: "ACTION_PAUSE_TIMELINE",
            xu: "ACTION_STOP_TIMELINE",
            Zt: "ACTION_JUMP_TO_TIMELINE_FRAME"
        };

    function Ca(b, c, e, a) {
        e = b + e;
        a = c + a;
        this.Zs = b;
        this.$s = c;
        this.dt = e;
        this.et = c;
        this.xq = b;
        this.yq = a;
        this.Dq = e;
        this.Eq = a
    }
    var S = function() {
            function b(c, b) {
                this.x = c;
                this.y = b
            }
            b.prototype.add = function(c) {
                this.x = this.x + c.x;
                this.y = this.y + c.y
            };
            b.prototype.bb = function(c) {
                this.x = this.x - c.x;
                this.y = this.y - c.y
            };
            b.prototype.multiply = function(c) {
                this.x = this.x * c;
                this.y = this.y * c
            };
            b.prototype.gm = function(c) {
                this.x = this.x / c;
                this.y = this.y / c
            };
            b.prototype.Ga = function(c) {
                var b = this.x - c.x,
                    c = this.y - c.y;
                return Math.sqrt(b * b + c * c)
            };
            b.prototype.hd = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            };
            b.prototype.jh = function() {
                return this.x ===
                    0 && this.y === 0
            };
            b.prototype.Qi = function(c) {
                return this.x === c.x && this.y === c.y
            };
            b.prototype.Ly = function() {
                this.y = this.x = 0
            };
            b.prototype.normalize = function() {
                this.multiply(1 / this.hd())
            };
            b.prototype.b = function() {
                return Math.atan(this.y / this.x)
            };
            b.prototype.Wf = function() {
                return Math.atan2(this.y, this.x)
            };
            b.prototype.copy = function() {
                return new b(this.x, this.y)
            };
            b.prototype.ba = function(c) {
                this.x = c.x;
                this.y = c.y
            };
            b.prototype.round = function() {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y)
            };
            b.prototype.rotate =
                function(c) {
                    var b = Math.cos(c),
                        c = Math.sin(c),
                        a = this.x * c + this.y * b;
                    this.x = this.x * b - this.y * c;
                    this.y = a
                };
            b.prototype.la = function(c, b, a) {
                this.x = this.x - b;
                this.y = this.y - a;
                this.rotate(c);
                this.x = this.x + b;
                this.y = this.y + a
            };
            b.prototype.toString = function() {
                return "[" + this.x + ", " + this.y + "]"
            };
            b.Pa = function() {
                return new b(0, 0)
            };
            b.hB = new b(0, 0);
            b.th = function() {
                return new b(2147483647, 2147483647)
            };
            b.oz = b.th();
            b.add = function(c, e) {
                return new b(c.x + e.x, c.y + e.y)
            };
            b.bb = function(c, e) {
                return new b(c.x - e.x, c.y - e.y)
            };
            b.multiply =
                function(c, e) {
                    return new b(c.x * e, c.y * e)
                };
            b.gm = function(c, e) {
                return new b(c.x / e, c.y / e)
            };
            b.Ga = function(c, b, a, d) {
                c = c - a;
                b = b - d;
                return Math.sqrt(c * c + b * b)
            };
            b.Xr = function(c) {
                return new b(-c.y, c.x)
            };
            b.Kx = function(c) {
                return new b(c.y, -c.x)
            };
            b.normalize = function(c) {
                return this.multiply(c, 1 / c.hd())
            };
            b.HA = function(c) {
                return new b(-c.x, -c.y)
            };
            b.Mu = Array(64);
            b.Nu = Array(64);
            b.Fq = function(c, e) {
                var a = c.length;
                if (a <= 1) return new b(0, 0);
                for (var d = b.Mu, f = b.Nu, h = 1 - e, g = 0; g < a; g++) {
                    var k = c[g];
                    d[g] = k.x;
                    f[g] = k.y
                }
                for (g = a - 1; g >
                    0; a--, g--)
                    for (var k = 0, l = 1; k < g; k++, l++) {
                        d[k] = d[k] * h + d[l] * e;
                        f[k] = f[k] * h + f[l] * e
                    }
                return new b(d[0], f[0])
            };
            b.Nv = function(c) {
                return new b(Math.cos(c), Math.sin(c))
            };
            return b
        }(),
        Da = function(b, c, e, a) {
            function d() {
                this.a = b.Pa();
                this.scale = b.Pa();
                this.Ra = 0;
                this.color = c.kb.copy();
                this.Ie = []
            }

            function f(d, a, f, c) {
                this.Qc = d;
                this.Th = a;
                this.lg = f;
                this.value = c
            }
            d.prototype.copy = function() {
                var a = new d;
                a.a = this.a.copy();
                a.scale = this.scale.copy();
                a.Ra = this.Ra;
                a.color = this.color.copy();
                a.Ie = this.Ie.slice(0);
                return a
            };
            f.prototype.copy =
                function() {
                    return new f(this.Qc, this.Th, this.lg, this.value.copy())
                };
            f.l = {
                LINEAR: 0,
                Pz: 1,
                wd: 2,
                Hb: 3
            };
            f.Km = function() {
                return new f(0, a.Sd, f.l.LINEAR, new d)
            };
            f.Na = function(c, b, e, l) {
                var s = new d;
                s.a.x = c;
                s.a.y = b;
                return new f(l, a.Sd, e, s)
            };
            f.ej = function(c, b, e, l) {
                var s = new d;
                s.scale.x = c;
                s.scale.y = b;
                return new f(l, a.Ge, e, s)
            };
            f.me = function(c, b, e) {
                var l = new d;
                l.Ra = c;
                return new f(e, a.Fe, b, l)
            };
            f.ua = function(c, b, e) {
                var l = new d;
                l.color = c;
                return new f(e, a.ze, b, l)
            };
            f.dj = function(c, b) {
                var e = new d;
                e.Ie = c;
                return new f(b,
                    a.vd, f.l.LINEAR, e)
            };
            f.Ww = function(c, b) {
                var k = new d,
                    l = e.create(c, b, 0, 0);
                k.Ie = [l];
                return new f(0.04, a.vd, f.l.LINEAR, k)
            };
            return f
        }(S, ta, va, ya),
        T = {
            mc: 5,
            gk: 0.15,
            c: -1,
            sf: 1.0E-6,
            yf: 1,
            lu: 80,
            Dz: 0.15,
            Qz: 10,
            Ee: 2147483647
        },
        Ea = function(b, c, e, a) {
            return b.extend({
                init: function(d, f) {
                    this.type = f;
                    this.state = 0;
                    this.tj = p;
                    this.de = this.startTime = 0;
                    this.ga = [];
                    this.wb = d;
                    this.Y = a.c;
                    this.Yd = c.Km();
                    this.Ng = c.Km();
                    this.Vg = c.Km();
                    this.jb = this.za = 0;
                    if (f === e.vd) this.Ou = []
                },
                fd: function() {
                    this.state = 0
                },
                m: function(d) {
                    this.Ej(d, this.ga.length)
                },
                Ej: function(d, a) {
                    this.ga[a] = d;
                    this.type === e.vd && this.Ou.push(d.value.Ie)
                },
                qm: function(d) {
                    for (var a = 0, c = 0; c <= d; c++) a = a + this.ga[c].Qc;
                    return a
                },
                wz: function() {
                    this.startTime = this.qm(0);
                    this.de = this.qm(this.ga.length - 1)
                },
                lt: function(d) {
                    if (this.state === 0)
                        if (this.wb.sd) {
                            if (!(this.wb.time + d < this.startTime || this.wb.time > this.de))
                                if (this.ga.length > 1) {
                                    this.state = 1;
                                    this.Y = this.ga.length - 1;
                                    this.jb = this.de - this.wb.time;
                                    this.Y--;
                                    this.Qf(this.ga[this.Y + 1], this.ga[this.Y].Qc)
                                } else this.Qf(this.ga[0], 0)
                        } else {
                            if (!(this.wb.time -
                                    d > this.de || this.wb.time < this.startTime))
                                if (this.ga.length > 1) {
                                    this.state = 1;
                                    this.Y = 0;
                                    this.jb = this.wb.time - this.startTime;
                                    this.Y++;
                                    this.Qf(this.ga[this.Y - 1], this.ga[this.Y].Qc)
                                } else this.Qf(this.ga[0], 0)
                        }
                    else {
                        this.za = this.za - d;
                        if (this.za <= a.sf) {
                            this.wb.vh && this.wb.vh(this.wb, this.ga[this.Y], this.Y);
                            this.jb = -this.za;
                            if (this.Y === this.ga.length - 1) {
                                this.eg(this.ga[this.Y]);
                                this.state = 0
                            } else if (this.Y === 0) {
                                this.eg(this.ga[this.Y]);
                                this.state = 0
                            } else if (this.wb.sd) {
                                this.Y--;
                                d = this.ga[this.Y + 1];
                                this.Qf(d, d.Qc)
                            } else {
                                this.Y++;
                                this.Qf(this.ga[this.Y - 1], this.ga[this.Y].Qc)
                            }
                        }
                    }
                },
                ot: function(d) {
                    var f = this.wb,
                        b;
                    if (this.state === 0) {
                        if (f.time >= this.startTime && f.time <= this.de) {
                            this.state = 1;
                            if (f.sd) {
                                this.Y = this.ga.length - 1;
                                this.jb = this.de - f.time;
                                this.Y--;
                                b = this.ga[this.Y + 1];
                                this.Yi(b, this.ga[this.Y], b.Qc)
                            } else {
                                this.Y = 0;
                                this.jb = f.time - this.startTime;
                                this.Y++;
                                b = this.ga[this.Y];
                                this.Yi(this.ga[this.Y - 1], b, b.Qc)
                            }
                        }
                    } else {
                        this.za = this.za - d;
                        b = this.ga[this.Y];
                        if (b.lg === c.l.wd || b.lg === c.l.Hb) switch (this.type) {
                            case e.Sd:
                                var g = this.Ng.value.a;
                                b = g.x * d;
                                var g = g.y * d,
                                    k = this.Yd.value.a,
                                    l = k.x,
                                    s = k.y;
                                k.x = k.x + b;
                                k.y = k.y + g;
                                f.element.x = f.element.x + (l + b / 2) * d;
                                f.element.y = f.element.y + (s + g / 2) * d;
                                break;
                            case e.Ge:
                                g = this.Ng.value.scale;
                                b = g.x * d;
                                g = g.y * d;
                                k = this.Yd.value.scale;
                                l = k.x;
                                s = k.y;
                                k.x = k.x + b;
                                k.y = k.y + g;
                                f.element.Q = f.element.Q + (l + b / 2) * d;
                                f.element.aa = f.element.aa + (s + g / 2) * d;
                                break;
                            case e.Fe:
                                b = this.Ng.value.Ra * d;
                                g = this.Yd.value.Ra;
                                this.Yd.value.Ra = this.Yd.value.Ra + b;
                                f.element.rotation = f.element.rotation + (g + b / 2) * d;
                                break;
                            case e.ze:
                                var o = this.Yd.value.color;
                                b = o.z;
                                var g = o.F,
                                    k = o.D,
                                    l = o.r,
                                    t = this.Ng.value.color,
                                    s = t.z * d,
                                    x = t.F * d,
                                    m = t.D * d,
                                    t = t.r * d;
                                o.z = o.z + s * 2;
                                o.F = o.F + x * 2;
                                o.D = o.D + m * 2;
                                o.r = o.r + t * 2;
                                o = f.element.color;
                                o.z = o.z + (b + s / 2) * d;
                                o.F = o.F + (g + x / 2) * d;
                                o.D = o.D + (k + m / 2) * d;
                                o.r = o.r + (l + t / 2) * d
                        } else if (b.lg === c.l.LINEAR) {
                            b = f.element;
                            g = this.Yd.value;
                            switch (this.type) {
                                case e.Sd:
                                    b.x = b.x + g.a.x * d;
                                    b.y = b.y + g.a.y * d;
                                    break;
                                case e.Ge:
                                    b.Q = b.Q + g.scale.x * d;
                                    b.aa = b.aa + g.scale.y * d;
                                    break;
                                case e.Fe:
                                    b.Ra = b.Ra + g.Ra * d;
                                    break;
                                case e.ze:
                                    b.color.z = b.color.z + g.color.z * d;
                                    b.color.F = b.color.F + g.color.F * d;
                                    b.color.D =
                                        b.color.D + g.color.D * d;
                                    b.color.r = b.color.r + g.color.r * d
                            }
                        }
                        if (this.za <= a.sf) {
                            f.vh && f.vh(f, this.ga[this.Y], this.Y);
                            this.jb = -this.za;
                            if (this.Y === this.ga.length - 1) {
                                this.eg(this.ga[this.Y]);
                                this.state = 0
                            } else if (this.Y === 0) {
                                this.eg(this.ga[this.Y]);
                                this.state = 0
                            } else if (f.sd) {
                                this.Y--;
                                b = this.ga[this.Y + 1];
                                this.Yi(b, this.ga[this.Y], b.Qc)
                            } else {
                                this.Y++;
                                b = this.ga[this.Y];
                                this.Yi(this.ga[this.Y - 1], b, b.Qc)
                            }
                        }
                    }
                },
                Qf: function(d, a) {
                    this.za = a;
                    this.eg(d);
                    if (this.jb > 0) {
                        this.lt(this.jb);
                        this.jb = 0
                    }
                },
                eg: function(d) {
                    switch (this.type) {
                        case e.Sd:
                            var a =
                                this.wb.element,
                                d = d.value.a;
                            if (this.tj) {
                                var c = this.Vg.value.a;
                                a.x = c.x + d.x;
                                a.y = c.y + d.y
                            } else {
                                a.x = d.x;
                                a.y = d.y
                            }
                            break;
                        case e.Ge:
                            d = d.value.scale;
                            a = this.wb.element;
                            if (this.tj) {
                                c = this.Vg.value.scale;
                                a.Q = c.x + d.x;
                                a.aa = c.y + d.y
                            } else {
                                a.Q = d.x;
                                a.aa = d.y
                            }
                            break;
                        case e.Fe:
                            this.wb.element.rotation = this.tj ? this.Vg.value.Ra + d.value.Ra : d.value.Ra;
                            break;
                        case e.ze:
                            a = this.wb.element.color;
                            d = d.value.color;
                            if (this.tj) {
                                c = this.Vg.value.color;
                                a.z = c.z + d.z;
                                a.F = c.F + d.F;
                                a.D = c.D + d.D;
                                a.r = c.r + d.r
                            } else a.ba(d);
                            break;
                        case e.vd:
                            a = d.value.Ie;
                            d = 0;
                            for (c = a.length; d < c; d++) {
                                var b = a[d];
                                b.Pu.jr(b.data)
                            }
                    }
                },
                uy: function(d) {
                    var d = d.value,
                        a = this.wb.element;
                    switch (this.type) {
                        case e.Sd:
                            d.a.x = a.x;
                            d.a.y = a.y;
                            break;
                        case e.Ge:
                            d.scale.x = a.Q;
                            d.scale.y = a.aa;
                            break;
                        case e.Fe:
                            d.Ra = a.rotation;
                            break;
                        case e.ze:
                            d.color.ba(a.color)
                    }
                },
                Yi: function(d, a, b) {
                    this.za = b;
                    this.uy(this.Vg);
                    this.eg(d);
                    var b = this.Yd.value,
                        g = this.Ng.value;
                    switch (this.type) {
                        case e.Sd:
                            var k = b.a,
                                l = a.value.a,
                                d = d.value.a;
                            k.x = (l.x - d.x) / this.za;
                            k.y = (l.y - d.y) / this.za;
                            break;
                        case e.Ge:
                            k = b.scale;
                            l = a.value.scale;
                            d = d.value.scale;
                            k.x = (l.x - d.x) / this.za;
                            k.y = (l.y - d.y) / this.za;
                            break;
                        case e.Fe:
                            b.Ra = (a.value.Ra - d.value.Ra) / this.za;
                            break;
                        case e.ze:
                            k = b.color;
                            l = a.value.color;
                            d = d.value.color;
                            k.z = (l.z - d.z) / this.za;
                            k.F = (l.F - d.F) / this.za;
                            k.D = (l.D - d.D) / this.za;
                            k.r = (l.r - d.r) / this.za
                    }
                    d = a.lg === c.l.wd;
                    a = a.lg == c.l.Hb;
                    if (d || a) switch (this.type) {
                        case e.Sd:
                            k = b.a;
                            a = g.a;
                            k.multiply(2);
                            a.x = k.x / this.za;
                            a.y = k.y / this.za;
                            if (d) {
                                k.x = 0;
                                k.y = 0
                            } else a.multiply(-1);
                            break;
                        case e.Ge:
                            k = b.scale;
                            a = g.scale;
                            k.multiply(2);
                            a.x = k.x / this.za;
                            a.y = k.y / this.za;
                            if (d) {
                                k.x = 0;
                                k.y = 0
                            } else a.multiply(-1);
                            break;
                        case e.Fe:
                            b.Ra = b.Ra * 2;
                            g.Ra = b.Ra / this.za;
                            d ? b.Ra = 0 : g.Ra = g.Ra * -1;
                            break;
                        case e.ze:
                            k = b.color;
                            a = g.color;
                            k.multiply(2);
                            a.z = k.z / this.za;
                            a.F = k.F / this.za;
                            a.D = k.D / this.za;
                            a.r = k.r / this.za;
                            d ? k.multiply(0) : a.multiply(-1)
                    }
                    if (this.jb > 0) {
                        this.ot(this.jb);
                        this.jb = 0
                    }
                }
            })
        }(sa, Da, ya, T),
        Fa = function(b, c, e, a) {
            var d = b.extend({
                init: function() {
                    this.length = this.time = 0;
                    this.We = a.c;
                    this.state = d.U.Bg;
                    this.cj = d.fa.Ta;
                    this.Rc = [];
                    this.vh = this.eb = n;
                    this.sd = p;
                    this.element = n
                },
                m: function(a) {
                    var d =
                        this.Rc[a.Th];
                    this.Ej(a, d == n ? 0 : d.ga.length)
                },
                Ej: function(a, d) {
                    var b = this.Rc[a.Th];
                    b || (this.Rc[a.Th] = b = new c(this, a.Th));
                    b.Ej(a, d)
                },
                hr: function(a) {
                    return this.Rc[a]
                },
                play: function() {
                    if (this.state !== d.U.xg) {
                        this.time = 0;
                        this.sd = p;
                        for (var a = this.length = 0, c = this.Rc.length; a < c; a++) {
                            var b = this.Rc[a];
                            if (b) {
                                b.wz();
                                if (b.de > this.length) this.length = b.de
                            }
                        }
                    }
                    this.state = d.U.jp;
                    this.update(0)
                },
                pause: function() {
                    this.state = d.U.xg
                },
                pr: function(a, b) {
                    if (this.state === d.U.Bg) this.state = d.U.xg;
                    this.update(this.Rc[a].qm(b) -
                        this.time)
                },
                stop: function() {
                    this.state = d.U.Bg;
                    this.rv()
                },
                rv: function() {
                    for (var a = 0, d = this.Rc.length; a < d; a++) {
                        var b = this.Rc[a];
                        b && b.fd()
                    }
                },
                update: function(b) {
                    if (this.state === d.U.jp) {
                        this.time = this.sd ? this.time - b : this.time + b;
                        for (var c = 0, g = this.Rc.length; c < g; c++) {
                            var k = this.Rc[c];
                            k != n && (k.type === e.vd ? k.lt(b) : k.ot(b))
                        }
                        switch (this.cj) {
                            case d.fa.ip:
                                if (this.sd === p && this.time >= this.length - a.sf) {
                                    this.time = Math.max(0, this.length - (this.time - this.length));
                                    this.sd = i
                                } else if (this.sd && this.time <= a.sf) {
                                    if (this.We >
                                        0) {
                                        this.We--;
                                        if (this.We === 0) {
                                            this.stop();
                                            this.eb && this.eb(this)
                                        }
                                    }
                                    this.time = Math.min(-this.time, this.length);
                                    this.sd = p
                                }
                                break;
                            case d.fa.Ib:
                                if (this.time >= this.length - a.sf) {
                                    if (this.We > 0) {
                                        this.We--;
                                        if (this.We === 0) {
                                            this.stop();
                                            this.eb && this.eb(this)
                                        }
                                    }
                                    this.time = Math.min(this.time - this.length, this.length)
                                }
                                break;
                            case d.fa.Ta:
                                if (this.time >= this.length - a.sf) {
                                    this.stop();
                                    this.eb && this.eb(this)
                                }
                        }
                    }
                }
            });
            d.fa = {
                Ta: 0,
                Ib: 1,
                ip: 2
            };
            d.U = {
                Bg: 0,
                jp: 1,
                xg: 2
            };
            return d
        }(sa, Ea, ya, T),
        Ga = function(b) {
            function c(c) {
                this.Mc = c;
                this.d = [];
                this.g = [];
                this.qe = b.th();
                var a = $(c);
                this.bh = c.width || a.width();
                this.ah = c.height || a.height();
                this.Bf = this.Vd = 0
            }
            c.prototype.Uu = function(c) {
                this.d.push(c);
                this.g.push(new b(0, 0))
            };
            c.prototype.zy = function(c, a, d) {
                c = this.g[c];
                c.x = a;
                c.y = d
            };
            return c
        }(S, Ca),
        U = function(b) {
            function c(a, d, c, b) {
                this.x = a;
                this.y = d;
                this.B = c;
                this.M = b
            }

            function e(c, b, l, e, o) {
                return (o.x < c ? a : 0) + (o.x > l ? d : 0) + (o.y < b ? f : 0) + (o.y > e ? h : 0)
            }
            c.copy = function(a) {
                return new c(a.x, a.y, a.B, a.M)
            };
            c.gf = function(a, d) {
                return new c(a.x * d, a.y * d, a.B * d, a.M *
                    d)
            };
            c.Ch = function(a, d, c, b, f, e, h, m) {
                return !(a > h || c < f || d > m || b < e)
            };
            c.js = function(a, d, b, f, e, h, x, m) {
                a = new c(e - a, h - d, x, m);
                if (a.x < 0) {
                    a.B = a.B + a.x;
                    a.x = 0
                }
                if (a.x + a.B > b) a.B = b - a.x;
                if (a.y < 0) {
                    a.M = a.M + a.y;
                    a.y = 0
                }
                if (a.y + a.M > f) a.M = f - a.y;
                return a
            };
            c.ob = function(a, d, c, b, f, e) {
                return a >= c && a < c + f && d >= b && d < b + e
            };
            var a = 1,
                d = 2,
                f = 4,
                h = 8;
            c.Ve = function(c, k, l, s, o, t, x, m) {
                var w, q, u = new b(c, k),
                    j = new b(l, s),
                    z, x = o + x,
                    J = t + m,
                    m = e(o, t, x, J, u);
                for (w = e(o, t, x, J, j); m || w;) {
                    if (m & w) return p;
                    if (m) {
                        q = m;
                        z = u
                    } else {
                        q = w;
                        z = j
                    }
                    if (q & a) {
                        z.y = z.y + (k - s) * (o - z.x) /
                            (c - l);
                        z.x = o
                    } else if (q & d) {
                        z.y = z.y + (k - s) * (x - z.x) / (c - l);
                        z.x = x
                    }
                    if (q & f) {
                        z.x = z.x + (c - l) * (t - z.y) / (k - s);
                        z.y = t
                    } else if (q & h) {
                        z.x = z.x + (c - l) * (J - z.y) / (k - s);
                        z.y = J
                    }
                    q == m ? m = e(o, t, x, J, u) : w = e(o, t, x, J, j)
                }
                return i
            };
            return c
        }(S),
        Ha = function(b, c) {
            function e(a, d) {
                return Math.round(a * d * 1E4) / 1E4
            }
            return {
                iy: function(a, d) {
                    var c, b, g;
                    b = 0;
                    for (g = a.length; b < g; b++) {
                        c = a[b];
                        c = c.Wa || 1;
                        this.hy(a[b], e(d, c))
                    }
                },
                hy: function(a, d) {
                    if (a.ed) a.ed = e(a.ed, d);
                    if (a.vc) a.vc = e(a.vc, d);
                    if (a.hc) a.hc = e(a.hc, d);
                    if (a.k) a.k = Math.ceil(e(a.k, d));
                    if (a.j) a.j = Math.ceil(e(a.j,
                        d));
                    if (a.d) {
                        a.Sr = this.zx(a.d);
                        a.d = this.gy(a.Sr, d)
                    }
                    a.Vd = 0;
                    a.Vd = 0;
                    if (a.g) {
                        a.Rr = this.yx(a.g);
                        this.fy(a, d)
                    }
                },
                zx: function(a) {
                    for (var d = 0, b = a.length, e = []; d < b;) {
                        var g = new c(a[d++], a[d++], a[d++], a[d++]);
                        e.push(g)
                    }
                    return e
                },
                gy: function(a, d) {
                    for (var b = [], h = 0, g = a.length, k = 0; k < g; k++) {
                        var l = a[k],
                            l = new c(0, h, e(l.B, d), e(l.M, d));
                        b.push(l);
                        h = h + (Math.ceil(l.M) + 4)
                    }
                    return b
                },
                yx: function(a) {
                    for (var d = 0, c = a.length, e = []; d < c;) {
                        var g = new b(a[d++], a[d++]);
                        e.push(g)
                    }
                    return e
                },
                fy: function(a, d) {
                    var c = [],
                        h = a.Rr,
                        g = [],
                        k, l, s, o;
                    s =
                        0;
                    for (o = h.length; s < o; s++) {
                        k = h[s].copy();
                        k.x = e(k.x, d);
                        k.y = e(k.y, d);
                        l = new b(0, 0);
                        c.push(l);
                        g.push(k)
                    }
                    a.g = g;
                    a.ex = c;
                    delete a.Rr
                }
            }
        }(S, U),
        La = {
            debug: ca()
        },
        Ma = {};
    Ma.Eu = [r.wi, r.Bp, r.qa];
    Ma.Bu = [r.ii, r.Ak, r.Bk, r.mi, r.Wc, r.wk, r.xk, r.li, r.sg, r.yk, r.ni, r.ug, r.Ek, r.Fk, r.Gk, r.Hk, r.Xc, r.Ik, r.vk, r.Jk, r.uk, r.ji];
    Ma.Jz = [r.tg, r.tf, r.zk, r.pi, r.Dk, r.Xo, r.Yo, r.Zo, r.oi, r.ki, r.Ck, r.kc];
    Ma.Au = [r.ci, r.qg, r.ik];
    Ma.Cu = [r.el, r.$k, r.zg, r.al, r.cl, r.dl, r.hl, r.il, r.jl, r.kl, r.ll, r.Cp, r.Dp, r.ml, r.nl, r.Fp, r.Gp, r.Hp, r.ol, r.rl, r.sl, r.tl, r.wl, r.Ip, r.Jp, r.zl];
    Ma.Kz = [r.vi, r.fl, r.gl, r.Ep, r.yl, r.ul, r.vl, r.pl, r.ql, r.bl, r.xl];
    Ma.Du = "bBtn_bgd.png,box_lock.png,box_nav_menu.png,box_omnom.png,boxcutter.png,boxmore_bgd.png,boxshadow.png,buttonsprite.png,ctrlogo.png,drawing-bg.png,fb.png,fBtn_bgd.png,flags.png,fun-omnom.png,gamecomplete.jpg,gamecomplete_border.png,lBtn_bgd.png,level_bgd.png,level_bgd_small.png,leveltape.png,leveltape_left.png,leveltape_right.png,mBtn_bgd.png,menu_result_en.png,menu_result_fr.png,menu_result_gr.png,menu_result_ru.png,menubg.jpg,options_stars_bgd.png,options_stars_bgd_small.png,perfect_mark.png,ph_logo.png,result_line.png,sBtn_bgd.png,shadow.png,star_result.png,star_result_small.png,startbg.jpg,taperoll.png".split(",");
    var Na = function(b, c, e, a) {
            b = {
                siteUrl: "http://cuttherope.ie/",
                behindTheScenesUrl: "http://cuttherope.ie/dev",
				
				// no hidden drawings yet
                disableHiddenDrawings: true,
				
				// disable localization, since the site is in english
                disableLanguageOption: true,
				
				// the text to display on the box in the box selector
                boxText: [
					{ t: "Cardboard Box", u: "Carton", s: "Pappkiste", v: "\u041a\u0430\u0440\u0442\u043e\u043d\u043d\u0430\u044f"},
					{ t: "Fabric Box", u: "Tissu", s: "Stoffkiste", v: "\u0422\u043a\u0430\u043d\u0435\u0432\u0430\u044f"},
					{ t: "Toy Box", u: "Jouets", s: "Spielzeugkiste", v: "\u0418\u0433\u0440\u0443\u0448\u0435\u0447\u043d\u0430\u044f" },
					{ t: "New levels\ncoming soon!", u: "De nouveaux niveaux bient\u00f4t disponibles!", s: "Neue Level\nkommen bald!", v: "\u041d\u043e\u0432\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438\n\u043d\u0430 \u043f\u043e\u0434\u0445\u043e\u0434\u0435!"}
				],
				
				// the background image to use for the box in the box selector
                Aq: ["box1_bgd.png", "box2_bgd.png", "box3_bgd.png", "boxmore_bgd.png"],
				
				// box borders
                zq: ["box1_border.png", "box2_border.png", "box3_border.png", null],
				
				// images used for the sliding door transitions
                Wl: ["levelbg1.jpg", "levelbg2.jpg", "levelbg3.jpg"],
				
				// the type of box to create
                gv: [a.wg, a.wg, a.Fo, a.uf],
				
				// how many stars are required to unlock each box
                jt: [0, 20, 40, null],
				
				// the index of the quad for the support OmNom sits on
                dz: [0, 1, 7, null],
				
				// determines whether the earth animation is shown
                Ny: [false, false, false, false],
				
                zr: c.Eu,
                dr: c.Cu,
                Yw: c.Du,
                Tv: c.Bu,
                Ci: b,
                sr: [e.pk, e.rk, e.hi],
                tr: [e.qk, e.sk, e.hi],
				
				// drawings
                Hv: ["drawing1.jpg", "drawing2.jpg", "drawing3.jpg"],
				
                Kv: "ie/",
                Lv: ["ie9msg.png", "ielogo.png", "pin-chair.png", "pin-chairshadow.png", "pin-cursor.png", "pin-ieprompt.png", "pin-omnom.png", "pin-prompt.png", "pin-taskbar.png"]
            };
            typeof getIE9DownloadUrl !== "undefined" && $(document).ready(function() {
                var a = $("#upgrade-button"),
                    c = getIE9DownloadUrl();
                if (c) a.attr("href", c).click(function() {
                    Analytics.$u("SMG_MRTINX_CTR_SITE_DL", i);
                    _gaq.push(["_trackEvent", "Upgrade", "Download IE"])
                });
                else {
                    a.hide();
                    (new IE9Download).IsIE9CompatMode && $("#upgrade-header").addClass("ie9compat")
                }
            });
            return b
        }([{
            rh: [{
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 156,
                    y: 139
                }, {
                    name: 100,
                    x: 159,
                    y: 51,
                    length: 90,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 2,
                    x: 161,
                    y: 427
                }, {
                    name: 3,
                    x: 162,
                    y: 230,
                    timeout: -1
                }, {
                    name: 3,
                    x: 161,
                    y: 295,
                    timeout: -1
                }, {
                    name: 3,
                    x: 161,
                    y: 361,
                    timeout: -1
                }, {
                    name: 4,
                    x: 177,
                    y: 31,
                    Ha: "en",
                    text: "Slide across to cut the rope",
                    width: 130
                }, {
                    name: 4,
                    x: 182,
                    y: 335,
                    Ha: "en",
                    text: "Deliver candy to Om Nom",
                    width: 130
                }, {
                    name: 5,
                    x: 57,
                    y: 119,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 8,
                    x: 231,
                    y: 416,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 5,
                    x: 109,
                    y: 119,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 5,
                    x: 161,
                    y: 119,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 5,
                    x: 213,
                    y: 119,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 5,
                    x: 265,
                    y: 119,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 14,
                    x: 62,
                    y: 170,
                    Ha: "en",
                    pa: 100,
                    Aa: 100,
                    ha: 2
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 69,
                    y: 203
                }, {
                    name: 100,
                    x: 52,
                    y: 70,
                    length: 90,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 162,
                    y: 69,
                    length: 170,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 2,
                    x: 264,
                    y: 419
                }, {
                    name: 3,
                    x: 54,
                    y: 250,
                    timeout: -1
                }, {
                    name: 3,
                    x: 53,
                    y: 369,
                    timeout: -1
                }, {
                    name: 3,
                    x: 280,
                    y: 250,
                    timeout: -1
                }, {
                    name: 100,
                    x: 275,
                    y: 69,
                    length: 320,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 4,
                    x: 133,
                    y: 285,
                    Ha: "en",
                    text: "Collect as many stars as you can",
                    width: 150
                }, {
                    name: 13,
                    x: 113,
                    y: 321,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ha: 1,
                    ra: 1
                }],
                Ka: [{
                    name: 52,
                    x: 158,
                    y: 187
                }, {
                    name: 2,
                    x: 262,
                    y: 362
                }, {
                    name: 100,
                    x: 161,
                    y: 315,
                    length: 93,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 100,
                    x: 289,
                    y: 186,
                    length: 105,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 100,
                    x: 162,
                    y: 57,
                    length: 93,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 100,
                    x: 33,
                    y: 186,
                    length: 105,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 3,
                    x: 159,
                    y: 226,
                    timeout: -1
                }, {
                    name: 3,
                    x: 32,
                    y: 312,
                    timeout: -1
                }, {
                    name: 3,
                    x: 161,
                    y: 434,
                    timeout: -1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 101,
                    y: 238
                }, {
                    name: 2,
                    x: 219,
                    y: 431
                }, {
                    name: 3,
                    x: 102,
                    y: 326,
                    timeout: -1
                }, {
                    name: 3,
                    x: 217,
                    y: 209,
                    timeout: -1
                }, {
                    name: 3,
                    x: 217,
                    y: 74,
                    timeout: -1
                }, {
                    name: 100,
                    x: 96,
                    y: 139,
                    length: 90,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 54,
                    x: 99,
                    y: 391
                }, {
                    name: 100,
                    x: 219,
                    y: 252,
                    length: 140,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 4,
                    x: 50,
                    y: 44,
                    Ha: "en",
                    text: "Press to pop the bubble",
                    width: 120,
                    ha: 1
                }, {
                    name: 4,
                    x: 157,
                    y: 293,
                    Ha: "en",
                    text: "The bubble will lift the candy up",
                    width: 120
                }, {
                    name: 8,
                    x: 167,
                    y: 391,
                    Ha: "en",
                    b: 15,
                    pa: 100,
                    Aa: 100
                }, {
                    name: 9,
                    x: 218,
                    y: 78,
                    Ha: "en",
                    pa: 100,
                    Aa: 10,
                    ha: 1
                }, {
                    name: 102,
                    x: 269,
                    y: 426,
                    b: 10,
                    jm: 1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 266,
                    y: 161
                }, {
                    name: 100,
                    x: 155,
                    y: 250,
                    length: 95,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 153,
                    y: 110,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 2,
                    x: 155,
                    y: 430
                }, {
                    name: 3,
                    x: 37,
                    y: 264,
                    timeout: -1
                }, {
                    name: 3,
                    x: 152,
                    y: 70,
                    timeout: -1
                }, {
                    name: 3,
                    x: 276,
                    y: 264,
                    timeout: -1
                }, {
                    name: 54,
                    x: 252,
                    y: 367
                }, {
                    name: 4,
                    x: 17,
                    y: 301,
                    Ha: "en",
                    text: "You can restart the level by pressing the",
                    width: 200
                }, {
                    name: 12,
                    x: 85,
                    y: 373,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 4,
                    x: 85,
                    y: 348,
                    Ha: "en",
                    text: "button",
                    width: 100
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ha: 1,
                    ra: 1
                }],
                Ka: [{
                    name: 52,
                    x: 161,
                    y: 350
                }, {
                    name: 2,
                    x: 163,
                    y: 67
                }, {
                    name: 100,
                    x: 243,
                    y: 290,
                    length: 120,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 100,
                    x: 83,
                    y: 401,
                    length: 90,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 54,
                    x: 165,
                    y: 421
                }, {
                    name: 100,
                    x: 165,
                    y: 123,
                    length: 200,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 3,
                    x: 97,
                    y: 294,
                    timeout: -1
                }, {
                    name: 3,
                    x: 166,
                    y: 422,
                    timeout: -1
                }, {
                    name: 3,
                    x: 97,
                    y: 228,
                    timeout: -1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 64,
                    y: 139
                }, {
                    name: 2,
                    x: 163,
                    y: 427
                }, {
                    name: 100,
                    x: 162,
                    y: 68,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 66,
                    y: 68,
                    length: 50,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 163,
                    y: 163,
                    length: 90,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 162,
                    y: 259,
                    length: 130,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 58,
                    x: 161,
                    y: 329,
                    b: 0,
                    size: 2
                }, {
                    name: 58,
                    x: 159,
                    y: 229,
                    b: 0,
                    size: 2
                }, {
                    name: 3,
                    x: 250,
                    y: 165,
                    timeout: -1
                }, {
                    name: 3,
                    x: 64,
                    y: 276,
                    timeout: -1
                }, {
                    name: 3,
                    x: 248,
                    y: 275,
                    timeout: -1
                }, {
                    name: 10,
                    x: 249,
                    y: 347,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 4,
                    x: 190,
                    y: 359,
                    Ha: "en",
                    text: "Keep the candy away from spikes",
                    width: 120
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 514,
                    y: 418
                }, {
                    name: 100,
                    x: 224,
                    y: 177,
                    length: 100,
                    n: p,
                    L: p,
                    o: 45,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 448,
                    y: 337,
                    length: 100,
                    n: p,
                    L: p,
                    o: 45,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 335,
                    y: 256,
                    length: 100,
                    n: p,
                    L: p,
                    o: 45,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 52,
                    x: 178,
                    y: 103
                }, {
                    name: 3,
                    x: 222,
                    y: 269,
                    timeout: -1
                }, {
                    name: 3,
                    x: 448,
                    y: 430,
                    timeout: -1
                }, {
                    name: 3,
                    x: 328,
                    y: 345,
                    timeout: -1
                }, {
                    name: 100,
                    x: 180,
                    y: 31,
                    length: 50,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 4,
                    x: 273,
                    y: 39,
                    Ha: "en",
                    text: "Automatic ropes appear when candy gets into their area",
                    width: 140
                }, {
                    name: 8,
                    x: 316,
                    y: 164,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 160,
                    y: 316
                }, {
                    name: 2,
                    x: 162,
                    y: 439
                }, {
                    name: 54,
                    x: 160,
                    y: 317
                }, {
                    name: 100,
                    x: 36,
                    y: 413,
                    length: 130,
                    n: p,
                    L: p,
                    Tf: p,
                    lh: p,
                    o: -1,
                    ke: p,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 291,
                    y: 413,
                    length: 130,
                    n: p,
                    L: p,
                    Tf: p,
                    lh: p,
                    o: -1,
                    ke: p,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 3,
                    x: 162,
                    y: 381,
                    pa: 100,
                    Aa: 0,
                    timeout: -1
                }, {
                    name: 100,
                    x: 93,
                    y: 231,
                    length: 100,
                    n: p,
                    L: p,
                    Tf: p,
                    lh: p,
                    o: 70,
                    ke: p,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 231,
                    y: 231,
                    length: 100,
                    n: p,
                    L: p,
                    Tf: p,
                    lh: p,
                    o: 70,
                    ke: p,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 59,
                    x: 232,
                    y: 232,
                    b: 0,
                    size: 3,
                    path: "0,0",
                    pa: 40,
                    Aa: 40,
                    mf: p
                }, {
                    name: 59,
                    x: 90,
                    y: 232,
                    b: 0,
                    size: 3,
                    path: "0,0",
                    pa: -40,
                    Aa: -40,
                    mf: p
                }, {
                    name: 3,
                    x: 161,
                    y: 32,
                    timeout: -1
                }, {
                    name: 3,
                    x: 161,
                    y: 73,
                    timeout: -1
                }]
            }]
        }, {
            rh: [{
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 161,
                    y: 220
                }, {
                    name: 2,
                    x: 254,
                    y: 416
                }, {
                    name: 3,
                    x: 299,
                    y: 89,
                    timeout: -1
                }, {
                    name: 3,
                    x: 20,
                    y: 89,
                    timeout: -1
                }, {
                    name: 3,
                    x: 161,
                    y: 171,
                    timeout: -1
                }, {
                    name: 55,
                    x: 42,
                    y: 237,
                    b: 0
                }, {
                    name: 55,
                    x: 277,
                    y: 233,
                    b: 180
                }, {
                    name: 100,
                    x: 162,
                    y: 88,
                    length: 110,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 55,
                    x: 161,
                    y: 334,
                    b: -90
                }, {
                    name: 4,
                    x: 22,
                    y: 357,
                    Ha: "en",
                    text: "Tap the Air Cushion to blow objects",
                    width: 180
                }, {
                    name: 8,
                    x: 101,
                    y: 347,
                    Ha: "en",
                    b: 180,
                    pa: 100,
                    Aa: 100
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ha: 1,
                    ra: 1
                }],
                Ka: [{
                    name: 52,
                    x: 215,
                    y: 210
                }, {
                    name: 2,
                    x: 190,
                    y: 322
                }, {
                    name: 55,
                    x: 284,
                    y: 208,
                    b: -180
                }, {
                    name: 100,
                    x: 222,
                    y: 82,
                    length: 90,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 100,
                    x: 101,
                    y: 209,
                    length: 95,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 3,
                    x: 99,
                    y: 253,
                    timeout: -1
                }, {
                    name: 3,
                    x: 98,
                    y: 345,
                    timeout: -1
                }, {
                    name: 3,
                    x: 98,
                    y: 82,
                    timeout: -1
                }, {
                    name: 55,
                    x: 37,
                    y: 343,
                    b: 0
                }, {
                    name: 57,
                    x: 37,
                    y: 257,
                    b: 0,
                    size: 1
                }, {
                    name: 54,
                    x: 97,
                    y: 144
                }, {
                    name: 60,
                    x: 220,
                    y: 256,
                    b: 0,
                    size: 4
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 321,
                    y: 213
                }, {
                    name: 2,
                    x: 431,
                    y: 386
                }, {
                    name: 100,
                    x: 323,
                    y: 47,
                    length: 130,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 55,
                    x: 183,
                    y: 224,
                    b: 0
                }, {
                    name: 100,
                    x: 323,
                    y: 167,
                    length: 200,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 323,
                    y: 105,
                    length: 170,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 3,
                    x: 320,
                    y: 399,
                    timeout: -1
                }, {
                    name: 57,
                    x: 323,
                    y: 347,
                    b: 0,
                    size: 1
                }, {
                    name: 3,
                    x: 422,
                    y: 161,
                    timeout: -1
                }, {
                    name: 3,
                    x: 322,
                    y: 302,
                    timeout: -1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 401,
                    y: 423
                }, {
                    name: 3,
                    x: 226,
                    y: 158,
                    timeout: -1
                }, {
                    name: 3,
                    x: 402,
                    y: 160,
                    timeout: -1
                }, {
                    name: 55,
                    x: 151,
                    y: 130,
                    b: 0
                }, {
                    name: 3,
                    x: 529,
                    y: 158,
                    timeout: -1
                }, {
                    name: 54,
                    x: 400,
                    y: 351
                }, {
                    name: 54,
                    x: 314,
                    y: 351
                }, {
                    name: 52,
                    x: 528,
                    y: 225
                }, {
                    name: 100,
                    x: 529,
                    y: 87,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 306,
                    y: 87,
                    length: 250,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 529,
                    y: 352,
                    length: 90,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ha: 1,
                    ra: 1
                }],
                Ka: [{
                    name: 2,
                    x: 219,
                    y: 433
                }, {
                    name: 54,
                    x: 100,
                    y: 176
                }, {
                    name: 54,
                    x: 159,
                    y: 178
                }, {
                    name: 54,
                    x: 218,
                    y: 178
                }, {
                    name: 54,
                    x: 100,
                    y: 242
                }, {
                    name: 54,
                    x: 159,
                    y: 244
                }, {
                    name: 54,
                    x: 218,
                    y: 244
                }, {
                    name: 54,
                    x: 100,
                    y: 308
                }, {
                    name: 54,
                    x: 159,
                    y: 310
                }, {
                    name: 54,
                    x: 218,
                    y: 310
                }, {
                    name: 54,
                    x: 102,
                    y: 373
                }, {
                    name: 54,
                    x: 161,
                    y: 375
                }, {
                    name: 54,
                    x: 220,
                    y: 375
                }, {
                    name: 54,
                    x: 98,
                    y: 109
                }, {
                    name: 54,
                    x: 220,
                    y: 110
                }, {
                    name: 3,
                    x: 99,
                    y: 110,
                    timeout: -1
                }, {
                    name: 3,
                    x: 218,
                    y: 244,
                    timeout: -1
                }, {
                    name: 3,
                    x: 103,
                    y: 372,
                    timeout: -1
                }, {
                    name: 52,
                    x: 157,
                    y: 97
                }, {
                    name: 55,
                    x: 36,
                    y: 376,
                    b: -20
                }, {
                    name: 55,
                    x: 35,
                    y: 247,
                    b: -20
                }, {
                    name: 55,
                    x: 284,
                    y: 245,
                    b: 200
                }, {
                    name: 55,
                    x: 284,
                    y: 374,
                    b: 200
                }, {
                    name: 54,
                    x: 40,
                    y: 312
                }, {
                    name: 54,
                    x: 277,
                    y: 310
                }, {
                    name: 54,
                    x: 280,
                    y: 178
                }, {
                    name: 54,
                    x: 37,
                    y: 180
                }, {
                    name: 100,
                    x: 163,
                    y: 33,
                    length: 50,
                    n: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p
                }, {
                    name: 54,
                    x: 280,
                    y: 111
                }, {
                    name: 54,
                    x: 37,
                    y: 108
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 390,
                    y: 125
                }, {
                    name: 2,
                    x: 318,
                    y: 431
                }, {
                    name: 100,
                    x: 391,
                    y: 46,
                    length: 40,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 323,
                    y: 225,
                    length: 70,
                    n: p,
                    L: p,
                    o: 80,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 57,
                    x: 375,
                    y: 406,
                    b: 90,
                    size: 1
                }, {
                    name: 57,
                    x: 256,
                    y: 407,
                    b: 90,
                    size: 1
                }, {
                    name: 4,
                    x: 211,
                    y: 300,
                    Ha: "en",
                    text: "Cut the rope before the spider reaches the candy",
                    width: 240
                }, {
                    name: 13,
                    x: 194,
                    y: 335,
                    Ha: "en",
                    pa: 100,
                    Aa: 100
                }, {
                    name: 3,
                    x: 372,
                    y: 223,
                    timeout: -1
                }, {
                    name: 3,
                    x: 230,
                    y: 287,
                    timeout: -1
                }, {
                    name: 3,
                    x: 317,
                    y: 377,
                    timeout: -1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 442,
                    y: 421
                }, {
                    name: 52,
                    x: 181,
                    y: 172
                }, {
                    name: 100,
                    x: 345,
                    y: 136,
                    length: 100,
                    n: p,
                    L: p,
                    o: 65,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 185,
                    y: 79,
                    length: 60,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 259,
                    y: 245,
                    length: 100,
                    n: p,
                    L: p,
                    o: 65,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 3,
                    x: 256,
                    y: 127,
                    timeout: -1
                }, {
                    name: 3,
                    x: 434,
                    y: 336,
                    timeout: -1
                }, {
                    name: 3,
                    x: 257,
                    y: 335,
                    timeout: -1
                }, {
                    name: 54,
                    x: 345,
                    y: 307
                }, {
                    name: 100,
                    x: 436,
                    y: 243,
                    length: 100,
                    n: p,
                    L: p,
                    o: 65,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 101,
                    x: 108,
                    y: 273,
                    b: 20,
                    jm: 2
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 54,
                    x: 109,
                    y: 257
                }, {
                    name: 55,
                    x: 66,
                    y: 72,
                    b: 50
                }, {
                    name: 3,
                    x: 208,
                    y: 191,
                    timeout: -1
                }, {
                    name: 3,
                    x: 385,
                    y: 195,
                    timeout: -1
                }, {
                    name: 3,
                    x: 546,
                    y: 192,
                    timeout: -1
                }, {
                    name: 2,
                    x: 458,
                    y: 416
                }, {
                    name: 52,
                    x: 111,
                    y: 174
                }, {
                    name: 100,
                    x: 113,
                    y: 83,
                    length: 50,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 55,
                    x: 161,
                    y: 72,
                    b: 50
                }, {
                    name: 55,
                    x: 258,
                    y: 73,
                    b: 50
                }, {
                    name: 55,
                    x: 349,
                    y: 73,
                    b: 50
                }, {
                    name: 100,
                    x: 47,
                    y: 154,
                    length: 460,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 55,
                    x: 437,
                    y: 73,
                    b: 50
                }, {
                    name: 60,
                    x: 582,
                    y: 203,
                    b: 90,
                    size: 4
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    ha: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 321,
                    y: 414
                }, {
                    name: 52,
                    x: 323,
                    y: 191
                }, {
                    name: 100,
                    x: 408,
                    y: 302,
                    length: 140,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 100,
                    x: 224,
                    y: 304,
                    length: 140,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 100,
                    x: 383,
                    y: 125,
                    length: 80,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 100,
                    x: 256,
                    y: 126,
                    length: 80,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: i,
                    O: "L"
                }, {
                    name: 3,
                    x: 321,
                    y: 275,
                    pa: 100,
                    Aa: 100,
                    timeout: -1
                }, {
                    name: 3,
                    x: 675,
                    y: 133,
                    path: "-39,-17,-91,-21,-154,-11,-201,10,-240,49,-284,99,-331,159,",
                    pa: 35,
                    Aa: 0,
                    timeout: -1
                }, {
                    name: 3,
                    x: -37,
                    y: 142,
                    path: "46,-14,93,-26,142,-18,195,3,239,40,282,97,327,151,",
                    pa: 35,
                    Aa: 0,
                    timeout: -1
                }, {
                    name: 54,
                    x: 319,
                    y: 340
                }]
            }]
        }, {
            rh: [{
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 314,
                    y: 372
                }, {
                    name: 82,
                    x: 176,
                    y: 397,
                    b: 25,
                    size: 2
                }, {
                    name: 82,
                    x: 454,
                    y: 396,
                    b: -25,
                    size: 2
                }, {
                    name: 100,
                    x: 320,
                    y: 14,
                    length: 160,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 52,
                    x: 159,
                    y: 123
                }, {
                    name: 82,
                    x: 86,
                    y: 352,
                    b: 25,
                    size: 2
                }, {
                    name: 82,
                    x: 548,
                    y: 351,
                    b: -25,
                    size: 2
                }, {
                    name: 3,
                    x: 165,
                    y: 350,
                    timeout: -1
                }, {
                    name: 3,
                    x: 471,
                    y: 350,
                    timeout: -1
                }, {
                    name: 3,
                    x: 320,
                    y: 319,
                    pa: 35,
                    timeout: -1
                }, {
                    name: 82,
                    x: -6,
                    y: 306,
                    b: 25,
                    size: 2
                }, {
                    name: 82,
                    x: 643,
                    y: 304,
                    b: -25,
                    size: 2
                }, {
                    name: 82,
                    x: 360,
                    y: 440,
                    b: -25,
                    size: 2
                }, {
                    name: 82,
                    x: 267,
                    y: 440,
                    b: 25,
                    size: 2
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 82,
                    x: 254,
                    y: 139,
                    b: -135,
                    size: 2
                }, {
                    name: 82,
                    x: 62,
                    y: 136,
                    b: 135,
                    size: 2
                }, {
                    name: 82,
                    x: 253,
                    y: 335,
                    b: -45,
                    size: 2
                }, {
                    name: 82,
                    x: 66,
                    y: 332,
                    b: 45,
                    size: 2
                }, {
                    name: 2,
                    x: 48,
                    y: 222
                }, {
                    name: 52,
                    x: 159,
                    y: 235
                }, {
                    name: 82,
                    x: 159,
                    y: 373,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 157,
                    y: 101,
                    b: 180,
                    size: 2
                }, {
                    name: 3,
                    x: 161,
                    y: 327,
                    timeout: -1
                }, {
                    name: 3,
                    x: 160,
                    y: 141,
                    timeout: -1
                }, {
                    name: 3,
                    x: 224,
                    y: 234,
                    timeout: -1
                }, {
                    name: 100,
                    x: 85,
                    y: 429,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 241,
                    y: 429,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 91,
                    y: 56,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 100,
                    x: 231,
                    y: 57,
                    length: 100,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 55,
                    x: 284,
                    y: 235,
                    b: 135
                }, {
                    name: 103,
                    x: 290,
                    y: 45,
                    b: 10,
                    jm: 3
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 231,
                    y: 196
                }, {
                    name: 55,
                    x: 129,
                    y: 193,
                    b: 0
                }, {
                    name: 55,
                    x: 651,
                    y: 187,
                    b: 180
                }, {
                    name: 82,
                    x: 336,
                    y: 260,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 445,
                    y: 260,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 548,
                    y: 260,
                    b: 0,
                    size: 2
                }, {
                    name: 3,
                    x: 575,
                    y: 71,
                    path: "0,150",
                    pa: 30,
                    timeout: 10
                }, {
                    name: 3,
                    x: 385,
                    y: 69,
                    path: "0,150",
                    pa: 20,
                    timeout: 15
                }, {
                    name: 3,
                    x: 481,
                    y: 71,
                    path: "0,150",
                    pa: 10,
                    timeout: 20
                }, {
                    name: 2,
                    x: 55,
                    y: 422
                }, {
                    name: 82,
                    x: 225,
                    y: 260,
                    b: 0,
                    size: 2
                }, {
                    name: 100,
                    x: 57,
                    y: 308,
                    length: 100,
                    n: p,
                    L: p,
                    o: 70,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 52,
                    x: 140,
                    y: 217
                }, {
                    name: 82,
                    x: 131,
                    y: 261,
                    b: 0,
                    size: 2
                }, {
                    name: 55,
                    x: 57,
                    y: 197,
                    b: 0
                }, {
                    name: 2,
                    x: 150,
                    y: 431
                }, {
                    name: 3,
                    x: 230,
                    y: 230,
                    timeout: -1
                }, {
                    name: 82,
                    x: 281,
                    y: 199,
                    b: -90,
                    size: 2
                }, {
                    name: 54,
                    x: 222,
                    y: 311
                }, {
                    name: 55,
                    x: 57,
                    y: 317,
                    b: 0
                }, {
                    name: 3,
                    x: 165,
                    y: 360,
                    timeout: -1
                }, {
                    name: 3,
                    x: 165,
                    y: 70,
                    timeout: -1
                }, {
                    name: 82,
                    x: 281,
                    y: 315,
                    b: -90,
                    size: 2
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 640,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 81,
                    x: 211,
                    y: 447,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 278,
                    y: 447,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 343,
                    y: 448,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 407,
                    y: 448,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 472,
                    y: 448,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 538,
                    y: 448,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 601,
                    y: 448,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 280,
                    y: 42,
                    b: 180,
                    size: 1
                }, {
                    name: 81,
                    x: 344,
                    y: 49,
                    b: 190,
                    size: 1
                }, {
                    name: 81,
                    x: 405,
                    y: 66,
                    b: 200,
                    size: 1
                }, {
                    name: 81,
                    x: 462,
                    y: 92,
                    b: 210,
                    size: 1
                }, {
                    name: 81,
                    x: 514,
                    y: 129,
                    b: 220,
                    size: 1
                }, {
                    name: 81,
                    x: 558,
                    y: 174,
                    b: 230,
                    size: 1
                }, {
                    name: 81,
                    x: 595,
                    y: 226,
                    b: 240,
                    size: 1
                }, {
                    name: 81,
                    x: 617,
                    y: 283,
                    b: 260,
                    size: 1
                }, {
                    name: 81,
                    x: 624,
                    y: 345,
                    b: 270,
                    size: 1
                }, {
                    name: 2,
                    x: 52,
                    y: 352
                }, {
                    name: 100,
                    x: 219,
                    y: 72,
                    length: 220,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 52,
                    x: 221,
                    y: 313
                }, {
                    name: 81,
                    x: 624,
                    y: 407,
                    b: -90,
                    size: 1
                }, {
                    name: 81,
                    x: 216,
                    y: 42,
                    b: 180,
                    size: 1
                }, {
                    name: 3,
                    x: 558,
                    y: 258,
                    path: "-39,-66,-96,-120,-160,-155,",
                    pa: 70,
                    timeout: -1
                }, {
                    name: 3,
                    x: 587,
                    y: 343,
                    timeout: -1
                }, {
                    name: 3,
                    x: 277,
                    y: 409,
                    timeout: -1
                }, {
                    name: 55,
                    x: 127,
                    y: 345,
                    b: 0
                }, {
                    name: 81,
                    x: 87,
                    y: 447,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 149,
                    y: 447,
                    b: 0,
                    size: 1
                }, {
                    name: 81,
                    x: 25,
                    y: 447,
                    b: 0,
                    size: 1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 320,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 100,
                    x: 159,
                    y: 270,
                    length: 140,
                    n: p,
                    L: p,
                    o: -1,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 82,
                    x: 160,
                    y: 147,
                    b: 0,
                    size: 2
                }, {
                    name: 52,
                    x: 114,
                    y: 107
                }, {
                    name: 2,
                    x: 37,
                    y: 387
                }, {
                    name: 100,
                    x: 162,
                    y: 270,
                    length: 100,
                    n: p,
                    L: p,
                    o: 120,
                    q: -1,
                    A: p,
                    w: 0,
                    e: p,
                    O: "L"
                }, {
                    name: 82,
                    x: 196,
                    y: 386,
                    b: 90,
                    size: 2
                }, {
                    name: 54,
                    x: 273,
                    y: 389
                }, {
                    name: 3,
                    x: 277,
                    y: 389,
                    timeout: -1
                }, {
                    name: 3,
                    x: 267,
                    y: 145,
                    timeout: -1
                }, {
                    name: 3,
                    x: 57,
                    y: 143,
                    timeout: -1
                }]
            }, {
                Sa: [{
                    name: 0,
                    Ma: 32,
                    width: 800,
                    height: 480
                }, {
                    name: 1,
                    ra: 1,
                    I: p
                }],
                Ka: [{
                    name: 2,
                    x: 608,
                    y: 346
                }, {
                    name: 52,
                    x: 397,
                    y: 255
                }, {
                    name: 82,
                    x: 292,
                    y: 313,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 394,
                    y: 313,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 499,
                    y: 313,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 628,
                    y: 185,
                    b: -90,
                    size: 2
                }, {
                    name: 82,
                    x: 496,
                    y: 53,
                    b: 180,
                    size: 2
                }, {
                    name: 82,
                    x: 290,
                    y: 184,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 391,
                    y: 185,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 252,
                    y: 247,
                    b: 90,
                    size: 2
                }, {
                    name: 82,
                    x: 392,
                    y: 53,
                    b: 180,
                    size: 2
                }, {
                    name: 82,
                    x: 286,
                    y: 53,
                    b: 180,
                    size: 2
                }, {
                    name: 82,
                    x: 57,
                    y: 188,
                    b: 90,
                    size: 2
                }, {
                    name: 82,
                    x: 58,
                    y: 289,
                    b: 90,
                    size: 2
                }, {
                    name: 82,
                    x: 190,
                    y: 424,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 298,
                    y: 425,
                    b: 0,
                    size: 2
                }, {
                    name: 82,
                    x: 406,
                    y: 425,
                    b: 0,
                    size: 2
                }, {
                    name: 55,
                    x: 302,
                    y: 254,
                    b: 0
                }, {
                    name: 82,
                    x: 591,
                    y: 277,
                    b: -45,
                    size: 2
                }, {
                    name: 82,
                    x: 590,
                    y: 92,
                    b: -135,
                    size: 2
                }, {
                    name: 82,
                    x: 97,
                    y: 385,
                    b: 45,
                    size: 2
                }, {
                    name: 82,
                    x: 90,
                    y: 94,
                    b: 135,
                    size: 2
                }, {
                    name: 55,
                    x: 502,
                    y: 372,
                    b: 180
                }, {
                    name: 82,
                    x: 510,
                    y: 425,
                    b: 0,
                    size: 2
                }, {
                    name: 3,
                    x: 571,
                    y: 191,
                    timeout: -1
                }, {
                    name: 3,
                    x: 219,
                    y: 237,
                    timeout: -1
                }, {
                    name: 3,
                    x: 372,
                    y: 369,
                    timeout: -1
                }, {
                    name: 82,
                    x: 698,
                    y: 380,
                    b: -45,
                    size: 2
                }, {
                    name: 82,
                    x: 685,
                    y: 283,
                    b: -135,
                    size: 2
                }, {
                    name: 82,
                    x: 180,
                    y: 53,
                    b: 180,
                    size: 2
                }, {
                    name: 82,
                    x: 613,
                    y: 425,
                    b: 0,
                    size: 2
                }]
            }]
        }], Ma, r, ia),
        Oa = {
            qb: 2560,
            cb: 1440,
            $b: 1,
            G: 3,
            ib: 0,
            Ja: 105,
            no: 10,
            oo: 6,
            dk: 60,
            ri: 3,
            Hl: 42,
            Mk: 200,
            Nk: 400,
            Ok: -400,
            Gl: new U(22, 20, 30, 30),
            Fl: new U(70, 64, 82, 82),
            Jl: new U(264, 350, 108, 2),
            Ll: 385,
            Ml: 700,
            Zj: 85,
            Yj: 60,
            Wh: 60,
            Xh: 150,
            Xj: new U(48, 48, 152, 152),
            Vn: -35,
            Un: 14,
            Il: 15,
            Vj: 840,
            Wj: 40,
            Yk: 624,
            Uk: new U(300, 300, 175, 175),
            Xk: 2500,
            Wk: 15,
            Vk: 100,
            ck: 300,
            bk: 1400,
            ak: new U(142, 157, 112, 104),
            $h: new U(155, 176, 88, 76),
            Bo: 1,
            Vc: 110,
            gi: 5.625,
            mk: 1400,
            lk: 1650,
            kk: 142,
            fi: 74,
            De: 65,
            El: 117,
            Al: 270,
            xi: 140,
            Bl: 15,
            Ag: 40,
            Cl: -16,
            Rk: 44,
            Qk: 4,
            Td: 90,
            ok: 100,
            Sk: 800,
            Tk: 400,
            Kk: 1E3,
            Lk: 300,
            $j: 5500,
            Zh: 14,
            ek: 12,
            Pk: 1.4
        },
        Pa = function(b, c) {
            function e(a, d) {
                var c = d.$b;
                d.Ja = a.Ja * c;
                d.ri = a.ri * c;
                d.Hl = a.Hl * c;
                d.Mk = a.Mk * c;
                d.Ok = a.Ok * c;
                d.Nk = a.Nk * c;
                d.dk = a.dk * c;
                d.Jl = b.gf(a.Jl, c);
                d.Ll = a.Ll * c;
                d.Ml = a.Ml * c;
                d.Zj = a.Zj * c;
                d.Wh = a.Wh * c;
                d.Xh = a.Xh * c;
                d.Xj = b.gf(a.Xj, c);
                d.Yj = a.Yj * c;
                d.Il = a.Il * c;
                d.Fl = b.gf(a.Fl, c);
                d.Gl = b.gf(a.Gl, c);
                d.Vj = a.Vj * c;
                d.Wj = a.Wj * c;
                d.Yk = a.Yk * c;
                d.Uk = b.gf(a.Uk, c);
                d.Xk = a.Xk * c;
                d.Wk = a.Wk * c;
                d.Vk = a.Vk * c;
                d.ak = b.gf(a.ak, c);
                d.$h = b.gf(a.$h, c);
                d.ck = a.ck * c;
                d.bk = a.bk * c;
                d.ok = a.ok * c;
                d.Sk = a.Sk * c;
                d.Tk = a.Tk * c;
                d.Kk = a.Kk * c;
                d.Lk = a.Lk * c;
                d.$j = a.$j *
                    c;
                d.Zh = a.Zh * c;
                d.gi = a.gi * c;
                d.mk = a.mk * c;
                d.Vc = a.Vc * c;
                d.lk = a.lk * c;
                d.kk = a.kk * c;
                d.fi = a.fi * c;
                d.De = a.De * c;
                d.El = a.El * c;
                d.Rk = a.Rk * c;
                d.Qk = a.Qk * c;
                d.Td = a.Td * c;
                d.Al = a.Al * c;
                d.xi = a.xi * c;
                d.Bl = a.Bl * c;
                d.Ag = a.Ag * c;
                d.Cl = a.Cl * c;
                d.ek = a.ek * c;
                d.f = function(a) {
                    return Math.round(a * d.gq)
                }
            }
            return function(a) {
                e(c, a)
            }
        }(U, Oa),
        Sa = function(b) {
            return {
                Jf: function(c, b, a) {
                    return Math.max(Math.min(c, a), b)
                },
                Bj: function(c, b) {
                    return c < 0 === b < 0
                },
                gb: function(c, b) {
                    return Math.floor(Math.random() * (b - c + 1) + c)
                },
                Lx: function() {
                    return Math.random() >
                        0.5
                },
                vb: function() {
                    return Math.random() * 2 - 1
                },
                yr: function(c, e, a, d) {
                    return c >= e && c >= a && c >= d ? c : e >= c && e >= a && e >= d ? e : a >= e && a >= c && a >= d ? a : d >= e && d >= a && d >= c ? d : b.c
                },
                Ar: function(c, e, a, d) {
                    return c <= e && c <= a && c <= d ? c : e <= c && e <= a && e <= d ? e : a <= e && a <= c && a <= d ? a : d <= e && d <= a && d <= c ? d : b.c
                },
                xw: function(c, b, a, d, f, h, g, k) {
                    var l, s;
                    l = f - c + g - a;
                    s = h - b + k - d;
                    c = a - c;
                    b = d - b;
                    f = g - f;
                    k = k - h;
                    h = f * s - k * l;
                    l = c * s - b * l;
                    s = Math.abs(b * f - k * c);
                    return Math.abs(h) <= s && Math.abs(l) <= s
                },
                TA: function(c, b) {
                    var a = Math.pow(10, b);
                    return Math.round(c * a) / a
                },
                rs: function(c) {
                    return Math.round(c *
                        100) / 100
                }
            }
        }(T),
        Ta = {
            get: function(b) {
                return !window.localStorage ? n : localStorage.getItem(b)
            },
            set: function(b, c) {
                window.localStorage && (c == n ? localStorage.removeItem(b) : localStorage.setItem(b, c.toString()))
            },
            remove: function(b) {
                window.localStorage && localStorage.removeItem(b)
            },
            Ti: function(b, c) {
                var e = this.get(b);
                return e == n ? c : e === "true"
            },
            Vi: function(b, c) {
                var e = this.get(b);
                return e == n ? c : parseInt(e, 10)
            }
        },
        Ua = {
            nc: 0,
            Pd: 1,
            Qd: 2,
            Ce: 3,
            ei: 4,
            bp: 5,
            rg: 6,
            Rd: 7,
            fo: 8
        },
        Va = function() {
            function b(c) {
                this.Cd = c.element;
                this.Yg = c.Yg;
                var b = this;
                this.Ps = function(a) {
                    b.en(a);
                    return c.Tm ? b.Tj(a, c.Tm) : p
                };
                this.Er = function(a) {
                    b.en(a);
                    return c.Pm ? b.Tj(a, c.Pm) : p
                };
                this.Yq = function(a) {
                    b.en(a);
                    return c.Nm ? b.Tj(a, c.Nm) : p
                };
                this.Ur = function(a) {
                    return c.Qm ? b.Tj(a, c.Qm) : p
                }
            }
            b.prototype.Tj = function(c, b) {
                var a = 0,
                    d = 0;
                if (!c) c = window.event;
                if (c.changedTouches && c.changedTouches.length > 0) {
                    a = c.changedTouches[0].pageX;
                    d = c.changedTouches[0].pageY
                } else if (c.targetTouches && c.targetTouches.length > 0) {
                    a = c.targetTouches[0].pageX;
                    d = c.targetTouches[0].pageY
                } else if (c.pageX ||
                    c.pageY) {
                    a = c.pageX;
                    d = c.pageY
                } else if (c.clientX || c.clientY) {
                    a = c.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                    d = c.clientY + document.body.scrollTop + document.documentElement.scrollTop
                }
                var f = $(this.Cd).offset(),
                    h = this.Yg ? this.Yg() : 1,
                    a = Math.round((a - f.left) / h),
                    d = Math.round((d - f.top) / h);
                return b(a, d)
            };
            b.prototype.en = function(c) {
                c.preventManipulation ? c.preventManipulation() : c.preventDefault()
            };
            b.prototype.$c = function() {
                this.Cd.addEventListener(b.Bn, this.Ps, p);
                this.Cd.addEventListener(b.Dr,
                    this.Er, p);
                this.Cd.addEventListener(b.lm, this.Yq, p);
                this.Cd.addEventListener(b.Tr, this.Ur, p)
            };
            b.prototype.fd = function() {
                this.Cd.removeEventListener(b.Bn, this.Ps, p);
                this.Cd.removeEventListener(b.Dr, this.Er, p);
                this.Cd.removeEventListener(b.lm, this.Yq, p);
                this.Cd.removeEventListener(b.Tr, this.Ur, p)
            };
            b.Uj = window.navigator.msPointerEnabled;
            b.Ln = typeof Modernizr !== "undefined" && Modernizr.touch;
            b.Bn = b.Uj ? "MSPointerDown" : b.Ln ? "touchstart" : "mousedown";
            b.Dr = b.Uj ? "MSPointerMove" : b.Ln ? "touchmove" : "mousemove";
            b.lm =
                b.Uj ? "MSPointerUp" : b.Ln ? "touchend" : "mouseup";
            b.Tr = b.Uj ? "MSPointerOut" : "mouseout";
            return b
        }(),
        Wa = function() {
            for (var b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; c++) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"];
            if (!window.requestAnimationFrame) {
                var e = 1E3 / 60,
                    a = 0;
                window.requestAnimationFrame = function(d) {
                    var c = +new Date,
                        b = Math.max(0, e - (c - a));
                    window.setTimeout(function() {
                        d(+new Date)
                    }, b);
                    a = c + b
                }
            }
            return window.requestAnimationFrame
        }(),
        Xa = new function() {
            // parse the query strings into a dictionary
            function getQueryStrings() {
                var assoc = {},
                    queryString = location.search.substring(1) || '',
                    keyValues = queryString.split('&'),
                    i, len, kv,
                    decode = function(s) {
                        return decodeURIComponent(s.replace(/\+/g, " "));
                    };

                for (i = 0, len = keyValues.length; i < len; i++) {
                    kv = keyValues[i].split('=');
                    if (kv.length > 1) {
                        assoc[decode(kv[0])] = decode(kv[1]);
                    }
                }
                return assoc;
            }

            var qs = getQueryStrings();

            // case insensitive lookup
            var urlContains = function (val) {
                var url = window.location.href.toLowerCase();
                return (url.indexOf(val.toLowerCase()) >= 0);
            };

            // debug querystrings
            this.box = (qs['box'] == null) ? null : parseInt(qs['box'], 10);
            this.level = (qs['level'] == null) ? null : parseInt(qs['level'], 10);
            this.minFps = (qs['minFps'] == null) ? null : parseInt(qs['minFps'], 10);
            this.unlockAllBoxes = (this.box != null && this.level != null) || urlContains('unlockAllBoxes=true');
            this.forcePinnedBox = this.unlockAllBoxes || urlContains('enablePinnedBox=true');
            this.createScoresForBox = (qs['createScoresForBox'] == null) ? null : parseInt(qs['createScoresForBox'], 10);

            // there are ok to leave in for ship
            this.lang = qs['lang'];
            this.showBoxBackgrounds = urlContains("boxBackgrounds=true");
            this.showFrameRate = urlContains("showFrameRate=true");
            this.forceHtml5Audio = urlContains("html5audio=true");

            // for testing
            //this.unlockAllBoxes = true;
            //this.showFrameRate = true;
        },
        Ya = function(b, c, e) {
            b = b.extend({
                init: function(a, d, c) {
                    this.Bx = a;
                    this.Aa = c || 0;
                    this.path = [];
                    if (a > 0) {
                        this.pa = Array(a);
                        for (c = 0; c < a; c++) this.pa[c] = d || 0
                    }
                    this.a =
                        new e(0, 0);
                    this.b = 0;
                    this.reverse = this.paused = p;
                    this.jb = 0
                },
                yy: function(a) {
                    for (var d = 0, c = this.Bx; d < c; d++) this.pa[d] = a
                },
                zs: function(a, d) {
                    if (a[0] === "R") {
                        var c = parseInt(a.substr(2), 10),
                            b = c / 2,
                            g = 2 * Math.PI / b,
                            k = 0;
                        a[1] === "C" || (g = -g);
                        for (var l = 0; l < b; ++l) {
                            this.Af(new e(d.x + c * Math.cos(k), d.y + c * Math.sin(k)));
                            k = k + g
                        }
                    } else {
                        this.Af(d.copy());
                        a[a.length - 1] === "," && (a = a.substr(0, a.length - 1));
                        c = a.split(",");
                        b = c.length;
                        for (l = 0; l < b; l = l + 2) this.Af(new e(d.x + parseFloat(c[l]), d.y + parseFloat(c[l + 1])))
                    }
                },
                Af: function(a) {
                    this.path.push(a)
                },
                start: function() {
                    if (this.path.length > 0) {
                        this.a.ba(this.path[0]);
                        this.Pc = 1;
                        this.Yl()
                    }
                },
                pause: function() {
                    this.paused = i
                },
                kt: function() {
                    this.paused = p
                },
                $A: fa("Aa"),
                EA: function(a) {
                    this.Pc = a;
                    this.a.ba(this.path[a]);
                    this.Yl()
                },
                Yl: function() {
                    this.offset = e.bb(this.path[this.Pc], this.a);
                    this.offset.normalize();
                    this.offset.multiply(this.pa[this.Pc])
                },
                YA: function(a, d) {
                    this.pa[d] = a
                },
                XA: fa("reverse"),
                update: function(a) {
                    if (!this.paused) {
                        if (this.path.length > 0) {
                            var d = this.path[this.Pc],
                                b = p;
                            if (this.a.Qi(d)) b = i;
                            else {
                                var h =
                                    a;
                                if (this.jb !== 0) {
                                    h = h + this.jb;
                                    this.jb = 0
                                }
                                this.a.add(e.multiply(this.offset, h));
                                if (!c.Bj(this.offset.x, d.x - this.a.x) || !c.Bj(this.offset.y, d.y - this.a.y)) {
                                    this.jb = e.bb(this.a, d).hd();
                                    this.jb = this.jb / this.offset.hd();
                                    this.a.ba(d);
                                    b = i
                                }
                            }
                            if (b) {
                                if (this.reverse) {
                                    this.Pc--;
                                    if (this.Pc < 0) this.Pc = this.path.length - 1
                                } else {
                                    this.Pc++;
                                    if (this.Pc >= this.path.length) this.Pc = 0
                                }
                                this.Yl()
                            }
                        }
                        if (this.Aa !== 0) this.b = this.b + this.Aa * a
                    }
                }
            });
            b.Xe = function(a, d, c, b) {
                if (d !== a)
                    if (d > a) {
                        a = a + c * b;
                        a > d && (a = d)
                    } else {
                        a = a - c * b;
                        a < d && (a = d)
                    }
                return a
            };
            b.md = function(a, d, c, b) {
                var e = p;
                if (d !== a) {
                    if (d > a) {
                        a = a + c * b;
                        a > d && (a = d)
                    } else {
                        a = a - c * b;
                        a < d && (a = d)
                    }
                    d === a && (e = i)
                }
                return {
                    value: a,
                    nd: e
                }
            };
            b.ep = 100;
            return b
        }(sa, Sa, S),
        ab = function() {
            function b(c, b, a, d) {
                this.object = c;
                this.Xd = b;
                this.param = a;
                this.delay = d
            }
            b.prototype.xv = function() {
                this.Xd.apply(this.object, this.param)
            };
            return {
                ae: [],
                Wd: function(c, e, a, d) {
                    this.ae.push(new b(c, e, a, d))
                },
                Zl: function() {
                    this.ae = []
                },
                fA: function(c, b, a) {
                    for (var d = 0, f = this.ae.length; d < f; d--) {
                        var h = this.ae[d];
                        if (h.object === c && h.Xd === b && h.param ===
                            a) {
                            this.ae.splice(d, 1);
                            break
                        }
                    }
                },
                update: function(c) {
                    for (var b = this.ae.slice(0), a = 0, d = b.length; a < d; a++) {
                        var f = b[a],
                            h = this.ae.indexOf(f);
                        if (!(h < 0)) {
                            f.delay = f.delay - c;
                            if (f.delay <= 0) {
                                this.ae.splice(h, 1);
                                f.xv()
                            }
                        }
                    }
                }
            }
        }(),
        bb = function() {
            var b = {
                dp: 0,
                yo: 1,
                Rp: 2,
                Pp: 3,
                fq: 4,
                Kl: 5,
                Sp: 6,
                Tp: 7,
                Up: 8,
                Vp: 9,
                Wp: 10,
                Xp: 11,
                Yp: 12,
                Zp: 13,
                $p: 14,
                aq: 15,
                bq: 16,
                cq: 17,
                dq: 18,
                Yn: 50,
                Zn: 51,
                Xn: 52,
                Co: 53,
                Tn: 54,
                lp: 55,
                Kp: 56,
                Lp: 57,
                Mp: 58,
                Np: 59,
                Op: 60,
                vu: 61,
                hk: 80,
                Rn: 81,
                Sn: 82,
                Ao: 100,
                nk: 101,
                Do: 102,
                Eo: 103,
                qp: 120,
                pA: function(c) {
                    switch (c) {
                        case "map":
                            return b.dp;
                        case "gameDesign":
                            return b.yo;
                        case "target":
                            return b.Rp;
                        case "star":
                            return b.Pp;
                        case "tutorialText":
                            return b.fq;
                        case "tutorial01":
                            return b.Kl;
                        case "tutorial02":
                            return b.Sp;
                        case "tutorial03":
                            return b.Tp;
                        case "tutorial04":
                            return b.Up;
                        case "tutorial05":
                            return b.Vp;
                        case "tutorial06":
                            return b.Wp;
                        case "tutorial07":
                            return b.Xp;
                        case "tutorial08":
                            return b.Yp;
                        case "tutorial09":
                            return b.Zp;
                        case "tutorial10":
                            return b.$p;
                        case "tutorial11":
                            return b.aq;
                        case "tutorial12":
                            return b.bq;
                        case "tutorial13":
                            return b.cq;
                        case "tutorial14":
                            return b.dq;
                        case "candyL":
                            return b.Yn;
                        case "candyR":
                            return b.Zn;
                        case "candy":
                            return b.Xn;
                        case "gravitySwitch":
                            return b.Co;
                        case "bubble":
                            return b.Tn;
                        case "pump":
                            return b.lp;
                        case "sock":
                            return b.Kp;
                        case "spike1":
                            return b.Lp;
                        case "spike2":
                            return b.Mp;
                        case "spike3":
                            return b.Np;
                        case "spike4":
                            return b.Op;
                        case "spikesSwitch":
                            return b.vu;
                        case "electro":
                            return b.hk;
                        case "bouncer1":
                            return b.Rn;
                        case "bouncer2":
                            return b.Sn;
                        case "grab":
                            return b.Ao;
                        case "hidden01":
                            return b.nk;
                        case "hidden02":
                            return b.Do;
                        case "hidden03":
                            return b.Eo;
                        case "rotatedCircle":
                            return b.qp;
                        default:
                            alert("Unknown map item:" + c);
                            return n
                    }
                }
            };
            return b
        }(),
        cb = function(b, c, e) {
            return b.extend({
                init: function() {
                    this.jn = 1;
                    this.ya = []
                },
                qq: function(a, d) {
                    this.ya.splice(d, 0, a)
                },
                pq: function(a) {
                    this.ya.push(a)
                },
                log: function() {
                    e.debug("Constraint System Log:");
                    for (var a = 0, d = this.ya.length; a < d; a++) {
                        var c = this.ya[a];
                        e.debug("-- Point: " + c.Zr());
                        for (var b = 0, g = c.Rb.length; b < g; b++) {
                            var k = c.Rb[b];
                            e.debug("---- Constraint: " + k.Hc.Zr() + " len: " + k.od)
                        }
                    }
                },
                Px: function(a) {
                    this.ya.splice(a, 1)
                },
                update: function(a) {
                    for (var d = this.ya, c = d.length, b = this.jn, e = 0; e < c; e++) d[e].update(a);
                    for (e = 0; e < b; e++)
                        for (a = 0; a < c; a++) d[a].Cj()
                }
            })
        }(sa, S, La),
        db = {
            bi: 0,
            si: 1,
            Sz: 2
        },
        eb = function(b, c) {
            var e = 9.8 * c.lu,
                a = {
                    so: e,
                    Ic: new b(0, e),
                    toggle: function() {
                        a.Ic.y = -a.Ic.y
                    },
                    jh: function() {
                        return a.Ic.y === 0 && a.Ic.x === 0
                    },
                    or: function() {
                        return a.Ic.y === a.so && a.Ic.x === 0
                    },
                    reset: function() {
                        a.Ic.x = 0;
                        a.Ic.y = e
                    }
                };
            return a
        }(S, T),
        fb = function(b, c, e, a) {
            return b.extend({
                init: function() {
                    this.fm = p;
                    this.pd(1);
                    this.ns()
                },
                pd: function(a) {
                    this.Mn = a;
                    this.gh = 1 / a;
                    this.Ed = new e(0, c.so * a)
                },
                ns: function() {
                    var a = e.Pa;
                    this.Yb = a();
                    this.r = a();
                    this.a = a();
                    this.Eb = a();
                    this.mb = a()
                },
                eB: function(a, c) {
                    var b = (a / c >> 0) + 1;
                    b != 0 && (a = a / b);
                    for (var e = 0; e < b; e++) this.update(a)
                },
                update: function(d) {
                    this.mb = e.Pa();
                    this.fm || (a.jh() ? this.mb.add(this.Ed) : this.mb.add(e.multiply(a.Ic, this.Mn)));
                    d = d / c.yf;
                    this.mb.multiply(this.gh);
                    this.r = e.multiply(this.mb, d);
                    this.Yb.add(this.r);
                    this.Eb = e.multiply(this.Yb, d);
                    this.a.add(this.Eb)
                },
                Sl: function(a,
                    b) {
                    a.jh() || this.a.add(e.multiply(a, b / c.yf))
                }
            })
        }(sa, T, S, eb),
        gb = function(b, c, e, a, d) {
            function f(a, d, c) {
                this.Hc = a;
                this.od = d;
                this.type = c
            }
            return c.extend({
                init: function() {
                    this.ka = new e(a.Ee, a.Ee);
                    this.Oc = new e(a.c, a.c);
                    this.Rb = [];
                    this.mb = e.Pa();
                    this.h()
                },
                ns: function() {
                    this.h();
                    this.ka.x = a.Ee;
                    this.ka.y = a.Ee;
                    this.ls()
                },
                ls: function() {
                    this.Rb = []
                },
                Je: function(a, d, c) {
                    this.Rb.push(new f(a, d, c))
                },
                OA: function(a) {
                    for (var d = this.Rb, c = d.length, b = 0; b < c; b++)
                        if (d[b].Hc === a) {
                            d.splice(b, 1);
                            break
                        }
                },
                Nx: function(a) {
                    this.Rb.splice(a,
                        1)
                },
                gA: function(a, d) {
                    for (var c = this.Rb, b = c.length, e = 0; e < b; e++) {
                        var o = c[e];
                        if (o.Hc === a) {
                            o.Hc = d;
                            break
                        }
                    }
                },
                jw: function(a) {
                    for (var d = this.Rb, c = d.length, b = 0; b < c; b++)
                        if (d[b].Hc === a) return i;
                    return p
                },
                Ei: function(a, d) {
                    for (var c = this.Rb, b = c.length, e = 0; e < b; e++) {
                        var o = c[e];
                        if (o.Hc === a) {
                            o.od = d;
                            break
                        }
                    }
                },
                Iq: function(a, d, c) {
                    for (var b = this.Rb, e = b.length, o = 0; o < e; o++) {
                        var f = b[o];
                        if (f.Hc === a) {
                            f.Hc = d;
                            f.od = c;
                            break
                        }
                    }
                },
                od: function(d) {
                    for (var c = this.Rb, b = c.length, l = 0; l < b; l++) {
                        var e = c[l];
                        if (e.Hc === d) return e.od
                    }
                    return a.c
                },
                update: function(c) {
                    this.mb.x = 0;
                    this.mb.y = 0;
                    this.fm || (d.jh() ? this.mb.add(this.Ed) : this.mb.add(e.multiply(d.Ic, this.Mn)));
                    this.mb.multiply(this.gh);
                    var b = c / a.yf * c / a.yf;
                    this.r.x = this.mb.x * b;
                    this.r.y = this.mb.y * b;
                    this.ka.x === a.Ee && this.ka.ba(this.a);
                    this.Eb.x = this.a.x - this.ka.x + this.r.x;
                    this.Eb.y = this.a.y - this.ka.y + this.r.y;
                    if (c > 0) {
                        c = 1 / c;
                        this.Yb.x = this.Eb.x * c;
                        this.Yb.y = this.Eb.y * c
                    }
                    this.ka.ba(this.a);
                    this.a.add(this.Eb)
                },
                Cj: function() {
                    var a = this.Oc,
                        d = this.a,
                        c = this.gh,
                        b, e, o, f;
                    if (a.x !== -1) {
                        d.x = a.x;
                        d.y = a.y
                    } else
                        for (var a =
                                this.Rb, x = a.length, m = 0; m < x; m++) {
                            var w = a[m],
                                q = w.Hc,
                                u = q.a;
                            b = u.x - d.x;
                            e = u.y - d.y;
                            if (b === 0 && e === 0) e = b = 1;
                            var j = Math.sqrt(b * b + e * e),
                                z = w.od,
                                w = w.type;
                            if (w === 1) {
                                if (j <= z) continue
                            } else if (w === 2 && j >= z) continue;
                            w = q.Oc.x === -1;
                            q = q.gh;
                            j = (j - z) / ((j > 1 ? j : 1) * (c + q));
                            if (w) {
                                o = b;
                                f = e
                            }
                            z = c * j;
                            b = b * z;
                            e = e * z;
                            d.x = d.x + b;
                            d.y = d.y + e;
                            if (w) {
                                b = q * j;
                                u.x = u.x - o * b;
                                u.y = u.y - f * b
                            }
                        }
                },
                Jx: function(c) {
                    this.mb.Ly();
                    this.fm || (d.jh() ? this.mb.add(this.Ed) : this.mb.add(e.multiply(d.Ic, this.Mn)));
                    this.mb.multiply(this.gh);
                    var b = c / a.yf * c / a.yf;
                    this.r.x = this.mb.x *
                        b;
                    this.r.y = this.mb.y * b;
                    this.ka.x === a.Ee && this.ka.ba(this.a);
                    this.Eb.x = this.a.x - this.ka.x + this.r.x;
                    this.Eb.y = this.a.y - this.ka.y + this.r.y;
                    if (c > 0) {
                        c = 1 / c;
                        this.Yb.x = this.Eb.x * c;
                        this.Yb.y = this.Eb.y * c
                    }
                    this.ka.ba(this.a);
                    this.a.add(this.Eb)
                },
                Zr: function() {
                    return this.a.x.toFixed(2) + ", " + this.a.y.toFixed(2)
                }
            })
        }(db, fb, S, T, eb),
        hb = function(b) {
            return {
                vr: n,
                Gd: 0,
                Fd: 0,
                cB: p,
                Iw: function(c, e) {
                    this.Gd = c - 1;
                    this.Fd = e - 1;
                    this.vr = b.Ci[this.Gd].rh[this.Fd]
                }
            }
        }(Na),
        ib = function() {
            var b = {},
                c = [];
            b.subscribe = function(b, a) {
                c.push({
                    name: b,
                    Xd: a
                });
                return [b, a]
            };
            b.unsubscribe = function(b) {
                var a, d;
                for (a = c.length; a >= 0; a--) {
                    d = c[a];
                    d.name === b[0] && d.Xd === b[1] && c.splice(a, 1)
                }
            };
            b.Ub = function(b, a) {
                var d = [],
                    f, h;
                if (c.length > 0) {
                    f = 0;
                    for (h = c.length; f < h; f++) c[f].name === b && d.push(c[f].Xd);
                    f = 0;
                    for (h = d.length; f < h; f++) d[f].apply(this, [a])
                }
            };
            b.ia = {
                cp: 0,
                fu: 1,
                gp: 2,
                ro: 3,
                Fu: 4,
                ho: 5,
                io: 6,
                yt: 7,
                jo: 8,
                ko: 9,
                lo: 10,
                mo: 11,
                lc: 12,
                Qp: 13
            };
            return b
        }(),
        jb = function(b, c, e, a, d) {
            function f(a, d, c, j) {
                this.Sb = a;
                this.$f = d;
                this.dg = c || [];
                this.lb = j || []
            }

            function h(d, c) {
                var b = a.Vi(t + (c *
                    1E3 + d ^ m), n);
                if (b == n) return n;
                b = (b ^ m) - c - d * 1E3;
                return b === -1 ? n : b
            }

            function g(d, c, b) {
                b == n && (b = -1);
                a.set(t + (c * 1E3 + d ^ m), b + d * 1E3 + c ^ m)
            }

            function k(d, c) {
                var b = a.Vi(s(d, c), n);
                return b == n ? 0 : (b ^ m) - d - c * 1E3
            }

            function l(d, c, b) {
                a.set(s(d, c), b + c * 1E3 + d ^ m)
            }

            function s(a, d) {
                var c = o + (a * 1E3 + d ^ m);
                return c === x ? c + "_" : c
            }
            var o = String.fromCharCode(98, 112),
                t = String.fromCharCode(98, 115),
                x = o + String.fromCharCode(50, 51, 57, 48),
                m = a.Vi(x, n);
            if (m == n) {
                m = e.gb(1E3, 1E4);
                a.set(x, m)
            }
            return new function() {
                var e = this,
                    o = [];
                this.ss = function(a) {
                    var j =
                        o[a],
                        d;
                    for (d = 0; d < j.Sb; d++) {
                        l(a, d, j.dg[d]);
                        g(a, d, j.lb[d])
                    }
                };
                this.Lw = function(c, j, t) {
                    var m;
                    m = a.get(s(c, 0)) != n;
                    var x = d.Ci[c].rh.length,
                        I = d.jt[c],
                        B = [],
                        K = [],
                        V;
                    for (V = 0; V < x; V++) {
                        if (!m) {
                            var M = c,
                                H = V;
                            g(M, H, H === 0 ? 0 : n);
                            l(M, H, 0)
                        }
                        B.push(k(c, V));
                        K.push(h(c, V))
                    }
                    m = new f(x, I, B, K);
                    m != n && m.Sb == j && m.$f == t ? o[c] = m : e.Pl(c, j, t);
                    if (b.jA == c + 1) {
                        for (t = 0; t < j; t++) e.Jh(c, t, 3, i);
                        e.ss(c)
                    }
                    window.Ci = o
                };
                this.Pl = function(a, j, d) {
                    for (var d = new f(j, d), c = 0; c < j; c++) d.dg.push(0);
                    for (c = 0; c < j; c++) d.lb.push(n);
                    d.lb[0] = 0;
                    o[a] = d;
                    saveBox(a);
                    return d
                };
                this.Ai = function() {
                    return o != n ? o.length : n
                };
                this.Sb = function(a) {
                    a = o[a];
                    return a != n ? a.Sb : n
                };
                this.$f = function(a) {
                    a = o[a];
                    return a != n ? a.$f : 0
                };
                this.Nl = function(a) {
                    a = o[a];
                    if (a != n) {
                        for (var j = 0, d = 0; d < a.Sb; d++) var c = a.lb[d],
                            j = j + (c == n ? 0 : c);
                        return j
                    }
                    return 0
                };
                this.nf = function() {
                    for (var a = 0, j = 0; j < o.length; j++) a = a + e.Nl(j);
                    return a
                };
                this.$r = function(a) {
                    a = o[a];
                    if (a != n) return a.Sb * 3
                };
                this.hh = function(a) {
                    return a == 0 || b.pz ? p : o[a] != n && e.nf() >= e.$f(a) ? p : i
                };
                this.uw = function(a, j) {
                    var d = o[a];
                    return b.pz ? i : d != n ? d.lb[j] !=
                        n : p
                };
                this.Gy = function(a, j, d) {
                    a = o[a];
                    a != n && (a.dg[j] = Math.max(d, a.dg[j]))
                };
                this.cw = function(a, j) {
                    var d = o[a];
                    return d != n ? d.dg[j] : n
                };
                this.Jh = function(a, j, d, b) {
                    var l = this.nf(),
                        a = o[a];
                    if (a != n) {
                        var e = a.lb[j];
                        a.lb[j] = e != n && !b ? Math.max(d, e) : d
                    }
                    j = this.nf();
                    j !== l && c.subscribe(c.ia.Fu, j)
                };
                this.ew = function(a, j) {
                    var d = o[a];
                    return d != n ? d.lb[j] : n
                };
                this.Tx = function() {
                    var a = o.length,
                        j, d, c, b;
                    for (j = 0; j < a; j++) {
                        d = o[j];
                        b = d.Sb;
                        for (c = 0; c < b; c++) {
                            var e = j,
                                f = c;
                            g(e, f, f === 0 ? 0 : n);
                            l(e, f, 0);
                            d.lb[c] = h(j, c);
                            d.dg[c] = k(j, c)
                        }
                    }
                }
            }
        }(Xa, ib,
            Sa, Ta, Na),
        kb = function(b, c, e) {
            var a = b.extend({
                init: function(d) {
                    this.Le = a.U.vg;
                    this.ud = [];
                    this.children = [];
                    this.$m = this.yd = this.nb = c.c;
                    this.parent = d;
                    this.ph = c.c;
                    this.Wg = this.nm = this.Cg = this.frames = this.em = 0;
                    this.Ec = 1 / 60;
                    this.oj = [this.Ec, this.Ec, this.Ec, this.Ec, this.Ec]
                },
                $c: function() {
                    this.Le = a.U.Qn;
                    e.Ub(e.ia.ho, this)
                },
                fd: function() {
                    e.Ub(e.ia.io, this)
                },
                Pq: function() {
                    this.Le = a.U.vg;
                    this.nb !== c.c && this.xm();
                    e.Ub(e.ia.Fz, this);
                    this.parent.Gr(this.parent.yd)
                },
                pause: function() {
                    this.Le = a.U.xg;
                    e.Ub(e.ia.jo,
                        this);
                    if (this.nb != c.c) {
                        this.$m = this.nb;
                        this.xm()
                    }
                },
                kt: function() {
                    this.Le = a.U.Qn;
                    if (this.yd !== c.c) this.yd = c.c;
                    e.Ub(e.ia.ko, this);
                    this.$m !== c.c && this.Is(this.$m)
                },
                update: function() {
                    if (this.nb !== c.c)
                        for (var a = this.Ol(), b = Math.min(3, Math.floor(this.Wg)), e = 0; e < b; e++) {
                            a.update(0.016);
                            this.Wg = this.Wg - 1
                        }
                },
                Ux: function() {
                    this.ph = c.c
                },
                Gq: function(a) {
                    this.em = this.ph !== c.c ? (a - this.ph) / 1E3 : 0;
                    this.ph = a;
                    this.Wg = this.Wg + this.Kq(this.em) / 0.016
                },
                Kq: function(a) {
                    return a < 0.016 ? 0.016 : a > 0.05 ? 0.05 : a
                },
                iv: function() {
                    this.frames++;
                    this.Cg = this.Cg + this.em;
                    if (this.Cg > 1) {
                        this.nm = this.frames / this.Cg;
                        this.Cg = this.frames = 0;
                        this.oj.shift();
                        this.oj.push(this.Kq(1 / this.nm));
                        for (var a = this.Ec = 0, c = this.oj.length; a < c; a++) this.Ec = this.Ec + this.oj[a];
                        this.Ec = this.Ec / c
                    }
                },
                Wu: function(a, c) {
                    this.ud[c] = a
                },
                tv: function(a) {
                    this.ud[a] = n
                },
                xm: function() {
                    var a = this.ud[this.nb];
                    e.Ub(e.ia.lo, a);
                    a.hide();
                    this.nb = c.c
                },
                Is: function(a) {
                    this.nb != c.c && this.xm();
                    this.nb = a;
                    a = this.ud[a];
                    e.Ub(e.ia.mo, a);
                    a.show()
                },
                Ol: function() {
                    return this.ud[this.nb]
                },
                Qe: function(a) {
                    return this.ud[a]
                },
                Ud: function(a, c) {
                    this.children[c] = a
                },
                sv: function(a) {
                    this.children[a] = n
                },
                Oq: function() {
                    if (this.yd !== c.c) {
                        this.children[this.yd].fd();
                        this.yd = c.c
                    }
                },
                Qu: function(a) {
                    this.yd !== c.c && this.Oq();
                    this.pause();
                    this.yd = a;
                    this.children[a].$c()
                },
                Gr: function() {
                    this.kt()
                },
                cA: function() {
                    return this.children[this.yd]
                },
                fb: function(a) {
                    return this.children[a]
                },
                ij: function(a, b) {
                    return this.nb === c.c ? p : this.ud[this.nb].kj(a, b)
                },
                Uf: function(a, b) {
                    return this.nb === c.c ? p : this.ud[this.nb].lj(a, b)
                },
                Br: function(a, b) {
                    return this.nb ===
                        c.c ? p : this.ud[this.nb].Vm(a, b)
                },
                Cr: ha(p),
                Pg: function(a, b) {
                    return this.nb === c.c ? p : this.ud[this.nb].Hr(a, b)
                }
            });
            a.U = {
                vg: 0,
                Qn: 1,
                xg: 2
            };
            return a
        }(sa, T, ib),
        lb = function() {
            var b = {
                uo: 0,
                jk: 1,
                fk: 2,
                Zk: 3,
                eo: 4,
                cr: function(c) {
                    switch (c) {
                        case "de":
                            return b.fk;
                        case "fr":
                            return b.jk;
                        case "ru":
                            return b.Zk;
                        default:
                            return b.uo
                    }
                },
                fz: function(c) {
                    switch (c) {
                        case b.fk:
                            return "de";
                        case b.jk:
                            return "fr";
                        case b.Zk:
                            return "ru";
                        default:
                            return "en"
                    }
                }
            };
            return b
        }(),
        W = {
            mu: 0,
            Rd: 1,
            Hz: 2,
            Zz: 3,
            Iz: 4,
            ou: 5,
            Mz: 6,
            Bz: 7,
            fo: 8,
            iu: 9,
            hu: 10,
            uu: 11,
            tu: 12,
            pp: 13,
            au: 14,
            bu: 15,
            cu: 16,
            du: 17,
            $t: 18,
            Hu: 19,
            wu: 20,
            At: 21,
            Ez: 22,
            Yz: 23,
            Ku: 24,
            ju: 25,
            Ib: 26,
            NEXT: 27,
            nc: 28,
            LOADING: 29,
            Iu: 30,
            ku: 31,
            aA: 32,
            $n: 33,
            ao: 34,
            bo: 35,
            zo: 36,
            Lz: 37,
            Cz: 38,
            xt: 39,
            ru: 40,
            eu: 41,
            gu: 42,
            ap: 43,
            fp: 44,
            sp: 45,
            tp: 46,
            up: 47,
            wo: 48,
            po: 49,
            co: 50,
            vp: 51,
            xo: 52,
            xp: 53,
            yp: 54,
            wp: 55,
            $o: 56,
            op: 57,
            np: 58,
            mp: 59,
            vo: 60,
            Ap: 61,
            zp: 62
        },
        rb = [{
            id: 0,
            t: "Play",
            u: "Jouer",
            s: "Spielen",
            v: "\u0418\u0433\u0440\u0430\u0442\u044c"
        }, {
            id: 1,
            t: "Options",
            u: "Options",
            s: "Optionen",
            v: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"
        }, {
            id: 2,
            t: "Extras",
            u: "",
            s: "Extras",
            v: "\u0415\u0449\u0435 \u043a\u043e\u0435 \u0447\u0442\u043e"
        }, {
            id: 3,
            t: "Bonus mode",
            u: "",
            s: "Bonusmodus",
            v: "\u0411\u043e\u043d\u0443\u0441 \u0440\u0435\u0436\u0438\u043c"
        }, {
            id: 4,
            t: "Full version",
            u: "Version compl\u00e8te",
            s: "Vollversion",
            v: "\u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f"
        }, {
            id: 5,
            t: "Reset game",
            u: "R\u00e9initialiser",
            s: "Neu starten",
            v: "\u0421\u0431\u0440\u043e\u0441 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430"
        }, {
            id: 6,
            t: "Help",
            u: "",
            s: "Hilfe",
            v: "\u041f\u043e\u043c\u043e\u0449\u044c"
        }, {
            id: 7,
            t: "About",
            u: "",
            s: "\u00dcber",
            v: "\u041e\u0431 \u0438\u0433\u0440\u0435"
        }, {
            id: 8,
            t: "Credits",
            u: "Cr\u00e9dits",
            s: "Mitwirkende",
            v: "\u0410\u0432\u0442\u043e\u0440\u044b"
        }, {
            id: 9,
            t: "Music on",
            u: "Musique oui",
            s: "Musik an",
            v: "\u041c\u0443\u0437\u044b\u043a\u0430 \u0432\u043a\u043b."
        }, {
            id: 10,
            t: "Music off",
            u: "Musique non",
            s: "Musik aus ",
            v: "\u041c\u0443\u0437\u044b\u043a\u0430 \u0432\u044b\u043a\u043b."
        }, {
            id: 11,
            t: "Sounds on",
            u: "Sons oui",
            s: "Ger\u00e4usche an",
            v: "\u0417\u0432\u0443\u043a\u0438 \u0432\u043a\u043b."
        }, {
            id: 12,
            t: "Sounds off",
            u: "Sons non",
            s: "Ger\u00e4usche aus",
            v: "\u0417\u0432\u0443\u043a\u0438 \u0432\u044b\u043a\u043b."
        }, {
            id: W.pp,
            t: "Are you sure you want to reset your progress?",
            u: "Voulez-vous vraiment r\u00e9initialiser votre progression?",
            s: "M\u00f6chtest du deinen Fortschritt wirklich zur\u00fccksetzen?",
            v: "\u0423\u0432\u0435\u0440\u0435\u043d\u044b \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u0432\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441?"
        }, {
            id: 14,
            t: "Passable!",
            u: "Passable!",
            s: "Passabel!",
            v: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u0439\u0434\u0435\u043d!"
        }, {
            id: 15,
            t: "Good!",
            u: "Bien!",
            s: "Gut!",
            v: "\u0425\u043e\u0440\u043e\u0448\u043e!"
        }, {
            id: 16,
            t: "Great!",
            u: "Super!",
            s: "Prima!",
            v: "\u041e\u0442\u043b\u0438\u0447\u043d\u043e!"
        }, {
            id: 17,
            t: "Excellent!",
            u: "Formidable!",
            s: "Hervorragend!",
            v: "\u0421\u0443\u043f\u0435\u0440!"
        }, {
            id: 18,
            t: "Level",
            u: "Niveau",
            s: "Level",
            v: "\u0423\u0440\u043e\u0432\u0435\u043d\u044c"
        }, {
            id: 19,
            t: "Time",
            u: "Temps",
            s: "Zeit",
            v: "\u0412\u0440\u0435\u043c\u044f"
        }, {
            id: 20,
            t: "Star Bonus",
            u: "Bonus \u00e9toile",
            s: "Sternenbonus",
            v: "\u0411\u043e\u043d\u0443\u0441 \u0437\u0430 \u0437\u0432\u0435\u0437\u0434\u044b"
        }, {
            id: 21,
            t: "Your Final Score",
            u: "Votre score final",
            s: "Dein Endpunktestand",
            v: "\u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0435 \u043e\u0447\u043a\u0438"
        }, {
            id: 22,
            t: "Best Score",
            u: "Meilleur score",
            s: "Beste punktzahl",
            v: "\u041b\u0443\u0447\u0448\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"
        }, {
            id: 23,
            t: "Score",
            u: "Score",
            s: "Punktzahl",
            v: "\u041e\u0447\u043a\u0438"
        }, {
            id: 24,
            t: "Yes",
            u: "Oui",
            s: "Ja",
            v: "\u0414\u0430"
        }, {
            id: 25,
            t: "No",
            u: "Non",
            s: "Nein",
            v: "\u041d\u0435\u0442"
        }, {
            id: 26,
            t: "Replay",
            u: "Rejouer",
            s: "Wieder",
            v: "\u0415\u0449\u0435 \u0440\u0430\u0437"
        }, {
            id: 27,
            t: "Next",
            u: "Suivant",
            s: "Weiter",
            v: "\u0412\u043f\u0435\u0440\u0435\u0434"
        }, {
            id: 28,
            t: "Menu",
            u: "Menu",
            s: "Men\u00fc",
            v: "\u041c\u0435\u043d\u044e"
        }, {
            id: 29,
            t: "Loading...",
            u: "Chargement...",
            s: "Laden...",
            v: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."
        }, {
            id: 30,
            t: "Total: %d",
            u: "Total: %d",
            s: "Gesamt: %d",
            v: "\u0412\u0441\u0435\u0433\u043e: %d"
        }, {
            id: 31,
            t: "Ok",
            u: "OK",
            s: "Ok",
            v: "Ok"
        }, {
            id: 32,
            t: "Collect %d stars to unlock this level pack",
            u: "Recueillez %d \u00e9toiles pour d\u00e9verrouiller ce pack de niveaux",
            s: "Sammle %d Sterne, um dieses Levelpaket freizuschalten",
            v: "\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 %d \u0437\u0432\u0435\u0437\u0434 \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443"
        }, {
            id: W.$n,
            t: "You are missing",
            u: "Il vous en manque",
            s: "Dir fehlen",
            v: "\u0412\u0430\u043c \u043d\u0435\u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0432\u0441\u0435\u0433\u043e"
        }, {
            id: W.ao,
            t: "to unlock this box",
            u: "pour d\u00e9verrouiller bo\u00eete",
            s: "um dieses Box freizuschalten",
            v: "\u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0431\u043a\u0443"
        }, {
            id: W.bo,
            t: "Get more stars from the earlier levels",
            u: "Recueillez plus d'\u00e9toiles dans les niveaux pr\u00e9c\u00e9dents",
            s: "Gewinne mehr Sterne in den niedrigeren Leveln",
            v: "\u0421\u043e\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0437\u0432\u0435\u0437\u0434 \u0432 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u044f\u0445"
        }, {
            id: 37,
            t: "Check back for the new levels coming with the updates",
            u: "Revenez pour d\u00e9couvrir de nouveaux niveaux avec les mises \u00e0 jour",
            s: "Komm bald wieder, neue Level kommen mit den Updates",
            v: "\u041d\u043e\u0432\u044b\u0435 \u0443\u0440\u043e\u0432\u043d\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0441 \u0430\u043f\u0434\u0435\u0439\u0442\u0430\u043c\u0438"
        }, {
            id: 38,
            t: "achievement gained!",
            u: "r\u00e9alisation d\u00e9verrouill\u00e9e!",
            s: "Erfolg geschafft!",
            v: "\u043e\u0442\u043a\u0440\u044b\u0442\u043e!"
        }, {
            id: 39,
            t: "Continue",
            u: "Continuer",
            s: "Weiter",
            v: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"
        }, {
            id: 40,
            t: "Skip level",
            u: "Passer",
            s: "\u00dcberspringen",
            v: "\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"
        }, {
            id: 41,
            t: "Level select",
            u: "Choisir niveau",
            s: "Levelauswahl",
            v: "\u0412\u044b\u0431\u043e\u0440 \u0443\u0440\u043e\u0432\u043d\u044f"
        }, {
            id: 42,
            t: "Main menu",
            u: "Menu principal",
            s: "Hauptmen\u00fc",
            v: "\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"
        }, {
            id: W.$o,
            t: "Language:",
            v: "\u042f\u0437\u044b\u043a:",
            u: "Langue :",
            s: "Sprache:"
        }, {
            id: W.po,
            t: "Drag to Cut",
            u: "Glisser",
            s: "Ziehe: Schneide",
            v: "\u041f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u0435\u043c"
        }, {
            id: W.co,
            t: "Click to Cut",
            u: "Cliquer",
            s: "Klicke: Schneide",
            v: "\u0429\u0435\u043b\u0447\u043a\u043e\u043c"
        }, {
            id: W.ap,
            t: "Let's Play",
            u: "C'est parti",
            s: "Lass uns spielen",
            v: "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0438\u0433\u0440\u0430\u0435\u043c"
        }, {
            id: W.fp,
            t: "More Cut the Rope fun!",
            u: "Toujours plus de Cut the Rope !",
            s: "Mehr Cut the Rope Spa\u00df!",
            v: "\u0415\u0449\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0435\u0441\u0435\u043b\u044c\u044f \u0432 \u0438\u0433\u0440\u0435 Cut the Rope!"
        }, {
            id: W.up,
            t: "Share...",
            u: "Partager...",
            s: "Teilen...",
            v: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f..."
        }, {
            id: W.sp,
            t: "Share",
            u: "Partager",
            s: "Teilen",
            v: "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"
        }, {
            id: W.zo,
            t: "You completed the game with %d stars!",
            u: "Tu as termin\u00e9 le jeu avec %d \u00e9toiles !",
            s: "Du hast das Spiel mit %d Sternen beendet!",
            v: "\u0412\u044b \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u0438\u0433\u0440\u0443 \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0437\u0432\u0435\u0437\u0434: %d!"
        }, {
            id: W.tp,
            t: "I just found one of Om Nom's secret drawings!",
            u: "Je viens juste de trouver un des dessins secrets de Om Nom !",
            s: "Ich habe gerade eine geheime Om-Nom-Zeichnung entdeckt!",
            v: "\u041c\u043d\u043e\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0431\u044b\u043b \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d \u043e\u0434\u0438\u043d \u0438\u0437 \u0442\u0430\u0439\u043d\u044b\u0445 \u0440\u0438\u0441\u0443\u043d\u043a\u043e\u0432 \u0410\u043c \u041d\u044f\u043c\u0430!"
        }, {
            id: W.wo,
            t: "You found a drawing!",
            u: "Tu as trouv\u00e9 un dessin !",
            s: "Du hast die Zeichnung gefunden!",
            v: "\u0412\u044b \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b\u0438 \u0440\u0438\u0441\u0443\u043d\u043e\u043a!"
        }, {
            id: W.vp,
            t: "Show Me",
            u: "Montre-moi",
            s: "Zeig es mir",
            v: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043c\u043d\u0435"
        }, {
            id: W.xo,
            t: "Free Download",
            u: "T\u00e9l\u00e9chargement gratuit",
            s: "Kostenloser Download",
            v: "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"
        }, {
            id: W.xp,
            t: "Cut the Rope is a fun game where you feed candy to the curiously cute green monster Om-nom.",
            u: "Cut the Rope est un jeu amusant dans lequel tu dois nourrir Om Nom, un curieux petit monstre.",
            s: "Cut the Rope ist ein lustiges Spiel, wobei du dem kuriosem, niedlichem Monster Om-nom S\u00fc\u00dfigkeiten f\u00fctterst.",
            v: "Cut the Rope   \u044d\u0442\u043e \u0432\u0435\u0441\u0435\u043b\u0430\u044f \u0438\u0433\u0440\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b \u043a\u043e\u0440\u043c\u0438\u0442\u0435 \u0441\u043b\u0430\u0434\u043e\u0441\u0442\u044f\u043c\u0438 \u043b\u044e\u0431\u043e\u043f\u044b\u0442\u043d\u043e\u0433\u043e \u0438 \u043c\u0438\u043b\u043e\u0433\u043e \u043c\u043e\u043d\u0441\u0442\u0440\u0430 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0410\u043c \u041d\u044f\u043c."
        }, {
            id: W.yp,
            t: "Om Nom is Om Line - Cut the Rope for the Web",
            u: "Om Nom est om ligne - Cut the Rope version web",
            s: "Om Nom ist Om Line - Cut the Rope f\u00fcr das Internet",
            v: "\u0410\u043c \u041d\u044f\u043c \u0432 \u0410\u043c \u041b\u0430\u0439\u043d\u0435 \u2013 \u0432\u0435\u0431-\u0432\u0435\u0440\u0441\u0438\u044f \u0438\u0433\u0440\u044b Cut the Rope"
        }, {
            id: W.wp,
            t: 'Play the HTML5 version of "Cut the Rope"!',
            u: "Joue \u00e0 Cut the Rope dans sa version HTML5 !",
            s: 'Spiele die HTML5 Version von "Cut the Rope"!',
            v: "\u0418\u0433\u0440\u0430\u0439\u0442\u0435 \u0432 HTML5-\u0432\u0435\u0440\u0441\u0438\u044e \u0438\u0433\u0440\u044b Cut the Rope!"
        }, {
            id: W.op,
            t: 'Hold the "yes" button for 3 seconds to reset.',
            u: 'Maintenir le doigt sur "Oui" pendant 3 secondes pour r\u00e9initialiser.',
            s: 'Halte zum Neustarten 3 Sekunden lang "Ja" gedr\u00fcckt.',
            v: '\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 "\u0414\u0430" \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 3 \u0441\u0435\u043a\u0443\u043d\u0434 \u0434\u043b\u044f \u0441\u0431\u0440\u043e\u0441\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430.'
        }, {
            id: W.vo,
            t: "everything off",
            u: "tout couper",
            s: "alles aus",
            v: "\u0432\u0441\u0435 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e"
        }, {
            id: W.np,
            t: "reload the game in SD",
            u: "recharger le jeu en SD",
            s: "Spiel in SD neu laden",
            v: "\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443 \u0432 SD"
        }, {
            id: W.mp,
            t: "reload the game in HD",
            u: "recharger le jeu en HD",
            s: "Spiel in HD neu laden",
            v: "\u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0438\u0433\u0440\u0443 \u0432 HD"
        }, {
            id: W.Ap,
            t: "A Little Too Slow...",
            u: "Un peu trop lent",
            s: "Etwas zu langsam...",
            v: "\u041a\u0430\u043a-\u0442\u043e \u043d\u0435 \u043e\u0447\u0435\u043d\u044c \u0431\u044b\u0441\u0442\u0440\u043e..."
        }, {
            id: W.zp,
            t: "Om Nom is sad because your computer is running slow. We'll do our best, but there may be some slow-downs.",
            u: "Om Nom est triste. Votre ordinateur est tr\u00e8s lent. Nous ferons notre mieux, mais il est possible que le jeu ralentisse.",
            s: "Om Nom ist traurig, weil dein Computer so langsam ist. Wir geben unser Bestes, aber es kann trotzdem zu Verz\u00f6gerungen kommen.",
            v: '\u0410\u043c \u041d\u044f\u043c \u043e\u043f\u0435\u0447\u0430\u043b\u0435\u043d: \u0443 \u0432\u0430\u0441 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440. \u041c\u044b, \u043a\u043e\u043d\u0435\u0447\u043d\u043e, \u043f\u043e\u0441\u0442\u0430\u0440\u0430\u0435\u043c\u0441\u044f, \u043d\u043e \u0438\u0433\u0440\u0430 \u0443 \u0432\u0430\u0441 \u043c\u043e\u0436\u0435\u0442 "\u043f\u0440\u0438\u0442\u043e\u0440\u043c\u0430\u0436\u0438\u0432\u0430\u0442\u044c".'
        }],
        sb = function(b) {
            return {
                Za: function(c) {
                    this.Lh(document.getElementById(c))
                },
                Lh: function(c) {
                    this.element = this.id = c;
                    this.context = this.element.getContext("2d");
                    this.Iy(b.ut)
                },
                Iy: function(c) {
                    c = c.Hh();
                    this.context.fillStyle = c;
                    this.context.strokeStyle = c
                },
                Jy: function(c) {
                    this.context.fillStyle = c;
                    this.context.strokeStyle = c
                },
                Mv: function(c, b) {
                    var a = this.context,
                        d = c[0];
                    a.fillStyle = b;
                    a.beginPath();
                    a.moveTo(d.x, d.y);
                    for (var f = 1, h = c.length; f < h; f = f + 2) {
                        d = c[f];
                        a.lineTo(d.x, d.y)
                    }
                    for (f = c.length - 2; f >= 0; f = f - 2) {
                        d = c[f];
                        a.lineTo(d.x,
                            d.y)
                    }
                    a.fill()
                }
            }
        }(ta),
        tb = function(b, c, e, a, d, f, h, g) {
            return b.extend({
                init: function() {
                    this.parent = n;
                    this.Uh = this.Xb = this.J = i;
                    this.name = n;
                    this.cg = this.Kd = this.rotation = this.height = this.width = this.da = this.ca = this.y = this.x = 0;
                    this.aa = this.Q = 1;
                    this.color = c.kb.copy();
                    this.ht = this.gt = 0;
                    this.anchor = e.Qb | e.rb;
                    this.ma = e.c;
                    this.xh = this.oe = i;
                    this.nj = p;
                    this.children = [];
                    this.we = [];
                    this.Gf = a.c;
                    this.Ab = n
                },
                Jg: function() {
                    var a = this.ma,
                        d = this.parent,
                        c = this.anchor;
                    if (a !== e.c) {
                        if (a & e.rb) this.ca = d.ca + this.x;
                        else if (a & e.Dc) this.ca =
                            d.ca + this.x + d.width / 2;
                        else if (a & e.xf) this.ca = d.ca + this.x + d.width;
                        if (a & e.Qb) this.da = d.da + this.y;
                        else if (a & e.zf) this.da = d.da + this.y + d.height / 2;
                        else if (a & e.rf) this.da = d.da + this.y + d.height
                    } else {
                        this.ca = this.x;
                        this.da = this.y
                    }
                    if (!(c & e.Qb))
                        if (c & e.zf) this.da = this.da - this.height / 2;
                        else if (c & e.rf) this.da = this.da - this.height;
                    if (!(c & e.rb))
                        if (c & e.Dc) this.ca = this.ca - this.width / 2;
                        else if (c & e.xf) this.ca = this.ca - this.width
                },
                yc: function() {
                    this.Jg();
                    var a = this.Q !== 0 && this.aa !== 0 && (this.Q !== 1 || this.aa !== 1),
                        c = this.rotation !==
                        0,
                        b = this.gt !== 0 || this.ht !== 0,
                        e = d.context;
                    e.save();
                    if (a || c) {
                        var f = this.ca + this.width / 2 + this.Kd,
                            h = this.da + this.height / 2 + this.cg,
                            m = f !== 0 || h !== 0;
                        m && e.translate(f, h);
                        c && e.rotate(g.dc(this.rotation));
                        a && e.scale(this.Q, this.aa);
                        m && e.translate(-f, -h)
                    }
                    b && e.translate(this.gt, this.ht);
                    this.bs = e.globalAlpha;
                    if (this.color.r !== 1) e.globalAlpha = this.color.r
                },
                p: function() {
                    this.yc();
                    this.xc()
                },
                Rg: function() {
                    var a = d.context;
                    a.strokeStyle = "red";
                    a.strokeRect(this.ca, this.da, this.width, this.height)
                },
                xc: function() {
                    var a =
                        d.context;
                    this.rw && this.Rg();
                    if (this.nA) {
                        var c = this.ca + (this.width >> 1) + this.Kd,
                            b = this.da + (this.height >> 1) + this.cg;
                        a.save();
                        a.lineWidth = 5;
                        a.strokeStyle = "#ff0000";
                        a.beginPath();
                        a.moveTo(c, b);
                        a.lineTo(c, b - 100);
                        a.closePath();
                        a.stroke();
                        a.restore()
                    }
                    if (this.oe) {
                        if (!this.xh && this.color.r !== 1) d.context.globalAlpha = this.bs
                    } else {
                        a.restore();
                        if (this.xh && this.color.r !== 1) d.context.globalAlpha = this.color.r
                    }
                    for (var c = this.children, b = c.length, e = 0; e < b; e++) {
                        var f = c[e];
                        f.J && f.p()
                    }
                    if (this.oe) a.restore();
                    else if (this.xh &&
                        this.color.r !== 1) d.context.globalAlpha = this.bs
                },
                update: function(a) {
                    for (var d = this.children, c = d.length, b = 0; b < c; b++) {
                        var e = d[b];
                        e.Uh && e.update(a)
                    }
                    this.Ab && this.Ab.update(a)
                },
                Wv: function(a) {
                    for (var d = this.children, c = d.length, b = 0; b < c; b++) {
                        var e = d[b];
                        if (e.name === a) return e;
                        e = e.Wv(a);
                        if (e !== n) return e
                    }
                    return n
                },
                aB: function() {
                    this.Jg();
                    for (var a = this.ca, d = this.da, c = this.ca + this.width, b = this.da + this.height, e = this.children, f = e.length, h = 0; h < f; h++) {
                        var g = e[h];
                        g.Jg();
                        if (g.ca < a) a = g.ca;
                        if (g.da < d) d = g.da;
                        var q = g.ca +
                            g.width,
                            g = g.da + g.height;
                        q > c && (c = q);
                        g > b && (b = g)
                    }
                    this.width = c - a;
                    this.height = b - d
                },
                jr: function(a) {
                    switch (a.kq) {
                        case f.rp:
                            this.J = a.Dg !== 0;
                            break;
                        case f.qu:
                            this.Uh = a.Dg !== 0;
                            break;
                        case f.pu:
                            this.Xb = a.Dg !== 0;
                            break;
                        case f.kp:
                            this.P(a.Dg);
                            break;
                        case f.hp:
                            this.Dx();
                            break;
                        case f.xu:
                            this.Ts();
                            break;
                        case f.Zt:
                            this.Ab.pr(a.lq, a.Dg);
                            break;
                        default:
                            return p
                    }
                    return i
                },
                N: function(a) {
                    this.children.push(a);
                    a.parent = this;
                    return this.children.length - 1
                },
                Ud: function(a, d) {
                    this.children[d] = a;
                    a.parent = this
                },
                uj: function(a) {
                    this.children.splice(a,
                        1).parent = n
                },
                ks: function() {
                    this.children = []
                },
                removeChild: function(a) {
                    for (var d = this.children, c = d.length, b = 0; b < c; b++)
                        if (a === d[b]) {
                            this.uj(b);
                            break
                        }
                },
                fb: function(a) {
                    return this.children[a]
                },
                hA: function() {
                    return this.children.length
                },
                qA: ga("children"),
                uq: function(a) {
                    var d = this.we.length;
                    this.Jb(a, d);
                    return d
                },
                Jb: function(a, d) {
                    a.element = this;
                    this.we[d] = a
                },
                Rx: function(a) {
                    this.Gf === a && this.Ts();
                    a < this.we.length && this.we.splice(a, 1)
                },
                P: function(a) {
                    this.Ab && this.Ab.state !== h.U.Bg && this.Ab.stop();
                    this.Gf =
                        a;
                    this.Ab = this.we[a];
                    this.Ab.play()
                },
                Dx: function() {
                    this.Ab.pause()
                },
                Ts: function() {
                    this.Ab.stop();
                    this.Ab = n;
                    this.Gf = a.c
                },
                Kc: function(a) {
                    return this.we[a]
                },
                kj: function(a, d) {
                    for (var c = p, b = this.children.length - 1; b >= 0; b--) {
                        var e = this.children[b];
                        if (e && e.Xb && e.kj(a, d) && c === p) {
                            c = i;
                            if (!this.nj) break
                        }
                    }
                    return c
                },
                lj: function(a, d) {
                    for (var c = p, b = this.children.length - 1; b >= 0; b--) {
                        var e = this.children[b];
                        if (e && e.Xb && e.lj(a, d) && c === p) {
                            c = i;
                            if (!this.nj) break
                        }
                    }
                    return c
                },
                Vm: function(a, d) {
                    for (var c = p, b = this.children.length -
                            1; b >= 0; b--) {
                        var e = this.children[b];
                        if (e && e.Xb && e.Vm(a, d) && c === p) {
                            c = i;
                            if (!this.nj) break
                        }
                    }
                    return c
                },
                Hr: function(a, d) {
                    for (var c = p, b = this.children.length - 1; b >= 0; b--) {
                        var e = this.children[b];
                        if (e && e.Xb && e.Hr(a, d) && c === p) {
                            c = i;
                            if (!this.nj) break
                        }
                    }
                    return c
                },
                Ih: function(a) {
                    this.Uh = this.Xb = this.J = a
                },
                isRequired: function() {
                    return this.J && this.Xb && this.Uh
                },
                show: function() {
                    for (var a = this.children, d = a.length, c = 0; c < d; c++) {
                        var b = a[c];
                        b.J && b.show()
                    }
                },
                hide: function() {
                    for (var a = this.children, d = a.length, c = 0; c < d; c++) {
                        var b =
                            a[c];
                        b.J && b.hide()
                    }
                }
            })
        }(sa, ta, ua, T, sb, Ba, Fa, za),
        ub = function(b, c, e, a, d, f, h, g) {
            var k = b.extend({
                init: function() {
                    this.h()
                },
                ie: function(a) {
                    this.C = a;
                    this.xj = p;
                    this.C.d.length > 0 ? this.$a(0) : this.oy()
                },
                Dd: function(a) {
                    var d = e[a].C;
                    d || g.debug("Image not loaded: " + e[a].path);
                    return d
                },
                na: function(a) {
                    this.ie(this.Dd(a))
                },
                $a: function(a) {
                    this.ff = a;
                    if (!this.xj) {
                        a = this.C.d[a];
                        this.width = a.B;
                        this.height = a.M
                    }
                },
                oy: function() {
                    this.ff = d.c;
                    this.width = this.C.bh;
                    this.height = this.C.ah
                },
                ta: function() {
                    if (this.C.qe.x !== f.oz.x) {
                        this.xj =
                            i;
                        this.width = this.C.qe.x;
                        this.height = this.C.qe.y
                    }
                },
                p: function() {
                    this.yc();
                    if (this.color.r !== 0)
                        if (this.ff === d.c) {
                            var c = Math.round(this.ca),
                                b = Math.round(this.da);
                            a.context.drawImage(this.C.Mc, c, b)
                        } else this.Dv(this.ff);
                    this.xc()
                },
                Dv: function(d) {
                    var c = this.C.d[d],
                        b = c.B,
                        e = c.M,
                        f = this.ca,
                        k = this.da;
                    if (this.xj)
                        if (d = this.C.g[d]) {
                            f = f + d.x;
                            k = k + d.y;
                            b = b + this.C.Vd;
                            e = e + this.C.Bf
                        }
                    if (this.Ii) {
                        b = Math.round(b / this.Ii) * this.Ii;
                        e = Math.round(e / this.Ii) * this.Ii
                    } else {
                        b = Math.ceil(b);
                        e = Math.ceil(e)
                    }
                    if (this.Fa) {
                        f = Math.round(f /
                            this.Fa) * this.Fa;
                        k = Math.round(k / this.Fa) * this.Fa
                    } else {
                        f = Math.round(f);
                        k = Math.round(k)
                    }
                    a.context.drawImage(this.C.Mc, c.x, c.y, b, e, f, k, b, e)
                },
                Fv: function(c, b, e, f, k) {
                    var h = a.context,
                        g = 0,
                        q = 0,
                        u, j, z, J, G;
                    if (c === d.c) {
                        c = this.C.bh;
                        u = this.C.ah
                    } else {
                        u = this.C.d[c];
                        g = u.x;
                        q = u.y;
                        c = u.B;
                        u = u.M
                    }
                    var I = Math.floor(c),
                        B = Math.floor(u);
                    for (j = 0; j < k;) {
                        for (z = 0; z < f;) {
                            J = f - z;
                            J > c && (J = c);
                            J = Math.ceil(J);
                            G = k - j;
                            G > u && (G = u);
                            G = Math.ceil(G);
                            h.drawImage(this.C.Mc, g, q, J, G, b + z, e + j, J, G);
                            z = z + I
                        }
                        j = j + B
                    }
                },
                Yr: function(a, b) {
                    if (this.ff === d.c) return c.ob(a,
                        b, this.ca, this.da, this.C.width, this.C.height);
                    var e = this.C.d[this.ff],
                        f = this.ca,
                        k = this.da;
                    if (this.xj) var h = this.C.g[this.ff],
                        f = f + h.x,
                        k = k + h.y;
                    return c.ob(a, b, f, k, e.B, e.M)
                },
                jr: function(a) {
                    if (this.h(a)) return i;
                    if (a.kq === h.ti) this.$a(a.lq);
                    else return p;
                    return i
                },
                qy: function(a, d) {
                    var c = this.Dd(a).g[d];
                    this.x = c.x;
                    this.y = c.y
                },
                VA: function(a, d) {
                    var c = this.Dd(a),
                        b = c.d[d],
                        c = c.g[d];
                    this.x = c.x + b.B / 2;
                    this.y = c.y + b.M / 2
                }
            });
            k.create = function(a, d) {
                var c = new k;
                c.na(a);
                d != n && c.$a(d);
                return c
            };
            return k
        }(tb, U, E, sb, T,
            S, Ba, La),
        vb = function(b, c, e) {
            return b.extend({
                init: function() {
                    this.h();
                    this.Ff = "";
                    this.hc = this.vc = this.ed = 0;
                    this.Te = n
                },
                qw: function(a, d, c) {
                    this.Ff = a;
                    this.ie(d);
                    this.Te = c
                },
                Ay: function(a, d, c) {
                    this.ed = a;
                    this.vc = d;
                    this.hc = c
                },
                Ui: function(a) {
                    var d = this.Ff.indexOf(a);
                    if (d >= 0) return d;
                    Log.debug("Char not found in font:" + a);
                    return e.c
                },
                mA: function(a, d, b) {
                    var a = this.C.d[a],
                        e = Math.ceil(a.B),
                        g = Math.ceil(a.M);
                    c.context.drawImage(this.C.Mc, a.x, a.y, e, g, d, b, e, g)
                },
                Vs: function(a) {
                    for (var d = 0, c = a.length, b = 0, e = 0; e < c; e++) {
                        b =
                            this.Nf(a, e);
                        if (a[e] === " ") d = d + (this.hc + b);
                        else var k = this.C.d[this.Ui(a[e])].B,
                            d = d + (k + b)
                    }
                    return Math.ceil(d - b)
                },
                mm: function() {
                    return this.C.d[0].M
                },
                Nf: function(a, d) {
                    if (d === a.length - 1) return 0;
                    if (!this.Te) return this.ed;
                    var c = this.Te[a[d] + a[d + 1]];
                    return c != n ? c : this.ed
                }
            })
        }(ub, sb, T),
        wb = function(b, c, e, a, d, f, h, g) {
            return b.extend({
                init: function() {
                    this.h()
                },
                ad: function(a, d, c, b) {
                    var e = this.we.length;
                    this.tb(e, a, d, c, b);
                    return e
                },
                Su: function(a, d, c, b) {
                    this.Eg(this.we.length, a, d, c, b)
                },
                Eg: function(a, d, c, b, e) {
                    this.nq(a,
                        d, c, b, e[0], g.c, e)
                },
                tb: function(a, d, c, b, e, f) {
                    this.nq(a, d, c, e - b + 1, b, e, f)
                },
                nq: function(c, b, e, o, t, g, m) {
                    var g = new a,
                        w = [d.create(this, f.ti, t, 0)];
                    g.m(h.dj(w, 0));
                    for (var q = 1; q < o; q++) {
                        m ? t = m[q] : t++;
                        w = [d.create(this, f.ti, t, 0)];
                        g.m(h.dj(w, b));
                        q == o - 1 && e === a.U.Ib && g.m(h.dj(w, b))
                    }
                    if (e) g.cj = e;
                    this.Jb(g, c)
                },
                ny: function(a, d, c) {
                    this.Kc(c).hr(e.vd).ga[d].Qc = a
                },
                As: function(a, d) {
                    this.ts(f.hp, this, 0, 0, a, d)
                },
                ts: function(a, c, b, f, h, g) {
                    h = this.Kc(g).hr(e.vd).ga[h];
                    a = d.create(c, a, b, f);
                    h.value.Ie.push(a)
                },
                ue: function(a, c, b) {
                    c =
                        this.Kc(c);
                    a = [d.create(this, f.kp, 0, a)];
                    b = h.dj(a, b);
                    c.m(b)
                },
                vw: function(a) {
                    this.Ab.pr(e.vd, a)
                }
            })
        }(ub, Ca, ya, Fa, va, Ba, Da, T),
        xb = function(b, c, e, a, d) {
            var f = b.extend({
                init: function(b, g) {
                    this.h();
                    this.na(d.Xc);
                    this.$a(58);
                    this.anchor = a.R;
                    var k = new c;
                    k.m(e.me(0, e.l.LINEAR, 0));
                    k.m(e.me(180, e.l.Hb, 0.3));
                    this.Jb(k, f.yi.iq);
                    k = new c;
                    k.m(e.me(180, e.l.LINEAR, 0));
                    k.m(e.me(0, e.l.Hb, 0.3));
                    this.Jb(k, f.yi.wg);
                    this.qy(d.tk, 1);
                    this.x = this.x + b;
                    this.y = this.y + g
                }
            });
            f.yi = {
                wg: 0,
                iq: 1
            };
            return f
        }(ub, Fa, Da, ua, r),
        yb = function(b, c,
            e, a, d) {
            var f = b.extend({
                init: function(c) {
                    this.h();
                    this.Xl = c;
                    this.state = f.U.xd;
                    this.bt = this.In = this.ct = this.Hn = 0;
                    this.Db = n;
                    this.Mf = new e(a.c, a.c, a.c, a.c)
                },
                Zi: function(a, c) {
                    a.ma = c.ma = d.Qb | d.rb;
                    this.Ud(a, f.U.xd);
                    this.Ud(c, f.U.Ae);
                    this.Kh(f.U.xd)
                },
                zA: function(a, d) {
                    var b = new c;
                    b.ie(a);
                    var e = new c;
                    e.ie(d);
                    this.Zi(b, e)
                },
                oA: fa("Mf"),
                Mh: function(a, c, d, b) {
                    this.Hn = a;
                    this.ct = c;
                    this.In = d;
                    this.bt = b
                },
                Kh: function(a) {
                    this.state = a;
                    var c = this.fb(f.U.Ae);
                    this.fb(f.U.xd).Ih(a === f.U.xd);
                    c.Ih(a === f.U.Ae)
                },
                Se: function(c,
                    d, b) {
                    b = b ? 0 : 15;
                    return this.Mf.B !== a.c ? e.ob(c, d, this.ca + this.Mf.x - b, this.da + this.Mf.y - b, this.Mf.B + b * 2, this.Mf.M + b * 2) : e.ob(c, d, this.ca - this.Hn - b, this.da - this.In - b, this.width + (this.Hn + this.ct) + b * 2, this.height + (this.In + this.bt) + b * 2)
                },
                kj: function(a, c) {
                    this.h(a, c);
                    if (this.state === f.U.xd && this.Se(a, c, i)) {
                        this.Kh(f.U.Ae);
                        return i
                    }
                    return p
                },
                lj: function(a, c) {
                    this.h(a, c);
                    if (this.state === f.U.Ae) {
                        this.Kh(f.U.xd);
                        if (this.Se(a, c, p)) {
                            this.Db && this.Db(this.Xl);
                            return i
                        }
                    }
                    return p
                },
                Vm: function(a, c) {
                    this.h(a, c);
                    if (this.state ===
                        f.U.Ae) {
                        if (this.Se(a, c, p)) return i;
                        this.Kh(f.U.xd)
                    }
                    return p
                },
                Ud: function(a, c) {
                    this.h(a, c);
                    a.ma = d.Qb | d.rb;
                    if (c === f.U.Ae) {
                        this.width = a.width;
                        this.height = a.height;
                        this.Kh(f.U.xd)
                    }
                }
            });
            f.U = {
                xd: 0,
                Ae: 1
            };
            return f
        }(tb, ub, U, T, ua),
        zb = function(b) {
            return b.extend({
                init: function() {
                    this.h();
                    this.Dh = []
                },
                update: function(c) {
                    for (var b = 0, a = this.Dh.length; b < a; b++) this.removeChild(this.Dh[b]);
                    this.Dh = [];
                    this.h(c)
                },
                En: function(c) {
                    this.Dh.push(c.element)
                },
                ve: function() {
                    var c = this;
                    return function(b) {
                        c.En(b)
                    }
                },
                Ax: function(c) {
                    this.Dh.push(c)
                },
                Vr: function() {
                    var c = this;
                    return function(b) {
                        c.Ax(b)
                    }
                }
            })
        }(tb),
        Ab = function(b, c, e) {
            return b.extend({
                init: function(a, d, b, h, g) {
                    this.h();
                    this.Xl = g;
                    this.wa = new c(0);
                    this.wa.Zi(a, d);
                    this.xa = new c(1);
                    this.xa.Zi(b, h);
                    this.wa.ma = this.xa.ma = e.Qb | e.rb;
                    this.width = this.wa.width;
                    this.height = this.wa.height;
                    this.Ud(this.wa, 0);
                    this.Ud(this.xa, 1);
                    this.xa.Ih(p);
                    this.wa.Db = $.proxy(this.Db, this);
                    this.xa.Db = $.proxy(this.Db, this)
                },
                Db: function(a) {
                    switch (a) {
                        case 0:
                        case 1:
                            this.toggle()
                    }
                    this.Db && this.Db(this.Xl)
                },
                Mh: function(a,
                    c, b, e) {
                    this.wa.Mh(a, c, b, e);
                    this.xa.Mh(a, c, b, e)
                },
                toggle: function() {
                    this.wa.Ih(!this.wa.isRequired());
                    this.xa.Ih(!this.xa.isRequired())
                },
                Em: function() {
                    return this.xa.isRequired()
                }
            })
        }(tb, yb, ua),
        Bb = function(b, c, e) {
            var a = c.extend({
                init: function() {
                    var c = b.create(e.Xc, 56),
                        f = b.create(e.Xc, 56),
                        h = b.create(e.Xc, 57),
                        g = b.create(e.Xc, 57);
                    this.h(c, f, h, g, a.qo);
                    this.Mh(10, 10, 10, 10)
                }
            });
            a.qo = 0;
            return a
        }(ub, Ab, r),
        Fb = function(b, c, e, a) {
            return b.extend({
                init: function(a) {
                    this.h();
                    this.C = a;
                    this.jj = e.c;
                    this.jf = [];
                    this.xe = [];
                    this.Df = []
                },
                $a: function(a, c, b, e) {
                    this.jf[a] = c;
                    this.xe[a] = b;
                    this.Df[a] = e != n ? e : 1
                },
                Qx: function(a) {
                    this.jf.splice(a, 1);
                    this.xe.splice(a, 1);
                    this.Df.splice(a, 1)
                },
                fj: function(c, b, e, g) {
                    this.jf[g] = a.copy(this.C.d[c]);
                    var k = this.C.g[c],
                        c = this.C.d[c];
                    this.xe[g] = new a(b + k.x, e + k.y, c.B, c.M);
                    this.Df[g] = 1
                },
                Uq: function(a) {
                    if (a > this.jf.length) a = this.jf.length;
                    for (var b = c.context, e = 0; e < a; e++) {
                        var g = this.jf[e],
                            k = this.xe[e],
                            l = this.Df[e],
                            s = b.globalAlpha,
                            o = Math.ceil(g.B),
                            t = Math.ceil(g.M);
                        if (!(o === 0 || t === 0)) {
                            if (l == n) l = 1;
                            else if (l <= 0) continue;
                            else if (l < 1) b.globalAlpha = l;
                            var x = this.bg && this.bg.length > e;
                            if (x) {
                                var m = this.bg[e],
                                    w = this.Aj[e],
                                    q = w.x !== 0 || w.y !== 0;
                                if (m !== 0) {
                                    q && b.translate(w.x, w.y);
                                    b.rotate(m);
                                    q && b.translate(-w.x, -w.y)
                                }
                            }
                            var u, j, z;
                            if (this.Fa) {
                                u = Math.round(k.x / this.Fa) * this.Fa;
                                j = Math.round(k.y / this.Fa) * this.Fa;
                                z = Math.round(k.B / this.Fa) * this.Fa;
                                k = Math.round(k.M / this.Fa) * this.Fa
                            } else {
                                u = Math.round(k.x);
                                j = Math.round(k.y);
                                z = Math.ceil(k.B);
                                k = Math.ceil(k.M)
                            }
                            b.drawImage(this.C.Mc, g.x, g.y, o, t, u, j, z, k);
                            if (x && m !== 0) {
                                q &&
                                    b.translate(w.x, w.y);
                                b.rotate(-m);
                                q && b.translate(-w.x, -w.y)
                            }
                            if (l !== 1) b.globalAlpha = s
                        }
                    }
                },
                p: function() {
                    this.yc();
                    if (this.color.r !== 0) {
                        var a = c.context,
                            b = this.ca !== 0 || this.da !== 0;
                        b && a.translate(this.ca, this.da);
                        this.Uq(this.jj === e.c ? this.jf.length : this.jj);
                        b && a.translate(-this.ca, -this.da)
                    }
                    this.xc()
                }
            })
        }(tb, sb, T, U),
        Gb = function(b, c, e) {
            return b.extend({
                init: function() {
                    this.h()
                },
                ie: function(a) {
                    this.h(a);
                    this.rd = [];
                    this.g = [];
                    this.align = e.R
                },
                Ky: function(a, c, b) {
                    this.rd[0] = a;
                    this.rd[1] = c;
                    this.rd[2] = b;
                    a = this.C.d[a].M;
                    c = this.C.d[c].M;
                    b = this.C.d[b].M;
                    this.height = a >= c && a >= b ? a : c >= a && c >= b ? c : b;
                    this.g[0] = Math.floor((this.height - a) / 2);
                    this.g[1] = Math.floor((this.height - c) / 2);
                    this.g[2] = Math.floor((this.height - b) / 2)
                },
                p: function() {
                    this.yc();
                    var a = this.C.d[this.rd[0]],
                        b = this.C.d[this.rd[1]],
                        e = this.C.d[this.rd[2]],
                        h = this.width - (Math.floor(a.B) + Math.floor(e.B)),
                        g = c.context,
                        k = Math.round(this.ca),
                        l = Math.round(this.da),
                        s = Math.ceil(a.B),
                        o = Math.ceil(a.M),
                        t = Math.ceil(e.B),
                        x = Math.ceil(e.M);
                    if (h >= 0) {
                        g.drawImage(this.C.Mc, a.x, a.y, s,
                            o, k, l + this.g[0], s, o);
                        this.Fv(this.rd[1], k + s, l + this.g[1], h, b.M);
                        g.drawImage(this.C.Mc, e.x, e.y, t, x, k + s + h, l + this.g[2], t, x)
                    } else {
                        a = a.copy();
                        b = e.copy();
                        a.B = Math.min(a.B, this.width / 2);
                        b.B = Math.min(b.B, this.width - a.B);
                        b.x = b.x + (e.B - b.B);
                        g.drawImage(this.C.Mc, a.x, a.y, a.B, a.M, k, l + this.g[0], a.B, a.M);
                        g.drawImage(this.C.Mc, b.x, b.y, b.B, b.M, k + a.B, l + this.g[2], b.B, b.M)
                    }
                    this.xc()
                },
                Zv: function() {
                    var a = c.element;
                    c.Lh(document.createElement("canvas"));
                    var b = c.element,
                        e = Math.ceil(this.width),
                        h = Math.ceil(this.height);
                    b.width =
                        e;
                    b.height = h;
                    this.p();
                    var b = b.toDataURL("image/png"),
                        g = new Image;
                    g.src = b;
                    $(g).width(e).height(h);
                    a && c.Lh(a);
                    return g
                }
            })
        }(ub, sb, ua),
        Hb = function(b, c, e, a) {
            var d = b.extend({
                init: function(a, b) {
                    this.speed = a;
                    this.type = b;
                    this.a = c.Pa();
                    this.target = c.Pa();
                    this.offset = c.Pa()
                },
                moveTo: function(a, b, e) {
                    this.target.x = a;
                    this.target.y = b;
                    if (e) this.a.ba(this.target);
                    else if (this.type === d.Yc.ai) {
                        this.offset = c.bb(this.target, this.a);
                        this.offset.multiply(this.speed)
                    } else if (this.type === d.Yc.vf) {
                        this.offset = c.bb(this.target,
                            this.a);
                        this.offset.normalize();
                        this.offset.multiply(this.speed)
                    }
                },
                update: function(b) {
                    if (!this.a.Qi(this.target)) {
                        this.a.add(c.multiply(this.offset, b));
                        this.a.round();
                        (!a.Bj(this.offset.x, this.target.x - this.a.x) || !a.Bj(this.offset.y, this.target.y - this.a.y)) && this.a.ba(this.target)
                    }
                },
                Zu: function() {
                    (this.a.x !== 0 || this.a.y !== 0) && e.context.translate(-this.a.x, -this.a.y)
                },
                kv: function() {
                    (this.a.x !== 0 || this.a.y !== 0) && e.context.translate(this.a.x, this.a.y)
                }
            });
            d.Yc = {
                vf: 0,
                ai: 1
            };
            return d
        }(sa, S, sb, Sa),
        Ib = function(b,
            c, e, a, d, f, h, g) {
            b = b.extend({
                init: function() {
                    this.h();
                    this.rw = p
                },
                ie: function(c) {
                    this.h(c);
                    this.Z = new e(0, 0, this.width, this.height);
                    this.gn = new a(this.Z.x, this.Z.y, this.Z.width, this.Z.height);
                    this.anchor = d.R;
                    this.at = this.zj = p
                },
                UA: function() {
                    var c = this.C.g[0],
                        b = this.C.d[0];
                    this.Z = new e(Math.round(c.x), Math.round(c.y), b.width, b.height);
                    this.gn = new a(this.Z.x, this.Z.y, this.Z.width, this.Z.height)
                },
                af: function(a) {
                    this.rotation = a.b || 0;
                    var b = a.path;
                    if (b) {
                        var d = c.ep;
                        b[0] === "R" && (d = Math.round(parseInt(b.substr(2),
                            10) / 2 + 1));
                        a = new c(d, a.pa, a.Aa);
                        a.b = this.rotation;
                        a.zs(b, new f(this.x, this.y));
                        this.sn(a);
                        a.start()
                    }
                },
                sn: function(a) {
                    this.Oa = a;
                    this.Fa = 1.0E-4
                },
                update: function(a) {
                    this.h(a);
                    if (!this.at) {
                        this.Jg();
                        this.at = i
                    }
                    if (this.Oa) {
                        this.Oa.update(a);
                        this.x = this.Oa.a.x;
                        this.y = this.Oa.a.y;
                        this.zj ? this.by(this.Oa.b) : this.rotation = this.Oa.b
                    }
                },
                by: function(a) {
                    if (!this.zj) this.zj = i;
                    this.rotation = a;
                    var c = this.Z,
                        b = new f(c.x, c.y),
                        d = new f(c.x + c.B, c.y),
                        e = new f(d.x, c.y + c.M),
                        c = new f(c.x, e.y),
                        a = h.dc(a),
                        g = this.width / 2 + this.Kd,
                        m =
                        this.height / 2 + this.cg;
                    b.la(a, g, m);
                    d.la(a, g, m);
                    e.la(a, g, m);
                    b.la(a, g, m);
                    a = this.gn;
                    a.Zs = b.x;
                    a.$s = b.y;
                    a.dt = d.x;
                    a.et = d.y;
                    a.Dq = e.x;
                    a.Eq = e.y;
                    a.xq = c.x;
                    a.yq = c.y
                },
                Rg: function() {
                    var a = g.context,
                        c = this.ca,
                        b = this.da,
                        d = this.Z,
                        e = this.gn;
                    a.strokeStyle = "red";
                    if (this.zj) {
                        a.beginPath();
                        a.moveTo(c + e.Zs, b + e.$s);
                        a.lineTo(c + e.dt, b + e.et);
                        a.lineTo(c + e.Dq, b + e.Eq);
                        a.lineTo(c + e.xq, b + e.yq);
                        a.stroke();
                        a.closePath()
                    } else a.strokeRect(c + d.x, b + d.y, d.B, d.M)
                },
                bn: function(a, c) {
                    var b = this.Z;
                    return e.ob(a, c, this.ca + b.x, this.da + b.y, b.B,
                        b.M)
                },
                Mx: function(a, c, b, d) {
                    var f = this.ca + this.Z.x,
                        h = this.da + this.Z.y;
                    return e.Ch(a, c, b, d, f, h, f + this.Z.B, h + this.Z.M)
                }
            });
            b.fh = function(a, c) {
                var b = a.ca + a.Z.x,
                    d = a.da + a.Z.y,
                    f = c.ca + c.Z.x,
                    h = c.da + c.Z.y;
                return e.Ch(b, d, b + a.Z.B, d + a.Z.M, f, h, f + c.Z.B, h + c.Z.M)
            };
            return b
        }(wb, Ya, U, Ca, ua, S, za, sb, ta),
        Jb = function(b) {
            return b.extend({
                init: function() {
                    this.h();
                    this.On = this.cf = p
                },
                p: function() {
                    if (this.On) {
                        this.yc();
                        this.xc()
                    } else this.h()
                }
            })
        }(Ib),
        Kb = function(b, c, e) {
            return b.extend({
                init: function() {
                    this.h();
                    this.b = 0;
                    this.Ba =
                        c.Pa();
                    this.Ia = c.Pa();
                    this.touch = this.Sh = 0
                },
                Pb: function() {
                    var a = this.Z.B / 2;
                    this.Ba.x = this.x - a;
                    this.Ia.x = this.x + a;
                    this.Ba.y = this.Ia.y = this.y;
                    this.b = e.dc(this.rotation);
                    this.Ba.la(this.b, this.x, this.y);
                    this.Ia.la(this.b, this.x, this.y)
                }
            })
        }(Ib, S, za),
        Lb = function(b, c, e) {
            return {
                Hs: i,
                wv: i,
                br: c.showFrameRate,
                Ij: i,
                rm: function() {
                    return b.Ti("music", i)
                },
                Fj: function(a) {
                    b.set("music", a)
                },
                sm: function() {
                    return b.Ti("sound", i)
                },
                Gj: function(a) {
                    b.set("sound", a)
                },
                pm: function() {
                    return b.Ti("clickToCut", p)
                },
                ly: function(a) {
                    b.set("clickToCut",
                        a)
                },
                Wi: function() {
                    if (c.lang) return e.cr(c.lang);
                    var a = b.Vi("language", n);
                    if (a == n) a = e.uo;
                    return a
                },
                vy: function(a) {
                    b.set("language", a)
                },
                $v: function() {
                    return b.Ti("isHD", n)
                },
                ty: function(a) {
                    b.set("isHD", a)
                },
                fr: function() {
                    return sessionStorage.getItem("introWatched") === "true"
                },
                sy: function(a) {
                    sessionStorage.setItem("introWatched", a)
                },
                clear: function() {
                    b.remove("isHD");
                    sessionStorage.removeItem("introWatched")
                }
            }
        }(Ta, Xa, lb),
        X = function(b, c, e) {
            var a = window.ZeptoLab,
                a = a == n ? n : a.isHD;
            a != n ? $(function() {
                $("#optionHd").hide();
                $("#optionSd").hide()
            }) : a = b.$v();
            a == n && (a = Modernizr.mq("screen and (min-width:1200px) and (min-height:790px)"));
            if (!a) {
                e.gq = 0.75;
                e.Zc = 0.75;
                e.He = 768;
                e.Ju = 432
            }
            c(e);
            return e
        }(Lb, Pa, {
            jq: 1024,
            qb: 1024,
            cb: 576,
            $b: 0.4,
            gq: 1,
            Zc: 1,
            He: 1024,
            Ju: 576,
            Yh: 3,
            no: 3.5,
            oo: 2,
            G: 1.2,
            ib: 0,
            Bo: 0.8,
            Vn: -17,
            Un: 20,
            Pk: 0.925
        }),
        Mb = function(b, c, e, a, d, f, h, g, k, l) {
            return {
                init: function() {
                    e.iy(b, d.$b);
                    for (var a = 0, f = b.length; a < f; a++) {
                        var l = b[a];
                        delete l.Sr;
                        delete l.ex;
                        c[l.id].info = l
                    }
                },
                rx: function(b, d) {
                    var e = c[b];
                    switch (e.type) {
                        case a.i:
                            e.C =
                                new h(d);
                            this.Bs(e);
                            break;
                        case a.di:
                            e.C = new h(d);
                            this.Bs(e);
                            var l = new f,
                                m = e.info;
                            l.qw(m.Ff, e.C, m.Te);
                            l.Ay(m.ed, m.vc, m.hc);
                            e.font = l
                    }
                },
                Bs: function(a) {
                    var c = a.C,
                        b = c.bh,
                        d = c.ah,
                        a = a.info,
                        e = a.d,
                        f = a.g;
                    c.qe = g.th();
                    if (e) {
                        c.Vd = a.Vd ? a.Vd : 0;
                        c.Bf = a.Bf ? a.Bf : 0;
                        for (var l = 0, h = e.length; l < h; l++) {
                            var j = e[l],
                                j = new k(j.x, j.y, j.B, j.M);
                            if (j.B + c.Vd > b) j.B = b - c.Vd;
                            if (j.M + c.Bf > d) j.M = d - c.Bf;
                            c.Uu(j)
                        }
                        if (f) {
                            b = f.length;
                            for (l = 0; l < b; l++) {
                                d = f[l];
                                c.zy(l, d.x, d.y)
                            }
                        }
                        if (a.k && a.j) {
                            c.qe.x = a.k;
                            c.qe.y = a.j
                        }
                    }
                },
                Dd: function(a) {
                    a = c[a];
                    if (a.C) return a.C;
                    l.debug("Image not yet loaded:" + a.path);
                    return n
                },
                er: function(a) {
                    a = c[a];
                    if (a.font) return a.font;
                    l.debug("Font not yet loaded:" + a.path);
                    return n
                }
            }
        }(ra, E, Ha, A, X, vb, Ga, S, U, La),
        Nb = function(b) {
            return new function() {
                this.Pn = n;
                this.zoom = 1;
                this.py = function() {
                    this.Pn = $("#c")
                };
                this.mt = function(c) {
                    var c = c || {},
                        b = "scale(" + this.zoom.toFixed(2) + ")",
                        a = ["ms", "o", "webkit", "moz"],
                        d, f, h;
                    d = 0;
                    for (f = a.length; d < f; d++) {
                        h = "-" + a[d] + "-transform";
                        c[h] = b;
                        c[h + "-origin"] = "top left"
                    }
                    this.Pn.css(c)
                };
                this.resize = function() {
                    var c = $(window),
                        e = c.width(),
                        c = c.height(),
                        a = b.qb,
                        d = b.cb;
                    this.zoom = Math.min(e / a, c / d);
                    e = Math.round((e - a * this.zoom) / 2);
                    this.mt({
                        "margin-top": Math.round((c - d * this.zoom) / 2),
                        "margin-left": e
                    })
                }
            }
        }(X),
        Ob = function(b, c, e, a, d, f, h, g, k) {
            function l(a, c) {
                this.jg = a;
                this.width = c
            }
            var s = b.extend({
                init: function(b) {
                    this.h();
                    this.font = b;
                    this.ee = [];
                    this.height = this.width = c.c;
                    this.align = e.rb;
                    this.Og = new a(b.C);
                    this.Az = p;
                    this.maxHeight = c.c
                },
                Ds: function(a, b) {
                    this.jg = a;
                    this.pg = b == n || b === c.c ? Math.ceil(this.font.Vs(a)) : Math.ceil(b);
                    if (this.jg) {
                        this.Qv();
                        this.tz()
                    }
                },
                tz: function() {
                    for (var a = 0, b = 0, d = this.font.mm(), f = 0, l = this.font.Nf("..", 0), h = this.maxHeight === c.c ? this.ee.length : Math.min(this.ee.length, this.maxHeight / d + this.font.vc), k = h !== this.ee.length, j = 0; j < h; j++) {
                        for (var a = this.ee[j], g = a.jg, s = g.length, a = this.align !== e.rb ? this.align === e.Dc || this.align === e.R ? (this.pg - a.width) / 2 : this.pg - a.width : 0, G = 0; G < s; G++) {
                            if (g[G] === " ") a = a + (this.font.hc + this.font.Nf(g, G));
                            else {
                                var I = this.font.Ui(g[G]),
                                    B = this.font.C.d[I].B;
                                this.Og.fj(I, Math.round(a), Math.round(b),
                                    f++);
                                a = a + (B + this.font.Nf(g, G))
                            }
                            if (k && j === h - 1) {
                                I = this.font.Ui(".");
                                B = this.font.C.d[I].B;
                                if (G === s - 1 || G === s - 2 && a + 3 * (B + l) + this.font.hc > this.pg) {
                                    this.Og.fj(I, Math.round(a), Math.round(b), f++);
                                    a = a + (B + l);
                                    this.Og.fj(I, Math.round(a), Math.round(b), f++);
                                    a = a + (B + l);
                                    this.Og.fj(I, Math.round(a), Math.round(b), f++);
                                    a = a + (B + l);
                                    break
                                }
                            }
                        }
                        b = b + (d + this.font.vc)
                    }
                    if (this.ee.length <= 1) {
                        this.height = this.font.mm();
                        this.width = a
                    } else {
                        this.height = (this.font.mm() + this.font.vc) * this.ee.length - this.font.vc;
                        this.width = this.pg
                    }
                    if (this.maxHeight !==
                        c.c) this.height = Math.min(this.height, this.maxHeight)
                },
                p: function() {
                    this.yc();
                    if (this.color.r !== 0) {
                        var a = this.jg.length,
                            c = d.context;
                        if (a > 0) {
                            c.translate(this.ca, this.da);
                            this.Og.Uq(a);
                            c.translate(-this.ca, -this.da)
                        }
                    }
                    this.xc()
                },
                Qv: function() {
                    for (var a = [], c = this.jg, b = c.length, d = 0, e = 0, f = 0, h = 0, j = 0, g = 0, s = 0; s < b;) {
                        var G = c[s++];
                        if (G == " " || G == "\n") {
                            g = g + f;
                            j = s - 1;
                            f = 0;
                            e = s;
                            if (G == " ") {
                                e--;
                                f = this.font.hc + this.font.Nf(c, s - 1)
                            }
                        } else var I = this.font.C.d[this.font.Ui(G)].B,
                            f = f + (I + this.font.Nf(c, s - 1));
                        I = k.rs(g + f) > this.pg;
                        if (this.Az && I && j == h) {
                            g = g + f;
                            j = s;
                            f = 0;
                            e = s
                        }
                        if (k.rs(g + f) > this.pg && j != h || G == "\n") {
                            a[d++] = h;
                            for (a[d++] = j; e < b && c[e] == " ";) {
                                e++;
                                f = f - this.font.hc
                            }
                            j = h = e;
                            g = 0
                        }
                    }
                    if (f != 0) {
                        a[d++] = h;
                        a[d++] = s
                    }
                    c = d >> 1;
                    this.ee = [];
                    for (b = 0; b < c; b++) {
                        d = this.jg.substring(a[b << 1], a[(b << 1) + 1]);
                        e = this.font.Vs(d);
                        this.ee.push(new l(d, e))
                    }
                },
                iA: function(a) {
                    var b = Xml.bv(a, "font"),
                        b = h.er(b),
                        b = new s(b);
                    if (a.hasAttribute("align")) b.align = e.parse(Xml.attr(a, "align"));
                    if (a.hasAttribute("string")) {
                        var d = Xml.bv("string"),
                            d = h.getString(d),
                            f = a.hasAttribute("width") ?
                            Xml.av(a, "width") : c.c;
                        b.Ds(d, f)
                    }
                    if (a.hasAttribute("height")) b.maxHeight = Xml.av(a, "height");
                    return b
                }
            });
            s.Hi = function(a) {
                var c = a.W;
                !c && a.dh && (c = document.getElementById(a.dh));
                !c && a.Nc && (c = $(a.Nc)[0]);
                c || (c = new Image);
                var b = a.Si,
                    f = a.width,
                    l = a.Cf,
                    k = a.alpha != n ? a.alpha : 1,
                    u = a.va ? g.Zc : a.scale || 1,
                    j = a.text.toString(),
                    z = d.element;
                d.Lh(document.createElement("canvas"));
                b = h.er(b);
                b = new s(b);
                b.x = Math.ceil(24 * g.$b / 2);
                b.y = 0;
                b.align = l || e.rb;
                b.Ds(j, f);
                var l = d.element,
                    j = d.context,
                    J = (f || Math.ceil(b.width)) + Math.ceil(b.x *
                        2),
                    f = Math.ceil(b.height);
                l.width = J;
                l.height = f;
                var G = j.globalAlpha;
                if (k !== G) j.globalAlpha = k;
                b.p();
                c.src = l.toDataURL("image/png");
                if (k !== G) j.globalAlpha = G;
                z && d.Lh(z);
                var k = J * u,
                    u = f * u,
                    a = a.Im,
                    I;
                if (a && k > a) {
                    a = a / k;
                    I = Math.round((1 - a) * u / 2);
                    k = k * a;
                    u = u * a
                }
                a = $(c).width(k).height(u);
                I && a.css("padding-top", I);
                return c
            };
            s.drawSmall = function(a) {
                a.Si = f.ci;
                return s.Hi(a)
            };
            s.Ua = function(a) {
                a.Si = f.qg;
                return s.Hi(a)
            };
            s.hm = function(a) {
                a.Si = f.ik;
                s.Hi(a)
            };
            return s
        }(tb, T, ua, Fb, sb, r, Mb, X, Sa),
        Pb = function(b, c, e) {
            return b.extend({
                init: function() {
                    this.h()
                },
                un: function(a, b, f, h) {
                    a = c.Hi({
                        Si: a,
                        text: b,
                        width: f,
                        Cf: h
                    });
                    this.ie(new e(a))
                }
            })
        }(ub, Ob, Ga),
        Qb = function(b) {
            return b.extend({
                init: function() {
                    this.h();
                    this.ha = 0
                }
            })
        }(Pb),
        Rb = function(b, c, e, a, d) {
            return b.extend({
                init: function(c, b) {
                    this.h(c);
                    this.Am = b;
                    this.Va = new a(b);
                    this.width = d.qb;
                    this.height = d.cb
                },
                eh: function(a) {
                    var b = this.Am,
                        b = b.d[e.gb(0, b.d.length - 1)],
                        d = new c(0, 0, 0, 0);
                    this.Va.$a(this.Tb.length, b, d, 1);
                    this.h(a);
                    a.width = b.B * a.size;
                    a.height = b.M * a.size
                },
                Jn: function(a, b) {
                    this.Va.xe[b] = new c(a.a.x - a.width /
                        2, a.a.y - a.height / 2, a.width, a.height);
                    this.Va.Df[b] = a.color.r;
                    this.Nq[b] = a.color
                },
                mn: function(a) {
                    this.Va.Qx(a);
                    this.h(a)
                },
                p: function() {
                    this.yc();
                    this.Va.p();
                    this.xc()
                }
            })
        }(function(b, c, e, a, d, f, h) {
            function g(a, c, b) {
                this.x = a;
                this.y = c;
                this.size = b
            }

            function k() {
                this.te = new b(0, 0);
                this.a = new b(0, 0);
                this.dir = new b(0, 0);
                this.Oh = this.Ah = 0;
                this.color = new c(0, 0, 0, 0);
                this.$d = new c(0, 0, 0, 0);
                this.height = this.width = this.b = this.Qq = this.uc = this.size = 0
            }
            return e.extend({
                init: function(a) {
                    this.h();
                    this.width = f.qb;
                    this.height =
                        f.cb;
                    this.Gn = a;
                    this.Tb = [];
                    this.zi = p;
                    this.Tg = this.duration = 0;
                    this.Ed = new b(0, 0);
                    this.qj = new b(0, 0);
                    this.ur = this.uc = this.Ks = this.size = this.gs = this.Ah = this.Ws = this.Oh = this.Os = this.speed = this.Ql = this.b = 0;
                    this.zc = new c(0, 0, 0, 0);
                    this.se = new c(0, 0, 0, 0);
                    this.tc = new c(0, 0, 0, 0);
                    this.ce = new c(0, 0, 0, 0);
                    this.Pe = this.Mi = 0;
                    this.C = n;
                    this.xe = [];
                    this.Nq = [];
                    this.Hd = 0;
                    this.eb = n
                },
                rq: function() {
                    if (this.Tb.length == this.Gn) return p;
                    var a = new k;
                    this.eh(a);
                    this.Tb.push(a);
                    return i
                },
                eh: function(d) {
                    d.a.x = this.x + this.qj.x * a.vb();
                    d.a.y = this.y + this.qj.y * a.vb();
                    d.te.ba(d.a);
                    var e = h.dc(this.b + this.Ql * a.vb()),
                        e = new b(Math.cos(e), Math.sin(e));
                    e.multiply(this.speed + this.Os * a.vb());
                    d.dir = e;
                    d.Ah = this.Ah + this.gs * a.vb();
                    d.Oh = this.Oh + this.Ws * a.vb();
                    d.uc = this.uc + this.ur * a.vb();
                    var e = new c(this.zc.z + this.se.z * a.vb(), this.zc.F + this.se.F * a.vb(), this.zc.D + this.se.D * a.vb(), this.zc.r + this.se.r * a.vb()),
                        f = new c(this.tc.z + this.ce.z * a.vb(), this.tc.F + this.ce.F * a.vb(), this.tc.D + this.ce.D * a.vb(), this.tc.r + this.ce.r * a.vb());
                    d.color = e;
                    d.$d.z = (f.z - e.z) /
                        d.uc;
                    d.$d.F = (f.F - e.F) / d.uc;
                    d.$d.D = (f.D - e.D) / d.uc;
                    d.$d.r = (f.r - e.r) / d.uc;
                    d.size = this.size + this.Ks * a.vb()
                },
                update: function(a) {
                    this.h(a);
                    if (this.eb && this.Tb.length === 0 && !this.zi) this.eb(this);
                    else {
                        if (this.zi && this.Mi) {
                            var c = 1 / this.Mi;
                            for (this.Pe = this.Pe + a; this.Tb.length < this.Gn && this.Pe > c;) {
                                this.rq();
                                this.Pe = this.Pe - c
                            }
                            this.Tg = this.Tg + a;
                            this.duration !== -1 && this.duration < this.Tg && this.cz()
                        }
                        for (this.Hd = 0; this.Hd < this.Tb.length;) {
                            c = this.Tb[this.Hd];
                            if (c.uc > 0) {
                                this.pt(c, a);
                                c.color.z = c.color.z + c.$d.z * a;
                                c.color.F =
                                    c.color.F + c.$d.F * a;
                                c.color.D = c.color.D + c.$d.D * a;
                                c.color.r = c.color.r + c.$d.r * a;
                                c.uc = c.uc - a;
                                this.Jn(c, this.Hd, a);
                                this.Hd++
                            } else this.mn(this.Hd)
                        }
                    }
                },
                pt: function(a, c) {
                    var d, e;
                    if (a.a.x || a.a.y) {
                        d = a.a.copy();
                        d.normalize()
                    } else d = new b(0, 0);
                    e = d.copy();
                    d.multiply(a.Ah);
                    var f = e.x;
                    e.x = -e.y;
                    e.y = f;
                    e.multiply(a.Oh);
                    d = b.add(d, e);
                    d.add(this.Ed);
                    d.multiply(c);
                    a.dir.add(d);
                    d.ba(a.dir);
                    d.multiply(c);
                    a.a.add(d)
                },
                Jn: function(a) {
                    this.xe[this.Hd] = new g(a.a.x, a.a.y, a.size);
                    this.Nq[this.Hd] = a.color
                },
                mn: function(a) {
                    this.Tb.splice(a,
                        1)
                },
                Qs: function(a) {
                    this.Tb = [];
                    for (var c = 0; c < a; c++) this.rq();
                    this.zi = i
                },
                cz: function() {
                    this.zi = p;
                    this.Tg = this.duration;
                    this.Pe = 0
                },
                PA: function() {
                    this.Pe = this.Tg = 0
                },
                p: function() {
                    this.yc();
                    if (this.color.r !== 0)
                        for (var a = d.context, c = this.C.Mc, b = 0, e = this.Hd; b < e; b++) {
                            var f = this.Tb[b];
                            a.drawImage(c, Math.round(f.x), Math.round(f.y))
                        }
                    this.xc()
                },
                AA: function() {
                    return this.Tb.length === this.Gn
                }
            })
        }(S, ta, tb, Sa, sb, X, za), U, Sa, Fb, X),
        Sb = function(b, c, e, a) {
            return b.extend({
                init: function(a, c) {
                    this.h(a, c);
                    this.duration = 2;
                    this.Ed.x =
                        0;
                    this.Ed.y = 500;
                    this.b = -90;
                    this.Ql = 50;
                    this.speed = 150;
                    this.Os = 70;
                    this.Ah = 0;
                    this.gs = 1;
                    this.Oh = 0;
                    this.Ws = 1;
                    this.qj.x = 0;
                    this.qj.y = 0;
                    this.uc = 2;
                    this.ur = 0;
                    this.size = 1;
                    this.Ks = 0;
                    this.Mi = 100;
                    this.zc.z = 1;
                    this.zc.F = 1;
                    this.zc.D = 1;
                    this.zc.r = 1;
                    this.se.z = 0;
                    this.se.F = 0;
                    this.se.D = 0;
                    this.se.r = 0;
                    this.tc.z = 1;
                    this.tc.F = 1;
                    this.tc.D = 1;
                    this.tc.r = 1;
                    this.ce.z = 0;
                    this.ce.F = 0;
                    this.ce.D = 0;
                    this.Aa = this.ce.r = 0;
                    this.$x = 600
                },
                eh: function(c) {
                    this.h(c);
                    var b = this.Am.d[e.gb(3, 7)],
                        h = new a(0, 0, 0, 0);
                    this.Va.$a(this.Tb.length, b, h);
                    c.width =
                        b.B * this.size;
                    c.height = b.M * this.size
                }
            })
        }(function(b, c, e, a) {
            return b.extend({
                init: function(a, c) {
                    this.h(a, c);
                    this.Va.bg = [];
                    this.Va.Aj = []
                },
                eh: function(b) {
                    this.h(b);
                    b.b = 0;
                    b.Qq = c.dc(this.Aa + this.$x * e.vb());
                    b = this.Tb.length;
                    this.Va.bg[b] = 0;
                    this.Va.Aj[b] = new a(0, 0)
                },
                SA: function(a, c, b, e, k) {
                    a.x = a.x - e;
                    a.y = a.y - k;
                    var l = a.x * b + a.y * c;
                    a.x = a.x * c - a.y * b + e;
                    a.y = l + k
                },
                Jn: function(a, c, b) {
                    this.h(a, c, b);
                    a.b = a.b + a.Qq * b;
                    this.Va.bg[c] = a.b;
                    this.Va.Aj[c].ba(a.a)
                },
                mn: function(a) {
                    this.Va.bg.splice(a, 1);
                    this.Va.Aj.splice(a, 1);
                    this.h(a)
                }
            })
        }(Rb,
            za, Sa, S), X, Sa, U),
        Tb = function(b, c, e, a, d) {
            return b.extend({
                init: function(b) {
                    this.h();
                    var h = new c;
                    h.na(a.tg);
                    h.Ky(0, 2, 1);
                    h.width = b + e.kk;
                    b = h.Zv();
                    this.ie(new d(b))
                }
            })
        }(ub, Gb, X, r, Ga),
        Ub = function(b, c, e, a, d) {
            return b.extend({
                init: function(a, b, d) {
                    this.h(a, b);
                    this.b = d;
                    this.Ql = 10;
                    this.speed = c.Xk;
                    this.uc = 0.6;
                    this.size = 0.0020;
                    this.Mi = 100;
                    this.zc.z = 1;
                    this.zc.F = 1;
                    this.zc.D = 1;
                    this.zc.r = 0.6;
                    this.tc.z = 1;
                    this.tc.F = 1;
                    this.tc.D = 1;
                    this.tc.r = 0
                },
                eh: function(b) {
                    this.h(b);
                    var e = this.Am.d[d.gb(6, 8)],
                        g = new a(0, 0, 0, 0);
                    this.Va.$a(this.Tb.length,
                        e, g, 1);
                    e = c.Wk;
                    b.width = e;
                    b.height = e
                },
                pt: function(a, c) {
                    a.dir.multiply(0.9);
                    var b = e.multiply(a.dir, c);
                    b.add(this.Ed);
                    a.a.add(b)
                }
            })
        }(Rb, X, S, U, Sa),
        Vb = function(b, c, e, a, d, f, h) {
            function g(a, c) {
                this.Gv = a;
                this.es = c
            }
            var k = b.extend({
                init: function(c, b) {
                    this.h();
                    this.rows = c;
                    this.Ke = b;
                    this.Lg = a.qb;
                    this.Kg = a.cb;
                    this.Zm = 1;
                    this.Ad = [];
                    this.rd = [];
                    this.Fm = [];
                    for (var e = 0; e < b; e++)
                        for (var h = this.Fm[e] = [], g = 0; g < c; g++) h[g] = d.c;
                    this.Eh = this.Fh = k.oc.NONE;
                    this.zz = this.kw = p;
                    this.hs = f.gb(1E3, 2E3)
                },
                Vu: function(a, b) {
                    if (b === d.c) {
                        this.lf =
                            a.bh;
                        this.kf = a.ah
                    } else {
                        var e = a.d[b];
                        this.lf = e.B;
                        this.kf = e.M
                    }
                    this.Kn();
                    for (var e = d.c, f = 0, k = this.Ad.length; f < k; f++)
                        if (this.Ad[f].C === a) {
                            e = f;
                            break
                        }
                    if (e === d.c) {
                        f = new c(a);
                        e = this.Ad.length;
                        this.Ad.push(f)
                    }
                    this.rd.push(new g(e, b))
                },
                Kn: function() {
                    this.Gm = 2 + Math.floor(this.Lg / (this.lf + 1));
                    this.Hm = 2 + Math.floor(this.Kg / (this.kf + 1));
                    if (this.Fh === k.oc.NONE) this.Hm = Math.min(this.Hm, this.rows);
                    if (this.Eh === k.oc.NONE) this.Gm = Math.min(this.Gm, this.Ke);
                    this.width = this.Qh = this.Ke * this.lf;
                    this.height = this.Ph = this.rows *
                        this.kf
                },
                fill: function(a, c, b, d, e) {
                    for (var f = c, c = c + d; f < c; f++)
                        for (var d = a, k = a + b; d < k; d++) this.Fm[f][d] = e
                },
                ZA: fa("Zm"),
                Dy: function(a) {
                    this.Eh = a;
                    this.Kn()
                },
                Ey: function(a) {
                    this.Fh = a;
                    this.Kn()
                },
                qt: function(a) {
                    var c = Math.round(a.x / this.Zm),
                        b = Math.round(a.y / this.Zm),
                        f = this.x,
                        g = this.y,
                        m, w, q;
                    if (this.Fh !== k.oc.NONE) {
                        g = g - b;
                        m = Math.floor(g) % this.Ph;
                        g = g < 0 ? m + b : m - this.Ph + b
                    }
                    if (this.Eh !== k.oc.NONE) {
                        f = f - c;
                        m = Math.floor(f) % this.Qh;
                        f = f < 0 ? m + c : m - this.Qh + c
                    }
                    if (e.Ch(c, b, c + this.Lg, b + this.Kg, f, g, f + this.Qh, g + this.Ph)) {
                        m = e.js(f,
                            g, this.Qh, this.Ph, c, b, this.Lg, this.Kg);
                        m = new h(Math.max(0, m.x), Math.max(0, m.y));
                        m = new h(Math.floor(Math.floor(m.x) / this.lf), Math.floor(Math.floor(m.y) / this.kf));
                        var g = g + m.y * this.kf,
                            u = new h(f + m.x * this.lf, g),
                            f = 0;
                        for (w = this.Ad.length; f < w; f++) this.Ad[f].jj = 0;
                        w = m.x + this.Gm - 1;
                        var j = m.y + this.Hm - 1;
                        this.Fh === k.oc.NONE && (j = Math.min(this.rows - 1, j));
                        this.Eh === k.oc.NONE && (w = Math.min(this.Ke - 1, w));
                        for (f = m.x; f <= w; f++) {
                            u.y = g;
                            for (var z = m.y; z <= j; z++) {
                                if (u.y >= b + this.Kg) break;
                                var J = e.js(c, b, this.Lg, this.Kg, u.x, u.y, this.lf,
                                        this.kf),
                                    G = new e(c - u.x + J.x, b - u.y + J.y, J.B, J.M),
                                    I = Math.round(f),
                                    B = Math.round(z);
                                this.Fh === k.oc.to && (u.y < y ? B = 0 : u.y >= this.y + this.Ph && (B = this.rows - 1));
                                this.Eh === k.oc.to && (u.x < this.x ? I = 0 : u.x >= this.x + this.Qh && (I = this.Ke - 1));
                                if (this.kw) {
                                    q = Math.sin(u.x) * this.hs;
                                    I = Math.abs(Math.floor(q) % this.Ke)
                                }
                                if (this.zz) {
                                    q = Math.sin(u.y) * this.hs;
                                    B = Math.abs(Math.floor(q) % this.rows)
                                }
                                I >= this.Ke && (I = I % this.Ke);
                                B >= this.rows && (B = B % this.rows);
                                q = this.Fm[I][B];
                                if (q >= 0) {
                                    I = this.rd[q];
                                    q = this.Ad[I.Gv];
                                    B = q.C;
                                    if (I.es !== d.c) {
                                        I = B.d[I.es];
                                        G.x = G.x + I.x;
                                        G.y = G.y + I.y
                                    }
                                    J = new e(a.x + J.x, a.y + J.y, J.B, J.M);
                                    q.$a(q.jj++, G, J)
                                }
                                u.y = u.y + this.kf
                            }
                            u.x = u.x + this.lf;
                            if (u.x >= c + this.Lg) break
                        }
                    }
                },
                p: function() {
                    this.yc();
                    for (var a = 0, c = this.Ad.length; a < c; a++) this.Ad[a].p();
                    this.xc()
                }
            });
            k.oc = {
                NONE: 0,
                vt: 1,
                to: 2
            };
            return k
        }(tb, Fb, U, X, T, Sa, S),
        Wb = function(b, c) {
            return b.extend({
                init: function(b, a) {
                    this.h(b, a);
                    this.qr = c.th()
                },
                qt: function(c) {
                    if (!this.qr.Qi(c)) {
                        this.h(c);
                        this.qr.ba(c)
                    }
                },
                p: function() {
                    this.h()
                }
            })
        }(Vb, S),
        Xb = function(b, c, e) {
            return c.extend({
                init: function(a, c, b) {
                    this.h(a,
                        c, b)
                },
                By: function(a, c, f) {
                    var h, g, k, l, s = b.ri;
                    if (a[0] === "R") {
                        h = a[1] === "C";
                        a = parseInt(a.substr(2), 10);
                        a = a * s;
                        s = a / 2;
                        l = 2 * Math.PI / s;
                        var o = 0;
                        h || (l = -l);
                        for (h = 0; h < s; h++) {
                            g = c + a * Math.cos(o);
                            k = f + a * Math.sin(o);
                            this.Af(new e(g, k));
                            o = o + l
                        }
                    } else {
                        this.Af(new e(c, f));
                        a[a.length - 1] === "," && (a = a.substr(0, a.length - 1));
                        o = a.split(",");
                        g = o.length;
                        for (h = 0; h < g; h = h + 2) {
                            a = o[h];
                            l = o[h + 1];
                            this.Af(new e(c + a * s, f + l * s))
                        }
                    }
                }
            })
        }(X, Ya, S),
        Yb = function(b, c, e, a) {
            return b.extend({
                init: function() {
                    this.h()
                },
                af: function(b) {
                    this.rotation = b.b || 0;
                    var f =
                        b.path,
                        h = e.ri;
                    if (f) {
                        var g = a.ep;
                        if (f[0] === "R") {
                            g = parseInt(f.substr(2), 10);
                            g = Math.round(g * h / 2 + 1)
                        }
                        b = new c(g, b.pa * h, b.Aa);
                        b.b = this.rotation;
                        b.By(f, this.x, this.y);
                        this.sn(b);
                        b.start()
                    }
                }
            })
        }(Ib, Xb, X, Ya),
        Zb = function(b, c, e, a, d, f, h, g) {
            return b.extend({
                init: function(b, d, s, o) {
                    this.h();
                    this.Ls = this.b = 0;
                    this.Ba = c.Pa();
                    this.Ia = c.Pa();
                    this.wa = c.Pa();
                    this.xa = c.Pa();
                    var t = f.c;
                    if (s === 1) t = h.wk;
                    else if (s === 2) t = h.xk;
                    this.na(t);
                    this.rotation = o;
                    this.x = b;
                    this.y = d;
                    this.Pb();
                    this.Kc(this.ad(0.04, g.fa.Ta, 0, 4)).m(e.Ww(this, a.ti))
                },
                Pb: function() {
                    this.Ba.x = this.x - this.width / 2;
                    this.Ia.x = this.x + this.width / 2;
                    this.Ba.y = this.Ia.y = this.y - 5;
                    this.wa.x = this.Ba.x;
                    this.xa.x = this.Ia.x;
                    this.wa.y = this.xa.y = this.y + 5;
                    this.b = d.dc(this.rotation);
                    this.Ba.la(this.b, this.x, this.y);
                    this.Ia.la(this.b, this.x, this.y);
                    this.wa.la(this.b, this.x, this.y);
                    this.xa.la(this.b, this.x, this.y)
                },
                update: function(a) {
                    this.h(a);
                    this.Oa && this.Pb()
                }
            })
        }(Yb, S, Da, Ba, za, T, r, Fa),
        $b = function(b, c, e, a, d, f, h, g, k) {
            var l = b.extend({
                init: function() {
                    this.h();
                    this.b = this.group = 0;
                    this.Ba =
                        new h(0, 0);
                    this.Ia = new h(0, 0);
                    this.wa = new h(0, 0);
                    this.xa = new h(0, 0);
                    this.Xi = 0
                },
                cm: function() {
                    this.Kb = new c;
                    this.Kb.na(e.pi);
                    this.Kb.anchor = a.rf | a.Dc;
                    this.Kb.ma = a.Qb | a.Dc;
                    this.Kb.y = f.Al;
                    this.Kb.x = 0;
                    this.Kb.Eg(0, 0.05, d.fa.Ta, 4, [l.wf.qi, l.wf.qi + 1, l.wf.qi + 2, l.wf.qi + 2]);
                    this.Kb.ta();
                    this.Kb.J = p;
                    this.N(this.Kb)
                },
                Pb: function() {
                    this.Ba.x = this.x - f.xi / 2;
                    this.Ia.x = this.x + f.xi / 2;
                    this.Ba.y = this.Ia.y = this.y;
                    this.wa.x = this.Ba.x;
                    this.xa.x = this.Ia.x;
                    this.wa.y = this.xa.y = this.y + f.Bl;
                    this.b = k.dc(this.rotation);
                    this.Ba.la(this.b,
                        this.x, this.y);
                    this.Ia.la(this.b, this.x, this.y);
                    this.wa.la(this.b, this.x, this.y);
                    this.xa.la(this.b, this.x, this.y)
                },
                p: function() {
                    var a = this.Kb.Ab;
                    if (a && a.state === d.U.Bg) this.Kb.J = p;
                    this.h()
                },
                Rg: ca(),
                update: function(a) {
                    this.h(a);
                    this.Oa && this.Pb()
                }
            });
            l.wf = {
                Xt: 0,
                Yt: 1,
                qi: 2,
                Oz: 3,
                Nz: 4
            };
            l.U = {
                nu: 0,
                Gu: 1,
                IDLE: 2
            };
            l.Bt = 0.8;
            return l
        }(Yb, wb, r, ua, Fa, X, S, Ya, za, sb),
        ac = function(b, c, e, a, d, f, h, g, k, l, s) {
            return b.extend({
                init: function() {
                    this.h();
                    this.timeout = this.time = 0;
                    this.Ac = n;
                    this.Fa = 1.0E-4
                },
                cm: function() {
                    var b;
                    if (this.timeout >
                        0) {
                        this.Ac = new c;
                        this.Ac.na(e.Xc);
                        this.Ac.anchor = this.Ac.ma = a.R;
                        this.Ac.tb(0, this.timeout / 37, d.fa.Ta, 19, 55);
                        this.Ac.P(0);
                        this.time = this.timeout;
                        this.Ac.J = p;
                        this.N(this.Ac);
                        b = new d;
                        b.m(f.ua(h.kb.copy(), f.l.LINEAR, 0));
                        b.m(f.ua(h.Gb.copy(), f.l.LINEAR, 0.5));
                        this.Ac.Jb(b, 1);
                        b = new d;
                        b.m(f.ej(1, 1, f.l.LINEAR, 0));
                        b.m(f.ej(0, 0, f.l.LINEAR, 0.25));
                        b.m(f.ua(h.kb.copy(), f.l.LINEAR, 0));
                        b.m(f.ua(h.Gb.copy(), f.l.LINEAR, 0.25));
                        this.Jb(b, 1)
                    }
                    this.Z = g.copy(s.Gl);
                    b = new d;
                    b.m(f.Na(this.x, this.y, f.l.wd, 0));
                    b.m(f.Na(this.x,
                        this.y - 3, f.l.Hb, 0.5));
                    b.m(f.Na(this.x, this.y, f.l.wd, 0.5));
                    b.m(f.Na(this.x, this.y + 3, f.l.Hb, 0.5));
                    b.m(f.Na(this.x, this.y, f.l.wd, 0.5));
                    b.cj = d.fa.Ib;
                    this.Jb(b, 0);
                    this.P(0);
                    b.update(k.gb(0, 20) / 10);
                    b = new c;
                    b.na(e.Xc);
                    b.ta();
                    b.ad(0.05, d.fa.Ib, 1, 18);
                    b.P(0);
                    b.Kc(0).update(k.gb(0, 20) / 10);
                    b.anchor = b.ma = a.R;
                    b.Fa = 1.0E-4;
                    this.N(b)
                },
                update: function(a) {
                    if (this.timeout > 0 && this.time > 0) this.time = l.Xe(this.time, 0, 1, a);
                    this.h(a)
                },
                p: function() {
                    this.Ac && this.Ac.p();
                    this.h()
                }
            })
        }(Yb, wb, r, ua, Fa, Da, ta, U, Sa, Ya, X),
        bc = function(b,
            c, e, a, d, f, h, g, k) {
            b = b.extend({
                init: function(b, k, g, h, x, m, w) {
                    this.h();
                    this.kn = 0;
                    this.jn = 30;
                    this.lineWidth = e.no;
                    this.width = e.oo;
                    this.Bb = a.c;
                    this.Zd = 0;
                    this.$g = p;
                    this.Ja = e.Ja;
                    this.Ya = b != n ? b : new c;
                    if (h != n) this.hb = h;
                    else {
                        this.hb = new c;
                        this.hb.pd(1)
                    }
                    this.Ya.pd(0.02);
                    this.Ya.a.x = k;
                    this.Ya.a.y = g;
                    this.hb.a.x = x;
                    this.hb.a.y = m;
                    this.pq(this.Ya);
                    this.pq(this.hb);
                    this.hb.Je(this.Ya, this.Ja, d.bi);
                    b = f.bb(this.hb.a, this.Ya.a);
                    k = Math.round(w / this.Ja + 2);
                    b.gm(k);
                    this.qs(w, b);
                    this.Lf = p;
                    this.je = a.c;
                    this.vq = this.zv = this.lr =
                        this.Mg = p;
                    this.Ne = [];
                    this.Yh = e.Yh
                },
                hd: function() {
                    var a = 0,
                        b = this.ya,
                        c = b.length;
                    if (c > 0)
                        for (var d = b[0].a, e = 1; e < c; e++) var f = b[e],
                            a = a + d.Ga(f.a),
                            d = f.a;
                    return a
                },
                qs: function(a, b) {
                    b == n && (b = f.Pa());
                    for (var e = this.ya, k = e[e.length - 2], g = this.hb, h = g.od(k), w = n; a > 0;)
                        if (a >= this.Ja) {
                            k = e[e.length - 2];
                            w = new c;
                            w.pd(0.02);
                            w.a = f.add(k.a, b);
                            this.qq(w, this.ya.length - 1);
                            g.Iq(k, w, h);
                            w.Je(k, this.Ja, d.bi);
                            a = a - this.Ja
                        } else {
                            w = a + h;
                            if (w > this.Ja) {
                                a = this.Ja;
                                h = w - this.Ja
                            } else {
                                k = e[e.length - 2];
                                g.Ei(k, w);
                                a = 0
                            }
                        }
                },
                Yx: function(a) {
                    for (var b =
                            this.ya, c = b.length, e = this.hb, f = e.od(b[c - 2]), k; a > 0;)
                        if (a >= this.Ja) {
                            var g = c - 2,
                                h = b[c - 3];
                            k = b[g];
                            e.Iq(k, h, f);
                            this.Px(g);
                            c--;
                            a = a - this.Ja
                        } else {
                            g = f - a;
                            if (g < 1) {
                                a = this.Ja;
                                f = this.Ja + g + 1
                            } else {
                                k = b[c - 2];
                                e.Ei(k, g);
                                a = 0
                            }
                        }
                    b = (c - 1) * (this.Ja + 3);
                    e = e.Rb;
                    c = e.length;
                    for (f = 0; f < c; f++) {
                        k = e[f];
                        if (k.type === d.si) k.od = b
                    }
                    return a
                },
                bB: function() {
                    for (var b = this.ya, c = b.length, e = 0; e < c; e++) {
                        var f = b[e];
                        if (this.Ya.Oc.x != a.c) {
                            f != this.hb && f.pd(0.5);
                            e > 0 && f.Je(this.Ya, e * (this.Ja + 3), d.si)
                        }
                    }
                },
                update: function(a) {
                    if (this.Zd > 0) {
                        this.Zd = k.Xe(this.Zd,
                            0, 1, a);
                        this.Zd < 1.95 && this.Lf && this.ms(this.Bb)
                    }
                    for (var b = this.ya, c = b.length, d = this.jn, e = 0; e < c; e++) {
                        var f = b[e];
                        f !== this.hb && f.Jx(a)
                    }
                    for (e = 0; e < d; e++)
                        for (a = 0; a < c; a++) b[a].Cj()
                },
                ms: function(a) {
                    this.Lf = p;
                    var b = this.ya,
                        e = b[a],
                        f = b[a + 1];
                    if (f)
                        for (var k = f.Rb, g = k.length, h = 0; h < g; h++) {
                            if (k[h].Hc === e) {
                                f.Nx(h);
                                k = new c;
                                k.pd(1.0E-5);
                                k.a.ba(f.a);
                                k.ka.ba(f.ka);
                                this.qq(k, a + 1);
                                k.Je(e, this.Ja, d.bi);
                                break
                            }
                        } else e.ls();
                    a = 0;
                    for (e = b.length; a < e; a++) {
                        f = b[a];
                        f != this.hb && f.pd(1.0E-5)
                    }
                },
                rn: function(a) {
                    this.Bb = a;
                    this.Zd = 2;
                    this.Lf =
                        i;
                    this.$g = p
                },
                p: function() {
                    var b = this.ya,
                        c = b.length,
                        d = h.context,
                        e, f, k;
                    h.Jy("rgba(0,0,102,1)");
                    d.lineWidth = this.lineWidth;
                    if (this.Bb === a.c) {
                        f = Array(c);
                        for (e = 0; e < c; e++) f[e] = b[e].a;
                        this.im(f)
                    } else {
                        var g = [],
                            q = [],
                            u = p;
                        for (e = 0; e < c; e++) {
                            f = b[e];
                            var j = i;
                            if (e > 0) {
                                k = b[e - 1];
                                f.jw(k) || (j = p)
                            }
                            f.Oc.x === a.c && !j && (u = i);
                            u ? q.push(f.a) : g[e] = f.a
                        }
                        g.length > 0 && this.im(g);
                        q.length > 0 && !this.lr && this.im(q)
                    }
                    d.lineWidth = 1
                },
                im: function(b) {
                    var c = b.length,
                        d = this.Yh;
                    if (!(c < 2)) {
                        var e = this.Bb === a.c || this.Lf ? 1 : this.Zd / 1.95,
                            k = new g(0, 0, 0,
                                e),
                            m = new g(0.475, 0.305, 0.185, e),
                            w = new g(0.19, 0.122, 0.074, e),
                            q = this.vq ? k : new g(152 / 225, 0.44, 62 / 225, e),
                            k = this.vq ? k : new g(0.304, 0.198, 0.124, e);
                        if (this.$g) {
                            m.z = m.z * 3;
                            m.F = m.F * 3;
                            m.D = m.D * 3;
                            q.z = q.z * 3;
                            q.F = q.F * 3;
                            q.D = q.D * 3;
                            w.z = w.z * 3;
                            w.F = w.F * 3;
                            w.D = w.D * 3;
                            k.z = k.z * 3;
                            k.F = k.F * 3;
                            k.D = k.D * 3
                        }
                        var u = b[0],
                            j = b[1],
                            u = (new f(u.x, u.y)).Ga(new f(j.x, j.y));
                        this.kn = u <= this.Ja + 0.3 ? 0 : u <= this.Ja + 1 ? 1 : u < this.Ja + 4 ? 2 : 3;
                        if (!(c < 3)) {
                            if (u > this.Ja + 7 && !this.zv) {
                                u = u / this.Ja * 2;
                                w.z = w.z * u;
                                k.z = k.z * u
                            }
                            var u = p,
                                c = (c - 1) * d,
                                z, J = c - 1,
                                d = (m.z - w.z) / J,
                                j = (m.F -
                                    w.F) / J,
                                m = (m.D - w.D) / J,
                                G = (q.z - k.z) / J,
                                I = (q.F - k.F) / J,
                                q = (q.D - k.D) / J,
                                J = this.Yh - 1,
                                B = J - 1,
                                K = h.context,
                                V = K.globalAlpha;
                            K.lineJoin = "round";
                            K.lineWidth = this.lineWidth;
                            K.globalAlpha = e;
                            this.Ne[0] = b[0].copy();
                            for (e = 1; e <= c; e++) {
                                z = f.Fq(b, e / c);
                                this.Ne[e] = z;
                                z = (e - 1) % J;
                                if (z === B || e === c) {
                                    K.beginPath();
                                    K.strokeStyle = this.Lf ? g.Dn.Dl : u ? w.Hh() : k.Hh();
                                    var M = e - z - 1,
                                        H = this.Ne[M++];
                                    for (K.moveTo(H.x, H.y); M <= e; M++) {
                                        H = this.Ne[M];
                                        K.lineTo(H.x, H.y)
                                    }
                                    K.stroke();
                                    K.closePath();
                                    u = !u;
                                    z = z + 1;
                                    w.z = w.z + d * z;
                                    w.F = w.F + j * z;
                                    w.D = w.D + m * z;
                                    k.z = k.z + G * z;
                                    k.F =
                                        k.F + I * z;
                                    k.D = k.D + q * z
                                }
                            }
                            K.globalAlpha = V
                        }
                    }
                }
            });
            b.wt = 30;
            return b
        }(cb, gb, X, T, db, S, sb, ta, Ya),
        cc = function(b, c, e, a, d, f, h, g, k, l) {
            function s() {
                this.y = this.x = 0;
                this.Ni = this.An = this.alpha = this.Pi = this.Qj = this.aa = this.Oi = this.Pj = this.Q = 1
            }
            return b.extend({
                init: function() {
                    this.h();
                    var a = f.Dd(e.Ck);
                    this.fs = a.bh;
                    this.ds = a.ah;
                    this.Va = new d(a);
                    this.Va.Fa = 0.1;
                    this.pj = []
                },
                Tu: function(a, b) {
                    var c, d, e = [0.3, 0.3, 0.5, 0.5, 0.6],
                        e = c = e[g.gb(0, e.length - 1)];
                    g.Lx() ? c = c * (1 + g.gb(0, 1) / 10) : e = e * (1 + g.gb(0, 1) / 10);
                    c = 1 * c;
                    d = 1 * e;
                    var f = this.fs *
                        c,
                        k = this.ds * d,
                        j = Math.min(1 - c, 1 - d),
                        h = Math.random(),
                        e = new s;
                    e.LA = b;
                    e.x = a.x;
                    e.y = a.y;
                    e.Pj = j + c;
                    e.Qj = j + d;
                    e.Q = e.Pj * h;
                    e.aa = e.Qj * h;
                    e.Oi = c;
                    e.Pi = d;
                    e.Ni = 0.3;
                    e.An = 1;
                    e.alpha = 0.7 * h + 0.3;
                    c = this.Va.C.d[0];
                    f = new l(a.x - f / 2, a.y - k / 2, f, k);
                    this.Va.$a(this.pj.length, c, f, e.alpha);
                    this.pj.push(e)
                },
                $q: function(a, b, d) {
                    var e = k.Rk,
                        f = d.Oa.path[a],
                        b = c.bb(d.Oa.path[b], f),
                        d = Math.floor(b.hd() / e),
                        h = k.Qk,
                        l, j;
                    b.normalize();
                    for (l = 0; l <= d; l++) {
                        j = c.add(f, c.multiply(b, l * e));
                        j.x = j.x + g.gb(-h, h);
                        j.y = j.y + g.gb(-h, h);
                        this.Tu(j, a)
                    }
                },
                update: function(a) {
                    this.h(a);
                    this.Va.update(a);
                    var b = this.pj.length,
                        c, d, e, f;
                    for (c = 0; c < b; c++) {
                        d = this.pj[c];
                        e = h.md(d.Q, d.Oi, 1, a);
                        d.Q = e.value;
                        if (e.nd) {
                            e = d.Pj;
                            d.Pj = d.Oi;
                            d.Oi = e
                        }
                        e = h.md(d.aa, d.Pi, 1, a);
                        d.aa = e.value;
                        if (e.nd) {
                            e = d.Qj;
                            d.Qj = d.Pi;
                            d.Pi = e
                        }
                        e = this.fs * d.Q;
                        f = this.ds * d.aa;
                        this.Va.xe[c] = new l(d.x - e / 2, d.y - f / 2, e, f);
                        e = h.md(d.alpha, d.Ni, 1, a);
                        d.alpha = e.value;
                        if (e.nd) {
                            e = d.An;
                            d.An = d.Ni;
                            d.Ni = e
                        }
                        this.Va.Df[c] = d.alpha
                    }
                },
                p: function() {
                    this.yc();
                    this.Va.p();
                    this.xc()
                }
            })
        }(tb, S, r, ub, Fb, Mb, Ya, Sa, X, U),
        dc = function(b, c, e, a, d, f, h, g, k) {
            var l = 7 * f.G,
                s = 3 *
                f.G,
                o = 22.5 * f.G,
                t = 0.03 * f.G,
                x = e.extend({
                    init: function() {
                        this.h();
                        this.na(a.kc);
                        this.$a(u)
                    }
                }),
                m = b.extend({
                    init: function() {
                        this.h();
                        this.Gc = [];
                        this.zd = [];
                        this.yn = c.c;
                        this.qh = h.th();
                        this.Nd = new x;
                        this.Nd.anchor = d.xf | d.zf;
                        this.Nd.Q = 1;
                        this.Nd.ma = d.R;
                        this.Nd.Kd = this.Nd.width / 2 + 0.5;
                        this.Nd.Fa = 0.0010;
                        this.Od = new x;
                        this.Od.Q = -1;
                        this.Od.anchor = d.xf | d.zf;
                        this.Od.ma = d.R;
                        this.Od.Kd = this.Od.width / 2 - 0.5;
                        this.Od.Fa = 0.0010;
                        this.qf = e.create(a.kc, j);
                        this.qf.anchor = d.R;
                        this.Zb = e.create(a.kc, q);
                        this.Zb.anchor = d.Qb | d.xf;
                        this.ye = e.create(a.kc, q);
                        this.ye.Q = -1;
                        this.ye.anchor = d.Qb | d.rb;
                        this.pb = e.create(a.kc, J);
                        this.pb.anchor = d.R;
                        this.pb.rotation = 90;
                        this.ic = e.create(a.kc, J);
                        this.ic.anchor = d.R;
                        this.ic.rotation = -90;
                        this.Bc = e.create(a.kc, z);
                        this.Bc.anchor = this.pb.anchor;
                        this.Bc.rotation = this.pb.rotation;
                        this.Bc.J = p;
                        this.Cc = e.create(a.kc, z);
                        this.Cc.anchor = this.ic.anchor;
                        this.Cc.rotation = this.ic.rotation;
                        this.Cc.J = p;
                        this.pf = e.create(a.kc, w);
                        this.pf.anchor = d.R;
                        this.xh = p;
                        this.N(this.Nd);
                        this.N(this.Od);
                        this.N(this.Bc);
                        this.N(this.Cc);
                        this.N(this.pb);
                        this.N(this.ic)
                    },
                    setSize: function(a) {
                        this.size = a;
                        var b = this.size / 167;
                        this.Zb.Q = this.Zb.aa = this.ye.aa = b;
                        this.ye.Q = -b;
                        this.pf.Q = this.pf.aa = b;
                        a = b >= 0.4 ? b : 0.4;
                        this.Nd.Q = this.Nd.aa = this.Od.aa = a;
                        this.Od.Q = -a;
                        b = b >= 0.75 ? b : 0.75;
                        this.pb.Q = this.pb.aa = this.ic.Q = this.ic.aa = b;
                        this.Bc.Q = this.Bc.aa = this.Cc.Q = this.Cc.aa = b;
                        this.qf.Q = 1 - (1 - a) * 0.5;
                        this.qf.aa = this.qf.Q;
                        this.Nb = this.Zb.width * this.Zb.Q;
                        this.rz()
                    },
                    kr: function() {
                        return !this.pb.J
                    },
                    vs: function(a) {
                        this.pb.J = !a
                    },
                    BA: function() {
                        return this.Bc.J
                    },
                    ws: function(a) {
                        this.Bc.J = a
                    },
                    CA: function() {
                        return this.Cc.J
                    },
                    xs: function(a) {
                        this.Cc.J = a
                    },
                    nv: function() {
                        var a = this.zd.length,
                            b, c;
                        for (b = 0; b < a; b++) {
                            c = this.zd[b];
                            if (c != this && this.ov(c)) return i
                        }
                        return p
                    },
                    p: function() {
                        var a = k.context;
                        if (this.Cc.J || this.Bc.J) {
                            var b = (s + f.G) * this.pb.Q,
                                c = this.Nb + Math.floor(b / 2);
                            a.beginPath();
                            a.lineWidth = b;
                            a.arc(this.x, this.y, c, 0, 2 * Math.PI, p);
                            a.stroke()
                        }
                        this.Zb.color = this.color;
                        this.ye.color = this.color;
                        this.pb.color = this.color;
                        this.ic.color = this.color;
                        this.pf.color = this.color;
                        this.pf.p();
                        var b = this.zd.length,
                            d, j = this.zd.indexOf(this),
                            e = a.globalAlpha;
                        if (e !== 0.2) a.globalAlpha = 0.2;
                        for (c = 0; c < b; c++) {
                            d = this.zd[c];
                            d != this && d.nv() && this.zd.indexOf(d) < j && this.Bv(this.x, this.y, this.Nb, d.x, d.y, d.Nb, l * d.Zb.Q * 0.5)
                        }
                        if (e !== 0.2) a.globalAlpha = e;
                        this.Zb.p();
                        this.ye.p();
                        this.h();
                        this.qf.p()
                    },
                    Bv: function(a, b, c, d, j, e, f) {
                        var g = h.Ga(a, b, d, j);
                        if (!(g >= c + e || c >= g + e)) {
                            c = Math.acos((g - (c * c - e * e + g * g) / (2 * g)) / e);
                            g = (new h(a - d, b - j)).b();
                            b = g - c;
                            c = g + c;
                            if (d > a) {
                                b = b + Math.PI;
                                c = c + Math.PI
                            }
                            a = k.context;
                            a.beginPath();
                            a.lineWidth = f;
                            a.arc(d, j, e, b, c, p);
                            a.stroke()
                        }
                    },
                    rz: function() {
                        this.pf.x = this.qf.x = this.x;
                        this.pf.y = this.qf.y = this.y;
                        var a = this.Zb.width / 2 * (1 - this.Zb.Q),
                            b = this.Zb.height / 2 * (1 - this.Zb.aa),
                            c = this.Nb - (o - t * this.size) + (1 - this.pb.Q) * (this.pb.width / 2);
                        this.Zb.x = this.x + a;
                        this.ye.x = this.x - a;
                        this.Zb.y = this.ye.y = this.y - b;
                        this.pb.x = this.x - c;
                        this.ic.x = this.x + c;
                        this.pb.y = this.ic.y = this.y;
                        this.Bc.x = this.pb.x;
                        this.Bc.y = this.pb.y;
                        this.Cc.x = this.ic.x;
                        this.Cc.y = this.ic.y
                    },
                    ov: function(a) {
                        if (this.x === a.x && this.y === a.y &&
                            this.size === a.size) return p;
                        var b = this.Gc.length,
                            c;
                        for (c = 0; c < b; c++)
                            if (a.Gc.indexOf(this.Gc[c]) >= 0) return i;
                        return p
                    },
                    copy: function(a) {
                        var b = new m;
                        b.iB = a;
                        b.x = this.x;
                        b.y = this.y;
                        b.rotation = this.rotation;
                        b.zd = this.zd;
                        b.Gc = this.Gc;
                        b.wh = c.c;
                        var a = this.size * f.G,
                            d = g.dc(b.rotation);
                        b.Pf = new h(b.x - a, b.y);
                        b.jd = new h(b.x + a, b.y);
                        b.Pf.la(d, b.x, b.y);
                        b.jd.la(d, b.x, b.y);
                        b.setSize(this.size);
                        b.vs(this.kr());
                        b.pb.J = p;
                        b.ic.J = p;
                        return b
                    }
                }),
                w = 0,
                q = 1,
                u = 2,
                j = 3,
                z = 4,
                J = 5;
            return m
        }(tb, T, ub, r, ua, X, S, za, sb),
        ec = function(b, c, e, a,
            d) {
            var f = b.extend({
                init: function() {
                    this.h()
                },
                p: function() {
                    for (var b = this.children, g = b.length, k = 0; k < g; k++) {
                        var l = b[k];
                        l.J && l.p()
                    }
                    g = this.fb(f.Tc.Uc);
                    if (g.Me > 0) {
                        b = g.Me / d.gk;
                        g.sw() && (b = 1 - b);
                        g = a.context;
                        b = new e(1, 1, 1, b);
                        g.fillStyle = b.Hh();
                        g.fillRect(0, 0, c.qb, c.cb)
                    }
                },
                show: function() {
                    this.h();
                    var a = this.fb(f.Tc.Uc);
                    a.Yu && a.Xu()
                }
            });
            f.Tc = {
                Uc: 0,
                Tz: 1,
                Wz: 2,
                Rz: 3,
                Uz: 4,
                Xz: 5
            };
            return f
        }(function(b, c) {
            return b.extend({
                init: function() {
                    this.h();
                    this.width = c.qb;
                    this.height = c.cb
                }
            })
        }(tb, X), X, ta, sb, T),
        fc = function(b, c) {
            return {
                Za: function() {
                    var e =
                        c.He / c.qb;
                    if (e !== 1) {
                        b.py();
                        b.zoom = e;
                        b.mt()
                    }
                }
            }
        }(Nb, X),
        gc = function(b, c, e, a) {
            return b.extend({
                init: function(a, b) {
                    this.h();
                    this.na(e.uk);
                    this.$a(a);
                    this.Iv = b;
                    this.oe = p
                },
                vn: function() {
                    a.Ub(a.ia.ro, this.Iv)
                }
            })
        }(Ib, fc, r, ib),
        hc = function(b, c) {
            return {
                Tl: p,
                Nh: b.sm(),
                Vf: b.rm(),
                wc: n,
                Lj: function(b) {
                    return b.playState === 1 && !b.paused
                },
                Mj: function(b, a) {
                    var c = this;
                    b.play({
                        onfinish: function() {
                            !c.Tl && (a && c.Vf || !a && c.Nh) && c.Mj(b, a)
                        }
                    })
                },
                Wy: function(b) {
                    b.play()
                },
                Vy: function(b) {
                    b.pause()
                },
                Ms: function(b) {
                    b.stop()
                },
                Xy: function(b,
                    a) {
                    b.volume = a
                },
                H: function(b) {
                    var a = soundManager.getSoundById(b);
                    if (b) {
                        if (this.Nh && !this.Lj(a)) try {
                            this.Wy(a)
                        } catch (d) {
                            c.debug("Sound exception:" + d)
                        }
                    } else c.debug("No sound loaded:" + b)
                },
                Gx: function(b) {
                    var a = soundManager.getSoundById(b);
                    if (a) {
                        if (this.Nh && !this.Lj(a)) try {
                            this.Mj(a, p)
                        } catch (d) {
                            c.debug("Sound exception:" + d)
                        }
                    } else c.debug("No sound loaded:" + b)
                },
                bz: function(b) {
                    var a = soundManager.getSoundById(b);
                    if (a) try {
                        this.Ms(a)
                    } catch (d) {
                        c.debug("Sound" + d)
                    } else c.debug("No sound loaded:" + b)
                },
                an: function(b) {
                    var a =
                        soundManager.getSoundById(b);
                    this.wc && this.wc !== a && this.az();
                    if (a) {
                        this.wc = a;
                        if (this.Vf && !this.Lj(a)) try {
                            this.Xy(this.wc, 70);
                            this.Mj(this.wc, i)
                        } catch (d) {
                            c.debug("Sound exception:" + d)
                        }
                    } else c.debug("No sound loaded:" + b)
                },
                Cx: function() {
                    this.Tl = i;
                    this.yh()
                },
                yh: function() {
                    if (this.wc) try {
                        this.Vy(this.wc)
                    } catch (b) {
                        c.debug("Sound exception:" + b)
                    }
                },
                Wx: function() {
                    this.Tl = p;
                    this.nn()
                },
                nn: function() {
                    if (this.Vf && this.wc && !this.Lj(this.wc)) try {
                        this.Mj(this.wc, i)
                    } catch (b) {
                        c.debug("Sound exception:" + b)
                    }
                },
                az: function() {
                    if (this.wc) try {
                        this.Ms(this.wc)
                    } catch (b) {
                        c.debug("Sound exception:" +
                            b)
                    }
                },
                Fj: function(c) {
                    this.Vf = c;
                    b.Fj(c);
                    this.Vf ? this.nn() : this.yh()
                },
                Gj: function(c) {
                    this.Nh = c;
                    b.Gj(c)
                }
            }
        }(Lb, La),
        ic = function(b, c, e, a, d, f, h, g, k, l, s, o, t, x, m, w, q, u, j) {
            return b.extend({
                init: function() {
                    this.h();
                    this.oa = n;
                    this.n = this.lh = this.ke = this.gw = this.L = p;
                    this.og = g.c;
                    this.aj = f.Pa();
                    this.q = 0;
                    this.A = p;
                    this.w = 0;
                    this.ge = this.Re = this.Cb = n;
                    this.gj = this.hj = this.Ye = 0;
                    this.gg = this.Lc = p;
                    this.e = n;
                    this.hf = 0;
                    this.rr = this.Nn = this.Hj = p;
                    this.Ue = 0;
                    this.Zg = this.bj = p;
                    this.o = this.Bh = 0
                },
                bw: function(a, b, d) {
                    a = f.bb(a, d);
                    b =
                        f.bb(b, d).Wf() - a.Wf();
                    return c.kg(b)
                },
                iw: function(a, b) {
                    this.aj.x = a;
                    this.aj.y = b
                },
                hw: function(b) {
                    a.H(d.yl);
                    var c = new f(this.x, this.y),
                        c = this.bw(this.aj, b, c);
                    c > 180 ? c = c - 360 : c < -180 && (c = c + 360);
                    this.jc.rotation = this.jc.rotation + c;
                    this.ng.rotation = this.ng.rotation + c;
                    this.mg.rotation = this.mg.rotation + c;
                    c = c > 0 ? Math.min(Math.max(1, c), k.gi) : Math.max(Math.min(-1, c), -k.gi);
                    if (this.oa) {
                        c > 0 ? this.oa.hd() < k.lk && this.oa.qs(c) : c !== 0 && this.oa.ya.length > 3 && this.oa.Yx(-c);
                        this.Nn = i
                    }
                    this.aj.ba(b)
                },
                update: function(a) {
                    this.h(a);
                    if (this.rr && this.oa) {
                        var b = this.oa.Ya;
                        b.a.x = this.x;
                        b.a.y = this.y;
                        b.Oc.ba(b.a);
                        if (this.bj) {
                            b = h.md(this.Ue, 200, 30, a);
                            this.Ue = b.value;
                            if (b.nd) this.bj = p
                        } else {
                            b = h.md(this.Ue, 130, 30, a);
                            this.Ue = b.value;
                            if (b.nd) this.bj = i
                        }
                        this.Oa.yy(this.Ue)
                    }
                    if (this.Zg) {
                        this.Bh = this.Bh - 1.5 * a;
                        if (this.Bh <= 0) {
                            this.o = g.c;
                            this.Zg = p
                        }
                    }
                    if (this.xb) {
                        var b = f.bb(this.Oa.path[this.Oa.Pc], this.Oa.a),
                            c = 0;
                        Math.abs(b.x) > 15 && (c = b.x > 0 ? 10 : -10);
                        this.xb.rotation = h.Xe(this.xb.rotation, c, 60, a)
                    }
                    if (this.n && this.Nn && this.oa) {
                        a = this.oa.hd() * 0.7;
                        this.jc.Q =
                            a === 0 ? this.jc.aa = 0 : this.jc.aa = Math.max(0, Math.min(1.2, 1 - a / k.mk))
                    }
                },
                yz: function(b) {
                    if (this.Lc && this.Hj) {
                        this.Hj = p;
                        this.gg = i;
                        a.H(d.rl);
                        this.e.P(0)
                    }
                    if (this.Lc && this.gg) {
                        if (this.e.Gf !== 0) this.hf = this.hf + b * k.El;
                        var j = 0,
                            b = p;
                        if (this.oa)
                            for (var e = this.oa.Ne, h = k.Ja, l = 0, m = e.length; l < m; l++) {
                                var o = e[l],
                                    s = e[l + 1],
                                    q = Math.max(2 * h / 3, o.Ga(s));
                                if (this.hf >= j && (this.hf < j + q || l > m - 3)) {
                                    j = this.hf - j;
                                    s = f.bb(s, o);
                                    s.multiply(j / q);
                                    this.e.x = o.x + s.x;
                                    this.e.y = o.y + s.y;
                                    l > m - 3 && (b = i);
                                    if (this.e.Gf !== 0) this.e.rotation = c.kg(s.Wf()) + 270;
                                    break
                                } else j = j + q
                            }
                        if (b) this.hf = g.c
                    }
                },
                Av: function() {
                    if (!this.ke && !this.L) {
                        if (this.Tf && this.lh && this.oa) {
                            var a = this.oa.Ya.a;
                            this.x = a.x;
                            this.y = a.y
                        }
                        this.yc();
                        this.q > 0 ? this.Cb.p() : this.back.p();
                        if (this.o !== g.c || this.Zg) {
                            a = new m(0.4, 0.7, 1, this.Bh);
                            this.Tq(this.x, this.y, this.o !== g.c ? this.o : this.cs, a)
                        }
                    }
                },
                Tq: function(a, b, c, d) {
                    var j = x.context,
                        e = 2 * Math.PI,
                        f = Math.max(16, Math.round(c / (k.$b * 1.6)));
                    f % 2 !== 0 && f++;
                    j.lineWidth = 2;
                    j.strokeStyle = d.Hh();
                    for (var d = e / f, g = 0; g < f; g++)
                        if (g % 2 === 0) {
                            var h = g / f * e;
                            j.beginPath();
                            j.arc(a,
                                b, c, h, h + d, p);
                            j.stroke();
                            j.closePath()
                        }
                },
                Rg: function() {
                    this.n && this.Tq(this.x, this.y, k.Vc, m.red)
                },
                p: function() {
                    if (!this.ke) {
                        var a = this.oa;
                        if (this.n) {
                            this.mg.J = this.og !== g.c;
                            this.ng.J = this.og === g.c;
                            this.Vh.p()
                        }
                        if (this.L) {
                            this.uA.p();
                            this.gw || this.tA.p()
                        }
                        a && a.p();
                        this.q <= 0 ? this.gd.p() : this.Ye != g.c ? this.Re.p() : this.ge.p();
                        this.n && this.jc.p();
                        this.xc()
                    }
                },
                Ev: function() {
                    this.e.p()
                },
                lA: function() {
                    this.vA.p()
                },
                Cs: function(a) {
                    this.oa = a;
                    this.cs = this.o;
                    this.o = g.c;
                    if (this.Lc) this.Hj = i
                },
                WA: function() {
                    this.bj = this.rr =
                        i;
                    this.Ue = 130;
                    var a = new h(100, this.Ue, 0);
                    a.zs("RC30", new f(this.x, this.y));
                    this.sn(a);
                    a.start()
                },
                Cy: function(a) {
                    this.cs = this.o;
                    this.o = a;
                    if (a === g.c) {
                        a = q.gb(d.Ak, d.Bk);
                        this.back = t.create(a, 0);
                        this.back.ta();
                        this.back.anchor = this.back.ma = o.R;
                        this.gd = t.create(a, 1);
                        this.gd.anchor = this.gd.ma = o.R;
                        this.N(this.back);
                        this.N(this.gd);
                        this.back.J = p;
                        this.gd.J = p
                    } else {
                        this.back = t.create(d.mi, 0);
                        this.back.ta();
                        this.back.anchor = this.back.ma = o.R;
                        this.gd = t.create(d.mi, 1);
                        this.gd.anchor = this.gd.ma = o.R;
                        this.N(this.back);
                        this.N(this.gd);
                        this.back.J = p;
                        this.gd.J = p;
                        this.Bh = k.Bo;
                        this.Zg = p
                    }
                    if (this.n) {
                        this.Vh = t.create(d.tf, 0);
                        this.Vh.anchor = this.Vh.ma = o.R;
                        this.N(this.Vh);
                        this.Vh.J = p;
                        this.jc = t.create(d.tf, 1);
                        this.jc.oe = p;
                        this.mg = t.create(d.tf, 2);
                        this.mg.anchor = this.mg.ma = o.R;
                        this.jc.N(this.mg);
                        this.ng = t.create(d.tf, 3);
                        this.ng.anchor = this.ng.ma = this.jc.anchor = this.jc.ma = o.R;
                        this.jc.N(this.ng);
                        this.N(this.jc);
                        this.Nn = this.jc.J = p
                    }
                },
                xy: function(a, b, c) {
                    this.q = a;
                    this.A = b;
                    this.w = c;
                    if (this.q > 0) {
                        this.Cb = new j(a);
                        this.Cb.Kd = -Math.round(this.Cb.width /
                            2) + k.fi;
                        this.Cb.x = -k.fi;
                        this.Re = t.create(d.tg, 3);
                        this.Re.J = p;
                        this.Re.anchor = this.Re.ma = o.R;
                        this.N(this.Re);
                        this.ge = t.create(d.tg, 4);
                        this.ge.J = p;
                        this.ge.anchor = this.ge.ma = o.R;
                        this.N(this.ge);
                        this.ge.N(this.Cb);
                        if (this.A) {
                            this.Cb.rotation = 90;
                            this.Cb.y = -this.w;
                            this.hj = this.y - this.w;
                            this.gj = this.y + (this.q - this.w);
                            this.ge.rotation = 90;
                            this.Re.rotation = 90
                        } else {
                            this.hj = this.x - this.w;
                            this.gj = this.x + (this.q - this.w);
                            this.Cb.x = this.Cb.x + -this.w
                        }
                        this.Cb.anchor = o.zf | o.rb;
                        this.Cb.x = this.Cb.x + this.x;
                        this.Cb.y = this.Cb.y +
                            this.y;
                        this.Cb.J = p
                    }
                    this.Ye = g.c
                },
                jy: function() {
                    this.xb = t.create(d.ki, 1);
                    this.xb.ta();
                    this.xb.ma = o.R;
                    var a = new s;
                    a.na(d.ki);
                    a.ma = a.anchor = o.Qb | o.rb;
                    a.ta();
                    a.ad(0.03, w.fa.ip, 2, 4);
                    a.P(0);
                    a.vw(q.gb(0, 2));
                    this.xb.N(a);
                    a = this.xb.C.g[0];
                    this.xb.x = -a.x;
                    this.xb.y = -a.y;
                    this.xb.Kd = a.x - this.xb.width / 2;
                    this.xb.cg = a.y - this.xb.width / 2;
                    this.xb.Q = this.xb.aa = 1 / 1.3;
                    this.N(this.xb)
                },
                Hy: function(a) {
                    this.Lc = a;
                    this.gg = this.Hj = p;
                    this.e = new s;
                    this.e.na(d.ug);
                    this.e.ta();
                    this.e.anchor = o.R;
                    this.e.x = this.x;
                    this.e.y = this.y;
                    this.e.J =
                        p;
                    this.e.tb(0, 0.05, w.fa.Ta, 0, 6);
                    this.e.ny(0.4, 5, 0);
                    this.e.tb(1, 0.1, w.fa.Ib, 7, 10);
                    this.e.ue(1, 0, 0.05);
                    this.N(this.e)
                },
                Rq: function() {
                    this.oa = n
                }
            })
        }(Yb, za, bc, hc, r, S, Ya, T, X, hb, wb, ua, ub, sb, ta, Fa, Sa, Gb, Tb),
        jc = function(b, c, e, a, d, f, h, g, k, l, s, o, t, x) {
            var m, w, q, b = b.extend({
                    init: function(b, c, g, h, o) {
                        this.h();
                        var q;
                        if (o !== f.c) q = e.Dk + g - 1;
                        else switch (g) {
                            case 1:
                                q = e.Ek;
                                break;
                            case 2:
                                q = e.Fk;
                                break;
                            case 3:
                                q = e.Gk;
                                break;
                            case 4:
                                q = e.Hk;
                                break;
                            case 5:
                                q = e.zk
                        }
                        this.na(q);
                        if (o > 0) {
                            this.ta();
                            q = I + (o - 1) * 2;
                            var t = B + (o - 1) * 2,
                                u = k.create(e.oi,
                                    q),
                                t = k.create(e.oi, t);
                            u.ta();
                            t.ta();
                            this.Vb = new l(G);
                            this.Vb.Zi(u, t);
                            this.Vb.Db = $.proxy(this.Db, this);
                            this.Vb.anchor = this.Vb.ma = s.R;
                            this.N(this.Vb);
                            t = u.C;
                            u = t.g[q];
                            q = t.d[q];
                            q = new a(q.B, q.M);
                            t = new a(t.qe.x, t.qe.y);
                            t.bb(q);
                            t.bb(u);
                            this.Vb.Mh(-u.x + q.x / 2, -t.x + q.x / 2, -u.y + q.y / 2, -t.y + q.y / 2)
                        }
                        this.Nj = this.xh = p;
                        this.xx = this.rotation = h;
                        this.Ba = a.Pa();
                        this.Ia = a.Pa();
                        this.wa = a.Pa();
                        this.xa = a.Pa();
                        this.Ug = p;
                        this.Mm = this.Um = this.Bm = 0;
                        this.Li = p;
                        this.Jc = 0;
                        this.x = b;
                        this.y = c;
                        this.My(o);
                        this.Pb();
                        if (g === 5) {
                            this.tb(m,
                                0.05, d.fa.Ib, j, j);
                            this.tb(w, 0.05, d.fa.Ib, z, J);
                            this.ta()
                        }
                        this.Sj = f.c
                    },
                    Pb: function() {
                        var a = this.Ug ? this.width - 400 * x.$b : this.C.d[this.ff].B,
                            a = a / 2;
                        this.Ba.x = this.x - a;
                        this.Ia.x = this.x + a;
                        this.Ba.y = this.Ia.y = this.y - u / 2;
                        this.wa.x = this.Ba.x;
                        this.xa.x = this.Ia.x;
                        this.wa.y = this.xa.y = this.y + u / 2;
                        this.b = h.dc(this.rotation);
                        this.Ba.la(this.b, this.x, this.y);
                        this.Ia.la(this.b, this.x, this.y);
                        this.wa.la(this.b, this.x, this.y);
                        this.xa.la(this.b, this.x, this.y)
                    },
                    nz: function() {
                        this.Li = i;
                        this.P(w);
                        this.Jc = this.Um;
                        c.Gx(e.vi)
                    },
                    it: function() {
                        this.Li = p;
                        this.P(m);
                        this.Jc = this.Mm;
                        c.bz(e.vi)
                    },
                    update: function(a) {
                        this.h(a);
                        (this.Oa || this.Fs) && this.Pb();
                        if (this.Ug)
                            if (this.Li) {
                                this.Jc = g.Xe(this.Jc, 0, 1, a);
                                this.Jc === 0 && this.it()
                            } else {
                                this.Jc = g.Xe(this.Jc, 0, 1, a);
                                this.Jc === 0 && this.nz()
                            }
                    },
                    My: fa("mf"),
                    sA: ga("mf"),
                    ay: function() {
                        this.Nj = !this.Nj;
                        this.Rx(q);
                        var a = this.xx + (this.Nj ? 90 : 0),
                            b = new d;
                        b.m(o.me(this.rotation, o.l.LINEAR, 0));
                        b.m(o.me(a, o.l.Hb, Math.abs(a - this.rotation) / 90 * 0.3));
                        b.eb = $.proxy(this.En, this);
                        this.Jb(b, q);
                        this.P(q);
                        this.Fs =
                            i;
                        this.Vb.Q = -this.Vb.Q
                    },
                    En: function() {
                        this.Pb();
                        this.Fs = p
                    },
                    Db: function(a) {
                        if (a === G) {
                            this.Nr && this.Nr(this.mf);
                            this.Nj ? c.H(e.ul) : c.H(e.vl)
                        }
                    },
                    Rg: function() {
                        var a = t.context;
                        a.beginPath();
                        a.strokeStyle = "red";
                        a.moveTo(this.Ba.x, this.Ba.y);
                        a.lineTo(this.Ia.x, this.Ia.y);
                        a.lineTo(this.xa.x, this.xa.y);
                        a.lineTo(this.wa.x, this.wa.y);
                        a.lineTo(this.Ba.x, this.Ba.y);
                        a.closePath();
                        a.stroke()
                    }
                }),
                u = 10,
                j = 0,
                z = 1,
                J = 4,
                G = 0,
                I = 0,
                B = 1;
            m = 0;
            w = 1;
            q = 2;
            return b
        }(Yb, hc, r, S, Fa, T, za, Ya, ub, yb, ua, Da, sb, X),
        kc = function(b, c, e, a, d, f, h, g, k) {
            return b.extend({
                init: function(b) {
                    this.h(b);
                    this.Rj = p;
                    this.ja = n;
                    this.ft = this.tt = a.c;
                    this.rj = n;
                    this.mz = 0.3;
                    this.If = this.dm = p;
                    h.subscribe(h.ia.ho, $.proxy(this.gx, this));
                    h.subscribe(h.ia.io, $.proxy(this.ix, this));
                    h.subscribe(h.ia.yt, $.proxy(this.hx, this));
                    h.subscribe(h.ia.jo, $.proxy(this.jx, this));
                    h.subscribe(h.ia.ko, $.proxy(this.kx, this));
                    h.subscribe(h.ia.lo, $.proxy(this.lx, this));
                    h.subscribe(h.ia.mo, $.proxy(this.mx, this))
                },
                vx: function(b) {
                    if (!(this.Rj || this.ja === n)) {
                        this.ja.Gq(b);
                        this.ft === a.c && this.ja.update();
                        if (this.dm) {
                            this.dm = p;
                            this.ja.Pq()
                        }
                        if (this.ja.nb !==
                            a.c) {
                            this.ja.Ol().p();
                            this.ja.iv();
                            if (d.br) {
                                b = this.ja.nm.toFixed(0);
                                if (b > 0) {
                                    var c = g.context;
                                    c.font = "20px Arial";
                                    c.fillStyle = k.Dn.Dl;
                                    c.fillText(b + " fps", 10, f.cb - 10)
                                }
                            }
                        }
                    }
                },
                Ru: function() {
                    if (!this.Id) this.Id = new c({
                        element: g.element,
                        Tm: $.proxy(this.ij, this),
                        Pm: $.proxy(this.Zw, this),
                        Nm: $.proxy(this.Uf, this),
                        Qm: $.proxy(this.$w, this),
                        Yg: function() {
                            return e.zoom
                        }
                    });
                    this.Id.$c()
                },
                qv: function() {
                    this.Id && this.Id.fd()
                },
                $c: function() {
                    function a() {
                        b.vx(+new Date);
                        b.Ss || c(a)
                    }
                    this.h();
                    this.Ru();
                    var b = this,
                        c = window.requestAnimationFrame;
                    this.Ss = p;
                    a()
                },
                fd: function() {
                    this.h();
                    this.Ss = i;
                    this.qv()
                },
                us: function(a) {
                    this.ja = a;
                    this.ja.yA = 1 / 60
                },
                rA: ga("ja"),
                gx: function(a) {
                    this.us(a)
                },
                hx: function() {
                    this.ja = n
                },
                jx: function() {
                    this.ja = n
                },
                kx: function(a) {
                    this.us(a)
                },
                ix: function() {
                    this.dm = i
                },
                mx: function() {
                    if (this.tt !== a.c && this.rj != n) {
                        this.ja.Gq();
                        this.ft = this.ja.ph + this.mz;
                        this.ja.Ol().p()
                    }
                },
                lx: function(b) {
                    this.rj = b;
                    this.tt !== a.c && this.rj != n && this.rj.p()
                },
                DA: ga("Rj"),
                dB: function() {
                    this.Rj = i
                },
                RA: function() {
                    this.ja && this.ja.Ux();
                    this.Rj = p
                },
                ij: function(a,
                    b) {
                    if (this.ja && this.ja != this) {
                        this.If = i;
                        return this.ja.ij(a, b)
                    }
                    return p
                },
                Zw: function(a, b) {
                    if (this.ja && this.ja != this) {
                        this.If && this.ja.Br(a, b);
                        return this.ja.Cr(a, b)
                    }
                    return p
                },
                Uf: function(a, b) {
                    if (this.ja && this.ja != this) {
                        var c = this.ja.Uf(a, b);
                        this.If = p;
                        return c
                    }
                    return p
                },
                $w: function(a, b) {
                    if (this.ja && this.ja != this && this.If) {
                        var c = this.ja.Uf(a, b);
                        this.If = p;
                        return c
                    }
                    return p
                },
                Pg: function(a, b) {
                    if (this.ja && this.ja != this) {
                        this.ja.Uf(a, b);
                        this.If = p;
                        return this.ja.Pg(a, b)
                    }
                    return p
                }
            })
        }(kb, Va, Nb, T, Lb, X, ib, sb,
            ta),
        lc = function(b, c, e, a, d) {
            function f(a) {
                switch (c.Wi()) {
                    case e.jk:
                        return a.u;
                    case e.fk:
                        return a.s;
                    case e.Zk:
                        return a.v;
                    default:
                        return a.t
                }
            }
            return {
                boxText: function(boxIndex) {
                    var locEntry = f(b.boxText[boxIndex]);
                    boxIndex + 1 < b.boxText.length && (locEntry = boxIndex + 1 + ". " + locEntry);
                    return locEntry
                },
                $: function(b) {
                    var c, e, l = a.length;
                    for (e = 0; e < l; e++) {
                        c = a[e];
                        if (c.id === b) return f(c)
                    }
                    d.debug("Missing menu string for id: " + b);
                    return ""
                },
                fw: f
            }
        }(Na, Lb, lb, rb, La),
        mc = function(b, c, e, a, d, f, h, g, k, l, s, o, t, x, m, w, q, u, j, z, J, G, I, B, K, V, M, H, R, D, F, Z, Q, Y, N, ma, da, O, Qa, Za, Aa, ba, P, L, wa, xa, Ia, ea, qa, na, $a,
            mb, nb, Ja, ob, Ka) {
            return j.extend({
                init: function() {
                    this.h();
                    this.rc = w;
                    this.Jd = this.mr = K.c;
                    this.Xa = new u;
                    this.Xa.J = p;
                    this.N(this.Xa);
                    this.ig = new u;
                    this.ig.J = p;
                    this.N(this.ig);
                    this.S = new m(F.Zh, m.Yc.ai);
                    this.hg = 0;
                    this.ym = [];
                    for (var a = 0; a < 3; a++) {
                        var b = this.ym[a] = new V;
                        b.na(B.vk);
                        b.ta();
                        b.ad(0.05, M.fa.Ta, 0, 10);
                        b.As(10, 0);
                        b.x = b.width * a;
                        b.y = 0;
                        this.N(b)
                    }
                    this.Kj = H.Pa();
                    this.Ri = [];
                    for (a = 0; a < K.mc; a++) this.Ri[a] = [];
                    this.$l = G.pm();
                    this.G = F.G;
                    this.ib = F.ib;
                    this.sb = 0;
                    this.Bd = [];
                    this.oh = this.nh = this.mh = 0;
                    this.Qg = Array(K.mc);
                    this.te = Array(K.mc);
                    this.dn = Array(K.mc);
                    for (a = 0; a < K.mc; a++) {
                        this.Qg[a] = p;
                        this.te[a] = H.Pa();
                        this.dn[a] = H.Pa()
                    }
                },
                cn: function(a) {
                    var b = F.Ok;
                    return a.a.y > this.kd + F.Nk || a.a.y < b
                },
                QA: function() {
                    this.hide();
                    this.show()
                },
                Ij: function() {
                    this.target.P(10)
                },
                Es: function(a) {
                    var b = G.Wi();
                    return $a.cr(a.Ha) !== b ? i : p
                },
                show: function() {
                    this.Xa.ks();
                    this.ig.ks();
                    this.rc.Zl();
                    var a = Y.tr[Q.Gd];
                    this.dv = J.Dd(Y.sr[Q.Gd]);
                    this.Ym = J.Dd(a);
                    this.back = new z(1, 1);
                    this.back.Dy(ma.oc.NONE);
                    this.back.Ey(ma.oc.vt);
                    this.back.Vu(this.dv,
                        0);
                    this.back.fill(0, 0, 1, 1, 0);
                    this.La = n;
                    this.tm = K.c;
                    this.I = 2;
                    this.ne = 0;
                    this.qd = n;
                    this.Ca = [];
                    this.sj = [];
                    this.Wb = [];
                    this.lb = [];
                    this.bubbles = [];
                    this.ec = [];
                    this.ps = [];
                    this.fg = [];
                    this.Md = [];
                    this.of = [];
                    this.be = [];
                    this.Ig = [];
                    this.Qa = [];
                    this.pe = n;
                    this.K = new da;
                    this.K.pd(1);
                    this.ea = new da;
                    this.ea.pd(1);
                    this.sa = new da;
                    this.sa.pd(1);
                    this.T = new O;
                    this.T.na(B.Wc);
                    this.T.$a(0);
                    this.T.ta();
                    this.T.anchor = N.R;
                    this.T.Z = P.copy(F.ak);
                    this.T.oe = p;
                    this.T.Q = this.T.aa = 0.71;
                    this.T.Fa = 1.0E-4;
                    this.zb = new O;
                    this.zb.na(B.Wc);
                    this.zb.$a(1);
                    this.zb.ta();
                    this.zb.anchor = this.zb.ma = N.R;
                    this.T.N(this.zb);
                    this.zb.Q = this.zb.aa = 0.71;
                    this.zb.Fa = 1.0E-4;
                    this.Fc = new O;
                    this.Fc.na(B.Wc);
                    this.Fc.$a(2);
                    this.Fc.ta();
                    this.Fc.anchor = this.Fc.ma = N.R;
                    this.T.N(this.Fc);
                    this.Fc.Q = this.Fc.aa = 0.71;
                    this.Fc.Fa = 1.0E-4;
                    this.yb = new V;
                    this.yb.na(B.Wc);
                    this.yb.ta();
                    this.yb.tb(0, 0.07, M.fa.Ta, 8, 17);
                    this.yb.Eg(1, 0.3, M.fa.Ta, 2, [18, 18]);
                    a = this.yb.Kc(1);
                    a.m(D.ua(R.kb.copy(), D.l.LINEAR, 0));
                    a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.2));
                    this.yb.J = p;
                    this.yb.anchor = this.yb.ma =
                        N.R;
                    this.yb.Q = this.yb.aa = 0.71;
                    this.T.N(this.yb);
                    this.yb.Fa = 1.0E-4;
                    this.ac = new V;
                    this.ac.na(B.sg);
                    this.ac.x = this.T.x;
                    this.ac.y = this.T.y;
                    this.ac.ma = this.ac.anchor = N.R;
                    this.ac.ad(0.05, M.fa.Ib, 0, 12);
                    this.ac.P(0);
                    this.T.N(this.ac);
                    this.ac.J = p;
                    this.ac.Fa = 1.0E-4;
                    for (a = 0; a < 3; a++) {
                        var b = this.ym[a];
                        b.Ab && b.Ab.stop();
                        b.$a(0)
                    }
                    this.Jw(Q.vr);
                    if (this.I !== 2) {
                        this.cd = new V;
                        this.cd.na(B.sg);
                        this.cd.ma = this.cd.anchor = N.R;
                        this.cd.ad(0.05, M.fa.Ib, 0, 12);
                        this.cd.P(0);
                        this.Da.N(this.cd);
                        this.cd.J = p;
                        this.cd.Fa = 1.0E-4;
                        this.dd =
                            new V;
                        this.dd.na(B.sg);
                        this.dd.ma = this.dd.anchor = N.R;
                        this.dd.ad(0.05, M.fa.Ib, 0, 12);
                        this.dd.P(0);
                        this.Ea.N(this.dd);
                        this.dd.J = p;
                        this.dd.Fa = 1.0E-4
                    }
                    for (var b = this.Qa.length, c, a = 0; a < b; a++) {
                        c = this.Qa[a];
                        c.wh = K.c;
                        c.zd = this.Qa
                    }
                    this.$y();
                    this.hg = 0;
                    this.qc = this.bc = this.pc = n;
                    this.Jm = p;
                    this.ub = this.I !== 2;
                    this.Mb = this.Lb = p;
                    this.blink.P(0);
                    this.Dj = this.time = 0;
                    this.Of = i;
                    qa.reset();
                    this.yj = this.pn = this.Me = 0;
                    this.rc.Wd(this, this.yv, n, 1);
                    a = new Za;
                    a.un(B.qg, Q.Gd + 1 + " - " + (Q.Fd + 1));
                    a.anchor = N.rf | N.rb;
                    a.x = 37 * F.$b;
                    a.y =
                        F.cb + 25 * F.$b;
                    b = new Za;
                    b.un(B.qg, mb.$(nb.$t));
                    b.anchor = N.rf | N.rb;
                    b.ma = N.Qb | N.rb;
                    b.y = 80 * F.$b;
                    b.Kd = b.Kd - b.width / 2;
                    b.Q = b.aa = 0.7;
                    a.N(b);
                    b = new M;
                    b.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0));
                    b.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.5));
                    b.m(D.ua(R.kb.copy(), D.l.LINEAR, 0.5));
                    b.m(D.ua(R.kb.copy(), D.l.LINEAR, 1));
                    b.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.5));
                    a.Jb(b, 0);
                    a.P(0);
                    b.eb = this.ig.ve();
                    this.ig.N(a);
                    this.$l && this.os()
                },
                $y: function() {
                    var a = F.qb,
                        b = F.cb;
                    if (this.ld > a || this.kd > b) {
                        this.he = i;
                        this.Zq = p;
                        this.S.type = m.Yc.vf;
                        this.S.speed =
                            10;
                        var c, d, j = this.I !== 2 ? this.ea : this.K;
                        if (this.ld > a) {
                            c = j.a.x > this.ld / 2 ? 0 : this.ld - a;
                            d = 0
                        } else if (j.a.y > this.kd / 2) d = c = 0;
                        else {
                            c = 0;
                            d = this.kd - b
                        }
                        var e = j.a.y - b / 2,
                            a = t.Jf(j.a.x - a / 2, 0, this.ld - a),
                            b = t.Jf(e, 0, this.kd - b);
                        this.S.moveTo(c, d, i);
                        this.mr = this.S.a.Ga(new H(a, b))
                    } else {
                        this.he = p;
                        this.S.moveTo(0, 0, i)
                    }
                },
                yv: function() {
                    this.yb.P(0)
                },
                Jw: function(a) {
                    function b(a, c) {
                        for (var j = 0, e = a.length; j < e; j++)
                            for (var f = a[j], sc = f.length, k = 0; k < sc; k++) c.call(d, f[k])
                    }
                    var c = [],
                        d = this,
                        j;
                    for (j in a) a.hasOwnProperty(j) && c.push(a[j]);
                    b(c, function(a) {
                        switch (a.name) {
                            case q.dp:
                                this.Kw(a);
                                break;
                            case q.yo:
                                this.Dw(a);
                                break;
                            case q.Yn:
                                this.Bw(a);
                                break;
                            case q.Zn:
                                this.Cw(a);
                                break;
                            case q.Xn:
                                this.Aw(a)
                        }
                    });
                    b(c, function(a) {
                        switch (a.name) {
                            case q.Co:
                                this.Fw(a);
                                break;
                            case q.Pp:
                                this.Rw(a);
                                break;
                            case q.fq:
                                this.Uw(a);
                                break;
                            case q.Kl:
                            case q.Sp:
                            case q.Tp:
                            case q.Up:
                            case q.Vp:
                            case q.Wp:
                            case q.Xp:
                            case q.Yp:
                            case q.Zp:
                            case q.$p:
                            case q.aq:
                            case q.bq:
                            case q.cq:
                            case q.dq:
                                this.Tw(a);
                                break;
                            case q.Tn:
                                this.zw(a);
                                break;
                            case q.lp:
                                this.Nw(a);
                                break;
                            case q.Kp:
                                this.Pw(a);
                                break;
                            case q.Lp:
                            case q.Mp:
                            case q.Np:
                            case q.Op:
                            case q.hk:
                                this.Qw(a);
                                break;
                            case q.qp:
                                this.Ow(a);
                                break;
                            case q.Rn:
                            case q.Sn:
                                this.yw(a);
                                break;
                            case q.Ao:
                                this.Ew(a);
                                break;
                            case q.Rp:
                                this.Sw(a);
                                break;
                            case q.nk:
                            case q.Do:
                            case q.Eo:
                                this.Gw(a)
                        }
                    })
                },
                Kw: function(a) {
                    this.ld = a.width;
                    this.kd = a.height;
                    this.sb = (F.qb - this.ld * this.G) / 2;
                    this.ld = this.ld * this.G;
                    this.kd = this.kd * this.G;
                    if (Y.Ny[Q.Gd]) {
                        this.ld > F.qb && this.Bd.push(new na(F.qb, 0));
                        this.kd > F.cb && this.Bd.push(new na(0, F.cb));
                        this.Bd.push(new na(0, 0))
                    }
                },
                Dw: function(a) {
                    this.ha =
                        a.ha || 0;
                    this.ra = a.ra;
                    this.ax = a.ax;
                    this.I = a.I ? 0 : 2;
                    this.ra = this.ra * F.Pk
                },
                Ew: function(a) {
                    var b = a.x * this.G + this.sb,
                        c = a.y * this.G + this.ib,
                        d = a.length * this.G,
                        j = a.o,
                        e = a.n,
                        k = a.Tf,
                        g = a.ke,
                        h = a.q * this.G || -1,
                        l = a.A,
                        m = a.w * this.G || 0,
                        o = a.e,
                        s = a.O === "L",
                        q = a.xA,
                        t = a.L,
                        u = new f;
                    u.x = b;
                    u.y = c;
                    u.n = e;
                    u.L = t;
                    u.Tf = k;
                    u.ke = g;
                    u.Hy(o);
                    u.af(a);
                    if (u.Oa) {
                        u.jy();
                        if (!q) {
                            a = a.path[0] === "R";
                            if (!this.pe) this.pe = new Ja;
                            e = 0;
                            for (k = u.Oa.path.length - 1; e < k; e++)(!a || e % 3 === 0) && this.pe.$q(e, e + 1, u);
                            u.Oa.path.length > 2 && this.pe.$q(0, u.Oa.path.length - 1, u)
                        }
                    }
                    j !==
                        K.c && (j = j * this.G);
                    if (j === K.c && !t) {
                        t = this.K;
                        this.I !== 2 && (t = s ? this.ea : this.sa);
                        b = new Aa(n, b, c, t, t.a.x, t.a.y, d);
                        b.Ya.Oc.ba(b.Ya.a);
                        u.Cs(b)
                    }
                    u.Cy(j);
                    u.xy(h, l, m);
                    this.Ca.push(u)
                },
                Bw: function(a) {
                    this.ea.a.x = a.x * this.G + this.sb;
                    this.ea.a.y = a.y * this.G + this.ib;
                    this.Da = new O;
                    this.Da.na(B.Wc);
                    this.Da.$a(19);
                    this.Da.Q = this.Da.aa = 0.71;
                    this.Da.oe = p;
                    this.Da.ta();
                    this.Da.anchor = N.R;
                    this.Da.x = this.ea.a.x;
                    this.Da.y = this.ea.a.y;
                    this.Da.Z = P.copy(F.$h)
                },
                Cw: function(a) {
                    this.sa.a.x = a.x * this.G + this.sb;
                    this.sa.a.y = a.y * this.G +
                        this.ib;
                    this.Ea = new O;
                    this.Ea.na(B.Wc);
                    this.Ea.$a(20);
                    this.Ea.Q = this.Ea.aa = 0.71;
                    this.Ea.oe = p;
                    this.Ea.ta();
                    this.Ea.anchor = N.R;
                    this.Ea.x = this.sa.a.x;
                    this.Ea.y = this.sa.a.y;
                    this.Ea.Z = P.copy(F.$h)
                },
                Aw: function(a) {
                    this.K.a.x = a.x * this.G + this.sb;
                    this.K.a.y = a.y * this.G + this.ib
                },
                Fw: function(a) {
                    this.La = new ea;
                    this.La.Db = $.proxy(this.Db, this);
                    this.La.J = p;
                    this.La.Xb = p;
                    this.N(this.La);
                    this.La.x = a.x * this.G + this.sb;
                    this.La.y = a.y * this.G + this.ib;
                    this.La.anchor = N.R
                },
                Rw: function(a) {
                    var b = new s;
                    b.na(B.Xc);
                    b.x = a.x * this.G +
                        this.sb;
                    b.y = a.y * this.G + this.ib;
                    b.timeout = a.timeout;
                    b.cm();
                    b.Z = P.copy(F.Fl);
                    b.af(a);
                    b.update(0);
                    this.lb.push(b)
                },
                Uw: function(a) {
                    if (!this.Es(a))
                        if (a.text == n || a.text === "") ob.debug("Missing tutorial text");
                        else {
                            var b = new o;
                            b.x = a.x * this.G + this.sb;
                            b.y = a.y * this.G + this.ib;
                            b.ha = a.ha || 0;
                            b.align = N.Dc;
                            b.un(B.ci, a.text, Math.ceil(a.width * this.G), N.Dc);
                            b.color = R.Gb.copy();
                            var a = new M,
                                c = Q.Gd === 0 && Q.Fd === 0;
                            a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0));
                            a.m(D.ua(R.kb.copy(), D.l.LINEAR, 1));
                            a.m(D.ua(R.kb.copy(), D.l.LINEAR, c ? 10 :
                                5));
                            a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.5));
                            b.Jb(a, 0);
                            b.ha === 0 && b.P(0);
                            this.of.push(b)
                        }
                },
                Tw: function(a) {
                    if (!this.Es(a)) {
                        var b = a.name - q.Kl,
                            c = new Qa;
                        c.na(B.Jk);
                        c.$a(b);
                        c.color = R.Gb.copy();
                        c.x = a.x * this.G + this.sb;
                        c.y = a.y * this.G + this.ib;
                        c.rotation = a.b || 0;
                        c.ha = a.ha || 0;
                        c.af(a);
                        a = new M;
                        a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0));
                        a.m(D.ua(R.kb.copy(), D.l.LINEAR, 1));
                        Q.Gd === 0 && Q.Fd === 0 ? a.m(D.ua(R.kb.copy(), D.l.LINEAR, 10)) : a.m(D.ua(R.kb.copy(), D.l.LINEAR, 5.2));
                        a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.5));
                        c.Jb(a, 0);
                        if (c.ha ===
                            0) c.P(0);
                        else if (c.ha === 2) {
                            a = new M;
                            a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0));
                            a.m(D.ua(R.kb.copy(), D.l.LINEAR, 0.5));
                            a.m(D.ua(R.kb.copy(), D.l.LINEAR, 1));
                            a.m(D.ua(R.kb.copy(), D.l.LINEAR, 1.1));
                            a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.5));
                            a.m(D.Na(c.x, c.y, D.l.LINEAR, 0));
                            a.m(D.Na(c.x, c.y, D.l.LINEAR, 0.5));
                            a.m(D.Na(c.x, c.y, D.l.LINEAR, 1));
                            a.m(D.Na(c.x + F.Ll, c.y, D.l.LINEAR, 0.5));
                            a.m(D.Na(c.x + F.Ml, c.y, D.l.LINEAR, 0.5));
                            a.We = 2;
                            a.cj = M.fa.Ib;
                            c.Jb(a, 1);
                            c.P(1)
                        }
                        this.Md.push(c)
                    }
                },
                Gw: function(b) {
                    var c = b.name - q.nk,
                        j = b.jm - 1;
                    if (!Y.disableHiddenDrawings) {
                        c =
                            new a(c, j);
                        c.x = b.x * this.G + this.sb;
                        c.y = b.y * this.G + this.ib;
                        c.rotation = b.b || 0;
                        this.be.push(c)
                    }
                },
                zw: function(a) {
                    var b = t.gb(1, 3),
                        j = new c;
                    j.na(B.li);
                    j.$a(b);
                    j.ta();
                    j.Z = P.copy(F.Xj);
                    j.x = a.x * this.G + this.sb;
                    j.y = a.y * this.G + this.ib;
                    j.anchor = N.R;
                    j.cf = p;
                    a = new wa;
                    a.na(B.li);
                    a.$a(0);
                    a.ta();
                    a.ma = a.anchor = N.R;
                    j.N(a);
                    this.bubbles.push(j)
                },
                Nw: function(a) {
                    var b = new h;
                    b.na(B.ni);
                    b.ta();
                    b.Su(0.05, M.fa.Ta, 4, [1, 2, 3, 0]);
                    b.Z = P.copy(F.Uk);
                    b.x = a.x * this.G + this.sb;
                    b.y = a.y * this.G + this.ib;
                    b.rotation = a.b + 90;
                    b.Pb();
                    b.anchor = N.R;
                    this.ec.push(b)
                },
                Pw: function(a) {
                    var b = new k;
                    b.na(B.pi);
                    b.Q = b.aa = 0.7;
                    b.cm();
                    b.ta();
                    b.x = a.x * this.G + this.sb;
                    b.y = a.y * this.G + this.ib;
                    b.group = a.group;
                    b.anchor = N.Qb | N.Dc;
                    b.cg = b.cg - (b.height / 2 - 25);
                    b.$a(b.group === 0 ? k.wf.Xt : k.wf.Yt);
                    b.state = k.U.IDLE;
                    b.af(a);
                    b.rotation = b.rotation + 90;
                    if (b.Oa) b.Oa.b = b.Oa.b + 90;
                    b.Pb();
                    this.fg.push(b)
                },
                Qw: function(a) {
                    var b = a.mf === p ? K.c : a.mf || K.c,
                        c = new l(a.x * this.G + this.sb, a.y * this.G + this.ib, a.size, parseFloat(a.b) || 0, b);
                    c.af(a);
                    if (b) c.Nr = $.proxy(this.Zx, this);
                    if (a.name === q.hk) {
                        c.Ug = i;
                        c.Bm = a.Bm;
                        c.Um =
                            a.Um;
                        c.Mm = a.Mm;
                        c.Jc = 0;
                        c.it();
                        c.Jc = c.Jc + c.Bm;
                        c.Pb()
                    } else c.Ug = p;
                    this.Wb.push(c)
                },
                Ow: function(a) {
                    var b = a.x * this.G + this.sb,
                        c = a.y * this.G + this.ib,
                        j = a.size,
                        d = parseFloat(a.wA) || 0,
                        e = ba.dc(d),
                        a = a.IA,
                        f = new Ka;
                    f.anchor = N.R;
                    f.x = b;
                    f.y = c;
                    f.rotation = d;
                    f.Pf = new H(f.x - j * this.G, f.y);
                    f.jd = new H(f.x + j * this.G, f.y);
                    f.Pf.la(e, f.x, f.y);
                    f.jd.la(e, f.x, f.y);
                    f.setSize(j);
                    f.vs(a);
                    this.Qa.push(f)
                },
                yw: function(a) {
                    var c = new b(a.x * this.G + this.sb, a.y * this.G + this.ib, a.size, a.b);
                    c.af(a);
                    this.Ig.push(c)
                },
                Sw: function(a) {
                    var b = new O;
                    this.target =
                        b;
                    b.na(B.ii);
                    b.ta();
                    b.Z = P.copy(F.Jl);
                    b.Fa = 1.0E-4;
                    b.tb(10, 0.05, M.fa.Ta, 152, 180);
                    b.tb(0, 0.05, M.fa.Ib, 8, 26);
                    b.tb(1, 0.05, M.fa.Ta, 84, 108);
                    b.Eg(2, 0.05, M.fa.Ta, 32, [109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124]);
                    b.tb(3, 0.05, M.fa.Ta, 64, 83);
                    b.tb(4, 0.05, M.fa.Ta, 125, 151);
                    b.tb(5, 0.05, M.fa.Ta, 27, 39);
                    b.tb(6, 0.05, M.fa.Ta, 49, 52);
                    b.tb(7, 0.05, M.fa.Ta, 40, 48);
                    b.tb(8, 0.05, M.fa.Ta, 49, 52);
                    b.tb(9, 0.05, M.fa.Ib, 53, 61);
                    b.ue(9, 6, 0.05);
                    b.ue(4, 8,
                        0.05);
                    b.ue(0, 10, 0.05);
                    b.ue(0, 1, 0.05);
                    b.ue(0, 2, 0.05);
                    b.ue(0, 3, 0.05);
                    b.ue(0, 4, 0.05);
                    if (G.Ij) {
                        this.rc.Wd(this, this.Ij, n, 2);
                        G.Ij = p
                    }
                    b.P(0);
                    b.Kc(0).vh = $.proxy(this.nx, this);
                    b.As(8, 7);
                    this.blink = new V;
                    this.blink.na(B.ii);
                    this.blink.ma = N.Qb | N.rb;
                    this.blink.J = p;
                    this.blink.Eg(0, 0.05, M.fa.Ta, 4, [62, 63, 63, 63]);
                    this.blink.ts(Ia.rp, this.blink, 0, 0, 2, 0);
                    this.Ul = 3;
                    this.blink.ta();
                    b.N(this.blink);
                    this.support = wa.create(B.ji, Y.dz[Q.Gd]);
                    this.support.ta();
                    this.support.anchor = N.R;
                    b = a.y;
                    this.target.x = this.support.x = a.x *
                        this.G + this.sb;
                    this.target.y = this.support.y = b * this.G + this.ib;
                    this.zm = t.gb(5, 20)
                },
                nx: function(a, b, c) {
                    if (c === 1) {
                        this.Ul--;
                        if (this.Ul === 0) {
                            this.blink.J = i;
                            this.blink.P(0);
                            this.Ul = 3
                        }
                        this.zm--;
                        if (this.zm === 0) {
                            t.gb(0, 1) === 1 ? this.target.P(1) : this.target.P(2);
                            this.zm = t.gb(5, 20)
                        }
                    }
                },
                sx: function(a) {
                    a.element.Ox = i
                },
                update: function(a) {
                    function b(c) {
                        c.Sl(new H(-c.Yb.x / L, -c.Yb.y / L + Q), a)
                    }

                    function c(a, b) {
                        return P.Ve(a.Ba.x, a.Ba.y, a.Ia.x, a.Ia.y, b.a.x - D, b.a.y - D, G, G) || P.Ve(a.wa.x, a.wa.y, a.xa.x, a.xa.y, b.a.x - D, b.a.y - D,
                            G, G)
                    }
                    var j, d;
                    j = 0;
                    for (d = this.be.length; j < d; j++) this.be[j].update(a);
                    this.h(a);
                    this.rc.update(a);
                    this.pe && this.pe.update(a);
                    for (j = 0; j < K.mc; j++)
                        for (var f = this.Ri[j], g = f.length, h = 0; h < g;) {
                            var l = f[h];
                            d = x.md(l.color.r, 0, 10, a);
                            l.color.r = d.value;
                            if (d.nd) {
                                f.splice(h, 1);
                                g--
                            } else h++
                        }
                    j = 0;
                    for (d = this.Bd.length; j < d; j++) this.Bd[j].update(a);
                    this.yj = x.Xe(this.yj, 0, 1, a);
                    j = F.qb;
                    f = F.cb;
                    g = this.I != 2 ? this.ea : this.K;
                    d = g.a.y - f / 2;
                    j = t.Jf(g.a.x - j / 2, 0, this.ld - j);
                    f = t.Jf(d, 0, this.kd - f);
                    this.S.moveTo(j, f, p);
                    this.Rv && this.S.type ===
                        m.Yc.ai || this.S.update(a);
                    if (this.S.type === m.Yc.vf) {
                        d = F.ok;
                        var g = F.Sk,
                            h = F.Tk,
                            l = F.Kk,
                            o = F.Lk,
                            s = this.S.a.Ga(new H(j, f));
                        if (s < d) this.he = p;
                        if (this.Zq) {
                            if (this.S.speed < F.$j) this.S.speed = this.S.speed * 1.5
                        } else if (s > this.mr / 2) {
                            this.S.speed = this.S.speed + a * g;
                            this.S.speed = Math.min(l, this.S.speed)
                        } else {
                            this.S.speed = this.S.speed - a * h;
                            this.S.speed = Math.max(o, this.S.speed)
                        }
                        if (Math.abs(this.S.a.x - j) < 1 && Math.abs(this.S.a.y - f) < 1) {
                            this.S.type = m.Yc.ai;
                            this.S.speed = F.Zh
                        }
                    } else this.time = this.time + a;
                    f = this.Ca.length;
                    if (f >
                        0) {
                        l = h = d = p;
                        for (j = 0; j < f; j++) {
                            var q = this.Ca[j];
                            q.update(a);
                            g = q.oa;
                            if (q.Oa && g) {
                                g.Ya.a.x = q.x;
                                g.Ya.a.y = q.y;
                                g.Ya.Oc.ba(g.Ya.a)
                            }
                            if (g) {
                                if (g.Bb !== K.c && g.Zd === 0) {
                                    q.Rq();
                                    continue
                                }
                                g.update(a * this.ra);
                                if (q.Lc) {
                                    (this.S.type != m.Yc.vf || !this.he) && q.yz(a);
                                    if (q.hf === K.c) {
                                        this.Yy(q);
                                        break
                                    }
                                }
                            }
                            if (q.o !== K.c && !q.oa) {
                                var u = F.Hl,
                                    o = function(a) {
                                        if ((new H(q.x, q.y)).Ga(a.a) <= q.o + u) {
                                            a = new Aa(n, q.x, q.y, a, a.a.x, a.a.y, q.o + u);
                                            a.Ya.Oc.ba(a.Ya.a);
                                            q.Zg = i;
                                            q.Cs(a);
                                            I.H(B.ol);
                                            q.Oa && I.H(B.bl)
                                        }
                                    };
                                if (this.I !== 2) {
                                    this.Lb || o(this.ea);
                                    !this.Mb &&
                                        q.oa == n && o(this.sa)
                                } else o(this.K)
                            }
                            if (g) {
                                var s = g.Ya,
                                    o = g.ya[g.ya.length - 1],
                                    s = H.bb(s.a, o.a),
                                    w = p;
                                d || (this.I !== 2 ? o === this.ea && !this.Lb && !h ? w = i : o === this.sa && !this.Mb && !l && (w = i) : !this.ub && !d && (w = i));
                                if (g.kn !== 0 && g.Bb === K.c && w) {
                                    s = ba.kg(s.Wf());
                                    if (this.I !== 2) {
                                        w = o === this.ea ? this.Da : this.Ea;
                                        if (!g.Mg) g.je = w.rotation - s;
                                        if (o === this.ea) {
                                            this.nh = s + g.je - w.rotation;
                                            h = i
                                        } else {
                                            this.oh = s + g.je - w.rotation;
                                            l = i
                                        }
                                        w.rotation = s + g.je
                                    } else {
                                        if (!g.Mg) g.je = this.zb.rotation - s;
                                        this.mh = s + g.je - this.zb.rotation;
                                        this.zb.rotation = s + g.je;
                                        d = i
                                    }
                                    g.Mg = i
                                } else g.Mg = p
                            }
                        }
                        if (this.I !== 2) {
                            if (!h && !this.Lb) {
                                this.Da.rotation = this.Da.rotation + Math.min(5, this.nh);
                                this.nh = this.nh * 0.98
                            }
                            if (!l && !this.Mb) {
                                this.Ea.rotation = this.Ea.rotation + Math.min(5, this.oh);
                                this.oh = this.oh * 0.98
                            }
                        } else if (!d && !this.ub) {
                            this.zb.rotation = this.zb.rotation + Math.min(5, this.mh);
                            this.mh = this.mh * 0.98
                        }
                    }
                    if (!this.ub) {
                        this.T.update(a);
                        this.K.update(a * this.ra)
                    }
                    if (this.I !== 2) {
                        j = a * this.ra;
                        this.Da.update(a);
                        this.ea.update(j);
                        this.Ea.update(a);
                        this.sa.update(j);
                        if (this.I === 1)
                            for (j = 0; j < Aa.wt; j++) {
                                this.ea.Cj();
                                this.sa.Cj()
                            }
                        if (this.ne > 0) {
                            d = x.md(this.ne, 0, 200, a);
                            this.ne = d.value;
                            if (d.nd) {
                                I.H(B.dl);
                                this.I = 2;
                                this.ub = p;
                                this.Mb = this.Lb = i;
                                if (this.bc || this.qc) {
                                    this.pc = this.bc ? this.bc : this.qc;
                                    this.ac.J = i
                                }
                                this.oh = this.nh = this.mh = 0;
                                this.K.a.x = this.ea.a.x;
                                this.K.a.y = this.ea.a.y;
                                this.T.x = this.K.a.x;
                                this.T.y = this.K.a.y;
                                this.T.Jg();
                                j = H.bb(this.ea.a, this.ea.ka);
                                d = H.bb(this.sa.a, this.sa.ka);
                                j = new H((j.x + d.x) / 2, (j.y + d.y) / 2);
                                this.K.ka.ba(this.K.a);
                                this.K.ka.bb(j);
                                j = 0;
                                for (d = this.Ca.length; j < d; j++) {
                                    q = this.Ca[j];
                                    if ((g = q.oa) &&
                                        g.Bb !== g.ya.length - 3 && (g.hb === this.ea || g.hb === this.sa)) {
                                        s = g.ya[g.ya.length - 2];
                                        h = g.hb.od(s);
                                        this.K.Je(s, h, xa.bi);
                                        g.hb = this.K;
                                        g.ya[g.ya.length - 1] = this.K;
                                        g.je = 0;
                                        g.Mg = p
                                    }
                                }
                                j = new V;
                                j.na(B.Wc);
                                j.ta();
                                j.x = this.T.x;
                                j.y = this.T.y;
                                j.anchor = N.R;
                                s = j.ad(0.05, M.fa.Ta, 21, 25);
                                j.Kc(s).eb = this.Xa.ve();
                                j.P(0);
                                this.Xa.N(j)
                            } else {
                                this.ea.Ei(this.sa, this.ne);
                                this.sa.Ei(this.ea, this.ne)
                            }
                        }
                        if (!this.Lb && !this.Mb && this.I === 0 && O.fh(this.Da, this.Ea)) {
                            this.I = 1;
                            this.ne = this.ea.a.Ga(this.sa.a);
                            this.ea.Je(this.sa, this.ne, xa.si);
                            this.sa.Je(this.ea,
                                this.ne, xa.si)
                        }
                    }
                    this.target.update(a);
                    if (this.S.type !== m.Yc.vf || !this.he) {
                        j = 0;
                        for (d = this.lb.length; j < d; j++) {
                            h = this.lb[j];
                            h.update(a);
                            if (h.timeout > 0 && h.time === 0) {
                                h.Kc(1).eb = this.Xa.ve();
                                this.Xa.N(h);
                                this.lb.splice(j, 1);
                                h.Ac.P(1);
                                h.P(1);
                                break
                            } else {
                                g = p;
                                if (g = this.I !== 2 ? O.fh(this.Da, h) && !this.Lb || O.fh(this.Ea, h) && !this.Mb : O.fh(this.T, h) && !this.ub) {
                                    this.yb.P(1);
                                    this.hg++;
                                    this.ym[this.hg - 1].P(0);
                                    d = new V;
                                    d.na(B.Ik);
                                    d.ta();
                                    d.x = h.x;
                                    d.y = h.y;
                                    d.anchor = N.R;
                                    g = d.ad(0.05, M.fa.Ta, 0, 12);
                                    d.Kc(g).eb = this.Xa.ve();
                                    d.P(0);
                                    this.Xa.N(d);
                                    this.lb.splice(j, 1);
                                    I.H(B.wl + this.hg - 1);
                                    this.target.Gf === 0 && this.target.P(3);
                                    break
                                }
                            }
                        }
                    }
                    j = 0;
                    for (d = this.bubbles.length; j < d; j++) {
                        g = this.bubbles[j];
                        g.update(a);
                        h = F.Zj;
                        l = h * 2;
                        if (this.I != 2) {
                            if (!this.Lb && !g.cf && P.ob(this.Da.x, this.Da.y, g.x - h, g.y - h, l, l)) {
                                this.bc && this.Zf(g.x, g.y);
                                this.bc = g;
                                this.cd.J = i;
                                I.H(B.zg);
                                g.cf = i;
                                g.uj(0);
                                break
                            }
                            if (!this.Mb && !g.cf && P.ob(this.Ea.x, this.Ea.y, g.x - h, g.y - h, l, l)) {
                                this.qc && this.Zf(g.x, g.y);
                                this.qc = g;
                                this.dd.J = i;
                                I.H(B.zg);
                                g.cf = i;
                                g.uj(0);
                                break
                            }
                        } else if (!this.ub && !g.cf &&
                            P.ob(this.T.x, this.T.y, g.x - h, g.y - h, l, l)) {
                            this.pc && this.Zf(g.x, g.y);
                            this.pc = g;
                            this.ac.J = i;
                            I.H(B.zg);
                            g.cf = i;
                            g.uj(0);
                            break
                        }
                        if (!g.On) {
                            o = this.Qa.length;
                            for (l = 0; l < o; l++) {
                                h = this.Qa[l];
                                if (H.Ga(g.x, g.y, h.x, h.y) < h.Nb) g.On = i
                            }
                        }
                    }
                    j = 0;
                    for (d = this.of.length; j < d; j++) {
                        g = this.of[j];
                        g.update(a)
                    }
                    j = 0;
                    for (d = this.Md.length; j < d; j++) {
                        g = this.Md[j];
                        g.update(a)
                    }
                    o = -1;
                    j = 0;
                    for (d = this.Qa.length; j < d; j++) {
                        h = this.Qa[j];
                        for (l = 0; l < f; l++) {
                            q = this.Ca[l];
                            g = h.Gc.indexOf(q);
                            s = H.Ga(q.x, q.y, h.x, h.y);
                            s <= h.Nb + 5 * this.G ? g < 0 && h.Gc.push(q) : g >= 0 && h.Gc.splice(q,
                                1)
                        }
                        w = this.bubbles.length;
                        for (l = 0; l < w; l++) {
                            var g = this.bubbles[l],
                                s = H.Ga(g.x, g.y, h.x, h.y),
                                z = h.Gc.indexOf(g);
                            s <= h.Nb + 10 * this.G ? z < 0 && h.Gc.push(g) : z >= 0 && h.Gc.splice(g, 1)
                        }
                        h.Ox && (o = j);
                        h.update(a)
                    }
                    o >= 0 && this.Qa.splice(o, 1);
                    j = 0;
                    for (d = this.ps.length; j < d; j++) {
                        f = this.ps[j];
                        f.update(a)
                    }
                    j = 0;
                    for (d = this.fg.length; j < d; j++) {
                        h = this.fg[j];
                        h.update(a);
                        f = x.md(h.Xi, 0, 1, a);
                        h.Xi = f.value;
                        if (f.nd) h.state = k.U.IDLE;
                        g = h.rotation;
                        h.rotation = 0;
                        h.Pb();
                        f = this.K.Eb.copy();
                        f.rotate(ba.dc(-g));
                        h.rotation = g;
                        h.Pb();
                        g = this.K.a.x - F.Ag;
                        l =
                            this.K.a.y - F.Ag;
                        s = o = F.Ag * 2;
                        if (f.y >= 0 && (P.Ve(h.Ba.x, h.Ba.y, h.Ia.x, h.Ia.y, g, l, o, s) || P.Ve(h.wa.x, h.wa.y, h.xa.x, h.xa.y, g, l, o, s))) {
                            if (h.state === k.U.IDLE) {
                                for (l = 0; l < d; l++) {
                                    j = this.fg[l];
                                    if (j !== h && j.group === h.group) {
                                        h.state = k.U.nu;
                                        j.state = k.U.Gu;
                                        this.ln(p);
                                        this.ey = 0.9 * this.K.Yb.hd() * F.Pk;
                                        this.qd = j;
                                        h.Kb.P(0);
                                        h.Kb.J = i;
                                        I.H(B.xl);
                                        this.rc.Wd(this, this.ez, n, 0.1);
                                        break
                                    }
                                }
                                break
                            }
                        } else if (h.state !== k.U.IDLE && h.Xi === 0) h.Xi = k.Bt
                    }
                    j = 0;
                    for (d = this.ec.length; j < d; j++) {
                        g = this.ec[j];
                        g.update(a);
                        f = x.md(g.Sh, 0, 1, a);
                        g.Sh = f.value;
                        f.nd && this.wx(g, a)
                    }
                    j = 0;
                    for (d = this.sj.length; j < d; j++) {
                        f = this.sj[j];
                        f.update(a);
                        this.Bb(f, n, n, p)
                    }
                    var D = F.Il,
                        G = D * 2;
                    j = 0;
                    for (d = this.Wb.length; j < d; j++) {
                        h = this.Wb[j];
                        h.update(a);
                        if (!h.Ug || h.Li) {
                            f = g = p;
                            if (this.I !== 2)(g = !this.Lb && c(h, this.ea)) ? f = i : g = !this.Mb && c(h, this.sa);
                            else g = !this.ub && c(h, this.K);
                            if (g) {
                                this.I !== 2 ? f ? this.bc && this.zh(i) : this.qc && this.zh(p) : this.pc && this.zh(p);
                                j = J.Dd(B.Wc);
                                g = new e(5, j);
                                if (this.La && !this.Of) {
                                    g.Ed.y = -500;
                                    g.b = 90
                                }
                                g.eb = this.Xa.Vr();
                                if (this.I != 2)
                                    if (f) {
                                        g.x = this.Da.x;
                                        g.y = this.Da.y;
                                        this.Lb = i
                                    } else {
                                        g.x = this.Ea.x;
                                        g.y = this.Ea.y;
                                        this.Mb = i
                                    }
                                else {
                                    g.x = this.T.x;
                                    g.y = this.T.y;
                                    this.ub = i
                                }
                                g.Qs(5);
                                this.Xa.N(g);
                                I.H(B.cl);
                                this.ln(f);
                                this.Jd !== 0 && this.rc.Wd(this, this.om, n, 0.3);
                                return
                            }
                        }
                    }
                    var Z = F.Wj,
                        R = Z * 2,
                        c = function(a, b) {
                            return P.Ve(a.Ba.x, a.Ba.y, a.Ia.x, a.Ia.y, b.a.x - Z, b.a.y - Z, R, R) || P.Ve(a.wa.x, a.wa.y, a.xa.x, a.xa.y, b.a.x - Z, b.a.y - Z, R, R)
                        };
                    j = 0;
                    for (d = this.Ig.length; j < d; j++) {
                        h = this.Ig[j];
                        h.update(a);
                        f = g = p;
                        if (this.I !== 2)(g = !this.Lb && c(h, this.ea)) ? f = i : g = !this.Mb && c(h, this.sa);
                        else g = !this.ub && c(h, this.K);
                        g ? this.I !== 2 ? f ? this.um(h, this.ea, a) : this.um(h, this.sa, a) : this.um(h, this.K, a) : h.Ls = p
                    }
                    var Q = F.Vn * (this.La && !this.Of ? -1 : 1),
                        L = F.Un;
                    if (this.I === 0) {
                        this.bc && b(this.ea);
                        this.qc && b(this.sa)
                    }
                    if (this.I === 1) {
                        if (this.bc || this.qc) {
                            b(this.ea);
                            b(this.sa)
                        }
                    } else this.pc && b(this.K);
                    if (!this.ub) {
                        f = F.Mk;
                        if (this.Jm) {
                            if (this.sh > 0) {
                                this.sh = x.Xe(this.sh, 0, 1, a);
                                if (this.sh <= 0) {
                                    j = new H(this.target.x, this.target.y);
                                    if (this.K.a.Ga(j) > f) {
                                        this.Jm = p;
                                        this.target.P(8);
                                        I.H(B.il)
                                    } else this.sh = 1
                                }
                            }
                        } else {
                            j = new H(this.target.x, this.target.y);
                            if (this.K.a.Ga(j) < f) {
                                this.Jm = i;
                                this.target.P(7);
                                I.H(B.jl);
                                this.sh = 1
                            }
                        }
                        if (this.Jd !== 0 && O.fh(this.T, this.target)) {
                            this.Uv();
                            return
                        }
                    }
                    j = this.I === 2 && this.cn(this.K) && !this.ub;
                    f = this.I !== 2 && this.cn(this.ea) && !this.Lb;
                    d = this.I !== 2 && this.cn(this.sa) && !this.Mb;
                    if (j || f || d) {
                        if (j) this.ub = i;
                        if (f) this.Lb = i;
                        if (d) this.Mb = i;
                        if (this.Jd !== 0) {
                            if (this.I != 2 && this.Lb && this.Mb) return;
                            this.om();
                            return
                        }
                    }
                    if (this.ha !== 0 && this.ha === 1 && !this.ub && this.pc != n && this.T.y < F.ck && this.T.x > F.bk) {
                        j = this.ha = 0;
                        for (d = this.of.length; j < d; j++) {
                            g =
                                this.of[j];
                            g.ha === 1 && g.P(0)
                        }
                        j = 0;
                        for (d = this.Md.length; j < d; j++) {
                            g = this.Md[j];
                            g.ha === 1 && g.P(0)
                        }
                    }
                    if (this.$l && !this.he) {
                        this.os();
                        j = new H(0, 0);
                        f = H.add(this.Kj, this.S.a);
                        if (g = (j = this.gr(j, f.x, f.y)) ? j.oa : n) {
                            l = p;
                            this.La && this.La.fb(this.La.Em() ? 1 : 0).Se(f.x, f.y, i) && (l = i);
                            if (this.pc || this.I != 2 && (this.bc || this.qc)) {
                                j = 0;
                                for (d = this.bubbles.length; j < d; j++) {
                                    h = this.bubbles[j];
                                    h = F.Yj;
                                    o = h * 2;
                                    if (this.pc && P.ob(f.x, f.y, this.K.a.x - h, this.K.a.y - h, o, o)) {
                                        l = i;
                                        break
                                    }
                                    if (this.bc && P.ob(f.x, f.y, this.ea.a.x - h, this.ea.a.y - h, o, o)) {
                                        l =
                                            i;
                                        break
                                    }
                                    if (this.qc && P.ob(f.x, f.y, this.sa.a.x - h, this.sa.a.y - h, o, o)) {
                                        l = i;
                                        break
                                    }
                                }
                            }
                            j = 0;
                            for (d = this.Wb.length; j < d; j++) {
                                h = this.Wb[j];
                                h.Vb && h.Vb.Se(f.x, f.y, i) && (l = i)
                            }
                            j = 0;
                            for (d = this.ec.length; j < d; j++)
                                if (this.ec[j].bn(f.x, f.y)) {
                                    l = i;
                                    break
                                }
                            j = 0;
                            for (d = this.Qa.length; j < d; j++) {
                                h = this.Qa[j];
                                if (h.Bc.J || h.Cc.J) {
                                    l = i;
                                    break
                                }
                                if (H.Ga(f.x, f.y, h.jd.x, h.jd.y) <= F.Td || H.Ga(f.x, f.y, h.jd.x, h.jd.y) <= F.Td) {
                                    l = i;
                                    break
                                }
                            }
                            j = 0;
                            for (d = this.Ca.length; j < d; j++) {
                                q = this.Ca[j];
                                if (q.n && P.ob(f.x, f.y, q.x - F.Vc, q.y - F.Vc, F.Vc * 2, F.Vc * 2)) {
                                    l = i;
                                    break
                                }
                                if (q.q >
                                    0 && (P.ob(f.x, f.y, q.x - F.De, q.y - F.De, F.De * 2, F.De * 2) || q.Ye !== K.c)) {
                                    l = i;
                                    break
                                }
                            }
                            if (!l) g.$g = i
                        }
                    }
                    d = x.md(this.Me, 0, 1, a);
                    this.Me = d.value;
                    if (d.nd)
                        if (this.Jd === 0) {
                            this.Jd = 1;
                            this.hide();
                            this.show();
                            this.Me = K.gk
                        } else this.Jd = K.c
                },
                ez: function() {
                    if (this.qd) {
                        this.qd.Kb.P(0);
                        this.qd.Kb.J = i;
                        var a = new H(0, F.Cl);
                        a.rotate(ba.dc(this.qd.rotation));
                        this.K.a.x = this.qd.x;
                        this.K.a.y = this.qd.y;
                        this.K.a.add(a);
                        this.K.ka.ba(this.K.a);
                        this.K.Yb.x = 0;
                        this.K.Yb.y = -1;
                        this.K.Yb.rotate(ba.dc(this.qd.rotation));
                        this.K.Yb.multiply(this.ey);
                        this.K.Eb.ba(this.K.Yb);
                        this.K.Eb.gm(60);
                        this.K.ka.ba(this.K.a);
                        this.K.ka.bb(this.K.Eb);
                        this.qd = n
                    }
                },
                Xu: function() {
                    this.Jd = 0;
                    this.Me = K.gk
                },
                sw: function() {
                    return this.Jd === 0
                },
                ln: function(a) {
                    for (var b = 0, c = this.Ca.length; b < c; b++) {
                        var j = this.Ca[b],
                            d = j.oa;
                        if (d && (d.hb === this.K || d.hb === this.ea && a || d.hb === this.sa && !a)) {
                            d.Bb === K.c ? d.rn(d.ya.length - 2) : d.lr = i;
                            j.Lc && j.gg && this.zn(j)
                        }
                    }
                },
                jv: function() {
                    this.Rh = Math.max(0, 30 - this.time) * 100;
                    this.Rh = this.Rh / 10;
                    this.Rh = this.Rh * 10;
                    this.Zy = 1E3 * this.hg;
                    this.Dj = Math.ceil(this.Rh +
                        this.Zy)
                },
                Uv: function() {
                    this.rc.Zl();
                    this.target.P(6);
                    I.H(B.hl);
                    this.pc && this.zh(p);
                    this.ub = i;
                    this.T.oe = i;
                    this.zb.Q = this.zb.aa = 1;
                    this.Fc.Q = this.Fc.aa = 1;
                    var a = new M;
                    a.m(D.Na(this.T.x, this.T.y, D.l.LINEAR, 0));
                    a.m(D.Na(this.target.x, this.target.y + 10, D.l.LINEAR, 0.1));
                    a.m(D.ej(0.71, 0.71, D.l.LINEAR, 0));
                    a.m(D.ej(0, 0, D.l.LINEAR, 0.1));
                    a.m(D.ua(R.kb.copy(), D.l.LINEAR, 0));
                    a.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0.1));
                    this.T.Jb(a, 0);
                    this.T.P(0);
                    a.eb = this.Xa.ve();
                    this.Xa.N(this.T);
                    this.jv();
                    this.ln(p);
                    var b = this;
                    G.Hs &&
                        this.rc.Wd(this, function() {
                            Z.Ub(Z.ia.cp, {
                                lb: b.hg,
                                time: b.time,
                                Dj: b.Dj,
                                ar: 1 / b.Xg.Ec
                            })
                        }, n, 1);
                    this.rc.Wd(this, function() {
                        this.Xg.Om.call(this.Xg)
                    }, n, 1.8)
                },
                om: function() {
                    this.rc.Zl();
                    this.target.P(5);
                    I.H(B.kl);
                    this.rc.Wd(this, function() {
                        this.Xg.ox.call(this.Xg);
                        Z.Ub(Z.ia.fu, {
                            time: this.time
                        })
                    }, n, 1)
                },
                p: function() {
                    var a = L.context;
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.clearRect(0, 0, F.qb, F.cb);
                    this.yc();
                    this.S.Zu();
                    this.back.qt(this.S.a);
                    this.back.p();
                    var b, c;
                    if (this.kd > F.cb) {
                        c = this.Ym.g[0].y;
                        b = this.Ym.d[0];
                        a.drawImage(this.Ym.Mc,
                            b.x, b.y + 2, b.B, b.M - 4, 0, c + 2, b.B, b.M - 4)
                    }
                    a = 0;
                    for (b = this.be.length; a < b; a++) this.be[a].p();
                    a = 0;
                    for (b = this.Bd.length; a < b; a++) this.Bd[a].p();
                    this.pe && this.pe.p();
                    this.La && this.La.p();
                    this.support.p();
                    this.target.p();
                    a = 0;
                    for (b = this.of.length; a < b; a++) this.of[a].p();
                    a = 0;
                    for (b = this.Md.length; a < b; a++) {
                        c = this.Md[a];
                        c.ha !== 2 && c.p()
                    }
                    a = 0;
                    for (b = this.sj.length; a < b; a++) this.sj[a].p();
                    a = 0;
                    for (b = this.Qa.length; a < b; a++) this.Qa[a].p();
                    a = 0;
                    for (b = this.bubbles.length; a < b; a++) this.bubbles[a].p();
                    a = 0;
                    for (b = this.ec.length; a < b; a++) this.ec[a].p();
                    a = 0;
                    for (b = this.Wb.length; a < b; a++) this.Wb[a].p();
                    a = 0;
                    for (b = this.Ig.length; a < b; a++) this.Ig[a].p();
                    a = 0;
                    for (b = this.fg.length; a < b; a++) {
                        c = this.fg[a];
                        c.y = c.y - 25;
                        c.p();
                        c.y = c.y + 25
                    }
                    c = this.Ca;
                    a = 0;
                    for (b = c.length; a < b; a++) c[a].Av();
                    for (a = 0; a < b; a++) c[a].p();
                    a = 0;
                    for (b = this.lb.length; a < b; a++) this.lb[a].p();
                    if (!this.ub && !this.qd) {
                        this.T.x = this.K.a.x;
                        this.T.y = this.K.a.y;
                        this.T.p();
                        this.yb.Ab != n && this.yb.p()
                    }
                    if (this.I !== 2) {
                        if (!this.Lb) {
                            this.Da.x = this.ea.a.x;
                            this.Da.y = this.ea.a.y;
                            this.Da.p()
                        }
                        if (!this.Mb) {
                            this.Ea.x = this.sa.a.x;
                            this.Ea.y = this.sa.a.y;
                            this.Ea.p()
                        }
                    }
                    a = 0;
                    for (b = c.length; a < b; a++) {
                        var j = c[a];
                        j.Lc && j.Ev()
                    }
                    this.Xa.p();
                    this.Cv();
                    this.S.kv();
                    this.ig.p();
                    a = 0;
                    for (b = this.Md.length; a < b; a++) {
                        c = this.Md[a];
                        c.ha === 2 && c.p()
                    }
                    this.xc()
                },
                Cv: function() {
                    for (var a = F.ek, b = 0; b < K.mc; b++) {
                        var c = this.Ri[b],
                            j = c.length;
                        if (j > 0) {
                            for (var d = 1, e = n, f = [], g = 0, h = 0; h < j; h++) {
                                e = c[h];
                                if (h === 0) f[g++] = e.start;
                                f[g++] = e.end
                            }
                            h = n;
                            j = j * 2;
                            c = [];
                            e = 1 / j;
                            for (g = 0;;) {
                                g > 1 && (g = 1);
                                h = H.Fq(f, g);
                                c.push(h);
                                if (g === 1) break;
                                g = g + e
                            }
                            f = a / j;
                            e = [];
                            h = 0;
                            for (g = j - 1; h < g; h++) {
                                var k = d,
                                    l = h ===
                                    j - 1 ? 1 : d + f,
                                    m = c[h],
                                    o = c[h + 1],
                                    q = H.bb(o, m);
                                q.normalize();
                                var s = H.Kx(q),
                                    q = H.Xr(q),
                                    t = H.add(m, H.multiply(s, k)),
                                    k = H.add(m, H.multiply(q, k));
                                e.push(k);
                                e.push(t);
                                s = H.add(o, H.multiply(s, l));
                                l = H.add(o, H.multiply(q, l));
                                e.push(l);
                                e.push(s);
                                d = d + f
                            }
                            L.Mv(e, R.Dn.Dl)
                        }
                    }
                },
                wm: function(a, b, c, j) {
                    var d = F.Yk;
                    if (c.Mx(a.x - d, a.y - d, a.x + d, a.y + d)) {
                        var e = new H(0, 0),
                            f = new H(0, 0),
                            g = new H(c.x, c.y);
                        e.x = a.x - a.Z.B / 2;
                        f.x = a.x + a.Z.B / 2;
                        e.y = f.y = a.y;
                        a.b != 0 && g.la(-a.b, a.x, a.y);
                        if (g.y < e.y && P.Ch(g.x - c.Z.B / 2, g.y - c.Z.M / 2, g.x + c.Z.B / 2, g.y + c.Z.M / 2, e.x,
                                e.y - d, f.x, f.y)) {
                            c = new H(0, -(d * 2 * (d - (e.y - g.y)) / d));
                            c.rotate(a.b);
                            b.Sl(c, j)
                        }
                    }
                },
                um: function(a, b, c) {
                    if (!a.Ls) {
                        var j = H.bb(b.ka, b.a),
                            d = b.ka.copy();
                        d.la(-a.b, a.x, a.y);
                        d = d.y < a.y ? -1 : 1;
                        j = Math.max(j.hd() * 40, F.Vj) * d;
                        d = H.Xr(H.Nv(a.b));
                        d.multiply(j);
                        b.a.la(-a.b, a.x, a.y);
                        b.ka.la(-a.b, a.x, a.y);
                        b.ka.y = b.a.y;
                        b.a.la(a.b, a.x, a.y);
                        b.ka.la(a.b, a.x, a.y);
                        b.Sl(d, c);
                        a.P(0);
                        I.H(B.$k)
                    }
                },
                wx: function(a, b) {
                    a.P(0);
                    I.H(t.gb(B.ll, B.ml));
                    var c = J.Dd(B.ni),
                        c = new g(5, c, ba.kg(a.b) - 90);
                    c.eb = this.Xa.Vr();
                    var j = new H(a.x + F.Vk, a.y);
                    j.la(a.b -
                        Math.PI / 2, a.x, a.y);
                    c.x = j.x;
                    c.y = j.y;
                    c.Qs(5);
                    this.Xa.N(c);
                    this.ub || this.wm(a, this.K, this.T, b);
                    if (this.I !== 2) {
                        this.Lb || this.wm(a, this.ea, this.Da, b);
                        this.Mb || this.wm(a, this.sa, this.Ea, b)
                    }
                },
                Bb: function(a, b, c, j) {
                    for (var d = 0, e = 0, f = this.Ca.length; e < f; e++) {
                        var g = this.Ca[e],
                            h = g.oa;
                        if (h && h.Bb === K.c)
                            for (var k = F.Vc, l = k * 2, m = 0, o = h.ya.length - 1; m < o; m++) {
                                var q = h.ya[m],
                                    s = h.ya[m + 1],
                                    u = p;
                                a ? q.ka.x !== K.Ee && (u = P.Ch(t.Ar(q.a.x, q.ka.x, s.a.x, s.ka.x), t.Ar(q.a.y, q.ka.y, s.a.y, s.ka.y), t.yr(q.a.x, q.ka.x, s.a.x, s.ka.x), t.yr(q.a.y,
                                    q.ka.y, s.a.y, s.ka.y), a.ca, a.da, a.ca + a.width, a.da + a.height)) : u = g.n && P.Ve(b.x, b.y, c.x, c.y, g.x - k, g.y - k, l, l) ? p : t.xw(b.x, b.y, c.x, c.y, q.a.x, q.a.y, s.a.x, s.a.y);
                                if (u) {
                                    d++;
                                    g.Lc && g.gg && this.zn(g);
                                    I.H(B.nl + h.kn);
                                    h.rn(m);
                                    if (j) {
                                        h.Zd = 0;
                                        h.ms(m)
                                    }
                                    return d
                                }
                            }
                    }
                    return d
                },
                zn: function(a) {
                    I.H(B.sl);
                    a.Lc = p;
                    var b = wa.create(B.ug, 11);
                    b.ta();
                    var c = new M;
                    if (this.La && !this.Of) {
                        c.m(D.Na(a.e.x, a.e.y, D.l.Hb, 0));
                        c.m(D.Na(a.e.x, a.e.y + 50, D.l.Hb, 0.3));
                        c.m(D.Na(a.e.x, a.e.y - F.cb, D.l.wd, 1))
                    } else {
                        c.m(D.Na(a.e.x, a.e.y, D.l.Hb, 0));
                        c.m(D.Na(a.e.x,
                            a.e.y - 50, D.l.Hb, 0.3));
                        c.m(D.Na(a.e.x, a.e.y + F.cb, D.l.wd, 1))
                    }
                    c.m(D.me(0, 0, 0));
                    c.m(D.me(t.gb(-120, 120), 0, 1));
                    b.Jb(c, 0);
                    b.P(0);
                    b.x = a.e.x;
                    b.y = a.e.y;
                    b.anchor = N.R;
                    c.eb = this.Xa.ve();
                    this.Xa.N(b)
                },
                Yy: function(a) {
                    I.H(B.tl);
                    for (var b = 0, c = this.Ca.length; b < c; b++) {
                        var j = this.Ca[b],
                            d = j.oa;
                        if (d && d.hb === this.K) {
                            if (d.Bb !== K.c) j.Rq();
                            else {
                                d.rn(d.ya.length - 2);
                                d.Lf = p
                            }
                            j.Lc && j.gg && a !== j && this.zn(j)
                        }
                    }
                    a.Lc = p;
                    this.ub = i;
                    b = wa.create(B.ug, 12);
                    b.ta();
                    this.T.anchor = this.T.ma = N.R;
                    this.T.x = 0;
                    this.T.y = -5;
                    b.N(this.T);
                    c = new M;
                    if (this.La &&
                        !this.Of) {
                        c.m(D.Na(a.e.x, a.e.y - 10, D.l.Hb, 0));
                        c.m(D.Na(a.e.x, a.e.y + 70, D.l.Hb, 0.3));
                        c.m(D.Na(a.e.x, a.e.y - F.cb, D.l.wd, 1))
                    } else {
                        c.m(D.Na(a.e.x, a.e.y - 10, D.l.Hb, 0));
                        c.m(D.Na(a.e.x, a.e.y - 70, D.l.Hb, 0.3));
                        c.m(D.Na(a.e.x, a.e.y + F.cb, D.l.wd, 1))
                    }
                    b.Jb(c, 0);
                    b.P(0);
                    b.x = a.e.x;
                    b.y = a.e.y - 10;
                    b.anchor = N.R;
                    c.eb = this.Xa.ve();
                    this.Xa.N(b);
                    this.Jd !== 0 && this.rc.Wd(this, this.om, n, 2)
                },
                zh: function(a) {
                    if (this.I !== 2)
                        if (a) {
                            this.bc = n;
                            this.cd.J = p;
                            this.Zf(this.Da.x, this.Da.y)
                        } else {
                            this.qc = n;
                            this.dd.J = p;
                            this.Zf(this.Ea.x, this.Ea.y)
                        }
                    else {
                        this.pc =
                            n;
                        this.ac.J = p;
                        this.Zf(this.T.x, this.T.y)
                    }
                },
                Zf: function(a, b) {
                    I.H(B.al);
                    var c = new V;
                    c.na(B.yk);
                    c.ta();
                    c.x = a;
                    c.y = b;
                    c.anchor = N.R;
                    var j = c.ad(0.05, M.fa.Ta, 0, 11);
                    c.Kc(j).eb = this.Xa.ve();
                    c.P(0);
                    this.Xa.N(c)
                },
                vm: function(a, b, c) {
                    if (P.ob(b + this.S.a.x, c + this.S.a.y, a.a.x - F.Wh, a.a.y - F.Wh, F.Xh, F.Xh)) {
                        this.zh(a === this.ea);
                        return i
                    }
                    return p
                },
                os: function() {
                    for (var a = 0, b = this.Ca.length; a < b; a++) {
                        var c = this.Ca[a].oa;
                        if (c && c.Bb === K.c) c.$g = p
                    }
                },
                gr: function(a, b, c) {
                    for (var j = F.dk, d = n, e = j, b = new H(b, c), c = 0, f = this.Ca.length; c <
                        f; c++) {
                        var g = this.Ca[c],
                            h = g.oa;
                        if (h)
                            for (var k = 0, l = h.Ne.length; k < l; k++) {
                                var m = h.Ne[k],
                                    o = m.Ga(b);
                                if (o < j && o < e) {
                                    e = o;
                                    d = g;
                                    a.ba(m)
                                }
                            }
                    }
                    return d
                },
                aw: function(a, b) {
                    var c = n,
                        j = Number.MAX_VALUE,
                        d = a.copy(),
                        e = b.oa;
                    if (!e || e.Bb !== K.c) return n;
                    for (var f = F.Vc, g = f * 2, h = 0, k = e.ya.length - 1; h < k; h++) {
                        var l = e.ya[h],
                            m = l.a.Ga(d);
                        if (m < j && (!b.n || P.ob(l.a.x, l.a.y, b.x - f, b.y - f, g, g))) {
                            j = m;
                            c = e;
                            a.ba(l.a)
                        }
                    }
                    return c
                },
                iz: function(a, b, c) {
                    if (this.he) {
                        if (this.S.type === m.Yc.vf) this.Zq = i;
                        return i
                    }
                    if (c >= K.mc) return i;
                    this.mj = p;
                    if (this.La && this.La.fb(this.La.Em() ?
                            1 : 0).Se(a + this.S.a.x, b + this.S.a.y, i)) {
                        this.tm = c;
                        return i
                    }
                    if (this.pc && this.vm(this.K, a, b) || this.I !== 2 && (this.bc && this.vm(this.ea, a, b) || this.qc && this.vm(this.sa, a, b))) return i;
                    var j = new H(a, b);
                    if (!this.Qg[c]) {
                        this.Qg[c] = i;
                        this.te[c].ba(j);
                        this.dn[c].ba(j)
                    }
                    var d, e, f = this.S.a,
                        j = a + f.x,
                        f = b + f.y;
                    d = 0;
                    for (e = this.Wb.length; d < e; d++) {
                        var g = this.Wb[d];
                        if (g.Vb && g.Sj === K.c && g.Vb.kj(j, f)) {
                            g.Sj = c;
                            return i
                        }
                    }
                    d = 0;
                    for (e = this.ec.length; d < e; d++) {
                        g = this.ec[d];
                        if (g.bn(j, f)) {
                            g.Sh = 0.05;
                            g.touch = c;
                            return i
                        }
                    }
                    var g = n,
                        h = p,
                        k = p;
                    d =
                        0;
                    for (e = this.Qa.length; d < e; d++) {
                        var l = this.Qa[d],
                            o = H.Ga(j, f, l.Pf.x, l.Pf.y),
                            q = H.Ga(j, f, l.jd.x, l.jd.y);
                        if (o < F.Td && !l.kr() || q < F.Td) {
                            for (d = d + 1; d < e; d++) {
                                var g = this.Qa[d],
                                    s = H.Ga(g.x, g.y, l.x, l.y);
                                s + g.Nb <= l.Nb && (h = i);
                                s <= l.Nb + g.Nb && (k = i)
                            }
                            l.qh.x = j;
                            l.qh.y = f;
                            l.wh = c;
                            o < F.Td && l.ws(i);
                            q < F.Td && l.xs(i);
                            g = l;
                            break
                        }
                    }
                    e = this.Qa.indexOf(g);
                    if (e != this.Qa.length - 1 && k && !h) {
                        d = new M;
                        d.m(D.ua(R.Gb.copy(), D.l.LINEAR, 0));
                        d.m(D.ua(R.kb.copy(), D.l.LINEAR, 0.2));
                        h = new M;
                        h.m(D.ua(R.kb.copy(), D.l.LINEAR, 0.2));
                        h.eb = $.proxy(this.sx, this);
                        k = g.copy();
                        k.uq(h);
                        k.P(0);
                        g.uq(d);
                        g.P(0);
                        this.Qa[e] = k;
                        this.Qa.push(g)
                    }
                    h = F.Vc;
                    k = h * 2;
                    l = F.De;
                    o = l * 2;
                    d = 0;
                    for (e = this.Ca.length; d < e; d++) {
                        g = this.Ca[d];
                        if (g.n && P.ob(j, f, g.x - h, g.y - h, k, k)) {
                            g.iw(j, f);
                            g.og = c
                        }
                        if (g.q > 0 && P.ob(j, f, g.x - l, g.y - l, o, o)) {
                            g.Ye = c;
                            return i
                        }
                    }
                    if (this.$l) {
                        c = H.Pa();
                        (j = (g = this.gr(c, j, f)) ? g.oa : n) && j.$g && this.aw(c, g) && this.Bb(n, c, c, p)
                    }
                    if (this.target.Yr(a, b)) this.mj = i;
                    return i
                },
                Pg: ha(i),
                lz: function(a, b, c) {
                    if (this.he) return i;
                    this.Qg[c] = p;
                    if (this.mj && this.target.Yr(a, b)) {
                        this.mj = p;
                        Z.Ub(Z.ia.gp)
                    } else {
                        this.mj =
                            p;
                        var j, d;
                        j = this.S.a;
                        var e = a + j.x,
                            f = b + j.y;
                        j = 0;
                        for (d = this.be.length; j < d; j++) {
                            var g = this.be[j];
                            if (g.bn(e, f)) {
                                g.vn();
                                this.be.splice(j, 1);
                                break
                            }
                        }
                        if (this.La && this.tm === c) {
                            if (this.La.fb(this.La.Em() ? 1 : 0).Se(a + this.S.a.x, b + this.S.a.y, i)) {
                                this.La.toggle();
                                this.Db(ea.qo)
                            }
                            this.tm = K.c
                        }
                        j = 0;
                        for (d = this.Wb.length; j < d; j++) {
                            e = this.Wb[j];
                            if (e.Vb && e.Sj === c) {
                                e.Sj = K.c;
                                if (e.Vb.lj(a + this.S.a.x, b + this.S.a.y)) return i
                            }
                        }
                        j = 0;
                        for (d = this.Qa.length; j < d; j++) {
                            a = this.Qa[j];
                            if (a.wh === c) {
                                a.wh = K.c;
                                a.yn = K.c;
                                a.ws(p);
                                a.xs(p)
                            }
                        }
                        j = 0;
                        for (d =
                            this.Ca.length; j < d; j++) {
                            a = this.Ca[j];
                            if (a.n && a.og === c) a.og = K.c;
                            if (a.q > 0 && a.Ye === c) a.Ye = K.c
                        }
                        return i
                    }
                },
                kz: function(a, b, c) {
                    if (this.he || c >= K.mc) return i;
                    var j = new H(a, b),
                        e, f;
                    if (this.te[c].Ga(j) > 10) {
                        e = 0;
                        for (f = this.ec.length; e < f; e++) {
                            var g = this.ec[e];
                            if (g.touch === c && g.Sh !== 0) g.Sh = 0
                        }
                    }
                    this.Kj.ba(j);
                    a = new H(a + this.S.a.x, b + this.S.a.y);
                    e = 0;
                    for (f = this.Qa.length; e < f; e++) {
                        b = this.Qa[e];
                        if (b.wh === c) {
                            c = new H(b.x, b.y);
                            c.Ga(a) < b.Nb / 10 && b.qh.ba(a);
                            e = H.bb(b.qh, c);
                            j = H.bb(a, c).Wf() - e.Wf();
                            j > Math.PI ? j = j - 2 * Math.PI : j < -Math.PI &&
                                (j = j + 2 * Math.PI);
                            b.Pf.la(j, b.x, b.y);
                            b.jd.la(j, b.x, b.y);
                            b.rotation = b.rotation + ba.kg(j);
                            e = j > 0 ? B.pl : B.ql;
                            if (Math.abs(j) < 0.07) e = K.c;
                            if (b.yn != e && e != K.c) {
                                I.H(e);
                                b.yn = e
                            }
                            e = 0;
                            for (f = this.Ca.length; e < f; e++) {
                                var g = this.Ca[e],
                                    h = new H(g.x, g.y);
                                if (h.Ga(c) <= b.Nb + 5 * this.G) {
                                    h.la(j, b.x, b.y);
                                    g.x = h.x;
                                    g.y = h.y;
                                    if (g.oa) {
                                        g.oa.Ya.a.ba(h);
                                        g.oa.Ya.Oc.ba(h)
                                    }
                                }
                            }
                            e = 0;
                            for (f = this.ec.length; e < f; e++) {
                                g = this.ec[e];
                                h = new H(g.x, g.y);
                                if (h.Ga(c) <= b.Nb + 5 * this.G) {
                                    h.la(j, b.x, b.y);
                                    g.x = h.x;
                                    g.y = h.y;
                                    g.rotation = g.rotation + ba.kg(j);
                                    g.Pb()
                                }
                            }
                            e = 0;
                            for (f =
                                this.bubbles.length; e < f; e++) {
                                g = this.bubbles[e];
                                h = new H(g.x, g.y);
                                if (h.Ga(c) <= b.Nb + 10 * this.G && g !== this.pc && g !== this.qc && g !== this.bc) {
                                    h.la(j, b.x, b.y);
                                    g.x = h.x;
                                    g.y = h.y
                                }
                            }
                            if (P.ob(this.target.x, this.target.y, b.x - b.size, b.y - b.size, 2 * b.size, 2 * b.size)) {
                                h = new H(this.target.x, this.target.y);
                                h.la(j, b.x, b.y);
                                this.target.x = h.x;
                                this.target.y = h.y
                            }
                            b.qh.ba(a);
                            return i
                        }
                    }
                    e = 0;
                    for (f = this.Ca.length; e < f; e++)
                        if (b = this.Ca[e]) {
                            if (b.n && b.og === c) {
                                b.hw(a);
                                return i
                            }
                            if (b.q > 0 && b.Ye === c) {
                                b.A ? b.y = t.Jf(a.y, b.hj, b.gj) : b.x = t.Jf(a.x, b.hj,
                                    b.gj);
                                if (b.oa) {
                                    e = b.oa.Ya;
                                    e.a.x = e.Oc.x = b.x;
                                    e.a.y = e.Oc.y = b.y
                                }
                                return i
                            }
                        }
                    if (this.Qg[c]) {
                        e = new d(H.add(this.te[c], this.S.a), H.add(j, this.S.a), 5, 5, R.ut.copy());
                        a = this.Ri[c];
                        b = 0;
                        a.push(e);
                        e = 0;
                        for (f = a.length; e < f; e++) {
                            g = a[e];
                            b = b + this.Bb(n, g.start, g.end, p)
                        }
                        if (b > 0) {
                            this.Rv = p;
                            this.pn = this.pn > 0 && this.yj > 0 ? this.pn + b : b;
                            this.yj = 0.1
                        }
                        this.dn[c].ba(this.te[c]);
                        this.te[c].ba(j)
                    }
                    return i
                },
                jz: function(a, b, c) {
                    if (c > K.mc) return p;
                    this.Kj.x = a;
                    this.Kj.y = b;
                    return i
                },
                Db: function() {
                    qa.toggle();
                    this.Of = qa.or();
                    I.H(this.Of ? B.fl :
                        B.gl);
                    for (var a = 0, b = this.Bd.length; a < b; a++) {
                        var c = this.Bd[a];
                        qa.or() ? c.P(na.yi.wg) : c.P(na.yi.iq)
                    }
                },
                Zx: function(a) {
                    for (var b = 0, c = this.Wb.length; b < c; b++) this.Wb[b].mf === a && this.Wb[b].ay()
                }
            })
        }(Zb, Jb, Sb, gc, function(b, c, e, a, d) {
            this.start = b;
            this.end = c;
            this.color = d
        }, ic, Kb, Ub, $b, jc, ac, Qb, Sa, Ya, Hb, ab, bb, zb, tb, Wb, Mb, Lb, hc, r, T, wb, Fa, S, ta, Da, X, ib, hb, Na, ua, Vb, gb, Ib, Yb, Pb, bc, za, U, sb, ub, db, Ba, Bb, eb, xb, lb, lc, W, cc, La, dc),
        nc = function(b, c, e, a, d, f) {
            return b.extend({
                init: function(a) {
                    this.h(a);
                    this.hz = Array(f.mc);
                    this.Rl =
                        p
                },
                $c: function() {
                    this.h();
                    a.an(d.el);
                    this.pv();
                    this.nw();
                    this.Is(0)
                },
                pv: function() {
                    for (var a = 0; a < f.mc; a++) this.hz[a] = 0;
                    var a = new e,
                        b = new c;
                    b.Xg = this;
                    b.Yu = this.Rl;
                    this.Rl = p;
                    a.Ud(b, e.Tc.Uc);
                    this.Wu(a, 0)
                },
                nw: function() {
                    this.tn(p);
                    this.ww()
                },
                ww: function() {
                    this.Cm = p
                },
                FA: function() {
                    this.Cm = p
                },
                Om: function() {
                    a.H(d.zl);
                    this.fd()
                },
                ox: function() {
                    this.wj()
                },
                tn: function(b) {
                    this.Cm = b;
                    var c = this.Qe(0);
                    if (c)
                        if (c = c.fb(e.Tc.Uc)) {
                            c.Xb = !b;
                            c.Uh = !b;
                            b ? a.Cx() : a.Wx()
                        }
                },
                Yf: function() {
                    var a = this.Qe(0);
                    if (a)
                        if (a = a.fb(e.Tc.Uc)) {
                            a.Me =
                                0;
                            this.tn(i)
                        }
                },
                ag: function() {
                    this.tn(p)
                },
                wj: function() {
                    this.tv(0);
                    this.Rl = i;
                    this.$c()
                },
                ij: function(a, b) {
                    if (this.h(a, b)) return i;
                    var c = this.Qe(0);
                    if (c)
                        if ((c = c.fb(e.Tc.Uc)) && c.Xb) {
                            c.iz(a, b, 0);
                            return i
                        }
                    return p
                },
                Br: function(a, b) {
                    if (this.h(a, b)) return i;
                    var c = this.Qe(0);
                    if (c)
                        if ((c = c.fb(e.Tc.Uc)) && c.Xb) {
                            c.jz(a, b, 0);
                            return i
                        }
                    return p
                },
                Cr: function(a, b) {
                    if (this.h(a, b)) return i;
                    var c = this.Qe(0);
                    if (c)
                        if ((c = c.fb(e.Tc.Uc)) && c.Xb) {
                            c.kz(a, b, 0);
                            return i
                        }
                    return p
                },
                Uf: function(a, b) {
                    if (this.h(a, b)) return i;
                    var c = this.Qe(0);
                    if (c)
                        if ((c = c.fb(e.Tc.Uc)) && c.Xb) {
                            c.lz(a, b, 0);
                            return i
                        }
                    return p
                },
                Pg: function(a, b) {
                    if (this.h(a, b)) return i;
                    var c = this.Qe(0);
                    if (c)
                        if ((c = c.fb(e.Tc.Uc)) && c.Xb) {
                            c.Pg(a, b, 0);
                            return i
                        }
                    return p
                }
            })
        }(kb, mc, ec, hc, r, T),
        oc = function(b, c, e, a, d) {
            return new(c.extend({
                init: function(a) {
                    this.h(a)
                },
                Cn: function(a, c) {
                    d.Iw(a, c);
                    this.Le === b.U.vg && this.$c();
                    var g = this.fb(3);
                    g && g.Pq();
                    g = new e(this);
                    this.Ud(g, 3);
                    this.Qu(3)
                },
                Yf: function() {
                    var a = this.fb(3);
                    a && a.Yf()
                },
                ag: function() {
                    var a = this.fb(3);
                    a && a.ag()
                },
                wj: function() {
                    var a =
                        this.fb(3);
                    a && a.wj()
                },
                Us: function() {
                    this.Oq()
                },
                tw: function() {
                    if (this.Le === b.U.vg) return p;
                    var a = this.fb(3);
                    return !a || a.Le === b.U.vg || a.Cm ? p : i
                },
                Gr: function(a) {
                    this.h(a);
                    a == 3 && this.sv(3)
                }
            }))
        }(kb, kc, nc, Na, hb),
        pc = function(Text, c, e, a, d) {
            var f = {
                    t: "I just finished playing Cut the Rope on the web with %d (out of %d possible) stars!",
                    u: "",
                    s: "",
                    v: ""
                },
                h = {
                    Be: i,
                    Gz: p,
                    Lu: p,
                    NA: i,
					
                    imageBaseUrl: "/images/",
                    resolutionBaseUrl: "/images/" + c.He + "/",
                    uiImageBaseUrl: "/images/" + c.He + "/ui/",
					
                    audioBaseUrl: "/audio/",
                    getAudioExtension: function() {
                        return !soundManager.useHTML5Audio ? ".m4a" : Modernizr.audio.m4a ?
                            ".m4a" : Modernizr.audio.ogg ? ".ogg" : n
                    },
					
                    videoBaseUrl: "/video/",
                    getVideoExtension: function() {
                        return Modernizr.video.h264 ? ".mp4" : Modernizr.audio.ogg ? ".ogv" : n
                    },
					
                    getDrawingBaseUrl: function() {
                        var a = window.location;
                        return a.protocol + "//" + a.host + "/images/" + c.He + "/ui/"
                    },
                    getScoreImageBaseUrl: function() {
                        var a = window.location;
                        return a.protocol + "//" + a.host + "/images/scores/"
                    },
					updateSoundOption: function ($el, isSoundOn) {
						$el.toggleClass('disabled', !isSoundOn);
					},
					updateMusicOption: function ($el, isMusicOn) {
						$el.toggleClass('disabled', !isMusicOn);
					},
                    toggleLangUI: function(show) {
                        $("#langBtn").toggle(show)
                    },
                    setLangOptionClick: function(callback) {
                        $("#langBtn").click(callback)
                    },
                    updateLangSetting: function() {
                        h.setOptionText($("#langBtn"),
                            e.$(a.$o));

                        // Chrome has a layout bug where the css offset on the flag
                        // icon is not changed immediately. Retrieving the offset
                        // forces the browser to query location which fixes layout.
                        $("#flag").offset()
                    },
                    setCutOptionClick: function(a) {
                        $("#cutBtn").click(a)
                    },
                    updateCutSetting: function(isClickToCut) {

						// fonts use game sized assets based on canvas size
						var textWidth = 400 * c.$b,

						// scale need to take UI size into account
							scale = 0.8 * c.Zc,
							alignment = d.Dc;

						// we update the drag text because language changes just
						// reset the current click state
                        Text.drawSmall({
                            text: e.$(a.po),
                            width: textWidth,
                            dh: "dragText",
                            scale: scale,
                            Cf: alignment
                        });
                        Text.drawSmall({
                            text: e.$(a.co),
                            width: textWidth,
                            dh: "cutText",
                            scale: scale,
                            Cf: alignment
                        });
                        $("#cutBtn").toggleClass("disabled", !isClickToCut)
                    },
                    setResetText: function($el, text) {
                        h.setOptionText($el, text)
                    },
                    setOptionText: function($button, text) {
                        Text.Ua({ text: text, W: $button.find("img")[0], va: true })
                    },
                    getGameCompleteShareText: function(a, b) {
                        return e.fw(f).replace("%d", a).replace("%d", b)
                    },
                    meetsRequirements: function() {
						// does the browser have the HTML5 features we need?
                        var meetsReqs = 
							Modernizr.canvas && 
								Modernizr.audio && 
								Modernizr.video && 
								Modernizr.localstorage &&
								Modernizr.rgba &&
								Modernizr.opacity &&
								Modernizr.fontface &&
								Modernizr.csstransforms &&
								Modernizr.hq;

                        if (!meetsReqs) {
							// load the css for the downlevel experience
                            Modernizr.load({
                                load: "css!css/nosupport.css?42"
                            });

							// remove youtube video if it exists
							/* $(function() {
								$('#yt-video').remove();
							}); */

							// track views of the ugprade page
                            _gaq.push(["_trackEvent", "Upgrade", "View"])
                        }
                        return meetsReqs;
                    }
                };
            return h
        }(Ob, X, lc, W, ua),
        qc = function() {
            var b = window.soundManager,
                c = [];
            b.useHTML5Audio = !/chrome/.test(navigator.userAgent.toLowerCase());
            b.preferFlash = !b.useHTML5Audio;
            b.url = "/sm2/";
            b.flashVersion = 9;
            b.useHighPerformance = i;
            b.flashLoadTimeout = 500;
            b.audioFormats.mp3.required = p;
            b.ontimeout(function() {
                b.useHTML5Audio =
                    i;
                b.preferFlash = p;
                b.reboot()
            });
            b.onready(function() {
                for (var b = 0, a = c.length; b < a; b++) c[b]()
            });
            return {
                qx: function(b) {
                    c.push(b)
                },
                play: function(c, a) {
                    b.play(c, a ? {
                        JA: a
                    } : n)
                }
            }
        }(pc),
        rc = function(b, c, e, a, d) {
            function f() {
                if (g && k) {
                    var a = new d({
                            uh: 3E4
                        }),
                        f = b.audioBaseUrl,
                        o = b.getAudioExtension(),
                        t, x, m, w;
                    t = 0;
                    for (x = c.zr.length; t < x; t++) {
                        m = c.zr[t];
                        w = f + e[m].path + o;
                        a.tq(m, w, "MENU")
                    }
                    t = 0;
                    for (x = c.dr.length; t < x; t++) {
                        m = c.dr[t];
                        w = f + e[m].path + o;
                        a.tq(m, w)
                    }
                    a.oq(function() {
                        for (var a = 0, b = h.length; a < b; a++) h[a]()
                    });
                    a.start()
                }
            }
            var h = [],
                g = p,
                k = p;
            a.qx(function() {
                k =
                    i;
                f()
            });
            return {
                start: function() {
                    g = i;
                    f()
                },
                px: function(a) {
                    h.push(a)
                }
            }
        }(pc, Na, E, qc, ja, ka),
        tc = function(b, c, e, a, d, f, h, g, k, l) {
            function s() {
                function d(b, c) {
                    var e, f, g;
                    e = 0;
                    for (f = b.length; e < f; e++) {
                        g = b[e];
                        var k = new h(j + a[g].path, c);
                        k.Sx = g;
                        s.add(k)
                    }
                }

                function m(a, c) {
                    if (a) {
                        c = c || b.uiImageBaseUrl;
                        z = 0;
                        for (x = a.length; z < x; z++)
                            if (a[z]) {
                                G = c + a[z];
                                s.Fg(G, "MENU")
                            }
                    }
                }
                var s = new f({
                        uh: 3E4
                    }),
                    j = b.imageBaseUrl + e.qb + "/game/",
                    z, x, G;
                m(c.Yw);
                m(c.Aq);
                m(c.zq);
                m(c.Wl);
                m(c.Hv);
                m(c.Lv, b.resolutionBaseUrl + (c.Kv || ""));
                s.sq(function(a) {
                    var b = 100 * (a.bm / a.Fn);
                    g && g.cx(b);
                    if (a.bm ===
                        a.Fn) {
                        t = i;
                        o()
                    }
                }, ["MENU", "FONT"]);
                d(l.Au, "FONT");
                d(c.Tv, "GAME");
                d(c.sr, "GAME");
                d(c.tr, "GAME");
                s.sq(function(a) {
                    k.rx(a.gc.Sx, a.gc.W)
                }, ["FONT", "GAME"]);
                s.start()
            }

            function o() {
                if (t && x) {
                    if (g) {
                        g.dx();
                        g.hide()
                    }
                    m && setTimeout(m, 0);
                    o = ca()
                }
            }
            var t = p,
                x = p,
                m = n;
            return {
                init: function() {
                    k.init();
                    g && g.init();
                    s();
                    d.px(function() {
                        x = i;
                        o()
                    });
                    d.start()
                },
                Za: function() {
                    if (g) {
                        g.Za();
                        g.show()
                    }
                },
                qn: function(a) {
                    m = a;
                    o()
                }
            }
        }(pc, Na, X, E, rc, ja, la, pa, Mb, Ma),
        uc = function(b, c, e, a, d, f, h, g, k, l) {
            return b.extend({
                init: function(b, c, f, l, m) {
                    this.index =
                        b;
                    this.kh = l;
                    this.Hg = n;
                    this.opacity = 1;
                    this.type = m;
                    this.vj = document.createElement("canvas");
                    this.vj.width = a.f(400);
                    this.vj.height = a.f(400);
                    this.fc = this.vj.getContext("2d");
                    this.Bq = new Image;
                    this.Bq.src = d.uiImageBaseUrl + c;
                    var w = this.Ys = new Image,
                        q = this.hv = a.f(350),
                        u = this.Cq = a.f(20);
                    h.subscribe(h.ia.lc, function() {
                        e.Ua({
                            text: g.boxText(b),
                            W: w,
                            width: (q - u * 2) / a.Zc,
                            Cf: k.Dc,
                            va: i
                        })
                    });
                    this.Gh = e.Ua({
                        text: f,
                        va: i
                    });
                    this.Fr = new Image;
                    this.Fr.src = d.uiImageBaseUrl + "box_omnom.png";
                    this.wr = new Image;
                    this.wr.src = d.uiImageBaseUrl + "box_lock.png";
                    this.Oj = new Image;
                    this.Oj.src = d.uiImageBaseUrl + "star_result_small.png";
                    this.Wr = new Image;
                    this.Wr.src = d.uiImageBaseUrl + "perfect_mark.png"
                },
                isRequired: function() {
                    return this.type !== f.uf
                },
                yg: function(b, c) {
                    this.fc.save();
                    this.fc.setTransform(1, 0, 0, 1, 0, 0);
                    this.fc.clearRect(a.f(0), a.f(0), a.f(400), a.f(400));
                    this.fc.restore();
                    if (this.type != f.uf) {
                        this.fc.fillStyle = "rgb(45,45,53)";
                        this.fc.fillRect(a.f(130), a.f(200), a.f(140), a.f(100));
                        c != n && this.fc.drawImage(this.Fr, c + a.f(4), a.f(215))
                    }
                    this.fc.drawImage(this.Bq, a.f(25), a.f(0));
                    if (this.type != f.uf) {
                        if (this.kh) {
                            var d =
                                $(this.Gh).width() || this.Gh.width,
                                e = $(this.Gh).height() || this.Gh.height,
                                g = this.Oj.width || $(this.Oj).width(),
                                h = a.f(-6),
                                g = (a.f(125) - (d + h + g)) / 2,
                                g = a.f(140) + g;
                            this.fc.drawImage(this.wr, a.f(26), a.f(155));
                            this.fc.drawImage(this.Gh, g, a.f(220), d, e);
                            this.fc.drawImage(this.Oj, g + d + h, a.f(225))
                        }
                        l.Nl(this.index) === l.$r(this.index) && this.fc.drawImage(this.Wr, a.f(260), a.f(250))
                    }
                    e = $(this.Ys);
                    d = e.width();
                    e = e.height();
                    h = Math.floor(a.f(25) + this.Cq + (this.hv - this.Cq * 2 - d) / 2);
                    g = a.f(70);
                    this.fc.drawImage(this.Ys, h, g, d, e);
                    b.globalAlpha = this.opacity;
                    b.drawImage(this.vj, 0, 0);
                    b.globalAlpha = 1
                },
                Wn: function(b) {
                    if (b != n) {
                        this.Hg != n && clearInterval(this.Hg);
                        var d = 0,
                            e = a.f(1024),
                            f = a.f(576),
                            g = this,
                            h = this.Hg = setInterval(function() {
                                var k, l;
                                if (d < 5) {
                                    k = c.Jv(d);
                                    l = 1 - k;
                                    k = 1 + k
                                } else if (d < 15) {
                                    k = c.Sg(d - 5, 0, 0.11, 10);
                                    l = 0.95 + k;
                                    k = 1.05 - k
                                } else if (d < 30) {
                                    k = c.Wq(d - 15, 0, 0.05, 15);
                                    l = 1.06 - k;
                                    k = 0.94 + k
                                }
                                l = (e - e * l) / 2;
                                k = (f - f * k) / 2;
                                var j = (e - 2 * l) / e,
                                    z = (f - 2 * k) / f;
                                if (!isNaN(j) && !isNaN(z)) {
                                    b.save();
                                    b.setTransform(1, 0, 0, 1, 0, 0);
                                    b.clearRect(a.f(312), a.f(130), a.f(400), a.f(400));
                                    b.restore();
                                    b.save();
                                    b.scale(j, z);
                                    b.translate(l, k);
                                    b.translate(a.f(312), a.f(130));
                                    g.yg(b, a.f(140));
                                    b.restore()
                                }
                                d > 30 && clearInterval(h);
                                d++
                            }, 20)
                    }
                },
                Hq: function() {
                    this.Hg != n && clearInterval(this.Hg)
                },
                Rm: ca(),
                Wm: ca()
            })
        }(sa, oa, Ob, X, pc, ia, ib, lc, ua, jb),
        vc = function(b, c, e, a) {
            return new function() {
                function d() {
                    if (u != n) {
                        clearInterval(u);
                        u = n
                    }
                }

                function f() {
                    clearTimeout(B);
                    B = setTimeout(function() {
                        d()
                    }, 6E4)
                }

                function h() {
                    var a = z.getContext("2d");
                    u == n && (u = setInterval(function() {
                        a.save();
                        a.setTransform(1, 0, 0, 1, 0, 0);
                        a.clearRect(0, 0, z.width, z.height);
                        a.restore();
                        if (G < 1) {
                            G = G + 0.025;
                            G = Math.min(G, 1);
                            a.globalAlpha = G
                        }
                        a.save();
                        a.translate(J.width * 0.5, J.height * 0.5);
                        a.translate(c.f(-300), c.f(-510));
                        a.rotate(j * Math.PI / 180);
                        a.translate(-J.width * 0.5, -J.height * 0.5);
                        a.drawImage(J, 0, 0);
                        a.restore();
                        j = j + 0.1
                    }, 25));
                    f()
                }

                function g() {
                    if (!I) {
                        if (z != n) {
                            var a = z.getContext("2d");
                            a.save();
                            a.setTransform(1, 0, 0, 1, 0, 0);
                            a.clearRect(0, 0, z.width, z.height);
                            a.restore()
                        }
                        G = 0;
                        I = i;
                        $("#shadowPanel").show();
                        u == n && h()
                    }
                }

                function k(a) {
                    for (var b = 0; b < o.length; b++)
                        if (o[b].id ==
                            a) return o[b];
                    return n
                }

                function l(a, b, c, j) {
                    this.id = a;
                    this.Xf = b;
                    this.Ef = c;
                    this.Sy = j
                }
                var s = this,
                    o = [];
                this.Sm = n;
                this.Za = function() {
                    w = $("#fadeToBlack");
                    z = document.getElementById("shadowCanvas");
                    z.width = c.f(1024);
                    z.height = c.f(576)
                };
                this.Gg = function(a) {
                    J = new Image;
                    J.src = e.uiImageBaseUrl + "shadow.png";
                    if (a)
                        for (var b = 0, c = o.length; b < c; b++) a(o[b].id)
                };
                o.push(new l(b.nc, "menuPanel", "startBackground", i));
                o.push(new l(b.Pd, "boxPanel", "menuBackground", i));
                o.push(new l(b.Qd, "levelPanel", "levelBackground", i));
                o.push(new l(b.Ce,
                    n, n, p));
                o.push(new l(b.ei, n, n, p));
                o.push(new l(b.bp, n, n, p));
                o.push(new l(b.rg, "gameCompletePanel", "menuBackground", i));
                o.push(new l(b.Rd, "optionsPanel", "menuBackground", i));
                o.push(new l(b.fo, n, n, p));
                this.Gi = b.nc;
                this.Fb = function(a, c) {
                    s.Gi = a;
                    f();
                    var j = k(a),
                        e = c == n ? p : c;
                    if (j.Sy) g();
                    else {
                        I = p;
                        $("#shadowPanel").hide();
                        if (u != n) {
                            d();
                            u = n
                        }
                    }
                    if (j.Xf != n) {
                        setTimeout(function() {
                            j.Ef != n && $("#" + j.Ef).show();
                            $("#" + j.Xf).show();
                            if (a != b.Ce)
                                for (var c = 0; c < o.length; c++) {
                                    var d = o[c];
                                    d.Xf != n && d.Xf != j.Xf && $("#" + d.Xf).hide();
                                    d.Ef != n && d.Ef != j.Ef && $("#" + d.Ef).hide()
                                }
                            s.Sm != n && s.Sm(a);
                            e || s.dy()
                        }, e ? 0 : t + x);
                        e || s.cy()
                    }
                };
                var t = 100,
                    x = 50,
                    m = 1,
                    w, q = p;
                this.cy = function() {
                    function b() {
                        var j = +new Date - c;
                        w.css("opacity", a.Lm(j, m, t));
                        j < t ? window.requestAnimationFrame(b) : w.css("opacity", m)
                    }
                    q = i;
                    var c = +new Date;
                    w.css("opacity", 0);
                    w.css("display", "block");
                    window.requestAnimationFrame(b)
                };
                this.dy = function() {
                    function b() {
                        var j = +new Date - c;
                        w.css("opacity", m - a.Lm(j, m, t));
                        if (j < t) window.requestAnimationFrame(b);
                        else {
                            w.css("opacity", 0);
                            w.css("display",
                                "none");
                            q = p
                        }
                    }
                    if (q) {
                        var c = +new Date;
                        window.requestAnimationFrame(b)
                    }
                };
                var u = n,
                    j = 15,
                    z = n,
                    J = n,
                    G = 1,
                    I = p,
                    B = n
            }
        }(Ua, X, pc, oa),
        wc = function(b, c, e, a, d, f, h) {
            function g() {
                var a = document.getElementById("vid");
                if (!a) {
                    try {
                        a = document.createElement("video")
                    } catch (b) {
                        return n
                    }
                    a.id = "vid";
                    a.className = "ctrPointer";
                    $("#video").append(a)
                }
                return a
            }
            var k = {
                Hw: function() {
                    if (!f.fr()) {
                        var a = g(),
                            b = c.jq,
                            d = e.getVideoExtension(),
                            h = e.videoBaseUrl;
                        if (a != n && d != n) try {
                            a.src = h + "intro_" + b + d;
                            a.load()
                        } catch (k) {}
                    }
                },
                Fx: function() {
                    if (!f.fr()) {
                        var b = document.getElementById("vid");
                        if (b) {
                            var c = b.readyState;
                            if (c === 2 || c === 3 || c === 4) {
                                h.yh();
                                $(b).fadeIn(300, function() {
                                    b.play()
                                });
                                b.addEventListener("ended", k.Lq);
                                b.addEventListener("mousedown", k.Lq);
                                return
                            }
                        }
                    }
                    d.Fb(a.Pd)
                },
                Lq: function() {
                    d.Fb(a.Pd, i);
                    var b = $("#vid");
                    b.fadeOut(500, function() {
                        b[0].pause();
                        b[0].seek = 0;
                        b.remove();
                        f.sy(i)
                    })
                },
                Mw: function() {
                    var a = g(),
                        b = c.jq,
                        d = e.getVideoExtension(),
                        f = e.videoBaseUrl;
                    if (a != n && d != n) try {
                        a.src = f + "outro_" + b + d;
                        a.load()
                    } catch (h) {}
                },
                Hx: function() {
                    var b = document.getElementById("vid"),
                        c = b.readyState;
                    if (c === 2 || c === 3 || c === 4) {
                        h.yh();
                        $(b).fadeIn(300, function() {
                            b.play()
                        });
                        b.addEventListener("ended", k.Mq);
                        b.addEventListener("mousedown", k.Mq)
                    } else d.Fb(a.rg, p)
                },
                Mq: function() {
                    d.Fb(a.rg, i);
                    var b = $("#vid");
                    b.fadeOut(500, function() {
                        b[0].pause();
                        b[0].seek = 0;
                        b.remove()
                    })
                },
                Za: function() {
                    this.Hw()
                }
            };
            return k
        }(Na, X, pc, Ua, vc, Lb, hc),
        xc = function(b, c) {
            var e = n;
            return {
                Za: function() {
                    e = $("#gameBorder")
                },
                ky: function(a) {
                    a = (a = c.zq[a]) ? b.uiImageBaseUrl + a : "";
                    e.removeClass("gameComplete").css("background-image", "url(" + a + ")")
                },
                ry: function() {
                    e.css("background-image",
                        "").addClass("gameComplete")
                },
                hide: function() {
                    e.hide()
                },
                show: function() {
                    e.show()
                },
                fadeIn: function(a, b) {
                    e.delay(b || 0).fadeIn(a)
                },
                fadeOut: function(a, b) {
                    e.delay(b || 0).fadeOut(a)
                }
            }
        }(pc, Na),
        yc = function(b) {
            function c(a) {
                (new Image).src = "https://ace.adoftheyear.com/p11953/tagger_v02.php?project=p11953&tag=1a&channel=" + a
            }

            function e(a) {
                (new Image).src = "https://view.atdmt.com/action/" + a
            }
            return {
                Mr: function() {
                    if (b.Be) {
                        e("SMG_MRTINX_CTR_SITE_PlayNow");
                        c("[sid=US_CTR_Game_tag_1_1|cid=10105|]")
                    }
                },
                Pr: function() {
                    b.Be &&
                        _gaq.push(["_trackEvent", "IE Box", "Pinned"])
                },
                Or: function() {
                    b.Be && _gaq.push(["_trackEvent", "IE Box", "Show Me"])
                },
                Ir: function() {
                    b.Be && _gaq.push(["_trackEvent", "IE Box", "Download IE"])
                },
                Lr: function(a) {
                    if (b.Be) {
                        e("SMG_MRTINX_CTR_SITE_Level1_Confirmation");
                        c("[sid=US_CTR_Game_tag_2_1|cid=10106|]");
                        _gaq.push(["_trackEvent", "First Level", "Completed", "FPS", Math.round(a)])
                    }
                },
                Kr: function() {
                    b.Be && e("SMG_MRTINX_CTR_SITE_Facebook_Share")
                },
                Qr: function() {
                    b.Be && e("SMG_MRTINX_CTR_SITE_Twitter_Share")
                }
            }
        }(pc),
		
        /**
         * @enum {number}
         */
        PinnedStates = {
            UNDEFINED: -1, // unknown pinned state
            HIDDEN: 0, // hidden, probably because the OS d
            VISIBLE: 1, // visible and completely playable
            PROMPT_IE: 2, // visible but with a prompt to install IE
            PROMPT_PIN: 3   // visible but with a prompt to pin the game
        };
		
        zc = function(b, c, e, a, d, f, h, g, k, l) {
            return b.extend({
                init: function(a, b, c, d) {
                    this.h(a, b, c, d);
                    this.bf = PinnedStates.UNDEFINED;
                    this.ef = n
                },
				
                isRequired: function() {
					// returns true if the box is enabled on the platform. this doesn't always
					// mean it is unlocked. For example, in Chrome on Windows, we'll tell
					// the user to install IE. On IE, they need to pin the game first. However
					// there is no IE on mac so the box is completely disabled.

                    return this.bf !== PinnedStates.HIDDEN
                },
				
                initPinnedState: function() {
					// returns the version of Internet Explorer or a -1 if another browser
                    var getIEVersion = function() {
                            var rv = -1; // Return value assumes failure.
							if (navigator.appName == 'Microsoft Internet Explorer' || navigator.appName == "MSAppHost/1.0") {
								var ua = navigator.userAgent,
									re = new RegExp("MSIE ([0-9]?[0-9]{1,}[\.0-9]{0,})"),
									matches = re.exec(ua);
								if (matches != null && matches.length > 1) {
									// first entry is the original string followed by matches
									// so index 1 is the first match
									rv = parseInt(matches[1], 10);
								}
							}
                            return rv
                        }(),

						// returns a bool indiciating whether IE can run on the current OS | doesn't work on windows 10+, smh
                        getIECapableOS = function() {
							try {
								var u = navigator.userAgent;
								var isWindows = u.indexOf("Windows NT") != -1;
								var majVersion = isWindows ? parseInt(u[u.indexOf("Windows NT") + 11]) : -1;
								if (isWindows && majVersion >= 6) return true;
							}
							catch (ex) {
								return false;
							}
							return false;
                        }();

					// are we in IE9 or greater
                    if (getIEVersion >= 9 || c.forcePinnedBox) {
                        b = g.zt || localStorage.getItem("msIsSiteModeActivated") == "true";
                        f = g.zt === i;
                        if (!f) try {
                            window.external.msIsSiteMode() && (f = i)
                        } catch (l) {}
                        if (b || f || c.forcePinnedBox) {
                            this.opacity = this.bf = PinnedStates.VISIBLE;
                            this.ef = n;
                            if (!b) {
                                localStorage.setItem("msIsSiteModeActivated", "true");
                                k.Pr && k.Pr()
                            }
                        }
						else {
                            this.bf = PinnedStates.PROMPT_PIN;
                            this.opacity = 0.35;
                            this.ef = "pinPrompt";
                            var x = this;
                            d.subscribe(d.ia.lc, function() {
                                h.Ua({
                                    text: e.$(a.vp),
                                    Nc: "#showMeBtn img",
                                    va: i
                                })
                            });
                            $("#showMeBtn").click(function() {
                                k.Or && k.Or();
                                x.Py()
                            })
                        }
                    }
					else if (getIECapableOS) {
                        this.bf = PinnedStates.PROMPT_IE;
                        this.opacity = 0.35;
                        this.ef = "iePrompt";
                        var $getIeButton = $("#installieBtn"),
                            ieDownload = getIE9DownloadUrl();
                        if (ieDownload) {
                            $getIeButton.on("click", function() {
                                k.Ir && k.Ir();
                                window.location.href = ieDownload
                            });
                            d.subscribe(d.ia.lc, function() {
                                h.Ua({
                                    text: e.$(a.xo),
                                    W: $getIeButton.find("img")[0],
                                    va: i
                                })
                            })
                        } else $getIeButton.hide()
                    }
					else {
                        this.bf = PinnedStates.HIDDEN;
                        this.opacity = 0.35;
                        this.ef = n
                    }
                    return this.bf == PinnedStates.HIDDEN || this.bf == PinnedStates.UNDEFINED ? false : true
                },
                Rm: function() {
                    if (this.ef != n) {
                        $("#pinningContent").stop(i, i).delay(100).fadeIn(800);
                        $("#" + this.ef).show()
                    }
                },
                Wm: function() {
                    this.ef != n && $("#pinningContent").stop(i,
                        i).fadeOut(300)
                },
                Py: function() {
                    var a = $("#pinCursor"),
                        b = $("#pinOmNom"),
                        c = $("#pinChairShadow"),
                        d = $("#showMeBtn"),
                        e = $("#pinTaskBar");
                    d.fadeOut().delay(5500).fadeIn(1E3);
                    c.delay(500).fadeOut().delay(6E3).fadeIn(300);
                    a.delay(500).fadeIn().delay(2250).animate({
                        left: l.f(200)
                    }, 500, "easeInOutCirc").fadeOut().animate({
                        top: l.f(65),
                        left: l.f(45),
                        scale: "1.0"
                    }, 0);
                    b.delay(500).fadeIn().delay(1E3).animate({
                        top: l.f(305),
                        left: l.f(165)
                    }, 1E3, "easeInOutBack").delay(1500).animate({
                        scale: "0.65"
                    }, 200).delay(1500).fadeOut(1E3).animate({
                        top: l.f(115),
                        left: l.f(-49),
                        scale: "1.0"
                    }, 50).fadeIn(500);
                    e.delay(500).fadeIn().delay(5E3).fadeOut(1E3)
                }
            })
        }(uc, Xa, lc, W, ib, Na, Ob, pc, yc, X),
        Ac = function(b, c, e, a, d, f, h, g, k) {
            return new function() {
                function l(a, b) {
                    s(a, b)
                }

                function s(a, b) {
                    if (M) {
                        x.Di();
                        D = a - F;
                        if (Math.abs(D) > u / 2) {
                            H = w;
                            var c = Math.round(-1 * H / u);
                            x.Ld(c)
                        } else if (Math.abs(D) > 5) {
                            c = d.f(30);
                            x.Ld(D > c ? x.V - 1 : D < c * -1 ? x.V + 1 : x.V)
                        } else {
                            m[x.V].type != h.uf && !m[x.V].kh && x.Ld(x.V);
                            x.nr(a, b) && x.Vl != n && x.Vl(x.V)
                        }
                    }
                    M = p
                }

                function o(a, b) {
                    if (M) {
                        x.Di();
                        D = a - F;
                        if (Math.abs(D) > 5) {
                            q = p;
                            x.yg(R +
                                D)
                        }
                    } else $("#boxCanvas").toggleClass("ctrPointer", x.nr(a, b))
                }

                function t(a) {
                    x.Di();
                    F = a;
                    R = w;
                    M = i
                }
                var x = this,
                    m = [],
                    w = 0,
                    q = i,
                    u = d.f(600),
                    j = d.f(312),
                    z = n,
                    J, G;
                this.Za = function() {
                    J = document.getElementById("boxCanvas");
                    G = J.getContext("2d");
                    J.width = d.f(1024);
                    J.height = d.f(576);
                    $("#boxNavBack");
                    $("#boxNavForward")
                };
                this.V = 0;
                this.Vl = n;
                this.ev = function() {
                    if (z != n && G != n) {
                        z.Hq();
                        z.Wn(G)
                    }
                };
                this.Pl = function(a, b, j, d, f) {
                    if (f == h.Fo) {
                        a = new e(a, b, j, d, f);
                        a.initPinnedState() && m.push(a)
                    } else m.push(new c(a, b, j, d, f));
                    z == n && m.length > 0 && (z = m[0])
                };
                this.Xq = function() {
                    for (var a = 0, b = 0, c = m.length; b < c; b++) m[b].isRequired() && a++;
                    return a
                };
                this.Ix = function() {
                    for (var a = 0, b = m.length, c = 0; c < b; c++) m[c].isRequired() && (a = a + k.$r(c));
                    return a
                };
                this.yg = function(a) {
                    w = a;
                    G.save();
                    G.setTransform(1, 0, 0, 1, 0, 0);
                    G.clearRect(0, 0, J.width, J.height);
                    G.restore();
                    G.save();
                    G.translate(j + a, d.f(130));
                    for (var b = 0; b < m.length; b++) {
                        var c = n,
                            e = u * b,
                            f = a + e;
                        f > d.f(-100) && f < d.f(100) && (c = (j + a) * -1 - e + d.f(452));
                        G.save();
                        G.translate(e, 0);
                        m[b].yg(G, c);
                        G.restore()
                    }
                    G.restore()
                };
                var I = 0,
                    B = 0,
                    K = 0,
                    V = n;
                this.Ld = function(a) {
                    x.Di();
                    a < 0 && (a = 0);
                    a > m.length - 1 && (a = m.length - 1);
                    var c = 25;
                    a == x.V && (c = 0);
                    z != n && z != m[a] && z.Wm != n && z.Wm();
                    x.V = a;
                    V != n && clearInterval(V);
                    I = w;
                    B = -1 * u * a;
                    K = 0;
                    V = setInterval(function() {
                        w = b.Oe(K, I, B - I, c);
                        x.yg(w);
                        Math.abs(w - B) < 5 && (q = i);
                        if (K == c) {
                            clearInterval(V);
                            if (z != m[x.V]) {
                                z = m[x.V];
                                z.Wn(G)
                            }
                            z != n && z.Rm != n && z.Rm()
                        }
                        K++
                    }, 1E3 / 45);
                    a - 1 < 0 ? $("#boxNavBack div").addClass("boxNavDisabled") : $("#boxNavBack div").removeClass("boxNavDisabled");
                    a + 1 > m.length - 1 ? $("#boxNavForward div").addClass("boxNavDisabled") :
                        $("#boxNavForward div").removeClass("boxNavDisabled")
                };
                this.Di = function() {
                    clearInterval(V);
                    z != n && z.Hq()
                };
                this.nr = function(a, b) {
                    return q && z != n && z.type != h.uf && a > d.f(340) && a < d.f(680) && b > d.f(140) && b < d.f(460) ? i : p
                };
                var M = p,
                    H = 0,
                    R = 0,
                    D = 0,
                    F = n;
                this.$c = function() {
                    if (!this.Id) this.Id = new a({
                        element: document.getElementById("boxCanvas"),
                        Tm: $.proxy(t, this),
                        Pm: $.proxy(o, this),
                        Nm: $.proxy(s, this),
                        Qm: $.proxy(l, this),
                        Yg: function() {
                            return g.Lu ? f.zoom : 1
                        }
                    });
                    this.Id.$c()
                };
                this.fd = function() {
                    this.Id && this.Id.fd()
                };
                this.hh =
                    function(a) {
                        return m[a].kh
                    };
                this.Vw = function() {
                    m[1].kh = i;
                    x.hn()
                };
                this.qz = function(a) {
                    m[a].kh = p;
                    x.hn()
                };
                this.hn = function() {
                    this.Ld(this.V)
                };
                this.Ai = function() {
                    return m.length
                }
            }
        }(oa, uc, zc, Va, X, Nb, ia, pc, jb),
        Bc = function(b, c, e, a, d, f) {
            return new function() {
                var h = this;
                this.siteUrl = c.siteUrl;
                this.behindTheScenesUrl = c.behindTheScenesUrl;
                this.wq = "278847552173744";
                d.subscribe(d.ia.lc, function() {
                    this.Js = e.$(a.xp);
                    this.Uy = e.$(a.yp);
                    this.Ty = [{
                        name: e.$(a.wp),
                        link: c.siteUrl
                    }]
                });
                this.mw = function() {
                    FB.init({
                        wq: h.wq,
                        status: i,
                        cookie: i,
                        gB: p
                    });
                    FB.Event.subscribe("edge.create",
                        function() {
                            f.Kr && f.Kr()
                        })
                };
                this.as = function(a, c, d, e) {
                    b.tx ? b.tx(a, c, d) : FB.ui({
                        method: "feed",
                        name: h.Uy,
                        caption: a,
                        description: c,
                        link: h.siteUrl,
                        MA: d,
                        bA: h.Ty
                    }, e)
                };
                this.pw = function(a) {
                    a.events.bind("tweet", function() {
                        f.Qr && f.Qr()
                    })
                }
            }
        }(pc, Na, lc, W, ib, yc),
        Cc = function(b, c, e, a, d, f, h, g, k, l) {
            return new function() {
                function d(a, b, c, e, f, g, h) {
                    a.save();
                    a.setTransform(1, 0, 0, 1, 0, 0);
                    a.clearRect(0, 0, a.canvas.width, a.canvas.height);
                    a.restore();
                    a.save();
                    a.translate(e, f);
                    a.scale(b, c);
                    a.save();
                    a.beginPath();
                    a.moveTo(116.1, 38.3);
                    a.bezierCurveTo(117.2, 37.9, 118.2, 37.4, 119, 36.8);
                    a.lineTo(119.5, 35.6);
                    a.lineTo(123.3, 21.1);
                    a.bezierCurveTo(124.5, 18.2, 126.8, 14.6, 130.1, 10.3);
                    a.bezierCurveTo(129.9, 15.3, 133.6, 18.2, 141.3, 19);
                    a.bezierCurveTo(138.9, 19.1, 136.7, 19.9, 134.8, 21.5);
                    a.bezierCurveTo(132.4, 23.5, 130.7, 25.2, 129.7, 26.8);
                    a.bezierCurveTo(128.9, 28.3, 127.9, 30.7, 126.7, 33.8);
                    a.lineTo(126.4, 36.8);
                    a.lineTo(126.7, 37.7);
                    a.lineTo(128.6, 38.7);
                    a.bezierCurveTo(124.4, 37.5, 120.2, 37.4, 116.1, 38.3);
                    a.closePath();
                    a.moveTo(241.8, 203.6);
                    a.bezierCurveTo(241.6,
                        202.9, 241.1, 202.2, 240.5, 201.5);
                    a.lineTo(214.2, 185.6);
                    a.bezierCurveTo(212.8, 190, 210.9, 194.2, 208.4, 198.1);
                    a.lineTo(208.3, 198);
                    a.lineTo(209.4, 192.8);
                    a.lineTo(211, 183.6);
                    a.lineTo(211.2, 182.6);
                    a.lineTo(212.8, 173.3);
                    a.bezierCurveTo(212.3, 176, 211.3, 179, 210, 182.1);
                    a.bezierCurveTo(209.9, 182.4, 209.8, 182.6, 209.7, 182.8);
                    a.bezierCurveTo(208.6, 185.2, 207.3, 187.8, 205.8, 190.5);
                    a.bezierCurveTo(203.4, 194.6, 200.9, 197.9, 198.1, 200.4);
                    a.bezierCurveTo(198.7, 201.8, 199, 203.2, 199.2, 204.7);
                    a.bezierCurveTo(199.2, 204.8, 199.2,
                        204.9, 199.2, 205);
                    a.bezierCurveTo(199.5, 207.9, 199.6, 209.6, 199.7, 210.2);
                    a.bezierCurveTo(200, 211.2, 200.1, 212, 200.2, 212.5);
                    a.lineTo(199.6, 207.8);
                    a.bezierCurveTo(201.8, 213.8, 203.3, 218.7, 204, 222.5);
                    a.bezierCurveTo(205.3, 222.4, 206.5, 222.4, 207.7, 222.3);
                    a.bezierCurveTo(213.4, 222, 218.9, 221.9, 224.3, 222.1);
                    a.bezierCurveTo(227.5, 222.5, 230.1, 222.1, 232.3, 221.1);
                    a.bezierCurveTo(232.8, 220.7, 233.4, 220.2, 233.9, 219.6);
                    a.bezierCurveTo(235.2, 218.1, 236.5, 216.5, 237.8, 215);
                    a.bezierCurveTo(239.1, 213.3, 240.1, 211.5, 240.9, 209.6);
                    a.bezierCurveTo(241.8, 207.4, 242.1, 205.4, 241.8, 203.6);
                    a.closePath();
                    a.moveTo(148.8, 222.8);
                    a.bezierCurveTo(139.8, 224.7, 129.5, 225.7, 117.8, 225.9);
                    a.bezierCurveTo(109.6, 226, 101.7, 225.5, 94.3, 224.3);
                    a.bezierCurveTo(94.3, 224.9, 94.4, 225.6, 94.4, 226.2);
                    a.bezierCurveTo(94.4, 228.1, 94.3, 230, 94, 232);
                    a.lineTo(93.8, 233);
                    a.bezierCurveTo(103.6, 234.6, 113.4, 235.1, 123.2, 234.4);
                    a.bezierCurveTo(132.2, 234.4, 141, 233.2, 149.5, 231);
                    a.bezierCurveTo(149.4, 230.6, 149.4, 230.3, 149.4, 230);
                    a.bezierCurveTo(149, 227.6, 148.9, 225.2, 148.8,
                        222.8);
                    a.closePath();
                    a.moveTo(196.6, 153.6);
                    a.lineTo(194.5, 152.6);
                    a.bezierCurveTo(194.1, 152.8, 193.8, 153, 193.4, 153.2);
                    a.bezierCurveTo(192.6, 153.8, 191.7, 154.5, 191, 155.2);
                    a.lineTo(190.2, 155.8);
                    a.bezierCurveTo(186.6, 158.8, 183.8, 160.7, 182, 161.5);
                    a.bezierCurveTo(182, 162.2, 181.4, 164, 180.2, 166.7);
                    a.bezierCurveTo(183.2, 164.8, 186.2, 162.7, 189.3, 160.6);
                    a.bezierCurveTo(192.6, 158.2, 195.6, 155.9, 198.4, 153.8);
                    a.bezierCurveTo(197.6, 153.8, 197, 153.7, 196.6, 153.6);
                    a.closePath();
                    a.moveTo(121.1, 189);
                    a.bezierCurveTo(128, 188.9,
                        134.8, 188, 141.7, 186);
                    a.bezierCurveTo(141.3, 185.9, 141, 185.7, 140.7, 185.6);
                    a.bezierCurveTo(136.2, 183.2, 133, 181.8, 131.3, 181.4);
                    a.bezierCurveTo(128.8, 181.8, 125.7, 181.8, 121.9, 181.4);
                    a.bezierCurveTo(118.1, 181, 114, 180.5, 109.4, 179.7);
                    a.lineTo(109.3, 179.7);
                    a.bezierCurveTo(108.3, 180.9, 106.5, 182.5, 103.8, 184.6);
                    a.bezierCurveTo(103.6, 184.7, 103.4, 184.9, 103.2, 185);
                    a.lineTo(102.1, 185.9);
                    a.lineTo(102.9, 186.1);
                    a.bezierCurveTo(110.1, 188.1, 116.2, 189, 121.1, 189);
                    a.closePath();
                    a.moveTo(63.1, 164.7);
                    a.lineTo(50.7, 157.9);
                    a.lineTo(45.8,
                        159.6);
                    a.lineTo(46.2, 159.9);
                    a.bezierCurveTo(46.3, 160, 46.4, 160.1, 46.5, 160.2);
                    a.bezierCurveTo(52, 164, 57.9, 167.5, 64.4, 170.9);
                    a.lineTo(65.5, 171.5);
                    a.lineTo(65.2, 170.7);
                    a.bezierCurveTo(64, 168, 63.4, 166, 63.1, 164.7);
                    a.closePath();
                    a.moveTo(36.5, 191.7);
                    a.bezierCurveTo(35.2, 189.5, 34, 187.3, 33, 185);
                    a.lineTo(33.1, 185.9);
                    a.lineTo(34, 192.4);
                    a.lineTo(31.3, 189.4);
                    a.bezierCurveTo(30.8, 188, 27.8, 189.3, 22.4, 193.3);
                    a.bezierCurveTo(16.9, 197.2, 13.7, 199.6, 12.7, 200.6);
                    a.bezierCurveTo(11.6, 201.6, 10.2, 202.9, 8.4, 204.6);
                    a.bezierCurveTo(6.7,
                        206.1, 5.4, 207.3, 4.5, 208.2);
                    a.bezierCurveTo(3.6, 209, 3.2, 210.1, 3.3, 211.5);
                    a.bezierCurveTo(3.5, 212.9, 4, 214.8, 4.8, 217.3);
                    a.bezierCurveTo(5.6, 219.7, 6.5, 221.8, 7.4, 223.5);
                    a.bezierCurveTo(8.3, 225.2, 9.8, 226.4, 11.9, 227.1);
                    a.bezierCurveTo(13.9, 227.7, 15.9, 227.9, 17.8, 227.7);
                    a.bezierCurveTo(19.7, 227.5, 21.3, 227.4, 22.6, 227.4);
                    a.bezierCurveTo(24.5, 227.3, 26.4, 227.2, 28.4, 227.2);
                    a.bezierCurveTo(30.2, 227.2, 32, 227.2, 33.8, 227.2);
                    a.bezierCurveTo(35.8, 227.2, 37.7, 227.2, 39.7, 227.2);
                    a.bezierCurveTo(41.2, 227.3, 42.9, 227.4, 44.5,
                        227.6);
                    a.bezierCurveTo(44.5, 225.9, 44.5, 223.5, 44.6, 220.3);
                    a.lineTo(44.6, 213.4);
                    a.lineTo(44.7, 207.6);
                    a.lineTo(45.1, 204.8);
                    a.lineTo(45.4, 203);
                    a.bezierCurveTo(45.4, 202.9, 45.4, 202.8, 45.5, 202.6);
                    a.bezierCurveTo(43.8, 201.2, 42.3, 199.7, 40.9, 198.1);
                    a.bezierCurveTo(39.3, 196, 37.9, 193.8, 36.5, 191.7);
                    a.closePath();
                    a.fillStyle = "rgb(100, 150, 40)";
                    a.fill();
                    a.beginPath();
                    a.moveTo(212.6, 151.5);
                    a.bezierCurveTo(213.3, 158.8, 213.4, 166.1, 212.8, 173.3);
                    a.bezierCurveTo(212.3, 176, 211.3, 179, 210, 182.2);
                    a.bezierCurveTo(209.9, 182.4,
                        209.8, 182.6, 209.7, 182.8);
                    a.bezierCurveTo(208.6, 185.3, 207.3, 187.8, 205.8, 190.5);
                    a.bezierCurveTo(203.4, 194.7, 200.9, 198, 198.1, 200.5);
                    a.bezierCurveTo(198.7, 201.8, 199, 203.3, 199.2, 204.7);
                    a.bezierCurveTo(199.2, 204.8, 199.2, 204.9, 199.2, 205.1);
                    a.bezierCurveTo(199.5, 207.9, 199.6, 209.7, 199.7, 210.2);
                    a.bezierCurveTo(199.9, 214.2, 200, 218.2, 199.9, 222.4);
                    a.bezierCurveTo(199.9, 222.5, 199.9, 222.7, 199.9, 222.9);
                    a.bezierCurveTo(199.9, 225, 199.7, 227, 199.4, 228.8);
                    a.bezierCurveTo(199.1, 230.5, 198.7, 232, 198.3, 233.5);
                    a.lineTo(196.7,
                        235.2);
                    a.bezierCurveTo(196.6, 235.3, 196.5, 235.4, 196.3, 235.5);
                    a.bezierCurveTo(195.2, 236.4, 193.3, 237.6, 190.7, 239.2);
                    a.bezierCurveTo(188.1, 240.8, 184.5, 241.7, 179.9, 242.1);
                    a.bezierCurveTo(175.3, 242.4, 172, 242.5, 169.8, 242.3);
                    a.bezierCurveTo(167.8, 242.2, 165.5, 241.7, 162.9, 240.8);
                    a.bezierCurveTo(160.4, 240, 158, 238, 155.6, 234.8);
                    a.bezierCurveTo(155.4, 234.6, 155.3, 234.4, 155.1, 234.2);
                    a.bezierCurveTo(154.3, 233, 153.5, 231.6, 152.8, 230.1);
                    a.bezierCurveTo(151.9, 227.9, 151.2, 225.3, 150.7, 222.4);
                    a.bezierCurveTo(150.7, 222.2,
                        150.6, 222.1, 150.6, 221.9);
                    a.bezierCurveTo(149.7, 216.4, 149.3, 213.1, 149.2, 212);
                    a.bezierCurveTo(148.8, 215.6, 148.6, 219.2, 148.8, 222.8);
                    a.bezierCurveTo(139.8, 224.7, 129.5, 225.7, 117.8, 225.9);
                    a.bezierCurveTo(109.6, 226, 101.7, 225.5, 94.3, 224.3);
                    a.bezierCurveTo(94.2, 220.8, 94, 217.1, 93.8, 213.5);
                    a.bezierCurveTo(93.8, 214.9, 93.7, 216, 93.6, 216.6);
                    a.bezierCurveTo(93.5, 217.2, 93.5, 217.7, 93.4, 218.1);
                    a.bezierCurveTo(93.4, 218.5, 93.2, 219.4, 92.8, 220.9);
                    a.bezierCurveTo(92.6, 222, 92.3, 223, 92, 224);
                    a.bezierCurveTo(91.9, 224.3, 91.8,
                        224.6, 91.7, 224.8);
                    a.bezierCurveTo(91.3, 226, 90.8, 227.2, 90.2, 228.3);
                    a.bezierCurveTo(89.9, 229, 89.5, 229.7, 89.2, 230.4);
                    a.bezierCurveTo(88.8, 230.9, 88.4, 231.4, 88, 231.9);
                    a.bezierCurveTo(87.5, 232.6, 86.9, 233.2, 86.2, 233.7);
                    a.bezierCurveTo(85.8, 234.1, 85.4, 234.5, 84.9, 234.9);
                    a.bezierCurveTo(83.9, 235.6, 82.8, 236.2, 81.6, 236.7);
                    a.bezierCurveTo(80.2, 237.3, 78.7, 237.8, 77.1, 238.2);
                    a.bezierCurveTo(74.1, 238.8, 71, 239.1, 67.8, 239.1);
                    a.bezierCurveTo(60.2, 239.2, 53.4, 237.3, 47.4, 233.3);
                    a.bezierCurveTo(45.9, 232.5, 45, 231.7, 44.9,
                        230.9);
                    a.lineTo(44.6, 229.2);
                    a.bezierCurveTo(44.6, 228.8, 44.5, 228.3, 44.5, 227.6);
                    a.bezierCurveTo(44.5, 226, 44.5, 223.5, 44.6, 220.3);
                    a.lineTo(44.6, 213.4);
                    a.lineTo(44.7, 207.6);
                    a.lineTo(45.1, 204.9);
                    a.lineTo(45.4, 203);
                    a.bezierCurveTo(45.4, 202.9, 45.4, 202.8, 45.5, 202.7);
                    a.bezierCurveTo(43.8, 201.2, 42.3, 199.7, 40.9, 198.2);
                    a.bezierCurveTo(39.3, 196, 37.9, 193.9, 36.5, 191.7);
                    a.bezierCurveTo(35.2, 189.6, 34, 187.4, 33, 185.1);
                    a.lineTo(32.7, 183.5);
                    a.bezierCurveTo(31.8, 176.3, 31, 168.9, 30.3, 161.3);
                    a.bezierCurveTo(30.3, 161, 30.3,
                        160.7, 30.2, 160.4);
                    a.bezierCurveTo(34.5, 162, 39, 162.1, 43.8, 160.4);
                    a.bezierCurveTo(44.4, 160.2, 45.1, 159.9, 45.8, 159.6);
                    a.lineTo(46.2, 159.9);
                    a.bezierCurveTo(46.3, 160, 46.4, 160.1, 46.5, 160.2);
                    a.bezierCurveTo(52, 164, 57.9, 167.6, 64.4, 170.9);
                    a.lineTo(65.5, 171.5);
                    a.bezierCurveTo(66.9, 174.7, 68.3, 177.8, 69.8, 180.9);
                    a.bezierCurveTo(71.4, 184.1, 73.4, 187, 76, 189.7);
                    a.bezierCurveTo(78.5, 192.3, 81.7, 193.4, 85.5, 193.1);
                    a.bezierCurveTo(89.2, 192.6, 92.8, 191.5, 96.3, 189.7);
                    a.bezierCurveTo(98.5, 188.7, 100.4, 187.4, 102.1, 185.9);
                    a.lineTo(102.9,
                        186.2);
                    a.bezierCurveTo(110.1, 188.1, 116.2, 189.1, 121.1, 189.1);
                    a.bezierCurveTo(128, 189, 134.8, 188, 141.7, 186.1);
                    a.bezierCurveTo(142.1, 186.3, 142.6, 186.5, 143, 186.7);
                    a.bezierCurveTo(143.5, 186.9, 144, 187.1, 144.5, 187.3);
                    a.bezierCurveTo(147.1, 188.4, 149.8, 189.4, 152.5, 190.3);
                    a.bezierCurveTo(155.3, 191.3, 158.2, 191.8, 161.2, 191.8);
                    a.bezierCurveTo(164.2, 191.8, 166.7, 190.7, 168.6, 188.6);
                    a.bezierCurveTo(170, 187.2, 171.1, 185.7, 172, 184.1);
                    a.bezierCurveTo(173.4, 181.7, 174.7, 179.2, 175.9, 176.6);
                    a.bezierCurveTo(177.1, 174, 178.3,
                        171.4, 179.4, 168.8);
                    a.bezierCurveTo(179.7, 168, 180, 167.4, 180.2, 166.8);
                    a.bezierCurveTo(183.2, 164.8, 186.2, 162.8, 189.3, 160.6);
                    a.bezierCurveTo(192.6, 158.2, 195.6, 156, 198.4, 153.8);
                    a.bezierCurveTo(199.3, 153.8, 200.6, 153.8, 202.1, 153.6);
                    a.bezierCurveTo(204.6, 153.5, 207, 153.1, 209.4, 152.5);
                    a.bezierCurveTo(210.5, 152.2, 211.6, 151.8, 212.6, 151.4);
                    a.bezierCurveTo(212.6, 151.4, 212.6, 151.4, 212.6, 151.5);
                    a.closePath();
                    a.moveTo(124.3, 61);
                    a.bezierCurveTo(124.5, 61.3, 124.8, 61.6, 125, 61.9);
                    a.bezierCurveTo(133.4, 55.3, 142.8, 50.4,
                        153.1, 47.4);
                    a.bezierCurveTo(149.8, 46, 146.3, 44.6, 142.9, 43.3);
                    a.bezierCurveTo(139.9, 42.5, 137.6, 41.7, 135.8, 41.1);
                    a.bezierCurveTo(134.1, 40.4, 132.7, 40, 131.6, 39.8);
                    a.bezierCurveTo(130.5, 39.6, 129.5, 39.2, 128.6, 38.8);
                    a.bezierCurveTo(124.4, 37.6, 120.2, 37.4, 116.1, 38.4);
                    a.bezierCurveTo(115.7, 38.5, 115.2, 38.6, 114.8, 38.7);
                    a.bezierCurveTo(114.6, 38.8, 114.2, 38.9, 113.7, 39);
                    a.lineTo(106, 40.5);
                    a.bezierCurveTo(102.5, 41.1, 99.2, 41.9, 95.9, 42.8);
                    a.bezierCurveTo(106.9, 45.7, 116.3, 51.7, 124.3, 61);
                    a.closePath();
                    a.moveTo(141.3, 19);
                    a.lineTo(143.4, 19);
                    a.lineTo(144.6, 19.1);
                    a.bezierCurveTo(147.1, 19.4, 148.8, 19.2, 149.7, 18.6);
                    a.bezierCurveTo(151.7, 17.6, 152.9, 16, 153.3, 13.7);
                    a.bezierCurveTo(153.7, 12.1, 153.7, 10.4, 153.5, 8.6);
                    a.bezierCurveTo(152.9, 5.3, 150.9, 3.4, 147.6, 3.1);
                    a.bezierCurveTo(141, 2.4, 135.2, 4.8, 130.1, 10.3);
                    a.bezierCurveTo(129.9, 15.3, 133.6, 18.2, 141.3, 19);
                    a.closePath();
                    a.moveTo(221, 104);
                    a.bezierCurveTo(220.8, 103.3, 220.5, 102.6, 220.2, 101.9);
                    a.bezierCurveTo(219.3, 99.7, 218.2, 97.5, 216.9, 95.4);
                    a.bezierCurveTo(213.3, 89.7, 209.2, 84.5,
                        204.4, 79.7);
                    a.bezierCurveTo(205.4, 83, 205.9, 86.5, 205.9, 90.2);
                    a.bezierCurveTo(205.8, 91.2, 205.8, 92.2, 205.7, 93.2);
                    a.bezierCurveTo(205.5, 95.7, 205.1, 98.2, 204.6, 100.6);
                    a.bezierCurveTo(204.9, 102.3, 205.3, 104.3, 205.7, 106.6);
                    a.lineTo(205.7, 106.6);
                    a.bezierCurveTo(205.2, 104.4, 204.9, 102.5, 204.6, 101);
                    a.bezierCurveTo(204.2, 103, 203.6, 104.9, 203, 106.9);
                    a.lineTo(202.9, 106.9);
                    a.bezierCurveTo(200.6, 113.5, 197.1, 119.7, 192.3, 125.5);
                    a.bezierCurveTo(188.4, 130, 183.6, 133.5, 177.8, 135.9);
                    a.bezierCurveTo(169.7, 139.6, 161.7, 140.9,
                        153.7, 139.7);
                    a.bezierCurveTo(147.7, 138.6, 142.2, 136.2, 137.2, 132.7);
                    a.bezierCurveTo(131.7, 128.8, 126.4, 125, 121.3, 121.5);
                    a.lineTo(120.9, 121.3);
                    a.lineTo(120.6, 121.5);
                    a.bezierCurveTo(113.9, 128, 106.4, 133.2, 98, 137.3);
                    a.bezierCurveTo(83.7, 144, 70, 142.9, 56.8, 134);
                    a.bezierCurveTo(50.6, 130, 45.8, 125.2, 42.5, 119.7);
                    a.bezierCurveTo(38.6, 113.5, 36.7, 106.4, 36.6, 98.3);
                    a.bezierCurveTo(36.6, 93.4, 37.1, 88.7, 38.2, 84.1);
                    a.bezierCurveTo(37.7, 84.8, 37.1, 85.5, 36.6, 86.2);
                    a.bezierCurveTo(29.8, 95.7, 24.4, 105.8, 20.3, 116.5);
                    a.bezierCurveTo(20.4,
                        116.4, 20.4, 117, 20.3, 118.2);
                    a.bezierCurveTo(20.2, 119.7, 20.7, 121.1, 21.6, 122.5);
                    a.bezierCurveTo(22.2, 123.4, 23.3, 125, 25, 127.3);
                    a.lineTo(26.2, 129.3);
                    a.bezierCurveTo(26.3, 129.4, 26.4, 129.6, 26.5, 129.7);
                    a.bezierCurveTo(27.9, 131.7, 29.4, 133.7, 31.1, 135.6);
                    a.bezierCurveTo(34, 138.9, 37.4, 142, 41.1, 144.9);
                    a.bezierCurveTo(44.1, 147.2, 47.2, 149.4, 50.5, 151.6);
                    a.bezierCurveTo(52.5, 152.9, 54.7, 154.4, 57, 155.8);
                    a.bezierCurveTo(60.8, 158.3, 65.2, 160.8, 70.1, 163.1);
                    a.bezierCurveTo(71, 163.6, 72, 164, 72.9, 164.4);
                    a.bezierCurveTo(79.8,
                        167.5, 86.9, 170.1, 94.1, 172.2);
                    a.bezierCurveTo(101.5, 174.4, 109, 175.9, 116.7, 176.5);
                    a.bezierCurveTo(122.5, 177.2, 128.4, 177.1, 134.5, 176.3);
                    a.bezierCurveTo(141.6, 175.3, 147.4, 174, 152, 172.4);
                    a.bezierCurveTo(156.6, 170.7, 159.7, 169.4, 161.4, 168.4);
                    a.lineTo(181.4, 156.2);
                    a.bezierCurveTo(187.7, 152, 192.6, 148.2, 195.9, 144.6);
                    a.lineTo(202.9, 136.6);
                    a.lineTo(209.8, 126.7);
                    a.lineTo(211.7, 124);
                    a.lineTo(214.9, 119.9);
                    a.lineTo(216.7, 117.5);
                    a.bezierCurveTo(217.8, 116.3, 218.7, 115.1, 219.4, 114);
                    a.bezierCurveTo(219.8, 113.5, 220.1,
                        113, 220.3, 112.5);
                    a.bezierCurveTo(220.8, 111.5, 221.1, 110.5, 221.3, 109.4);
                    a.bezierCurveTo(221.5, 108.5, 221.6, 107.6, 221.6, 106.7);
                    a.bezierCurveTo(221.6, 105.8, 221.4, 104.9, 221, 104);
                    a.closePath();
                    a.fillStyle = "rgb(153, 205, 0)";
                    a.fill();
                    a.beginPath();
                    a.moveTo(245.5, 203.6);
                    a.bezierCurveTo(245.4, 202.9, 245.3, 202.4, 245.2, 202);
                    a.bezierCurveTo(244.7, 200.9, 244.1, 200.1, 243.5, 199.7);
                    a.bezierCurveTo(242.9, 199.2, 241.2, 198.1, 238.5, 196.2);
                    a.bezierCurveTo(238, 195.9, 237.5, 195.5, 237, 195.2);
                    a.bezierCurveTo(234.3, 193.5, 230.8,
                        191.6, 226.3, 189.3);
                    a.bezierCurveTo(223, 187.4, 219.4, 185.7, 215.7, 184.2);
                    a.lineTo(214.7, 183.8);
                    a.bezierCurveTo(216, 179.3, 216.8, 174.4, 217, 169.3);
                    a.bezierCurveTo(217.3, 162.5, 217.5, 155.7, 217.3, 148.8);
                    a.bezierCurveTo(217.5, 148.7, 217.7, 148.6, 217.9, 148.5);
                    a.bezierCurveTo(220.1, 147, 221.6, 145.1, 222.5, 142.8);
                    a.bezierCurveTo(223.5, 140.2, 224.2, 137.4, 224.6, 134.6);
                    a.bezierCurveTo(224.9, 132.2, 225, 129.8, 225.1, 127.3);
                    a.bezierCurveTo(225.1, 124.8, 225.1, 122.4, 224.8, 119.9);
                    a.bezierCurveTo(224.8, 119.4, 224.7, 119, 224.6, 118.6);
                    a.lineTo(224.5, 115.9);
                    a.bezierCurveTo(225.1, 114.1, 225.4, 111.8, 225.6, 108.9);
                    a.bezierCurveTo(225.7, 107.4, 225.5, 105.8, 224.9, 104.3);
                    a.bezierCurveTo(220.3, 91.4, 212.2, 80.3, 200.6, 71);
                    a.bezierCurveTo(195.8, 62.6, 189, 55.8, 180.1, 50.6);
                    a.bezierCurveTo(172.6, 46.4, 165.2, 45, 157.9, 46.2);
                    a.bezierCurveTo(155.1, 45, 152.3, 43.9, 149.4, 42.8);
                    a.bezierCurveTo(148.1, 42.3, 146.8, 41.9, 145.5, 41.4);
                    a.bezierCurveTo(143.2, 40.6, 140.8, 39.9, 138.4, 39.2);
                    a.bezierCurveTo(136.1, 38.4, 133.8, 37.6, 131.6, 36.7);
                    a.bezierCurveTo(131.1, 36.6, 130.8,
                        36.3, 130.4, 36);
                    a.bezierCurveTo(130.1, 35.6, 129.9, 35.3, 129.8, 35);
                    a.bezierCurveTo(129.8, 34.3, 129.9, 33.8, 130.1, 33.5);
                    a.bezierCurveTo(130.9, 31.6, 132.7, 30, 135.7, 29);
                    a.bezierCurveTo(137.8, 27.6, 140.6, 26.5, 144, 25.5);
                    a.bezierCurveTo(152.1, 23, 156.6, 19.2, 157.4, 13.9);
                    a.bezierCurveTo(158.5, 7.2, 155.6, 2.8, 148.7, 0.7);
                    a.bezierCurveTo(141.1, -1.7, 133.2, 2, 125, 11.9);
                    a.bezierCurveTo(121.9, 15.6, 120.1, 19, 119.4, 22.1);
                    a.lineTo(118.6, 25.4);
                    a.bezierCurveTo(118.2, 30, 117.2, 33, 115.7, 34.5);
                    a.bezierCurveTo(114.8, 35.3, 113.3, 36, 111.2,
                        36.6);
                    a.bezierCurveTo(104.1, 37.5, 97.2, 39.2, 90.6, 41.6);
                    a.bezierCurveTo(89.4, 41.4, 88.3, 41.3, 87.1, 41.1);
                    a.bezierCurveTo(71.9, 41.6, 59.7, 47.8, 50.4, 59.6);
                    a.bezierCurveTo(46, 64.9, 42.7, 70.6, 40.4, 76.7);
                    a.bezierCurveTo(39.8, 77.4, 39.2, 78.1, 38.5, 78.8);
                    a.bezierCurveTo(29.4, 89.5, 22.3, 101, 17.2, 113.3);
                    a.bezierCurveTo(16.8, 114.3, 16.4, 115.3, 16.1, 116.3);
                    a.bezierCurveTo(15.8, 117, 15.6, 117.6, 15.5, 118.3);
                    a.bezierCurveTo(15.4, 118.7, 15.3, 119.1, 15.3, 119.5);
                    a.bezierCurveTo(15.2, 120.4, 15.1, 121.2, 15.2, 122.1);
                    a.bezierCurveTo(15.5,
                        124.5, 16.4, 127.1, 18, 129.6);
                    a.bezierCurveTo(18.5, 132, 18.6, 134.2, 18.3, 136);
                    a.bezierCurveTo(17.4, 144.5, 19.9, 151.6, 25.9, 157.5);
                    a.bezierCurveTo(25.9, 159.4, 26, 161.4, 26.1, 163.4);
                    a.bezierCurveTo(26.4, 169.1, 27.2, 175.1, 28.4, 181.4);
                    a.bezierCurveTo(28.7, 182.6, 28.9, 183.7, 29.2, 184.9);
                    a.bezierCurveTo(29.1, 184.9, 29, 185, 28.9, 185);
                    a.bezierCurveTo(25.6, 186.9, 22.7, 188.6, 20.2, 190.1);
                    a.bezierCurveTo(17.8, 191.7, 15.6, 193.1, 13.8, 194.4);
                    a.bezierCurveTo(12.5, 195.5, 11.1, 196.7, 9.6, 197.9);
                    a.bezierCurveTo(7.9, 199, 6.3, 200.4, 4.9,
                        201.9);
                    a.bezierCurveTo(3.7, 203, 2.7, 204.1, 1.7, 205);
                    a.bezierCurveTo(0.7, 206, 0.2, 207.4, 0, 209.2);
                    a.bezierCurveTo(-0.1, 211, 0, 212.5, 0.2, 213.8);
                    a.bezierCurveTo(0.4, 215, 0.9, 217, 1.5, 219.7);
                    a.bezierCurveTo(2.1, 222.4, 3, 224.6, 4, 226.5);
                    a.bezierCurveTo(5.1, 228.3, 6.7, 229.7, 9, 230.6);
                    a.bezierCurveTo(9.6, 230.8, 10.3, 231, 11.1, 231.2);
                    a.bezierCurveTo(14.9, 231.1, 18.6, 231.1, 22.4, 231.2);
                    a.bezierCurveTo(24.2, 231.3, 26, 231.5, 27.8, 231.7);
                    a.bezierCurveTo(29.4, 231.8, 31, 232, 32.7, 232.2);
                    a.bezierCurveTo(34.1, 232.3, 35.6, 232.5, 37.1,
                        232.6);
                    a.bezierCurveTo(38.4, 232.7, 39.8, 232.8, 41.2, 232.9);
                    a.bezierCurveTo(41.5, 232.9, 41.8, 233, 42.1, 233);
                    a.lineTo(42.2, 233.2);
                    a.bezierCurveTo(42.4, 233.8, 42.8, 234.4, 43.1, 234.8);
                    a.bezierCurveTo(48.8, 238.6, 55, 240.9, 61.6, 241.5);
                    a.bezierCurveTo(68.7, 242.6, 75.6, 242.3, 82.4, 240.5);
                    a.bezierCurveTo(82.5, 240.5, 82.5, 240.5, 82.6, 240.5);
                    a.bezierCurveTo(84, 240.2, 85.4, 239.9, 86.7, 239.6);
                    a.bezierCurveTo(88.1, 239.3, 89.3, 238.9, 90.4, 238.4);
                    a.bezierCurveTo(90.9, 238.1, 91.4, 237.8, 91.8, 237.3);
                    a.bezierCurveTo(104.5, 241.2, 118.7,
                        242, 134.5, 239.7);
                    a.bezierCurveTo(139.8, 238.9, 145.2, 237.5, 150.9, 235.6);
                    a.bezierCurveTo(151.5, 237, 152.2, 238.2, 153.1, 239.5);
                    a.bezierCurveTo(153.8, 240.1, 154.6, 240.7, 155.6, 241.3);
                    a.bezierCurveTo(156.9, 242.2, 158.4, 242.9, 160.2, 243.5);
                    a.bezierCurveTo(161.9, 243.8, 163.7, 244.1, 165.5, 244.5);
                    a.bezierCurveTo(171.9, 244.8, 178, 244.7, 183.5, 244.1);
                    a.bezierCurveTo(188, 243.7, 192.3, 242.6, 196.2, 240.7);
                    a.bezierCurveTo(197, 240.3, 197.6, 239.9, 198.3, 239.5);
                    a.bezierCurveTo(200, 238.4, 201.4, 237.4, 202.3, 236.5);
                    a.bezierCurveTo(203.2,
                        235.6, 203.9, 233.1, 204.5, 229.2);
                    a.bezierCurveTo(204.5, 229, 204.6, 228.7, 204.6, 228.3);
                    a.lineTo(223.4, 226.8);
                    a.bezierCurveTo(225.5, 226.6, 227.6, 226.4, 229.8, 226.3);
                    a.bezierCurveTo(232, 226.2, 233.8, 225.5, 235.2, 224.1);
                    a.bezierCurveTo(237, 222.5, 238.5, 220.8, 239.4, 219.1);
                    a.bezierCurveTo(240.4, 217.5, 241.3, 215.9, 242.2, 214.4);
                    a.bezierCurveTo(243, 212.9, 243.6, 211.6, 244.1, 210.5);
                    a.bezierCurveTo(244.6, 209.4, 244.9, 208.1, 245.2, 206.7);
                    a.bezierCurveTo(245.4, 205.2, 245.5, 204.2, 245.5, 203.6);
                    a.closePath();
                    a.moveTo(219.9, 140.2);
                    a.bezierCurveTo(219.5, 141.6, 218.8, 143, 218, 144.5);
                    a.bezierCurveTo(217.8, 144.9, 217.6, 145.2, 217.3, 145.6);
                    a.bezierCurveTo(216.7, 146.3, 215.9, 146.9, 214.9, 147.4);
                    a.bezierCurveTo(214.1, 147.8, 213.2, 148.2, 212.3, 148.4);
                    a.bezierCurveTo(210.2, 149.1, 208, 149.5, 205.6, 149.5);
                    a.bezierCurveTo(204.5, 149.5, 203.4, 149.4, 202.3, 149.3);
                    a.bezierCurveTo(200.6, 148.9, 199.7, 148, 199.8, 146.7);
                    a.lineTo(200.7, 145.2);
                    a.bezierCurveTo(201.3, 144.3, 201.8, 143.4, 202.4, 142.5);
                    a.bezierCurveTo(202.7, 141.9, 203, 141.3, 203.4, 140.8);
                    a.bezierCurveTo(203.8,
                        140, 204.2, 139.2, 204.7, 138.5);
                    a.bezierCurveTo(205.3, 137.7, 205.9, 136.8, 206.5, 136);
                    a.bezierCurveTo(206.9, 135.5, 207.3, 135, 207.6, 134.5);
                    a.bezierCurveTo(208.3, 133.7, 209, 132.8, 209.7, 132);
                    a.bezierCurveTo(209.9, 131.7, 210.2, 131.4, 210.5, 131);
                    a.bezierCurveTo(211, 130.4, 211.5, 129.9, 212.1, 129.3);
                    a.bezierCurveTo(212.6, 128.8, 213.1, 128.3, 213.6, 127.8);
                    a.bezierCurveTo(214.1, 127.4, 214.6, 127, 215.1, 126.6);
                    a.bezierCurveTo(215.3, 126.4, 215.5, 126.3, 215.6, 126.2);
                    a.bezierCurveTo(216.8, 125.4, 217.9, 124.8, 219, 124.5);
                    a.lineTo(219.3,
                        125.4);
                    a.bezierCurveTo(220, 127.9, 220.5, 130.6, 220.8, 133.3);
                    a.bezierCurveTo(221, 135.7, 220.8, 138, 219.9, 140.2);
                    a.closePath();
                    a.moveTo(106, 40.4);
                    a.lineTo(113.7, 38.9);
                    a.bezierCurveTo(114.2, 38.8, 114.6, 38.7, 114.8, 38.6);
                    a.bezierCurveTo(115.2, 38.6, 115.7, 38.4, 116.1, 38.3);
                    a.bezierCurveTo(117.2, 37.9, 118.2, 37.4, 119, 36.8);
                    a.lineTo(119.5, 35.6);
                    a.lineTo(123.3, 21.1);
                    a.bezierCurveTo(124.5, 18.2, 126.8, 14.6, 130.1, 10.3);
                    a.bezierCurveTo(135.2, 4.8, 141, 2.4, 147.6, 3.1);
                    a.bezierCurveTo(150.9, 3.4, 152.9, 5.2, 153.5, 8.5);
                    a.bezierCurveTo(153.7,
                        10.3, 153.7, 12, 153.3, 13.7);
                    a.bezierCurveTo(152.9, 15.9, 151.7, 17.6, 149.7, 18.6);
                    a.bezierCurveTo(148.8, 19.2, 147.1, 19.4, 144.6, 19.1);
                    a.lineTo(143.4, 19);
                    a.lineTo(141.3, 19);
                    a.bezierCurveTo(138.9, 19.1, 136.7, 19.9, 134.8, 21.5);
                    a.bezierCurveTo(132.4, 23.5, 130.7, 25.2, 129.7, 26.8);
                    a.bezierCurveTo(128.9, 28.3, 127.9, 30.7, 126.7, 33.8);
                    a.lineTo(126.4, 36.8);
                    a.lineTo(126.7, 37.7);
                    a.lineTo(128.6, 38.7);
                    a.bezierCurveTo(129.5, 39.2, 130.5, 39.5, 131.6, 39.8);
                    a.bezierCurveTo(132.7, 40, 134.1, 40.4, 135.8, 41);
                    a.bezierCurveTo(137.6, 41.7, 139.9,
                        42.4, 142.9, 43.3);
                    a.bezierCurveTo(146.3, 44.6, 149.8, 46, 153.1, 47.4);
                    a.bezierCurveTo(142.8, 50.4, 133.4, 55.2, 125, 61.8);
                    a.bezierCurveTo(124.8, 61.6, 124.5, 61.3, 124.3, 61);
                    a.bezierCurveTo(116.3, 51.7, 106.9, 45.6, 95.9, 42.7);
                    a.bezierCurveTo(99.2, 41.9, 102.5, 41.1, 106, 40.4);
                    a.closePath();
                    a.moveTo(41.7, 90.1);
                    a.bezierCurveTo(42.4, 84.8, 43.6, 79.9, 45.5, 75.3);
                    a.bezierCurveTo(46.5, 72.7, 47.7, 70.1, 49.2, 67.7);
                    a.bezierCurveTo(52.7, 61.9, 57.3, 56.8, 63, 52.3);
                    a.bezierCurveTo(70.4, 46.7, 77.8, 43.8, 85.3, 43.7);
                    a.bezierCurveTo(87.3, 43.6,
                        89.3, 43.8, 91.3, 44.1);
                    a.bezierCurveTo(95.6, 44.9, 100, 46.5, 104.4, 49.1);
                    a.bezierCurveTo(111.9, 53.4, 117.3, 59.5, 120.8, 67.4);
                    a.lineTo(124.2, 73.8);
                    a.lineTo(124.6, 73.8);
                    a.bezierCurveTo(124.7, 73.5, 124.9, 73.2, 125, 72.9);
                    a.bezierCurveTo(126.3, 71.1, 127.5, 69.4, 128.6, 67.7);
                    a.bezierCurveTo(136, 57.6, 146.1, 51.7, 158.7, 50.1);
                    a.bezierCurveTo(158.9, 50.1, 159.1, 50.1, 159.2, 50.1);
                    a.bezierCurveTo(162.5, 50.1, 165.7, 50.5, 168.8, 51.2);
                    a.bezierCurveTo(176.5, 53, 183.4, 56.7, 189.4, 62.4);
                    a.bezierCurveTo(190, 63, 190.6, 63.5, 191.1, 64.1);
                    a.bezierCurveTo(193.9,
                        67, 196.1, 70.1, 197.8, 73.5);
                    a.bezierCurveTo(201.1, 79.7, 202.5, 86.8, 202.2, 94.7);
                    a.bezierCurveTo(202, 99, 201.3, 103.2, 199.9, 107.1);
                    a.bezierCurveTo(197.5, 114.2, 193.1, 120.7, 186.7, 126.4);
                    a.bezierCurveTo(177.6, 134.4, 168.3, 137.9, 158.5, 137);
                    a.bezierCurveTo(153.1, 136.4, 149.4, 135.6, 147.3, 134.6);
                    a.bezierCurveTo(137.6, 129.8, 130.4, 122.6, 125.6, 113);
                    a.bezierCurveTo(124.9, 111.7, 124.3, 110.4, 123.8, 109);
                    a.bezierCurveTo(123.3, 107.9, 122.9, 106.7, 122.6, 105.5);
                    a.bezierCurveTo(121.9, 106.9, 121.2, 108.3, 120.5, 109.6);
                    a.bezierCurveTo(119.7,
                        111, 118.8, 112.4, 118, 113.7);
                    a.bezierCurveTo(110.3, 125.2, 100.6, 132.5, 88.9, 135.6);
                    a.bezierCurveTo(75.9, 139.1, 64.3, 136.3, 54.2, 127.3);
                    a.bezierCurveTo(51.5, 124.9, 49.2, 122.2, 47.4, 119.3);
                    a.bezierCurveTo(42.2, 111.4, 40.4, 101.7, 41.7, 90.1);
                    a.closePath();
                    a.moveTo(20.3, 118.2);
                    a.bezierCurveTo(20.4, 117, 20.4, 116.4, 20.3, 116.5);
                    a.bezierCurveTo(24.4, 105.8, 29.8, 95.7, 36.6, 86.2);
                    a.bezierCurveTo(37.1, 85.5, 37.7, 84.8, 38.2, 84.1);
                    a.bezierCurveTo(37.1, 88.6, 36.6, 93.4, 36.6, 98.3);
                    a.bezierCurveTo(36.7, 106.3, 38.6, 113.5, 42.5, 119.7);
                    a.bezierCurveTo(45.8, 125.2, 50.6, 129.9, 56.8, 134);
                    a.bezierCurveTo(70, 142.9, 83.7, 143.9, 98, 137.2);
                    a.bezierCurveTo(106.4, 133.2, 113.9, 127.9, 120.6, 121.5);
                    a.lineTo(120.9, 121.3);
                    a.lineTo(121.3, 121.5);
                    a.bezierCurveTo(126.4, 125, 131.7, 128.7, 137.2, 132.7);
                    a.bezierCurveTo(142.2, 136.2, 147.7, 138.6, 153.7, 139.7);
                    a.bezierCurveTo(161.7, 140.8, 169.7, 139.6, 177.8, 135.9);
                    a.bezierCurveTo(183.6, 133.5, 188.4, 130, 192.3, 125.5);
                    a.bezierCurveTo(197.1, 119.7, 200.6, 113.5, 202.9, 106.8);
                    a.bezierCurveTo(203.6, 104.8, 204.2, 102.7, 204.6, 100.6);
                    a.bezierCurveTo(205.1, 98.2, 205.5, 95.7, 205.7, 93.2);
                    a.bezierCurveTo(205.8, 92.2, 205.8, 91.1, 205.9, 90.2);
                    a.bezierCurveTo(205.9, 86.5, 205.4, 83, 204.4, 79.6);
                    a.bezierCurveTo(209.2, 84.5, 213.3, 89.7, 216.9, 95.4);
                    a.bezierCurveTo(218.2, 97.5, 219.3, 99.6, 220.2, 101.8);
                    a.bezierCurveTo(220.5, 102.5, 220.8, 103.3, 221, 104);
                    a.bezierCurveTo(221.4, 104.9, 221.6, 105.7, 221.6, 106.6);
                    a.bezierCurveTo(221.6, 107.6, 221.5, 108.5, 221.3, 109.4);
                    a.bezierCurveTo(221.1, 110.4, 220.8, 111.5, 220.3, 112.5);
                    a.bezierCurveTo(220.1, 113, 219.8, 113.5, 219.4,
                        114);
                    a.bezierCurveTo(218.7, 115.1, 217.8, 116.3, 216.7, 117.4);
                    a.lineTo(214.9, 119.9);
                    a.lineTo(211.7, 124);
                    a.lineTo(209.8, 126.7);
                    a.lineTo(202.9, 136.6);
                    a.lineTo(195.9, 144.6);
                    a.bezierCurveTo(192.6, 148.2, 187.7, 152, 181.4, 156.2);
                    a.lineTo(161.4, 168.4);
                    a.bezierCurveTo(159.7, 169.4, 156.6, 170.7, 152, 172.3);
                    a.bezierCurveTo(147.4, 173.9, 141.6, 175.3, 134.5, 176.2);
                    a.bezierCurveTo(128.4, 177.1, 122.5, 177.2, 116.7, 176.5);
                    a.bezierCurveTo(109, 175.8, 101.5, 174.4, 94.1, 172.2);
                    a.bezierCurveTo(86.9, 170, 79.8, 167.4, 72.9, 164.4);
                    a.bezierCurveTo(72,
                        164, 71, 163.5, 70.1, 163.1);
                    a.bezierCurveTo(65.2, 160.7, 60.8, 158.3, 57, 155.8);
                    a.bezierCurveTo(54.7, 154.3, 52.5, 152.9, 50.5, 151.5);
                    a.bezierCurveTo(47.2, 149.4, 44.1, 147.1, 41.1, 144.8);
                    a.bezierCurveTo(37.4, 142, 34, 138.9, 31.1, 135.5);
                    a.bezierCurveTo(29.4, 133.7, 27.9, 131.7, 26.5, 129.7);
                    a.bezierCurveTo(26.4, 129.5, 26.3, 129.4, 26.2, 129.3);
                    a.lineTo(25, 127.3);
                    a.bezierCurveTo(23.3, 125, 22.2, 123.4, 21.6, 122.5);
                    a.bezierCurveTo(20.7, 121.1, 20.2, 119.7, 20.3, 118.2);
                    a.closePath();
                    a.moveTo(177.9, 163.2);
                    a.lineTo(174.9, 169.8);
                    a.lineTo(174.7,
                        170.3);
                    a.lineTo(174.4, 170.9);
                    a.bezierCurveTo(174, 172.1, 173.5, 173.3, 173.1, 174.5);
                    a.bezierCurveTo(172.2, 177.2, 171.1, 179.7, 169.6, 182.2);
                    a.bezierCurveTo(168.3, 184.5, 166.3, 186.1, 163.6, 187.2);
                    a.bezierCurveTo(160.6, 188.4, 157.5, 188.5, 154.4, 187.3);
                    a.bezierCurveTo(151.9, 186.4, 149.5, 185.5, 147.2, 184.7);
                    a.lineTo(146.7, 184.5);
                    a.lineTo(146.3, 184.3);
                    a.lineTo(140.9, 182.4);
                    a.bezierCurveTo(142.8, 182.1, 145, 181.4, 147.5, 180.4);
                    a.bezierCurveTo(148.2, 180, 148.9, 179.7, 149.6, 179.4);
                    a.bezierCurveTo(152.5, 178, 155.3, 176.5, 158.1,
                        174.8);
                    a.bezierCurveTo(161.2, 172.9, 164.4, 171.1, 167.5, 169.3);
                    a.bezierCurveTo(170.7, 167.7, 173.7, 165.9, 176.8, 163.9);
                    a.bezierCurveTo(177.2, 163.7, 177.6, 163.5, 177.9, 163.2);
                    a.closePath();
                    a.moveTo(101.1, 181.4);
                    a.lineTo(97.1, 184.2);
                    a.lineTo(96.8, 184.3);
                    a.lineTo(96.3, 184.7);
                    a.bezierCurveTo(93.2, 186.5, 90.2, 187.9, 87.1, 188.9);
                    a.bezierCurveTo(83.9, 189.9, 81.1, 189.2, 78.6, 186.6);
                    a.bezierCurveTo(76, 184.1, 74, 181.3, 72.5, 178.3);
                    a.bezierCurveTo(71.3, 175.7, 70.1, 172.9, 69, 170.1);
                    a.lineTo(68, 167.8);
                    a.bezierCurveTo(67.8, 167.3,
                        67.7, 166.8, 67.5, 166.3);
                    a.bezierCurveTo(69.1, 167.1, 70.7, 167.9, 72.4, 168.8);
                    a.bezierCurveTo(74.1, 169.6, 75.9, 170.5, 77.9, 171.4);
                    a.bezierCurveTo(79.9, 172.3, 83.2, 173.8, 87.9, 175.9);
                    a.bezierCurveTo(92.5, 177.9, 95.7, 179.3, 97.5, 180);
                    a.bezierCurveTo(99.2, 180.7, 100.4, 181.2, 101.1, 181.4);
                    a.closePath();
                    a.moveTo(25.8, 151.1);
                    a.bezierCurveTo(23.2, 147.7, 22, 143.6, 22.3, 139);
                    a.bezierCurveTo(22.3, 139, 22.3, 139, 22.3, 139);
                    a.lineTo(22.4, 135.1);
                    a.bezierCurveTo(22.5, 134.4, 22.9, 134.4, 23.6, 134.9);
                    a.bezierCurveTo(24.4, 135.4, 25.2,
                        136, 26, 136.6);
                    a.bezierCurveTo(27.6, 137.8, 29.1, 139, 30.7, 140.2);
                    a.bezierCurveTo(34.1, 142.9, 37.3, 145.8, 40.4, 148.8);
                    a.bezierCurveTo(42.4, 150.6, 44.1, 152.6, 45.6, 154.7);
                    a.bezierCurveTo(45.8, 155.3, 45.9, 155.7, 45.7, 156);
                    a.lineTo(45.5, 156.1);
                    a.bezierCurveTo(40.5, 158.4, 35.6, 158.3, 30.9, 155.9);
                    a.bezierCurveTo(30.6, 155.7, 30.3, 155.6, 30, 155.4);
                    a.bezierCurveTo(30, 155.3, 29.9, 155.3, 29.9, 155.3);
                    a.bezierCurveTo(28.3, 154, 26.9, 152.6, 25.8, 151.1);
                    a.closePath();
                    a.moveTo(240.9, 209.6);
                    a.bezierCurveTo(240.1, 211.5, 239.1, 213.3,
                        237.8, 215);
                    a.bezierCurveTo(236.5, 216.5, 235.2, 218.1, 233.9, 219.6);
                    a.bezierCurveTo(233.4, 220.2, 232.8, 220.7, 232.3, 221.1);
                    a.bezierCurveTo(230.1, 222.1, 227.5, 222.5, 224.3, 222.1);
                    a.bezierCurveTo(218.9, 221.9, 213.4, 222, 207.7, 222.3);
                    a.bezierCurveTo(206.5, 222.4, 205.3, 222.4, 204, 222.5);
                    a.bezierCurveTo(203.3, 218.7, 201.8, 213.8, 199.6, 207.8);
                    a.lineTo(200.2, 212.5);
                    a.bezierCurveTo(200.1, 212, 200, 211.2, 199.7, 210.2);
                    a.bezierCurveTo(199.9, 214.1, 200, 218.2, 199.9, 222.3);
                    a.bezierCurveTo(199.9, 222.5, 199.9, 222.7, 199.9, 222.9);
                    a.bezierCurveTo(199.9,
                        225, 199.7, 226.9, 199.4, 228.8);
                    a.bezierCurveTo(199.1, 230.4, 198.7, 232, 198.3, 233.5);
                    a.lineTo(196.7, 235.1);
                    a.bezierCurveTo(196.6, 235.2, 196.5, 235.4, 196.3, 235.5);
                    a.bezierCurveTo(195.2, 236.4, 193.3, 237.6, 190.7, 239.1);
                    a.bezierCurveTo(188.1, 240.7, 184.5, 241.7, 179.9, 242.1);
                    a.bezierCurveTo(175.3, 242.4, 172, 242.5, 169.8, 242.3);
                    a.bezierCurveTo(167.8, 242.1, 165.5, 241.6, 162.9, 240.8);
                    a.bezierCurveTo(160.4, 239.9, 158, 237.9, 155.6, 234.8);
                    a.bezierCurveTo(155.4, 234.6, 155.3, 234.4, 155.1, 234.2);
                    a.bezierCurveTo(154.3, 233, 153.5,
                        231.6, 152.8, 230);
                    a.bezierCurveTo(151.9, 227.8, 151.2, 225.3, 150.7, 222.4);
                    a.bezierCurveTo(150.7, 222.2, 150.6, 222.1, 150.6, 221.9);
                    a.bezierCurveTo(149.7, 216.4, 149.3, 213.1, 149.2, 212);
                    a.bezierCurveTo(148.8, 215.6, 148.6, 219.2, 148.8, 222.8);
                    a.bezierCurveTo(148.9, 225.2, 149, 227.6, 149.4, 230);
                    a.bezierCurveTo(149.4, 230.3, 149.4, 230.6, 149.5, 231);
                    a.bezierCurveTo(141, 233.2, 132.2, 234.4, 123.2, 234.4);
                    a.bezierCurveTo(113.4, 235.1, 103.6, 234.6, 93.8, 233);
                    a.lineTo(94, 232);
                    a.bezierCurveTo(94.3, 230, 94.4, 228.1, 94.4, 226.2);
                    a.bezierCurveTo(94.4,
                        225.6, 94.3, 224.9, 94.3, 224.3);
                    a.bezierCurveTo(94.2, 220.7, 94, 217.1, 93.8, 213.5);
                    a.bezierCurveTo(93.8, 214.9, 93.7, 215.9, 93.6, 216.6);
                    a.bezierCurveTo(93.5, 217.2, 93.5, 217.7, 93.4, 218.1);
                    a.bezierCurveTo(93.4, 218.5, 93.2, 219.4, 92.8, 220.9);
                    a.bezierCurveTo(92.6, 222, 92.3, 223, 92, 223.9);
                    a.bezierCurveTo(91.9, 224.2, 91.8, 224.5, 91.7, 224.8);
                    a.bezierCurveTo(91.3, 226, 90.8, 227.1, 90.2, 228.3);
                    a.bezierCurveTo(89.9, 229, 89.5, 229.7, 89.2, 230.4);
                    a.bezierCurveTo(88.8, 230.9, 88.4, 231.4, 88, 231.9);
                    a.bezierCurveTo(87.5, 232.5, 86.9, 233.1,
                        86.2, 233.7);
                    a.bezierCurveTo(85.8, 234.1, 85.4, 234.5, 84.9, 234.8);
                    a.bezierCurveTo(83.9, 235.6, 82.8, 236.2, 81.6, 236.7);
                    a.bezierCurveTo(80.2, 237.3, 78.7, 237.7, 77.1, 238.1);
                    a.bezierCurveTo(74.1, 238.7, 71, 239, 67.8, 239);
                    a.bezierCurveTo(60.3, 239.1, 53.6, 237.3, 47.7, 233.5);
                    a.bezierCurveTo(47.6, 233.4, 47.5, 233.4, 47.4, 233.3);
                    a.bezierCurveTo(45.9, 232.5, 45, 231.7, 44.9, 230.9);
                    a.lineTo(44.6, 229.2);
                    a.bezierCurveTo(44.6, 228.8, 44.5, 228.2, 44.5, 227.6);
                    a.bezierCurveTo(44.5, 225.9, 44.5, 223.5, 44.6, 220.3);
                    a.lineTo(44.6, 213.4);
                    a.lineTo(44.7,
                        207.6);
                    a.lineTo(43.7, 213);
                    a.lineTo(42.4, 220.3);
                    a.bezierCurveTo(41.9, 223.1, 41.7, 225.4, 41.6, 227.4);
                    a.bezierCurveTo(41, 227.3, 40.3, 227.3, 39.7, 227.2);
                    a.bezierCurveTo(37.7, 227.2, 35.8, 227.2, 33.8, 227.2);
                    a.bezierCurveTo(32, 227.2, 30.2, 227.2, 28.4, 227.2);
                    a.bezierCurveTo(26.4, 227.2, 24.5, 227.3, 22.6, 227.4);
                    a.bezierCurveTo(21.3, 227.4, 19.7, 227.5, 17.8, 227.7);
                    a.bezierCurveTo(15.9, 227.9, 13.9, 227.7, 11.9, 227.1);
                    a.bezierCurveTo(9.8, 226.4, 8.3, 225.2, 7.4, 223.5);
                    a.bezierCurveTo(6.5, 221.8, 5.6, 219.7, 4.8, 217.3);
                    a.bezierCurveTo(4,
                        214.8, 3.5, 212.9, 3.3, 211.5);
                    a.bezierCurveTo(3.2, 210.1, 3.6, 209, 4.5, 208.2);
                    a.bezierCurveTo(5.4, 207.3, 6.7, 206.1, 8.4, 204.6);
                    a.bezierCurveTo(10.2, 202.9, 11.6, 201.6, 12.7, 200.6);
                    a.bezierCurveTo(13.7, 199.6, 16.9, 197.2, 22.4, 193.3);
                    a.bezierCurveTo(26.1, 190.5, 28.7, 189.1, 30.1, 188.9);
                    a.bezierCurveTo(31.2, 193, 32.3, 197, 33.7, 201);
                    a.bezierCurveTo(34.2, 202.8, 35, 204.4, 36, 205.9);
                    a.lineTo(33.3, 187.7);
                    a.lineTo(33.1, 185.9);
                    a.lineTo(32.9, 184.7);
                    a.lineTo(32.7, 183.4);
                    a.bezierCurveTo(31.8, 176.3, 31, 168.9, 30.3, 161.3);
                    a.bezierCurveTo(30.3,
                        161, 30.3, 160.7, 30.2, 160.3);
                    a.bezierCurveTo(34.5, 162, 39, 162, 43.8, 160.4);
                    a.bezierCurveTo(44.4, 160.1, 45.1, 159.9, 45.8, 159.6);
                    a.lineTo(50.7, 157.9);
                    a.lineTo(63.1, 164.7);
                    a.bezierCurveTo(63.4, 166, 64, 168, 65.2, 170.7);
                    a.lineTo(65.5, 171.5);
                    a.bezierCurveTo(66.9, 174.7, 68.3, 177.8, 69.8, 180.9);
                    a.bezierCurveTo(71.4, 184.1, 73.4, 187, 76, 189.6);
                    a.bezierCurveTo(78.5, 192.2, 81.7, 193.4, 85.5, 193.1);
                    a.bezierCurveTo(89.2, 192.6, 92.8, 191.5, 96.3, 189.7);
                    a.bezierCurveTo(98.5, 188.6, 100.4, 187.4, 102.1, 185.9);
                    a.lineTo(103.2, 185);
                    a.bezierCurveTo(103.4,
                        184.9, 103.6, 184.7, 103.8, 184.6);
                    a.bezierCurveTo(106.5, 182.5, 108.3, 180.9, 109.3, 179.7);
                    a.lineTo(109.4, 179.7);
                    a.bezierCurveTo(114, 180.5, 118.1, 181, 121.9, 181.4);
                    a.bezierCurveTo(125.7, 181.8, 128.8, 181.8, 131.3, 181.4);
                    a.bezierCurveTo(133, 181.8, 136.2, 183.2, 140.7, 185.6);
                    a.bezierCurveTo(141, 185.7, 141.3, 185.9, 141.7, 186);
                    a.bezierCurveTo(142.1, 186.3, 142.6, 186.5, 143, 186.7);
                    a.bezierCurveTo(143.5, 186.9, 144, 187.1, 144.5, 187.3);
                    a.bezierCurveTo(147.1, 188.4, 149.8, 189.4, 152.5, 190.3);
                    a.bezierCurveTo(155.3, 191.3, 158.2, 191.7,
                        161.2, 191.7);
                    a.bezierCurveTo(164.2, 191.7, 166.7, 190.7, 168.6, 188.6);
                    a.bezierCurveTo(170, 187.2, 171.1, 185.6, 172, 184.1);
                    a.bezierCurveTo(173.4, 181.6, 174.7, 179.1, 175.9, 176.6);
                    a.bezierCurveTo(177.1, 174, 178.3, 171.4, 179.4, 168.7);
                    a.bezierCurveTo(179.7, 168, 180, 167.3, 180.2, 166.7);
                    a.bezierCurveTo(181.4, 164, 182, 162.2, 182, 161.5);
                    a.bezierCurveTo(183.8, 160.7, 186.6, 158.8, 190.2, 155.8);
                    a.lineTo(191, 155.2);
                    a.bezierCurveTo(191.7, 154.5, 192.6, 153.8, 193.4, 153.2);
                    a.bezierCurveTo(193.8, 153, 194.1, 152.8, 194.5, 152.6);
                    a.lineTo(196.6,
                        153.6);
                    a.bezierCurveTo(197, 153.7, 197.6, 153.8, 198.4, 153.8);
                    a.bezierCurveTo(199.3, 153.8, 200.6, 153.7, 202.1, 153.6);
                    a.bezierCurveTo(204.6, 153.5, 207, 153.1, 209.4, 152.5);
                    a.bezierCurveTo(210.5, 152.1, 211.6, 151.8, 212.6, 151.3);
                    a.bezierCurveTo(212.6, 151.4, 212.6, 151.4, 212.6, 151.4);
                    a.bezierCurveTo(213.3, 158.8, 213.4, 166.1, 212.8, 173.3);
                    a.lineTo(211.2, 182.6);
                    a.lineTo(211, 183.6);
                    a.lineTo(209.4, 192.8);
                    a.lineTo(208.3, 198);
                    a.lineTo(208.4, 198.1);
                    a.bezierCurveTo(210.9, 194.2, 212.8, 190, 214.2, 185.6);
                    a.lineTo(240.5, 201.5);
                    a.bezierCurveTo(241.1,
                        202.2, 241.6, 202.9, 241.8, 203.6);
                    a.bezierCurveTo(242.1, 205.4, 241.8, 207.4, 240.9, 209.6);
                    a.closePath();
                    a.fillStyle = "rgb(35, 44, 30)";
                    a.fill();
                    a.beginPath();
                    a.moveTo(219.9, 140.2);
                    a.bezierCurveTo(219.5, 141.6, 218.8, 143, 218, 144.5);
                    a.bezierCurveTo(217.8, 144.9, 217.6, 145.2, 217.3, 145.6);
                    a.bezierCurveTo(216.7, 146.3, 215.9, 146.9, 214.9, 147.4);
                    a.bezierCurveTo(214.1, 147.8, 213.2, 148.2, 212.3, 148.4);
                    a.bezierCurveTo(210.2, 149.1, 208, 149.5, 205.6, 149.5);
                    a.bezierCurveTo(204.5, 149.5, 203.4, 149.4, 202.3, 149.3);
                    a.bezierCurveTo(200.6,
                        148.9, 199.7, 148, 199.8, 146.7);
                    a.lineTo(200.7, 145.2);
                    a.bezierCurveTo(201.3, 144.3, 201.8, 143.4, 202.4, 142.5);
                    a.bezierCurveTo(202.7, 141.9, 203, 141.3, 203.4, 140.8);
                    a.bezierCurveTo(203.8, 140, 204.2, 139.2, 204.7, 138.5);
                    a.bezierCurveTo(205.3, 137.7, 205.9, 136.8, 206.5, 136);
                    a.bezierCurveTo(206.9, 135.5, 207.3, 135, 207.6, 134.5);
                    a.bezierCurveTo(208.3, 133.7, 209, 132.8, 209.7, 132);
                    a.bezierCurveTo(209.9, 131.7, 210.2, 131.4, 210.5, 131);
                    a.bezierCurveTo(211, 130.4, 211.5, 129.9, 212.1, 129.3);
                    a.bezierCurveTo(212.6, 128.8, 213.1, 128.3, 213.6,
                        127.8);
                    a.bezierCurveTo(214.1, 127.4, 214.6, 127, 215.1, 126.6);
                    a.bezierCurveTo(215.3, 126.4, 215.5, 126.3, 215.6, 126.2);
                    a.bezierCurveTo(216.8, 125.4, 217.9, 124.8, 219, 124.5);
                    a.lineTo(219.3, 125.4);
                    a.bezierCurveTo(220, 127.9, 220.5, 130.6, 220.8, 133.3);
                    a.bezierCurveTo(221, 135.7, 220.8, 138, 219.9, 140.2);
                    a.closePath();
                    a.moveTo(40.4, 148.8);
                    a.bezierCurveTo(37.3, 145.8, 34.1, 142.9, 30.7, 140.2);
                    a.bezierCurveTo(29.1, 139, 27.6, 137.8, 26, 136.6);
                    a.bezierCurveTo(25.2, 136, 24.4, 135.4, 23.6, 134.9);
                    a.bezierCurveTo(22.9, 134.4, 22.5, 134.4,
                        22.4, 135.1);
                    a.lineTo(22.3, 139);
                    a.bezierCurveTo(22.3, 139, 22.3, 139, 22.3, 139);
                    a.bezierCurveTo(22, 143.6, 23.2, 147.7, 25.8, 151.1);
                    a.bezierCurveTo(26.9, 152.6, 28.3, 154, 29.9, 155.3);
                    a.bezierCurveTo(29.9, 155.3, 30, 155.3, 30, 155.4);
                    a.bezierCurveTo(30.3, 155.6, 30.6, 155.7, 30.9, 155.9);
                    a.bezierCurveTo(35.6, 158.3, 40.5, 158.4, 45.5, 156.1);
                    a.lineTo(45.7, 156);
                    a.bezierCurveTo(45.9, 155.7, 45.8, 155.3, 45.6, 154.7);
                    a.bezierCurveTo(44.1, 152.6, 42.4, 150.6, 40.4, 148.8);
                    a.closePath();
                    a.moveTo(87.9, 175.9);
                    a.bezierCurveTo(83.2, 173.8, 79.9,
                        172.3, 77.9, 171.4);
                    a.bezierCurveTo(75.9, 170.5, 74.1, 169.6, 72.4, 168.8);
                    a.bezierCurveTo(70.7, 167.9, 69.1, 167.1, 67.5, 166.3);
                    a.bezierCurveTo(67.7, 166.8, 67.8, 167.3, 68, 167.8);
                    a.lineTo(69, 170.1);
                    a.bezierCurveTo(70.1, 172.9, 71.3, 175.7, 72.5, 178.3);
                    a.bezierCurveTo(74, 181.3, 76, 184.1, 78.6, 186.6);
                    a.bezierCurveTo(81.1, 189.2, 83.9, 189.9, 87.1, 188.9);
                    a.bezierCurveTo(90.2, 187.9, 93.2, 186.5, 96.3, 184.7);
                    a.lineTo(96.8, 184.3);
                    a.lineTo(97.1, 184.2);
                    a.lineTo(101.1, 181.4);
                    a.bezierCurveTo(100.4, 181.2, 99.2, 180.7, 97.5, 180);
                    a.bezierCurveTo(95.7,
                        179.3, 92.5, 177.9, 87.9, 175.9);
                    a.closePath();
                    a.moveTo(167.5, 169.3);
                    a.bezierCurveTo(164.4, 171.1, 161.2, 172.9, 158.1, 174.8);
                    a.bezierCurveTo(155.3, 176.5, 152.5, 178, 149.6, 179.4);
                    a.bezierCurveTo(148.9, 179.7, 148.2, 180, 147.5, 180.4);
                    a.bezierCurveTo(145, 181.4, 142.8, 182.1, 140.9, 182.4);
                    a.lineTo(146.3, 184.3);
                    a.lineTo(146.7, 184.5);
                    a.lineTo(147.2, 184.7);
                    a.bezierCurveTo(149.5, 185.5, 151.9, 186.4, 154.4, 187.3);
                    a.bezierCurveTo(157.5, 188.5, 160.6, 188.4, 163.6, 187.2);
                    a.bezierCurveTo(166.3, 186.1, 168.3, 184.5, 169.6, 182.2);
                    a.bezierCurveTo(171.1,
                        179.7, 172.2, 177.2, 173.1, 174.5);
                    a.bezierCurveTo(173.5, 173.3, 174, 172.1, 174.4, 170.9);
                    a.lineTo(174.7, 170.3);
                    a.lineTo(174.9, 169.8);
                    a.lineTo(177.9, 163.2);
                    a.bezierCurveTo(177.6, 163.5, 177.2, 163.7, 176.8, 163.9);
                    a.bezierCurveTo(173.7, 165.9, 170.7, 167.7, 167.5, 169.3);
                    a.closePath();
                    a.moveTo(202.2, 94.7);
                    a.bezierCurveTo(202.5, 86.8, 201.1, 79.7, 197.8, 73.5);
                    a.bezierCurveTo(196.1, 70.1, 193.9, 67, 191.1, 64.1);
                    a.bezierCurveTo(190.6, 63.5, 190, 63, 189.4, 62.4);
                    a.bezierCurveTo(183.4, 56.7, 176.5, 53, 168.8, 51.2);
                    a.bezierCurveTo(165.7,
                        50.5, 162.5, 50.1, 159.2, 50.1);
                    a.bezierCurveTo(159.1, 50.1, 158.9, 50.1, 158.7, 50.1);
                    a.bezierCurveTo(146.1, 51.7, 136, 57.6, 128.6, 67.7);
                    a.bezierCurveTo(127.5, 69.4, 126.3, 71.1, 125, 72.9);
                    a.bezierCurveTo(124.9, 73.2, 124.7, 73.5, 124.6, 73.8);
                    a.lineTo(124.4, 74.2);
                    a.lineTo(124.2, 73.8);
                    a.lineTo(120.8, 67.4);
                    a.bezierCurveTo(117.3, 59.5, 111.9, 53.4, 104.4, 49.1);
                    a.bezierCurveTo(100, 46.5, 95.6, 44.9, 91.3, 44.1);
                    a.bezierCurveTo(89.3, 43.8, 87.3, 43.6, 85.3, 43.7);
                    a.bezierCurveTo(77.8, 43.8, 70.4, 46.7, 63, 52.3);
                    a.bezierCurveTo(57.3, 56.8,
                        52.7, 61.9, 49.2, 67.7);
                    a.bezierCurveTo(47.7, 70.1, 46.5, 72.7, 45.5, 75.3);
                    a.bezierCurveTo(43.6, 79.9, 42.4, 84.8, 41.7, 90.1);
                    a.bezierCurveTo(40.4, 101.7, 42.2, 111.4, 47.4, 119.3);
                    a.bezierCurveTo(49.2, 122.2, 51.5, 124.9, 54.2, 127.3);
                    a.bezierCurveTo(64.3, 136.3, 75.9, 139.1, 88.9, 135.6);
                    a.bezierCurveTo(100.6, 132.5, 110.3, 125.2, 118, 113.7);
                    a.bezierCurveTo(118.8, 112.4, 119.7, 111, 120.5, 109.6);
                    a.bezierCurveTo(121.2, 108.3, 121.9, 106.9, 122.6, 105.5);
                    a.bezierCurveTo(122.9, 106.7, 123.3, 107.9, 123.8, 109);
                    a.bezierCurveTo(124.3, 110.4, 124.9,
                        111.7, 125.6, 113);
                    a.bezierCurveTo(130.4, 122.6, 137.6, 129.8, 147.3, 134.6);
                    a.bezierCurveTo(149.4, 135.6, 153.1, 136.4, 158.5, 137);
                    a.bezierCurveTo(168.3, 137.9, 177.6, 134.4, 186.7, 126.4);
                    a.bezierCurveTo(193.1, 120.7, 197.5, 114.2, 199.9, 107.1);
                    a.bezierCurveTo(201.3, 103.2, 202, 99, 202.2, 94.7);
                    a.closePath();
                    a.fillStyle = "rgb(255, 255, 255)";
                    a.fill();
                    a.save();
                    a.translate(g, 0);
                    a.beginPath();
                    a.moveTo(101.3, 71.1);
                    a.bezierCurveTo(101, 71.1, 100.7, 71.2, 100.5, 71.3);
                    a.bezierCurveTo(100.5, 71.3, 100.5, 71.3, 100.5, 71.3);
                    a.bezierCurveTo(102.7,
                        72.9, 103.8, 75.8, 104, 79.9);
                    a.bezierCurveTo(104.1, 84.2, 100.5, 86.1, 93, 85.6);
                    a.bezierCurveTo(91, 85.5, 89.2, 85.4, 87.8, 85.3);
                    a.bezierCurveTo(87.7, 86.6, 87.6, 87.9, 87.6, 89.3);
                    a.bezierCurveTo(87.8, 91.8, 88.6, 94.3, 89.9, 96.7);
                    a.bezierCurveTo(91.9, 101.5, 95.2, 103.9, 99.8, 103.9);
                    a.bezierCurveTo(107.4, 103.7, 112.3, 98, 114.7, 86.8);
                    a.bezierCurveTo(114.7, 74.4, 110.2, 69.2, 101.3, 71.1);
                    a.closePath();
                    a.fillStyle = "rgb(0, 0, 0)";
                    a.fill();
                    a.restore();
                    a.save();
                    a.translate(h, 0);
                    a.beginPath();
                    a.moveTo(150.4, 74.1);
                    a.bezierCurveTo(147.9,
                        71.7, 145.3, 70.5, 142.4, 70.5);
                    a.bezierCurveTo(141.5, 70.5, 140.5, 70.7, 139.6, 71);
                    a.bezierCurveTo(140.1, 71.3, 140.6, 71.6, 141.1, 72);
                    a.bezierCurveTo(143.3, 73.6, 144.5, 76.5, 144.6, 80.6);
                    a.bezierCurveTo(144.8, 84.9, 141.1, 86.8, 133.7, 86.3);
                    a.bezierCurveTo(132.1, 86.2, 130.8, 86.2, 129.6, 86.1);
                    a.bezierCurveTo(129.6, 86.2, 129.6, 86.2, 129.6, 86.3);
                    a.bezierCurveTo(129.6, 89.1, 130.2, 91.7, 131.5, 94.1);
                    a.bezierCurveTo(134.1, 99, 138.3, 101.5, 144, 101.5);
                    a.bezierCurveTo(146.8, 101.7, 149.7, 99.7, 152.5, 95.6);
                    a.bezierCurveTo(154.5, 91.6, 155.5,
                        88.9, 155.5, 87.5);
                    a.bezierCurveTo(155.5, 81.9, 153.8, 77.5, 150.4, 74.1);
                    a.closePath();
                    a.fillStyle = "rgb(0, 0, 0)";
                    a.fill();
                    a.restore();
                    a.restore();
                    a.restore()
                }

                function o(a) {
                    function b() {
                        var x = +new Date - e;
                        if (x < q) g = 0 - f.km(x, 0, 100, q);
                        else if (x < t) {
                            if (x > q + 100) m = l = -1 * f.Oe(x - (q + 100), 0, 10, t - (q + 100))
                        } else if (x < u) m = l = -10 + f.Ki(x - t, 20, u - t);
                        else if (x < w) {
                            if (x > u + 100) m = l = 10 - f.Ki(x - (u + 100), 10, w - (u + 100))
                        } else x < Q || x < Y && (k = f.Oe(x - Q, o, 50, Y - Q));
                        x > q && x < u && (N = f.Ji(x - q, 0.02, u - q, 6));
                        x > u && x < Q && (N = 0.02 - f.Ji(x - u, 0.02, Q - u, 2));
                        var da =
                            0 + h,
                            O = 75 + k + g;
                        c.save();
                        c.rotate(30 * Math.PI / 180);
                        d(c, 0.32, 0.32 + N, da, O, l, m);
                        c.restore();
                        x < Y ? window.requestAnimationFrame(b) : a()
                    }
                    var c = x.getContext("2d"),
                        e = +new Date,
                        g = 0.1,
                        h = 0,
                        k = 0,
                        l = 0,
                        m = 0,
                        o = h,
                        q = 600,
                        t = 400 + q,
                        u = 600 + t,
                        w = 700 + u,
                        Q = 500 + w,
                        Y = 800 + Q,
                        N = 0;
                    window.requestAnimationFrame(b)
                }

                function t() {
                    $("#dpic").removeClass();
                    $("#dframe").animate({
                        top: a.f(50),
                        scale: 0.2
                    }, 350, "easeInExpo");
                    $("#dmsg").animate({
                        top: a.f(50),
                        scale: 0.2
                    }, 350, "easeInExpo");
                    $("#dshareBtn").fadeTo(200, 0);
                    $("#d").delay(200).fadeOut(200, function() {
                        g.ag();
                        q = n;
                        $("#gameBtnTray").show()
                    })
                }
                var x, m, w = a.f(2.2);
                this.Za = function() {
                    m = document.getElementById("e");
                    m.width = a.f(1024);
                    m.height = a.f(576);
                    if (x = document.getElementById("moreCanvas")) {
                        x.width = 51;
                        x.height = 51
                    }
                    $("#dshareBtn").click(function() {
                        c.as(k.$(l.tp), c.Js, e.getDrawingBaseUrl() + "drawing" + q + ".jpg", function() {
                            t();
                            return i
                        });
                        return p
                    });
                    $("#d").click(function() {
                        t()
                    });
                    $("#moreLink").mouseenter(function() {
                        if (!u) {
                            u = i;
                            o(function() {
                                u = p
                            })
                        }
                    }).click(function() {
                        Analytics.$u("SMG_MRTINX_CTR_SITE_BehindtheScenes")
                    })
                };
                this.Gg = function() {
                    h.subscribe(h.ia.lc,
                        function() {
                            b.Ua({
                                text: k.$(l.wo),
                                dh: "dmsg",
                                va: i
                            });
                            b.Ua({
                                text: k.$(l.sp),
                                Nc: "#dshareBtn img",
                                va: i
                            })
                        });
                    h.subscribe(h.ia.gp, this.Qy);
                    h.subscribe(h.ia.ro, this.vn)
                };
                var q = n;
                this.vn = function(b) {
                    q = b + 1;
                    g.Yf();
                    $("#gameBtnTray").hide();
                    $("#dpic").addClass("drawing" + q);
                    $("#dframe").animate({
                        top: a.f(100),
                        scale: 0.35
                    }, 0);
                    $("#dframe").fadeTo(0, 0);
                    $("#dmsg").animate({
                        top: a.f(60),
                        scale: 0.5
                    }, 0);
                    $("#dmsg").fadeTo(0, 0);
                    $("#dshareBtn").fadeTo(0, 0);
                    $("#d").fadeIn(100, function() {
                        $("#dframe").fadeTo(0, 1);
                        $("#dmsg").fadeTo(0,
                            1);
                        $("#dframe").animate({
                            top: 0,
                            scale: 1
                        }, 350, "easeOutBack");
                        $("#dmsg").animate({
                            top: 0,
                            scale: 1
                        }, 350, "easeOutBack");
                        $("#dshareBtn").delay(600).fadeTo(200, 1)
                    })
                };
                var u = p;
                this.Qy = function() {
                    var b = m.getContext("2d");
                    g.Yf();
                    $("#e").fadeIn(function() {
                        function c() {
                            var O = +new Date - e;
                            if (O < F) {
                                h = f.km(O, t, w, F);
                                k = f.km(O, u, w, F)
                            } else if (O < Z) {
                                if (O > F + 100) q = o = -1 * f.Oe(O - (F + 100), 0, a.f(10), Z - (F + 100))
                            } else if (O < Q) q = o = a.f(-10) + f.Ki(O - Z, a.f(20), Q - Z);
                            else if (O < Y) {
                                if (O > Q + 100) q = o = a.f(10) - f.Ki(O - (Q + 100), a.f(10), Y - (Q + 100))
                            } else if (!(O <
                                    N) && O < ma) {
                                m = f.Oe(O - N, x, a.f(300), ma - N);
                                h = a.f(w) - f.Oe(O - N, 0, a.f(2), F);
                                k = a.f(w) - f.Oe(O - N, 0, a.f(2), F)
                            }
                            O > F && O < Q && (da = f.Ji(O - F, 0.1, Q - F, 6));
                            O > Q && O < N && (da = 0.1 - f.Ji(O - Q, 0.1, N - Q, 2));
                            if (O < ma) window.requestAnimationFrame(c);
                            else {
                                $("#e").fadeOut();
                                g.ag()
                            }
                            var O = l + (a.f(500) - h / w * a.f(200)),
                                Qa = m + (a.f(600) - k / w * a.f(400));
                            d(b, h, k + da, O, Qa, o, q)
                        }
                        var e = +new Date,
                            h = 0.1,
                            k = 0.1,
                            l = 0,
                            m = 0,
                            o = 0,
                            q = 0,
                            t = h,
                            u = k,
                            x = l,
                            F = 600,
                            Z = 400 + F,
                            Q = 600 + Z,
                            Y = 700 + Q,
                            N = 500 + Y,
                            ma = 800 + N,
                            da = 0;
                        window.requestAnimationFrame(c)
                    })
                }
            }
        }(Ob, Bc, pc, X, yc, oa, ib, oc, lc, W),
        Dc =
        function(b, c, e, a, d, f, h, g, k, l, s, o, t, x, m, w, q, u, j, z, J, G, I, B, K, V, M, H) {
            return new function() {
                function x(a, b, e) {
                    var e = e || ea.getContext("2d"),
                        f = qa[d.V],
                        g = ea.width / 2,
                        b = g - g * (1 - (b || 0));
                    e.save();
                    e.setTransform(1, 0, 0, 1, 0, 0);
                    e.clearRect(0, 0, ea.width, ea.height);
                    e.restore();
                    e.drawImage(f, -1 * b, 0);
                    a && e.drawImage(na, g - c.f(26) - b, c.f(10));
                    e.save();
                    e.translate(ea.width, 0);
                    e.scale(-1, 1);
                    e.drawImage(f, -1 * b, 0);
                    e.restore();
                    a && e.drawImage($a, g + b, c.f(10))
                }

                function D() {
                    $("#levelMenu").hide()
                }

                function F() {
                    u.Yf();
                    $("#levelMenu").show()
                }

                function J() {
                    var a = d.V,
                        b = d.Xq() - 1;
                    if (a >= b) {
                        M.hide();
                        j.Hx()
                    } else {
                        L.Dm = i;
                        h.Fb(f.Pd, p)
                    }
                }

                function Q() {
                    var b = d.Xq() - 1;
                    if (d.V !== b) return p;
                    b = a.Sb(d.V);
                    return d.cc !== b ? p : i
                }

                function Y(a, b) {
                    M.fadeIn(650, 100);
                    d.cc = a;
                    Q() && j.Mw();
                    if (b) u.wj();
                    else {
                        h.Fb(f.Ce);
                        setTimeout(function() {
                            L.ux()
                        }, 200)
                    }
                }

                function N() {
                    $("#resultScore").text(nb[Ja]);
                    Ja++;
                    Ja < mb.length && (Ja < ob ? setTimeout(function() {
                        N()
                    }, 10) : setTimeout(function() {
                        N()
                    }, 167))
                }

                function ma() {
                    for (var b = a.Sb(d.V), c = 0; c < b; c++) {
                        var e = $("#option" + (c + 1));
                        if (e != n)
                            if (c <
                                b) {
                                e.show();
                                var f = a.ew(d.V, c);
                                if (f != n) {
                                    e.removeClass("locked").addClass("open");
                                    e.removeClass("ctrCursor").addClass("ctrPointer");
                                    var g = $(k.Ua({
                                            text: c + 1,
                                            va: i
                                        })),
                                        f = $("<div>").addClass("stars" + f);
                                    e.empty().append($("<div class='txt'/>").append(g).append(f))
                                } else {
                                    e.removeClass("open").addClass("locked");
                                    e.removeClass("ctrPointer").addClass("ctrCursor");
                                    e.html("")
                                }
                            } else e.hide()
                    }
                    b = a.Nl(d.V) + "/" + a.Sb(d.V) * 3;
                    k.Ua({
                        text: b,
                        Nc: "#levelScore img",
                        va: i
                    });
                    da()
                }

                function da() {
                    function b() {
                        var c = G.$(B.Iu).replace("%d",
                            a.nf());
                        k.Ua({
                            text: c,
                            Nc: "#boxScore img",
                            va: i
                        })
                    }
                    for (var c = 1, e = a.Ai(); c < e; c++)
                        if (!a.hh(c) && d.hh(c)) {
                            d.qz(c);
                            a.Jh(c, 0, 0)
                        }
                    b();
                    z.subscribe(z.ia.lc, b)
                }

                function O() {
                    L.le = i;
                    Ia != n && clearTimeout(Ia);
                    Ia = setTimeout(function() {
                        L.le = p;
                        Ia = n
                    }, 1E3)
                }

                function Qa(b) {
                    b == f.nc || b == f.Pd || b == f.Rd ? M.fadeOut(300) : b !== f.Qd && M.show();
                    b !== f.ei && D();
                    (b === f.nc || b === f.Qd) && o.an(t.wi);
                    if (b == f.Pd) {
                        d.hn();
                        d.$c();
                        da();
                        if (L.Dm) {
                            L.Dm = p;
                            setTimeout(function() {
                                $("#levelResults").hide();
                                d.Ld(d.V + 1)
                            }, 800)
                        } else {
                            clearTimeout(xa);
                            xa = setTimeout(function() {
                                    d.ev()
                                },
                                300)
                        }
                    } else d.fd();
                    if (b == f.Qd) {
                        x(i, 0);
                        ma();
                        $("#levelScore").delay(200).fadeIn(700);
                        $("#levelBack").delay(200).fadeIn(700);
                        $("#levelOptions").delay(200).fadeIn(700);
                        $("#levelResults").delay(200).fadeOut(700)
                    } else if (b == f.Ce) ba(p);
                    else if (b === f.rg) {
                        M.ry();
                        b = G.$(B.zo).replace("%d", a.nf());
                        k.Ua({
                            text: b,
                            Nc: "#finalScore img",
                            scale: 0.8 * c.Zc
                        });
                        k.Ua({
                            text: G.$(B.up),
                            Nc: "#finalShareBtn img",
                            scale: 0.8 * c.Zc,
                            Im: c.f(130)
                        });
                        k.Ua({
                            text: G.$(B.fp),
                            Nc: "#finalFunBtn img",
                            scale: 0.8 * c.Zc,
                            Im: c.f(310)
                        })
                    } else b == f.Rd && z.Ub(z.ia.Qp)
                }

                function Za(g) {
                    if (g == f.nc) {
                        $("#playBtn").click(function() {
                            o.H(t.qa);
                            H.Mr && H.Mr();
                            j.Fx()
                        });
                        $("#optionsBtn").click(function() {
                            o.H(t.qa);
                            q.Ry ? q.Ry() : h.Fb(f.Rd)
                        });
                        $("#slowComputerBtn").click(function() {
                            o.H(t.qa);
                            L.Fi()
                        });
                        var m = n;
                        $("#resetYesBtn").on(l.Bn, function() {
                            o.H(t.qa);
                            m = setTimeout(function() {
                                L.Fi();
                                m = n;
                                s.clear();
                                a.Tx();
                                d.Vw()
                            }, 3E3)
                        }).on(l.lm, function() {
                            m != n && clearTimeout(m)
                        });
                        $("#resetNoBtn").click(function() {
                            o.H(t.qa);
                            L.Fi()
                        });
                        ba(p);
                        $("#optionSound").click(function() {
                            ba(i, "optionMsg")
                        });
                        if (L.rt) {
                            $("#optionHd").addClass("activeResolution");
                            $("#optionSd").addClass("inActiveResolution");
                            $("#optionSd").addClass("ctrPointer");
                            $("#optionSd").hover(function() {
                                Aa("optionMsg", G.$(B.np), 4E3)
                            }, function() {
                                $("#optionMsg").stop(i, i).fadeOut(500)
                            });
                            g = "optionSd"
                        } else {
                            $("#optionSd").addClass("activeResolution");
                            $("#optionHd").addClass("inActiveResolution");
                            $("#optionHd").addClass("ctrPointer");
                            $("#optionHd").hover(function() {
                                Aa("optionMsg", G.$(B.mp), 4E3)
                            }, function() {
                                $("#optionMsg").stop(i, i).fadeOut(500)
                            });
                            g = "optionHd"
                        }
                        $("#" + g).click(function() {
                            s.ty(!L.rt);
                            window.location.href = "/"
                        });
                        z.subscribe(z.ia.lc, function() {
                            P("#playBtn img", B.mu);
                            P("#optionsBtn img", B.Rd);
                            P("#resetYesBtn img", B.Ku);
                            P("#resetNoBtn img", B.ju)
                        })
                    } else if (g == f.Pd) {
                        for (var w = b.Aq, N = b.gv, g = 0, Q = N.length; g < Q; g++) d.Pl(g, w[g], a.$f(g), a.hh(g), N[g]);
                        $("#boxNavForward").click(function() {
                            if (d.V + 1 < d.Ai()) {
                                d.Ld(d.V + 1);
                                o.H(t.qa)
                            }
                        });
                        $("#boxNavBack").click(function() {
                            if (d.V > 0) {
                                d.Ld(d.V - 1);
                                o.H(t.qa)
                            }
                        });
                        $("#boxBack").click(function() {
                            o.H(t.qa);
                            h.Fb(f.nc)
                        });
                        $("#missingOkBtn").click(function() {
                            o.H(t.qa);
                            L.Fi()
                        });
                        d.Vl = function(b) {
                            o.H(t.qa);
                            var c = b + 1;
                            if (c === d.V + 1) {
                                if (!(c > d.Ai() - 1)) {
                                    if (a.hh(d.V)) {
                                        c = function(a) {
                                            var a = $("#" + a),
                                                b = a.find("img");
                                            b.length === 0 && (b = $("<img>").prependTo(a));
                                            return b[0]
                                        };
                                        k.Ua({
                                            text: G.$(B.$n),
                                            W: c("missingLine1"),
                                            va: i
                                        });
                                        k.Ua({
                                            text: a.$f(d.V) - a.nf(),
                                            W: c("missingCount"),
                                            va: i
                                        });
                                        k.Ua({
                                            text: G.$(B.ao),
                                            W: c("missingLine2"),
                                            va: i
                                        });
                                        k.drawSmall({
                                            text: G.$(B.bo),
                                            W: c("missingLine3"),
                                            va: i
                                        });
                                        k.Ua({
                                            text: G.$(B.ku),
                                            W: c("missingOkBtn"),
                                            va: i
                                        });
                                        o.H(t.qa);
                                        L.xn("missingStars")
                                    } else {
                                        L.$i = p;
                                        x(i, 0);
                                        h.Fb(f.Qd)
                                    }
                                    x(i,
                                        0);
                                    M.ky(b)
                                }
                            } else c > d.V + 1 ? d.Ld(d.V + 1) : c < d.V + 1 && d.Ld(d.V - 1)
                        }
                    } else if (g == f.Qd) {
                        x(i, 0);
                        var w = a.Sb(d.V),
                            N = $("#levelOptions"),
                            g = Q = 0,
                            Cb = c.f(420),
                            pb = c.f(153),
                            Db = "";
                        if (w > 9) {
                            Q = -30;
                            g = -40;
                            Cb = c.f(420);
                            pb = c.f(101);
                            Db = "option-small"
                        }
                        for (var qb = g, Ra = Q, da, g = 0; g < w; g++) {
                            da = N.append('<div id="option' + (g + 1) + '" class="option ' + Db + ' locked ctrPointer" style="left: ' + Ra + "px; top: " + qb + 'px;">').children().last()[0];
                            Ra = Ra + pb;
                            if (Ra > Cb) {
                                Ra = Q;
                                qb = qb + pb
                            }
                            da.Fd = g;
                            da.addEventListener("click", function(b) {
                                o.H(t.qa);
                                b = b.currentTarget.Fd;
                                a.uw(d.V, b) && Y(b + 1)
                            }, p)
                        }
                        $("#levelBack").click(function() {
                            o.H(t.qa);
                            h.Fb(f.Pd)
                        })
                    } else if (g == f.Ce) {
                        $("#gameRestartBtn").click(function() {
                            if (!L.le) {
                                o.H(t.qa);
                                Y(d.cc, i)
                            }
                        });
                        $("#gameMenuBtn").click(function() {
                            if (!L.le) {
                                o.H(t.qa);
                                F()
                            }
                        })
                    } else if (g == f.ei) {
                        $("#continueBtn").click(function() {
                            o.H(t.qa);
                            D();
                            u.ag()
                        });
                        $("#skipBtn").click(function() {
                            o.H(t.qa);
                            D();
                            if (a.Sb(d.V) > d.cc) {
                                a.Jh(d.V, d.cc, 0);
                                Y(d.cc + 1, p)
                            } else {
                                $("#gameBtnTray").hide();
                                J()
                            }
                        });
                        $("#selectBtn").click(function() {
                            o.H(t.qa);
                            D();
                            u.Us();
                            L.Rf = i;
                            L.ih =
                                p;
                            L.am()
                        });
                        $("#menuBtn").click(function() {
                            o.H(t.qa);
                            D();
                            u.Us();
                            L.Rf = i;
                            L.ih = i;
                            L.am()
                        });
                        ba(p);
                        $("#gameSound").click(function() {
                            ba(i, "gameMsg")
                        });
                        z.subscribe(z.ia.lc, function() {
                            P("#continueBtn img", B.xt);
                            P("#skipBtn img", B.ru);
                            P("#selectBtn img", B.eu);
                            P("#menuBtn img", B.gu)
                        })
                    } else if (g == f.bp) {
                        $("#nextBtn").click(function() {
                            if (!L.le) {
                                O();
                                o.H(t.qa);
                                a.Sb(d.V) > d.cc ? Y(d.cc + 1) : J()
                            }
                        });
                        $("#replayBtn").click(function() {
                            if (!L.le) {
                                O();
                                o.H(t.qa);
                                Y(d.cc)
                            }
                        });
                        $("#lrMenuBtn").click(function() {
                            if (!L.le) {
                                O();
                                o.H(t.qa);
                                L.Rf = i;
                                L.ih = p;
                                L.Xs()
                            }
                        });
                        z.subscribe(z.ia.lc, function() {
                            P("#nextBtn img", B.NEXT);
                            P("#replayBtn img", B.Ib);
                            P("#lrMenuBtn img", B.nc);
                            k.drawSmall({
                                text: G.$(B.At),
                                dh: "resultTickerMessage",
                                va: i
                            })
                        })
                    } else if (g == f.rg) {
                        $("#gameCompleteBack").click(function() {
                            o.H(t.qa);
                            h.Fb(f.nc);
                            M.hide()
                        });
                        $("#finalShareBtn").click(function() {
                            var b = d.Ix(),
                                c = a.nf();
                            V.as(e.getGameCompleteShareText(c, b), V.Js, e.getScoreImageBaseUrl() + "score" + c + ".png", ha(i))
                        })
                    } else if (g == f.Rd) {
                        var ea = e.updateSoundOption,
                            ma = $("#soundBtn").click(function() {
                                var a = !s.sm();
                                o.Gj(a);
                                o.H(t.qa);
                                ea(ma, a);
                                ba(p);
                                ba(p)
                            }),
                            na = e.updateMusicOption,
                            qa = $("#musicBtn").click(function() {
                                o.H(t.qa);
                                var a = !s.rm();
                                o.Fj(a);
                                na(qa, a);
                                ba(p);
                                ba(p)
                            }),
                            wa = e.updateLangSetting;
                        e.setLangOptionClick(function() {
                            o.H(t.qa);
                            var a = (s.Wi() + 1) % I.eo;
                            s.vy(a);
                            z.Ub(z.ia.lc)
                        });
                        var Eb = e.updateCutSetting;
                        e.setCutOptionClick(function() {
                            o.H(t.qa);
                            var a = !s.pm();
                            s.ly(a);
                            Eb(a)
                        });
                        var xa = $("#resetBtn").click(function() {
                            var a = k.Ua({
                                    text: G.$(B.pp),
                                    Cf: K.R,
                                    width: 1250 * c.$b,
                                    va: i
                                }),
                                b = k.drawSmall({
                                    text: G.$(B.op),
                                    va: i,
                                    Im: c.f(550)
                                });
                            $("#resetText").empty().append($(a));
                            $("#resetHoldYes").empty().append($(b));
                            o.H(t.qa);
                            L.xn("resetGame")
                        });
                        $("#optionsBack").click(function() {
                            o.H(t.qa);
                            h.Fb(f.nc)
                        });
                        e.toggleLangUI(!b.disableLanguageOption);
                        g = function() {
                            P("#optionsTitle img", B.Rd);
                            ea(ma, s.sm());
                            na(qa, s.rm());
                            wa();
                            Eb(s.pm());
                            e.setResetText(xa, G.$(B.ou));
                            var a = s.Wi();
                            $("#lang").removeClass("lang-en lang-de lang-ru lang-fr").addClass("lang-" + I.fz(a))
                        };
                        z.subscribe(z.ia.lc, g);
                        z.subscribe(z.ia.Qp, g)
                    }
                }

                function Aa(a, b, c) {
                    if (a != aa) {
                        var c = c || 500,
                            a = $("#" + a),
                            d = a.find("img");
                        d.length === 0 && (d = $("<img/>").appendTo(a));
                        k.drawSmall({
                            text: b,
                            W: d[0],
                            va: i,
                            alpha: 0.6
                        });
                        a.stop(i, i).fadeIn(500).delay(c).fadeOut(750)
                    }
                }

                function ba(a, b) {
                    var c, d = o.Nh,
                        e =
                        o.Vf;
                    if (a) {
                        if (d && e) {
                            d = i;
                            e = p
                        } else if (!d && !e) e = d = i;
                        else e = d = p;
                        o.Gj(d);
                        o.Fj(e)
                    }
                    c = d && !e ? "effectsOnly" : !d && !e ? "noSound" : "allSound";
                    $("#optionSound").removeClass("effectsOnly noSound allSound").addClass(c);
                    $("#gameSound").removeClass("effectsOnly noSound allSound").addClass(c);
                    if (!e && !d) e = G.$(B.vo);
                    else {
                        c = d ? B.uu : B.tu;
                        e = G.$(e ? B.iu : B.hu).toLowerCase() + " & " + G.$(c).toLowerCase()
                    }
                    Aa(b, e)
                }

                function P(a, b) {
                    k.Ua({
                        text: G.$(b),
                        Nc: a,
                        va: i
                    })
                }
                var L = this;
                this.rt = c.He == 1024;
                this.le = this.$i = this.Dm = this.ih = this.Rf = p;
                var wa =
                    w.minFps || 30,
                    xa = n,
                    Ia = n;
                this.ux = function() {
                    var a = $("#boxCutter"),
                        b = h.Gi == f.Qd ? 400 : 0;
                    $("#levelScore").fadeOut();
                    $("#levelBack").fadeOut();
                    $("#levelOptions").fadeOut(b, function() {
                        if (L.$i) {
                            $("#levelResults").fadeOut(800);
                            setTimeout(function() {
                                u.Cn(d.V + 1, d.cc);
                                L.Xm(p, function() {
                                    L.wn()
                                })
                            }, 400)
                        } else {
                            a.css("top", c.f(281));
                            a.delay(200).fadeIn(200, function() {
                                function b() {
                                    var c = +new Date - f;
                                    v = m.Sg(c, g, e - g, h);
                                    a.css("top", v);
                                    if (c < h) window.requestAnimationFrame(b);
                                    else {
                                        L.$i = i;
                                        a.fadeOut(300, function() {
                                            u.Cn(d.V + 1, d.cc);
                                            L.Xm(i, function() {
                                                L.wn()
                                            })
                                        })
                                    }
                                }
                                var e = c.f(-255),
                                    f = +new Date,
                                    g = parseInt(a.css("top"), 10),
                                    h = 1E3;
                                window.requestAnimationFrame(b)
                            })
                        }
                    })
                };
                var ea = n,
                    qa = [],
                    na = new Image,
                    $a = new Image;
                this.Xm = function(a, b, c) {
                    function d() {
                        var c = j(+new Date - f, 0, 1, g);
                        if (c < 1) {
                            x(a, e ? 1 - c : c, h);
                            window.requestAnimationFrame(d)
                        } else {
                            x(a, e ? 0 : 1, h);
                            e ? $("#levelPanel").show() : $("#levelPanel").hide();
                            b != n && b()
                        }
                    }
                    var e = c != n ? c : p,
                        f = +new Date,
                        g = 750,
                        h = ea.getContext("2d"),
                        j = c ? m.Wq : m.Sg;
                    window.requestAnimationFrame(d)
                };
                this.lv = function(a) {
                    L.Xm(p, a, i)
                };
                this.am = function() {
                    L.mv();
                    setTimeout(function() {
                        L.Rf || $("#levelResults").delay(750).fadeIn(250);
                        L.lv(function() {
                            L.Rf ? L.Xs() : setTimeout(function() {
                                N()
                            }, 250)
                        })
                    }, 250)
                };
                this.Xs = function() {
                    var a = $("#tapeRoll"),
                        b = $("#levelTape");
                    $("#levelResults").fadeOut(400);
                    a.css("top", c.f(-14));
                    a.delay(400).fadeIn(200, function() {
                        function d() {
                            var c = +new Date - g,
                                o = m.Sg(c, k, e - k, l);
                            a.css("top", m.Sg(c, j, e - j, l));
                            b.css("height", o);
                            if (c < l) window.requestAnimationFrame(d);
                            else {
                                L.$i = p;
                                b.hide();
                                x(i);
                                a.fadeOut(400, function() {
                                    setTimeout(function() {
                                        if (L.ih) h.Fb(f.nc,
                                            p);
                                        else {
                                            x(i, 0);
                                            h.Fb(f.Qd, i)
                                        }
                                    }, 200)
                                })
                            }
                        }
                        var e = c.f(470);
                        c.f(553);
                        var g = +new Date,
                            j = parseInt(a.css("top"), 10),
                            k = c.f(63),
                            l = 1E3;
                        b.css("height", k);
                        b.show();
                        window.requestAnimationFrame(d)
                    });
                    if (L.ih) {
                        M.fadeOut(800, 400);
                        o.an(t.wi);
                        setTimeout(ca(), 500)
                    }
                };
                this.wn = function() {
                    $("#levelBackground").hide();
                    w.showBoxBackgrounds && $("#bg").show();
                    $("#gameBtnTray").fadeIn()
                };
                this.mv = function() {
                    x(p, 1);
                    O();
                    $("#levelBackground").show();
                    w.showBoxBackgrounds && $("#bg").hide();
                    $("#gameBtnTray").fadeOut()
                };
                this.xn = function(a) {
                    u.Yf();
                    $(".popupOuterFrame").hide();
                    $(".popupInnerFrame").hide();
                    $("#popupWindow").fadeIn(500, function() {
                        $("#" + a).show();
                        $(".popupOuterFrame").fadeIn(500)
                    })
                };
                this.Fi = function() {
                    $("#popupWindow").fadeOut(500, function() {
                        u.ag()
                    })
                };
                var mb = [],
                    nb = [],
                    Ja = 0,
                    ob = 0;
                this.Om = function(b) {
                    function e(a, b, c) {
                        var d = o + b,
                            f = a,
                            h = a > 10 ? a * 50 : 900;
                        h > 2E3 && (h = 2E3);
                        var h = h / 25,
                            j = Math.round(b / h),
                            l = a / h,
                            m = setInterval(function() {
                                o = o + j;
                                if (f <= 0) {
                                    f = 0;
                                    o = d;
                                    clearInterval(m);
                                    t.fadeOut(400);
                                    s.fadeOut(400, function() {
                                        c != n && c()
                                    })
                                }
                                k.drawSmall({
                                    text: g(f),
                                    W: s[0],
                                    va: i
                                });
                                k.hm({
                                    text: o,
                                    W: w[0],
                                    va: i
                                });
                                f = f - l
                            }, 25)
                    }

                    function f(a, b) {
                        var c = a,
                            d = Math.round(a / 36),
                            e = setInterval(function() {
                                c = c - d;
                                o = o + d;
                                if (c <= 0) {
                                    c = 0;
                                    o = a;
                                    clearInterval(e);
                                    t.fadeOut(400);
                                    s.fadeOut(400, function() {
                                        b != n && b()
                                    })
                                }
                                k.drawSmall({
                                    text: c,
                                    W: s[0],
                                    va: i
                                });
                                k.hm({
                                    text: o,
                                    W: w[0],
                                    va: i
                                })
                            }, 25)
                    }

                    function g(a) {
                        var b = Math.floor(a / 60),
                            a = Math.round(a % 60);
                        return b + ":" + (a < 10 ? "0" + a : a)
                    }
                    var h = b.lb,
                        j = b.Dj,
                        l = b.time,
                        m, o = 0,
                        q = h * 1E3;
                    Math.round((j - h * 1E3) / l);
                    switch (h) {
                        case 3:
                            $("#resultStar1").removeClass("starEmpty").addClass("star");
                            $("#resultStar2").removeClass("starEmpty").addClass("star");
                            $("#resultStar3").removeClass("starEmpty").addClass("star");
                            m = G.$(B.du);
                            break;
                        case 2:
                            $("#resultStar1").removeClass("starEmpty").addClass("star");
                            $("#resultStar2").removeClass("starEmpty").addClass("star");
                            $("#resultStar3").removeClass("star").addClass("starEmpty");
                            m = G.$(B.cu);
                            break;
                        case 1:
                            $("#resultStar1").removeClass("starEmpty").addClass("star");
                            $("#resultStar2").removeClass("star").addClass("starEmpty");
                            $("#resultStar3").removeClass("star").addClass("starEmpty");
                            m = G.$(B.bu);
                            break;
                        default:
                            $("#resultStar1").removeClass("star").addClass("starEmpty");
                            $("#resultStar2").removeClass("star").addClass("starEmpty");
                            $("#resultStar3").removeClass("star").addClass("starEmpty");
                            m = G.$(B.au)
                    }
                    k.Ua({
                        text: m,
                        Nc: "#resultStatus img",
                        va: i
                    });
                    var s = $("#resultTickerValue").hide(),
                        t = $("#resultTickerLabel").hide(),
                        u = $("#resultScore").empty().hide(),
                        w = $("<img>").appendTo(u),
                        x = $("#resultImproved").hide(),
                        z = $("#resultTickerMessage").hide();
                    k.drawSmall({
                        text: G.$(B.wu),
                        W: t[0],
                        va: i
                    });
                    k.drawSmall({
                        text: q,
                        W: s[0],
                        va: i
                    });
                    k.hm({
                        text: "",
                        W: w[0],
                        va: i
                    });
                    setTimeout(function() {
                        t.fadeIn(300);
                        s.fadeIn(300);
                        u.fadeIn(300, function() {
                            f(q, function() {
                                k.drawSmall({
                                    text: G.$(B.Hu),
                                    W: t[0],
                                    va: i
                                });
                                t.fadeIn(300);
                                k.drawSmall({
                                    text: g(Math.ceil(l)),
                                    W: s[0],
                                    va: i
                                });
                                s.fadeIn(300, function() {
                                    e(Math.ceil(l), j - o, function() {
                                        z.fadeIn(300);
                                        F != n && F > 0 && j > F && x.animate({
                                            scale: 2.5,
                                            opacity: 0
                                        }, 0, function() {
                                            x.css("display", "block");
                                            x.animate({
                                                scale: 1,
                                                opacity: 1
                                            }, 600, "easeInCubic")
                                        })
                                    })
                                })
                            })
                        })
                    }, 1E3);
                    m = d.V;
                    var D = d.cc,
                        F = a.cw(m, D - 1);
                    a.Gy(m, D - 1, j);
                    a.Jh(m, D - 1, h);
                    a.Sb(m) > D && a.Jh(m, D, 0);
                    a.ss(m);
                    L.Rf = p;
                    L.am();
                    if (m === 0 && D === 1) {
                        H.Lr && H.Lr(b.ar);
                        if (b.ar < wa) {
                            b = $("#slowComputer");
                            b.children("img").remove();
                            h = $(k.Ua({
                                text: G.$(B.Ap),
                                Cf: K.R,
                                width: 1200 * c.$b,
                                scale: 1.25 * c.Zc
                            }));
                            m = $(k.Ua({
                                text: G.$(B.zp),
                                width: 1200 * c.$b,
                                scale: 0.8 * c.Zc
                            }));
                            m.css("margin-left", c.f(30));
                            b.append(h).append(m);
                            k.Ua({
                                text: G.$(B.ap),
                                Nc: "#slowComputerBtn img",
                                scale: 0.8 * c.Zc
                            });
                            setTimeout(function() {
                                L.xn("slowComputer")
                            }, 3E3)
                        }
                    }
                };
                var Ka = i;
                this.nt = function() {
                    if ($(window).width() < c.f(1024) + 120 && Ka) {
                        $("#moreLink").fadeOut(function() {
                            Ka = p
                        });
                        $("#zenbox_tab").fadeOut()
                    } else if ($(window).width() > c.f(1024) + 120 && !Ka) {
                        $("#moreLink").fadeIn(function() {
                            Ka =
                                i
                        });
                        $("#zenbox_tab").fadeIn()
                    }
                };
                this.Sv = i;
                this.Ex = function() {
                    h.Gi === f.Ce && u.tw() && !L.le ? F() : o.yh()
                };
                this.Xx = function() {
                    h.Gi !== f.ei && L.Sv && o.nn()
                };
                this.init = function() {
                    h.Sm = Qa
                };
                this.Za = function() {
                    ea = document.getElementById("levelCanvas");
                    ea.width = c.f(1024);
                    ea.height = c.f(576);
                    j.Za();
                    g.Za();
                    d.Za();
                    h.Za();
                    M.Za();
                    for (var e = b.jt, f = b.Ci, k = 0, l = f.length; k < l; k++) a.Lw(k, f[k].rh.length, e[k]);
                    $(window).blur(L.Ex);
                    $(window).focus(L.Xx);
                    $(window).resize(function() {
                        L.nt()
                    })
                };
                this.Gg = function() {
                    for (var a = 0, c = b.Wl.length; a <
                        c; a++) {
                        var d = new Image;
                        d.src = e.uiImageBaseUrl + b.Wl[a];
                        qa[a] = d
                    }
                    na.src = e.uiImageBaseUrl + "leveltape_left.png";
                    $a.src = e.uiImageBaseUrl + "leveltape_right.png";
                    z.subscribe(z.ia.cp, this.Om);
                    g.Gg();
                    h.Gg(Za);
                    z.Ub(z.ia.lc);
                    w.fv != n && w.Fd != n ? this.bx(w.fv - 1, w.Fd - 1) : s.Hs && h.Fb(f.nc, i)
                };
                this.bx = function(a, b) {
                    h.Fb(f.Ce, i);
                    d.V = a;
                    d.cc = b + 1;
                    u.Cn(d.V + 1, d.cc);
                    this.wn()
                }
            }
        }(Na, X, pc, jb, Ac, Ua, vc, Cc, Ob, Va, Lb, hc, r, Wa, oa, Xa, fc, oc, wc, ib, ia, lc, lb, W, ua, Bc, xc, yc),
        Ec = function(b, c, e, a, d, f, h) {
            return {
                init: function() {
                    c.init();
                    a.init()
                },
                Za: function() {
                    h.wv && typeof document.body.onselectstart !=
                        "undefined" && (document.body.onselectstart = ha(p));
                    b(".ctrCursor").on("mousedown mouseup", function() {
                        b(this).toggleClass("ctrCursorActive")
                    });
                    b("body").addClass("ui-" + e.He);
                    d.Za("c");
                    d.element.width = e.qb;
                    d.element.height = e.cb;
                    b(d.element).width(e.qb).height(e.cb);
                    f.Za && f.Za();
                    c.Za();
                    a.Za()
                },
                qn: function() {
                    c.qn(function() {
                        a.Gg();
                        setTimeout(function() {
                            b(".hideBeforeLoad").fadeIn(500);
                            a.nt();
                            b("#gameFooterSocial").css("top", 0)
                        }, 500)
                    })
                }
            }
        }($, tc, X, Dc, sb, fc, Lb),
        Fc = function(b, c, e, a) {
            b("forceHTML5Audio", c.forceHtml5Audio);
            window.showFpsCounter = function() {
                a.br = i
            };
            b("initFB", e.mw);
            b("initTwitter", e.pw);
            return window.ZeptoLab
        }(function(b, c) {
            var e = window.ZeptoLab;
            e == n && (e = window.ZeptoLab = {});
            var a = e.ctr;
            a == n && (a = e.ctr = {});
            a[b] = c
        }, Xa, Bc, Lb);
    (function(b, c) {
        if (c.meetsRequirements()) {
            b.init();
            $(document).ready(function() {
                b.Za();
                b.qn()
            })
        }
    })(Ec, pc, Fc);


}