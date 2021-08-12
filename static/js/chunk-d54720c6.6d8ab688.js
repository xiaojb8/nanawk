(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-d54720c6"], {
        "2c16": function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "components-container"
                    }, [t.notice ? n("aside", {
                        staticStyle: {
                            color: "red"
                        }
                    }, [t._v("\n    " + t._s(t.msg) + "\n  ")]) : t._e(), t._v(" "), t.queryNotice ? n("aside", {
                        staticStyle: {
                            color: "red"
                        }
                    }, [t._v("\n    " + t._s(t.queryMsg) + "\n  ")]) : t._e(), t._v(" "), n("div", [n("el-form", {
                        staticClass: "demo-form-inline",
                        attrs: {
                            inline: !0
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "平台"
                        }
                    }, [t.mobile ? n("el-select", {
                        attrs: {
                            placeholder: "请选择平台",
                            size: "medium"
                        },
                        model: {
                            value: t.platformType,
                            callback: function(e) {
                                t.platformType = e
                            },
                            expression: "platformType"
                        }
                    }, t._l(t.options, function(t) {
                        return n("el-option", {
                            key: t.dictValue,
                            attrs: {
                                label: t.dictName,
                                value: t.dictValue
                            }
                        })
                    }), 1) : t._e(), t._v(" "), t.mobile ? t._e() : n("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.platformType,
                            expression: "platformType"
                        }],
                        staticClass: "form-control",
                        attrs: {
                            placeholder: "请选择平台"
                        },
                        on: {
                            change: function(e) {
                                var n = Array.prototype.filter.call(e.target.options, function(t) {
                                    return t.selected
                                }).map(function(t) {
                                    var e = "_value" in t ? t._value : t.value;
                                    return e
                                });
                                t.platformType = e.target.multiple ? n : n[0]
                            }
                        }
                    }, t._l(t.options, function(e) {
                        return n("option", {
                            key: e.dictValue,
                            attrs: {
                                label: e.dictName
                            },
                            domProps: {
                                value: e.dictValue
                            }
                        }, [t._v(t._s(e.dictName))])
                    }), 0)], 1)], 1)], 1), t._v(" "), n("div", [n("el-input", {
                        attrs: {
                            type: "textarea",
                            autosize: {
                                minRows: 8,
                                maxRows: 18
                            },
                            placeholder: "学校名称 学号 密码/手机号码 密码"
                        },
                        model: {
                            value: t.content,
                            callback: function(e) {
                                t.content = e
                            },
                            expression: "content"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "5px"
                        }
                    }, [n("el-checkbox", {
                        attrs: {
                            "true-label": 1,
                            "false-label": 0
                        },
                        model: {
                            value: t.miaoshua,
                            callback: function(e) {
                                t.miaoshua = e
                            },
                            expression: "miaoshua"
                        }
                    }, [t._v("秒刷")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.loadingQuery
                        },
                        on: {
                            click: t.addAll
                        }
                    }, [t._v("全部提交")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            loading: t.loadingQuery
                        },
                        on: {
                            click: t.queryAll
                        }
                    }, [t._v("查询")])], 1), t._v(" "), n("div", {
                        staticStyle: {
                            "margin-top": "10px"
                        }
                    }), t._v(" "), n("el-row", {
                        attrs: {
                            gutter: 10
                        }
                    }, t._l(t.users, function(e) {
                        return n("el-col", {
                            staticStyle: {
                                "margin-bottom": "5px"
                            },
                            attrs: {
                                xs: 24,
                                sm: 18,
                                md: 10,
                                lg: 8,
                                xl: 3
                            }
                        }, [n("el-card", {
                            staticClass: "box-card"
                        }, [n("div", {
                            staticClass: "clearfix",
                            attrs: {
                                slot: "header"
                            },
                            slot: "header"
                        }, [n("el-checkbox", {
                            key: e.account,
                            staticStyle: {
                                padding: "3px 0"
                            },
                            attrs: {
                                indeterminate: e.isIndeterminate,
                                label: e,
                                type: "text"
                            },
                            on: {
                                change: function(n) {
                                    return t.handleCheckAllChange(e)
                                }
                            },
                            model: {
                                value: e.selectAll,
                                callback: function(n) {
                                    t.$set(e, "selectAll", n)
                                },
                                expression: "user.selectAll"
                            }
                        }, [n("span", [t._v(t._s(e.schoolName) + " " + t._s(e.account) + " " + t._s(e.password))])])], 1), t._v(" "), n("el-checkbox-group", {
                            on: {
                                change: function(n) {
                                    return t.handleCheckedCourseChange(e)
                                }
                            },
                            model: {
                                value: e.checkedCourseList,
                                callback: function(n) {
                                    t.$set(e, "checkedCourseList", n)
                                },
                                expression: "user.checkedCourseList"
                            }
                        }, t._l(e.courseList, function(e) {
                            return n("div", {
                                staticClass: "text item"
                            }, [n("el-checkbox", {
                                key: e.serialId,
                                staticStyle: {
                                    padding: "3px 0"
                                },
                                attrs: {
                                    label: e,
                                    type: "text"
                                }
                            }, [t._v(t._s(null != e.categoryName ? e.categoryName + " " : "") + t._s(e.courseName))]), t._v(" "), t._v("\n              总" + t._s(e.chapterCount) + " 剩余" + t._s(e.unfinishedChapterCount) + " " + t._s(1 == e.examState ? "考试" + e.examScore : 2 == e.examState ? "无考试" : "") + "\n            ")], 1)
                        }), 0), t._v(" "), n("el-input", {
                            attrs: {
                                placeholder: "备注留言(50字内)"
                            },
                            model: {
                                value: e.remarks,
                                callback: function(n) {
                                    t.$set(e, "remarks", n)
                                },
                                expression: "user.remarks"
                            }
                        }), t._v(" "), 4 == e.statusCode ? n("p", {
                            staticClass: "u-text-center",
                            staticStyle: {
                                "text-align": "center"
                            }
                        }, [t._v(t._s(e.msg))]) : t._e(), t._v(" "), 2 == e.statusCode || 3 == e.statusCode ? n("p", {
                            staticClass: "u-text-center",
                            staticStyle: {
                                "text-align": "center",
                                color: "red"
                            }
                        }, [t._v(t._s(e.msg))]) : t._e(), t._v(" "), 1 == e.statusCode ? n("p", {
                            staticClass: "u-text-center",
                            staticStyle: {
                                "text-align": "center",
                                color: "green"
                            }
                        }, [t._v(t._s(e.msg) + "-")]) : t._e(), t._v(" "), 1 == e.addStatus ? n("span", {
                            staticStyle: {
                                position: "static",
                                top: "0.2rem",
                                right: "35rem",
                                "font-size": "0.8rem",
                                color: "green",
                                "font-weight": "bold"
                            }
                        }, [t._v("提交成功")]) : t._e(), t._v(" "), null != e.addError ? n("span", {
                            staticStyle: {
                                position: "static",
                                top: "0.2rem",
                                right: "35rem",
                                "font-size": "0.8rem",
                                color: "red",
                                "font-weight": "bold"
                            }
                        }, [t._v(t._s(e.addError))]) : t._e()], 1)], 1)
                    }), 1)], 1)])
                },
                o = [],
                s = (n("28a5"), n("f71e")),
                a = (n("8325"), n("ed08")),
                c = n("61f7"),
                u = n("b39f"),
                i = n("4328"),
                l = n.n(i),
                d = {
                    name: "Tinymce",
                    components: {},
                    data: function() {
                        return {
                            checkAll: !1,
                            isIndeterminate: !0,
                            loadingQuery: !1,
                            loadingUserAdd: !1,
                            options: [],
                            ifquery: !0,
                            queryComplete: !0,
                            users: [],
                            urlConfig: [],
                            miaoshua: 0,
                            queryUrl: null,
                            addUrl: null,
                            enableAdd: !1,
                            zhsAddUrl: null,
                            zhsEnableAdd: !1,
                            content: "",
                            notice: !1,
                            msg: "",
                            queryNotice: !1,
                            queryMsg: ""
                        }
                    },
                    watch: {
                        checkboxVal: function(t) {
                            this.formThead = this.formTheadOptions.filter(function(e) {
                                return t.indexOf(e) >= 0
                            }), this.key = this.key + 1
                        }
                    },
                    computed: {
                        platformType: {
                            get: function() {
                                return this.$store.getters.platformType
                            },
                            set: function(t) {
                                this.$store.dispatch("app/setPlatformType", t)
                            }
                        },
                        mobile: function() {
                            return "mobile" === this.$store.getters.device
                        }
                    },
                    created: function() {
                        this.fetchData(), this.getQueryUrl()
                    },
                    methods: {
                        handleCheckAllChange: function(t) {
                            t.checkedCourseList = t.selectAll ? t.courseList : [], t.isIndeterminate = !1
                        },
                        handleCheckedCourseChange: function(t) {
                            var e = t.checkedCourseList.length;
                            t.selectAll = e === t.courseList.length, t.isIndeterminate = e > 0 && e < t.courseList.length
                        },
                        handleCopy: function(t, e) {
                            var n = "";
                            n = t.schoolName ? t.schoolName + " " + t.account + " " + t.password : t.account + " " + t.password, Object(s["a"])(n, e)
                        },
                        getQueryUrl: function() {
                            var t = this;
                            Object(u["m"])("platformType=").then(function(e) {
                                t.queryUrl = e.obj.queryUrl, t.notice = e.obj.notice, t.msg = e.obj.msg, t.queryNotice = e.obj.queryNotice, t.queryMsg = e.obj.queryMsg, t.urlConfig = e.obj.urlConfig, t.addUrl = e.obj.addUrl, t.enableAdd = e.obj.enableAdd, t.zhsAddUrl = e.obj.zhsAddUrl, t.zhsEnableAdd = e.obj.zhsEnableAdd, e.obj.forceNotice && t.$alert(e.obj.forceMmsg, "提示", {
                                    confirmButtonText: "确定",
                                    callback: function(e) {
                                        t.$router.push({
                                            path: "/account",
                                            query: t.otherQuery
                                        })
                                    }
                                })
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        fetchData: function() {
                            var t = this;
                            Object(u["l"])().then(function(e) {
                                t.options = e.obj
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        queryAll: function() {
                            if (this.content) {
                                this.users = [];
                                for (var t = this.content.split("\n"), e = 0; e < t.length; e++) {
                                    var n = t[e],
                                        r = n.trim().split(/\s+/);
                                    if (r.length < 2 && 1 != r.length) return void this.$notify.error({
                                        title: "错误",
                                        message: "输入的内容第" + (e + 1) + "行有不支持的格式。"
                                    })
                                }
                                this.loadingQuery = !0;
                                for (e = 0; e < t.length; e++) {
                                    n = t[e], r = n.trim().split(/\s+/);
                                    if (1 != r.length) {
                                        var o = r[0],
                                            s = null,
                                            a = null,
                                            u = null;
                                        Object(c["b"])(o) ? (s = r[1], a = r[2], r.length >= 4 && (u = r[3])) : (o = null, s = r[0], a = r[1], r.length >= 3 && (u = r[2]));
                                        var i = {
                                            userId: null,
                                            schoolId: null,
                                            userName: null,
                                            schoolName: o,
                                            account: s,
                                            password: a,
                                            courseNames: u,
                                            status: !1,
                                            msg: "查询中...",
                                            courseList: []
                                        };
                                        i.platformType = this.platformType, i.statusCode = 4, i.addStatus = 0, i.selectAll = !0, i.checkedCourseList = [], i.isIndeterminate = !1, this.users.push(i), this.goQuery(i, e, t.length)
                                    } else this.queryResult(!1, e, t.length, null)
                                }
                                this.content = null
                            } else this.$notify.error({
                                title: "错误",
                                message: "输入内容不能为空哦"
                            })
                        },
                        goQuery: function(t, e, n) {
                            var r = this;
                            if (this.ifquery) {
                                var o = {
                                        schoolName: t.schoolName,
                                        fid: null,
                                        account: t.account,
                                        password: t.password,
                                        courseNames: t.courseNames,
                                        platformType: this.platformType
                                    },
                                    s = l.a.stringify(o),
                                    c = null,
                                    i = this.getUrlConfig(this.platformType);
                                i && i.enableQuery && (c = i.queryUrl), Object(u["r"])(c, s).then(function(o) {
                                    if (r.queryResult(!1, e, n, o), o.success) {
                                        t.status = o.obj.status, t.statusCode = o.obj.statusCode, t.msg = o.obj.msg, t.schoolId = o.obj.schoolId, t.userId = o.obj.userId, t.userName = o.obj.userName, t.phone = o.obj.phone, t.courseList = o.obj.courseList;
                                        for (var s = new Array, a = 0; a < t.courseList.length; a++) s[a] = t.courseList[a];
                                        t.checkedCourseList = s, t.selectAll = !0, t.status || (t.selectAll = !1)
                                    } else t.selectAll = !0, t.status = !1, t.statusCode = 3, t.msg = o.msg
                                }).catch(function(o) {
                                    console.log(o), r.queryResult(!0, e, n, null), t.statusCode = 3, t.msg = "服务器异常"
                                })
                            } else {
                                if (this.queryResult(!1, e, n, s), t.selectAll = !0, t.status = !1, t.statusCode = 3, t.msg = "", t.courseList = [], t.courseNames)
                                    for (var d = t.courseNames.split(","), f = 0; f < d.length; f++) {
                                        var h = {};
                                        h.courseName = d[f], h.courseId = "", h.classId = "", h.serialId = Object(a["c"])(), t.courseList[f] = h
                                    }
                                var m = new Array;
                                for (f = 0; f < t.courseList.length; f++) m[f] = t.courseList[f];
                                t.checkedCourseList = m
                            }
                        },
                        queryResult: function(t, e, n, r) {
                            e + 1 >= n && (this.queryComplete = !0, this.loadingQuery = !1)
                        },
                        addAll: function() {
                            for (var t = [], e = 0; e < this.users.length; e++) {
                                var n = this.users[e];
                                (n.selectAll || n.isIndeterminate) && 0 == n.addStatus && t.push(n)
                            }
                            t.length > 0 && (this.loadingQuery = !0);
                            for (e = 0; e < t.length; e++) {
                                n = t[e];
                                this.addAllTemp(e, n, t.length)
                            }
                            0 == t.length && this.content && this.batchAdd()
                        },
                        addAllTemp: function(t, e, n) {
                            var r = this;
                            this.add(e, function() {
                                t + 1 >= n && (r.loadingQuery = !1)
                            })
                        },
                        add: function(t, e) {
                            var n = this;
                            t.submiting = !0;
                            var r = "user=" + window.encodeURIComponent(window.JSON.stringify(t)) + "&platformType=" + this.platformType + "&miaoshua=" + this.miaoshua;
                            Object(u["x"])(r).then(function(r) {
                                r.success ? (t.addError = null, t.addStatus = 1, n.orderAdd(t)) : t.addError = r.msg, t.submiting = !1, e && e()
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        orderAdd: function(t) {
                            t.schoolName || (t.schoolName = "");
                            var e = this.getUrlConfig(this.platformType);
                            if (e && e.enableAdd) {
                                for (var n = "", r = 0; r < t.checkedCourseList.length; r++) {
                                    var o = t.checkedCourseList[r],
                                        s = o.courseName.split(/\s+/)[0];
                                    n += s, r < t.checkedCourseList.length - 1 && (n += ",")
                                }
                                Object(u["a"])(e.addUrl, "schoolName=" + t.schoolName + "&account=" + t.account + "&password=" + t.password + "&whitchone=" + n + "&miaoshua=" + this.miaoshua).then(function(t) {
                                    console.log(t)
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }
                        },
                        batchAdd: function() {
                            var t = this;
                            if (this.content) {
                                for (var e = [], n = this.content.split("\n"), r = 0; r < n.length; r++) {
                                    var o = n[r],
                                        s = o.trim().split(/\s+/);
                                    if (s.length < 2 && 1 != s.length) return void this.$notify.error({
                                        title: "错误",
                                        message: "输入的内容第" + (r + 1) + "行有不支持的格式。"
                                    })
                                }
                                this.loadingQuery = !0;
                                for (r = 0; r < n.length; r++) {
                                    o = n[r], s = o.trim().split(/\s+/);
                                    if (1 != s.length) {
                                        var a = s[0],
                                            i = null,
                                            l = null,
                                            d = null;
                                        Object(c["b"])(a) ? (i = s[1], l = s[2], s.length >= 4 && (d = s[3])) : (a = null, i = s[0], l = s[1], s.length >= 3 && (d = s[2]));
                                        var f = {
                                            userId: null,
                                            schoolId: null,
                                            userName: null,
                                            schoolName: a,
                                            account: i,
                                            password: l,
                                            courseNames: d,
                                            status: !1,
                                            msg: "查询中...",
                                            courseList: []
                                        };
                                        if (f.platformType = this.platformType, f.statusCode = 4, f.addStatus = 0, f.selectAll = !0, f.checkedCourseList = [], f.isIndeterminate = !1, d)
                                            for (var h = d.split(","), m = 0; m < h.length; m++) {
                                                var p = {
                                                    courseName: h[m]
                                                };
                                                f.checkedCourseList.push(p)
                                            }
                                        e.push(f)
                                    } else this.queryResult(!1, r, n.length, null)
                                }
                                this.content = null;
                                var g = "list=" + window.encodeURIComponent(window.JSON.stringify(e)) + "&platformType=" + this.platformType + "&miaoshua=" + this.miaoshua;
                                Object(u["y"])(g).then(function(e) {
                                    e.success ? (t.loadingQuery = !1, t.$notify.success({
                                        title: "订单提交",
                                        message: e.msg
                                    })) : t.$notify.error({
                                        title: "错误",
                                        message: e.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            } else this.$notify.error({
                                title: "错误",
                                message: "输入内容不能为空哦"
                            })
                        },
                        getUrlConfig: function(t) {
                            for (var e = null, n = 0; n < this.urlConfig.length; n++) {
                                var r = this.urlConfig[n];
                                if (r.platformType == t) {
                                    e = r;
                                    break
                                }
                            }
                            return e
                        }
                    }
                },
                f = d,
                h = (n("bb64"), n("f74c"), n("2877")),
                m = Object(h["a"])(f, r, o, !1, null, "5f41ef69", null);
            e["default"] = m.exports
        },
        "73bb": function(t, e, n) {},
        8325: function(t, e, n) {
            "use strict";
            var r = n("b311");
            if (!r) throw new Error("you should npm install `clipboard` --save at first ");
            var o = {
                    bind: function(t, e) {
                        if ("success" === e.arg) t._v_clipboard_success = e.value;
                        else if ("error" === e.arg) t._v_clipboard_error = e.value;
                        else {
                            var n = new r(t, {
                                text: function() {
                                    return e.value
                                },
                                action: function() {
                                    return "cut" === e.arg ? "cut" : "copy"
                                }
                            });
                            n.on("success", function(e) {
                                var n = t._v_clipboard_success;
                                n && n(e)
                            }), n.on("error", function(e) {
                                var n = t._v_clipboard_error;
                                n && n(e)
                            }), t._v_clipboard = n
                        }
                    },
                    update: function(t, e) {
                        "success" === e.arg ? t._v_clipboard_success = e.value : "error" === e.arg ? t._v_clipboard_error = e.value : (t._v_clipboard.text = function() {
                            return e.value
                        }, t._v_clipboard.action = function() {
                            return "cut" === e.arg ? "cut" : "copy"
                        })
                    },
                    unbind: function(t, e) {
                        "success" === e.arg ? delete t._v_clipboard_success : "error" === e.arg ? delete t._v_clipboard_error : (t._v_clipboard.destroy(), delete t._v_clipboard)
                    }
                },
                s = function(t) {
                    t.directive("Clipboard", o)
                };
            window.Vue && (window.clipboard = o, Vue.use(s)), o.install = s
        },
        b39f: function(t, e, n) {
            "use strict";
            n.d(e, "o", function() {
                return o
            }), n.d(e, "p", function() {
                return s
            }), n.d(e, "m", function() {
                return a
            }), n.d(e, "l", function() {
                return c
            }), n.d(e, "r", function() {
                return u
            }), n.d(e, "a", function() {
                return i
            }), n.d(e, "x", function() {
                return l
            }), n.d(e, "y", function() {
                return d
            }), n.d(e, "h", function() {
                return f
            }), n.d(e, "g", function() {
                return h
            }), n.d(e, "k", function() {
                return m
            }), n.d(e, "s", function() {
                return p
            }), n.d(e, "f", function() {
                return g
            }), n.d(e, "j", function() {
                return b
            }), n.d(e, "i", function() {
                return y
            }), n.d(e, "v", function() {
                return v
            }), n.d(e, "q", function() {
                return _
            }), n.d(e, "t", function() {
                return C
            }), n.d(e, "u", function() {
                return A
            }), n.d(e, "e", function() {
                return j
            }), n.d(e, "d", function() {
                return w
            }), n.d(e, "w", function() {
                return k
            }), n.d(e, "c", function() {
                return x
            }), n.d(e, "b", function() {
                return O
            }), n.d(e, "n", function() {
                return N
            });
            var r = n("b775");

            function o(t) {
                return Object(r["a"])({
                    url: "/client/website/websiteInfo",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(r["a"])({
                    url: "/client/website/websiteNoticeInfo",
                    method: "post",
                    data: t
                })
            }

            function a(t) {
                return Object(r["a"])({
                    url: "/client/getQueryUrl",
                    method: "post",
                    data: t
                })
            }

            function c(t) {
                return Object(r["a"])({
                    url: "/client/getPlatFormList2",
                    method: "post",
                    data: t
                })
            }

            function u(t, e) {
                return t || (t = "/userCx"), Object(r["a"])({
                    url: t,
                    method: "post",
                    data: e
                })
            }

            function i(t, e) {
                return t || (t = "/add"), Object(r["a"])({
                    url: t,
                    method: "post",
                    data: e
                })
            }

            function l(t) {
                return Object(r["a"])({
                    url: "/userAdd",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(r["a"])({
                    url: "/userBatchAdd",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/listofpageAgentV2",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(r["a"])({
                    url: "/client/agentCourse/selectAllAgent",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(r["a"])({
                    url: "/client/agentCourse/selectAllCourseName",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/reProgress",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(r["a"])({
                    url: "/client/agentOrder/del",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function y(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/freezeAccount",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/unFreezeAccount",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/openPermission",
                    method: "post",
                    data: t
                })
            }

            function C(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/resetPwdV2",
                    method: "post",
                    data: t
                })
            }

            function A(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/saveChargeV2",
                    method: "post",
                    data: t
                })
            }

            function j(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/delAgent",
                    method: "post",
                    data: t
                })
            }

            function w(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/createAgent",
                    method: "post",
                    data: t
                })
            }

            function k(t) {
                return Object(r["a"])({
                    url: "/agentList/myAgent/updateAgent",
                    method: "post",
                    data: t
                })
            }

            function x(t) {
                return Object(r["a"])({
                    url: "/renewList/consume/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function O(t) {
                return Object(r["a"])({
                    url: "/account/changePwdV2",
                    method: "post",
                    data: t
                })
            }

            function N(t) {
                return Object(r["a"])({
                    url: "/account/getUser",
                    method: "post",
                    data: t
                })
            }
        },
        bb64: function(t, e, n) {
            "use strict";
            var r = n("73bb"),
                o = n.n(r);
            o.a
        },
        bbcb: function(t, e, n) {},
        f71e: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return u
            });
            var r = n("2b0e"),
                o = n("b311"),
                s = n.n(o);

            function a() {
                r["default"].prototype.$message({
                    message: "复制成功",
                    type: "success",
                    duration: 1500
                })
            }

            function c() {
                r["default"].prototype.$message({
                    message: "复制失败",
                    type: "error"
                })
            }

            function u(t, e) {
                var n = new s.a(e.target, {
                    text: function() {
                        return t
                    }
                });
                n.on("success", function() {
                    a(), n.destroy()
                }), n.on("error", function() {
                    c(), n.destroy()
                }), n.onClick(e)
            }
        },
        f74c: function(t, e, n) {
            "use strict";
            var r = n("bbcb"),
                o = n.n(r);
            o.a
        }
    }
]);