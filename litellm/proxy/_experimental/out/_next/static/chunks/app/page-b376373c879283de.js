(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8598:function(e,r,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,7476))},7476:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return F}});var n=t(3827),l=t(4090);let s=async(e,r,t,n)=>{try{console.log("Form Values in keyCreateCall:",n);let l=await fetch("".concat(e,"/key/generate"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({user_id:t,...n})});if(!l.ok){let e=await l.json();throw console.error("Error response from the server:",e),Error("Network response was not ok")}let s=await l.json();return console.log("API Response:",s),s}catch(e){throw console.error("Failed to create key:",e),e}},o=async(e,r,t)=>{try{let n=await fetch("".concat(e,"/key/delete"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({keys:[t]})});if(!n.ok)throw Error("Network response was not ok");let l=await n.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}},a=async(e,r,t)=>{try{let n=await fetch("".concat(e,"/user/info?user_id=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"}});if(!n.ok)throw Error("Network response was not ok");let l=await n.json();return console.log(l),l}catch(e){throw console.error("Failed to create key:",e),e}};var i=t(384),c=t(6453),d=t(2179),h=t(1801),u=t(6776),x=t(2902),j=t(588),y=t(7171),m=t(9714),p=t(8707),Z=t(1861);let{Option:k}=u.default;var g=e=>{let{userID:r,accessToken:t,proxyBaseUrl:o,data:a,setData:u}=e,[k]=x.Z.useForm(),[g,f]=(0,l.useState)(!1),[w,b]=(0,l.useState)(null),C=()=>{f(!1),k.resetFields()},S=()=>{f(!1),b(null),k.resetFields()},v=async e=>{try{j.ZP.info("Making API Call"),e.models&&""!==e.models.trim()?e.models=e.models.split(",").map(e=>e.trim()):e.models=[],f(!0);let n=await s(o,t,r,e);u(e=>e?[...e,n]:[n]),b(n.key),j.ZP.success("API Key Created"),k.resetFields()}catch(e){console.error("Error creating the key:",e)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(d.Z,{className:"mx-auto",onClick:()=>f(!0),children:"+ Create New Key"}),(0,n.jsx)(y.Z,{title:"Create Key",visible:g,width:800,footer:null,onOk:C,onCancel:S,children:(0,n.jsxs)(x.Z,{form:k,onFinish:v,labelCol:{span:6},wrapperCol:{span:16},labelAlign:"left",children:[(0,n.jsx)(x.Z.Item,{label:"Key Name",name:"key_alias",children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)(x.Z.Item,{label:"Models (Comma Separated). Eg: gpt-3.5-turbo,gpt-4",name:"models",children:(0,n.jsx)(m.Z,{placeholder:"gpt-4,gpt-3.5-turbo"})}),(0,n.jsx)(x.Z.Item,{label:"Max Budget (USD)",name:"max_budget",children:(0,n.jsx)(p.Z,{step:.01,precision:2,width:200})}),(0,n.jsx)(x.Z.Item,{label:"Duration (eg: 30s, 30h, 30d)",name:"duration",children:(0,n.jsx)(m.Z,{})}),(0,n.jsx)(x.Z.Item,{label:"Metadata",name:"metadata",children:(0,n.jsx)(m.Z.TextArea,{rows:4,placeholder:"Enter metadata as JSON"})}),(0,n.jsx)("div",{style:{textAlign:"right",marginTop:"10px"},children:(0,n.jsx)(Z.ZP,{htmlType:"submit",children:"Create Key"})})]})}),w&&(0,n.jsx)(y.Z,{title:"Save your key",visible:g,onOk:C,onCancel:S,footer:null,children:(0,n.jsxs)(c.Z,{numItems:1,className:"gap-2 w-full",children:[(0,n.jsx)(i.Z,{numColSpan:1,children:(0,n.jsxs)("p",{children:["Please save this secret key somewhere safe and accessible. For security reasons, ",(0,n.jsx)("b",{children:"you will not be able to view it again"})," ","through your LiteLLM account. If you lose this secret key, you will need to generate a new one."]})}),(0,n.jsx)(i.Z,{numColSpan:1,children:null!=w?(0,n.jsxs)(h.Z,{children:["API Key: ",w]}):(0,n.jsx)(h.Z,{children:"Key being created, this might take 30s"})})]})})]})},f=t(3393),w=t(3810),b=t(1244),C=t(827),S=t(3851),v=t(2044),E=t(4167),I=t(4480),N=t(2287),D=t(2440),P=e=>{let{userID:r,accessToken:t,proxyBaseUrl:l,data:s,setData:a}=e,i=async e=>{if(null!=s)try{await o(l,t,e);let r=s.filter(r=>r.token!==e);a(r)}catch(e){console.error("Error deleting the key:",e)}};if(null!=s)return console.log("RERENDER TRIGGERED"),(0,n.jsxs)(w.Z,{className:"w-full mx-auto flex-auto overflow-y-auto max-h-[50vh] mb-4",children:[(0,n.jsx)(D.Z,{children:"API Keys"}),(0,n.jsxs)(C.Z,{className:"mt-5",children:[(0,n.jsx)(E.Z,{children:(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(I.Z,{children:"Secret Key"}),(0,n.jsx)(I.Z,{children:"Spend (USD)"}),(0,n.jsx)(I.Z,{children:"Key Budget (USD)"}),(0,n.jsx)(I.Z,{children:"Expires"})]})}),(0,n.jsx)(S.Z,{children:s.map(e=>(console.log(e),(0,n.jsxs)(N.Z,{children:[(0,n.jsx)(v.Z,{children:null!=e.key_name?(0,n.jsx)(h.Z,{children:e.key_name}):(0,n.jsx)(h.Z,{children:e.token})}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(h.Z,{children:e.spend})}),(0,n.jsx)(v.Z,{children:null!=e.max_budget?(0,n.jsx)(h.Z,{children:e.max_budget}):(0,n.jsx)(h.Z,{children:"Unlimited Budget"})}),(0,n.jsx)(v.Z,{children:null!=e.expires?(0,n.jsx)(h.Z,{children:e.expires}):(0,n.jsx)(h.Z,{children:"Never expires"})}),(0,n.jsx)(v.Z,{children:(0,n.jsx)(b.Z,{onClick:()=>i(e.token),icon:f.Z,size:"xs"})})]},e.token)))})]})]})},_=t(891),A=()=>{let[e,r]=(0,l.useState)(""),[t,s]=(0,l.useState)(!1),o="".concat(window.location.href,"?proxyBaseUrl=").concat(e);return(0,n.jsx)("div",{children:(0,n.jsxs)(w.Z,{decoration:"top",decorationColor:"blue",style:{width:"1000px"},children:[(0,n.jsx)(h.Z,{children:"Admin Configuration"}),(0,n.jsx)("label",{htmlFor:"proxyUrl",children:"Enter Proxy URL:"}),(0,n.jsx)(_.Z,{type:"text",id:"proxyUrl",value:e,onChange:e=>{r(e.target.value),s(!1)},placeholder:"https://your-proxy-endpoint.com"}),(0,n.jsx)(d.Z,{onClick:()=>{s(!0)},className:"gap-2",children:"Save"}),t&&(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z,{numItems:1,className:"gap-2",children:[(0,n.jsx)(i.Z,{children:(0,n.jsxs)("p",{children:["Proxy Admin UI (Save this URL): ",o]})}),(0,n.jsx)(i.Z,{children:(0,n.jsxs)("p",{children:["Get Started with Proxy Admin UI  \uD83D\uDC49",(0,n.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",style:{color:"blue",textDecoration:"underline"},children:o})]})})]})})]})})},U=t(7907),T=t(7963),F=()=>{let[e,r]=(0,l.useState)(null),t=(0,U.useSearchParams)(),s=t.get("userID"),o=t.get("proxyBaseUrl"),d=t.get("token"),[h,u]=(0,l.useState)(null);if((0,l.useEffect)(()=>{if(d){let e=(0,T.o)(d);e&&(console.log("Decoded token:",e),console.log("Decoded key:",e.key),u(e.key))}s&&h&&o&&!e&&(async()=>{try{let e=await a(o,h,s);r(e.keys)}catch(e){console.error("There was an error fetching the data",e)}})()},[s,d,h,o,e]),null==o)return(0,n.jsx)("div",{children:(0,n.jsx)(A,{})});if(null==s||null==d){let e=o.endsWith("/")?o:o+"/";return window.location.href="".concat(e,"sso/key/generate"),null}return null==h?null:(0,n.jsx)(c.Z,{numItems:1,className:"gap-0 p-10 h-[75vh] w-full",children:(0,n.jsxs)(i.Z,{numColSpan:1,children:[(0,n.jsx)(P,{userID:s,accessToken:h,proxyBaseUrl:o,data:e,setData:r}),(0,n.jsx)(g,{userID:s,accessToken:h,proxyBaseUrl:o,data:e,setData:r})]})})}}},function(e){e.O(0,[291,971,69,744],function(){return e(e.s=8598)}),_N_E=e.O()}]);