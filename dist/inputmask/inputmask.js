/*!
 * dist/inputmask/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2018 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 5.0.0-beta.27
 */
(function webpackUniversalModuleDefinition(e, t) {
    if (typeof exports === "object" && typeof module === "object") module.exports = t(); else if (typeof define === "function" && define.amd) define([], t); else {
        var a = t();
        for (var i in a) (typeof exports === "object" ? exports : e)[i] = a[i];
    }
})(window, function() {
    return function(a) {
        var i = {};
        function __webpack_require__(e) {
            if (i[e]) {
                return i[e].exports;
            }
            var t = i[e] = {
                i: e,
                l: false,
                exports: {}
            };
            a[e].call(t.exports, t, t.exports, __webpack_require__);
            t.l = true;
            return t.exports;
        }
        __webpack_require__.m = a;
        __webpack_require__.c = i;
        __webpack_require__.d = function(e, t, a) {
            if (!__webpack_require__.o(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: true,
                    get: a
                });
            }
        };
        __webpack_require__.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            });
        };
        __webpack_require__.t = function(t, e) {
            if (e & 1) t = __webpack_require__(t);
            if (e & 8) return t;
            if (e & 4 && typeof t === "object" && t && t.__esModule) return t;
            var a = Object.create(null);
            __webpack_require__.r(a);
            Object.defineProperty(a, "default", {
                enumerable: true,
                value: t
            });
            if (e & 2 && typeof t != "string") for (var i in t) __webpack_require__.d(a, i, function(e) {
                return t[e];
            }.bind(null, i));
            return a;
        };
        __webpack_require__.n = function(e) {
            var t = e && e.__esModule ? function getDefault() {
                return e["default"];
            } : function getModuleExports() {
                return e;
            };
            __webpack_require__.d(t, "a", t);
            return t;
        };
        __webpack_require__.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
    }([ function(t, a, i) {
        "use strict";
        var n, r, s;
        var C = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        (function(e) {
            if (true) {
                !(r = [ i(1), i(2) ], n = e, s = typeof n === "function" ? n.apply(a, r) : n, s !== undefined && (t.exports = s));
            } else {}
        })(function(j, S, V) {
            var _ = S.document, e = navigator.userAgent, P = e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0, E = isInputEventSupported("touchstart"), x = /iemobile/i.test(e), T = /iphone/i.test(e) && !x;
            function Inputmask(e, t, a) {
                if (!(this instanceof Inputmask)) {
                    return new Inputmask(e, t, a);
                }
                this.el = V;
                this.events = {};
                this.maskset = V;
                this.refreshValue = false;
                if (a !== true) {
                    if (j.isPlainObject(e)) {
                        t = e;
                    } else {
                        t = t || {};
                        if (e) t.alias = e;
                    }
                    this.opts = j.extend(true, {}, this.defaults, t);
                    this.noMasksCache = t && t.definitions !== V;
                    this.userOptions = t || {};
                    this.isRTL = this.opts.numericInput;
                    resolveAlias(this.opts.alias, t, this.opts);
                }
            }
            Inputmask.prototype = {
                dataAttribute: "data-inputmask",
                defaults: {
                    placeholder: "_",
                    optionalmarker: [ "[", "]" ],
                    quantifiermarker: [ "{", "}" ],
                    groupmarker: [ "(", ")" ],
                    alternatormarker: "|",
                    escapeChar: "\\",
                    mask: null,
                    regex: null,
                    oncomplete: j.noop,
                    onincomplete: j.noop,
                    oncleared: j.noop,
                    repeat: 0,
                    greedy: false,
                    autoUnmask: false,
                    removeMaskOnSubmit: false,
                    clearMaskOnLostFocus: true,
                    insertMode: true,
                    clearIncomplete: false,
                    alias: null,
                    onKeyDown: j.noop,
                    onBeforeMask: null,
                    onBeforePaste: function onBeforePaste(e, t) {
                        return j.isFunction(t.onBeforeMask) ? t.onBeforeMask.call(this, e, t) : e;
                    },
                    onBeforeWrite: null,
                    onUnMask: null,
                    showMaskOnFocus: true,
                    showMaskOnHover: true,
                    onKeyValidation: j.noop,
                    skipOptionalPartCharacter: " ",
                    numericInput: false,
                    rightAlign: false,
                    undoOnEscape: true,
                    radixPoint: "",
                    _radixDance: false,
                    groupSeparator: "",
                    keepStatic: null,
                    positionCaretOnTab: true,
                    tabThrough: false,
                    supportsInputType: [ "text", "tel", "password", "search" ],
                    ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],
                    isComplete: null,
                    preValidation: null,
                    postValidation: null,
                    staticDefinitionSymbol: V,
                    jitMasking: false,
                    nullable: true,
                    inputEventOnly: false,
                    noValuePatching: false,
                    positionCaretOnClick: "lvp",
                    casing: null,
                    inputmode: "verbatim",
                    colorMask: false,
                    disablePredictiveText: false,
                    importDataAttributes: true,
                    shiftPositions: true
                },
                definitions: {
                    9: {
                        validator: "[0-9\uff11-\uff19]",
                        definitionSymbol: "*"
                    },
                    a: {
                        validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                        definitionSymbol: "*"
                    },
                    "*": {
                        validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                    }
                },
                aliases: {},
                masksCache: {},
                mask: function mask(e) {
                    var n = this;
                    function importAttributeOptions(a, e, i, n) {
                        if (e.importDataAttributes === true) {
                            var t = function importOption(e, t) {
                                t = t !== V ? t : a.getAttribute(n + "-" + e);
                                if (t !== null) {
                                    if (typeof t === "string") {
                                        if (e.indexOf("on") === 0) t = S[t]; else if (t === "false") t = false; else if (t === "true") t = true;
                                    }
                                    i[e] = t;
                                }
                            };
                            var r = a.getAttribute(n), s, o, l, u;
                            if (r && r !== "") {
                                r = r.replace(/'/g, '"');
                                o = JSON.parse("{" + r + "}");
                            }
                            if (o) {
                                l = V;
                                for (u in o) {
                                    if (u.toLowerCase() === "alias") {
                                        l = o[u];
                                        break;
                                    }
                                }
                            }
                            t("alias", l);
                            if (i.alias) {
                                resolveAlias(i.alias, i, e);
                            }
                            for (s in e) {
                                if (o) {
                                    l = V;
                                    for (u in o) {
                                        if (u.toLowerCase() === s.toLowerCase()) {
                                            l = o[u];
                                            break;
                                        }
                                    }
                                }
                                t(s, l);
                            }
                        }
                        j.extend(true, e, i);
                        if (a.dir === "rtl" || e.rightAlign) {
                            a.style.textAlign = "right";
                        }
                        if (a.dir === "rtl" || e.numericInput) {
                            a.dir = "ltr";
                            a.removeAttribute("dir");
                            e.isRTL = true;
                        }
                        return Object.keys(i).length;
                    }
                    if (typeof e === "string") {
                        e = _.getElementById(e) || _.querySelectorAll(e);
                    }
                    e = e.nodeName ? [ e ] : e;
                    j.each(e, function(e, t) {
                        var a = j.extend(true, {}, n.opts);
                        if (importAttributeOptions(t, a, j.extend(true, {}, n.userOptions), n.dataAttribute)) {
                            var i = generateMaskSet(a, n.noMasksCache);
                            if (i !== V) {
                                if (t.inputmask !== V) {
                                    t.inputmask.opts.autoUnmask = true;
                                    t.inputmask.remove();
                                }
                                t.inputmask = new Inputmask(V, V, true);
                                t.inputmask.opts = a;
                                t.inputmask.noMasksCache = n.noMasksCache;
                                t.inputmask.userOptions = j.extend(true, {}, n.userOptions);
                                t.inputmask.isRTL = a.isRTL || a.numericInput;
                                t.inputmask.el = t;
                                t.inputmask.maskset = i;
                                j.data(t, "_inputmask_opts", a);
                                maskScope.call(t.inputmask, {
                                    action: "mask"
                                });
                            }
                        }
                    });
                    return e && e[0] ? e[0].inputmask || this : this;
                },
                option: function option(e, t) {
                    if (typeof e === "string") {
                        return this.opts[e];
                    } else if ((typeof e === "undefined" ? "undefined" : C(e)) === "object") {
                        j.extend(this.userOptions, e);
                        if (this.el && t !== true) {
                            this.mask(this.el);
                        }
                        return this;
                    }
                },
                unmaskedvalue: function unmaskedvalue(e) {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "unmaskedvalue",
                        value: e
                    });
                },
                remove: function remove() {
                    return maskScope.call(this, {
                        action: "remove"
                    });
                },
                getemptymask: function getemptymask() {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "getemptymask"
                    });
                },
                hasMaskedValue: function hasMaskedValue() {
                    return !this.opts.autoUnmask;
                },
                isComplete: function isComplete() {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "isComplete"
                    });
                },
                getmetadata: function getmetadata() {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "getmetadata"
                    });
                },
                isValid: function isValid(e) {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "isValid",
                        value: e
                    });
                },
                format: function format(e, t) {
                    this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
                    return maskScope.call(this, {
                        action: "format",
                        value: e,
                        metadata: t
                    });
                },
                setValue: function setValue(e) {
                    if (this.el) {
                        j(this.el).trigger("setvalue", [ e ]);
                    }
                },
                analyseMask: function analyseMask(e, r, s) {
                    var t = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, a = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, o = false, i = new MaskToken(), n, l, u = [], f = [], c, p, k, d, m;
                    function MaskToken(e, t, a, i) {
                        this.matches = [];
                        this.openGroup = e || false;
                        this.alternatorGroup = false;
                        this.isGroup = e || false;
                        this.isOptional = t || false;
                        this.isQuantifier = a || false;
                        this.isAlternator = i || false;
                        this.quantifier = {
                            min: 1,
                            max: 1
                        };
                    }
                    function insertTestDefinition(a, e, i) {
                        i = i !== V ? i : a.matches.length;
                        var n = a.matches[i - 1];
                        if (r) {
                            if (e.indexOf("[") === 0 || o && /\\d|\\s|\\w]/i.test(e) || e === ".") {
                                a.matches.splice(i++, 0, {
                                    fn: new RegExp(e, s.casing ? "i" : ""),
                                    optionality: false,
                                    newBlockMarker: n === V ? "master" : n.def !== e,
                                    casing: null,
                                    def: e,
                                    placeholder: V,
                                    nativeDef: e
                                });
                            } else {
                                if (o) e = e[e.length - 1];
                                j.each(e.split(""), function(e, t) {
                                    n = a.matches[i - 1];
                                    a.matches.splice(i++, 0, {
                                        fn: null,
                                        optionality: false,
                                        newBlockMarker: n === V ? "master" : n.def !== t && n.fn !== null,
                                        casing: null,
                                        def: s.staticDefinitionSymbol || t,
                                        placeholder: s.staticDefinitionSymbol !== V ? t : V,
                                        nativeDef: (o ? "'" : "") + t
                                    });
                                });
                            }
                            o = false;
                        } else {
                            var t = (s.definitions ? s.definitions[e] : V) || Inputmask.prototype.definitions[e];
                            if (t && !o) {
                                a.matches.splice(i++, 0, {
                                    fn: t.validator ? typeof t.validator == "string" ? new RegExp(t.validator, s.casing ? "i" : "") : new function() {
                                        this.test = t.validator;
                                    }() : new RegExp("."),
                                    optionality: false,
                                    newBlockMarker: n === V ? "master" : n.def !== (t.definitionSymbol || e),
                                    casing: t.casing,
                                    def: t.definitionSymbol || e,
                                    placeholder: t.placeholder,
                                    nativeDef: e
                                });
                            } else {
                                a.matches.splice(i++, 0, {
                                    fn: null,
                                    optionality: false,
                                    newBlockMarker: n === V ? "master" : n.def !== e && n.fn !== null,
                                    casing: null,
                                    def: s.staticDefinitionSymbol || e,
                                    placeholder: s.staticDefinitionSymbol !== V ? e : V,
                                    nativeDef: (o ? "'" : "") + e
                                });
                                o = false;
                            }
                        }
                    }
                    function verifyGroupMarker(i) {
                        if (i && i.matches) {
                            j.each(i.matches, function(e, t) {
                                var a = i.matches[e + 1];
                                if ((a === V || a.matches === V || a.isQuantifier === false) && t && t.isGroup) {
                                    t.isGroup = false;
                                    if (!r) {
                                        insertTestDefinition(t, s.groupmarker[0], 0);
                                        if (t.openGroup !== true) {
                                            insertTestDefinition(t, s.groupmarker[1]);
                                        }
                                    }
                                }
                                verifyGroupMarker(t);
                            });
                        }
                    }
                    function defaultCase() {
                        if (u.length > 0) {
                            p = u[u.length - 1];
                            insertTestDefinition(p, l);
                            if (p.isAlternator) {
                                k = u.pop();
                                for (var e = 0; e < k.matches.length; e++) {
                                    if (k.matches[e].isGroup) k.matches[e].isGroup = false;
                                }
                                if (u.length > 0) {
                                    p = u[u.length - 1];
                                    p.matches.push(k);
                                } else {
                                    i.matches.push(k);
                                }
                            }
                        } else {
                            insertTestDefinition(i, l);
                        }
                    }
                    function reverseTokens(e) {
                        function reverseStatic(e) {
                            if (e === s.optionalmarker[0]) e = s.optionalmarker[1]; else if (e === s.optionalmarker[1]) e = s.optionalmarker[0]; else if (e === s.groupmarker[0]) e = s.groupmarker[1]; else if (e === s.groupmarker[1]) e = s.groupmarker[0];
                            return e;
                        }
                        e.matches = e.matches.reverse();
                        for (var t in e.matches) {
                            if (e.matches.hasOwnProperty(t)) {
                                var a = parseInt(t);
                                if (e.matches[t].isQuantifier && e.matches[a + 1] && e.matches[a + 1].isGroup) {
                                    var i = e.matches[t];
                                    e.matches.splice(t, 1);
                                    e.matches.splice(a + 1, 0, i);
                                }
                                if (e.matches[t].matches !== V) {
                                    e.matches[t] = reverseTokens(e.matches[t]);
                                } else {
                                    e.matches[t] = reverseStatic(e.matches[t]);
                                }
                            }
                        }
                        return e;
                    }
                    function groupify(e) {
                        var t = new MaskToken(true);
                        t.openGroup = false;
                        t.matches = e;
                        return t;
                    }
                    if (r) {
                        s.optionalmarker[0] = V;
                        s.optionalmarker[1] = V;
                    }
                    while (n = r ? a.exec(e) : t.exec(e)) {
                        l = n[0];
                        if (r) {
                            switch (l.charAt(0)) {
                              case "?":
                                l = "{0,1}";
                                break;

                              case "+":
                              case "*":
                                l = "{" + l + "}";
                                break;
                            }
                        }
                        if (o) {
                            defaultCase();
                            continue;
                        }
                        switch (l.charAt(0)) {
                          case "(?=":
                            break;

                          case "(?!":
                            break;

                          case "(?<=":
                            break;

                          case "(?<!":
                            break;

                          case s.escapeChar:
                            o = true;
                            if (r) {
                                defaultCase();
                            }
                            break;

                          case s.optionalmarker[1]:
                          case s.groupmarker[1]:
                            c = u.pop();
                            c.openGroup = false;
                            if (c !== V) {
                                if (u.length > 0) {
                                    p = u[u.length - 1];
                                    p.matches.push(c);
                                    if (p.isAlternator) {
                                        k = u.pop();
                                        for (var g = 0; g < k.matches.length; g++) {
                                            k.matches[g].isGroup = false;
                                            k.matches[g].alternatorGroup = false;
                                        }
                                        if (u.length > 0) {
                                            p = u[u.length - 1];
                                            p.matches.push(k);
                                        } else {
                                            i.matches.push(k);
                                        }
                                    }
                                } else {
                                    i.matches.push(c);
                                }
                            } else defaultCase();
                            break;

                          case s.optionalmarker[0]:
                            u.push(new MaskToken(false, true));
                            break;

                          case s.groupmarker[0]:
                            u.push(new MaskToken(true));
                            break;

                          case s.quantifiermarker[0]:
                            var h = new MaskToken(false, false, true);
                            l = l.replace(/[{}]/g, "");
                            var v = l.split("|"), b = v[0].split(","), y = isNaN(b[0]) ? b[0] : parseInt(b[0]), M = b.length === 1 ? y : isNaN(b[1]) ? b[1] : parseInt(b[1]);
                            if (y === "*" || y === "+") {
                                y = M === "*" ? 0 : 1;
                            }
                            h.quantifier = {
                                min: y,
                                max: M,
                                jit: v[1]
                            };
                            var S = u.length > 0 ? u[u.length - 1].matches : i.matches;
                            n = S.pop();
                            if (n.isAlternator) {
                                S.push(n);
                                S = n.matches;
                                var m = new MaskToken(true);
                                var _ = S.pop();
                                S.push(m);
                                S = m.matches;
                                n = _;
                            }
                            if (!n.isGroup) {
                                n = groupify([ n ]);
                            }
                            S.push(n);
                            S.push(h);
                            break;

                          case s.alternatormarker:
                            var P = function groupQuantifier(e) {
                                var t = e.pop();
                                if (t.isQuantifier) {
                                    t = groupify([ e.pop(), t ]);
                                }
                                return t;
                            };
                            if (u.length > 0) {
                                p = u[u.length - 1];
                                var E = p.matches[p.matches.length - 1];
                                if (p.openGroup && (E.matches === V || E.isGroup === false && E.isAlternator === false)) {
                                    d = u.pop();
                                } else {
                                    d = P(p.matches);
                                }
                            } else {
                                d = P(i.matches);
                            }
                            if (d.isAlternator) {
                                u.push(d);
                            } else {
                                if (d.alternatorGroup) {
                                    k = u.pop();
                                    d.alternatorGroup = false;
                                } else {
                                    k = new MaskToken(false, false, false, true);
                                }
                                k.matches.push(d);
                                u.push(k);
                                if (d.openGroup) {
                                    d.openGroup = false;
                                    var x = new MaskToken(true);
                                    x.alternatorGroup = true;
                                    u.push(x);
                                }
                            }
                            break;

                          default:
                            defaultCase();
                        }
                    }
                    while (u.length > 0) {
                        c = u.pop();
                        i.matches.push(c);
                    }
                    if (i.matches.length > 0) {
                        verifyGroupMarker(i);
                        f.push(i);
                    }
                    if (s.numericInput || s.isRTL) {
                        reverseTokens(f[0]);
                    }
                    return f;
                }
            };
            Inputmask.extendDefaults = function(e) {
                j.extend(true, Inputmask.prototype.defaults, e);
            };
            Inputmask.extendDefinitions = function(e) {
                j.extend(true, Inputmask.prototype.definitions, e);
            };
            Inputmask.extendAliases = function(e) {
                j.extend(true, Inputmask.prototype.aliases, e);
            };
            Inputmask.format = function(e, t, a) {
                return Inputmask(t).format(e, a);
            };
            Inputmask.unmask = function(e, t) {
                return Inputmask(t).unmaskedvalue(e);
            };
            Inputmask.isValid = function(e, t) {
                return Inputmask(t).isValid(e);
            };
            Inputmask.remove = function(e) {
                if (typeof e === "string") {
                    e = _.getElementById(e) || _.querySelectorAll(e);
                }
                e = e.nodeName ? [ e ] : e;
                j.each(e, function(e, t) {
                    if (t.inputmask) t.inputmask.remove();
                });
            };
            Inputmask.setValue = function(e, a) {
                if (typeof e === "string") {
                    e = _.getElementById(e) || _.querySelectorAll(e);
                }
                e = e.nodeName ? [ e ] : e;
                j.each(e, function(e, t) {
                    if (t.inputmask) t.inputmask.setValue(a); else j(t).trigger("setvalue", [ a ]);
                });
            };
            Inputmask.escapeRegex = function(e) {
                var t = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
                return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1");
            };
            Inputmask.keyCode = {
                BACKSPACE: 8,
                BACKSPACE_SAFARI: 127,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                X: 88,
                CONTROL: 17
            };
            Inputmask.dependencyLib = j;
            function resolveAlias(e, t, a) {
                var i = Inputmask.prototype.aliases[e];
                if (i) {
                    if (i.alias) resolveAlias(i.alias, V, a);
                    j.extend(true, a, i);
                    j.extend(true, a, t);
                    return true;
                } else if (a.mask === null) {
                    a.mask = e;
                }
                return false;
            }
            function generateMaskSet(a, o) {
                function generateMask(e, t, a) {
                    var i = false;
                    if (e === null || e === "") {
                        i = a.regex !== null;
                        if (i) {
                            e = a.regex;
                            e = e.replace(/^(\^)(.*)(\$)$/, "$2");
                        } else {
                            i = true;
                            e = ".*";
                        }
                    }
                    if (e.length === 1 && a.greedy === false && a.repeat !== 0) {
                        a.placeholder = "";
                    }
                    if (a.repeat > 0 || a.repeat === "*" || a.repeat === "+") {
                        var n = a.repeat === "*" ? 0 : a.repeat === "+" ? 1 : a.repeat;
                        e = a.groupmarker[0] + e + a.groupmarker[1] + a.quantifiermarker[0] + n + "," + a.repeat + a.quantifiermarker[1];
                    }
                    var r, s = i ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e;
                    if (Inputmask.prototype.masksCache[s] === V || o === true) {
                        r = {
                            mask: e,
                            maskToken: Inputmask.prototype.analyseMask(e, i, a),
                            validPositions: {},
                            _buffer: V,
                            buffer: V,
                            tests: {},
                            excludes: {},
                            metadata: t,
                            maskLength: V
                        };
                        if (o !== true) {
                            Inputmask.prototype.masksCache[s] = r;
                            r = j.extend(true, {}, Inputmask.prototype.masksCache[s]);
                        }
                    } else r = j.extend(true, {}, Inputmask.prototype.masksCache[s]);
                    return r;
                }
                var e;
                if (j.isFunction(a.mask)) {
                    a.mask = a.mask(a);
                }
                if (j.isArray(a.mask)) {
                    if (a.mask.length > 1) {
                        if (a.keepStatic === null) {
                            a.keepStatic = "auto";
                            for (var t = 0; t < a.mask.length; t++) {
                                if (a.mask[t].charAt(0) !== a.mask[0].charAt(0)) {
                                    a.keepStatic = true;
                                    break;
                                }
                            }
                        }
                        var i = a.groupmarker[0];
                        j.each(a.isRTL ? a.mask.reverse() : a.mask, function(e, t) {
                            if (i.length > 1) {
                                i += a.groupmarker[1] + a.alternatormarker + a.groupmarker[0];
                            }
                            if (t.mask !== V && !j.isFunction(t.mask)) {
                                i += t.mask;
                            } else {
                                i += t;
                            }
                        });
                        i += a.groupmarker[1];
                        return generateMask(i, a.mask, a);
                    } else a.mask = a.mask.pop();
                }
                if (a.mask && a.mask.mask !== V && !j.isFunction(a.mask.mask)) {
                    e = generateMask(a.mask.mask, a.mask, a);
                } else {
                    e = generateMask(a.mask, a.mask, a);
                }
                return e;
            }
            function isInputEventSupported(e) {
                var t = _.createElement("input"), a = "on" + e, i = a in t;
                if (!i) {
                    t.setAttribute(a, "return;");
                    i = typeof t[a] === "function";
                }
                t = null;
                return i;
            }
            function maskScope(e, t, I) {
                t = t || this.maskset;
                I = I || this.opts;
                var f = this, l = this.el, d = this.isRTL, m, n, s = false, u = false, g = false, h, i = false, p, r;
                function getMaskTemplate(e, t, a, i, n) {
                    var r = I.greedy;
                    if (n) I.greedy = false;
                    t = t || 0;
                    var s = [], o, l = 0, u, f, c = getLastValidPosition();
                    do {
                        if (e === true && getMaskSet().validPositions[l]) {
                            f = n && getMaskSet().validPositions[l].match.optionality === true && getMaskSet().validPositions[l + 1] === V && (getMaskSet().validPositions[l].generatedInput === true || getMaskSet().validPositions[l].input == I.skipOptionalPartCharacter && l > 0) ? determineTestTemplate(l, getTests(l, o, l - 1)) : getMaskSet().validPositions[l];
                            u = f.match;
                            o = f.locator.slice();
                            s.push(a === true ? f.input : a === false ? u.nativeDef : getPlaceholder(l, u));
                        } else {
                            f = getTestTemplate(l, o, l - 1);
                            u = f.match;
                            o = f.locator.slice();
                            var p = i === true ? false : I.jitMasking !== false ? I.jitMasking : u.jit;
                            if (p === false || p === V || typeof p === "number" && isFinite(p) && p > l) {
                                s.push(a === false ? u.nativeDef : getPlaceholder(l, u));
                            }
                        }
                        if (I.keepStatic === "auto") {
                            if (u.newBlockMarker && u.fn !== null) {
                                I.keepStatic = l - 1;
                            }
                        }
                        l++;
                    } while ((h === V || l < h) && (u.fn !== null || u.def !== "") || t > l);
                    if (s[s.length - 1] === "") {
                        s.pop();
                    }
                    if (a !== false || getMaskSet().maskLength === V) getMaskSet().maskLength = l - 1;
                    I.greedy = r;
                    return s;
                }
                function getMaskSet() {
                    return t;
                }
                function resetMaskSet(e) {
                    var t = getMaskSet();
                    t.buffer = V;
                    if (e !== true) {
                        t.validPositions = {};
                        t.p = 0;
                    }
                }
                function getLastValidPosition(e, t, a) {
                    var i = -1, n = -1, r = a || getMaskSet().validPositions;
                    if (e === V) e = -1;
                    for (var s in r) {
                        var o = parseInt(s);
                        if (r[o] && (t || r[o].generatedInput !== true)) {
                            if (o <= e) i = o;
                            if (o >= e) n = o;
                        }
                    }
                    return i === -1 || i == e ? n : n == -1 ? i : e - i < n - e ? i : n;
                }
                function getDecisionTaker(e) {
                    var t = e.locator[e.alternation];
                    if (typeof t == "string" && t.length > 0) {
                        t = t.split(",")[0];
                    }
                    return t !== V ? t.toString() : "";
                }
                function getLocator(e, t) {
                    var a = (e.alternation != V ? e.mloc[getDecisionTaker(e)] : e.locator).join("");
                    if (a !== "") while (a.length < t) {
                        a += "0";
                    }
                    return a;
                }
                function determineTestTemplate(e, t) {
                    e = e > 0 ? e - 1 : 0;
                    var a = getTest(e), i = getLocator(a), n, r, s;
                    for (var o = 0; o < t.length; o++) {
                        var l = t[o];
                        n = getLocator(l, i.length);
                        var u = Math.abs(n - i);
                        if (r === V || n !== "" && u < r || s && s.match.optionality && s.match.newBlockMarker === "master" && (!l.match.optionality || !l.match.newBlockMarker) || s && s.match.optionalQuantifier && !l.match.optionalQuantifier) {
                            r = u;
                            s = l;
                        }
                    }
                    return s;
                }
                function getTestTemplate(e, t, a) {
                    return getMaskSet().validPositions[e] || determineTestTemplate(e, getTests(e, t ? t.slice() : t, a));
                }
                function getTest(e, t) {
                    if (getMaskSet().validPositions[e]) {
                        return getMaskSet().validPositions[e];
                    }
                    return (t || getTests(e))[0];
                }
                function positionCanMatchDefinition(e, t) {
                    var a = false, i = getTests(e);
                    for (var n = 0; n < i.length; n++) {
                        if (i[n].match && i[n].match.def === t) {
                            a = true;
                            break;
                        }
                    }
                    return a;
                }
                function getTests(w, e, t) {
                    var a = getMaskSet().maskToken, B = e ? t : 0, i = e ? e.slice() : [ 0 ], A = [], O = false, D, L = e ? e.join("") : "";
                    function resolveTestFromToken(T, C, e, t) {
                        function handleMatch(e, t, a) {
                            function isFirstMatch(a, i) {
                                var n = j.inArray(a, i.matches) === 0;
                                if (!n) {
                                    j.each(i.matches, function(e, t) {
                                        if (t.isQuantifier === true) n = isFirstMatch(a, i.matches[e - 1]); else if (t.hasOwnProperty("matches")) n = isFirstMatch(a, t);
                                        if (n) return false;
                                    });
                                }
                                return n;
                            }
                            function resolveNdxInitializer(e, n, r) {
                                var s, o;
                                if (getMaskSet().tests[e] || getMaskSet().validPositions[e]) {
                                    j.each(getMaskSet().tests[e] || [ getMaskSet().validPositions[e] ], function(e, t) {
                                        if (t.mloc[n]) {
                                            s = t;
                                            return false;
                                        }
                                        var a = r !== V ? r : t.alternation, i = t.locator[a] !== V ? t.locator[a].toString().indexOf(n) : -1;
                                        if ((o === V || i < o) && i !== -1) {
                                            s = t;
                                            o = i;
                                        }
                                    });
                                }
                                if (s) {
                                    var t = s.locator[s.alternation];
                                    var a = s.mloc[n] || s.mloc[t] || s.locator;
                                    return a.slice((r !== V ? r : s.alternation) + 1);
                                } else {
                                    return r !== V ? resolveNdxInitializer(e, n) : V;
                                }
                            }
                            function isSubsetOf(e, t) {
                                function expand(e) {
                                    var t = [], a, i;
                                    for (var n = 0, r = e.length; n < r; n++) {
                                        if (e.charAt(n) === "-") {
                                            i = e.charCodeAt(n + 1);
                                            while (++a < i) {
                                                t.push(String.fromCharCode(a));
                                            }
                                        } else {
                                            a = e.charCodeAt(n);
                                            t.push(e.charAt(n));
                                        }
                                    }
                                    return t.join("");
                                }
                                if (I.regex && e.match.fn !== null && t.match.fn !== null) {
                                    return expand(t.match.def.replace(/[\[\]]/g, "")).indexOf(expand(e.match.def.replace(/[\[\]]/g, ""))) !== -1;
                                }
                                return e.match.def === t.match.nativeDef;
                            }
                            function staticCanMatchDefinition(e, t) {
                                var a = e.locator.slice(e.alternation).join(""), i = t.locator.slice(t.alternation).join(""), n = a == i;
                                n = n && e.match.fn === null && t.match.fn !== null ? t.match.fn.test(e.match.def, getMaskSet(), w, false, I, false) : false;
                                return n;
                            }
                            function setMergeLocators(e, t) {
                                if (t === V || e.alternation === t.alternation && e.locator[e.alternation].toString().indexOf(t.locator[t.alternation]) === -1) {
                                    e.mloc = e.mloc || {};
                                    var a = e.locator[e.alternation];
                                    if (a === V) e.alternation = V; else {
                                        if (typeof a === "string") a = a.split(",")[0];
                                        if (e.mloc[a] === V) e.mloc[a] = e.locator.slice();
                                        if (t !== V) {
                                            for (var i in t.mloc) {
                                                if (typeof i === "string") i = i.split(",")[0];
                                                if (e.mloc[i] === V) e.mloc[i] = t.mloc[i];
                                            }
                                            e.locator[e.alternation] = Object.keys(e.mloc).join(",");
                                        }
                                        return true;
                                    }
                                }
                                return false;
                            }
                            if (B > 500 && a !== V) {
                                throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
                            }
                            if (B === w && e.matches === V) {
                                A.push({
                                    match: e,
                                    locator: t.reverse(),
                                    cd: L,
                                    mloc: {}
                                });
                                return true;
                            } else if (e.matches !== V) {
                                if (e.isGroup && a !== e) {
                                    e = handleMatch(T.matches[j.inArray(e, T.matches) + 1], t, a);
                                    if (e) return true;
                                } else if (e.isOptional) {
                                    var i = e;
                                    e = resolveTestFromToken(e, C, t, a);
                                    if (e) {
                                        j.each(A, function(e, t) {
                                            t.match.optionality = true;
                                        });
                                        D = A[A.length - 1].match;
                                        if (a === V && isFirstMatch(D, i)) {
                                            O = true;
                                            B = w;
                                        } else return true;
                                    }
                                } else if (e.isAlternator) {
                                    var n = e, r = [], s, o = A.slice(), l = t.length;
                                    var u = C.length > 0 ? C.shift() : -1;
                                    if (u === -1 || typeof u === "string") {
                                        var f = B, c = C.slice(), p = [], k;
                                        if (typeof u == "string") {
                                            p = u.split(",");
                                        } else {
                                            for (k = 0; k < n.matches.length; k++) {
                                                p.push(k.toString());
                                            }
                                        }
                                        if (getMaskSet().excludes[w]) {
                                            var d = p.slice();
                                            for (var m = 0, g = getMaskSet().excludes[w].length; m < g; m++) {
                                                p.splice(p.indexOf(getMaskSet().excludes[w][m].toString()), 1);
                                            }
                                            if (p.length === 0) {
                                                getMaskSet().excludes[w] = V;
                                                p = d;
                                            }
                                        }
                                        if (I.keepStatic === true || isFinite(parseInt(I.keepStatic)) && f >= I.keepStatic) p = p.slice(0, 1);
                                        var h = false;
                                        for (var v = 0; v < p.length; v++) {
                                            k = parseInt(p[v]);
                                            A = [];
                                            C = typeof u === "string" ? resolveNdxInitializer(B, k, l) || c.slice() : c.slice();
                                            if (n.matches[k] && handleMatch(n.matches[k], [ k ].concat(t), a)) e = true; else if (v === 0) {
                                                h = true;
                                            }
                                            s = A.slice();
                                            B = f;
                                            A = [];
                                            for (var b = 0; b < s.length; b++) {
                                                var y = s[b], M = false;
                                                y.match.jit = y.match.jit || h;
                                                y.alternation = y.alternation || l;
                                                setMergeLocators(y);
                                                for (var S = 0; S < r.length; S++) {
                                                    var _ = r[S];
                                                    if (typeof u !== "string" || y.alternation !== V && j.inArray(y.locator[y.alternation].toString(), p) !== -1) {
                                                        if (y.match.nativeDef === _.match.nativeDef) {
                                                            M = true;
                                                            setMergeLocators(_, y);
                                                            break;
                                                        } else if (isSubsetOf(y, _)) {
                                                            if (setMergeLocators(y, _)) {
                                                                M = true;
                                                                r.splice(r.indexOf(_), 0, y);
                                                            }
                                                            break;
                                                        } else if (isSubsetOf(_, y)) {
                                                            setMergeLocators(_, y);
                                                            break;
                                                        } else if (staticCanMatchDefinition(y, _)) {
                                                            if (setMergeLocators(y, _)) {
                                                                M = true;
                                                                r.splice(r.indexOf(_), 0, y);
                                                            }
                                                            break;
                                                        }
                                                    }
                                                }
                                                if (!M) {
                                                    r.push(y);
                                                }
                                            }
                                        }
                                        A = o.concat(r);
                                        B = w;
                                        O = A.length > 0;
                                        e = r.length > 0;
                                        C = c.slice();
                                    } else e = handleMatch(n.matches[u] || T.matches[u], [ u ].concat(t), a);
                                    if (e) return true;
                                } else if (e.isQuantifier && a !== T.matches[j.inArray(e, T.matches) - 1]) {
                                    var P = e;
                                    for (var E = C.length > 0 ? C.shift() : 0; E < (isNaN(P.quantifier.max) ? E + 1 : P.quantifier.max) && B <= w; E++) {
                                        var x = T.matches[j.inArray(P, T.matches) - 1];
                                        e = handleMatch(x, [ E ].concat(t), x);
                                        if (e) {
                                            D = A[A.length - 1].match;
                                            D.optionalQuantifier = E > P.quantifier.min - 1;
                                            D.jit = (E || 1) * x.matches.indexOf(D) >= P.quantifier.jit;
                                            if (D.optionalQuantifier && isFirstMatch(D, x)) {
                                                O = true;
                                                B = w;
                                                break;
                                            }
                                            if (D.jit && !D.optionalQuantifier) {
                                                D.jitOffset = x.matches.indexOf(D);
                                            }
                                            return true;
                                        }
                                    }
                                } else {
                                    e = resolveTestFromToken(e, C, t, a);
                                    if (e) return true;
                                }
                            } else {
                                B++;
                            }
                        }
                        for (var a = C.length > 0 ? C.shift() : 0; a < T.matches.length; a++) {
                            if (T.matches[a].isQuantifier !== true) {
                                var i = handleMatch(T.matches[a], [ a ].concat(e), t);
                                if (i && B === w) {
                                    return i;
                                } else if (B > w) {
                                    break;
                                }
                            }
                        }
                    }
                    function mergeLocators(e, t) {
                        var i = [];
                        if (!j.isArray(t)) t = [ t ];
                        if (t.length > 0) {
                            if (t[0].alternation === V) {
                                i = determineTestTemplate(e, t.slice()).locator.slice();
                                if (i.length === 0) i = t[0].locator.slice();
                            } else {
                                j.each(t, function(e, t) {
                                    if (t.def !== "") {
                                        if (i.length === 0) i = t.locator.slice(); else {
                                            for (var a = 0; a < i.length; a++) {
                                                if (t.locator[a] && i[a].toString().indexOf(t.locator[a]) === -1) {
                                                    i[a] += "," + t.locator[a];
                                                }
                                            }
                                        }
                                    }
                                });
                            }
                        }
                        return i;
                    }
                    if (w > -1) {
                        if (e === V) {
                            var n = w - 1, r;
                            while ((r = getMaskSet().validPositions[n] || getMaskSet().tests[n]) === V && n > -1) {
                                n--;
                            }
                            if (r !== V && n > -1) {
                                i = mergeLocators(n, r);
                                L = i.join("");
                                B = n;
                            }
                        }
                        if (getMaskSet().tests[w] && getMaskSet().tests[w][0].cd === L) {
                            return getMaskSet().tests[w];
                        }
                        for (var s = i.shift(); s < a.length; s++) {
                            var o = resolveTestFromToken(a[s], i, [ s ]);
                            if (o && B === w || B > w) {
                                break;
                            }
                        }
                    }
                    if (A.length === 0 || O) {
                        A.push({
                            match: {
                                fn: null,
                                optionality: false,
                                casing: null,
                                def: "",
                                placeholder: ""
                            },
                            locator: [],
                            mloc: {},
                            cd: L
                        });
                    }
                    if (e !== V && getMaskSet().tests[w]) {
                        return j.extend(true, [], A);
                    }
                    getMaskSet().tests[w] = j.extend(true, [], A);
                    console.log(w + " - " + JSON.stringify(A));
                    return getMaskSet().tests[w];
                }
                function getBufferTemplate() {
                    if (getMaskSet()._buffer === V) {
                        getMaskSet()._buffer = getMaskTemplate(false, 1);
                        if (getMaskSet().buffer === V) getMaskSet().buffer = getMaskSet()._buffer.slice();
                    }
                    return getMaskSet()._buffer;
                }
                function getBuffer(e) {
                    if (getMaskSet().buffer === V || e === true) {
                        getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
                        if (getMaskSet()._buffer === V) getMaskSet()._buffer = getMaskSet().buffer.slice();
                    }
                    return getMaskSet().buffer;
                }
                function refreshFromBuffer(e, t, a) {
                    var i, n;
                    if (e === true) {
                        resetMaskSet();
                        e = 0;
                        t = a.length;
                    } else {
                        for (i = e; i < t; i++) {
                            delete getMaskSet().validPositions[i];
                        }
                    }
                    n = e;
                    for (i = e; i < t; i++) {
                        resetMaskSet(true);
                        if (a[i] !== I.skipOptionalPartCharacter) {
                            var r = isValid(n, a[i], true, true);
                            if (r !== false) {
                                resetMaskSet(true);
                                n = r.caret !== V ? r.caret : r.pos + 1;
                            }
                        }
                    }
                }
                function casing(e, t, a) {
                    switch (I.casing || t.casing) {
                      case "upper":
                        e = e.toUpperCase();
                        break;

                      case "lower":
                        e = e.toLowerCase();
                        break;

                      case "title":
                        var i = getMaskSet().validPositions[a - 1];
                        if (a === 0 || i && i.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
                            e = e.toUpperCase();
                        } else {
                            e = e.toLowerCase();
                        }
                        break;

                      default:
                        if (j.isFunction(I.casing)) {
                            var n = Array.prototype.slice.call(arguments);
                            n.push(getMaskSet().validPositions);
                            e = I.casing.apply(this, n);
                        }
                    }
                    return e;
                }
                function checkAlternationMatch(e, t, a) {
                    var i = I.greedy ? t : t.slice(0, 1), n = false, r = a !== V ? a.split(",") : [], s;
                    for (var o = 0; o < r.length; o++) {
                        if ((s = e.indexOf(r[o])) !== -1) {
                            e.splice(s, 1);
                        }
                    }
                    for (var l = 0; l < e.length; l++) {
                        if (j.inArray(e[l], i) !== -1) {
                            n = true;
                            break;
                        }
                    }
                    return n;
                }
                function alternate(e, t, a, i, n) {
                    var r = j.extend(true, {}, getMaskSet().validPositions), s, o, l = false, u, f, c, p, k, d = n !== V ? n : getLastValidPosition();
                    if (d === -1 && n === V) {
                        s = 0;
                        f = getTest(s);
                        o = f.alternation;
                    } else {
                        for (;d >= 0; d--) {
                            u = getMaskSet().validPositions[d];
                            if (u && u.alternation !== V) {
                                if (f && f.locator[u.alternation] !== u.locator[u.alternation]) {
                                    break;
                                }
                                s = d;
                                o = getMaskSet().validPositions[s].alternation;
                                f = u;
                            }
                        }
                    }
                    if (o !== V) {
                        k = parseInt(s);
                        getMaskSet().excludes[k] = getMaskSet().excludes[k] || [];
                        if (e !== true) {
                            getMaskSet().excludes[k].push(getDecisionTaker(f));
                        }
                        var m = [], g = 0;
                        for (c = k; c < getLastValidPosition(V, true) + 1; c++) {
                            p = getMaskSet().validPositions[c];
                            if (p && p.generatedInput !== true) {
                                m.push(p.input);
                            } else if (c < e) g++;
                            delete getMaskSet().validPositions[c];
                        }
                        while (getMaskSet().excludes[k] && getMaskSet().excludes[k].length < 10) {
                            var h = g * -1, v = m.slice();
                            getMaskSet().tests[k] = V;
                            resetMaskSet(true);
                            l = true;
                            while (v.length > 0) {
                                var b = v.shift();
                                if (!(l = isValid(getLastValidPosition(V, true) + 1, b, false, i, true))) {
                                    break;
                                }
                            }
                            if (l && t !== V) {
                                var y = getLastValidPosition(e) + 1;
                                for (c = k; c < getLastValidPosition() + 1; c++) {
                                    p = getMaskSet().validPositions[c];
                                    if ((p === V || p.match.fn == null) && c < e + h) {
                                        h++;
                                    }
                                }
                                e = e + h;
                                l = isValid(e > y ? y : e, t, a, i, true);
                            }
                            if (!l) {
                                resetMaskSet();
                                f = getTest(k);
                                getMaskSet().validPositions = j.extend(true, {}, r);
                                if (getMaskSet().excludes[k]) {
                                    var M = getDecisionTaker(f);
                                    if (getMaskSet().excludes[k].indexOf(M) !== -1) {
                                        l = alternate(e, t, a, i, k - 1);
                                        break;
                                    }
                                    getMaskSet().excludes[k].push(M);
                                    for (c = k; c < getLastValidPosition(V, true) + 1; c++) {
                                        delete getMaskSet().validPositions[c];
                                    }
                                } else {
                                    l = alternate(e, t, a, i, k - 1);
                                    break;
                                }
                            } else break;
                        }
                    }
                    getMaskSet().excludes[k] = V;
                    return l;
                }
                function isValid(u, e, t, f, a, i) {
                    function isSelection(e) {
                        return d ? e.begin - e.end > 1 || e.begin - e.end === 1 : e.end - e.begin > 1 || e.end - e.begin === 1;
                    }
                    t = t === true;
                    var n = u;
                    if (u.begin !== V) {
                        n = d ? u.end : u.begin;
                    }
                    function _isValid(r, s, o) {
                        var l = false;
                        j.each(getTests(r), function(e, t) {
                            var a = t.match;
                            getBuffer(true);
                            l = a.fn != null ? a.fn.test(s, getMaskSet(), r, o, I, isSelection(u)) : (s === a.def || s === I.skipOptionalPartCharacter) && a.def !== "" ? {
                                c: getPlaceholder(r, a, true) || a.def,
                                pos: r
                            } : false;
                            if (l !== false) {
                                var i = l.c !== V ? l.c : s, n = r;
                                i = i === I.skipOptionalPartCharacter && a.fn === null ? getPlaceholder(r, a, true) || a.def : i;
                                if (l.remove !== V) {
                                    if (!j.isArray(l.remove)) l.remove = [ l.remove ];
                                    j.each(l.remove.sort(function(e, t) {
                                        return t - e;
                                    }), function(e, t) {
                                        revalidateMask({
                                            begin: t,
                                            end: t + 1
                                        });
                                    });
                                }
                                if (l.insert !== V) {
                                    if (!j.isArray(l.insert)) l.insert = [ l.insert ];
                                    j.each(l.insert.sort(function(e, t) {
                                        return e - t;
                                    }), function(e, t) {
                                        isValid(t.pos, t.c, true, f);
                                    });
                                }
                                if (l !== true && l.pos !== V && l.pos !== r) {
                                    n = l.pos;
                                }
                                if (l !== true && l.pos === V && l.c === V) {
                                    return false;
                                }
                                if (!revalidateMask(u, j.extend({}, t, {
                                    input: casing(i, a, n)
                                }), f, n)) {
                                    l = false;
                                }
                                return false;
                            }
                        });
                        return l;
                    }
                    var r = true, s = j.extend(true, {}, getMaskSet().validPositions);
                    if (j.isFunction(I.preValidation) && !t && f !== true && i !== true) {
                        r = I.preValidation(getBuffer(), n, e, isSelection(u), I, getMaskSet());
                    }
                    if (r === true) {
                        trackbackPositions(V, n, true);
                        if (h === V || n < h) {
                            r = _isValid(n, e, t);
                            if ((!t || f === true) && r === false && i !== true) {
                                var o = getMaskSet().validPositions[n];
                                if (o && o.match.fn === null && (o.match.def === e || e === I.skipOptionalPartCharacter)) {
                                    r = {
                                        caret: seekNext(n)
                                    };
                                } else if ((I.insertMode || getMaskSet().validPositions[seekNext(n)] === V) && !isMask(n, true)) {
                                    for (var l = n + 1, c = seekNext(n); l <= c; l++) {
                                        r = _isValid(l, e, t);
                                        if (r !== false) {
                                            r = trackbackPositions(n, r.pos !== V ? r.pos : l) || r;
                                            n = l;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (r === false && I.keepStatic !== false && (I.regex == null || isComplete(getBuffer())) && !t && a !== true) {
                            r = alternate(n, e, t, f);
                        }
                        if (r === true) {
                            r = {
                                pos: n
                            };
                        }
                    }
                    if (j.isFunction(I.postValidation) && r !== false && !t && f !== true && i !== true) {
                        var p = I.postValidation(getBuffer(true), u.begin !== V ? d ? u.end : u.begin : u, r, I);
                        if (p !== V) {
                            if (p.refreshFromBuffer && p.buffer) {
                                var k = p.refreshFromBuffer;
                                refreshFromBuffer(k === true ? k : k.start, k.end, p.buffer);
                            }
                            r = p === true ? r : p;
                        }
                    }
                    if (r && r.pos === V) {
                        r.pos = n;
                    }
                    if (r === false || i === true) {
                        resetMaskSet(true);
                        getMaskSet().validPositions = j.extend(true, {}, s);
                    }
                    return r;
                }
                function trackbackPositions(e, t, a) {
                    var i;
                    if (e === V) {
                        for (e = t - 1; e > 0; e--) {
                            if (getMaskSet().validPositions[e]) break;
                        }
                    }
                    for (var n = e; n < t; n++) {
                        if (getMaskSet().validPositions[n] === V && !isMask(n, true)) {
                            var r = n == 0 ? getTest(n) : getMaskSet().validPositions[n - 1];
                            if (r) {
                                var s = getTests(n).slice();
                                if (s[s.length - 1].match.def === "") s.pop();
                                var o = determineTestTemplate(n, s);
                                o = j.extend({}, o, {
                                    input: getPlaceholder(n, o.match, true) || o.match.def
                                });
                                o.generatedInput = true;
                                revalidateMask(n, o, true);
                                if (a !== true) {
                                    var l = getMaskSet().validPositions[t].input;
                                    getMaskSet().validPositions[t] = V;
                                    i = isValid(t, l, true, true);
                                }
                            }
                        }
                    }
                    return i;
                }
                function revalidateMask(e, t, a, i) {
                    function IsEnclosedStatic(e, t, a) {
                        var i = t[e];
                        if (i !== V && (i.match.fn === null && i.match.optionality !== true || i.input === I.radixPoint)) {
                            var n = a.begin <= e - 1 ? t[e - 1] && t[e - 1].match.fn === null && t[e - 1] : t[e - 1], r = a.end > e + 1 ? t[e + 1] && t[e + 1].match.fn === null && t[e + 1] : t[e + 1];
                            return n && r;
                        }
                        return false;
                    }
                    var n = e.begin !== V ? e.begin : e, r = e.end !== V ? e.end : e;
                    if (e.begin > e.end) {
                        n = e.end;
                        r = e.begin;
                    }
                    i = i !== V ? i : n;
                    if (n !== r || I.insertMode && getMaskSet().validPositions[i] !== V && a === V) {
                        var s = j.extend(true, {}, getMaskSet().validPositions), o = getLastValidPosition(V, true), l;
                        getMaskSet().p = n;
                        for (l = o; l >= n; l--) {
                            if (getMaskSet().validPositions[l] && getMaskSet().validPositions[l].match.nativeDef === "+") {
                                I.isNegative = false;
                            }
                            delete getMaskSet().validPositions[l];
                        }
                        var u = true, f = i, c = getMaskSet().validPositions, p = false, k = f, l = f;
                        if (t) {
                            getMaskSet().validPositions[i] = j.extend(true, {}, t);
                            k++;
                            f++;
                            if (n < r) l++;
                        }
                        for (;l <= o; l++) {
                            var d = s[l];
                            if (d !== V && (l >= r || l >= n && d.generatedInput !== true && IsEnclosedStatic(l, s, {
                                begin: n,
                                end: r
                            }))) {
                                while (getTest(k).match.def !== "") {
                                    if (p === false && s[k] && s[k].match.nativeDef === d.match.nativeDef) {
                                        getMaskSet().validPositions[k] = j.extend(true, {}, s[k]);
                                        getMaskSet().validPositions[k].input = d.input;
                                        trackbackPositions(V, k, true);
                                        f = k + 1;
                                        u = true;
                                    } else if (I.shiftPositions && positionCanMatchDefinition(k, d.match.def)) {
                                        var m = isValid(k, d.input, true, true);
                                        u = m !== false;
                                        f = m.caret || m.insert ? getLastValidPosition() : k + 1;
                                        p = true;
                                    } else {
                                        u = d.generatedInput === true || d.input === I.radixPoint && I.numericInput === true;
                                    }
                                    if (u) break;
                                    if (!u && k > r && isMask(k, true) && (d.match.fn !== null || k > getMaskSet().maskLength)) {
                                        break;
                                    }
                                    k++;
                                }
                                if (getTest(k).match.def == "") u = false;
                                k = f;
                            }
                            if (!u) break;
                        }
                        if (!u) {
                            getMaskSet().validPositions = j.extend(true, {}, s);
                            resetMaskSet(true);
                            return false;
                        }
                    } else if (t) {
                        getMaskSet().validPositions[i] = j.extend(true, {}, t);
                    }
                    resetMaskSet(true);
                    return true;
                }
                function isMask(e, t) {
                    var a = getTestTemplate(e).match;
                    if (a.def === "") a = getTest(e).match;
                    if (a.fn != null) {
                        return a.fn;
                    }
                    if (t !== true && e > -1) {
                        var i = getTests(e);
                        return i.length > 1 + (i[i.length - 1].match.def === "" ? 1 : 0);
                    }
                    return false;
                }
                function seekNext(e, t) {
                    var a = e + 1;
                    while (getTest(a).match.def !== "" && (t === true && (getTest(a).match.newBlockMarker !== true || !isMask(a)) || t !== true && !isMask(a))) {
                        a++;
                    }
                    return a;
                }
                function seekPrevious(e, t) {
                    var a = e, i;
                    if (a <= 0) return 0;
                    while (--a > 0 && (t === true && getTest(a).match.newBlockMarker !== true || t !== true && !isMask(a) && (i = getTests(a), 
                    i.length < 2 || i.length === 2 && i[1].match.def === ""))) {}
                    return a;
                }
                function writeBuffer(e, t, a, i, n) {
                    if (i && j.isFunction(I.onBeforeWrite)) {
                        var r = I.onBeforeWrite.call(f, i, t, a, I);
                        if (r) {
                            if (r.refreshFromBuffer) {
                                var s = r.refreshFromBuffer;
                                refreshFromBuffer(s === true ? s : s.start, s.end, r.buffer || t);
                                t = getBuffer(true);
                            }
                            if (a !== V) a = r.caret !== V ? r.caret : a;
                        }
                    }
                    if (e !== V) {
                        e.inputmask._valueSet(t.join(""));
                        if (a !== V && (i === V || i.type !== "blur")) {
                            caret(e, a);
                        } else renderColorMask(e, a, t.length === 0);
                        if (n === true) {
                            var o = j(e), l = e.inputmask._valueGet();
                            u = true;
                            o.trigger("input");
                            setTimeout(function() {
                                if (l === getBufferTemplate().join("")) {
                                    o.trigger("cleared");
                                } else if (isComplete(t) === true) {
                                    o.trigger("complete");
                                }
                            }, 0);
                        }
                    }
                }
                function getPlaceholder(e, t, a) {
                    t = t || getTest(e).match;
                    if (t.placeholder !== V || a === true) {
                        return j.isFunction(t.placeholder) ? t.placeholder(I) : t.placeholder;
                    } else if (t.fn === null) {
                        if (e > -1 && getMaskSet().validPositions[e] === V) {
                            var i = getTests(e), n = [], r;
                            if (i.length > 1 + (i[i.length - 1].match.def === "" ? 1 : 0)) {
                                for (var s = 0; s < i.length; s++) {
                                    if (i[s].match.optionality !== true && i[s].match.optionalQuantifier !== true && (i[s].match.fn === null || r === V || i[s].match.fn.test(r.match.def, getMaskSet(), e, true, I) !== false)) {
                                        n.push(i[s]);
                                        if (i[s].match.fn === null) r = i[s];
                                        if (n.length > 1) {
                                            if (/[0-9a-bA-Z]/.test(n[0].match.def)) {
                                                return I.placeholder.charAt(e % I.placeholder.length);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return t.def;
                    }
                    return I.placeholder.charAt(e % I.placeholder.length);
                }
                function HandleNativePlaceholder(e, t) {
                    if (P && e.inputmask._valueGet() !== t) {
                        var a = getBuffer().slice(), i = e.inputmask._valueGet();
                        if (i !== t) {
                            if (getLastValidPosition() === -1 && i === getBufferTemplate().join("")) {
                                a = [];
                            } else {
                                clearOptionalTail(a);
                            }
                            writeBuffer(e, a);
                        }
                    } else if (e.placeholder !== t) {
                        e.placeholder = t;
                        if (e.placeholder === "") e.removeAttribute("placeholder");
                    }
                }
                var o = {
                    on: function on(e, t, r) {
                        var a = function ev(e) {
                            var t = this;
                            if (t.inputmask === V && this.nodeName !== "FORM") {
                                var a = j.data(t, "_inputmask_opts");
                                if (a) new Inputmask(a).mask(t); else o.off(t);
                            } else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (t.disabled || t.readOnly && !(e.type === "keydown" && e.ctrlKey && e.keyCode === 67 || I.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))) {
                                e.preventDefault();
                            } else {
                                switch (e.type) {
                                  case "input":
                                    if (u === true) {
                                        u = false;
                                        return e.preventDefault();
                                    }
                                    if (E) {
                                        var i = arguments;
                                        setTimeout(function() {
                                            r.apply(t, i);
                                            caret(t, t.inputmask.caretPos, V, true);
                                        }, 0);
                                        return false;
                                    }
                                    break;

                                  case "keydown":
                                    s = false;
                                    u = false;
                                    break;

                                  case "keypress":
                                    if (s === true) {
                                        return e.preventDefault();
                                    }
                                    s = true;
                                    break;

                                  case "click":
                                    if (x || T) {
                                        var i = arguments;
                                        setTimeout(function() {
                                            r.apply(t, i);
                                        }, 0);
                                        return false;
                                    }
                                    break;
                                }
                                var n = r.apply(t, arguments);
                                if (n === false) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                }
                                return n;
                            }
                        };
                        e.inputmask.events[t] = e.inputmask.events[t] || [];
                        e.inputmask.events[t].push(a);
                        if (j.inArray(t, [ "submit", "reset" ]) !== -1) {
                            if (e.form !== null) j(e.form).on(t, a);
                        } else {
                            j(e).on(t, a);
                        }
                    },
                    off: function off(i, e) {
                        if (i.inputmask && i.inputmask.events) {
                            var t;
                            if (e) {
                                t = [];
                                t[e] = i.inputmask.events[e];
                            } else {
                                t = i.inputmask.events;
                            }
                            j.each(t, function(e, t) {
                                while (t.length > 0) {
                                    var a = t.pop();
                                    if (j.inArray(e, [ "submit", "reset" ]) !== -1) {
                                        if (i.form !== null) j(i.form).off(e, a);
                                    } else {
                                        j(i).off(e, a);
                                    }
                                }
                                delete i.inputmask.events[e];
                            });
                        }
                    }
                };
                var v = {
                    keydownEvent: function keydownEvent(e) {
                        var t = this, a = j(t), i = e.keyCode, n = caret(t);
                        if (i === Inputmask.keyCode.BACKSPACE || i === Inputmask.keyCode.DELETE || T && i === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && i === Inputmask.keyCode.X && !isInputEventSupported("cut")) {
                            e.preventDefault();
                            handleRemove(t, i, n);
                            writeBuffer(t, getBuffer(true), getMaskSet().p, e, t.inputmask._valueGet() !== getBuffer().join(""));
                        } else if (i === Inputmask.keyCode.END || i === Inputmask.keyCode.PAGE_DOWN) {
                            e.preventDefault();
                            var r = seekNext(getLastValidPosition());
                            caret(t, e.shiftKey ? n.begin : r, r, true);
                        } else if (i === Inputmask.keyCode.HOME && !e.shiftKey || i === Inputmask.keyCode.PAGE_UP) {
                            e.preventDefault();
                            caret(t, 0, e.shiftKey ? n.begin : 0, true);
                        } else if ((I.undoOnEscape && i === Inputmask.keyCode.ESCAPE || i === 90 && e.ctrlKey) && e.altKey !== true) {
                            checkVal(t, true, false, m.split(""));
                            a.trigger("click");
                        } else if (i === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) {
                            I.insertMode = !I.insertMode;
                            t.setAttribute("im-insert", I.insertMode);
                        } else if (I.tabThrough === true && i === Inputmask.keyCode.TAB) {
                            if (e.shiftKey === true) {
                                if (getTest(n.begin).match.fn === null) {
                                    n.begin = seekNext(n.begin);
                                }
                                n.end = seekPrevious(n.begin, true);
                                n.begin = seekPrevious(n.end, true);
                            } else {
                                n.begin = seekNext(n.begin, true);
                                n.end = seekNext(n.begin, true);
                                if (n.end < getMaskSet().maskLength) n.end--;
                            }
                            if (n.begin < getMaskSet().maskLength) {
                                e.preventDefault();
                                caret(t, n.begin, n.end);
                            }
                        }
                        I.onKeyDown.call(this, e, getBuffer(), caret(t).begin, I);
                        g = j.inArray(i, I.ignorables) !== -1;
                    },
                    keypressEvent: function keypressEvent(e, t, a, i, n) {
                        var r = this, s = j(r), o = e.which || e.charCode || e.keyCode;
                        if (t !== true && !(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || g)) {
                            if (o === Inputmask.keyCode.ENTER && m !== getBuffer().join("")) {
                                m = getBuffer().join("");
                                setTimeout(function() {
                                    s.trigger("change");
                                }, 0);
                            }
                            return true;
                        } else {
                            if (o) {
                                if (o === 46 && e.shiftKey === false && I.radixPoint !== "") o = I.radixPoint.charCodeAt(0);
                                var l = t ? {
                                    begin: n,
                                    end: n
                                } : caret(r), u, f = String.fromCharCode(o), c = 0;
                                if (I._radixDance && I.numericInput) {
                                    var p = getBuffer().indexOf(I.radixPoint.charAt(0)) + 1;
                                    if (l.begin <= p) {
                                        if (o === I.radixPoint.charCodeAt(0)) c = 1;
                                        l.begin -= 1;
                                        l.end -= 1;
                                    }
                                }
                                getMaskSet().writeOutBuffer = true;
                                var k = isValid(l, f, i);
                                if (k !== false) {
                                    resetMaskSet(true);
                                    u = k.caret !== V ? k.caret : seekNext(k.pos.begin ? k.pos.begin : k.pos);
                                    getMaskSet().p = u;
                                }
                                u = (I.numericInput && k.caret === V ? seekPrevious(u) : u) + c;
                                if (a !== false) {
                                    setTimeout(function() {
                                        I.onKeyValidation.call(r, o, k, I);
                                    }, 0);
                                    if (getMaskSet().writeOutBuffer && k !== false) {
                                        var d = getBuffer();
                                        writeBuffer(r, d, u, e, t !== true);
                                    }
                                }
                                e.preventDefault();
                                if (t) {
                                    if (k !== false) k.forwardPosition = u;
                                    return k;
                                }
                            }
                        }
                    },
                    pasteEvent: function pasteEvent(e) {
                        var t = this, a = e.originalEvent || e, i = j(t), n = t.inputmask._valueGet(true), r = caret(t), s;
                        if (d) {
                            s = r.end;
                            r.end = r.begin;
                            r.begin = s;
                        }
                        var o = n.substr(0, r.begin), l = n.substr(r.end, n.length);
                        if (o === (d ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, r.begin).join("")) o = "";
                        if (l === (d ? getBufferTemplate().reverse() : getBufferTemplate()).slice(r.end).join("")) l = "";
                        if (S.clipboardData && S.clipboardData.getData) {
                            n = o + S.clipboardData.getData("Text") + l;
                        } else if (a.clipboardData && a.clipboardData.getData) {
                            n = o + a.clipboardData.getData("text/plain") + l;
                        } else return true;
                        var u = n;
                        if (j.isFunction(I.onBeforePaste)) {
                            u = I.onBeforePaste.call(f, n, I);
                            if (u === false) {
                                return e.preventDefault();
                            }
                            if (!u) {
                                u = n;
                            }
                        }
                        checkVal(t, false, false, u.toString().split(""));
                        writeBuffer(t, getBuffer(), seekNext(getLastValidPosition()), e, m !== getBuffer().join(""));
                        return e.preventDefault();
                    },
                    inputFallBackEvent: function inputFallBackEvent(e) {
                        function radixPointHandler(e, t, a) {
                            if (t.charAt(a.begin - 1) === "." && I.radixPoint !== "") {
                                t = t.split("");
                                t[a.begin - 1] = I.radixPoint.charAt(0);
                                t = t.join("");
                            }
                            return t;
                        }
                        function ieMobileHandler(e, t, a) {
                            if (x) {
                                var i = t.replace(getBuffer().join(""), "");
                                if (i.length === 1) {
                                    var n = t.split("");
                                    n.splice(a.begin, 0, i);
                                    t = n.join("");
                                }
                            }
                            return t;
                        }
                        var i = this, t = i.inputmask._valueGet();
                        if (getBuffer().join("") !== t) {
                            var a = caret(i);
                            t = radixPointHandler(i, t, a);
                            t = ieMobileHandler(i, t, a);
                            if (getBuffer().join("") !== t) {
                                var n = getBuffer().join(""), r = !I.numericInput && t.length > n.length ? -1 : 0, s = t.substr(0, a.begin), o = t.substr(a.begin), l = n.substr(0, a.begin + r), u = n.substr(a.begin + r);
                                var f = a, c = "", p = false;
                                if (s !== l) {
                                    var k = (p = s.length >= l.length) ? s.length : l.length, d;
                                    for (d = 0; s.charAt(d) === l.charAt(d) && d < k; d++) {}
                                    if (p) {
                                        f.begin = d - r;
                                        c += s.slice(d, f.end);
                                    }
                                }
                                if (o !== u) {
                                    if (o.length > u.length) {
                                        c += o.slice(0, 1);
                                    } else {
                                        if (o.length < u.length) {
                                            f.end += u.length - o.length;
                                            if (!p && I.radixPoint !== "" && o === "" && s.charAt(f.begin + r - 1) === I.radixPoint) {
                                                f.begin--;
                                                c = I.radixPoint;
                                            }
                                        }
                                    }
                                }
                                writeBuffer(i, getBuffer(), {
                                    begin: f.begin + r,
                                    end: f.end + r
                                });
                                if (c.length > 0) {
                                    j.each(c.split(""), function(e, t) {
                                        var a = new j.Event("keypress");
                                        a.which = t.charCodeAt(0);
                                        g = false;
                                        v.keypressEvent.call(i, a);
                                    });
                                } else {
                                    if (f.begin === f.end - 1) {
                                        f.begin = seekPrevious(f.begin + 1);
                                        if (f.begin === f.end - 1) {
                                            caret(i, f.begin);
                                        } else {
                                            caret(i, f.begin, f.end);
                                        }
                                    }
                                    var m = new j.Event("keydown");
                                    m.keyCode = I.numericInput ? Inputmask.keyCode.BACKSPACE : Inputmask.keyCode.DELETE;
                                    v.keydownEvent.call(i, m);
                                }
                                e.preventDefault();
                            }
                        }
                    },
                    beforeInputEvent: function beforeInputEvent(e) {
                        if (e.cancelable) {
                            var i = this;
                            switch (e.inputType) {
                              case "insertText":
                                j.each(e.data.split(""), function(e, t) {
                                    var a = new j.Event("keypress");
                                    a.which = t.charCodeAt(0);
                                    g = false;
                                    v.keypressEvent.call(i, a);
                                });
                                return e.preventDefault();

                              case "deleteContentBackward":
                                var t = new j.Event("keydown");
                                t.keyCode = Inputmask.keyCode.BACKSPACE;
                                v.keydownEvent.call(i, t);
                                return e.preventDefault();

                              case "deleteContentForward":
                                var t = new j.Event("keydown");
                                t.keyCode = Inputmask.keyCode.DELETE;
                                v.keydownEvent.call(i, t);
                                return e.preventDefault();
                            }
                        }
                    },
                    setValueEvent: function setValueEvent(e) {
                        this.inputmask.refreshValue = false;
                        var t = this, a = e && e.detail ? e.detail[0] : arguments[1], a = a || t.inputmask._valueGet(true);
                        if (j.isFunction(I.onBeforeMask)) a = I.onBeforeMask.call(f, a, I) || a;
                        a = a.split("");
                        checkVal(t, true, false, a);
                        m = getBuffer().join("");
                        if ((I.clearMaskOnLostFocus || I.clearIncomplete) && t.inputmask._valueGet() === getBufferTemplate().join("")) {
                            t.inputmask._valueSet("");
                        }
                    },
                    focusEvent: function focusEvent(e) {
                        var t = this, a = t.inputmask._valueGet();
                        if (I.showMaskOnFocus && (!I.showMaskOnHover || I.showMaskOnHover && a === "")) {
                            if (t.inputmask._valueGet() !== getBuffer().join("")) {
                                writeBuffer(t, getBuffer(), seekNext(getLastValidPosition()));
                            } else if (i === false) {
                                caret(t, seekNext(getLastValidPosition()));
                            }
                        }
                        if (I.positionCaretOnTab === true && i === false) {
                            v.clickEvent.apply(t, [ e, true ]);
                        }
                        m = getBuffer().join("");
                    },
                    mouseleaveEvent: function mouseleaveEvent(e) {
                        var t = this;
                        i = false;
                        if (I.clearMaskOnLostFocus && _.activeElement !== t) {
                            HandleNativePlaceholder(t, r);
                        }
                    },
                    clickEvent: function clickEvent(e, u) {
                        function doRadixFocus(e) {
                            if (I.radixPoint !== "") {
                                var t = getMaskSet().validPositions;
                                if (t[e] === V || t[e].input === getPlaceholder(e)) {
                                    if (e < seekNext(-1)) return true;
                                    var a = j.inArray(I.radixPoint, getBuffer());
                                    if (a !== -1) {
                                        for (var i in t) {
                                            if (a < i && t[i].input !== getPlaceholder(i)) {
                                                return false;
                                            }
                                        }
                                        return true;
                                    }
                                }
                            }
                            return false;
                        }
                        var f = this;
                        setTimeout(function() {
                            if (_.activeElement === f) {
                                var e = caret(f);
                                if (u) {
                                    if (d) {
                                        e.end = e.begin;
                                    } else {
                                        e.begin = e.end;
                                    }
                                }
                                if (e.begin === e.end) {
                                    switch (I.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        caret(f, 0, getBuffer().length);
                                        break;

                                      case "ignore":
                                        caret(f, seekNext(getLastValidPosition()));
                                        break;

                                      case "radixFocus":
                                        if (doRadixFocus(e.begin)) {
                                            var t = getBuffer().join("").indexOf(I.radixPoint);
                                            caret(f, I.numericInput ? seekNext(t) : t);
                                            break;
                                        }

                                      default:
                                        var a = e.begin, i = getLastValidPosition(a, true), n = seekNext(i);
                                        if (a < n) {
                                            caret(f, !isMask(a, true) && !isMask(a - 1, true) ? seekNext(a) : a);
                                        } else {
                                            var r = getMaskSet().validPositions[i], s = getTestTemplate(n, r ? r.match.locator : V, r), o = getPlaceholder(n, s.match);
                                            if (o !== "" && getBuffer()[n] !== o && s.match.optionalQuantifier !== true && s.match.newBlockMarker !== true || !isMask(n, I.keepStatic) && s.match.def === o) {
                                                var l = seekNext(n);
                                                if (a >= l || a === n) {
                                                    n = l;
                                                }
                                            }
                                            caret(f, n);
                                        }
                                        break;
                                    }
                                }
                            }
                        }, 0);
                    },
                    cutEvent: function cutEvent(e) {
                        var t = this, a = j(t), i = caret(t), n = e.originalEvent || e;
                        var r = S.clipboardData || n.clipboardData, s = d ? getBuffer().slice(i.end, i.begin) : getBuffer().slice(i.begin, i.end);
                        r.setData("text", d ? s.reverse().join("") : s.join(""));
                        if (_.execCommand) _.execCommand("copy");
                        handleRemove(t, Inputmask.keyCode.DELETE, i);
                        writeBuffer(t, getBuffer(), getMaskSet().p, e, m !== getBuffer().join(""));
                    },
                    blurEvent: function blurEvent(e) {
                        var t = j(this), a = this;
                        if (a.inputmask) {
                            HandleNativePlaceholder(a, r);
                            var i = a.inputmask._valueGet(), n = getBuffer().slice();
                            if (i !== "" || p !== V) {
                                if (I.clearMaskOnLostFocus) {
                                    if (getLastValidPosition() === -1 && i === getBufferTemplate().join("")) {
                                        n = [];
                                    } else {
                                        clearOptionalTail(n);
                                    }
                                }
                                if (isComplete(n) === false) {
                                    setTimeout(function() {
                                        t.trigger("incomplete");
                                    }, 0);
                                    if (I.clearIncomplete) {
                                        resetMaskSet();
                                        if (I.clearMaskOnLostFocus) {
                                            n = [];
                                        } else {
                                            n = getBufferTemplate().slice();
                                        }
                                    }
                                }
                                writeBuffer(a, n, V, e);
                            }
                            if (m !== getBuffer().join("")) {
                                m = n.join("");
                                t.trigger("change");
                            }
                        }
                    },
                    mouseenterEvent: function mouseenterEvent(e) {
                        var t = this;
                        i = true;
                        if (_.activeElement !== t && I.showMaskOnHover) {
                            HandleNativePlaceholder(t, (d ? getBuffer().slice().reverse() : getBuffer()).join(""));
                        }
                    },
                    submitEvent: function submitEvent(e) {
                        if (m !== getBuffer().join("")) {
                            n.trigger("change");
                        }
                        if (I.clearMaskOnLostFocus && getLastValidPosition() === -1 && l.inputmask._valueGet && l.inputmask._valueGet() === getBufferTemplate().join("")) {
                            l.inputmask._valueSet("");
                        }
                        if (I.clearIncomplete && isComplete(getBuffer()) === false) {
                            l.inputmask._valueSet("");
                        }
                        if (I.removeMaskOnSubmit) {
                            l.inputmask._valueSet(l.inputmask.unmaskedvalue(), true);
                            setTimeout(function() {
                                writeBuffer(l, getBuffer());
                            }, 0);
                        }
                    },
                    resetEvent: function resetEvent(e) {
                        l.inputmask.refreshValue = true;
                        setTimeout(function() {
                            n.trigger("setvalue");
                        }, 0);
                    }
                };
                function checkVal(n, e, r, t, a) {
                    var s = this || n.inputmask, o = t.slice(), l = "", u = -1, f = V;
                    function isTemplateMatch(e, t) {
                        var a = getMaskTemplate(true, 0, false).slice(e, seekNext(e)).join("").replace(/'/g, "").indexOf(t);
                        return a !== -1 && !isMask(e) && (getTest(e).match.nativeDef === t.charAt(0) || getTest(e).match.fn === null && getTest(e).match.nativeDef === "'" + t.charAt(0) || getTest(e).match.nativeDef === " " && (getTest(e + 1).match.nativeDef === t.charAt(0) || getTest(e + 1).match.fn === null && getTest(e + 1).match.nativeDef === "'" + t.charAt(0)));
                    }
                    resetMaskSet();
                    if (!r && I.autoUnmask !== true) {
                        var i = getBufferTemplate().slice(0, seekNext(-1)).join(""), c = o.join("").match(new RegExp("^" + Inputmask.escapeRegex(i), "g"));
                        if (c && c.length > 0) {
                            o.splice(0, c.length * i.length);
                            u = seekNext(u);
                        }
                    } else {
                        u = seekNext(u);
                    }
                    if (u === -1) {
                        getMaskSet().p = seekNext(u);
                        u = 0;
                    } else getMaskSet().p = u;
                    s.caretPos = {
                        begin: u
                    };
                    j.each(o, function(e, t) {
                        if (t !== V) {
                            if (getMaskSet().validPositions[e] === V && o[e] === getPlaceholder(e) && isMask(e, true) && isValid(e, o[e], true, V, V, true) === false) {
                                getMaskSet().p++;
                            } else {
                                var a = new j.Event("_checkval");
                                a.which = t.charCodeAt(0);
                                l += t;
                                var i = getLastValidPosition(V, true);
                                if (!isTemplateMatch(u, l)) {
                                    f = v.keypressEvent.call(n, a, true, false, r, s.caretPos.begin);
                                    if (f) {
                                        u = s.caretPos.begin + 1;
                                        l = "";
                                    }
                                } else {
                                    f = v.keypressEvent.call(n, a, true, false, r, i + 1);
                                }
                                if (f) {
                                    writeBuffer(V, getBuffer(), f.forwardPosition, a, false);
                                    s.caretPos = {
                                        begin: f.forwardPosition,
                                        end: f.forwardPosition
                                    };
                                }
                            }
                        }
                    });
                    if (e) writeBuffer(n, getBuffer(), f ? f.forwardPosition : V, a || new j.Event("checkval"), a && a.type === "input");
                }
                function unmaskedvalue(e) {
                    if (e) {
                        if (e.inputmask === V) {
                            return e.value;
                        }
                        if (e.inputmask && e.inputmask.refreshValue) {
                            v.setValueEvent.call(e);
                        }
                    }
                    var t = [], a = getMaskSet().validPositions;
                    for (var i in a) {
                        if (a[i].match && a[i].match.fn != null) {
                            t.push(a[i].input);
                        }
                    }
                    var n = t.length === 0 ? "" : (d ? t.reverse() : t).join("");
                    if (j.isFunction(I.onUnMask)) {
                        var r = (d ? getBuffer().slice().reverse() : getBuffer()).join("");
                        n = I.onUnMask.call(f, r, n, I);
                    }
                    return n;
                }
                function caret(e, t, a, i) {
                    function translatePosition(e) {
                        if (d && typeof e === "number" && (!I.greedy || I.placeholder !== "") && l) {
                            e = l.inputmask._valueGet().length - e;
                        }
                        return e;
                    }
                    var n;
                    if (t !== V) {
                        if (j.isArray(t)) {
                            a = d ? t[0] : t[1];
                            t = d ? t[1] : t[0];
                        }
                        if (t.begin !== V) {
                            a = d ? t.begin : t.end;
                            t = d ? t.end : t.begin;
                        }
                        if (typeof t === "number") {
                            t = i ? t : translatePosition(t);
                            a = i ? a : translatePosition(a);
                            a = typeof a == "number" ? a : t;
                            var r = parseInt(((e.ownerDocument.defaultView || S).getComputedStyle ? (e.ownerDocument.defaultView || S).getComputedStyle(e, null) : e.currentStyle).fontSize) * a;
                            e.scrollLeft = r > e.scrollWidth ? r : 0;
                            e.inputmask.caretPos = {
                                begin: t,
                                end: a
                            };
                            if (e === _.activeElement) {
                                if ("selectionStart" in e) {
                                    e.selectionStart = t;
                                    e.selectionEnd = a;
                                } else if (S.getSelection) {
                                    n = _.createRange();
                                    if (e.firstChild === V || e.firstChild === null) {
                                        var s = _.createTextNode("");
                                        e.appendChild(s);
                                    }
                                    n.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length);
                                    n.setEnd(e.firstChild, a < e.inputmask._valueGet().length ? a : e.inputmask._valueGet().length);
                                    n.collapse(true);
                                    var o = S.getSelection();
                                    o.removeAllRanges();
                                    o.addRange(n);
                                } else if (e.createTextRange) {
                                    n = e.createTextRange();
                                    n.collapse(true);
                                    n.moveEnd("character", a);
                                    n.moveStart("character", t);
                                    n.select();
                                }
                                renderColorMask(e, {
                                    begin: t,
                                    end: a
                                });
                            }
                        }
                    } else {
                        if ("selectionStart" in e) {
                            t = e.selectionStart;
                            a = e.selectionEnd;
                        } else if (S.getSelection) {
                            n = S.getSelection().getRangeAt(0);
                            if (n.commonAncestorContainer.parentNode === e || n.commonAncestorContainer === e) {
                                t = n.startOffset;
                                a = n.endOffset;
                            }
                        } else if (_.selection && _.selection.createRange) {
                            n = _.selection.createRange();
                            t = 0 - n.duplicate().moveStart("character", -e.inputmask._valueGet().length);
                            a = t + n.text.length;
                        }
                        return {
                            begin: i ? t : translatePosition(t),
                            end: i ? a : translatePosition(a)
                        };
                    }
                }
                function determineLastRequiredPosition(e) {
                    var t = getMaskTemplate(true, getLastValidPosition(), true, true), a = t.length, i, n = getLastValidPosition(), r = {}, s = getMaskSet().validPositions[n], o = s !== V ? s.locator.slice() : V, l;
                    for (i = n + 1; i < t.length; i++) {
                        l = getTestTemplate(i, o, i - 1);
                        o = l.locator.slice();
                        r[i] = j.extend(true, {}, l);
                    }
                    var u = s && s.alternation !== V ? s.locator[s.alternation] : V;
                    for (i = a - 1; i > n; i--) {
                        l = r[i];
                        if ((l.match.optionality || l.match.optionalQuantifier && l.match.newBlockMarker || u && (u !== r[i].locator[s.alternation] && l.match.fn != null || l.match.fn === null && l.locator[s.alternation] && checkAlternationMatch(l.locator[s.alternation].toString().split(","), u.toString().split(",")) && getTests(i)[0].def !== "")) && t[i] === getPlaceholder(i, l.match)) {
                            a--;
                        } else break;
                    }
                    return e ? {
                        l: a,
                        def: r[a] ? r[a].match : V
                    } : a;
                }
                function clearOptionalTail(e) {
                    e.length = 0;
                    var t = getMaskTemplate(true, 0, true, V, true), a, i;
                    while (a = t.shift(), a !== V) {
                        e.push(a);
                    }
                    return e;
                }
                function isComplete(e) {
                    if (j.isFunction(I.isComplete)) return I.isComplete(e, I);
                    if (I.repeat === "*") return V;
                    var t = false, a = determineLastRequiredPosition(true), i = seekPrevious(a.l);
                    if (a.def === V || a.def.newBlockMarker || a.def.optionality || a.def.optionalQuantifier) {
                        t = true;
                        for (var n = 0; n <= i; n++) {
                            var r = getTestTemplate(n).match;
                            if (r.fn !== null && getMaskSet().validPositions[n] === V && r.optionality !== true && r.optionalQuantifier !== true || r.fn === null && e[n] !== getPlaceholder(n, r)) {
                                t = false;
                                break;
                            }
                        }
                    }
                    return t;
                }
                function handleRemove(e, t, a, i, n) {
                    if (I.numericInput || d) {
                        if (t === Inputmask.keyCode.BACKSPACE) {
                            t = Inputmask.keyCode.DELETE;
                        } else if (t === Inputmask.keyCode.DELETE) {
                            t = Inputmask.keyCode.BACKSPACE;
                        }
                        if (d) {
                            var r = a.end;
                            a.end = a.begin;
                            a.begin = r;
                        }
                    }
                    if (t === Inputmask.keyCode.BACKSPACE && a.end - a.begin < 1) {
                        a.begin = seekPrevious(a.begin);
                        if (getMaskSet().validPositions[a.begin] !== V && getMaskSet().validPositions[a.begin].input === I.groupSeparator) {
                            a.begin--;
                        }
                    } else if (t === Inputmask.keyCode.DELETE && a.begin === a.end) {
                        a.end = isMask(a.end, true) && getMaskSet().validPositions[a.end] && getMaskSet().validPositions[a.end].input !== I.radixPoint ? a.end + 1 : seekNext(a.end) + 1;
                        if (getMaskSet().validPositions[a.begin] !== V && getMaskSet().validPositions[a.begin].input === I.groupSeparator) {
                            a.end++;
                        }
                    }
                    revalidateMask(a);
                    if (i !== true && I.keepStatic !== false || I.regex !== null) {
                        var s = alternate(true);
                        if (s) {
                            var o = s.caret !== V ? s.caret : s.pos ? seekNext(s.pos.begin ? s.pos.begin : s.pos) : getLastValidPosition(-1, true);
                            if (t !== Inputmask.keyCode.DELETE || a.begin > o) {
                                a.begin == o;
                            }
                        }
                    }
                    var l = getLastValidPosition(a.begin, true);
                    if (l < a.begin || a.begin === -1) {
                        getMaskSet().p = seekNext(l);
                    } else if (i !== true) {
                        getMaskSet().p = a.begin;
                        if (n !== true) {
                            while (getMaskSet().p < l && getMaskSet().validPositions[getMaskSet().p] === V) {
                                getMaskSet().p++;
                            }
                        }
                    }
                }
                function initializeColorMask(u) {
                    var f = (u.ownerDocument.defaultView || S).getComputedStyle(u, null);
                    function findCaretPos(e) {
                        var t = _.createElement("span"), a;
                        for (var i in f) {
                            if (isNaN(i) && i.indexOf("font") !== -1) {
                                t.style[i] = f[i];
                            }
                        }
                        t.style.textTransform = f.textTransform;
                        t.style.letterSpacing = f.letterSpacing;
                        t.style.position = "absolute";
                        t.style.height = "auto";
                        t.style.width = "auto";
                        t.style.visibility = "hidden";
                        t.style.whiteSpace = "nowrap";
                        _.body.appendChild(t);
                        var n = u.inputmask._valueGet(), r = 0, s;
                        for (a = 0, s = n.length; a <= s; a++) {
                            t.innerHTML += n.charAt(a) || "_";
                            if (t.offsetWidth >= e) {
                                var o = e - r;
                                var l = t.offsetWidth - e;
                                t.innerHTML = n.charAt(a);
                                o -= t.offsetWidth / 3;
                                a = o < l ? a - 1 : a;
                                break;
                            }
                            r = t.offsetWidth;
                        }
                        _.body.removeChild(t);
                        return a;
                    }
                    var e = _.createElement("div");
                    e.style.width = f.width;
                    e.style.textAlign = f.textAlign;
                    p = _.createElement("div");
                    u.inputmask.colorMask = p;
                    p.className = "im-colormask";
                    u.parentNode.insertBefore(p, u);
                    u.parentNode.removeChild(u);
                    p.appendChild(u);
                    p.appendChild(e);
                    u.style.left = e.offsetLeft + "px";
                    j(p).on("mouseleave", function(e) {
                        return v.mouseleaveEvent.call(u, [ e ]);
                    });
                    j(p).on("mouseenter", function(e) {
                        return v.mouseenterEvent.call(u, [ e ]);
                    });
                    j(p).on("click", function(e) {
                        caret(u, findCaretPos(e.clientX));
                        return v.clickEvent.call(u, [ e ]);
                    });
                }
                Inputmask.prototype.positionColorMask = function(e, t) {
                    e.style.left = t.offsetLeft + "px";
                };
                function renderColorMask(e, t, a) {
                    var i = [], n = false, r, s, o, l = 0;
                    function setEntry(e) {
                        if (e === V) e = "";
                        if (!n && (r.fn === null || s.input === V)) {
                            n = true;
                            i.push("<span class='im-static'>" + e);
                        } else if (n && (r.fn !== null && s.input !== V || r.def === "")) {
                            n = false;
                            var t = i.length;
                            i[t - 1] = i[t - 1] + "</span>";
                            i.push(e);
                        } else i.push(e);
                    }
                    function setCaret() {
                        if (_.activeElement === e) {
                            i.splice(t.begin, 0, t.begin === t.end || t.end > getMaskSet().maskLength ? '<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">' : '<mark class="im-caret-select">');
                            i.splice(t.end + 1, 0, "</mark>");
                        }
                    }
                    if (p !== V) {
                        var u = getBuffer();
                        if (t === V) {
                            t = caret(e);
                        } else if (t.begin === V) {
                            t = {
                                begin: t,
                                end: t
                            };
                        }
                        if (a !== true) {
                            var f = getLastValidPosition();
                            do {
                                if (getMaskSet().validPositions[l]) {
                                    s = getMaskSet().validPositions[l];
                                    r = s.match;
                                    o = s.locator.slice();
                                    setEntry(u[l]);
                                } else {
                                    s = getTestTemplate(l, o, l - 1);
                                    r = s.match;
                                    o = s.locator.slice();
                                    if (I.jitMasking === false || l < f || typeof I.jitMasking === "number" && isFinite(I.jitMasking) && I.jitMasking > l) {
                                        setEntry(getPlaceholder(l, r));
                                    } else n = false;
                                }
                                l++;
                            } while ((h === V || l < h) && (r.fn !== null || r.def !== "") || f > l || n);
                            if (n) setEntry();
                            setCaret();
                        }
                        var c = p.getElementsByTagName("div")[0];
                        c.innerHTML = i.join("");
                        e.inputmask.positionColorMask(e, c);
                    }
                }
                function mask(e) {
                    function isElementTypeSupported(e, r) {
                        function patchValueProperty(e) {
                            var t;
                            var a;
                            function patchValhook(e) {
                                if (j.valHooks && (j.valHooks[e] === V || j.valHooks[e].inputmaskpatch !== true)) {
                                    var a = j.valHooks[e] && j.valHooks[e].get ? j.valHooks[e].get : function(e) {
                                        return e.value;
                                    };
                                    var n = j.valHooks[e] && j.valHooks[e].set ? j.valHooks[e].set : function(e, t) {
                                        e.value = t;
                                        return e;
                                    };
                                    j.valHooks[e] = {
                                        get: function get(e) {
                                            if (e.inputmask) {
                                                if (e.inputmask.opts.autoUnmask) {
                                                    return e.inputmask.unmaskedvalue();
                                                } else {
                                                    var t = a(e);
                                                    return getLastValidPosition(V, V, e.inputmask.maskset.validPositions) !== -1 || r.nullable !== true ? t : "";
                                                }
                                            } else return a(e);
                                        },
                                        set: function set(e, t) {
                                            var a = j(e), i;
                                            i = n(e, t);
                                            if (e.inputmask) {
                                                a.trigger("setvalue", [ t ]);
                                            }
                                            return i;
                                        },
                                        inputmaskpatch: true
                                    };
                                }
                            }
                            function getter() {
                                if (this.inputmask) {
                                    return this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || r.nullable !== true ? _.activeElement === this && r.clearMaskOnLostFocus ? (d ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : t.call(this) : "";
                                } else return t.call(this);
                            }
                            function setter(e) {
                                a.call(this, e);
                                if (this.inputmask) {
                                    j(this).trigger("setvalue", [ e ]);
                                }
                            }
                            function installNativeValueSetFallback(e) {
                                o.on(e, "mouseenter", function(e) {
                                    var t = j(this), a = this, i = a.inputmask._valueGet();
                                    if (i !== getBuffer().join("")) {
                                        t.trigger("setvalue");
                                    }
                                });
                            }
                            if (!e.inputmask.__valueGet) {
                                if (r.noValuePatching !== true) {
                                    if (Object.getOwnPropertyDescriptor) {
                                        if (typeof Object.getPrototypeOf !== "function") {
                                            Object.getPrototypeOf = C("test".__proto__) === "object" ? function(e) {
                                                return e.__proto__;
                                            } : function(e) {
                                                return e.constructor.prototype;
                                            };
                                        }
                                        var i = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") : V;
                                        if (i && i.get && i.set) {
                                            t = i.get;
                                            a = i.set;
                                            Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: true
                                            });
                                        } else if (e.tagName !== "INPUT") {
                                            t = function valueGet() {
                                                return this.textContent;
                                            };
                                            a = function valueSet(e) {
                                                this.textContent = e;
                                            };
                                            Object.defineProperty(e, "value", {
                                                get: getter,
                                                set: setter,
                                                configurable: true
                                            });
                                        }
                                    } else if (_.__lookupGetter__ && e.__lookupGetter__("value")) {
                                        t = e.__lookupGetter__("value");
                                        a = e.__lookupSetter__("value");
                                        e.__defineGetter__("value", getter);
                                        e.__defineSetter__("value", setter);
                                    }
                                    e.inputmask.__valueGet = t;
                                    e.inputmask.__valueSet = a;
                                }
                                e.inputmask._valueGet = function(e) {
                                    return d && e !== true ? t.call(this.el).split("").reverse().join("") : t.call(this.el);
                                };
                                e.inputmask._valueSet = function(e, t) {
                                    a.call(this.el, e === null || e === V ? "" : t !== true && d ? e.split("").reverse().join("") : e);
                                };
                                if (t === V) {
                                    t = function valueGet() {
                                        return this.value;
                                    };
                                    a = function valueSet(e) {
                                        this.value = e;
                                    };
                                    patchValhook(e.type);
                                    installNativeValueSetFallback(e);
                                }
                            }
                        }
                        var t = e.getAttribute("type");
                        var a = e.tagName === "INPUT" && j.inArray(t, r.supportsInputType) !== -1 || e.isContentEditable || e.tagName === "TEXTAREA";
                        if (!a) {
                            if (e.tagName === "INPUT") {
                                var i = _.createElement("input");
                                i.setAttribute("type", t);
                                a = i.type === "text";
                                i = null;
                            } else a = "partial";
                        }
                        if (a !== false) {
                            patchValueProperty(e);
                        } else e.inputmask = V;
                        return a;
                    }
                    o.off(e);
                    var t = isElementTypeSupported(e, I);
                    if (t !== false) {
                        l = e;
                        n = j(l);
                        r = l.placeholder;
                        h = l !== V ? l.maxLength : V;
                        if (h === -1) h = V;
                        if (I.colorMask === true) {
                            initializeColorMask(l);
                        }
                        if (E) {
                            if ("inputmode" in l) {
                                l.inputmode = I.inputmode;
                                l.setAttribute("inputmode", I.inputmode);
                            }
                            if (I.disablePredictiveText === true) {
                                if ("autocorrect" in l) {
                                    l.autocorrect = false;
                                } else {
                                    if (I.colorMask !== true) {
                                        initializeColorMask(l);
                                    }
                                    l.type = "password";
                                }
                            }
                        }
                        if (t === true) {
                            l.setAttribute("im-insert", I.insertMode);
                            o.on(l, "submit", v.submitEvent);
                            o.on(l, "reset", v.resetEvent);
                            o.on(l, "blur", v.blurEvent);
                            o.on(l, "focus", v.focusEvent);
                            if (I.colorMask !== true) {
                                o.on(l, "click", v.clickEvent);
                                o.on(l, "mouseleave", v.mouseleaveEvent);
                                o.on(l, "mouseenter", v.mouseenterEvent);
                            }
                            o.on(l, "paste", v.pasteEvent);
                            o.on(l, "cut", v.cutEvent);
                            o.on(l, "complete", I.oncomplete);
                            o.on(l, "incomplete", I.onincomplete);
                            o.on(l, "cleared", I.oncleared);
                            if (!E && I.inputEventOnly !== true) {
                                o.on(l, "keydown", v.keydownEvent);
                                o.on(l, "keypress", v.keypressEvent);
                            } else {
                                l.removeAttribute("maxLength");
                            }
                            o.on(l, "input", v.inputFallBackEvent);
                            o.on(l, "beforeinput", v.beforeInputEvent);
                        }
                        o.on(l, "setvalue", v.setValueEvent);
                        m = getBufferTemplate().join("");
                        if (l.inputmask._valueGet(true) !== "" || I.clearMaskOnLostFocus === false || _.activeElement === l) {
                            var a = j.isFunction(I.onBeforeMask) ? I.onBeforeMask.call(f, l.inputmask._valueGet(true), I) || l.inputmask._valueGet(true) : l.inputmask._valueGet(true);
                            if (a !== "") checkVal(l, true, false, a.split(""));
                            var i = getBuffer().slice();
                            m = i.join("");
                            if (isComplete(i) === false) {
                                if (I.clearIncomplete) {
                                    resetMaskSet();
                                }
                            }
                            if (I.clearMaskOnLostFocus && _.activeElement !== l) {
                                if (getLastValidPosition() === -1) {
                                    i = [];
                                } else {
                                    clearOptionalTail(i);
                                }
                            }
                            if (I.clearMaskOnLostFocus === false || I.showMaskOnFocus && _.activeElement === l || l.inputmask._valueGet(true) !== "") writeBuffer(l, i);
                            if (_.activeElement === l) {
                                caret(l, seekNext(getLastValidPosition()));
                            }
                        }
                    }
                }
                var a;
                if (e !== V) {
                    switch (e.action) {
                      case "isComplete":
                        l = e.el;
                        return isComplete(getBuffer());

                      case "unmaskedvalue":
                        if (l === V || e.value !== V) {
                            a = e.value;
                            a = (j.isFunction(I.onBeforeMask) ? I.onBeforeMask.call(f, a, I) || a : a).split("");
                            checkVal.call(this, V, false, false, a);
                            if (j.isFunction(I.onBeforeWrite)) I.onBeforeWrite.call(f, V, getBuffer(), 0, I);
                        }
                        return unmaskedvalue(l);

                      case "mask":
                        mask(l);
                        break;

                      case "format":
                        a = (j.isFunction(I.onBeforeMask) ? I.onBeforeMask.call(f, e.value, I) || e.value : e.value).split("");
                        checkVal.call(this, V, true, false, a);
                        if (e.metadata) {
                            return {
                                value: d ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
                                metadata: maskScope.call(this, {
                                    action: "getmetadata"
                                }, t, I)
                            };
                        }
                        return d ? getBuffer().slice().reverse().join("") : getBuffer().join("");

                      case "isValid":
                        if (e.value) {
                            a = e.value.split("");
                            checkVal.call(this, V, true, true, a);
                        } else {
                            e.value = getBuffer().join("");
                        }
                        var c = getBuffer();
                        var k = determineLastRequiredPosition(), b = c.length - 1;
                        for (;b > k; b--) {
                            if (isMask(b)) break;
                        }
                        c.splice(k, b + 1 - k);
                        return isComplete(c) && e.value === getBuffer().join("");

                      case "getemptymask":
                        return getBufferTemplate().join("");

                      case "remove":
                        if (l && l.inputmask) {
                            j.data(l, "_inputmask_opts", null);
                            n = j(l);
                            l.inputmask._valueSet(I.autoUnmask ? unmaskedvalue(l) : l.inputmask._valueGet(true));
                            o.off(l);
                            if (l.inputmask.colorMask) {
                                p = l.inputmask.colorMask;
                                p.removeChild(l);
                                p.parentNode.insertBefore(l, p);
                                p.parentNode.removeChild(p);
                            }
                            var y;
                            if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
                                y = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(l), "value");
                                if (y) {
                                    if (l.inputmask.__valueGet) {
                                        Object.defineProperty(l, "value", {
                                            get: l.inputmask.__valueGet,
                                            set: l.inputmask.__valueSet,
                                            configurable: true
                                        });
                                    }
                                }
                            } else if (_.__lookupGetter__ && l.__lookupGetter__("value")) {
                                if (l.inputmask.__valueGet) {
                                    l.__defineGetter__("value", l.inputmask.__valueGet);
                                    l.__defineSetter__("value", l.inputmask.__valueSet);
                                }
                            }
                            l.inputmask = V;
                        }
                        return l;
                        break;

                      case "getmetadata":
                        if (j.isArray(t.metadata)) {
                            var M = getMaskTemplate(true, 0, false).join("");
                            j.each(t.metadata, function(e, t) {
                                if (t.mask === M) {
                                    M = t;
                                    return false;
                                }
                            });
                            return M;
                        }
                        return t.metadata;
                    }
                }
            }
            S.Inputmask = Inputmask;
            return Inputmask;
        });
    }, function(t, a, i) {
        "use strict";
        var n, r, s;
        var f = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        (function(e) {
            if (true) {
                !(r = [ i(2) ], n = e, s = typeof n === "function" ? n.apply(a, r) : n, s !== undefined && (t.exports = s));
            } else {}
        })(function(t) {
            var p = t.document;
            function indexOf(e, t) {
                var a = 0, i = e.length;
                for (;a < i; a++) {
                    if (e[a] === t) {
                        return a;
                    }
                }
                return -1;
            }
            function isWindow(e) {
                return e != null && e === e.window;
            }
            function isArraylike(e) {
                var t = "length" in e && e.length, a = typeof e === "undefined" ? "undefined" : f(e);
                if (a === "function" || isWindow(e)) {
                    return false;
                }
                if (e.nodeType === 1 && t) {
                    return true;
                }
                return a === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e;
            }
            function isValidElement(e) {
                return e instanceof Element;
            }
            function DependencyLib(e) {
                if (e instanceof DependencyLib) {
                    return e;
                }
                if (!(this instanceof DependencyLib)) {
                    return new DependencyLib(e);
                }
                if (e !== undefined && e !== null && e !== t) {
                    this[0] = e.nodeName ? e : e[0] !== undefined && e[0].nodeName ? e[0] : p.querySelector(e);
                    if (this[0] !== undefined && this[0] !== null) {
                        this[0].eventRegistry = this[0].eventRegistry || {};
                    }
                }
            }
            function getWindow(e) {
                return isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
            }
            DependencyLib.prototype = {
                on: function on(e, a) {
                    if (isValidElement(this[0])) {
                        var t = function addEvent(e, t) {
                            if (n.addEventListener) {
                                n.addEventListener(e, a, false);
                            } else if (n.attachEvent) {
                                n.attachEvent("on" + e, a);
                            }
                            i[e] = i[e] || {};
                            i[e][t] = i[e][t] || [];
                            i[e][t].push(a);
                        };
                        var i = this[0].eventRegistry, n = this[0];
                        var r = e.split(" ");
                        for (var s = 0; s < r.length; s++) {
                            var o = r[s].split("."), l = o[0], u = o[1] || "global";
                            t(l, u);
                        }
                    }
                    return this;
                },
                off: function off(e, o) {
                    if (isValidElement(this[0])) {
                        var t = function removeEvent(e, t, a) {
                            if (e in l === true) {
                                if (n.removeEventListener) {
                                    n.removeEventListener(e, a, false);
                                } else if (n.detachEvent) {
                                    n.detachEvent("on" + e, a);
                                }
                                if (t === "global") {
                                    for (var i in l[e]) {
                                        l[e][i].splice(l[e][i].indexOf(a), 1);
                                    }
                                } else {
                                    l[e][t].splice(l[e][t].indexOf(a), 1);
                                }
                            }
                        };
                        var a = function resolveNamespace(e, t) {
                            var a = [], i, n;
                            if (e.length > 0) {
                                if (o === undefined) {
                                    for (i = 0, n = l[e][t].length; i < n; i++) {
                                        a.push({
                                            ev: e,
                                            namespace: t && t.length > 0 ? t : "global",
                                            handler: l[e][t][i]
                                        });
                                    }
                                } else {
                                    a.push({
                                        ev: e,
                                        namespace: t && t.length > 0 ? t : "global",
                                        handler: o
                                    });
                                }
                            } else if (t.length > 0) {
                                for (var r in l) {
                                    for (var s in l[r]) {
                                        if (s === t) {
                                            if (o === undefined) {
                                                for (i = 0, n = l[r][s].length; i < n; i++) {
                                                    a.push({
                                                        ev: r,
                                                        namespace: s,
                                                        handler: l[r][s][i]
                                                    });
                                                }
                                            } else {
                                                a.push({
                                                    ev: r,
                                                    namespace: s,
                                                    handler: o
                                                });
                                            }
                                        }
                                    }
                                }
                            }
                            return a;
                        };
                        var l = this[0].eventRegistry, n = this[0];
                        var i = e.split(" ");
                        for (var r = 0; r < i.length; r++) {
                            var s = i[r].split("."), u = a(s[0], s[1]);
                            for (var f = 0, c = u.length; f < c; f++) {
                                t(u[f].ev, u[f].namespace, u[f].handler);
                            }
                        }
                    }
                    return this;
                },
                trigger: function trigger(e) {
                    if (isValidElement(this[0])) {
                        var t = this[0].eventRegistry, a = this[0];
                        var i = typeof e === "string" ? e.split(" ") : [ e.type ];
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n].split("."), s = r[0], o = r[1] || "global";
                            if (p !== undefined && o === "global") {
                                var l, u, f = {
                                    bubbles: true,
                                    cancelable: true,
                                    detail: arguments[1]
                                };
                                if (p.createEvent) {
                                    try {
                                        l = new CustomEvent(s, f);
                                    } catch (e) {
                                        l = p.createEvent("CustomEvent");
                                        l.initCustomEvent(s, f.bubbles, f.cancelable, f.detail);
                                    }
                                    if (e.type) DependencyLib.extend(l, e);
                                    a.dispatchEvent(l);
                                } else {
                                    l = p.createEventObject();
                                    l.eventType = s;
                                    l.detail = arguments[1];
                                    if (e.type) DependencyLib.extend(l, e);
                                    a.fireEvent("on" + l.eventType, l);
                                }
                            } else if (t[s] !== undefined) {
                                arguments[0] = arguments[0].type ? arguments[0] : DependencyLib.Event(arguments[0]);
                                if (o === "global") {
                                    for (var c in t[s]) {
                                        for (u = 0; u < t[s][c].length; u++) {
                                            t[s][c][u].apply(a, arguments);
                                        }
                                    }
                                } else {
                                    for (u = 0; u < t[s][o].length; u++) {
                                        t[s][o][u].apply(a, arguments);
                                    }
                                }
                            }
                        }
                    }
                    return this;
                }
            };
            DependencyLib.isFunction = function(e) {
                return typeof e === "function";
            };
            DependencyLib.noop = function() {};
            DependencyLib.isArray = Array.isArray;
            DependencyLib.inArray = function(e, t, a) {
                return t == null ? -1 : indexOf(t, e, a);
            };
            DependencyLib.valHooks = undefined;
            DependencyLib.isPlainObject = function(e) {
                if ((typeof e === "undefined" ? "undefined" : f(e)) !== "object" || e.nodeType || isWindow(e)) {
                    return false;
                }
                if (e.constructor && !Object.hasOwnProperty.call(e.constructor.prototype, "isPrototypeOf")) {
                    return false;
                }
                return true;
            };
            DependencyLib.extend = function() {
                var e, t, a, i, n, r, s = arguments[0] || {}, o = 1, l = arguments.length, u = false;
                if (typeof s === "boolean") {
                    u = s;
                    s = arguments[o] || {};
                    o++;
                }
                if ((typeof s === "undefined" ? "undefined" : f(s)) !== "object" && !DependencyLib.isFunction(s)) {
                    s = {};
                }
                if (o === l) {
                    s = this;
                    o--;
                }
                for (;o < l; o++) {
                    if ((e = arguments[o]) != null) {
                        for (t in e) {
                            a = s[t];
                            i = e[t];
                            if (s === i) {
                                continue;
                            }
                            if (u && i && (DependencyLib.isPlainObject(i) || (n = DependencyLib.isArray(i)))) {
                                if (n) {
                                    n = false;
                                    r = a && DependencyLib.isArray(a) ? a : [];
                                } else {
                                    r = a && DependencyLib.isPlainObject(a) ? a : {};
                                }
                                s[t] = DependencyLib.extend(u, r, i);
                            } else if (i !== undefined) {
                                s[t] = i;
                            }
                        }
                    }
                }
                return s;
            };
            DependencyLib.each = function(e, t) {
                var a, i = 0;
                if (isArraylike(e)) {
                    for (var n = e.length; i < n; i++) {
                        a = t.call(e[i], i, e[i]);
                        if (a === false) {
                            break;
                        }
                    }
                } else {
                    for (i in e) {
                        a = t.call(e[i], i, e[i]);
                        if (a === false) {
                            break;
                        }
                    }
                }
                return e;
            };
            DependencyLib.data = function(e, t, a) {
                if (a === undefined) {
                    return e.__data ? e.__data[t] : null;
                } else {
                    e.__data = e.__data || {};
                    e.__data[t] = a;
                }
            };
            if (typeof t.CustomEvent === "function") {
                DependencyLib.Event = t.CustomEvent;
            } else {
                DependencyLib.Event = function(e, t) {
                    t = t || {
                        bubbles: false,
                        cancelable: false,
                        detail: undefined
                    };
                    var a = p.createEvent("CustomEvent");
                    a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
                    return a;
                };
                DependencyLib.Event.prototype = t.Event.prototype;
            }
            return DependencyLib;
        });
    }, function(module, exports, __webpack_require__) {
        "use strict";
        var __WEBPACK_AMD_DEFINE_RESULT__;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e;
        } : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        };
        if (true) !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return typeof window !== "undefined" ? window : new (eval("require('jsdom').JSDOM"))("").window;
        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else {}
    } ]);
});