(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3r9f":function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c("kt0X"),n=c("zyTK"),o=c("2VOh"),s=c("fXoL");class a{constructor(e){this.store=e,this.companies$=this.store.pipe(Object(r.u)(n.a)),console.log("My store companies"),console.log(e)}addCompany(e){this.store.dispatch(Object(o.a)({company:e}))}updateCompany(e){this.store.dispatch(Object(o.h)({company:e}))}deleteCompany(e){this.store.dispatch(Object(o.c)({id:e}))}getCompanyById(e){return console.log("getCompanyById "+e),this.store.pipe(Object(r.u)(n.c(e)))}getCompanyByCredentials(e,t){return console.log("getCompanyByCredentials "+e),this.store.pipe(Object(r.u)(n.b(e,t)))}getCompanyByUsername(e){return console.log("getCompanyByUsername "+e),this.store.pipe(Object(r.u)(n.d(e)))}}a.\u0275fac=function(e){return new(e||a)(s.qc(r.h))},a.\u0275prov=s.cc({token:a,factory:a.\u0275fac})},"43yu":function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c("kt0X"),n=c("P+M7"),o=c("PRMc"),s=c("fXoL");class a{constructor(e){this.store=e,this.offers$=this.store.pipe(Object(r.u)(n.a)),console.log("My store offers"),console.log(e)}addOffer(e){this.store.dispatch(Object(o.a)({offer:e}))}updateOffer(e){this.store.dispatch(Object(o.h)({offer:e}))}deleteOffer(e){this.store.dispatch(Object(o.c)({id:e}))}getOfferById(e){return console.log("getOfferById"),this.store.pipe(Object(r.u)(n.b(e)))}}a.\u0275fac=function(e){return new(e||a)(s.qc(r.h))},a.\u0275prov=s.cc({token:a,factory:a.\u0275fac})},"8SXD":function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var r=c("LRne"),n=c("JX91"),o=c("eIep"),s=c("lJxs"),a=c("wO+i"),i=c("JIr8"),O=c("snw9"),u=c("PRMc"),f=c("fXoL"),b=c("A5HK");class p{constructor(e,t){this.actions$=e,this.offersService=t,this.loadAll$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.f),Object(n.a)(Object(u.f)()),Object(o.a)(()=>this.offersService.getOffers().pipe(Object(s.a)(e=>Object(u.g)({offers:e})))))),this.create$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.a),Object(a.a)("offer"),Object(o.a)(e=>this.offersService.createOffer(e).pipe(Object(s.a)(e=>Object(u.b)({offer:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"CREATE",error:e}})))))))),this.update$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.h),Object(o.a)(({offer:e})=>this.offersService.updateOffer(e).pipe(Object(s.a)(()=>Object(u.i)({offer:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}})))))))),this.delete$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.c),Object(a.a)("id"),Object(o.a)(e=>this.offersService.removeOffer(e).pipe(Object(a.a)("id"),Object(s.a)(e=>Object(u.d)({id:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}}))))))))}}p.\u0275fac=function(e){return new(e||p)(f.qc(O.a),f.qc(b.a))},p.\u0275prov=f.cc({token:p,factory:p.\u0275fac})},A5HK:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var r=c("70Mc"),n=c("fXoL"),o=c("tk/3");class s{constructor(e){this.http=e}getOffers(){return this.http.get(r.a.API_ENDPOINT_OFFERS)}createOffer(e){return this.http.post(r.a.API_ENDPOINT_OFFERS,e)}updateOffer(e){return this.http.put(r.a.API_ENDPOINT_OFFERS,e)}removeOffer(e){return this.http.delete(`${r.a.API_ENDPOINT_OFFERS}/${e}`)}}s.\u0275fac=function(e){return new(e||s)(n.qc(o.b))},s.\u0275prov=n.cc({token:s,factory:s.\u0275fac,providedIn:"root"})},HXUq:function(e,t,c){"use strict";function r(e){return e.value&&!e.value.startsWith(" ")&&!e.value.endsWith(" ")?null:{invalidName:{valid:!1,value:e.value}}}c.d(t,"a",(function(){return r}))},"P+M7":function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"a",(function(){return f})),c.d(t,"b",(function(){return b}));var r=c("PRMc"),n=c("EVqC"),o=c("kt0X");const s=Object(n.a)({selectId:e=>e.id,sortComparer:!1}),a=Object(o.q)({ids:[],entities:{0:{}}},Object(o.s)(r.g,(e,{offers:t})=>s.setAll(t,e)),Object(o.s)(r.b,(e,{offer:t})=>(console.log("addOfferSuccess"),console.log(t),s.addOne(t,e))),Object(o.s)(r.i,(e,{offer:t})=>(console.log("updateOfferSuccess"),console.log(t),s.updateOne({id:t.id,changes:t},e))),Object(o.s)(r.d,(e,{id:t})=>s.removeOne(t,e)));function i(e,t){return Object(o.m)({offers:a})(e,t)}const O=Object(o.p)("offers"),u=Object(o.r)(O,e=>e.offers),{selectAll:f}=s.getSelectors(u),b=e=>Object(o.r)(u,(e=>t=>t.entities[e])(e))},PRMc:function(e,t,c){"use strict";c.d(t,"f",(function(){return o})),c.d(t,"g",(function(){return s})),c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return i})),c.d(t,"h",(function(){return O})),c.d(t,"i",(function(){return u})),c.d(t,"d",(function(){return f})),c.d(t,"c",(function(){return b})),c.d(t,"e",(function(){return p}));var r,n=c("kt0X");!function(e){e.LOAD_ALL_OFFERS="[Offer] Add all offers",e.LOAD_ALL_OFFER_SUCCESS="[Offer] Add all offers success",e.CREATE_OFFER="[Offer] Create offer",e.CREATE_OFFER_SUCCESS="[Offer] Create offer success",e.OFFER_FAILED="[Offer] failure",e.UPDATE_OFFER="[Offer] Update offer",e.UPDATE_OFFER_SUCCESS="[Offer] Update offer success",e.DELETE_OFFER="[Offer] Delete offer",e.DELETE_OFFER_SUCCESS="[Offer] Delete offer success"}(r||(r={}));const o=Object(n.o)(r.LOAD_ALL_OFFERS),s=Object(n.o)(r.LOAD_ALL_OFFER_SUCCESS,Object(n.t)()),a=Object(n.o)(r.CREATE_OFFER,Object(n.t)()),i=Object(n.o)(r.CREATE_OFFER_SUCCESS,Object(n.t)()),O=Object(n.o)(r.UPDATE_OFFER,Object(n.t)()),u=Object(n.o)(r.UPDATE_OFFER_SUCCESS,Object(n.t)()),f=Object(n.o)(r.DELETE_OFFER_SUCCESS,Object(n.t)()),b=Object(n.o)(r.DELETE_OFFER,Object(n.t)()),p=Object(n.o)(r.OFFER_FAILED,Object(n.t)())},QIXu:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var r=c("LRne"),n=c("JX91"),o=c("eIep"),s=c("lJxs"),a=c("wO+i"),i=c("JIr8"),O=c("snw9"),u=c("uf8U"),f=c("fXoL"),b=c("nvtb");class p{constructor(e,t){this.actions$=e,this.studentsService=t,this.loadAll$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.f),Object(n.a)(Object(u.f)()),Object(o.a)(()=>this.studentsService.getStudents().pipe(Object(s.a)(e=>Object(u.g)({users:e})))))),this.create$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.a),Object(a.a)("user"),Object(o.a)(e=>this.studentsService.createStudent(e).pipe(Object(s.a)(e=>Object(u.b)({user:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"CREATE",error:e}})))))))),this.update$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.h),Object(o.a)(({user:e})=>this.studentsService.updateStudent(e).pipe(Object(s.a)(()=>Object(u.i)({user:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}})))))))),this.delete$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.c),Object(a.a)("id"),Object(o.a)(e=>this.studentsService.removeStudent(e).pipe(Object(a.a)("id"),Object(s.a)(e=>Object(u.d)({id:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}}))))))))}}p.\u0275fac=function(e){return new(e||p)(f.qc(O.a),f.qc(b.a))},p.\u0275prov=f.cc({token:p,factory:p.\u0275fac})},eyTg:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var r=c("kt0X"),n=c("zk9Z"),o=c("uf8U"),s=c("fXoL");class a{constructor(e){this.store=e,this.users$=this.store.pipe(Object(r.u)(n.a)),console.log("My store "),console.log(e)}addUser(e){this.store.dispatch(Object(o.a)({user:e}))}updateUser(e){this.store.dispatch(Object(o.h)({user:e}))}deleteUser(e){this.store.dispatch(Object(o.c)({id:e}))}getUserById(e){return console.log("getUserById"),this.store.pipe(Object(r.u)(n.c(e)))}getUserByCredentials(e,t){return console.log("getUserByCredentials"),this.store.pipe(Object(r.u)(n.b(e,t)))}getUserByUsername(e){return console.log("getUserByUsername"),this.store.pipe(Object(r.u)(n.d(e)))}}a.\u0275fac=function(e){return new(e||a)(s.qc(r.h))},a.\u0275prov=s.cc({token:a,factory:a.\u0275fac})},ijts:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var r=c("70Mc"),n=c("fXoL"),o=c("tk/3");class s{constructor(e){this.http=e}getCompanies(){return console.log("getCompanies"),this.http.get(r.a.API_ENDPOINT_COMPANIES)}createCompany(e){return console.log("createCompany"),this.http.post(r.a.API_ENDPOINT_COMPANIES,e)}updateCompany(e){return console.log("updateCompany"),this.http.put(r.a.API_ENDPOINT_COMPANIES,e)}removeCompany(e){return console.log("removeCompany"),this.http.delete(`${r.a.API_ENDPOINT_COMPANIES}/${e}`)}}s.\u0275fac=function(e){return new(e||s)(n.qc(o.b))},s.\u0275prov=n.cc({token:s,factory:s.\u0275fac,providedIn:"root"})},nvtb:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var r=c("70Mc"),n=c("fXoL"),o=c("tk/3");class s{constructor(e){this.http=e}getStudents(){return console.log("getStudents"),this.http.get(r.a.API_ENDPOINT_USER)}createStudent(e){return console.log("createStudent"),this.http.post(r.a.API_ENDPOINT_USER,e)}updateStudent(e){return console.log("updateStudent"),this.http.put(r.a.API_ENDPOINT_USER,e)}removeStudent(e){return console.log("removeStudent"),this.http.delete(`${r.a.API_ENDPOINT_USER}/${e}`)}}s.\u0275fac=function(e){return new(e||s)(n.qc(o.b))},s.\u0275prov=n.cc({token:s,factory:s.\u0275fac,providedIn:"root"})},oo2L:function(e,t,c){"use strict";c.d(t,"a",(function(){return p}));var r=c("LRne"),n=c("JX91"),o=c("eIep"),s=c("lJxs"),a=c("wO+i"),i=c("JIr8"),O=c("snw9"),u=c("2VOh"),f=c("fXoL"),b=c("ijts");class p{constructor(e,t){this.actions$=e,this.companiesService=t,this.loadAll$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.f),Object(n.a)(Object(u.f)()),Object(o.a)(()=>this.companiesService.getCompanies().pipe(Object(s.a)(e=>Object(u.g)({companies:e})))))),this.create$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.a),Object(a.a)("company"),Object(o.a)(e=>this.companiesService.createCompany(e).pipe(Object(s.a)(e=>Object(u.b)({company:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"CREATE",error:e}})))))))),this.update$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.h),Object(o.a)(({company:e})=>this.companiesService.updateCompany(e).pipe(Object(s.a)(()=>Object(u.i)({company:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}})))))))),this.delete$=Object(O.c)(()=>this.actions$.pipe(Object(O.d)(u.c),Object(a.a)("id"),Object(o.a)(e=>this.companiesService.removeCompany(e).pipe(Object(a.a)("id"),Object(s.a)(e=>Object(u.d)({id:e})),Object(i.a)(e=>(alert(e.message),Object(r.a)(Object(u.e)({err:{concern:"UPDATE",error:e}}))))))))}}p.\u0275fac=function(e){return new(e||p)(f.qc(O.a),f.qc(b.a))},p.\u0275prov=f.cc({token:p,factory:p.\u0275fac})},zk9Z:function(e,t,c){"use strict";c.d(t,"e",(function(){return o})),c.d(t,"a",(function(){return i})),c.d(t,"c",(function(){return O})),c.d(t,"b",(function(){return u})),c.d(t,"d",(function(){return f}));var r=c("0O7Z"),n=c("kt0X");function o(e,t){return Object(n.m)({users:r.d})(e,t)}const s=Object(n.p)("users"),a=Object(n.r)(s,e=>e.users),{selectAll:i}=r.e.getSelectors(a),O=e=>Object(n.r)(a,r.b(e)),u=(e,t)=>Object(n.r)(a,r.a(e,t)),f=e=>Object(n.r)(a,r.c(e))},zyTK:function(e,t,c){"use strict";c.d(t,"e",(function(){return o})),c.d(t,"a",(function(){return i})),c.d(t,"c",(function(){return O})),c.d(t,"b",(function(){return u})),c.d(t,"d",(function(){return f}));var r=c("2nga"),n=c("kt0X");function o(e,t){return Object(n.m)({companies:r.b})(e,t)}const s=Object(n.p)("companies"),a=Object(n.r)(s,e=>e.companies),{selectAll:i}=r.a.getSelectors(a),O=e=>Object(n.r)(a,r.d(e)),u=(e,t)=>Object(n.r)(a,r.c(e,t)),f=e=>Object(n.r)(a,r.e(e))}}]);
//# sourceMappingURL=common-es2015.3fc8da3f573641a930a9.js.map