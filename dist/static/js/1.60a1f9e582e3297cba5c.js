webpackJsonp([1],{"/zd6":function(e,t,r){"use strict";function s(e){r("qz2T")}Object.defineProperty(t,"__esModule",{value:!0});var a=r("g9MG"),i=r("msbF"),o=r("/Xao"),l=s,m=o(a.a,i.a,!1,l,"data-v-6e37dc02",null);t.default=m.exports},"8Xka":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-upload",{attrs:{action:e.imgBase,data:e.imgObj,limit:e.limit,"on-success":e.handleAvatarSuccess,"on-error":e.handleAvatarError,"before-upload":e.beforeAvatarUpload,"file-list":e.fileList,"list-type":"picture"}},[r("span",[e._v(e._s(e.fileList[0]))]),e._v(" "),r("el-button",{attrs:{size:"small",type:"primary"},nativeOn:{click:function(t){e.updateImg(t)}}},[e._v("点击上传")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传"+e._s(e.payload)+"文件，且不超过"+e._s(e.limit)+"M")])],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},DoBY:function(e,t,r){t=e.exports=r("BkJT")(!0),t.push([e.i,".add-project[data-v-6e37dc02]{padding:30px;width:700px}","",{version:3,sources:["D:/njh/token-exchange-protocol-interior-vue/src/views/projectManage/addProject/index.vue"],names:[],mappings:"AACA,8BACE,aAAc,AACd,WAAa,CACd",file:"index.vue",sourcesContent:["\n.add-project[data-v-6e37dc02] {\n  padding: 30px;\n  width: 700px;\n}\n"],sourceRoot:""}])},Nmn3:function(e,t,r){"use strict";var s=r("4YfN"),a=r.n(s),i=r("9rMa");t.a={name:"ossload",props:{limit:Number,fileList:Array,type:String,payload:String},data:function(){return{imgName:"",imgBase:"",imgObj:{name:"",key:"",policy:"",OSSAccessKeyId:"",success_action_status:"200",signature:""}}},computed:a()({},Object(i.b)({ossObj:"ossObj"})),methods:{updateImg:function(){var e=this;this.$store.dispatch("getOssObj").then(function(t){e.imgObj.OSSAccessKeyId=e.ossObj.accessid,e.imgObj.policy=e.ossObj.policy,e.imgObj.signature=e.ossObj.signature,e.imgBase=e.ossObj.host}).catch(function(t){e.$message.error(t)})},random_string:function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",r=t.length,s="",a=0;a<e;a++)s+=t.charAt(Math.floor(Math.random()*r));return s},dateFormat:function(e,t){var r={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in r)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?r[s]:("00"+r[s]).substr((""+r[s]).length)));return t},get_suffix:function(e){var t=e.lastIndexOf("."),r="";return-1!==t&&(r=e.substring(t)),r},calculate_object_name:function(e){var t=new Date,r=this.dateFormat(t,"yyyyMMddhhmmss"),s=this.get_suffix(e);return this.ossObj.dir+r+this.random_string(10)+s},handleAvatarSuccess:function(e,t){this.imageUrl=this.imgBase+"/"+this.imgObj.key,this.$emit("set-img-url",{name:t.name,url:this.imageUrl,type:this.type})},beforeAvatarUpload:function(e){var t=!1;"introduction"===this.type||"leader"===this.type||"cover"===this.type?t="image/jpeg"===e.type||"image/png"===e.type||"image/jpg"===e.type:"white"===this.type&&(t=e.name.includes("pdf"));var r=e.size/1024/1024<this.limit;return this.imgObj.key=this.calculate_object_name(e.name),t||this.$message.error("只支持"+this.payload+"格式!"),r||this.$message.error("上传文件大小不能超过 "+this.limit+"MB!"),this.imgName===e.name?(this.$message.error("请勿重复上传"),!1):(this.imgName=e.name,t&&r)},handleAvatarError:function(e){this.$message.error(e)}}}},TL0E:function(e,t,r){var s=r("clAR");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("8bSs")("6a95fb67",s,!0)},clAR:function(e,t,r){t=e.exports=r("BkJT")(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ossload.vue",sourceRoot:""}])},g9MG:function(e,t,r){"use strict";var s=r("z0xH");t.a={name:"addProject",components:{"pro-oss":s.a},data:function(){return{ruleForm:{contractAddress:"",decimals:"",description:"",ethNumber:"",leaderImageAddress:"",leaderImageName:"",leaderName:"",position:"",projectCoverAddress:"",projectCoverName:"",projectImageAddress:"",projectImageName:"",ratio:"",startTime:"",homepage:"",stopTime:"",title:"",tokenName:"",whitePaperAddress:"",whitePaperName:""},rules:{contractAddress:[{required:!0,message:"请输入合约地址",trigger:"blur"}],decimals:[{required:!0,message:"请输入合约位数",trigger:"blur"}],description:[{required:!0,message:"请输入创始人介绍",trigger:"blur"},{max:500,message:"字数请少于500字",trigger:"blur"}],ethNumber:[{required:!0,message:"请输入ETH总数",trigger:"blur"}],leaderImageAddress:[{required:!0,message:"请上传创始人头像"}],leaderName:[{required:!0,message:"请输入创始人名称",trigger:"blur"}],position:[{required:!0,message:"请输入创始人职务",trigger:"blur"}],projectCoverAddress:[{required:!0,message:"请上传项目封面图片"}],projectImageAddress:[{required:!0,message:"请上传项目介绍图片"}],ratio:[{required:!0,message:"请输入兑换比例",trigger:"blur"}],startTime:[{required:!0,message:"请选择开放时间"}],homepage:[{required:!0,message:"请输入官网地址",trigger:"blur"}],stopTime:[{required:!0,message:"请选择结束时间"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],tokenName:[{required:!0,message:"请币种名称",trigger:"blur"}],whitePaperAddress:[{required:!0,message:"请上传白皮书"}]},fileList:[],intList:[],avoList:[],homeList:[]}},mounted:function(){},methods:{routerHandler:function(e){console.log(e)},getImg:function(e){"introduction"===e.type?(this.ruleForm.projectImageName=e.name,this.ruleForm.projectImageAddress=e.url):"white"===e.type?(this.ruleForm.whitePaperAddress=e.url,this.ruleForm.whitePaperName=e.name):"leader"===e.type?(this.ruleForm.leaderImageAddress=e.url,this.ruleForm.leaderImageName=e.name):"cover"===e.type&&(this.ruleForm.projectCoverAddress=e.url,this.ruleForm.projectCoverName=e.name)},submitForm:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return t.$message.error("请完善表单"),!1;t[e].stopTime=Date.parse(t[e].startTime[1]),t[e].startTime=Date.parse(t[e].startTime[0]),t.$store.dispatch("getAddProject",t[e]).then(function(){t.$router.back(),t.$message.success("创建成功")}).catch(function(e){t.$message.error(e)})})}}}},msbF:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-project"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"币种名称",prop:"tokenName"}},[r("el-input",{model:{value:e.ruleForm.tokenName,callback:function(t){e.$set(e.ruleForm,"tokenName",t)},expression:"ruleForm.tokenName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"合约地址",prop:"contractAddress"}},[r("el-input",{model:{value:e.ruleForm.contractAddress,callback:function(t){e.$set(e.ruleForm,"contractAddress",t)},expression:"ruleForm.contractAddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"位数",prop:"decimals"}},[r("el-input",{model:{value:e.ruleForm.decimals,callback:function(t){e.$set(e.ruleForm,"decimals",t)},expression:"ruleForm.decimals"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"ETH购买总数",prop:"ethNumber"}},[r("el-input",{model:{value:e.ruleForm.ethNumber,callback:function(t){e.$set(e.ruleForm,"ethNumber",t)},expression:"ruleForm.ethNumber"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"兑换比例",prop:"ratio"}},[r("el-input",{model:{value:e.ruleForm.ratio,callback:function(t){e.$set(e.ruleForm,"ratio",t)},expression:"ruleForm.ratio"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"开放购买时间"}},[r("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":["12:00:00"]},model:{value:e.ruleForm.startTime,callback:function(t){e.$set(e.ruleForm,"startTime",t)},expression:"ruleForm.startTime"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"白皮书",prop:"whitePaperAddress"}},[r("pro-oss",{attrs:{fileList:e.fileList,payload:"pdf",limit:10,type:"white"},on:{"set-img-url":e.getImg}})],1),e._v(" "),r("el-form-item",{attrs:{label:"官网",prop:"homepage"}},[r("el-input",{model:{value:e.ruleForm.homepage,callback:function(t){e.$set(e.ruleForm,"homepage",t)},expression:"ruleForm.homepage"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目介绍",prop:"projectImageAddress"}},[r("pro-oss",{attrs:{fileList:e.intList,payload:"image/jpeg/image/png/image/jpg",limit:10,type:"introduction"},on:{"set-img-url":e.getImg}})],1),e._v(" "),r("el-form-item",{attrs:{label:"项目封面",prop:"projectCoverAddress"}},[r("pro-oss",{attrs:{fileList:e.homeList,payload:"image/jpeg/image/png/image/jpg",limit:1,type:"cover"},on:{"set-img-url":e.getImg}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创始人头像",prop:"leaderImageAddress"}},[r("pro-oss",{attrs:{fileList:e.avoList,payload:"image/jpeg/image/png/image/jpg",limit:1,type:"leader"},on:{"set-img-url":e.getImg}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创始人名字",prop:"leaderName"}},[r("el-input",{model:{value:e.ruleForm.leaderName,callback:function(t){e.$set(e.ruleForm,"leaderName",t)},expression:"ruleForm.leaderName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"职位",prop:"position"}},[r("el-input",{model:{value:e.ruleForm.position,callback:function(t){e.$set(e.ruleForm,"position",t)},expression:"ruleForm.position"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.description,callback:function(t){e.$set(e.ruleForm,"description",t)},expression:"ruleForm.description"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){e.$router.back()}}},[e._v("取消")])],1)],1)],1)},a=[],i={render:s,staticRenderFns:a};t.a=i},qz2T:function(e,t,r){var s=r("DoBY");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r("8bSs")("18ae2206",s,!0)},z0xH:function(e,t,r){"use strict";function s(e){r("TL0E")}var a=r("Nmn3"),i=r("8Xka"),o=r("/Xao"),l=s,m=o(a.a,i.a,!1,l,"data-v-61fba490",null);t.a=m.exports}});
//# sourceMappingURL=1.60a1f9e582e3297cba5c.js.map