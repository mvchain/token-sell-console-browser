webpackJsonp([5],{"W+25":function(e,t,a){t=e.exports=a("BkJT")(!0),t.push([e.i,".user-list[data-v-7c968ad7]{padding:30px}","",{version:3,sources:["D:/njh/token-exchange-protocol-interior-vue/src/views/userManage/basicInfo/index.vue"],names:[],mappings:"AACA,4BACE,YAAc,CACf",file:"index.vue",sourcesContent:["\n.user-list[data-v-7c968ad7] {\n  padding: 30px;\n}\n"],sourceRoot:""}])},j0n9:function(e,t,a){var n=a("W+25");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("ae5a7be4",n,!0)},sapI:function(e,t,a){"use strict";var n=a("4YfN"),r=a.n(n),s=a("9rMa");t.a={name:"basicInfo",data:function(){return{pageNum:1}},computed:r()({},Object(s.b)({userList:"userList"})),mounted:function(){this.getList("pageNum=1&pageSize=11&orderBy=created_at")},methods:{operaRequest:function(e){this.$router.push({path:"userInfo",query:{id:e}})},handleCurrentChange:function(e){this.pageNum=e,this.getList("pageNum="+e+"&pageSize=10&orderBy=created_at")},getList:function(e){var t=this;this.$store.dispatch("orderHandler",e).then(function(){}).catch(function(e){t.$message.error(e)})}}}},t9Sp:function(e,t,a){"use strict";function n(e){a("j0n9")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("sapI"),s=a("vS5V"),o=a("/Xao"),i=n,l=o(r.a,s.a,!1,i,"data-v-7c968ad7",null);t.default=l.exports},vS5V:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-list"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.userList.list}},[a("el-table-column",{attrs:{prop:"id",label:"UID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"邮箱"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderNum",label:"订单数"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[e._v("\n            操作"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(a){e.operaRequest(t.row.id)}}},[e._v("用户详情")])],1)],1)]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"30px","text-align":"center"}},[a("el-pagination",{attrs:{"page-size":10,layout:"prev, pager, next, jumper",total:e.userList.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},r=[],s={render:n,staticRenderFns:r};t.a=s}});
//# sourceMappingURL=5.2675da9c609345b37344.js.map