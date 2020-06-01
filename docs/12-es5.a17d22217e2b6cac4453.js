function _classCallCheck(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,c){for(var a=0;a<c.length;a++){var n=c[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,c,a){return c&&_defineProperties(e.prototype,c),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{oq8T:function(e,c,a){"use strict";a.r(c),a.d(c,"CompanyProfileModule",(function(){return K}));var n=a("ofXK"),r=a("3Pt+"),t=a("PCNd"),o=a("kt0X"),m=a("snw9"),l=a("tyNb"),i=a("0IaG"),p=a("dQXc"),s=a("HXUq"),d=a("fXoL"),u=a("3r9f"),f=a("Wp6s"),g=a("kmnG"),h=a("qFsG"),y=a("d3UM"),v=a("TGoP"),b=a("FKr1");function D(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.pattern," ")}}function R(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.namelength," ")}}function C(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.spaces," ")}}function w(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.pattern," ")}}function F(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.namelength," ")}}function M(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.spaces," ")}}function P(e,c){if(1&e&&(d.mc(0,"mat-option",22),d.Rc(1),d.lc()),2&e){var a=c.$implicit;d.Dc("value",a),d.Ub(1),d.Sc(a)}}function U(e,c){if(1&e&&(d.mc(0,"mat-option",22),d.Rc(1),d.lc()),2&e){var a=c.$implicit;d.Dc("value",a),d.Ub(1),d.Sc(a)}}function I(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.pattern," ")}}function E(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.namelength," ")}}function k(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.spaces," ")}}function T(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.pattern," ")}}function x(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.namelength," ")}}function O(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.spaces," ")}}function L(e,c){if(1&e&&(d.mc(0,"mat-error"),d.Rc(1),d.lc()),2&e){var a=d.yc();d.Ub(1),d.Tc(" ",a.errors.email," ")}}function N(e,c){1&e&&(d.mc(0,"mat-error"),d.Rc(1,"This is an "),d.mc(2,"strong"),d.Rc(3,"invalid"),d.lc(),d.Rc(4," phone number. "),d.lc())}var _=function(){return{initialCountry:"es"}},Q=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"isErrorState",value:function(e,c){return!(!e||!e.invalid||!e.dirty&&!e.touched)}}]),e}(),S=function(){function e(c,a,n,t){var o=this;_classCallCheck(this,e),this.formBuilder=c,this.companiesStoreFacade=a,this.dialogRef=n,this.provinceList=[],this.townList=[],this.matcher=new Q,this.errors={namelength:"El contenido de este campo debe tener una longitud entre 3 y 55 caracteres",pattern:"Este campo solo debe contener caracteres alfanum\xe9ricos",spaces:"Este campo no debe contener espacios al principio o al final del texto",email:"Por favor, introduce una direcci\xf3n de correo v\xe1lida"},this.company=t,p.forEach((function(e){o.provinceList.push(e.name)})),this.updateTownList(t.address.province.name),this.companyProfileDlgForm=this.formBuilder.group({brand:[t.brand,[r.p.minLength(3),r.p.maxLength(255),s.a,r.p.pattern(/[a-zA-Z0-9&_\.-]/)]],company:[t.company,[r.p.minLength(3),r.p.maxLength(255),s.a,r.p.pattern(/[a-zA-Z0-9&_\.-]/)]],cif:[t.cif,r.p.required],url:[t.url,r.p.required],address:[t.address.street,r.p.required],province:[t.address.province.name,r.p.required],municipe:[t.address.municipe.name,r.p.required],name:[t.contact.name,[r.p.minLength(3),r.p.maxLength(55),s.a,r.p.pattern(/[a-zA-Z0-9&_\.-]/)]],surname:[t.contact.surname,[r.p.minLength(3),r.p.maxLength(55),s.a,r.p.pattern(/[a-zA-Z0-9&_\.-]/)]],phone:[t.contact.phone,r.p.required],username:[t.contact.email,[r.p.required,r.p.email]]}),this.companyProfileDlgForm.get("province").setValue(t.address.province.name),this.companyProfileDlgForm.get("municipe").setValue(t.address.municipe.name)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"hasError",value:function(e){e||""===this.companyProfileDlgForm.value.phone||this.companyProfileDlgForm.get("phone").setErrors(["invalid_cell_phone",!0])}},{key:"close",value:function(){this.dialogRef.close()}},{key:"save",value:function(){var e=this,c={};c.id=this.company.id,c.brand=this.companyProfileDlgForm.get("brand").value,c.company=this.companyProfileDlgForm.get("company").value,c.cif=this.companyProfileDlgForm.get("cif").value,c.url=this.companyProfileDlgForm.get("url").value;var a=p.find((function(c){return c.name===e.companyProfileDlgForm.get("province").value})),n=a.towns.find((function(c){return c.name===e.companyProfileDlgForm.get("municipe").value}));c.address={street:this.companyProfileDlgForm.get("address").value,municipe:n,province:{uid:a.uid,name:a.name}},c.contact={name:this.companyProfileDlgForm.get("name").value,surname:this.companyProfileDlgForm.get("surname").value,phone:this.companyProfileDlgForm.get("phone").value,email:this.companyProfileDlgForm.get("username").value},this.companiesStoreFacade.updateCompany(c),this.dialogRef.close(this.companyProfileDlgForm.value)}},{key:"updateTownList",value:function(e){var c=this,a=p.find((function(c){return c.name===e}));this.townList=[],a.towns.forEach((function(e){c.townList.push(e.name)}))}},{key:"changeTown",value:function(){var e=this.companyProfileDlgForm.get("province").value;this.updateTownList(e)}}]),e}();S.\u0275fac=function(e){return new(e||S)(d.gc(r.c),d.gc(u.a),d.gc(i.g),d.gc(i.a))},S.\u0275cmp=d.ac({type:S,selectors:[["app-company-profile-dialog"]],decls:85,vars:21,consts:[[3,"formGroup"],["mat-card-avatar","",1,"company-logo"],[1,"mat-typography"],["mat-card-title",""],[1,"third-width-field"],["matInput","","type","text","placeholder","Marca Comercial","name","brand","formControlName","brand"],[4,"ngIf"],["matInput","","type","text","placeholder","Raz\xf3n Social","name","company","formControlName","company"],["matInput","","type","text","placeholder","CIF","name","cif","formControlName","cif",3,"errorStateMatcher"],[1,"full-width-field"],["matInput","","type","url","placeholder","https://miempresa.com","name","url","formControlName","url"],["matInput","","type","text","placeholder","Direcci\xf3n","name","address","formControlName","address"],[1,"half-width-field"],["panelClass","formal-theme","formControlName","province",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["panelClass","formal-theme","formControlName","municipe"],["matInput","","type","text","placeholder","Nombre","name","name","formControlName","name"],["matInput","","type","text","placeholder","Apellidos","name","surname","formControlName","surname"],["matInput","","placeholder","Email","name","username","formControlName","username"],["matInput","","ng2TelInput","","formControlName","phone",3,"ng2TelInputOptions","errorStateMatcher","hasError"],[1,"mat-raised-button",3,"click"],[1,"mat-raised-button","mat-primary",3,"click"],[3,"value"]],template:function(e,c){1&e&&(d.mc(0,"mat-dialog-content",0),d.mc(1,"mat-card"),d.mc(2,"mat-card-header"),d.hc(3,"div",1),d.mc(4,"section",2),d.mc(5,"h3",3),d.Rc(6,"Detalles de la empresa"),d.lc(),d.lc(),d.lc(),d.mc(7,"mat-card-content"),d.mc(8,"div"),d.mc(9,"mat-form-field",4),d.mc(10,"mat-label"),d.Rc(11,"Marca comercial"),d.lc(),d.hc(12,"input",5),d.Qc(13,D,2,1,"mat-error",6),d.Qc(14,R,2,1,"mat-error",6),d.Qc(15,C,2,1,"mat-error",6),d.lc(),d.mc(16,"mat-form-field",4),d.mc(17,"mat-label"),d.Rc(18,"Raz\xf3n Social"),d.lc(),d.hc(19,"input",7),d.Qc(20,w,2,1,"mat-error",6),d.Qc(21,F,2,1,"mat-error",6),d.Qc(22,M,2,1,"mat-error",6),d.lc(),d.mc(23,"mat-form-field",4),d.mc(24,"mat-label"),d.Rc(25,"CIF"),d.lc(),d.hc(26,"input",8),d.lc(),d.lc(),d.mc(27,"div"),d.mc(28,"mat-form-field",9),d.mc(29,"mat-label"),d.Rc(30,"URL"),d.lc(),d.hc(31,"input",10),d.lc(),d.lc(),d.mc(32,"div"),d.mc(33,"mat-form-field",9),d.mc(34,"mat-label"),d.Rc(35,"Direcci\xf3n"),d.lc(),d.hc(36,"input",11),d.lc(),d.lc(),d.mc(37,"div"),d.mc(38,"mat-form-field",12),d.mc(39,"mat-label"),d.Rc(40,"Provincia"),d.lc(),d.mc(41,"mat-select",13),d.uc("selectionChange",(function(e){return c.changeTown()})),d.Qc(42,P,2,2,"mat-option",14),d.lc(),d.lc(),d.mc(43,"mat-form-field"),d.mc(44,"mat-label",12),d.Rc(45,"Municipio"),d.lc(),d.mc(46,"mat-select",15),d.Qc(47,U,2,2,"mat-option",14),d.lc(),d.lc(),d.lc(),d.lc(),d.lc(),d.mc(48,"mat-card"),d.mc(49,"mat-card-header"),d.mc(50,"section",2),d.mc(51,"h3",3),d.Rc(52,"Persona de contacto"),d.lc(),d.lc(),d.lc(),d.mc(53,"mat-card-content"),d.mc(54,"div"),d.mc(55,"mat-form-field",12),d.mc(56,"mat-label"),d.Rc(57,"Nombre"),d.lc(),d.hc(58,"input",16),d.Qc(59,I,2,1,"mat-error",6),d.Qc(60,E,2,1,"mat-error",6),d.Qc(61,k,2,1,"mat-error",6),d.lc(),d.mc(62,"mat-form-field",12),d.mc(63,"mat-label"),d.Rc(64,"Apellidos"),d.lc(),d.hc(65,"input",17),d.Qc(66,T,2,1,"mat-error",6),d.Qc(67,x,2,1,"mat-error",6),d.Qc(68,O,2,1,"mat-error",6),d.lc(),d.lc(),d.mc(69,"div"),d.mc(70,"mat-form-field",12),d.mc(71,"mat-label"),d.Rc(72,"Email"),d.lc(),d.hc(73,"input",18),d.Qc(74,L,2,1,"mat-error",6),d.lc(),d.mc(75,"mat-form-field",12),d.mc(76,"mat-label"),d.Rc(77,"Tel\xe9fono de contacto principal"),d.lc(),d.mc(78,"input",19),d.uc("hasError",(function(e){return c.hasError(e)})),d.lc(),d.Qc(79,N,5,0,"mat-error",6),d.lc(),d.lc(),d.lc(),d.lc(),d.lc(),d.mc(80,"mat-dialog-actions"),d.mc(81,"button",20),d.uc("click",(function(e){return c.close()})),d.Rc(82,"Cerrar"),d.lc(),d.mc(83,"button",21),d.uc("click",(function(e){return c.save()})),d.Rc(84,"Guardar"),d.lc(),d.lc()),2&e&&(d.Dc("formGroup",c.companyProfileDlgForm),d.Ub(13),d.Dc("ngIf",c.companyProfileDlgForm.get("brand").hasError("pattern")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("brand").hasError("minlength")||c.companyProfileDlgForm.get("brand").hasError("maxlength")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("brand").hasError("invalidName")),d.Ub(5),d.Dc("ngIf",c.companyProfileDlgForm.get("company").hasError("pattern")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("company").hasError("minlength")||c.companyProfileDlgForm.get("company").hasError("maxlength")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("company").hasError("invalidName")),d.Ub(4),d.Dc("errorStateMatcher",c.matcher),d.Ub(16),d.Dc("ngForOf",c.provinceList),d.Ub(5),d.Dc("ngForOf",c.townList),d.Ub(12),d.Dc("ngIf",c.companyProfileDlgForm.get("name").hasError("pattern")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("name").hasError("minlength")||c.companyProfileDlgForm.get("name").hasError("maxlength")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("name").hasError("invalidName")),d.Ub(5),d.Dc("ngIf",c.companyProfileDlgForm.get("surname").hasError("pattern")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("surname").hasError("minlength")||c.companyProfileDlgForm.get("surname").hasError("maxlength")),d.Ub(1),d.Dc("ngIf",c.companyProfileDlgForm.get("surname").hasError("invalidName")),d.Ub(6),d.Dc("ngIf",c.companyProfileDlgForm.get("username").hasError("email")),d.Ub(4),d.Dc("ng2TelInputOptions",d.Ec(20,_))("errorStateMatcher",c.matcher),d.Ub(1),d.Dc("ngIf",!c.companyProfileDlgForm.get("phone").valid&&c.companyProfileDlgForm.get("phone").touched))},directives:[i.e,r.l,r.f,f.a,f.e,f.c,f.i,f.d,g.c,g.f,h.b,r.b,r.k,r.e,n.k,y.a,n.j,v.a,i.c,g.b,b.o],styles:[".half-width-field{width:31vw;margin-right:3vw}.third-width-field{width:19.5vw;margin-right:3vw}.full-width-field{width:65vw;margin-right:3vw}.mat-card-title{margin-left:0}"],encapsulation:2});var q=a("lJxs"),z=a("eIep"),j=function(){function e(c,a,n){var r=this;_classCallCheck(this,e),this.dialog=c,this.companiesStoreFacade=a,this.route=n,this.company$=this.route.params.pipe(Object(q.a)((function(e){return e.id})),Object(z.a)((function(e){return r.companiesStoreFacade.getCompanyById(e)}))),this.isReadOnly=!1,this.theme="formal-theme",this.company$.subscribe((function(e){e?(r.isReadOnly=!1,r.company=e,r.isReadOnly=!0):r.initialize_company()}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"openDialog",value:function(){var e=new i.d;e.disableClose=!0,e.autoFocus=!0,e.data=this.company,e.panelClass=this.theme,this.dialog.open(S,e).afterClosed().subscribe((function(e){return console.log("closing dialog")}))}},{key:"initialize_company",value:function(){this.company={id:-1,username:"",password:"",psswrequest:!1,brand:"",company:"",cif:"",url:"",address:{street:"",province:{name:"",uid:0},municipe:{name:"",uid:0}},contact:{name:"",surname:"",phone:"",email:""},offers:[]}}}]),e}();j.\u0275fac=function(e){return new(e||j)(d.gc(i.b),d.gc(u.a),d.gc(l.a))},j.\u0275cmp=d.ac({type:j,selectors:[["app-company-profile"]],decls:65,vars:11,consts:[[1,"companyDataForm","formal-theme"],[1,"mat-typography"],["mat-card-title",""],[1,"third-width-field"],["matInput","","type","text","name","brand","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","company","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","cif","readonly","isReadOnly",3,"ngModel","ngModelChange"],[1,"full-width-field"],["matInput","","type","text","name","url","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","address","readonly","isReadOnly",3,"ngModel","ngModelChange"],[1,"half-width-field"],["matInput","","type","text","name","province","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","town","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","name","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","surname","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","mail","name","email","readonly","isReadOnly",3,"ngModel","ngModelChange"],["matInput","","type","text","name","phone","readonly","isReadOnly",3,"ngModel","ngModelChange"],[1,"mat-raised-button","mat-primary",3,"click"]],template:function(e,c){1&e&&(d.mc(0,"form",0),d.mc(1,"mat-card"),d.mc(2,"mat-card-header"),d.mc(3,"section",1),d.mc(4,"h3",2),d.Rc(5,"Datos de la empresa"),d.lc(),d.lc(),d.lc(),d.mc(6,"mat-card-content"),d.mc(7,"div"),d.mc(8,"mat-form-field",3),d.mc(9,"mat-label"),d.Rc(10,"Marca"),d.lc(),d.mc(11,"input",4),d.uc("ngModelChange",(function(e){return c.company.brand=e})),d.lc(),d.lc(),d.mc(12,"mat-form-field",3),d.mc(13,"mat-label"),d.Rc(14,"Raz\xf3n Social"),d.lc(),d.mc(15,"input",5),d.uc("ngModelChange",(function(e){return c.company.company=e})),d.lc(),d.lc(),d.mc(16,"mat-form-field",3),d.mc(17,"mat-label"),d.Rc(18,"CIF"),d.lc(),d.mc(19,"input",6),d.uc("ngModelChange",(function(e){return c.company.cif=e})),d.lc(),d.lc(),d.lc(),d.mc(20,"div"),d.mc(21,"mat-form-field",7),d.mc(22,"mat-label"),d.Rc(23,"URL"),d.lc(),d.mc(24,"input",8),d.uc("ngModelChange",(function(e){return c.company.url=e})),d.lc(),d.lc(),d.lc(),d.mc(25,"div"),d.mc(26,"mat-form-field",7),d.mc(27,"mat-label"),d.Rc(28,"Direcci\xf3n"),d.lc(),d.mc(29,"input",9),d.uc("ngModelChange",(function(e){return c.company.address.street=e})),d.lc(),d.lc(),d.lc(),d.mc(30,"div"),d.mc(31,"mat-form-field",10),d.mc(32,"mat-label"),d.Rc(33,"Provincia"),d.lc(),d.mc(34,"input",11),d.uc("ngModelChange",(function(e){return c.company.address.province.name=e})),d.lc(),d.lc(),d.mc(35,"mat-form-field",10),d.mc(36,"mat-label"),d.Rc(37,"Municipio"),d.lc(),d.mc(38,"input",12),d.uc("ngModelChange",(function(e){return c.company.address.municipe.name=e})),d.lc(),d.lc(),d.lc(),d.lc(),d.lc(),d.mc(39,"mat-card"),d.mc(40,"mat-card-header"),d.mc(41,"section",1),d.mc(42,"h3",2),d.Rc(43,"Persona de contacto"),d.lc(),d.lc(),d.lc(),d.mc(44,"mat-card-content"),d.mc(45,"div"),d.mc(46,"mat-form-field",10),d.mc(47,"mat-label"),d.Rc(48,"Nombre"),d.lc(),d.mc(49,"input",13),d.uc("ngModelChange",(function(e){return c.company.contact.name=e})),d.lc(),d.lc(),d.mc(50,"mat-form-field",10),d.mc(51,"mat-label"),d.Rc(52,"Apellidos"),d.lc(),d.mc(53,"input",14),d.uc("ngModelChange",(function(e){return c.company.contact.surname=e})),d.lc(),d.lc(),d.lc(),d.mc(54,"div"),d.mc(55,"mat-form-field",10),d.mc(56,"mat-label"),d.Rc(57,"Correo electr\xf3nico de contacto"),d.lc(),d.mc(58,"input",15),d.uc("ngModelChange",(function(e){return c.company.contact.email=e})),d.lc(),d.lc(),d.mc(59,"mat-form-field",10),d.mc(60,"mat-label"),d.Rc(61,"Tel\xe9fono de contacto principal"),d.lc(),d.mc(62,"input",16),d.uc("ngModelChange",(function(e){return c.company.contact.phone=e})),d.lc(),d.lc(),d.lc(),d.lc(),d.lc(),d.mc(63,"button",17),d.uc("click",(function(e){return c.openDialog()})),d.Rc(64,"Editar"),d.lc(),d.lc()),2&e&&(d.Ub(11),d.Dc("ngModel",c.company.brand),d.Ub(4),d.Dc("ngModel",c.company.company),d.Ub(4),d.Dc("ngModel",c.company.cif),d.Ub(5),d.Dc("ngModel",c.company.url),d.Ub(5),d.Dc("ngModel",c.company.address.street),d.Ub(5),d.Dc("ngModel",c.company.address.province.name),d.Ub(4),d.Dc("ngModel",c.company.address.municipe.name),d.Ub(11),d.Dc("ngModel",c.company.contact.name),d.Ub(4),d.Dc("ngModel",c.company.contact.surname),d.Ub(5),d.Dc("ngModel",c.company.contact.email),d.Ub(4),d.Dc("ngModel",c.company.contact.phone))},directives:[r.q,r.l,r.m,f.a,f.e,f.i,f.d,g.c,g.f,h.b,r.b,r.k,r.n],styles:[".half-width-field{width:31vw;margin-right:3vw}.third-width-field{width:19.5vw;margin-right:3vw}.full-width-field{width:65vw;margin-right:3vw}.mat-card-title{margin-left:0}"],encapsulation:2});var A=[{path:"",component:j}],G=function e(){_classCallCheck(this,e)};G.\u0275mod=d.ec({type:G}),G.\u0275inj=d.dc({factory:function(e){return new(e||G)},imports:[[l.c.forChild(A)],l.c]});var X=a("zyTK"),B=a("oo2L"),Z=a("AytR"),$=a("B3rN"),J=a("ijts"),K=function e(){_classCallCheck(this,e)};K.\u0275mod=d.ec({type:K}),K.\u0275inj=d.dc({factory:function(e){return new(e||K)},providers:[u.a,J.a],imports:[[n.c,G,r.o,r.g,t.a,o.j.forFeature("companies",X.e),m.b.forFeature([B.a]),Z.a.production?[]:$.a.instrument()]]})}}]);
//# sourceMappingURL=12-es5.a17d22217e2b6cac4453.js.map