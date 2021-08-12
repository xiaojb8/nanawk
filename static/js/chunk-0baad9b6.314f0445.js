(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0baad9b6"], {
        "31ef": function(t, e, n) {
            "use strict";
            n.r(e);
            var a = function() {
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
                    }, [t._v("\n    " + t._s(t.queryMsg) + "\n  ")]) : t._e(), t._v(" "), n("div", [n("el-row", {
                        attrs: {
                            gutter: 20
                        }
                    }, [n("div", {
                        staticStyle: {
                            "text-align": "center",
                            color: "#ff0006"
                        }
                    }, [t._v("所有课程都需要查集，不可直接交单")])])], 1), t._v(" "), n("div", [t.mobile ? n("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            "margin-left": "5px",
                            "margin-right": "5px"
                        }
                    }, [n("el-input", {
                        staticClass: "input-with-select",
                        staticStyle: {
                            "background-color": "#fff"
                        },
                        attrs: {
                            placeholder: "学校名称 学号/手机号码 密码"
                        },
                        model: {
                            value: t.content,
                            callback: function(e) {
                                t.content = e
                            },
                            expression: "content"
                        }
                    }, [n("el-select", {
                        staticStyle: {
                            width: "100px"
                        },
                        attrs: {
                            slot: "prepend",
                            placeholder: "请选择平台"
                        },
                        slot: "prepend",
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
                    }), 1), t._v(" "), n("el-button", {
                        attrs: {
                            slot: "append",
                            loading: t.loadingQuery
                        },
                        on: {
                            click: t.queryTemp
                        },
                        slot: "append"
                    }, [t._v("查询")])], 1)], 1) : t._e(), t._v(" "), t.mobile ? t._e() : n("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            "margin-left": "5px",
                            "margin-right": "5px",
                            display: "flex"
                        }
                    }, [n("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.platformType,
                            expression: "platformType"
                        }],
                        staticClass: "form-control el-input-group__prepend",
                        staticStyle: {
                            width: "120px"
                        },
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
                    }), 0), t._v(" "), n("el-input", {
                        staticClass: "input-with-select inner",
                        staticStyle: {
                            "background-color": "#fff",
                            "border-radius": "0",
                            "border-top-right-radius": "0",
                            "border-bottom-right-radius": "0",
                            "border-top-left-radius": "0",
                            "border-bottom-left-radius": "0"
                        },
                        attrs: {
                            placeholder: "学校名称 学号/手机号码 密码"
                        },
                        model: {
                            value: t.content,
                            callback: function(e) {
                                t.content = e
                            },
                            expression: "content"
                        }
                    }), t._v(" "), n("el-button", {
                        staticClass: "el-input-group__append",
                        attrs: {
                            slot: "append",
                            loading: t.loadingQuery
                        },
                        on: {
                            click: t.queryTemp
                        },
                        slot: "append"
                    }, [t._v("查询")])], 1)]), t._v(" "), n("div", [n("div", {
                        staticStyle: {
                            "margin-top": "5px",
                            "text-align": "center"
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
                            loading: t.loadingUserAdd
                        },
                        on: {
                            click: t.userAdd
                        }
                    }, [t._v("加入订单")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary",
                            icon: "el-icon-document"
                        },
                        on: {
                            click: function(e) {
                                return t.handleCopy(t.content, e)
                            }
                        }
                    }, [t._v("复制")])], 1), t._v(" "), n("div", {
                        staticStyle: {
                            margin: "5px 5px 5px 5px"
                        }
                    }, [n("el-table", {
                        key: t.key,
                        ref: "table",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.tableData,
                            border: "",
                            "show-summary": !1,
                            "summary-method": t.getSummaries,
                            fit: "",
                            "highlight-current-row": ""
                        },
                        on: {
                            "selection-change": t.handleSelectionChange
                        }
                    }, [t.categoryShow ? n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "categoryName",
                            label: "类别名称"
                        }
                    }) : t._e(), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "courseName",
                            label: "课程名称"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "chapterCount",
                            label: "总"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "unfinishedChapterCount",
                            label: "剩余"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "courseStartTimeStr",
                            label: "课程开始"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "courseEndTimeStr",
                            label: "课程结束"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "examStartTimeStr",
                            label: "考试开始"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "examEndTimeStr",
                            label: "考试结束"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "examScore",
                            label: "考试状态"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            sortable: "",
                            prop: "price",
                            label: "价格(元)"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            type: "selection",
                            prop: "action",
                            label: "是否刷课"
                        }
                    }), t._v(" "), n("div", {
                        staticStyle: {
                            "text-align": "center"
                        },
                        attrs: {
                            slot: "append"
                        },
                        slot: "append"
                    }, [t.tableData.length > 0 ? n("div", {
                        staticClass: "el-table__footer-wrapper"
                    }, [n("table", {
                        staticClass: "el-table__footer",
                        staticStyle: {
                            width: "1053px"
                        },
                        attrs: {
                            cellspacing: "0",
                            cellpadding: "0",
                            border: "0"
                        }
                    }, [n("colgroup", [t.categoryShow ? n("col", {
                        attrs: {
                            name: "el-table_1_column_1",
                            width: "105"
                        }
                    }) : t._e(), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_2",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_3",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_4",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_5",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_6",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_7",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_8",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_9",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_10",
                            width: "100"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "el-table_1_column_11",
                            width: "48"
                        }
                    }), t._v(" "), n("col", {
                        attrs: {
                            name: "gutter",
                            width: "0"
                        }
                    })]), t._v(" "), n("tbody", {
                        staticClass: "has-gutter"
                    }, [n("tr", [n("td", {
                        staticClass: "el-table_1_column_1 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    }, [t._v("合计")])]), t._v(" "), t.categoryShow ? n("td", {
                        staticClass: "el-table_1_column_2 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]) : t._e(), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_3 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_4 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_5 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_6 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_7 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_8 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowospan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_9 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_10 is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell",
                        staticStyle: {
                            color: "green !important",
                            "font-weight": "bold"
                        },
                        domProps: {
                            innerHTML: t._s(t.sum)
                        }
                    }, [t._v("17元")])]), t._v(" "), n("td", {
                        staticClass: "el-table_1_column_11 el-table-column--selection is-leaf",
                        attrs: {
                            colspan: "1",
                            rowspan: "1"
                        }
                    }, [n("div", {
                        staticClass: "cell"
                    })]), t._v(" "), n("th", {
                        staticClass: "gutter",
                        staticStyle: {
                            width: "0px",
                            display: "none"
                        }
                    })])])])]) : t._e()])], 1)], 1)])])
                },
                r = [],
                o = (n("c5f6"), n("28a5"), n("ac6a"), n("f71e")),
                l = (n("8325"), n("61f7")),
                s = n("b39f"),
                c = n("4328"),
                i = n.n(c),
                u = {
                    name: "Single",
                    components: {},
                    data: function() {
                        return {
                            categoryShow: !1,
                            loadingQuery: !1,
                            loadingUserAdd: !1,
                            user: null,
                            options: [],
                            tableData: [],
                            multipleSelection: [],
                            urlConfig: [],
                            miaoshua: 0,
                            queryUrl: null,
                            addUrl: null,
                            enableAdd: !1,
                            zhsAddUrl: null,
                            zhsEnableAdd: !1,
                            key: 1,
                            content: "",
                            notice: !1,
                            msg: "",
                            queryNotice: !1,
                            queryMsg: "",
                            sum: null
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
                                var t = this.$store.getters.platformType;
                                return this.categoryShow = "16" == t || "2" == t || "8" == t || "31" == t, t
                            },
                            set: function(t) {
                                this.$store.dispatch("app/setPlatformType", t), this.categoryShow = "16" == t || "2" == t || "8" == t
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
                        getQueryUrl: function() {
                            var t = this;
                            Object(s["m"])("platformType=").then(function(e) {
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
                            Object(s["l"])().then(function(e) {
                                t.options = e.obj
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        handleSelectionChange: function(t) {
                            var e, n, a = this;
                            this.multipleSelection = t, this.user.checkedCourseList = t, this.options.forEach(function(t, r) {
                                t.dictValue == a.platformType && (e = t.price, n = t.agentPrice)
                            }), this.sum = n * e * this.user.checkedCourseList.length + "元"
                        },
                        handleCopy: function(t, e) {
                            Object(o["a"])(t, e)
                        },
                        queryTemp: function() {
                            var t = this;
                            if ("11" == this.platformType) {
                                var e = new TencentCaptcha("2031330137", function(e) {
                                    0 == e.ret && t.query(e)
                                });
                                e.show()
                            } else t.query(null)
                        },
                        query: function(t) {
                            var e = this,
                                n = this.content.trim().split(/\s+/);
                            if (n.length < 2) this.$notify.error({
                                title: "错误",
                                message: "输入不正确"
                            });
                            else {
                                this.loadingQuery = !0;
                                var a = n[0],
                                    r = null,
                                    o = null;
                                Object(l["b"])(a) ? (r = n[1], o = n[2], n.length >= 4 && n[3]) : (a = null, r = n[0], o = n[1], n.length >= 3 && n[2]);
                                var c = {
                                        schoolName: a,
                                        fid: null,
                                        account: r,
                                        password: o,
                                        platformType: this.platformType
                                    },
                                    u = i.a.stringify(c);
                                null != t && (u += "&" + i.a.stringify(t));
                                var d = null,
                                    p = this.getUrlConfig(this.platformType);
                                p && p.enableQuery && (d = p.queryUrl), Object(s["r"])(d, u).then(function(t) {
                                    if (t.success) {
                                        if (!t.obj.status) return void e.$notify.error({
                                            title: "错误",
                                            message: t.obj.msg
                                        });
                                        e.tableData = t.obj.courseList, e.user = t.obj
                                    } else e.$notify.error({
                                        title: "错误",
                                        message: t.msg
                                    })
                                }).then(function() {
                                    e.tableData.forEach(function(t) {
                                        e.$refs.table.toggleRowSelection(t, !0)
                                    }), e.loadingQuery = !1
                                }).catch(function(t) {
                                    console.log(t), e.loadingQuery = !1
                                })
                            }
                        },
                        userAdd: function() {
                            var t = this;
                            if (!this.user) {
                                var e = this.content.trim().split(/\s+/);
                                if (e.length < 2) return void this.$notify.error({
                                    title: "错误",
                                    message: "输入不正确"
                                });
                                var n = e[0],
                                    a = null,
                                    r = null;
                                Object(l["b"])(n) ? (a = e[1], r = e[2], e.length >= 4 && e[3]) : (n = null, a = e[0], r = e[1], e.length >= 3 && e[2]);
                                var o = {
                                    schoolName: n,
                                    fid: null,
                                    account: a,
                                    password: r,
                                    platformType: this.platformType
                                };
                                this.user = o
                            }
                            this.loadingUserAdd = !0;
                            var c = "user=" + window.encodeURIComponent(window.JSON.stringify(this.user)) + "&platformType=" + this.platformType + "&miaoshua=" + this.miaoshua;
                            Object(s["x"])(c).then(function(e) {
                                e.success ? (t.$notify.success({
                                    title: "订单提交",
                                    message: e.msg
                                }), t.orderAdd(t.user)) : t.$notify.error({
                                    title: "错误",
                                    message: e.msg
                                })
                            }).then(function() {
                                t.loadingUserAdd = !1
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        orderAdd: function(t) {
                            t.schoolName || (t.schoolName = "");
                            var e = this.getUrlConfig(this.platformType);
                            if (e && e.enableAdd) {
                                for (var n = "", a = 0; t.checkedCourseList && a < t.checkedCourseList.length; a++) {
                                    var r = t.checkedCourseList[a],
                                        o = r.courseName.split(/\s+/)[0];
                                    n += o, a < t.checkedCourseList.length - 1 && (n += ",")
                                }
                                Object(s["a"])(e.addUrl, "schoolName=" + t.schoolName + "&account=" + t.account + "&password=" + t.password + "&whitchone=" + n + "&miaoshua=" + this.miaoshua).then(function(t) {
                                    console.log(t)
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }
                        },
                        getUrlConfig: function(t) {
                            for (var e = null, n = 0; n < this.urlConfig.length; n++) {
                                var a = this.urlConfig[n];
                                if (a.platformType == t) {
                                    e = a;
                                    break
                                }
                            }
                            return e
                        },
                        getSummaries: function(t) {
                            var e = this,
                                n = t.columns,
                                a = t.data,
                                r = [];
                            return n.forEach(function(t, n) {
                                if (0 !== n) {
                                    if ("price" == t.property && e.user) {
                                        var o, l;
                                        e.options.forEach(function(t, n) {
                                            t.dictValue == e.platformType && (o = t.price, l = t.agentPrice)
                                        });
                                        var s = l * o * e.user.courseList.length;
                                        return e.user.checkedCourseList && (s = l * o * e.user.checkedCourseList.length), void(r[n] = s + "元")
                                    }
                                    if ("chapterCount" == t.property || "unfinishedChapterCount" == t.property) {
                                        var c = a.map(function(e) {
                                            return Number(e[t.property])
                                        });
                                        c.every(function(t) {
                                            return isNaN(t)
                                        }) ? r[n] = "" : (r[n] = c.reduce(function(t, e) {
                                            var n = Number(e);
                                            return isNaN(n) ? t : t + e
                                        }, 0), r[n] += "")
                                    } else r[n] = ""
                                } else r[n] = "合计"
                            }), r
                        }
                    }
                },
                d = u,
                p = (n("f05b"), n("3230"), n("2877")),
                f = Object(p["a"])(d, a, r, !1, null, "dfc6485a", null);
            e["default"] = f.exports
        },
        3230: function(t, e, n) {
            "use strict";
            var a = n("853c"),
                r = n.n(a);
            r.a
        },
        8325: function(t, e, n) {
            "use strict";
            var a = n("b311");
            if (!a) throw new Error("you should npm install `clipboard` --save at first ");
            var r = {
                    bind: function(t, e) {
                        if ("success" === e.arg) t._v_clipboard_success = e.value;
                        else if ("error" === e.arg) t._v_clipboard_error = e.value;
                        else {
                            var n = new a(t, {
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
                o = function(t) {
                    t.directive("Clipboard", r)
                };
            window.Vue && (window.clipboard = r, Vue.use(o)), r.install = o
        },
        "853c": function(t, e, n) {},
        "95a0": function(t, e, n) {},
        b39f: function(t, e, n) {
            "use strict";
            n.d(e, "o", function() {
                return r
            }), n.d(e, "p", function() {
                return o
            }), n.d(e, "m", function() {
                return l
            }), n.d(e, "l", function() {
                return s
            }), n.d(e, "r", function() {
                return c
            }), n.d(e, "a", function() {
                return i
            }), n.d(e, "x", function() {
                return u
            }), n.d(e, "y", function() {
                return d
            }), n.d(e, "h", function() {
                return p
            }), n.d(e, "g", function() {
                return f
            }), n.d(e, "k", function() {
                return m
            }), n.d(e, "s", function() {
                return h
            }), n.d(e, "f", function() {
                return b
            }), n.d(e, "j", function() {
                return _
            }), n.d(e, "i", function() {
                return g
            }), n.d(e, "v", function() {
                return v
            }), n.d(e, "q", function() {
                return y
            }), n.d(e, "t", function() {
                return w
            }), n.d(e, "u", function() {
                return C
            }), n.d(e, "e", function() {
                return j
            }), n.d(e, "d", function() {
                return O
            }), n.d(e, "w", function() {
                return A
            }), n.d(e, "c", function() {
                return x
            }), n.d(e, "b", function() {
                return S
            }), n.d(e, "n", function() {
                return k
            });
            var a = n("b775");

            function r(t) {
                return Object(a["a"])({
                    url: "/client/website/websiteInfo",
                    method: "post",
                    data: t
                })
            }

            function o(t) {
                return Object(a["a"])({
                    url: "/client/website/websiteNoticeInfo",
                    method: "post",
                    data: t
                })
            }

            function l(t) {
                return Object(a["a"])({
                    url: "/client/getQueryUrl",
                    method: "post",
                    data: t
                })
            }

            function s(t) {
                return Object(a["a"])({
                    url: "/client/getPlatFormList2",
                    method: "post",
                    data: t
                })
            }

            function c(t, e) {
                return t || (t = "/userCx"), Object(a["a"])({
                    url: t,
                    method: "post",
                    data: e
                })
            }

            function i(t, e) {
                return t || (t = "/add"), Object(a["a"])({
                    url: t,
                    method: "post",
                    data: e
                })
            }

            function u(t) {
                return Object(a["a"])({
                    url: "/userAdd",
                    method: "post",
                    data: t
                })
            }

            function d(t) {
                return Object(a["a"])({
                    url: "/userBatchAdd",
                    method: "post",
                    data: t
                })
            }

            function p(t) {
                return Object(a["a"])({
                    url: "/client/agentOrder/listofpageAgentV2",
                    method: "post",
                    data: t
                })
            }

            function f(t) {
                return Object(a["a"])({
                    url: "/client/agentCourse/selectAllAgent",
                    method: "post",
                    data: t
                })
            }

            function m(t) {
                return Object(a["a"])({
                    url: "/client/agentCourse/selectAllCourseName",
                    method: "post",
                    data: t
                })
            }

            function h(t) {
                return Object(a["a"])({
                    url: "/client/agentOrder/reProgress",
                    method: "post",
                    data: t
                })
            }

            function b(t) {
                return Object(a["a"])({
                    url: "/client/agentOrder/del",
                    method: "post",
                    data: t
                })
            }

            function _(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function g(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/freezeAccount",
                    method: "post",
                    data: t
                })
            }

            function v(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/unFreezeAccount",
                    method: "post",
                    data: t
                })
            }

            function y(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/openPermission",
                    method: "post",
                    data: t
                })
            }

            function w(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/resetPwdV2",
                    method: "post",
                    data: t
                })
            }

            function C(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/saveChargeV2",
                    method: "post",
                    data: t
                })
            }

            function j(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/delAgent",
                    method: "post",
                    data: t
                })
            }

            function O(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/createAgent",
                    method: "post",
                    data: t
                })
            }

            function A(t) {
                return Object(a["a"])({
                    url: "/agentList/myAgent/updateAgent",
                    method: "post",
                    data: t
                })
            }

            function x(t) {
                return Object(a["a"])({
                    url: "/renewList/consume/listofpageV2",
                    method: "post",
                    data: t
                })
            }

            function S(t) {
                return Object(a["a"])({
                    url: "/account/changePwdV2",
                    method: "post",
                    data: t
                })
            }

            function k(t) {
                return Object(a["a"])({
                    url: "/account/getUser",
                    method: "post",
                    data: t
                })
            }
        },
        f05b: function(t, e, n) {
            "use strict";
            var a = n("95a0"),
                r = n.n(a);
            r.a
        },
        f71e: function(t, e, n) {
            "use strict";
            n.d(e, "a", function() {
                return c
            });
            var a = n("2b0e"),
                r = n("b311"),
                o = n.n(r);

            function l() {
                a["default"].prototype.$message({
                    message: "复制成功",
                    type: "success",
                    duration: 1500
                })
            }

            function s() {
                a["default"].prototype.$message({
                    message: "复制失败",
                    type: "error"
                })
            }

            function c(t, e) {
                var n = new o.a(e.target, {
                    text: function() {
                        return t
                    }
                });
                n.on("success", function() {
                    l(), n.destroy()
                }), n.on("error", function() {
                    s(), n.destroy()
                }), n.onClick(e)
            }
        }
    }
]);