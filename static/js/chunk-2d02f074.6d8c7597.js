(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-2d02f074"], {
        1828: function(t, e, n) {},
        "79f4": function(t, e, n) {
            "use strict";
            var a = n("1828"),
                i = n.n(a);
            i.a
        },
        e997: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "app-container"
                    }, [n("aside", [t._v("\n    代理充值扣你的费用 = 代理充值金额 * ( 你的价格 / 代理的价格 ) + 1\n  ")]), t._v(" "), n("div", {
                        staticClass: "filter-container"
                    }, [n("el-input", {
                        staticClass: "filter-item",
                        staticStyle: {
                            width: "200px"
                        },
                        attrs: {
                            placeholder: "学校/学号/手机号/姓名/账号/qq",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleFilter(e)
                            }
                        },
                        model: {
                            value: t.listQuery.unionAccount,
                            callback: function(e) {
                                t.$set(t.listQuery, "unionAccount", e)
                            },
                            expression: "listQuery.unionAccount"
                        }
                    }), t._v(" "), n("el-button", {
                        directives: [{
                            name: "waves",
                            rawName: "v-waves"
                        }],
                        staticClass: "filter-item",
                        attrs: {
                            type: "primary",
                            icon: "el-icon-search"
                        },
                        on: {
                            click: t.handleFilter
                        }
                    }, [t._v("\n      查询\n    ")]), t._v(" "), n("el-button", {
                        directives: [{
                            name: "waves",
                            rawName: "v-waves"
                        }],
                        staticClass: "filter-item",
                        attrs: {
                            type: "primary",
                            icon: "el-icon-plus"
                        },
                        on: {
                            click: t.handleCreate
                        }
                    }, [t._v("\n      新增\n    ")])], 1), t._v(" "), n("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: t.listLoading,
                            expression: "listLoading"
                        }],
                        key: t.tableKey,
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.list,
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        },
                        on: {
                            "sort-change": t.sortChange
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            label: "备注",
                            prop: "remarks",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.remarks))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "学校",
                            prop: "schoolName",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.schoolName))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "账号",
                            prop: "agentAccount",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.agentAccount))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "姓名",
                            prop: "agentName",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.agentName))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "qq",
                            prop: "qq",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.qq))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "价格(元)",
                            prop: "price",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.price))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "余额(元)",
                            prop: "ammount",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.ammount))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "代理数",
                            prop: "agentNum",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.agentNum))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "交单数",
                            prop: "orderNum",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.orderNum))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "今日交单数",
                            prop: "todayOrderNum",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(e.row.todayOrderNum))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "创建日期",
                            prop: "createTime",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [n("span", [t._v(t._s(t._f("parseTime")(e.row.createTime.time, "{y}-{m}-{d} {h}:{i}")))])]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "登录日期",
                            prop: "loginTime",
                            sortable: "custom",
                            align: "center",
                            formatter: t.formatter
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "状态",
                            prop: "status",
                            sortable: "custom",
                            "class-name": "status-col"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var a = e.row;
                                return [1 != a.status ? n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "warning",
                                        plain: ""
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.unFreezeAccount(a, "1")
                                        }
                                    }
                                }, [t._v("\n          冻结\n        ")]) : t._e(), t._v(" "), 1 == a.status ? n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "success",
                                        plain: ""
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.freezeAccount(a, "1")
                                        }
                                    }
                                }, [t._v("\n          正常\n        ")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "开户权限",
                            prop: "openPermission",
                            sortable: "custom",
                            "class-name": "status-col"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var a = e.row;
                                return [1 != a.openPermission ? n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "warning",
                                        plain: ""
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.openPermission(a, "1")
                                        }
                                    }
                                }, [t._v("\n          否\n        ")]) : t._e(), t._v(" "), 1 == a.openPermission ? n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "success",
                                        plain: ""
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.openPermission(a, "0")
                                        }
                                    }
                                }, [t._v("\n          是\n        ")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            "class-name": "small-padding fixed-width"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var a = e.row;
                                return [n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.handleCharge(a)
                                        }
                                    }
                                }, [t._v("\n          充值\n        ")]), t._v(" "), n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.handleUpdate(a)
                                        }
                                    }
                                }, [t._v("\n          编辑\n        ")]), t._v(" "), n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.resetPwd(a, "resetPwd")
                                        }
                                    }
                                }, [t._v("\n          重置密码\n        ")]), t._v(" "), n("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "danger"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.delStatus(a, "deleted")
                                        }
                                    }
                                }, [t._v("\n          删除\n        ")])]
                            }
                        }])
                    })], 1), t._v(" "), n("pagination", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.total > 0,
                            expression: "total>0"
                        }],
                        attrs: {
                            total: t.total,
                            page: t.listQuery.showPage,
                            limit: t.listQuery.pageSize
                        },
                        on: {
                            "update:page": function(e) {
                                return t.$set(t.listQuery, "showPage", e)
                            },
                            "update:limit": function(e) {
                                return t.$set(t.listQuery, "pageSize", e)
                            },
                            pagination: t.getList
                        }
                    }), t._v(" "), n("el-dialog", {
                        attrs: {
                            title: t.textMap[t.dialogStatus],
                            visible: t.dialogFormVisible,
                            width: "80%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogFormVisible = e
                            }
                        }
                    }, [n("el-form", {
                        ref: "dataForm",
                        staticStyle: {
                            "margin-left": "5%",
                            "margin-right": "5%"
                        },
                        attrs: {
                            rules: t.rules,
                            model: t.temp,
                            "label-position": "right",
                            "label-width": "55px"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "账号",
                            prop: "agentAccount"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "账号"
                        },
                        model: {
                            value: t.temp.agentAccount,
                            callback: function(e) {
                                t.$set(t.temp, "agentAccount", e)
                            },
                            expression: "temp.agentAccount"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "学校"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "选填"
                        },
                        model: {
                            value: t.temp.schoolName,
                            callback: function(e) {
                                t.$set(t.temp, "schoolName", e)
                            },
                            expression: "temp.schoolName"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "qq"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "选填"
                        },
                        model: {
                            value: t.temp.qq,
                            callback: function(e) {
                                t.$set(t.temp, "qq", e)
                            },
                            expression: "temp.qq"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "姓名"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "选填"
                        },
                        model: {
                            value: t.temp.agentName,
                            callback: function(e) {
                                t.$set(t.temp, "agentName", e)
                            },
                            expression: "temp.agentName"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "手机"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "选填"
                        },
                        model: {
                            value: t.temp.phone,
                            callback: function(e) {
                                t.$set(t.temp, "phone", e)
                            },
                            expression: "temp.phone"
                        }
                    })], 1), t._v(" "), "create" != t.dialogStatus ? n("span", [t._v("修改价格的话，将按比例调整代理余额")]) : t._e(), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "价格",
                            prop: "price"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "价格",
                            type: "number"
                        },
                        model: {
                            value: t.temp.price,
                            callback: function(e) {
                                t.$set(t.temp, "price", e)
                            },
                            expression: "temp.price"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "备注"
                        }
                    }, [n("el-input", {
                        attrs: {
                            autosize: {
                                minRows: 2,
                                maxRows: 4
                            },
                            type: "textarea",
                            placeholder: "选填"
                        },
                        model: {
                            value: t.temp.remarks,
                            callback: function(e) {
                                t.$set(t.temp, "remarks", e)
                            },
                            expression: "temp.remarks"
                        }
                    })], 1)], 1), t._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        on: {
                            click: function(e) {
                                t.dialogFormVisible = !1
                            }
                        }
                    }, [t._v("\n        取消\n      ")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                "create" === t.dialogStatus ? t.createData() : t.updateData()
                            }
                        }
                    }, [t._v("\n        确认\n      ")])], 1)], 1), t._v(" "), n("el-dialog", {
                        attrs: {
                            visible: t.dialogPvVisible,
                            title: "Reading statistics"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogPvVisible = e
                            }
                        }
                    }, [n("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.pvData,
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        }
                    }, [n("el-table-column", {
                        attrs: {
                            prop: "key",
                            label: "Channel"
                        }
                    }), t._v(" "), n("el-table-column", {
                        attrs: {
                            prop: "pv",
                            label: "Pv"
                        }
                    })], 1), t._v(" "), n("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.dialogPvVisible = !1
                            }
                        }
                    }, [t._v("Confirm")])], 1)], 1), t._v(" "), n("el-dialog", {
                        attrs: {
                            title: t.dialogChargeTitle,
                            visible: t.dialogChargeVisible,
                            width: "60%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogChargeVisible = e
                            }
                        }
                    }, [n("el-form", {
                        ref: "dataFormCharge",
                        staticStyle: {
                            "margin-left": "5%",
                            "margin-right": "5%"
                        },
                        attrs: {
                            rules: t.rulesCharge,
                            model: t.tempCharge,
                            "label-position": "right",
                            "label-width": "35%"
                        }
                    }, [n("el-form-item", {
                        attrs: {
                            label: "原余额(元)"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "",
                            readonly: ""
                        },
                        model: {
                            value: t.tempCharge.originAmmount,
                            callback: function(e) {
                                t.$set(t.tempCharge, "originAmmount", e)
                            },
                            expression: "tempCharge.originAmmount"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "充值金额(元)(从您余额按比例扣除)",
                            prop: "chargeAmmount"
                        }
                    }, [n("el-input", {
                        attrs: {
                            placeholder: "",
                            type: "number",
                            autofocus: ""
                        },
                        model: {
                            value: t.tempCharge.chargeAmmount,
                            callback: function(e) {
                                t.$set(t.tempCharge, "chargeAmmount", e)
                            },
                            expression: "tempCharge.chargeAmmount"
                        }
                    })], 1), t._v(" "), n("el-form-item", {
                        attrs: {
                            label: "充值后(元)"
                        }
                    }, [n("el-input", {
                        attrs: {
                            value: parseFloat(t.tempCharge.originAmmount) + parseFloat(t.tempCharge.chargeAmmount),
                            placeholder: "",
                            readonly: ""
                        }
                    })], 1)], 1), t._v(" "), n("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [n("el-button", {
                        on: {
                            click: function(e) {
                                t.dialogChargeVisible = !1
                            }
                        }
                    }, [t._v("\n        取消\n      ")]), t._v(" "), n("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.chargeData()
                            }
                        }
                    }, [t._v("\n        确认\n      ")])], 1)], 1)], 1)
                },
                i = [],
                o = (n("55dd"), n("ac4d"), n("8a81"), n("ac6a"), n("b39f")),
                s = n("6724"),
                l = n("ed08"),
                r = n("333d"),
                c = n("4328"),
                u = n.n(c),
                m = [{
                    key: "CN",
                    display_name: "China"
                }, {
                    key: "US",
                    display_name: "USA"
                }, {
                    key: "JP",
                    display_name: "Japan"
                }, {
                    key: "EU",
                    display_name: "Eurozone"
                }],
                p = m.reduce(function(t, e) {
                    return t[e.key] = e.display_name, t
                }, {}),
                d = {
                    name: "Manage",
                    components: {
                        Pagination: r["a"]
                    },
                    directives: {
                        waves: s["a"]
                    },
                    filters: {
                        statusFilter: function(t) {
                            var e = {
                                0: "冻结",
                                1: "正常"
                            };
                            return e[t]
                        },
                        typeFilter: function(t) {
                            return p[t]
                        }
                    },
                    data: function() {
                        return {
                            tableKey: 0,
                            list: null,
                            total: 0,
                            listLoading: !0,
                            listQuery: {
                                showPage: 1,
                                pageSize: 10,
                                sort: null,
                                sortType: null,
                                platformType: null,
                                unionAccount: null,
                                schoolName: null,
                                runStatus: null,
                                complete: null
                            },
                            platformTypeOptions: [],
                            calendarTypeOptions: m,
                            sortOptions: [{
                                label: "ID Ascending",
                                key: "+id"
                            }, {
                                label: "ID Descending",
                                key: "-id"
                            }],
                            statusOptions: ["published", "draft", "deleted"],
                            showReviewer: !1,
                            temp: {
                                id: null,
                                agentAccount: "",
                                schoolName: "",
                                agentName: "",
                                price: "",
                                remarks: "",
                                qq: "",
                                phone: ""
                            },
                            tempCharge: {
                                id: null,
                                originAmmount: null,
                                chargeAmmount: null,
                                resultAmmount: null
                            },
                            dialogFormVisible: !1,
                            dialogChargeVisible: !1,
                            dialogStatus: "",
                            dialogChargeTitle: "",
                            textMap: {
                                update: "编辑",
                                create: "创建"
                            },
                            dialogPvVisible: !1,
                            pvData: [],
                            rules: {
                                agentAccount: [{
                                    required: !0,
                                    message: "账号必填",
                                    trigger: "blur"
                                }],
                                price: [{
                                    required: !0,
                                    message: "价格必填",
                                    trigger: "blur"
                                }]
                            },
                            rulesCharge: {
                                chargeAmmount: [{
                                    required: !0,
                                    message: "金额必填",
                                    trigger: "blur"
                                }]
                            },
                            downloadLoading: !1
                        }
                    },
                    created: function() {
                        this.fetchData(), this.getList()
                    },
                    methods: {
                        platformTypeFilter: function(t) {
                            console.info(this.platformTypeOptions);
                            var e = t;
                            return this.platformTypeOptions.forEach(function(n, a) {
                                n.dictValue == t && (e = n.dictName)
                            }), e
                        },
                        formatter: function(t, e, n, a) {
                            return n && n.time ? Object(l["d"])(n.time, "{y}-{m}-{d} {h}:{i}") : null
                        },
                        fetchData: function() {
                            var t = this;
                            Object(o["l"])().then(function(e) {
                                t.platformTypeOptions = e.obj
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        getList: function() {
                            var t = this;
                            this.listLoading = !0, Object(o["j"])(u.a.stringify(this.listQuery)).then(function(e) {
                                t.list = e.obj.rows, t.total = e.obj.total, t.listLoading = !1
                            })
                        },
                        handleFilter: function() {
                            this.listQuery.showPage = 1, this.getList()
                        },
                        resetPwd: function(t, e) {
                            var n = this;
                            this.$confirm(t.agentAccount + "重置密码为123456, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(o["t"])("id=" + t.id).then(function(t) {
                                    n.getList(), n.$message({
                                        type: "success",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                n.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        unFreezeAccount: function(t, e) {
                            var n = this;
                            this.$confirm(t.agentAccount + "解冻, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(o["v"])("id=" + t.id).then(function(t) {
                                    n.getList(), n.$message({
                                        type: "success",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                n.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        freezeAccount: function(t, e) {
                            var n = this;
                            this.$confirm(t.agentAccount + "冻结, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(o["i"])("id=" + t.id).then(function(t) {
                                    n.getList(), n.$message({
                                        type: "success",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                n.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        openPermission: function(t, e) {
                            var n = this;
                            this.$confirm(t.agentAccount + "开户权限, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(o["q"])("id=" + t.id + "&openPermission=" + e).then(function(t) {
                                    n.getList(), n.$message({
                                        type: "success",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                n.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        delStatus: function(t, e) {
                            var n = this;
                            this.$confirm(t.agentAccount + "将永久删除该信息及所有订单，无法恢复, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(o["e"])("id=" + t.id).then(function(t) {
                                    n.getList(), n.$message({
                                        type: "success",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                n.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        sortChange: function(t) {
                            var e = t.prop,
                                n = t.order;
                            this.sortBy(e, n)
                        },
                        sortBy: function(t, e) {
                            "openPermission" == t ? t = "open_permission" : "schoolName" == t ? t = "school_name" : "createTime" == t ? t = "create_time" : "updateTime" == t ? t = "update_time" : "loginTime" == t ? t = "login_time" : "agentAccount" == t && (t = "agent_account"), "ascending" === e ? (this.listQuery.sort = "" + t, this.listQuery.sortType = "asc") : (this.listQuery.sort = "" + t, this.listQuery.sortType = "desc"), null == t && (this.listQuery.sort = "create_time", this.listQuery.sortType = "desc"), this.handleFilter()
                        },
                        resetTemp: function() {
                            this.temp = {
                                id: null,
                                agentAccount: "",
                                schoolName: "",
                                agentName: "",
                                price: "",
                                remarks: "",
                                qq: "",
                                phone: ""
                            }, this.tempCharge = {
                                id: null,
                                originAmmount: null,
                                chargeAmmount: null,
                                resultAmmount: null
                            }
                        },
                        handleCreate: function() {
                            var t = this;
                            this.resetTemp(), this.dialogStatus = "create", this.dialogFormVisible = !0, this.$nextTick(function() {
                                t.$refs["dataForm"].clearValidate()
                            })
                        },
                        createData: function() {
                            var t = this;
                            this.$refs["dataForm"].validate(function(e) {
                                e && Object(o["d"])(u.a.stringify(t.temp)).then(function(e) {
                                    e.success ? (t.list.unshift(t.temp), t.dialogFormVisible = !1, t.getList(), t.$notify({
                                        title: "成功",
                                        message: e.msg,
                                        type: "success",
                                        duration: 2e3
                                    })) : t.$notify({
                                        title: "失败",
                                        message: e.msg,
                                        type: "error",
                                        duration: 2e3
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            })
                        },
                        handleUpdate: function(t) {
                            var e = this;
                            this.temp = Object.assign({}, t), this.dialogStatus = "update", this.dialogFormVisible = !0, this.$nextTick(function() {
                                e.$refs["dataForm"].clearValidate()
                            })
                        },
                        updateData: function() {
                            var t = this;
                            this.$refs["dataForm"].validate(function(e) {
                                if (e) {
                                    var n = Object.assign({}, t.temp);
                                    Object(o["w"])(u.a.stringify(n)).then(function(e) {
                                        if (e.success) {
                                            var n = !0,
                                                a = !1,
                                                i = void 0;
                                            try {
                                                for (var o, s = t.list[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                                    var l = o.value;
                                                    if (l.id === t.temp.id) {
                                                        var r = t.list.indexOf(l);
                                                        t.list.splice(r, 1, t.temp);
                                                        break
                                                    }
                                                }
                                            } catch (c) {
                                                a = !0, i = c
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (a) throw i
                                                }
                                            }
                                            t.dialogFormVisible = !1, t.$notify({
                                                title: "成功",
                                                message: "更新成功",
                                                type: "success",
                                                duration: 2e3
                                            })
                                        } else t.$notify({
                                            title: "失败",
                                            message: e.msg,
                                            type: "error",
                                            duration: 2e3
                                        })
                                    }).catch(function(t) {
                                        console.log(t)
                                    })
                                }
                            })
                        },
                        handleCharge: function(t) {
                            var e = this;
                            this.tempCharge = Object.assign({}, t), this.tempCharge.originAmmount = this.tempCharge.ammount , this.tempCharge.resultAmmount = this.tempCharge.originAmmount, this.tempCharge.timestamp = new Date(this.tempCharge.timestamp), this.dialogChargeTitle = t.agentAccount + "充值", this.dialogChargeVisible = !0, this.$nextTick(function() {
                                e.$refs["dataFormCharge"].clearValidate()
                            })
                        },
                        chargeData: function() {
                            var t = this;
                            this.$refs["dataFormCharge"].validate(function(e) {
                                if (e) {
                                    var n = Object.assign({}, t.tempCharge);
                                    n.timestamp = +new Date(n.timestamp), Object(o["u"])(u.a.stringify(n)).then(function(e) {
                                        if (e.success) {
                                            var n = !0,
                                                a = !1,
                                                i = void 0;
                                            try {
                                                for (var o, s = t.list[Symbol.iterator](); !(n = (o = s.next()).done); n = !0) {
                                                    var l = o.value;
                                                    if (l.id === t.tempCharge.id) {
                                                        var r = t.list.indexOf(l);
                                                        t.list.splice(r, 1, t.tempCharge);
                                                        break
                                                    }
                                                }
                                            } catch (c) {
                                                a = !0, i = c
                                            } finally {
                                                try {
                                                    n || null == s.return || s.return()
                                                } finally {
                                                    if (a) throw i
                                                }
                                            }
                                            t.getList(), t.dialogChargeVisible = !1, t.$notify({
                                                title: "成功",
                                                message: e.msg,
                                                type: "success",
                                                duration: 2e3
                                            })
                                        } else t.$notify({
                                            title: "失败",
                                            message: e.msg,
                                            type: "error",
                                            duration: 2e3
                                        })
                                    }).catch(function(t) {
                                        console.log(t)
                                    })
                                }
                            })
                        },
                        handleDelete: function(t) {
                            this.$notify({
                                title: "成功",
                                message: "删除成功",
                                type: "success",
                                duration: 2e3
                            });
                            var e = this.list.indexOf(t);
                            this.list.splice(e, 1)
                        },
                        handleFetchPv: function(t) {
                            var e = this;
                            fetchPv(t).then(function(t) {
                                e.pvData = t.data.pvData, e.dialogPvVisible = !0
                            })
                        },
                        handleDownload: function() {
                            var t = this;
                            this.downloadLoading = !0, Promise.all([n.e("chunk-e69e90f4"), n.e("chunk-58293907")]).then(n.bind(null, "4bf8d")).then(function(e) {
                                var n = ["timestamp", "title", "type", "importance", "status"],
                                    a = ["timestamp", "title", "type", "importance", "status"],
                                    i = t.formatJson(a, t.list);
                                e.export_json_to_excel({
                                    header: n,
                                    data: i,
                                    filename: "table-list"
                                }), t.downloadLoading = !1
                            })
                        },
                        formatJson: function(t, e) {
                            return e.map(function(e) {
                                return t.map(function(t) {
                                    return "timestamp" === t ? Object(l["d"])(e[t]) : e[t]
                                })
                            })
                        },
                        getSortClass: function(t) {
                            var e = this.listQuery.sort;
                            return e === "+".concat(t) ? "ascending" : e === "-".concat(t) ? "descending" : ""
                        }
                    }
                },
                f = d,
                g = (n("79f4"), n("2877")),
                h = Object(g["a"])(f, a, i, !1, null, null, null);
            e["default"] = h.exports
        }
    }
]);