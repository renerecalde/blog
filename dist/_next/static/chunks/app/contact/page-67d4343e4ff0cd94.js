(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{5106:function(e,t,s){Promise.resolve().then(s.bind(s,9589))},9589:function(e,t,s){"use strict";s.d(t,{default:function(){return o}});var a=s(2731),l=s(6457),o=()=>{let{register:e,handleSubmit:t}=(0,l.cI)();return(0,a.jsxs)("form",{onSubmit:t(function(e){!function(e){fetch("/api/email",{method:"POST",body:JSON.stringify(e)}).then(e=>e.json()).then(e=>{alert(e.message)}).catch(e=>{alert(e)})}(e)}),children:[(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("label",{htmlFor:"name",className:"mb-3 block text-base font-medium text-black",children:"Full Name"}),(0,a.jsx)("input",{type:"text",placeholder:"Full Name",className:"w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md",...e("name",{required:!0})})]}),(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("label",{htmlFor:"email",className:"mb-3 block text-base font-medium text-black",children:"Email Address"}),(0,a.jsx)("input",{type:"email",placeholder:"example@domain.com",className:"w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md",...e("email",{required:!0})})]}),(0,a.jsxs)("div",{className:"mb-5",children:[(0,a.jsx)("label",{htmlFor:"message",className:"mb-3 block text-base font-medium text-black",children:"Message"}),(0,a.jsx)("textarea",{rows:4,placeholder:"Type your message",className:"w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-blue-500 focus:shadow-md",...e("message",{required:!0})})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{className:"hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none",children:"Submit"})})]})}}},function(e){e.O(0,[457,898,993,744],function(){return e(e.s=5106)}),_N_E=e.O()}]);