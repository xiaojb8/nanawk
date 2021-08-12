(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6163c818"], {
        2796: function(t, e, a) {
            "use strict";
            a.r(e);
            var l = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "app-container"
                    }, [a("div", {
                        staticClass: "filter-container"
                    }, [a("el-select", {
                        staticClass: "filter-item",
                        staticStyle: {
                            width: "90px"
                        },
                        attrs: {
                            placeholder: "平台",
                            clearable: ""
                        },
                        model: {
                            value: t.listQuery.platformType,
                            callback: function(e) {
                                t.$set(t.listQuery, "platformType", e)
                            },
                            expression: "listQuery.platformType"
                        }
                    }, t._l(t.platformTypeOptions, function(t) {
                        return a("el-option", {
                            key: t.dictValue,
                            attrs: {
                                label: t.dictName,
                                value: t.dictValue
                            }
                        })
                    }), 1), t._v(" "), a("el-input", {
                        staticClass: "filter-item",
                        staticStyle: {
                            width: "170px"
                        },
                        attrs: {
                            placeholder: "学校",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleFilter(e)
                            }
                        },
                        model: {
                            value: t.listQuery.schoolName,
                            callback: function(e) {
                                t.$set(t.listQuery, "schoolName", e)
                            },
                            expression: "listQuery.schoolName"
                        }
                    }), t._v(" "), a("el-input", {
                        staticClass: "filter-item",
                        staticStyle: {
                            width: "170px"
                        },
                        attrs: {
                            placeholder: "学号/手机号",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleFilter(e)
                            }
                        },
                        model: {
                            value: t.listQuery.accountPhone,
                            callback: function(e) {
                                t.$set(t.listQuery, "accountPhone", e)
                            },
                            expression: "listQuery.accountPhone"
                        }
                    }), t._v(" "), a("el-input", {
                        staticClass: "filter-item",
                        staticStyle: {
                            width: "150px"
                        },
                        attrs: {
                            placeholder: "科目",
                            clearable: ""
                        },
                        nativeOn: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.handleFilter(e)
                            }
                        },
                        model: {
                            value: t.listQuery.courseName,
                            callback: function(e) {
                                t.$set(t.listQuery, "courseName", e)
                            },
                            expression: "listQuery.courseName"
                        }
                    }), t._v(" "), a("el-button", {
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
                    }, [t._v("\n      查询\n    ")])], 1), t._v(" "), a("el-table", {
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
                    }, [a("el-table-column", {
                        attrs: {
                            label: "平台",
                            prop: "platformType",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", [t._v(t._s(t.platformTypeFilter(e.row.platformType)))]), t._v(" "), a("strong", {
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v(t._s(1 == e.row.miaoshua ? "秒刷" : ""))]), t._v(" "), a("strong", {
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v(t._s(1 == e.row.chongshua ? "重刷" : ""))])]
                            }
                        }])
                    }),t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "账号信息",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", [t._v(t._s(e.row.schoolName) + " " + t._s(e.row.account) + " " + t._s(e.row.password))])]
                            }
                        }])
                    }),/* t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "扣费(元)",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [a("span", [t._v(t._s(l.payAmount / 100))])]
                            }
                        }])
                    }), */t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "下单日期",
                            prop: "createTime",
                            sortable: "custom",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", [t._v(t._s(t._f("parseTime")(e.row.createTime.time, "{y}-{m}-{d} {h}:{i}")))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "更新日期",
                            prop: "updateTime",
                            sortable: "custom",
                            align: "center",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "科目",
                            prop: "studentName",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", [t._v(t._s(e.row.remarks))])]
                            }
                        }])
                    }),  t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "考试",
                            prop: "studentName",
                            align: "center"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                return [a("span", [t._v(t._s(e.row.studentName))])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "状态",
                            prop: "runStatus",
                            align: "center",
                            sortable: "custom",
                            "class-name": "status-col"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [a("el-tag", {
                                    attrs: {
                                        type: 6 == l.runStatus ? "danger" : ""
                                    }
                                }, [t._v("\n          " + t._s(t._f("statusFilter")(l.runStatus)) + "\n        ")])]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            label: "操作",
                            align: "center",
                            "class-name": "small-padding fixed-width"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [/*0 != l.runStatus ?*/ a("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "success"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.reProgress(l)
                                        }
                                    }
                                }, [t._v("\n          重刷\n        ")]) /*: t._e(), t._v(" "), a("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.handleFetchCourseList(l)
                                        }
                                    }
                                },[t._v("\n          详情\n        ")]), t._v(" "),
                                    6 == l.runStatus || 5 == l.runStatus ? a("el-button", {
                                    attrs: {
                                        size: "mini",
                                        type: "danger"
                                    },
                                    on: {
                                        click: function(e) {
                                            return t.delStatus(l, "deleted")
                                        }
                                    }
                                }, [t._v("\n          删除\n        ")]) : t._e()*/]
                            }
                        }])
                    })], 1), t._v(" "), a("pagination", {
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
                    }), t._v(" "), a("el-dialog", {
                        attrs: {
                            title: t.textMap[t.dialogStatus],
                            visible: t.dialogFormVisible
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogFormVisible = e
                            }
                        }
                    }, [a("el-form", {
                        ref: "dataForm",
                        staticStyle: {
                            width: "400px",
                            "margin-left": "50px"
                        },
                        attrs: {
                            rules: t.rules,
                            model: t.temp,
                            "label-position": "left",
                            "label-width": "70px"
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "Type",
                            prop: "type"
                        }
                    }, [a("el-select", {
                        staticClass: "filter-item",
                        attrs: {
                            placeholder: "Please select"
                        },
                        model: {
                            value: t.temp.type,
                            callback: function(e) {
                                t.$set(t.temp, "type", e)
                            },
                            expression: "temp.type"
                        }
                    }, t._l(t.calendarTypeOptions, function(t) {
                        return a("el-option", {
                            key: t.key,
                            attrs: {
                                label: t.display_name,
                                value: t.key
                            }
                        })
                    }), 1)], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Date",
                            prop: "timestamp"
                        }
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetime",
                            placeholder: "Please pick a date"
                        },
                        model: {
                            value: t.temp.timestamp,
                            callback: function(e) {
                                t.$set(t.temp, "timestamp", e)
                            },
                            expression: "temp.timestamp"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Title",
                            prop: "title"
                        }
                    }, [a("el-input", {
                        model: {
                            value: t.temp.title,
                            callback: function(e) {
                                t.$set(t.temp, "title", e)
                            },
                            expression: "temp.title"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Status"
                        }
                    }, [a("el-select", {
                        staticClass: "filter-item",
                        attrs: {
                            placeholder: "Please select"
                        },
                        model: {
                            value: t.temp.status,
                            callback: function(e) {
                                t.$set(t.temp, "status", e)
                            },
                            expression: "temp.status"
                        }
                    }, t._l(t.statusOptions, function(t) {
                        return a("el-option", {
                            key: t,
                            attrs: {
                                label: t,
                                value: t
                            }
                        })
                    }), 1)], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Imp"
                        }
                    }, [a("el-rate", {
                        staticStyle: {
                            "margin-top": "8px"
                        },
                        attrs: {
                            colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
                            max: 3
                        },
                        model: {
                            value: t.temp.importance,
                            callback: function(e) {
                                t.$set(t.temp, "importance", e)
                            },
                            expression: "temp.importance"
                        }
                    })], 1), t._v(" "), a("el-form-item", {
                        attrs: {
                            label: "Remark"
                        }
                    }, [a("el-input", {
                        attrs: {
                            autosize: {
                                minRows: 2,
                                maxRows: 4
                            },
                            type: "textarea",
                            placeholder: "Please input"
                        },
                        model: {
                            value: t.temp.remark,
                            callback: function(e) {
                                t.$set(t.temp, "remark", e)
                            },
                            expression: "temp.remark"
                        }
                    })], 1)], 1), t._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        on: {
                            click: function(e) {
                                t.dialogFormVisible = !1
                            }
                        }
                    }, [t._v("\n        Cancel\n      ")]), t._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                "create" === t.dialogStatus ? t.createData() : t.updateData()
                            }
                        }
                    }, [t._v("\n        Confirm\n      ")])], 1)], 1), t._v(" "), a("el-dialog", {
                        attrs: {
                            visible: t.dialogPvVisible,
                            title: "Reading statistics"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogPvVisible = e
                            }
                        }
                    }, [a("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.pvData,
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "key",
                            label: "Channel"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "pv",
                            label: "Pv"
                        }
                    })], 1), t._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.dialogPvVisible = !1
                            }
                        }
                    }, [t._v("Confirm")])], 1)], 1), t._v(" "), a("el-dialog", {
                        attrs: {
                            visible: t.dialogCourseListVisible,
                            title: t.dialogCourseListTitle,
                            width: "95%"
                        },
                        on: {
                            "update:visible": function(e) {
                                t.dialogCourseListVisible = e
                            }
                        }
                    }, [a("el-table", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: t.courseListData,
                            border: "",
                            fit: "",
                            "highlight-current-row": ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "runStatus",
                            label: "运行状态"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [0 == l.runStatus ? a("span", [t._v("未上线")]) : t._e(), t._v(" "), 1 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "green"
                                    }
                                }, [t._v("已登录")]) : t._e(), t._v(" "), 2 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "green"
                                    }
                                }, [t._v("进行中")]) : t._e(), t._v(" "), 3 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "green"
                                    }
                                }, [t._v("考试中")]) : t._e(), t._v(" "), 4 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "green"
                                    }
                                }, [t._v("见面课中")]) : t._e(), t._v(" "), 5 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "green"
                                    }
                                }, [t._v("扫描完成")]) : t._e(), t._v(" "), 6 == l.runStatus ? a("span", {
                                    staticStyle: {
                                        color: "red"
                                    }
                                }, [t._v("刷课失败")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "courseName",
                            label: "课程名称"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "courseStartTime",
                            label: "课程开始时间",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "courseEndTime",
                            label: "课程结束时间",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "chapterCount",
                            label: "总"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "unfinishedChapterCount",
                            label: "剩余"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "createTime",
                            label: "创建时间",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "updateTime",
                            label: "上家访问时间",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "examState",
                            label: "考试状态"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [0 == l.examState ? a("span", [t._v("未考")]) : t._e(), t._v(" "), 1 == l.examState ? a("span", [t._v("已考")]) : t._e(), t._v(" "), 2 == l.examState ? a("span", [t._v("无考试")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "examScore",
                            label: "考试分数"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "examStartTime",
                            label: "开考日期",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "examEndTime",
                            label: "结考日期",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "courseState",
                            label: "课堂状态"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [0 == l.courseState ? a("span", [t._v("未完")]) : t._e(), t._v(" "), 1 == l.courseState ? a("span", [t._v("已完")]) : t._e(), t._v(" "), 2 == l.courseState ? a("span", [t._v("待考")]) : t._e(), t._v(" "), 3 == l.courseState ? a("span", [t._v("待见")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "meetCourseCount",
                            label: "见面课总数"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "unfinishedMeetCourseCount",
                            label: "剩余见面课集数"
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "meetCourseState",
                            label: "见面课状态"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var l = e.row;
                                return [0 == l.meetCourseState ? a("span", [t._v("未完")]) : t._e(), t._v(" "), 1 == l.meetCourseState ? a("span", [t._v("已完")]) : t._e()]
                            }
                        }])
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "meetCourseStartTime",
                            label: "下次见面课开始日期",
                            formatter: t.formatter
                        }
                    }), t._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "meetCourseEndTime",
                            label: "下次见面课结束日期",
                            formatter: t.formatter
                        }
                    })], 1), t._v(" "), a("span", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                t.dialogCourseListVisible = !1
                            }
                        }
                    }, [t._v("确定")])], 1)], 1)], 1)
                },
                s = [],
                i = (a("55dd"), a("ac4d"), a("8a81"), a("ac6a"), a("b39f")),
                r = a("6724"),
                n = a("ed08"),
                o = a("333d"),
                u = a("4328"),
                c = a.n(u),
                p = [{
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
                m = p.reduce(function(t, e) {
                    return t[e.key] = e.display_name, t
                }, {}),
                d = {
                    name: "List",
                    components: {
                        Pagination: o["a"]
                    },
                    directives: {
                        waves: r["a"]
                    },
                    filters: {
                        statusFilter: function(t) {
                            var e = {
                                0: "排队中",
                                1: "已登录",
                                2: "进行中",
                                3: "考试中",
                                4: "已完成",
                                5: "异常",
                                6: "刷课失败",
                                7: "退单"
                            };
                            return e[t]
                        },
                        typeFilter: function(t) {
                            return m[t]
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
                                //pageSize: 10,
                                pageSize: 20,
                                sort: null,
                                sortType: null,
                                platformType: null,
                                accountPhone: null,
                                schoolName: null,
                                courseName: null,
                                runStatus: null,
                                complete: null
                            },
                            platformTypeOptions: [],
                            calendarTypeOptions: p,
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
                                id: void 0,
                                importance: 1,
                                remark: "",
                                timestamp: new Date,
                                title: "",
                                type: "",
                                status: "published"
                            },
                            dialogFormVisible: !1,
                            dialogCourseListVisible: !1,
                            dialogStatus: "",
                            textMap: {
                                update: "Edit",
                                create: "Create"
                            },
                            dialogPvVisible: !1,
                            pvData: [],
                            dialogCourseListTitle: "",
                            courseListData: [],
                            rules: {
                                type: [{
                                    required: !0,
                                    message: "type is required",
                                    trigger: "change"
                                }],
                                timestamp: [{
                                    type: "date",
                                    required: !0,
                                    message: "timestamp is required",
                                    trigger: "change"
                                }],
                                title: [{
                                    required: !0,
                                    message: "title is required",
                                    trigger: "blur"
                                }]
                            },
                            downloadLoading: !1,
                            urlConfig: []
                        }
                    },
                    created: function() {
                        this.fetchData(), this.getList(), this.getQueryUrl()
                    },
                    methods: {
                        platformTypeFilter: function(t) {
                            console.info(this.platformTypeOptions);
                            var e = t;
                            return this.platformTypeOptions.forEach(function(a, l) {
                                a.dictValue == t && (e = a.dictName)
                            }), e
                        },
                        formatter: function(t, e, a, l) {
                            return a && a.time ? Object(n["d"])(a.time, "{y}-{m}-{d} {h}:{i}") : null
                        },
                        fetchData: function() {
                            var t = this;
                            Object(i["l"])().then(function(e) {
                                t.platformTypeOptions = e.obj
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        getQueryUrl: function() {
                            var t = this;
                            Object(i["m"])("platformType=").then(function(e) {
                                t.urlConfig = e.obj.urlConfig
                            }).catch(function(t) {
                                console.log(t)
                            })
                        },
                        getList: function() {
                            var t = this;
                            this.listLoading = !0, Object(i["h"])(c.a.stringify(this.listQuery)).then(function(e) {
                                t.list = e.obj.rows, t.total = e.obj.total, t.listLoading = !1
                            })
                        },
                        handleFetchCourseList: function(t) {
                            var e = this;
                            this.dialogCourseListVisible = !0, this.dialogCourseListTitle = t.schoolName + " " + t.account + " " + t.password, Object(i["g"])(c.a.stringify({
                                extendOrderId: t.id
                            })).then(function(t) {
                                e.courseListData = t.obj
                            })
                        },
                        handleFilter: function() {
                            this.listQuery.showPage = 1, this.getList()
                        },
                        reProgress: function(t, e) {
                            var a = this,
                                l = "此操作将进行重刷需要等上家确认, 是否继续?",
                                s = this.getUrlConfig(t.platformType);
                            s && s.enableAdd && (l = "此操作将进行重刷, 是否继续?"), t.status = e, this.$confirm(l, "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                Object(i["s"])("id=" + t.id).then(function(e) {
                                    a.getList(), a.$message({
                                        type: "info",
                                        message: e.msg
                                    }), a.orderAdd(t)
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                a.$message({
                                    type: "info",
                                    message: "已取消"
                                })
                            })
                        },
                        orderAdd: function(t) {
                            t.schoolName || (t.schoolName = "");
                            var e = this.getUrlConfig(t.platformType);
                            if (e && e.enableAdd) {
                                var a = "";
                                Object(i["k"])(c.a.stringify({
                                    extendOrderId: t.id
                                })).then(function(l) {
                                    a = l.obj, Object(i["a"])(e.addUrl, "schoolName=" + t.schoolName + "&account=" + t.account + "&password=" + t.password + "&whitchone=" + a + "&miaoshua=" + t.miaoshua).then(function(t) {
                                        console.log(t)
                                    }).catch(function(t) {
                                        console.log(t)
                                    })
                                })
                            }
                        },
                        getUrlConfig: function(t) {
                            for (var e = null, a = 0; a < this.urlConfig.length; a++) {
                                var l = this.urlConfig[a];
                                if (l.platformType == t) {
                                    e = l;
                                    break
                                }
                            }
                            return e
                        },
                        delStatus: function(t, e) {
                            var a = this;
                            t.status = e, this.$confirm("此操作将永久删除该信息，无法恢复, 是否继续?", "提示", {
                                confirmButtonText: "确定",
                                cancelButtonText: "取消",
                                type: "warning"
                            }).then(function() {
                                console.info(t), Object(i["f"])("id=" + t.id).then(function(t) {
                                    a.getList(), a.$message({
                                        type: "info",
                                        message: t.msg
                                    })
                                }).catch(function(t) {
                                    console.log(t)
                                })
                            }).catch(function() {
                                a.$message({
                                    type: "info",
                                    message: "已取消删除"
                                })
                            })
                        },
                        sortChange: function(t) {
                            var e = t.prop,
                                a = t.order;
                            this.sortBy(e, a)
                        },
                        sortBy: function(t, e) {
                            "platformType" == t ? t = "platform_type" : "schoolName" == t ? t = "school_name" : "createTime" == t ? t = "create_time" : "updateTime" == t ? t = "update_time" : "runStatus" == t && (t = "run_status"), "ascending" === e ? (this.listQuery.sort = "" + t, this.listQuery.sortType = "asc") : (this.listQuery.sort = "" + t, this.listQuery.sortType = "desc"), null == t && (this.listQuery.sort = "create_time", this.listQuery.sortType = "desc"), this.handleFilter()
                        },
                        resetTemp: function() {
                            this.temp = {
                                id: void 0,
                                importance: 1,
                                remark: "",
                                timestamp: new Date,
                                title: "",
                                status: "published",
                                type: ""
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
                                e && (t.temp.id = parseInt(100 * Math.random()) + 1024, t.temp.author = "vue-element-admin", createArticle(t.temp).then(function() {
                                    t.list.unshift(t.temp), t.dialogFormVisible = !1, t.$notify({
                                        title: "Success",
                                        message: "Created Successfully",
                                        type: "success",
                                        duration: 2e3
                                    })
                                }))
                            })
                        },
                        handleUpdate: function(t) {
                            var e = this;
                            this.temp = Object.assign({}, t), this.temp.timestamp = new Date(this.temp.timestamp), this.dialogStatus = "update", this.dialogFormVisible = !0, this.$nextTick(function() {
                                e.$refs["dataForm"].clearValidate()
                            })
                        },
                        updateData: function() {
                            var t = this;
                            this.$refs["dataForm"].validate(function(e) {
                                if (e) {
                                    var a = Object.assign({}, t.temp);
                                    a.timestamp = +new Date(a.timestamp), updateArticle(a).then(function() {
                                        var e = !0,
                                            a = !1,
                                            l = void 0;
                                        try {
                                            for (var s, i = t.list[Symbol.iterator](); !(e = (s = i.next()).done); e = !0) {
                                                var r = s.value;
                                                if (r.id === t.temp.id) {
                                                    var n = t.list.indexOf(r);
                                                    t.list.splice(n, 1, t.temp);
                                                    break
                                                }
                                            }
                                        } catch (o) {
                                            a = !0, l = o
                                        } finally {
                                            try {
                                                e || null == i.return || i.return()
                                            } finally {
                                                if (a) throw l
                                            }
                                        }
                                        t.dialogFormVisible = !1, t.$notify({
                                            title: "Success",
                                            message: "Update Successfully",
                                            type: "success",
                                            duration: 2e3
                                        })
                                    })
                                }
                            })
                        },
                        handleDelete: function(t) {
                            this.$notify({
                                title: "Success",
                                message: "Delete Successfully",
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
                            this.downloadLoading = !0, Promise.all([a.e("chunk-e69e90f4"), a.e("chunk-58293907")]).then(a.bind(null, "4bf8d")).then(function(e) {
                                var a = ["timestamp", "title", "type", "importance", "status"],
                                    l = ["timestamp", "title", "type", "importance", "status"],
                                    s = t.formatJson(l, t.list);
                                e.export_json_to_excel({
                                    header: a,
                                    data: s,
                                    filename: "table-list"
                                }), t.downloadLoading = !1
                            })
                        },
                        formatJson: function(t, e) {
                            return e.map(function(e) {
                                return t.map(function(t) {
                                    return "timestamp" === t ? Object(n["d"])(e[t]) : e[t]
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
                v = (a("2f38"), a("2877")),
                h = Object(v["a"])(f, l, s, !1, null, null, null);
            e["default"] = h.exports
        },
        "2f38": function(t, e, a) {
            "use strict";
            var l = a("e7d8"),
                s = a.n(l);
            s.a
        },
        e7d8: function(t, e, a) {}
    }
]);