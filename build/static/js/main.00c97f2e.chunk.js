(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{155:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return O}));var r=n(13),a=n(1),i=n.n(a),c=n(4),o=n(35),s=n(55),u=n(14),l=n(358),b=n(78),d=new o.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new o.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],o=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(c.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(o||!a){e.next=7;break}return Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],o||(s?s.err?(console.log("REST error for",t,s),o=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),o=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,v(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),o=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),x=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:o.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:o.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new o.d.TransactionInstruction({keys:i,programId:b.b,data:e.from([])})},g=function(){var e=Object(c.a)(i.a.mark((function e(t,n,r){var a,c,s,u,l,b,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new o.b(r,t,{preflightCommitment:"recent"}),e.next=3,o.a.fetchIdl(d,a);case 3:return c=e.sent,s=new o.a(c,d,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),b=u.itemsRedeemed.toNumber(),p=l-b,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:b,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate&&u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:b<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(i.a.mark((function e(t,n,a){var c,d,f,g,O,v,y,k,w,S,T,P,M,R,E,A,K;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.c)(a.publicKey,n);case 2:if(c=e.sent[0],!t.state.tokenMint){e.next=9;break}return e.next=6,Object(b.c)(t.state.tokenMint,n);case 6:e.t0=e.sent[0],e.next=10;break;case 9:e.t0=n;case 10:return d=e.t0,f=t.id,g=[],O=[a],v=[],e.t1=o.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=21,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 21:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=x(c,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,c,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=44;break}return e.t12=g,e.next=33,Object(b.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 33:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=44;break}return g.push({pubkey:b.a,isWritable:!1,isSigner:!1}),e.t15=g,e.next=41,Object(b.d)(t.state.gatekeeper.gatekeeperNetwork);case 41:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 44:if(!t.state.whitelistMintSettings){e.next=59;break}return k=new o.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=48,Object(b.c)(k,n);case 48:if(w=e.sent[0],g.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=59;break}return S=o.d.Keypair.generate(),g.push({pubkey:k,isWritable:!0,isSigner:!1}),g.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),O.push(S),e.next=57,t.program.provider.connection.getAccountInfo(w);case 57:e.sent&&(y.push(s.c.createApproveInstruction(s.b,w,S.publicKey,n,[],1)),v.push(s.c.createRevokeInstruction(s.b,w,n,[])));case 59:return t.state.tokenMint&&(T=o.d.Keypair.generate(),O.push(T),g.push({pubkey:d,isWritable:!0,isSigner:!1}),g.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(s.c.createApproveInstruction(s.b,d,T.publicKey,n,[],t.state.price.toNumber())),v.push(s.c.createRevokeInstruction(s.b,d,n,[]))),e.next=62,m(a.publicKey);case 62:return P=e.sent,e.next=65,j(a.publicKey);case 65:return M=e.sent,e.next=68,h(f);case 68:return R=e.sent,E=Object(r.a)(R,2),A=E[0],K=E[1],e.t18=y,e.next=75,t.program.instruction.mintNft(K,{accounts:{candyMachine:f,candyMachineCreator:A,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:M,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:s.b,systemProgram:u.SystemProgram.programId,rent:o.d.SYSVAR_RENT_PUBKEY,clock:o.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:o.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:o.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:g.length>0?g:void 0});case 75:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=77,e.next=80,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,v],[O,[]]);case 80:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 83:e.prev=83,e.t20=e.catch(77),console.log(e.t20);case 86:return e.abrupt("return",[]);case 87:case"end":return e.stop()}}),e,null,[[77,83]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},358:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(18),i=n(1),c=n.n(i),o=n(4),s=n(14),u=n(23);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(o.a)(c.a.mark((function e(t,n,i,o){var l,b,d,f,x,g,j,m,h,O,v,y,k,w,S=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,b=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",d=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},x=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.WalletNotConnectedError;case 7:if(g=[],x){e.next=12;break}return e.next=11,t.getRecentBlockhash(b);case 11:x=e.sent;case 12:j=function(e){var t=i[e],r=o[e];if(0===t.length)return"continue";var c=new s.Transaction;t.forEach((function(e){return c.add(e)})),c.recentBlockhash=x.blockhash,c.setSigners.apply(c,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&c.partialSign.apply(c,Object(a.a)(r)),g.push(c)},m=0;case 14:if(!(m<i.length)){e.next=21;break}if("continue"!==j(m)){e.next=18;break}return e.abrupt("continue",18);case 18:m++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(g);case 23:h=e.sent,O=[],v={breakEarly:!1,i:0},console.log("Signed txns length",h.length,"vs handed in length",i.length),y=c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:h[n]})).then((function(e){var t=e.txid;e.slot;d(t,n)})).catch((function(e){f(h[n],n),l===r.StopOnFailure&&(v.breakEarly=!0,v.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!v.breakEarly){e.next=19;break}return console.log("Died on ",v.i),e.t1=v.i,e.next=16,Promise.all(O);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:O.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),k=0;case 29:if(!(k<h.length)){e.next=37;break}return e.delegateYield(y(k),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:k++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(O);case 40:return e.t1=h.length,e.next=43,Promise.all(O);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(){return(new Date).getTime()/1e3},d=15e3;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(c.a.mark((function e(t){var n,r,a,i,s,u,l,p,f,g,m,O,v;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?d:a,s=n.serialize(),u=b(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(b()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,h(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,j(p,i,r,"recent",!0);case 13:if(g=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!g.err){e.next=19;break}throw console.error(g.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===g||void 0===g?void 0:g.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return m=null,e.prev=28,e.next=31,x(r,n,"single");case 31:m=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!m||!m.err){e.next=47;break}if(!m.logs){e.next=46;break}O=m.logs.length-1;case 39:if(!(O>=0)){e.next=46;break}if(!(v=m.logs[O]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+v.slice("Program log: ".length));case 43:--O,e.next=39;break;case 46:throw new Error(JSON.stringify(m.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,b()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function x(e,t,n){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,o,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),o=i.toString("base64"),s=[o,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(c.a.mark((function e(t,n,r){var a,i,s,u,l,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>3&&void 0!==b[3]?b[3]:"recent",i=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(o.a)(c.a.mark((function e(b,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),a)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!i){e.next=8;break}return Object(o.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return new Promise((function(t){return setTimeout(t,e)}))}},383:function(e,t,n){},384:function(e,t,n){},385:function(e,t){},386:function(e,t){},403:function(e,t){},404:function(e,t){},498:function(e,t){},500:function(e,t){},514:function(e,t){},518:function(e,t){},520:function(e,t){},530:function(e,t){},532:function(e,t){},559:function(e,t){},561:function(e,t){},566:function(e,t){},568:function(e,t){},574:function(e,t){},576:function(e,t){},588:function(e,t){},591:function(e,t){},603:function(e,t){},604:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,u,l,b,d,p,f,x,g,j,m,h,O,v,y,k,w,S,T,P=n(2),M=n.n(P),R=n(42),E=n.n(R),A=(n(383),n(384),n(15)),K=n(1),B=n.n(K),N=n(4),I=n(13),L=n(36),C=n(37),_=n(342),W=n(35),D=n(14),z=n(65),F=n(197),U=n(114),Y=n(357),V=n(634),G=n(644),q=n(639),H=n(643),J=n(642),Z=n(78),Q=n(632),X=n(638),$=n(12),ee=Object(C.a)(Q.a)(r||(r=Object(L.a)(["\n  display: block !important;\n  margin: 0 auto !important;\n  background-color: var(--title-text-color) !important;\n  font-size: 1.2em;\n"]))),te=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isActive,i=e.isSoldOut,c=Object(U.c)(),o=c.requestGatewayToken,s=c.gatewayStatus,u=Object(P.useState)(!1),l=Object(I.a)(u,2),b=l[0],d=l[1],p=Object(P.useState)(!1),f=Object(I.a)(p,2),x=f[0],g=f[1];return Object(P.useEffect)((function(){g(!1),s===U.b.COLLECTING_USER_INFORMATION&&b?g(!0):s===U.b.ACTIVE&&b&&(console.log("Verified human, now minting..."),t(),d(!1))}),[s,b,d,t]),Object($.jsx)(ee,{disabled:(null===n||void 0===n?void 0:n.state.isSoldOut)||i||r||!a||x,onClick:Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!(null===n||void 0===n?void 0:n.state.gatekeeper)||s===U.b.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),d(!0),e.next=5,o();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)||i?"SOLD OUT":a?x?"VERIFYING...":r?Object($.jsx)(X.a,{}):"MINT":(null===n||void 0===n?void 0:n.state.goLiveDate)?"SOON...":"UNAVAILABLE":"CONNECTING..."})},ne=n(155),re=n(87),ae="devnet".toString(),ie=C.a.div(a||(a=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),ce=Object(C.a)(V.a)(i||(i=Object(L.a)(["\n  min-width: 200px;\n  padding: 0px 0px 0px 0px;\n  flex: 1 1 auto;\n"]))),oe=Object(C.a)(ce)(c||(c=Object(L.a)(["\n  text-align: left;\n  padding-top: 0px;\n"]))),se=Object(C.a)(V.a)(o||(o=Object(L.a)(["\n  display: inline-block;\n  background-color: var(--card-background-lighter-color) !important;\n  margin: 5px;\n  padding: 24px;\n"]))),ue=C.a.div(s||(s=Object(L.a)(["\n  button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {\n    color: #464646;\n  }\n\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {\n    -webkit-animation: pulse 1s;\n    animation: pulse 1s;\n    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\n  }\n\n  @-webkit-keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n"]))),le=C.a.div(u||(u=Object(L.a)(["\n  color: black;\n  width: auto;\n  height: 48px;\n  padding: 0 5px 0 16px;\n  min-width: 48px;\n  min-height: auto;\n  border-radius: 24px;\n  background-color: var(--main-text-color);\n  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  border: 0;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: flex-start;\n  gap: 10px;\n\n"]))),be=Object(C.a)(F.b)(l||(l=Object(L.a)(["\nbackground: red;\n"]))),de=C.a.div(b||(b=Object(L.a)(["\n  flex: 0 0 auto;\n\n  img {\n    height: 60px;\n  }\n"]))),pe=C.a.ul(d||(d=Object(L.a)(["\n  list-style: none;\n  display: inline-flex;\n  flex: 1 0 auto;\n\n  li {\n    margin: 0 12px;\n\n    a {\n      color: var(--main-text-color);\n      list-style-image: none;\n      list-style-position: outside;\n      list-style-type: none;\n      outline: none;\n      text-decoration: none;\n      text-size-adjust: 100%;\n      touch-action: manipulation;\n      transition: color 0.3s;\n      padding-bottom: 15px;\n\n      img {\n        max-height: 26px;\n      }\n    }\n\n    a:hover, a:active {\n      color: rgb(131, 146, 161);\n      border-bottom: 4px solid var(--title-text-color);\n    }\n\n  }\n"]))),fe=C.a.a(p||(p=Object(L.a)(["\n  color: var(--title-text-color);\n  border-bottom: 1px solid var(--title-text-color);\n  font-weight: bold;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n  text-size-adjust: 100%;\n  \n  :hover{\n    border-bottom: 2px solid var(--title-text-color);\n  }\n"]))),xe=C.a.ul(f||(f=Object(L.a)(["\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n"]))),ge=C.a.div(x||(x=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-right: 4%;\n  margin-left: 4%;\n  text-align: center;\n  justify-content: center;\n"]))),je=C.a.div(g||(g=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),me=C.a.div(j||(j=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 20px;\n"]))),he=Object(C.a)(G.a)(m||(m=Object(L.a)(["\n  position: absolute;\n  margin: 5px;\n  font-weight: bold;\n  font-size: 1em !important;\n"]))),Oe=C.a.img(h||(h=Object(L.a)(["\n  height: 250px;\n  width: auto;\n  border-radius: 20px;\n"]))),ve=Object(C.a)(q.a)(O||(O=Object(L.a)(["\n  margin: 10px 0;\n  height: 10px !important;\n  border-radius: 5px;\n"]))),ye=C.a.h1(v||(v=Object(L.a)(["\n  margin: 5px auto;\n  text-transform: uppercase;\n  animation: glow 2s ease-in-out infinite alternate;\n  color: var(--main-text-color);\n  @keyframes glow { \n    from {\n      text-shadow: 0 0 60px var(--main-text-color);\n    }\n    to {\n      text-shadow: 0 0 60px var(--title-text-color), 0 0 10px var(--title-text-color);\n    }\n  }\n"]))),ke=C.a.h2(y||(y=Object(L.a)(["\n  color: var(--title-text-color);\n"]))),we=C.a.div(k||(k=Object(L.a)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    max-height: 35px;\n    margin-right: 10px;\n  }\n"]))),Se=function(e){var t,n,r=Object(P.useState)(),a=Object(I.a)(r,2),i=a[0],c=a[1],o=Object(P.useState)(!1),s=Object(I.a)(o,2),u=s[0],l=s[1],b=Object(P.useState)(!1),d=Object(I.a)(b,2),p=d[0],f=d[1],x=Object(P.useState)(""),g=Object(I.a)(x,2),j=g[0],m=g[1],h=Object(P.useState)(0),O=Object(I.a)(h,2),v=O[0],y=O[1],k=Object(P.useState)(0),w=Object(I.a)(k,2),S=w[0],T=w[1],M=Object(P.useState)(0),R=Object(I.a)(M,2),E=R[0],K=R[1],L=Object(P.useState)(!1),C=Object(I.a)(L,2),F=C[0],V=C[1],G=Object(P.useState)(0),q=Object(I.a)(G,2),Q=q[0],X=q[1],ee=Object(P.useState)(0),Se=Object(I.a)(ee,2),Te=Se[0],Pe=Se[1],Me=Object(P.useState)(!1),Re=Object(I.a)(Me,2),Ee=Re[0],Ae=Re[1],Ke=Object(P.useState)(0),Be=Object(I.a)(Ke,2),Ne=Be[0],Ie=Be[1],Le=Object(P.useState)({open:!1,message:"",severity:void 0}),Ce=Object(I.a)(Le,2),_e=Ce[0],We=Ce[1],De=Object(z.c)(),ze=Object(P.useState)(),Fe=Object(I.a)(ze,2),Ue=Fe[0],Ye=Fe[1],Ve=e.rpcHost;function Ge(e){var t=E-1;if(K(t),V(0===t),Ne&&Ne>0){var n=Ne-1;Ie(n),f(n>0)}T(S+1);i&&i>0&&c(i-(Ee?Te:Q)-.012),m("devnet"==ae||"testnet"==ae?"https://explorer.solana.com/address/"+e+"?cluster="+ae:"https://explorer.solana.com/address/"+e),Object(_.a)({particleCount:400,spread:70,origin:{y:.6}})}var qe=function(){var t=Object(N.a)(B.a.mark((function t(){var n,r,a,i,c,o;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,l(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(De&&(null===Ue||void 0===Ue?void 0:Ue.program)&&De.publicKey)){t.next=14;break}return a=W.d.Keypair.generate(),t.next=7,Object(ne.d)(Ue,De.publicKey,a);case 7:if(i=t.sent[0],c={err:!0},!i){t.next=13;break}return t.next=12,Object(ne.b)(i,e.txTimeout,e.connection,"singleGossip",!0);case 12:c=t.sent;case 13:(null===(r=c)||void 0===r?void 0:r.err)?We({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(We({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),Ge(a.publicKey));case 14:t.next=21;break;case 16:t.prev=16,t.t0=t.catch(0),o=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?o="SOLD OUT!":312===t.t0.code&&(o="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?o="SOLD OUT!":t.t0.message.indexOf("0x135")&&(o="Insufficient funds to mint. Please fund your wallet.")):o="Transaction Timeout! Please try again.",We({open:!0,message:o,severity:"error"});case 21:return t.prev=21,l(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,16,21,24]])})));return function(){return t.apply(this,arguments)}}();return Object(P.useEffect)((function(){Object(N.a)(B.a.mark((function t(){var n;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!De){t.next=5;break}return t.next=3,e.connection.getBalance(De.publicKey);case 3:n=t.sent,c(n/D.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[De,e.connection]),Object(P.useEffect)((function(){Object(N.a)(B.a.mark((function t(){var n,r,a,i,c;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(De){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(ne.c)(De,e.candyMachineId,e.connection);case 4:if(n=t.sent,Ye(n),y(n.state.itemsAvailable),K(n.state.itemsRemaining),T(n.state.itemsRedeemed),X(n.state.price.toNumber()/D.LAMPORTS_PER_SOL),Pe(n.state.price.toNumber()/D.LAMPORTS_PER_SOL),!n.state.whitelistMintSettings){t.next=34;break}return Ae(!0),null!==n.state.whitelistMintSettings.discountPrice&&n.state.whitelistMintSettings.discountPrice!==n.state.price&&Pe((null===(r=n.state.whitelistMintSettings.discountPrice)||void 0===r?void 0:r.toNumber())/D.LAMPORTS_PER_SOL),a=0,t.prev=15,t.t0=e.connection,t.next=19,Object(Z.c)(n.state.whitelistMintSettings.mint,De.publicKey);case 19:return t.t1=t.sent[0],t.next=22,t.t0.getTokenAccountBalance.call(t.t0,t.t1);case 22:c=t.sent,a=(null===c||void 0===c||null===(i=c.value)||void 0===i?void 0:i.uiAmount)||0,t.next=30;break;case 26:t.prev=26,t.t2=t.catch(15),console.error(t.t2),a=0;case 30:Ie(a),f(a>0),t.next=35;break;case 34:Ae(!1);case 35:case"end":return t.stop()}}),t,null,[[15,26]])})))()}),[De,e.candyMachineId,e.connection]),Object($.jsxs)("main",{children:[Object($.jsxs)(ge,{children:[Object($.jsxs)(ie,{children:[Object($.jsx)(de,{children:Object($.jsx)(re.b,{to:"/",children:Object($.jsx)("img",{alt:"",src:"logo.png"})})}),Object($.jsxs)(pe,{children:[Object($.jsx)("li",{children:Object($.jsx)(re.b,{to:"/roadmap",style:{fontFamily:"Batman Forever Alternate Cyr",fontSize:22,color:"white"},children:"Roadmap"})}),Object($.jsx)("li",{children:Object($.jsx)(re.b,{to:"/contact",style:{fontFamily:"Batman Forever Alternate Cyr",fontSize:22,color:"white"},children:"Contacts"})})]}),Object($.jsx)(xe,{children:De?Object($.jsxs)(le,{children:[(i||0).toLocaleString()," SOL",Object($.jsx)(be,{})]}):Object($.jsx)(be,{children:Object($.jsx)("img",{src:"phan.png",alt:""})})})]}),Object($.jsx)(ye,{children:p&&Object($.jsx)("div",{children:Object($.jsx)("img",{src:"image (41).png",alt:"",style:{maxWidth:800,width:"100%"}})})}),Object($.jsx)("br",{}),Object($.jsxs)(je,{children:[Object($.jsx)(me,{children:Object($.jsxs)(ce,{elevation:3,children:[Object($.jsx)("h2",{children:"Ghost's collections"}),Object($.jsx)("br",{}),Object($.jsxs)("div",{children:[Object($.jsx)(he,{label:p&&Ee&&Ne>0?Te+" SOL":Q+" SOL"}),Object($.jsx)(Oe,{src:"cool-cats.gif",alt:"NFT To Mint"})]}),Object($.jsx)("br",{}),De&&p&&Ee&&Ne>0&&Object($.jsxs)("h3",{children:["You have ",Ne," whitelist mint(s) remaining."]}),De&&p&&Object($.jsxs)("h3",{children:["TOTAL MINTED : ",S," / ",v]}),De&&p&&Object($.jsx)(ve,{variant:"determinate",value:100-100*E/v}),Object($.jsx)("br",{}),Object($.jsx)(ue,{children:!p&&(null===Ue||void 0===Ue?void 0:Ue.state.goLiveDate)?Object($.jsx)(Y.a,{date:Object(Z.f)(null===Ue||void 0===Ue?void 0:Ue.state.goLiveDate),onMount:function(e){return e.completed&&f(!0)},onComplete:function(){f(!0)},renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object($.jsxs)("div",{className:"contiss",children:[Object($.jsxs)(se,{elevation:1,children:[Object($.jsx)("h1",{children:t}),Object($.jsx)("br",{}),"Days"]}),Object($.jsxs)(se,{elevation:1,children:[Object($.jsx)("h1",{children:n}),Object($.jsx)("br",{}),"Hours"]}),Object($.jsxs)(se,{elevation:1,children:[Object($.jsx)("h1",{children:r}),Object($.jsx)("br",{}),"Mins"]}),Object($.jsxs)(se,{elevation:1,children:[Object($.jsx)("h1",{children:a}),Object($.jsx)("br",{}),"Secs"]})]})}}):De?(null===Ue||void 0===Ue?void 0:Ue.state.gatekeeper)&&De.publicKey&&De.signTransaction?Object($.jsx)(U.a,{wallet:{publicKey:De.publicKey||new D.PublicKey(ne.a),signTransaction:De.signTransaction},gatekeeperNetwork:null===Ue||void 0===Ue||null===(t=Ue.state)||void 0===t||null===(n=t.gatekeeper)||void 0===n?void 0:n.gatekeeperNetwork,clusterUrl:Ve,options:{autoShowModal:!1},children:Object($.jsx)(te,{candyMachine:Ue,isMinting:u,isActive:p,isSoldOut:F,onMint:qe})}):Object($.jsx)(te,{candyMachine:Ue,isMinting:u,isActive:p,isSoldOut:F,onMint:qe}):Object($.jsx)(be,{children:Object($.jsx)("img",{className:"conectwl",src:"CONNECT.png",alt:""})})}),Object($.jsx)("br",{}),De&&p&&j&&Object($.jsx)(fe,{href:j,target:"_blank",children:"View on Solana Explorer"})]})}),Object($.jsx)(me,{children:Object($.jsxs)(oe,{elevation:2,children:[Object($.jsxs)(we,{children:[Object($.jsx)("img",{src:"Sprite-0004.png",alt:""}),Object($.jsx)(ke,{children:"DESCRIPTION "})]}),Object($.jsx)("img",{src:"image (45).png",alt:"",style:{maxWidth:1800,width:"100%"}})]})})]})]}),Object($.jsx)(H.a,{open:_e.open,autoHideDuration:6e3,onClose:function(){return We(Object(A.a)(Object(A.a)({},_e),{},{open:!1}))},children:Object($.jsx)(J.a,{onClose:function(){return We(Object(A.a)(Object(A.a)({},_e),{},{open:!1}))},severity:_e.severity,children:_e.message})})]})},Te=n(139),Pe=n(370),Me=n(640),Re=n(32),Ee=n(635),Ae=C.a.div(w||(w=Object(L.a)(["\n  flex: 0 0 auto;\n\n  img {\n    height: 60px;\n  }\n"]))),Ke=C.a.ul(S||(S=Object(L.a)(["\n  list-style: none;\n  display: inline-flex;\n  flex: 1 0 auto;\n\n  li {\n    margin: 0 12px;\n\n    a {\n      color: var(--main-text-color);\n      list-style-image: none;\n      list-style-position: outside;\n      list-style-type: none;\n      outline: none;\n      text-decoration: none;\n      text-size-adjust: 100%;\n      touch-action: manipulation;\n      transition: color 0.3s;\n      padding-bottom: 15px;\n\n      img {\n        max-height: 26px;\n      }\n    }\n\n    a:hover, a:active {\n      color: rgb(131, 146, 161);\n      border-bottom: 4px solid var(--title-text-color);\n    }\n\n  }\n"]))),Be=C.a.div(T||(T=Object(L.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"])));function Ne(){return Object($.jsxs)(Be,{children:[Object($.jsx)(Ae,{children:Object($.jsx)(re.b,{to:"/",children:Object($.jsx)("img",{alt:"",src:"logo.png"})})}),Object($.jsxs)(Ke,{children:[Object($.jsx)("li",{children:Object($.jsx)(re.b,{to:"/roadmap",style:{fontFamily:"Batman Forever Alternate Cyr",fontSize:22,color:"white"},children:"Roadmap"})}),Object($.jsx)("li",{children:Object($.jsx)(re.b,{to:"/contact",style:{fontFamily:"Batman Forever Alternate Cyr",fontSize:22,color:"white"},children:"Contacts"})})]})]})}function Ie(){return Object($.jsxs)("main",{style:{padding:"1rem 0"},children:[Ne(),Object($.jsxs)("div",{className:"gg",children:[Object($.jsx)(Ee.a,{variant:"h1",component:"h2",children:Object($.jsx)("img",{src:"image (39).png",alt:""})}),Object($.jsx)("img",{src:"image (50).png",alt:"",style:{maxWidth:1500,width:"100%"}})]})]})}function Le(){return Object($.jsxs)("main",{style:{padding:"1rem 0",maxWidth:600,width:"100%"},children:[Ne(),Object($.jsxs)("div",{className:"gf",children:[Object($.jsx)("a",{href:"https://discord.gg/6uywDtucE3",target:"_blank",children:Object($.jsx)("img",{src:"discord.png"})}),Object($.jsx)("a",{href:"https://discord.gg/",target:"_blank",children:Object($.jsx)("img",{src:"TWITTER.png"})}),Object($.jsx)("a",{href:"https://discord.gg/",target:"_blank",children:Object($.jsx)("img",{src:"web.png"})}),Object($.jsx)("a",{href:"https://discord.gg/",target:"_blank",children:Object($.jsx)("img",{src:"INSTA.png"})})]})]})}var Ce=new W.d.PublicKey("AmYRCLaCvzXxfkmYVdkmAH3LzhU2ReMAhKPQVRmLtGvr"),_e="devnet",We="https://api.devnet.solana.com",De=new W.d.Connection(We),ze=Object(Pe.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Fe=function(){var e=Object(P.useMemo)((function(){return Object(D.clusterApiUrl)(_e)}),[]),t=Object(P.useMemo)((function(){return[Object(Te.a)(),Object(Te.b)(),Object(Te.c)(),Object(Te.e)({network:_e}),Object(Te.d)({network:_e})]}),[]);return Object($.jsx)(Me.a,{theme:ze,children:Object($.jsx)(z.a,{endpoint:e,children:Object($.jsx)(z.b,{wallets:t,autoConnect:!0,children:Object($.jsx)(F.a,{children:Object($.jsx)(re.a,{children:Object($.jsxs)(Re.c,{children:[Object($.jsx)(Re.a,{path:"/",element:Object($.jsx)(Se,{candyMachineId:Ce,connection:De,txTimeout:3e4,rpcHost:We})}),Object($.jsx)(Re.a,{path:"contact",element:Object($.jsx)(Le,{})}),Object($.jsx)(Re.a,{path:"roadmap",element:Object($.jsx)(Ie,{})})]})})})})})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,645)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};E.a.render(Object($.jsx)(M.a.StrictMode,{children:Object($.jsx)(Fe,{})}),document.getElementById("root")),Ue()},78:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return p}));var r=n(1),a=n.n(r),i=n(4),c=n(35),o=n(55),s=(n(14),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new c.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new c.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),b=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),o.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(6).Buffer)}},[[604,1,2]]]);
//# sourceMappingURL=main.00c97f2e.chunk.js.map