(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-37dc7160"], {
        "284d": function(t, n, e) {},
        "3c34": function(t, n, e) {
            "use strict";
            e.r(n);
            var r = function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "app-container documentation-container"
                    }, [e("div", {
                        domProps: {
                            innerHTML: t._s(t.text)
                        }
                    })])
                },
                u = [],
                o = e("b39f"),
                c = {
                    name: "Documentation",
                    components: {},
                    data: function() {
                        return {
                            text: ""
                        }
                    },
                    created: function() {
                        this.showInfo()
                    },
                    methods: {
                        showInfo: function() {
                            var t = this;
                            Object(o["p"])("hostname=" + location.hostname).then(function(n) {
                                t.text = n.obj.notice
                            }).catch(function(t) {
                                console.info(t)
                            })
                        }
                    }
                },
                a = c,
                i = (e("7d46"), e("2877")),
                d = Object(i["a"])(a, r, u, !1, null, "bd9cd9fc", null);
            n["default"] = d.exports
        },
        "7d46": function(t, n, e) {
            "use strict";
            var r = e("284d"),
                u = e.n(r);
            u.a
        },
        b39f: function(t, n, e) {
            "use strict";
            e.d(n, "o", function() {
                return u
            }), e.d(n, "p", function() {
                return o
            }), e.d(n, "m", function() {
                return c
            }), e.d(n, "l", function() {
                return a
            }), e.d(n, "r", function() {
                return i
            }), e.d(n, "a", function() {
                return d
            }), e.d(n, "x", function() {
                return s
            }), e.d(n, "y", function() {
                return f
            }), e.d(n, "h", function() {
                return l
            }), e.d(n, "g", function() {
                return m
            }), e.d(n, "k", function() {
                return p
            }), e.d(n, "s", function() {
                return h
            }), e.d(n, "f", function() {
                return b
            }), e.d(n, "j", function() {
                return g
            }), e.d(n, "i", function() {
                return O
            }), e.d(n, "v", function() {
                return j
            }), e.d(n, "q", function() {
                return A
            }), e.d(n, "t", function() {
                return w
            }), e.d(n, "u", function() {
                return L
            }), e.d(n, "e", function() {
                return y
            }), e.d(n, "d", function() {
                return v
            }), e.d(n, "w", function() {
                return x
            }), e.d(n, "c", function() {
                return C
            }), e.d(n, "b", function() {
                return P
            }), e.d(n, "n", function() {
                return V
            });
            var r = e("b775");

            function u(t) {
                return Object(r["a"])({
                    url: "/client/website/websiteInfo",
                    method: "post",
                    data: t
                })
            }

            function o(t) {
                return Object(r["a"])({
                    url: "/client/website/websiteNoticeInfo",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/client/getQueryUrl",
                    method: "post",
                    data: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "/client/getPlatFormList2",
                    method: "post",
                    data: t
                })
            }

            function i(t, n) {
                return t || (t = "/userCx"), Object(r["a"])({
                    url: t,
                    method: "post",
                    data: n
                })
            }

            function d(t, n) {
                return t || (t = "/add"), Object(r["a"])({
                    url: t,
                    method: "post",
                    data: n
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/userAdd",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/userBatchAdd",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/listofpageAgentV2",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/client/agentCourse/selectAllAgent",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/client/agentCourse/selectAllCourseName",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/reProgress",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/del",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function O(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/freezeAccount",
                    method: "post",
                    data: t
                })
            }

            function j(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/unFreezeAccount",
                    method: "post",
                    data: t
                })
            }

            function A(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/openPermission",
                    method: "post",
                    data: t
                })
            }

            function w(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/resetPwdV2",
                    method: "post",
                    data: t
                })
            }

            function L(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/saveChargeV2",
                    method: "post",
                    data: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/delAgent",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/createAgent",
                    method: "post",
                    data: t
                })
            }

            function x(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/updateAgent",
                    method: "post",
                    data: t
                })
            }

            function C(t) {
                return Object(r["a"])({
                    url: "/renewList/consume/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function P(t) {
                return Object(r["a"])({
                    url: "/account/changePwdV2",
                    method: "post",
                    data: t
                })
            }

            function V(t) {
                return Object(r["a"])({
                    url: "/account/getUser",
                    method: "post",
                    data: t
                })
            }
        }
    }
]);