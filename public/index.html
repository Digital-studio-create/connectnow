<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>ConnectNow — Meet Real People</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
<script src="/socket.io/socket.io.js"></script>

<style>
:root{
  --bg:#07070f;--s1:#0f0f1c;--s2:#161628;--s3:#1e1e32;
  --acc:#6c47ff;--acc2:#00e5a0;--acc3:#ff4f7b;--gold:#ffb800;
  --text:#eeeef5;--sub:#8080a0;--bdr:#20203a;--r:16px;
  --glow:0 0 40px rgba(108,71,255,.3);
}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{height:100%;font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);overflow:hidden}
button,input,select,textarea{font-family:inherit}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-thumb{background:var(--bdr);border-radius:2px}

/* SCREENS */
.sc{position:fixed;inset:0;display:flex;flex-direction:column;z-index:1;transition:opacity .3s,transform .3s}
.sc.off{opacity:0;pointer-events:none;transform:translateY(8px)}

/* GLOW BG */
.gbg{position:fixed;inset:0;pointer-events:none;z-index:0}
.gb1{position:absolute;width:600px;height:600px;background:radial-gradient(circle,rgba(108,71,255,.12),transparent 70%);top:-200px;left:-100px;animation:gm 8s ease-in-out infinite alternate}
.gb2{position:absolute;width:500px;height:500px;background:radial-gradient(circle,rgba(0,229,160,.08),transparent 70%);bottom:-100px;right:-100px;animation:gm 10s ease-in-out infinite alternate-reverse}
@keyframes gm{0%{transform:translate(0,0)}100%{transform:translate(40px,30px)}}

/* LOADING SCREEN */
#loadScreen{align-items:center;justify-content:center;z-index:200;background:var(--bg)}
.load-logo{font-size:60px;margin-bottom:16px;animation:bounce .8s ease-in-out infinite alternate}
@keyframes bounce{from{transform:scale(1)}to{transform:scale(1.1)}}
.load-title{font-size:28px;font-weight:800;margin-bottom:8px}
.load-title span{background:linear-gradient(135deg,var(--acc),var(--acc2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.load-sub{color:var(--sub);font-size:14px}
.load-bar{width:200px;height:3px;background:var(--s3);border-radius:2px;margin-top:24px;overflow:hidden}
.load-prog{height:100%;background:linear-gradient(90deg,var(--acc),var(--acc2));border-radius:2px;animation:prog 2s ease forwards}
@keyframes prog{from{width:0}to{width:100%}}

/* AGE GATE */
#ageGate{align-items:center;justify-content:center;z-index:100;background:rgba(7,7,15,.97)}
.age-wrap{text-align:center;max-width:380px;width:calc(100% - 40px);animation:fadeUp .6s ease}
.age-ic{font-size:56px;margin-bottom:20px}
.age-wrap h1{font-size:30px;font-weight:800;margin-bottom:10px}
.age-wrap h1 span{background:linear-gradient(135deg,var(--acc),var(--acc2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.age-wrap p{color:var(--sub);font-size:14px;line-height:1.7;margin-bottom:32px}
.age-wrap p b{color:var(--text)}
.btn-yes{width:100%;padding:16px;border-radius:14px;background:linear-gradient(135deg,var(--acc),#9b6cff);color:#fff;font-size:16px;font-weight:700;border:none;cursor:pointer;margin-bottom:12px;transition:all .2s}
.btn-yes:hover{transform:translateY(-2px);box-shadow:var(--glow)}
.btn-no{width:100%;padding:14px;border-radius:14px;background:var(--s2);color:var(--sub);font-size:14px;border:none;cursor:pointer}
.age-note{font-size:11px;color:var(--sub);margin-top:18px;line-height:1.7}
.age-note a{color:var(--acc2);text-decoration:none}

/* LOGIN */
#loginScreen{align-items:center;justify-content:center;overflow-y:auto;padding:20px 16px}
.lbox{background:var(--s1);border:1px solid var(--bdr);border-radius:24px;padding:36px 28px;width:100%;max-width:420px;animation:fadeUp .5s ease}
.llogo{display:flex;align-items:center;gap:12px;margin-bottom:6px}
.lic{width:46px;height:46px;border-radius:14px;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.llogo h1{font-size:24px;font-weight:800}
.llogo h1 span{background:linear-gradient(135deg,var(--acc),var(--acc2));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.ltag{color:var(--sub);font-size:13px;margin-bottom:26px;line-height:1.6}
.ltag b{color:var(--text)}

.btn-google{width:100%;padding:14px;border-radius:12px;background:#fff;color:#1a1a2e;display:flex;align-items:center;justify-content:center;gap:10px;font-size:15px;font-weight:600;border:none;cursor:pointer;transition:all .2s;margin-bottom:10px}
.btn-google:hover{background:#f0f0f8;transform:translateY(-1px)}
.btn-google svg{width:20px;height:20px;flex-shrink:0}
.btn-google.loading{opacity:.7;pointer-events:none}

.divdr{display:flex;align-items:center;gap:10px;color:var(--sub);font-size:12px;margin:14px 0}
.divdr::before,.divdr::after{content:'';flex:1;height:1px;background:var(--bdr)}

.ph-row{display:flex;gap:8px;margin-bottom:10px}
.cc{background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:10px;padding:0 10px;font-size:13px;cursor:pointer;outline:none;min-width:95px}
.inp{flex:1;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:10px;padding:13px 14px;font-size:15px;outline:none;transition:border .2s;width:100%}
.inp:focus{border-color:var(--acc);box-shadow:0 0 0 3px rgba(108,71,255,.15)}
.inp::placeholder{color:var(--sub)}
.btn-send{width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--acc),#9b6cff);color:#fff;font-size:15px;font-weight:600;border:none;cursor:pointer;transition:all .2s}
.btn-send:hover{transform:translateY(-1px)}
.btn-send:disabled{opacity:.6;pointer-events:none}

.otp-area{display:none;margin-top:14px;animation:fadeUp .3s}
.otp-area.show{display:block}
.otp-lbl{font-size:12px;color:var(--sub);margin-bottom:8px;font-weight:600}
.otp-row{display:flex;gap:8px;margin-bottom:10px}
.otp-i{flex:1;height:52px;background:var(--s2);border:1px solid var(--bdr);border-radius:10px;text-align:center;font-size:22px;font-weight:700;color:var(--text);outline:none;transition:border .2s}
.otp-i:focus{border-color:var(--acc);box-shadow:0 0 0 3px rgba(108,71,255,.15)}
.btn-verify{width:100%;padding:14px;border-radius:12px;background:linear-gradient(135deg,var(--acc2),#00b37a);color:#fff;font-size:15px;font-weight:600;border:none;cursor:pointer}
.btn-verify:disabled{opacity:.6;pointer-events:none}

/* recaptcha */
#recaptcha-container{margin-top:10px}

/* Profile setup */
.prof-area{display:none;margin-top:20px;border-top:1px solid var(--bdr);padding-top:20px;animation:fadeUp .3s}
.prof-area.show{display:block}
.ptitle{font-size:16px;font-weight:700;margin-bottom:16px}
.flbl{font-size:11px;color:var(--sub);margin-bottom:6px;display:block;font-weight:700;letter-spacing:.5px;text-transform:uppercase}
.fwrap{margin-bottom:14px}
.sel{width:100%;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:10px;padding:13px 14px;font-size:14px;outline:none;-webkit-appearance:none;transition:border .2s}
.sel:focus{border-color:var(--acc)}

.gender-row{display:flex;gap:10px;margin-bottom:14px}
.gb{flex:1;padding:13px 8px;border-radius:12px;background:var(--s2);border:2px solid var(--bdr);color:var(--sub);font-size:13px;font-weight:600;cursor:pointer;transition:all .2s;text-align:center}
.gb.on{border-color:var(--acc);background:rgba(108,71,255,.15);color:var(--text)}
.gb:hover:not(.on){border-color:var(--sub)}

.btn-enter{width:100%;padding:16px;border-radius:14px;background:linear-gradient(135deg,var(--acc),var(--acc2));color:#fff;font-size:16px;font-weight:800;border:none;cursor:pointer;transition:all .2s;margin-top:6px}
.btn-enter:hover{transform:translateY(-2px);box-shadow:var(--glow)}

.tnote{font-size:11px;color:var(--sub);text-align:center;margin-top:16px;line-height:1.6}
.tnote a{color:var(--acc2);text-decoration:none}

/* HOME */
#homeScreen{background:var(--bg)}
.topbar{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;border-bottom:1px solid var(--bdr);background:rgba(15,15,28,.95);backdrop-filter:blur(20px);flex-shrink:0}
.upill{display:flex;align-items:center;gap:10px}
.uavt{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px;flex-shrink:0;overflow:hidden;border:2px solid var(--bdr)}
.uavt img{width:100%;height:100%;object-fit:cover}
.unm{font-weight:700;font-size:15px}
.ust{font-size:11px;color:var(--acc2);display:flex;align-items:center;gap:4px}
.pls{width:6px;height:6px;background:var(--acc2);border-radius:50%;animation:pa 1.5s infinite}
@keyframes pa{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
.ptag{background:linear-gradient(135deg,var(--gold),#ff8c00);color:#fff;font-size:10px;font-weight:800;padding:2px 8px;border-radius:20px}
.ib{width:38px;height:38px;border-radius:10px;background:var(--s2);border:1px solid var(--bdr);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;font-size:16px;flex-shrink:0}
.ib:hover{background:var(--acc);border-color:var(--acc)}

.hbody{flex:1;overflow-y:auto;padding-bottom:82px}

.stat-banner{margin:14px;background:linear-gradient(135deg,rgba(108,71,255,.12),rgba(0,229,160,.06));border:1px solid rgba(108,71,255,.25);border-radius:18px;padding:14px 20px;display:flex;align-items:center;justify-content:space-around}
.si{text-align:center}
.sn{font-size:22px;font-weight:800;color:var(--acc2)}
.sl{font-size:11px;color:var(--sub);margin-top:2px}

.sec{padding:0 14px 0}
.slbl{font-size:11px;font-weight:700;color:var(--sub);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.mrow{display:flex;gap:10px;margin-bottom:14px}
.mc{flex:1;background:var(--s1);border:2px solid var(--bdr);border-radius:16px;padding:16px 8px;text-align:center;cursor:pointer;transition:all .25s}
.mc.on{border-color:var(--acc);background:rgba(108,71,255,.1);box-shadow:0 0 20px rgba(108,71,255,.15)}
.mc:hover:not(.on){border-color:var(--sub);transform:translateY(-2px)}
.mic{font-size:26px;margin-bottom:6px}
.mnm{font-size:12px;font-weight:700}
.mds{font-size:10px;color:var(--sub);margin-top:2px}

.filters{display:flex;gap:10px;padding:0 14px;margin-bottom:14px}
.fc{flex:1;background:var(--s1);border:1px solid var(--bdr);border-radius:14px;padding:12px;position:relative;overflow:hidden}
.fc.locked::after{content:'🔒 Premium';position:absolute;inset:0;background:rgba(7,7,15,.88);border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--gold)}
.fclbl{font-size:11px;color:var(--sub);margin-bottom:5px;font-weight:600}
.fcsel{width:100%;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:8px;padding:8px 10px;font-size:12px;outline:none;-webkit-appearance:none}

.find-wrap{padding:0 14px 14px}
.btn-find{width:100%;padding:17px;border-radius:16px;background:linear-gradient(135deg,var(--acc) 0%,#9b6cff 50%,var(--acc2) 100%);background-size:200%;color:#fff;font-size:17px;font-weight:800;border:none;cursor:pointer;transition:all .3s;animation:gs 4s ease infinite;box-shadow:0 8px 30px rgba(108,71,255,.35);letter-spacing:.3px}
@keyframes gs{0%{background-position:0%}50%{background-position:100%}100%{background-position:0%}}
.btn-find:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(108,71,255,.5)}
.btn-find:active{transform:scale(.98)}

.pcta{margin:0 14px 14px;background:linear-gradient(135deg,rgba(255,184,0,.08),rgba(255,100,0,.05));border:1px solid rgba(255,184,0,.22);border-radius:16px;padding:14px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .2s}
.pcta:hover{border-color:var(--gold)}
.pci{font-size:30px}
.pct h3{font-size:14px;font-weight:700;color:var(--gold)}
.pct p{font-size:12px;color:var(--sub);margin-top:2px}
.pca{margin-left:auto;font-size:20px;color:var(--gold)}

.clist{padding:0 14px}
.ci{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--bdr);cursor:pointer;transition:padding .2s}
.ci:hover{padding-left:6px}
.ciavt{width:42px;height:42px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:15px}
.cinm{font-weight:600;font-size:14px;margin-bottom:2px}
.ciprev{font-size:12px;color:var(--sub);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbdg{background:var(--acc);color:#fff;border-radius:10px;font-size:10px;font-weight:800;padding:2px 6px;margin-top:3px;display:inline-block}

.bnav{display:flex;padding:8px 12px 22px;gap:4px;border-top:1px solid var(--bdr);background:rgba(15,15,28,.97);backdrop-filter:blur(20px);position:absolute;bottom:0;left:0;right:0}
.ni{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;padding:9px 4px;border-radius:12px;cursor:pointer;transition:all .2s;font-size:10px;color:var(--sub);font-weight:600}
.ni.on{color:var(--acc);background:rgba(108,71,255,.1)}
.ni:hover:not(.on){background:var(--s2)}
.nic{font-size:20px}

/* MODALS */
.mbg{position:fixed;inset:0;background:rgba(0,0,0,.8);backdrop-filter:blur(10px);z-index:200;display:flex;align-items:flex-end;justify-content:center;transition:opacity .3s}
.mbg.off{opacity:0;pointer-events:none}
.msheet{background:var(--s1);border-radius:24px 24px 0 0;padding:26px 20px 40px;width:100%;max-width:500px;max-height:90vh;overflow-y:auto;animation:shup .35s ease;position:relative}
@keyframes shup{from{transform:translateY(100%)}to{transform:translateY(0)}}
.mhandle{width:40px;height:4px;background:var(--bdr);border-radius:2px;margin:0 auto 20px}
.mtitle{font-size:22px;font-weight:800;margin-bottom:6px}
.msub{color:var(--sub);font-size:14px;margin-bottom:20px}
.mclose{position:absolute;top:14px;right:14px;background:var(--s2);border:none;width:32px;height:32px;border-radius:50%;cursor:pointer;font-size:15px;color:var(--sub);display:flex;align-items:center;justify-content:center}

.plan{border:2px solid var(--bdr);border-radius:14px;padding:16px;margin-bottom:10px;cursor:pointer;transition:all .2s;position:relative}
.plan.on,.plan:hover{border-color:var(--acc);background:rgba(108,71,255,.07)}
.plan.pop::before{content:'POPULAR';position:absolute;top:-10px;right:14px;background:var(--acc);color:#fff;font-size:10px;font-weight:800;padding:2px 10px;border-radius:20px}
.prow{display:flex;align-items:center;justify-content:space-between}
.pnm{font-weight:700;font-size:15px}
.ppr{font-size:19px;font-weight:800;color:var(--acc)}
.ppr span{font-size:12px;color:var(--sub);font-weight:400}
.pfeats{font-size:12px;color:var(--sub);margin-top:8px;line-height:1.9}
.pfeats b{color:var(--text)}
.btn-sub{width:100%;padding:15px;border-radius:14px;background:linear-gradient(135deg,var(--gold),#f97316);color:#fff;font-size:15px;font-weight:800;border:none;cursor:pointer;margin-top:14px;transition:all .2s}
.btn-sub:hover{transform:translateY(-2px)}

/* SEARCHING */
#searching{position:fixed;inset:0;z-index:150;background:rgba(7,7,15,.96);backdrop-filter:blur(14px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;transition:opacity .3s}
#searching.off{opacity:0;pointer-events:none}
.spin-wrap{width:100px;height:100px;position:relative}
.sring{width:100%;height:100%;border-radius:50%;border:3px solid var(--bdr);border-top-color:var(--acc);animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.sring::after{content:'';position:absolute;inset:10px;border-radius:50%;border:3px solid var(--bdr);border-top-color:var(--acc2);animation:spin .7s linear infinite reverse}
.sem{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:32px}
.sttl{font-size:20px;font-weight:800}
.ssub{color:var(--sub);font-size:13px}
.btn-cancel{background:transparent;border:1px solid var(--bdr);color:var(--sub);padding:11px 30px;border-radius:12px;font-size:14px;cursor:pointer;transition:all .2s}
.btn-cancel:hover{border-color:var(--acc3);color:var(--acc3)}

/* CHAT SCREEN */
#chatScreen{background:#000}
.chatheader{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;position:absolute;top:0;left:0;right:0;z-index:10;background:linear-gradient(to bottom,rgba(0,0,0,.8),transparent)}
.chleft{display:flex;align-items:center;gap:10px}
.chavt{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:800;border:2px solid rgba(255,255,255,.15);flex-shrink:0}
.chnm{font-weight:700;font-size:14px}
.chst{font-size:11px;color:var(--acc2);display:flex;align-items:center;gap:4px}
.chlbl{background:rgba(108,71,255,.7);backdrop-filter:blur(10px);border-radius:8px;padding:5px 12px;font-size:11px;font-weight:800;letter-spacing:1px}

.vidarea{flex:1;position:relative;background:#000;overflow:hidden;display:flex;flex-direction:column}
#remoteVideo{width:100%;height:100%;object-fit:cover;background:#111;display:none;position:absolute;inset:0}
.vidph{width:100%;height:100%;background:radial-gradient(ellipse at center,#1a1a2e,#000);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;flex:1}
.vpa{width:88px;height:88px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:800;box-shadow:0 0 60px rgba(108,71,255,.4)}
.vpt{color:var(--sub);font-size:14px;animation:blink 1.5s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
#localVideo{position:absolute;bottom:90px;right:12px;width:88px;height:118px;object-fit:cover;border-radius:14px;border:2px solid var(--acc);display:none;z-index:5;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.6);transform:scaleX(-1)}
.selfph{position:absolute;bottom:90px;right:12px;width:88px;height:118px;border-radius:14px;border:2px solid var(--acc);background:radial-gradient(#2a1f3d,#111);display:flex;align-items:center;justify-content:center;font-size:26px;z-index:5;cursor:pointer}

.stroverlay{position:absolute;top:58px;left:12px;right:12px;display:flex;align-items:center;justify-content:space-between;pointer-events:none;z-index:5}
.strbdg{background:rgba(0,0,0,.65);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:7px 12px;display:flex;align-items:center;gap:8px}
.strnm{font-size:13px;font-weight:700}
.strct{font-size:11px;color:var(--sub)}
.repbtn{background:rgba(255,79,123,.15);border:1px solid rgba(255,79,123,.35);color:var(--acc3);border-radius:8px;padding:5px 10px;font-size:11px;font-weight:700;pointer-events:all;cursor:pointer;transition:all .2s}
.repbtn:hover{background:rgba(255,79,123,.35)}

.ctrlbar{position:absolute;bottom:0;left:0;right:0;padding:10px 14px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);display:flex;align-items:center;justify-content:center;gap:8px;z-index:5;flex-wrap:wrap}
.ctrlbar-right{position:absolute;right:12px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px;z-index:6}
.cb{width:50px;height:50px;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;font-size:19px;cursor:pointer;transition:all .2s;box-shadow:0 4px 14px rgba(0,0,0,.4);flex-shrink:0;color:#fff}
.cb-mute{background:rgba(255,255,255,.12);backdrop-filter:blur(8px)}
.cb-mute.on{background:var(--acc3)}
.cb-cam{background:rgba(255,255,255,.12);backdrop-filter:blur(8px)}
.cb-cam.off{background:var(--sub)}
.cb-next{background:var(--acc);width:56px;height:56px;font-size:20px}
.cb-next:hover{background:#9b6cff;transform:scale(1.05)}
.cb-msg{background:rgba(255,255,255,.12);backdrop-filter:blur(8px)}
.cb-end{background:var(--acc3)}

/* Audio */
.audiosc{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;padding:40px 20px;background:radial-gradient(ellipse at center,rgba(108,71,255,.1),transparent 70%)}
.aavt{width:108px;height:108px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:44px;animation:ap 2s ease-in-out infinite}
@keyframes ap{0%,100%{box-shadow:0 0 40px rgba(108,71,255,.3)}50%{box-shadow:0 0 80px rgba(108,71,255,.6)}}
.viz{display:flex;align-items:center;gap:5px;height:50px}
.vb{width:5px;background:linear-gradient(to top,var(--acc),var(--acc2));border-radius:3px;animation:va .8s ease-in-out infinite}
.vb:nth-child(1){height:16px;animation-delay:0s}.vb:nth-child(2){height:32px;animation-delay:.1s}
.vb:nth-child(3){height:48px;animation-delay:.2s}.vb:nth-child(4){height:28px;animation-delay:.3s}
.vb:nth-child(5){height:44px;animation-delay:.4s}.vb:nth-child(6){height:24px;animation-delay:.5s}
.vb:nth-child(7){height:40px;animation-delay:.6s}.vb:nth-child(8){height:16px;animation-delay:.7s}
@keyframes va{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
.atimer{font-size:30px;font-weight:800;color:var(--acc2);font-variant-numeric:tabular-nums}
.albl{color:var(--sub);font-size:13px}

/* Chat panel */
.cpanel{background:var(--s1);border-top:1px solid var(--bdr);display:flex;flex-direction:column;transition:height .3s ease;overflow:hidden;flex-shrink:0}
.cpanel.closed{height:0}
.cpanel.open{height:230px}
.cmsgs{flex:1;overflow-y:auto;padding:10px 12px;display:flex;flex-direction:column;gap:7px}
.msg{max-width:78%;padding:9px 13px;border-radius:16px;font-size:14px;line-height:1.5;animation:mp .2s ease;word-break:break-word}
@keyframes mp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.msg.me{background:var(--acc);color:#fff;align-self:flex-end;border-bottom-right-radius:4px}
.msg.them{background:var(--s3);align-self:flex-start;border-bottom-left-radius:4px}
.cinprow{display:flex;gap:8px;padding:8px 10px;border-top:1px solid var(--bdr);align-items:center}
.cinp{flex:1;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:24px;padding:10px 14px;font-size:14px;outline:none;transition:border .2s}
.cinp:focus{border-color:var(--acc)}
.cinp::placeholder{color:var(--sub)}
.emojibtn{background:none;border:none;font-size:20px;cursor:pointer;padding:4px;transition:transform .2s;flex-shrink:0}
.emojibtn:hover{transform:scale(1.2)}
.sendbtn{width:38px;height:38px;background:var(--acc);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;transition:all .2s;flex-shrink:0;color:#fff;flex-shrink:0}
.sendbtn:hover{background:#9b6cff}

/* Emoji picker */
.epicker{background:var(--s2);border:1px solid var(--bdr);border-radius:14px;padding:10px;flex-wrap:wrap;gap:4px;position:absolute;bottom:62px;left:10px;z-index:20;animation:fadeUp .2s;display:none;width:280px}
.epicker.show{display:flex}
.ep{font-size:22px;cursor:pointer;padding:4px;border-radius:8px;transition:background .15s;background:none;border:none}
.ep:hover{background:var(--s3)}

/* TEXT CHAT */
#textChatScreen{background:var(--bg)}
.tctop{display:flex;align-items:center;justify-content:space-between;padding:13px 14px;border-bottom:1px solid var(--bdr);background:var(--s1);flex-shrink:0}
.tcmsgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:9px}
.sysmsg{text-align:center;font-size:12px;color:var(--sub);background:var(--s2);border-radius:20px;padding:7px 16px;align-self:center;max-width:90%}
.tcbottom{background:var(--s1);border-top:1px solid var(--bdr);padding:10px 12px;position:relative;flex-shrink:0}
.tcinprow{display:flex;gap:8px;align-items:center}
.tcinp{flex:1;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:24px;padding:11px 14px;font-size:14px;outline:none;transition:border .2s}
.tcinp:focus{border-color:var(--acc)}
.tcinp::placeholder{color:var(--sub)}

/* TOAST */
.toast{position:fixed;bottom:95px;left:50%;transform:translateX(-50%);background:var(--s2);border:1px solid var(--bdr);border-radius:12px;padding:10px 18px;font-size:13px;z-index:999;transition:all .3s;opacity:0;pointer-events:none;white-space:nowrap;font-weight:600;max-width:90vw;text-align:center}
.toast.show{opacity:1;transform:translateX(-50%) translateY(-8px)}

@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

/* Profile modal */
.pavt{width:78px;height:78px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;margin:0 auto 14px;border:3px solid var(--bdr);overflow:hidden}
.pavt img{width:100%;height:100%;object-fit:cover}
.pnmbig{text-align:center;font-size:20px;font-weight:800;margin-bottom:4px}
.psubbig{text-align:center;font-size:13px;color:var(--sub);margin-bottom:20px}
.pstats{display:flex;justify-content:center;gap:28px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid var(--bdr)}
.psi{text-align:center}
.psn{font-size:20px;font-weight:800;color:var(--acc2)}
.psl{font-size:11px;color:var(--sub);margin-top:2px}

/* Filter button active */
.cb-filter.on{background:linear-gradient(135deg,#f472b6,#a855f7) !important;animation:filterPulse 1.5s infinite}
@keyframes filterPulse{0%,100%{box-shadow:0 0 10px rgba(244,114,182,.4)}50%{box-shadow:0 0 20px rgba(244,114,182,.7)}}

/* Friend request animation */
#frModal{animation:fadeUp .3s ease}

@media(max-width:380px){
  .lbox{padding:28px 16px}
  .mrow{gap:8px}.mc{padding:14px 6px}
  .cb{width:44px;height:44px;font-size:17px}.cb-next{width:50px;height:50px}
  .ctrlbar{gap:10px;padding:10px 12px}
}
</style>
</head>
<body>
<div class="gbg"><div class="gb1"></div><div class="gb2"></div></div>

<div class="sc" id="loadScreen">
  <div style="text-align:center">
    <div class="load-logo">🔗</div>
    <div class="load-title">Connect<span>Now</span></div>
    <div class="load-sub">Loading your experience...</div>
    <div class="load-bar"><div class="load-prog"></div></div>
  </div>
</div>

<div class="sc off" id="ageGate">
  <div class="age-wrap">
    <div class="age-ic">🔞</div>
    <h1>Connect<span>Now</span></h1>
    <p>This platform is strictly for <b>adults aged 18+</b>. Random video, audio & text chat with real people worldwide.</p>
    <button class="btn-yes" onclick="confirmAge()">✅ I am 18 or older — Enter</button>
    <button class="btn-no" onclick="denyAge()">❌ Under 18 — Exit</button>
    <p class="age-note">By entering you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> & <a href="#">Guidelines</a></p>
  </div>
</div>

<div class="sc off" id="loginScreen">
  <div class="lbox">
    <div class="llogo"><div class="lic">🔗</div><h1>Connect<span>Now</span></h1></div>
    <p class="ltag">Meet <b>real people</b> worldwide — video, audio & text.</p>

    <button class="btn-google" id="googleBtn" onclick="loginGoogle()">
      <svg viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
      Continue with Google
    </button>

    <div class="divdr">or use phone number</div>

    <div class="ph-row">
      <select class="cc" id="cc">
        <option value="+92">🇵🇰 +92</option>
        <option value="+91">🇮🇳 +91</option>
        <option value="+966">🇸🇦 +966</option>
        <option value="+971">🇦🇪 +971</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+880">🇧🇩 +880</option>
        <option value="+62">🇮🇩 +62</option>
        <option value="+55">🇧🇷 +55</option>
        <option value="+20">🇪🇬 +20</option>
      </select>
      <input class="inp" id="ph" type="tel" placeholder="Mobile number" maxlength="11" inputmode="numeric">
    </div>
    <div id="recaptcha-container"></div>
    <button class="btn-send" id="otpBtn" onclick="sendOTP()">Send OTP Code</button>

    <div class="otp-area" id="otpArea">
      <p class="otp-lbl">Enter 6-digit code sent to your number</p>
      <div class="otp-row">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,0)" inputmode="numeric">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,1)" inputmode="numeric">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,2)" inputmode="numeric">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,3)" inputmode="numeric">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,4)" inputmode="numeric">
        <input class="otp-i" maxlength="1" type="text" oninput="otpNext(this,5)" inputmode="numeric">
      </div>
      <button class="btn-verify" id="verifyBtn" onclick="verifyOTP()">✓ Verify & Continue</button>
    </div>

    <div class="prof-area" id="profArea">
      <p class="ptitle">👤 Complete Your Profile</p>
      <div class="fwrap">
        <label class="flbl">Display Name</label>
        <input class="inp" id="dispName" placeholder="Enter your name" maxlength="20" style="width:100%">
      </div>
      <div class="fwrap">
        <label class="flbl">I am a</label>
        <div class="gender-row">
          <button class="gb" id="gbM" onclick="setG('male')">👦 Male</button>
          <button class="gb" id="gbF" onclick="setG('female')">👧 Female</button>
          <button class="gb" id="gbO" onclick="setG('other')">🌈 Other</button>
        </div>
      </div>
      <div class="fwrap">
        <label class="flbl">Date of Birth (must be 18+)</label>
        <input class="inp" id="dob" type="date" style="width:100%;color-scheme:dark">
      </div>
      <div class="fwrap">
        <label class="flbl">Country</label>
        <select class="sel" id="myC">
          <option value="PK">🇵🇰 Pakistan</option>
          <option value="IN">🇮🇳 India</option>
          <option value="SA">🇸🇦 Saudi Arabia</option>
          <option value="AE">🇦🇪 UAE</option>
          <option value="US">🇺🇸 USA</option>
          <option value="GB">🇬🇧 UK</option>
          <option value="BD">🇧🇩 Bangladesh</option>
          <option value="EG">🇪🇬 Egypt</option>
          <option value="TR">🇹🇷 Turkey</option>
          <option value="other">🌍 Other</option>
        </select>
      </div>
      <button class="btn-enter" onclick="enterApp()">🚀 Enter ConnectNow</button>
    </div>
    <p class="tnote">18+ only. <a href="#">Terms</a> & <a href="#">Privacy Policy</a></p>
  </div>
</div>

<div class="sc off" id="homeScreen">
  <div class="topbar">
    <div class="upill">
      <div class="uavt" id="uAvt">?</div>
      <div>
        <div style="display:flex;align-items:center;gap:7px">
          <span class="unm" id="uNm">User</span>
          <span class="ptag" id="ptag" style="display:none">⭐ PRO</span>
        </div>
        <div class="ust"><span class="pls"></span> Online</div>
      </div>
    </div>
    <div style="display:flex;gap:8px">
      <div class="ib" onclick="openProf()">👤</div>
      <div class="ib" onclick="showPrem()">⭐</div>
      <div class="ib" onclick="logout()">🚪</div>
    </div>
  </div>

  <div class="hbody">
    <div class="stat-banner">
      <div class="si"><div class="sn" id="oN">---</div><div class="sl">🟢 Online</div></div>
      <div class="si"><div class="sn" id="cN">---</div><div class="sl">💬 Chatting</div></div>
      <div class="si"><div class="sn" id="wN">---</div><div class="sl">⏳ Waiting</div></div>
    </div>

    <div class="sec" style="margin-top:14px">
      <div class="slbl">Chat Mode</div>
      <div class="mrow">
        <div class="mc on" id="mV" onclick="setMode('video')"><div class="mic">📹</div><div class="mnm">Video</div><div class="mds">Face to face</div></div>
        <div class="mc" id="mA" onclick="setMode('audio')"><div class="mic">🎙️</div><div class="mnm">Audio</div><div class="mds">Voice only</div></div>
        <div class="mc" id="mT" onclick="setMode('text')"><div class="mic">💬</div><div class="mnm">Text</div><div class="mds">Anonymous</div></div>
      </div>
    </div>

    <div class="filters">
      <div class="fc locked" id="gFC">
        <div class="fclbl">Gender Filter</div>
        <select class="fcsel" id="gF" onchange="onFilter()">
          <option value="any">Any Gender</option>
          <option value="female">Girls Only 👧</option>
          <option value="male">Boys Only 👦</option>
        </select>
      </div>
      <div class="fc locked" id="cFC">
        <div class="fclbl">Country Filter</div>
        <select class="fcsel" id="cF" onchange="onFilter()">
          <option value="any">Any Country</option>
          <option value="PK">🇵🇰 Pakistan</option>
          <option value="IN">🇮🇳 India</option>
          <option value="SA">🇸🇦 Saudi Arabia</option>
          <option value="AE">🇦🇪 UAE</option>
          <option value="US">🇺🇸 USA</option>
          <option value="GB">🇬🇧 UK</option>
        </select>
      </div>
    </div>

    <div class="find-wrap">
      <button class="btn-find" onclick="findStranger()">🔀 &nbsp; FIND A STRANGER</button>
    </div>

    <div class="pcta" id="pCTA" onclick="showPrem()">
      <div class="pci">⭐</div>
      <div class="pct"><h3>Unlock Premium Filters</h3><p>Choose gender & country • Priority match</p></div>
      <div class="pca">›</div>
    </div>

    <div class="sec" style="margin-top:14px"><div class="slbl">Recent Chats</div></div>
    <div class="clist" id="recentChatsList">
      <!-- Dynamic recent chats loaded here -->
    </div>
  </div>

  <div class="bnav">
    <div class="ni on"><div class="nic">🏠</div>Home</div>
    <div class="ni" onclick="showFriendsSection()"><div class="nic">👥</div>Friends</div>
    <div class="ni" onclick="openProf()"><div class="nic">👤</div>Profile</div>
    <div class="ni" onclick="showPrem()"><div class="nic">⭐</div>Premium</div>
  </div>
</div>

<div class="sc off" id="friendsScreen">
  <div class="topbar">
    <div style="display:flex;align-items:center;gap:10px">
      <div class="ib" onclick="go('homeScreen')" style="font-size:13px">←</div>
      <div class="unm">👥 My Friends</div>
    </div>
    <div style="font-size:12px;color:var(--sub)" id="friendCount">0 friends</div>
  </div>
  <div style="flex:1;overflow-y:auto;padding:16px" id="friendsList">
    <div style="text-align:center;padding:40px 20px;color:var(--sub)" id="noFriendsMsg">
      <div style="font-size:48px;margin-bottom:12px">👥</div>
      <div style="font-size:16px;font-weight:700;margin-bottom:8px">No friends yet!</div>
      <div style="font-size:13px">Find strangers and send friend requests during video calls</div>
    </div>
  </div>
</div>

<div class="sc off" id="privateChatScreen">

  <!-- Top bar - Facebook Messenger style -->
  <div style="display:flex;align-items:center;padding:10px 14px;background:var(--s1);border-bottom:1px solid var(--bdr);position:relative;z-index:10;flex-shrink:0">
    <div class="ib" onclick="endPrivateCall()" style="font-size:13px;margin-right:10px;flex-shrink:0">←</div>
    <!-- Avatar + name + online status -->
    <div style="position:relative;flex-shrink:0;margin-right:10px">
      <div id="pcAvt" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:16px">?</div>
      <div style="position:absolute;bottom:0;right:0;width:11px;height:11px;background:var(--acc2);border-radius:50%;border:2px solid var(--s1)"></div>
    </div>
    <div style="flex:1;min-width:0">
      <div id="pcName" style="font-weight:700;font-size:15px">Friend</div>
      <div style="font-size:11px;color:var(--acc2)" id="pcStatus">Active now</div>
    </div>
    <!-- Call buttons top right - like messenger -->
    <div style="display:flex;gap:6px">
      <button id="pcAudioCallBtn" onclick="startQuickCall('audio')" title="Audio Call" style="width:36px;height:36px;border-radius:50%;background:rgba(0,229,160,.15);border:1px solid rgba(0,229,160,.3);color:var(--acc2);font-size:17px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s">🎙️</button>
      <button id="pcVideoCallBtn" onclick="startQuickCall('video')" title="Video Call" style="width:36px;height:36px;border-radius:50%;background:rgba(108,71,255,.15);border:1px solid rgba(108,71,255,.3);color:var(--acc);font-size:17px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s">📹</button>
    </div>
  </div>

  <!-- CALL UI - Hidden by default, shows during call -->
  <div id="pcCallArea" style="display:none;position:relative;background:#000;overflow:hidden" >
    <!-- Remote video -->
    <video id="pcRemoteVideo" autoplay playsinline style="width:100%;height:100%;object-fit:cover;display:none;position:absolute;inset:0"></video>
    <!-- Call placeholder -->
    <div id="pcVidPh" style="width:100%;height:100%;background:radial-gradient(ellipse,#1a1a2e,#000);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:20px">
      <div id="pcCallAvt" style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--acc2));display:flex;align-items:center;justify-content:center;font-size:32px;font-weight:800;animation:audioPulse 2s infinite">?</div>
      <div id="pcCallName" style="font-weight:700;font-size:18px">Friend</div>
      <div id="pcConnTxt" style="color:var(--sub);font-size:13px;animation:blink 1.5s infinite">Calling...</div>
      <!-- Audio visualizer for audio calls -->
      <div id="pcAudioViz" style="display:none;align-items:center;gap:4px;height:40px">
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite;height:14px"></div>
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite .1s;height:28px"></div>
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite .2s;height:38px"></div>
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite .3s;height:24px"></div>
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite .4s;height:34px"></div>
        <div style="width:4px;background:var(--acc);border-radius:2px;animation:va .8s ease-in-out infinite .5s;height:18px"></div>
      </div>
    </div>
    <!-- Self video small -->
    <video id="pcLocalVideo" autoplay playsinline muted style="position:absolute;bottom:70px;right:10px;width:80px;height:107px;object-fit:cover;border-radius:12px;border:2px solid var(--acc);transform:scaleX(-1);display:none;z-index:5"></video>
    <!-- Call controls overlay -->
    <div style="position:absolute;bottom:0;left:0;right:0;padding:10px 20px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);display:flex;align-items:center;justify-content:center;gap:14px;z-index:5">
      <button id="pcMuteBtn" onclick="togglePCMute()" style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.12);border:none;color:#fff;font-size:20px;cursor:pointer;backdrop-filter:blur(8px)">🎤</button>
      <button id="pcCamBtn" onclick="togglePCCam()" style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.12);border:none;color:#fff;font-size:20px;cursor:pointer;backdrop-filter:blur(8px);display:none">📷</button>
      <button id="pcFilterBtn" onclick="toggleFilter()" style="width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.12);border:none;color:#fff;font-size:20px;cursor:pointer;backdrop-filter:blur(8px)">✨</button>
      <button onclick="endCallKeepChat()" style="width:54px;height:54px;border-radius:50%;background:var(--acc3);border:none;color:#fff;font-size:22px;cursor:pointer">📵</button>
    </div>
  </div>

  <!-- CHAT MESSAGES - Facebook Messenger style -->
  <div id="pcMsgs" style="flex:1;overflow-y:auto;padding:12px 14px;display:flex;flex-direction:column;gap:6px;background:var(--bg)">
    <div class="sysmsg">Start chatting with your friend! 💬</div>
  </div>

  <!-- INPUT BAR - Messenger style -->
  <div style="background:var(--s1);border-top:1px solid var(--bdr);padding:8px 12px;flex-shrink:0">
    <!-- Emoji picker -->
    <div id="pcEp" class="epicker" style="bottom:65px;width:290px">
      <button class="ep" onclick="addPCEmoji('😀')">😀</button><button class="ep" onclick="addPCEmoji('😂')">😂</button>
      <button class="ep" onclick="addPCEmoji('😍')">😍</button><button class="ep" onclick="addPCEmoji('🥰')">🥰</button>
      <button class="ep" onclick="addPCEmoji('😎')">😎</button><button class="ep" onclick="addPCEmoji('🤔')">🤔</button>
      <button class="ep" onclick="addPCEmoji('😢')">😢</button><button class="ep" onclick="addPCEmoji('😡')">😡</button>
      <button class="ep" onclick="addPCEmoji('👍')">👍</button><button class="ep" onclick="addPCEmoji('❤️')">❤️</button>
      <button class="ep" onclick="addPCEmoji('🔥')">🔥</button><button class="ep" onclick="addPCEmoji('💯')">💯</button>
      <button class="ep" onclick="addPCEmoji('🎉')">🎉</button><button class="ep" onclick="addPCEmoji('👋')">👋</button>
      <button class="ep" onclick="addPCEmoji('🙏')">🙏</button><button class="ep" onclick="addPCEmoji('😊')">😊</button>
      <button class="ep" onclick="addPCEmoji('🤣')">🤣</button><button class="ep" onclick="addPCEmoji('🥺')">🥺</button>
      <button class="ep" onclick="addPCEmoji('🤩')">🤩</button><button class="ep" onclick="addPCEmoji('😘')">😘</button>
      <button class="ep" onclick="addPCEmoji('🫶')">🫶</button><button class="ep" onclick="addPCEmoji('💪')">💪</button>
      <button class="ep" onclick="addPCEmoji('🥳')">🥳</button><button class="ep" onclick="addPCEmoji('😏')">😏</button>
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <!-- Emoji button -->
      <button onclick="toggleEP('pcEp')" style="font-size:22px;background:none;border:none;cursor:pointer;flex-shrink:0;padding:4px">😊</button>
      <!-- Image send -->
      <label style="font-size:20px;cursor:pointer;flex-shrink:0;padding:4px" title="Send image">
        📎<input type="file" accept="image/*" style="display:none" onchange="sendImage(this,'pcMsgs',true)">
      </label>
      <!-- Text input -->
      <input id="pcInp" placeholder="Aa" style="flex:1;background:var(--s2);border:1px solid var(--bdr);color:var(--text);border-radius:24px;padding:10px 16px;font-size:14px;outline:none;transition:border .2s;font-family:inherit" onkeydown="if(event.key==='Enter')sendPCMsg()" oninput="this.style.borderColor=this.value?'var(--acc)':'var(--bdr)'">
      <!-- Send button -->
      <button onclick="sendPCMsg()" style="width:38px;height:38px;background:var(--acc);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:16px;cursor:pointer;color:#fff;flex-shrink:0;transition:all .2s">➤</button>
    </div>
  </div>

</div>


<div class="mbg off" id="premModal">
  <div class="msheet">
    <button class="mclose" onclick="hidePrem()">✕</button>
    <div class="mhandle"></div>
    <h2 class="mtitle">⭐ Go Premium</h2>
    <p class="msub">Unlock filters & meet who you want</p>
    <div class="plan" id="pl1" onclick="pickPlan('weekly')"><div class="prow"><div class="pnm">Weekly</div><div class="ppr">$1.99<span>/week</span></div></div><div class="pfeats">✅ <b>Gender Filter</b><br>✅ <b>Country Filter</b><br>✅ No ads</div></div>
    <div class="plan pop" id="pl2" onclick="pickPlan('monthly')"><div class="prow"><div class="ppr">$4.99<span>/month</span></div></div><div class="pfeats">✅ <b>Gender Filter</b><br>✅ <b>Country Filter</b><br>✅ <b>Priority matching</b><br>✅ Profile badge</div></div>
    <div class="plan" id="pl3" onclick="pickPlan('yearly')"><div class="prow"><div class="ppr">$29.99<span>/year</span></div></div><div class="pfeats">✅ All features<br>✅ <b>Save 50%</b><br>✅ Early access</div></div>
    <button class="btn-sub" onclick="doSub()">🚀 Subscribe Now</button>
    <p style="text-align:center;font-size:11px;color:var(--sub);margin-top:10px"><a href="#" style="color:var(--acc2)">Terms</a> · <a href="#" style="color:var(--acc2)">Refund Policy</a></p>
  </div>
</div>

<div class="mbg off" id="profModal">
  <div class="msheet">
    <button class="mclose" onclick="hideProfModal()">✕</button>
    <div class="mhandle"></div>
    <div class="pavt" id="pAvtBig">?</div>
    <div class="pnmbig" id="pNmBig">User</div>
    <div class="psubbig" id="pSubBig">🌍</div>
    <div class="pstats">
      <div class="psi"><div class="psn">0</div><div class="psl">Chats</div></div>
      <div class="psi"><div class="psn" id="pAgeBig">--</div><div class="psl">Age</div></div>
      <div class="psi"><div class="psn">0</div><div class="psl">Friends</div></div>
    </div>
    <button class="btn-enter" style="background:linear-gradient(135deg,var(--acc3),#c0392b)" onclick="logout()">🚪 Logout</button>
  </div>
</div>

<div id="searching" class="off">
  <div class="spin-wrap"><div class="sring"></div><div class="sem">🔍</div></div>
  <div class="sttl">Finding a stranger...</div>
  <div class="ssub" id="sSub">Searching worldwide</div>
  <button class="btn-cancel" onclick="cancelSearch()">Cancel</button>
</div>

<div class="sc off" id="chatScreen">
  <div class="chatheader">
    <div class="chleft">
      <div class="ib" onclick="endChat()" style="background:rgba(0,0,0,.5);border-color:rgba(255,255,255,.12);color:#fff;font-size:13px">←</div>
      <div class="chavt" id="chAvt">?</div>
      <div><div class="chnm" id="chNm">Stranger</div><div class="chst"><span class="pls"></span> Connected</div></div>
    </div>
    <div class="chlbl" id="chLbl">📹 VIDEO</div>
  </div>

  <div class="vidarea" id="vidArea">
    <canvas id="filterCanvas" style="display:none;position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none"></canvas>
    <div class="vidph" id="vidPh">
      <div class="vpa" style="background:linear-gradient(135deg,var(--acc),var(--acc2))" id="vPhAvt">?</div>
      <div class="vpt" id="vPhTxt">Connecting...</div>
    </div>
    <video id="remoteVideo" autoplay playsinline></video>
    <video id="localVideo" autoplay playsinline muted></video>
    <div class="selfph" id="selfPh">🤳</div>

    <div class="stroverlay">
      <div class="strbdg"><span class="pls"></span><div><div class="strnm" id="strNm">Stranger</div><div class="strct" id="strCt"></div></div></div>
      <button class="repbtn" onclick="reportUser()">⚑ Report</button>
    </div>

    <div class="ctrlbar">
      <button class="cb cb-cam" id="camBtn" onclick="toggleCam()">📷</button>
      <button class="cb cb-mute" id="muteBtn" onclick="toggleMute()">🎤</button>
      <button class="cb cb-next" onclick="nextStranger()">⏭️</button>
      <button class="cb cb-msg" onclick="togglePanel()">💬</button>
      <button class="cb cb-end" onclick="endChat()">📵</button>
    </div>
    <div class="ctrlbar-right">
      <button class="cb cb-flip" onclick="flipCamera()" title="Flip Camera" style="width:40px;height:40px;font-size:16px">🔄</button>
      <button class="cb cb-filter" id="filterBtn" onclick="toggleFilter()" title="Video Filter" style="width:40px;height:40px;font-size:16px">✨</button>
      <button class="cb cb-add" onclick="sendFriendReq()" title="Add Friend" style="width:40px;height:40px;font-size:16px">👤</button>
    </div>
  </div>

  <div class="audiosc" id="audioSc" style="display:none">
    <div class="aavt" style="background:linear-gradient(135deg,var(--acc),var(--acc2))" id="aAvt">?</div>
    <div class="viz"><div class="vb"></div><div class="vb"></div><div class="vb"></div><div class="vb"></div><div class="vb"></div><div class="vb"></div><div class="vb"></div><div class="vb"></div></div>
    <div class="atimer" id="aTimer">00:00</div>
    <div class="albl">Voice chat — stranger connected</div>
    <div style="display:flex;gap:14px;margin-top:8px">
      <button class="cb cb-mute" id="aMuteBtn" onclick="toggleMute()">🎤</button>
      <button class="cb cb-next" onclick="nextStranger()">⏭️</button>
      <button class="cb cb-end" onclick="endChat()">📵</button>
    </div>
  </div>

  <div class="cpanel closed" id="cpanel" style="position:relative">
    <div class="cmsgs" id="cpMsgs"></div>
    <div id="friendReqSent" style="display:none;text-align:center;padding:8px;font-size:12px;color:var(--acc2)">
      ✅ Friend request sent!
    </div>
    <div class="epicker" id="ep1">
      <button class="ep" onclick="em1('😀')">😀</button><button class="ep" onclick="em1('😂')">😂</button>
      <button class="ep" onclick="em1('😍')">😍</button><button class="ep" onclick="em1('🥰')">🥰</button>
      <button class="ep" onclick="em1('😎')">😎</button><button class="ep" onclick="em1('🤔')">🤔</button>
      <button class="ep" onclick="em1('😢')">😢</button><button class="ep" onclick="em1('😡')">😡</button>
      <button class="ep" onclick="em1('👍')">👍</button><button class="ep" onclick="em1('❤️')">❤️</button>
      <button class="ep" onclick="em1('🔥')">🔥</button><button class="ep" onclick="em1('💯')">💯</button>
      <button class="ep" onclick="em1('🎉')">🎉</button><button class="ep" onclick="em1('👋')">👋</button>
      <button class="ep" onclick="em1('🙏')">🙏</button><button class="ep" onclick="em1('😊')">😊</button>
      <button class="ep" onclick="em1('🤣')">🤣</button><button class="ep" onclick="em1('🥺')">🥺</button>
      <button class="ep" onclick="em1('🤩')">🤩</button><button class="ep" onclick="em1('😴')">😴</button>
    </div>
    <div class="cinprow">
      <button class="emojibtn" onclick="toggleEP('ep1')">😊</button>
      <label class="emojibtn" title="Send Image" style="cursor:pointer">📎<input type="file" accept="image/*" style="display:none" onchange="sendImage(this,'cpMsgs')"></label>
      <input class="cinp" id="cpInp" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendVM()">
      <button class="sendbtn" onclick="sendVM()">➤</button>
    </div>
  </div>
</div>

<div class="sc off" id="textChatScreen">
  <div class="tctop">
    <div style="display:flex;align-items:center;gap:10px">
      <div class="ib" onclick="endChat()" style="font-size:13px">←</div>
      <div class="chavt" id="tcAvt" style="width:36px;height:36px;font-size:15px">?</div>
      <div><div class="chnm" id="tcNm">Stranger</div><div class="chst"><span class="pls"></span> Chatting</div></div>
    </div>
    <div style="display:flex;gap:8px">
      <button class="cb cb-next" style="width:38px;height:38px;font-size:15px" onclick="nextStranger()">⏭️</button>
      <button class="cb cb-end" style="width:38px;height:38px;font-size:15px" onclick="endChat()">✕</button>
    </div>
  </div>
  <div class="tcmsgs" id="tcMsgs"><div class="sysmsg">You're now chatting with a random stranger. Say hi! 👋</div></div>
  <div class="tcbottom" style="position:relative">
    <div class="epicker" id="ep2">
      <button class="ep" onclick="em2('😀')">😀</button><button class="ep" onclick="em2('😂')">😂</button>
      <button class="ep" onclick="em2('😍')">😍</button><button class="ep" onclick="em2('🥰')">🥰</button>
      <button class="ep" onclick="em2('😎')">😎</button><button class="ep" onclick="em2('🤔')">🤔</button>
      <button class="ep" onclick="em2('😢')">😢</button><button class="ep" onclick="em2('❤️')">❤️</button>
      <button class="ep" onclick="em2('🔥')">🔥</button><button class="ep" onclick="em2('👍')">👍</button>
      <button class="ep" onclick="em2('💯')">💯</button><button class="ep" onclick="em2('🎉')">🎉</button>
      <button class="ep" onclick="em2('👋')">👋</button><button class="ep" onclick="em2('🙏')">🙏</button>
      <button class="ep" onclick="em2('😊')">😊</button><button class="ep" onclick="em2('🤣')">🤣</button>
      <button class="ep" onclick="em2('🥺')">🥺</button><button class="ep" onclick="em2('😴')">😴</button>
      <button class="ep" onclick="em2('😡')">😡</button><button class="ep" onclick="em2('🤩')">🤩</button>
    </div>
    <div class="tcinprow">
      <button class="emojibtn" onclick="toggleEP('ep2')">😊</button>
      <input class="tcinp" id="tcInp" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendTM()">
      <button class="sendbtn" onclick="sendTM()">➤</button>
    </div>
  </div>
</div>

<div class="toast" id="toastEl"></div>

<script>
// ══════════════════════════════════════════════════
// FIREBASE CONFIG — AAPKA CONFIG YAHAN PASTE KARO
// ══════════════════════════════════════════════════
const firebaseConfig = {
  apiKey: "AIzaSyDH7joGhiEuGbo_-LVOpa04xrktzOPJYqg",
  authDomain: "connectnow-9809d.firebaseapp.com",
  projectId: "connectnow-9809d",
  storageBucket: "connectnow-9809d.firebasestorage.app",
  messagingSenderId: "360067378643",
  appId: "1:360067378643:web:51c671abe137fa4470d326"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ── Session persistence — REFRESH SE LOGOUT NAHI ──
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// ── Socket ──────────────────────────────────────────
const socket = io();

// ── State ────────────────────────────────────────────
const S = {
  user:null, mode:'video', roomId:null,
  muted:false, camOff:false, panelOpen:false,
  isPremium:false, timerInt:null, timerSec:0,
  pc:null, localStream:null, gender:'',
  gF:'any', cF:'any', plan:'monthly',
  confirmResult:null, recaptchaVerifier:null
};

const ctry = {PK:'🇵🇰 Pakistan',IN:'🇮🇳 India',SA:'🇸🇦 Saudi Arabia',AE:'🇦🇪 UAE',US:'🇺🇸 USA',GB:'🇬🇧 UK',BD:'🇧🇩 Bangladesh',EG:'🇪🇬 Egypt',TR:'🇹🇷 Turkey',other:'🌍 Other'};
const emojis = ['👽','🦊','🐻','🦁','🐯','🦝','🐸','🦄','🐲','🦋','🐧','🦉'];

// ── Stats ──────────────────────────────────────────
async function fetchStats(){
  try{const r=await fetch('/api/stats');const d=await r.json();
  document.getElementById('oN').textContent=d.online||0;
  document.getElementById('cN').textContent=d.inChats||0;
  document.getElementById('wN').textContent=d.waiting||0;}catch(e){}
}
setInterval(fetchStats,4000);

// ── Screen ──────────────────────────────────────────
function go(id){
  document.querySelectorAll('.sc').forEach(s=>s.classList.add('off'));
  document.getElementById(id).classList.remove('off');
}

// ── LOADING + AUTH CHECK ────────────────────────────
window.addEventListener('load', ()=>{
  // Set max dob date (must be 18+)
  const d=new Date();
  d.setFullYear(d.getFullYear()-18);
  const el=document.getElementById('dob');
  if(el) el.max=d.toISOString().split('T')[0];

  // Check if age confirmed
  const ageOk = localStorage.getItem('cn_age_ok');

  setTimeout(()=>{
    // Check Firebase auth state
    auth.onAuthStateChanged(user=>{
      if(user){
        // Already logged in — check profile
        const savedProfile = localStorage.getItem('cn_profile');
        if(savedProfile){
          const p = JSON.parse(savedProfile);
          S.user = p;
          applyUserUI(p);
          socket.emit('register',{name:p.name,gender:p.gender,country:p.country,isPremium:S.isPremium,mode:S.mode});
          go('homeScreen');
          fetchStats();
        } else {
          // Logged in but no profile — show profile setup
          setupProfileUI(user.displayName||'User', user.photoURL);
          go('loginScreen');
        }
      } else {
        // Not logged in
        if(!ageOk){
          go('ageGate');
        } else {
          go('loginScreen');
        }
      }
    });
  }, 2200);
});

// ── Age gate ──────────────────────────────────────
function confirmAge(){
  localStorage.setItem('cn_age_ok','1');
  go('loginScreen');
}
function denyAge(){
  document.body.innerHTML='<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Plus Jakarta Sans,sans-serif;font-size:16px;color:#6b6b88;text-align:center;padding:20px">This platform is for 18+ only.</div>';
}

// ── Google Login ───────────────────────────────────
function loginGoogle(){
  const btn=document.getElementById('googleBtn');
  btn.classList.add('loading');
  btn.textContent='⏳ Signing in...';
  const provider=new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(r=>{
      const u=r.user;
      setupProfileUI(u.displayName||'User', u.photoURL);
    })
    .catch(e=>{
      console.error(e);
      btn.classList.remove('loading');
      btn.innerHTML='<svg viewBox="0 0 24 24" style="width:20px;height:20px"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Continue with Google';
      toast('❌ Google login failed: '+e.message);
    });
}

// ── Phone OTP (Real Firebase) ──────────────────────
async function sendOTP(){
  const ph=document.getElementById('ph').value.trim();
  const cc=document.getElementById('cc').value;
  if(ph.length<9){toast('⚠️ Enter valid phone number');return;}
  const fullPhone=cc+ph;

  const btn=document.getElementById('otpBtn');
  btn.disabled=true; btn.textContent='⏳ Sending...';

  try{
    // Setup recaptcha
    if(!S.recaptchaVerifier){
      S.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container',{
        'size':'invisible',
        'callback':()=>{}
      });
    }
    S.confirmResult=await auth.signInWithPhoneNumber(fullPhone, S.recaptchaVerifier);
    toast('📱 OTP sent to '+fullPhone);
    document.getElementById('otpArea').classList.add('show');
    btn.textContent='Resend OTP';
    btn.disabled=false;
  }catch(e){
    console.error(e);
    btn.disabled=false;
    btn.textContent='Send OTP Code';
    toast('❌ Failed: '+e.message);
    // Reset recaptcha
    if(S.recaptchaVerifier){
      S.recaptchaVerifier.clear();
      S.recaptchaVerifier=null;
    }
  }
}

function otpNext(el,idx){
  if(el.value.length===1){
    const bs=document.querySelectorAll('.otp-i');
    if(idx<5)bs[idx+1].focus(); else verifyOTP();
  }
}

async function verifyOTP(){
  const bs=document.querySelectorAll('.otp-i');
  const otp=Array.from(bs).map(b=>b.value).join('');
  if(otp.length<6){toast('⚠️ Enter all 6 digits');return;}

  const btn=document.getElementById('verifyBtn');
  btn.disabled=true; btn.textContent='⏳ Verifying...';

  try{
    if(S.confirmResult){
      await S.confirmResult.confirm(otp);
      toast('✅ Phone verified!');
    } else {
      // Demo fallback
      setupProfileUI('User_'+document.getElementById('ph').value.slice(-4), null);
    }
  }catch(e){
    toast('❌ Wrong OTP code!');
    btn.disabled=false; btn.textContent='✓ Verify & Continue';
  }
}

// ── Profile setup ──────────────────────────────────
function setupProfileUI(name, photo){
  S.user={name,photo};
  document.getElementById('dispName').value=name;
  document.getElementById('profArea').classList.add('show');
}

function setG(g){
  S.gender=g;
  document.querySelectorAll('.gb').forEach(b=>b.classList.remove('on'));
  const idMap={male:'gbM',female:'gbF',other:'gbO'};const el=document.getElementById(idMap[g]);if(el)el.classList.add('on');
}

function enterApp(){
  const name=document.getElementById('dispName').value.trim()||S.user?.name||'Anonymous';
  const dob=document.getElementById('dob').value;
  const country=document.getElementById('myC').value;
  const gender=S.gender;

  if(!gender){toast('⚠️ Please select your gender');return;}

  if(dob){
    const age=Math.floor((new Date()-new Date(dob))/(365.25*24*3600*1000));
    if(age<18){toast('❌ You must be 18+ to use this app!');return;}
    S.user={...S.user,age};
    document.getElementById('pAgeBig').textContent=age;
  }

  const profile={name,gender,country,photo:S.user?.photo||null,age:S.user?.age||null};
  S.user=profile;

  // Save to localStorage — so refresh doesn't logout
  localStorage.setItem('cn_profile',JSON.stringify(profile));

  applyUserUI(profile);
  socket.emit('register',{name,gender,country,isPremium:S.isPremium,mode:S.mode});
  updateFilterLock();
  go('homeScreen');
  fetchStats();
  loadRecentChats();
  toast('🎉 Welcome '+name+'!');
}

function applyUserUI(p){
  const avt=document.getElementById('uAvt');
  if(p.photo){avt.innerHTML=`<img src="${p.photo}" alt="">`;}
  else{avt.textContent=p.name[0].toUpperCase();}
  document.getElementById('uNm').textContent=p.name;

  const pab=document.getElementById('pAvtBig');
  if(p.photo){pab.innerHTML=`<img src="${p.photo}" alt="">`;}
  else{pab.textContent=p.name[0].toUpperCase();}
  document.getElementById('pNmBig').textContent=p.name;
  document.getElementById('pSubBig').textContent=(ctry[p.country]||'🌍')+' • '+(p.gender==='male'?'👦 Male':p.gender==='female'?'👧 Female':'🌈 Other');
  if(p.age) document.getElementById('pAgeBig').textContent=p.age;
}

function logout(){
  auth.signOut().catch(()=>{});
  localStorage.removeItem('cn_profile');
  S.user=null; S.isPremium=false;
  cleanupChat();
  document.getElementById('profModal').classList.add('off');
  go('loginScreen');
  toast('👋 Logged out successfully');
}

// ── Mode ───────────────────────────────────────────
function setMode(m){
  S.mode=m;
  ['mV','mA','mT'].forEach(id=>document.getElementById(id).classList.remove('on'));
  document.getElementById(m==='video'?'mV':m==='audio'?'mA':'mT').classList.add('on');
}

// ── Filters ────────────────────────────────────────
function onFilter(){
  if(!S.isPremium){
    document.getElementById('gF').value='any';
    document.getElementById('cF').value='any';
    showPrem(); return;
  }
  S.gF=document.getElementById('gF').value;
  S.cF=document.getElementById('cF').value;
}

function updateFilterLock(){
  const lk=!S.isPremium;
  document.getElementById('gFC').classList.toggle('locked',lk);
  document.getElementById('cFC').classList.toggle('locked',lk);
  document.getElementById('pCTA').style.display=lk?'flex':'none';
  document.getElementById('ptag').style.display=lk?'none':'inline-block';
}

// ── Premium ────────────────────────────────────────
function showPrem(){document.getElementById('premModal').classList.remove('off')}
function hidePrem(){document.getElementById('premModal').classList.add('off')}
function pickPlan(p){
  S.plan=p;
  ['pl1','pl2','pl3'].forEach(id=>document.getElementById(id).classList.remove('on'));
  document.getElementById(p==='weekly'?'pl1':p==='monthly'?'pl2':'pl3').classList.add('on');
}
function doSub(){
  // TODO: Integrate Stripe for real payments
  toast('💳 Connect Stripe for real payments!');
  hidePrem();
  S.isPremium=true;
  updateFilterLock();
  toast('⭐ Premium activated!');
}

// ── Profile modal ──────────────────────────────────
function openProf(){document.getElementById('profModal').classList.remove('off')}
function hideProfModal(){document.getElementById('profModal').classList.add('off')}

// ── Find stranger ──────────────────────────────────
function findStranger(){
  document.getElementById('searching').classList.remove('off');
  document.getElementById('sSub').textContent='Searching worldwide...';
  socket.emit('find_stranger',{
    mode:S.mode,
    genderFilter:S.isPremium?S.gF:'any',
    countryFilter:S.isPremium?S.cF:'any',
    isPremium:S.isPremium,
    gender:S.user?.gender||'any',
    country:S.user?.country||'any',
    name:S.user?.name||'Anonymous'
  });
}

function cancelSearch(){
  document.getElementById('searching').classList.add('off');
  socket.emit('cancel_find');
}

// ── Socket ─────────────────────────────────────────
socket.on('waiting',d=>{
  document.getElementById('sSub').textContent=`Queue: #${d.position}`;
});

socket.on('matched',async d=>{
  S.roomId=d.roomId;
  document.getElementById('searching').classList.add('off');
  // Save to recent
  const sName = d.stranger?.name||'Anonymous';
  addToRecent(sName, 'Connected...', true);
  const em=emojis[Math.floor(Math.random()*emojis.length)];
  const sn=d.stranger.name||'Stranger';
  const sc=ctry[d.stranger.country]||'';

  if(S.mode==='text'){
    document.getElementById('tcNm').textContent=sn;
    document.getElementById('tcAvt').textContent=em;
    document.getElementById('tcMsgs').innerHTML=`<div class="sysmsg">You're now chatting with ${sn}. Say hi! 👋</div>`;
    go('textChatScreen');
  } else {
    document.getElementById('chNm').textContent=sn;
    document.getElementById('chAvt').textContent=em;
    document.getElementById('vPhAvt').textContent=em;
    document.getElementById('aAvt').textContent=em;
    document.getElementById('strNm').textContent=sn;
    document.getElementById('strCt').textContent=sc;
    document.getElementById('chLbl').textContent=S.mode==='audio'?'🎙️ AUDIO':'📹 VIDEO';
    const isAudio=S.mode==='audio';
    document.getElementById('vidArea').style.display=isAudio?'none':'flex';
    document.getElementById('audioSc').style.display=isAudio?'flex':'none';
    go('chatScreen');
    startTimer();
    await setupRTC(d.isInitiator);
  }
});

socket.on('stranger_left',()=>{
  // Add to recent chats
  const strName = document.getElementById('chNm')?.textContent || document.getElementById('tcNm')?.textContent;
  if(strName && strName !== 'Stranger') addToRecent(strName, 'Chat ended', true);
  toast('👋 Stranger left');
  stopTimer();
  if(S.pc){S.pc.close();S.pc=null;}
  const rv=document.getElementById('remoteVideo');
  rv.srcObject=null;rv.style.display='none';
  document.getElementById('vidPh').style.display='flex';
  document.getElementById('vPhTxt').textContent='Stranger disconnected';
});

socket.on('message',d=>{
  const c=S.mode==='text'?'tcMsgs':'cpMsgs';
  addMsg(c,d.text,'them');
  if(S.mode!=='text'&&!S.panelOpen)togglePanel();
});

socket.on('offer',async d=>{
  try{
    if(!S.pc) await setupRTC(false);
    await S.pc.setRemoteDescription(new RTCSessionDescription(d.offer));
    console.log('Remote desc set (offer)');
    // Drain queued ICE candidates
    if(S._iceQ && S._iceQ.length>0){
      for(const c of S._iceQ){ try{await S.pc.addIceCandidate(new RTCIceCandidate(c));}catch(e){} }
      S._iceQ=[];
    }
    const ans=await S.pc.createAnswer();
    await S.pc.setLocalDescription(ans);
    socket.emit('answer',{roomId:S.roomId,answer:ans});
    console.log('Answer sent');
  }catch(e){ console.error('Offer err:',e); }
});

socket.on('answer',async d=>{
  try{
    if(S.pc && S.pc.signalingState !== 'stable'){
      await S.pc.setRemoteDescription(new RTCSessionDescription(d.answer));
      console.log('Remote description set (answer)');
    }
  }catch(e){ console.error('Answer error:', e); }
});

socket.on('ice_candidate',async d=>{
  try{
    if(S.pc && S.pc.remoteDescription && d.candidate){
      await S.pc.addIceCandidate(new RTCIceCandidate(d.candidate));
    } else if(d.candidate){
      if(!S._iceQ) S._iceQ=[];
      S._iceQ.push(d.candidate);
    }
  }catch(e){ console.log('ICE err:',e.message); }
});

// ── WebRTC ─────────────────────────────────────────
async function setupRTC(init){
  // Humne aapka naya Metered.ca server aur Google STUN server yahan set kar diya hai
  let iceServers = [
    {urls:'stun:stun.l.google.com:19302'},
    {urls:'stun:stun1.l.google.com:19302'},
    {urls:'stun:stun2.l.google.com:19302'},
    {
      urls: 'turn:global.metered.ca:80',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turn:global.metered.ca:443',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turn:global.metered.ca:443?transport=tcp',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turns:global.metered.ca:443',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    }
  ];

  // Backend API fetch ko bypass kar rahe hain taake agar Render dynamic servers na bhi de, tab bhi call connect ho jaye
  console.log('Using hardcoded secure Metered ICE servers');

  const cfg = {
    iceServers,
    iceTransportPolicy: 'all',
    iceCandidatePoolSize: 10,
    bundlePolicy: 'max-bundle',
    rtcpMuxPolicy: 'require'
  };

  S.pc = new RTCPeerConnection(cfg);
  S._iceQ = [];
  console.log('RTCPeerConnection created with', iceServers.length, 'ICE servers');

  // Get local media
  try{
    const constraints = S.mode==='audio'
      ? {audio:{echoCancellation:true,noiseSuppression:true,sampleRate:44100}, video:false}
      : {audio:{echoCancellation:true,noiseSuppression:true,sampleRate:44100},
         video:{width:{ideal:320,max:640}, height:{ideal:240,max:480}, frameRate:{ideal:15,max:20}, facingMode:'user'}};
    S.localStream = await navigator.mediaDevices.getUserMedia(constraints);
    if(S.mode==='video'){
      const lv = document.getElementById('localVideo');
      lv.srcObject = S.localStream;
      lv.style.display = 'block';
      document.getElementById('selfPh').style.display = 'none';
    }
    S.localStream.getTracks().forEach(t => {
      S.pc.addTrack(t, S.localStream);
      console.log('Added local track:', t.kind);
    });
  }catch(e){
    toast('⚠️ Camera/mic permission needed!');
    console.error('getUserMedia error:', e.name, e.message);
  }

  // Remote track handler - simplified and robust
  const remoteStream = new MediaStream();
  const rv = document.getElementById('remoteVideo');
  rv.srcObject = remoteStream;
  rv.autoplay = true;
  rv.playsInline = true;
  rv.muted = false;

  S.pc.ontrack = e => {
    console.log('ontrack:', e.track.kind, 'state:', e.track.readyState);
    remoteStream.addTrack(e.track);

    if(e.track.kind === 'video'){
      rv.style.display = 'block';
      document.getElementById('vidPh').style.display = 'none';
      document.getElementById('selfPh').style.display = 'none';
      toast('📹 Video stream received!');
    }

    // Force play
    rv.play().catch(()=>{
      setTimeout(()=>rv.play().catch(()=>{}), 500);
    });

    e.track.onunmute = ()=>{
      console.log('Track unmuted:', e.track.kind);
      rv.play().catch(()=>{});
      if(e.track.kind==='video') toast('🟢 Video live!');
    };
  };

  // ICE candidate handler
  S.pc.onicecandidate = e => {
    if(e.candidate){
      console.log('ICE candidate type:', e.candidate.type, 'protocol:', e.candidate.protocol);
      socket.emit('ice_candidate', {roomId: S.roomId, candidate: e.candidate});
    } else {
      console.log('ICE gathering complete');
    }
  };

  S.pc.onicegatheringstatechange = () => {
    console.log('ICE gathering state:', S.pc.iceGatheringState);
  };

  S.pc.oniceconnectionstatechange = () => {
    const st = S.pc.iceConnectionState;
    console.log('ICE connection state:', st);
    if(st === 'connected' || st === 'completed'){
      toast('🟢 Connected!');
      const rv = document.getElementById('remoteVideo');
      if(rv.srcObject) rv.play().catch(()=>{});
    }
    if(st === 'failed'){
      toast('❌ Connection failed — tap Next');
      try{ S.pc.restartIce(); console.log('ICE restart attempted'); }catch(e){}
    }
    if(st === 'disconnected'){
      toast('⚠️ Reconnecting...');
      setTimeout(()=>{
        if(S.pc && S.pc.iceConnectionState === 'disconnected'){
          try{ S.pc.restartIce(); }catch(e){}
        }
      }, 3000);
    }
  };

  S.pc.onconnectionstatechange = () => {
    console.log('Connection state:', S.pc.connectionState);
    if(S.pc.connectionState === 'failed'){
      toast('❌ Connection failed');
    }
  };

  // Create offer if initiator
  if(init){
    try{
      const offer = await S.pc.createOffer({
        offerToReceiveAudio: true,
        offerToReceiveVideo: S.mode !== 'audio'
      });
      await S.pc.setLocalDescription(offer);
      socket.emit('offer', {roomId: S.roomId, offer});
      console.log('Offer sent');
    }catch(e){
      console.error('Offer creation error:', e);
    }
  }

}



// ── Camera Flip ────────────────────────────────────────
let currentFacingMode = 'user';
async function flipCamera(){
  if(S.mode==='audio'||!S.localStream){toast('Audio mode mein flip nahi!');return;}
  currentFacingMode = currentFacingMode==='user'?'environment':'user';
  const videoTrack = S.localStream.getVideoTracks()[0];
  if(!videoTrack){toast('Camera not found');return;}
  try{
    const newStream = await navigator.mediaDevices.getUserMedia({
      video:{facingMode:currentFacingMode,width:{ideal:320},height:{ideal:240},frameRate:{ideal:15}},
      audio:false
    });
    const newVT = newStream.getVideoTracks()[0];
    const sender = S.pc?.getSenders().find(s=>s.track?.kind==='video');
    if(sender) await sender.replaceTrack(newVT);
    S.localStream.removeTrack(videoTrack);
    S.localStream.addTrack(newVT);
    videoTrack.stop();
    const lv=document.getElementById('localVideo');
    lv.srcObject=S.localStream;
    lv.style.transform = currentFacingMode==='user'?'scaleX(-1)':'scaleX(1)';
    // Also update CSS class for back camera
    lv.classList.toggle('back-cam', currentFacingMode==='environment');
    toast(currentFacingMode==='user'?'🤳 Front camera':'📷 Back camera');
  }catch(e){
    currentFacingMode=currentFacingMode==='user'?'environment':'user';
    toast('⚠️ Camera flip failed: '+e.message);
  }
}

// ── Video Filters ───────────────────────────────────────
const FILTERS = [
  {name:'Normal',css:'none'},
  {name:'B&W',css:'grayscale(100%)'},
  {name:'Vintage',css:'sepia(80%) contrast(1.1)'},
  {name:'Vivid',css:'saturate(2) contrast(1.2) brightness(1.1)'},
  {name:'Dreamy',css:'hue-rotate(30deg) brightness(1.2) blur(0.5px)'},
  {name:'Neon',css:'hue-rotate(180deg) saturate(3) contrast(1.3)'},
  {name:'Warm',css:'sepia(30%) saturate(1.5) brightness(1.1)'},
  {name:'Cool',css:'hue-rotate(200deg) saturate(1.3)'},
];
let curFilter = 0;

function toggleFilter(){
  const btn=document.getElementById('filterBtn')||document.querySelector('.cb-filter');
  curFilter=(curFilter+1)%FILTERS.length;
  const f=FILTERS[curFilter];
  // Apply to ALL local video elements
  ['localVideo','pcLocalVideo'].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.style.filter=f.css;
  });
  if(btn){
    if(curFilter===0){ btn.classList.remove('on'); btn.textContent='✨'; }
    else { btn.classList.add('on'); btn.textContent='✨'; }
  }
  toast('Filter: '+f.name);
}

// ── Friend Request ──────────────────────────────────────
let pendingFriendRoom = null;
const myFriends = JSON.parse(localStorage.getItem('cn_friends')||'[]');

function sendFriendReq(){
  if(!S.roomId){toast('Connect to someone first!');return;}
  const nm=document.getElementById('chNm')?.textContent||'Stranger';
  socket.emit('friend_request',{roomId:S.roomId,fromName:S.user?.name||'Anonymous'});
  toast('👤 Friend request sent to '+nm+'!');
  document.getElementById('friendReqSent').style.display='block';
  setTimeout(()=>{document.getElementById('friendReqSent').style.display='none';},3000);
}

function showFriendModal(fromName){
  const old=document.getElementById('frModal');
  if(old)old.remove();
  const m=document.createElement('div');
  m.id='frModal';
  m.style.cssText='position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--s1);border:2px solid var(--acc2);border-radius:18px;padding:22px 24px;z-index:500;text-align:center;min-width:280px;box-shadow:0 8px 40px rgba(0,229,160,.2);animation:fadeUp .3s ease';
  m.innerHTML=`
    <div style="font-size:32px;margin-bottom:8px">🤝</div>
    <div style="font-weight:800;font-size:17px;margin-bottom:6px;color:var(--text)">${fromName}</div>
    <div style="color:var(--sub);font-size:13px;margin-bottom:18px">wants to be your friend!</div>
    <div style="display:flex;gap:10px;justify-content:center">
      <button onclick="acceptFriend('${fromName}')" style="padding:11px 22px;background:var(--acc2);border:none;border-radius:11px;color:#000;font-weight:800;font-size:14px;cursor:pointer;transition:all .2s">✅ Accept</button>
      <button onclick="document.getElementById('frModal').remove()" style="padding:11px 22px;background:var(--s3);border:1px solid var(--bdr);border-radius:11px;color:var(--sub);font-size:14px;cursor:pointer">❌ Decline</button>
    </div>
  `;
  document.body.appendChild(m);
  setTimeout(()=>document.getElementById('frModal')?.remove(),15000);
}

function acceptFriend(name){
  if(!myFriends.includes(name)) myFriends.push(name);
  localStorage.setItem('cn_friends',JSON.stringify(myFriends));
  document.getElementById('frModal')?.remove();
  const myName = S.user?.name || 'Anonymous';
  socket.emit('friend_accepted',{roomId:S.roomId,toName:name,fromName:myName});
  addToRecent(name, 'New friend! 🤝', false);
  toast('🎉 '+name+' added as friend!');
  // Auto open chat
  setTimeout(()=>openFriendChat(name), 800);
}

// ── Send Image ──────────────────────────────────────────
function sendImage(input,cid,isFriendChat=false){
  const file=input.files[0];
  if(!file)return;
  if(file.size>3*1024*1024){toast('⚠️ Max 3MB image!');return;}
  const reader=new FileReader();
  reader.onload=e=>{
    const d=e.target.result;
    addImgMsg(cid,d,'me');
    if(isFriendChat && pcRoomId){
      socket.emit('pc_image',{roomId:pcRoomId,imgData:d,fromName:S.user?.name});
    } else if(S.roomId){
      socket.emit('image_message',{roomId:S.roomId,imgData:d});
    }
    if(isFriendChat && activeFriendChat){
      saveMsgToHistory(activeFriendChat,'[Image]','me');
      addToRecent(activeFriendChat,'📎 Image',true);
    }
    toast('📎 Image sent!');
  };
  reader.readAsDataURL(file);
  input.value='';
}

function addImgMsg(cid,src,type){
  const c=document.getElementById(cid);if(!c)return;
  const d=document.createElement('div');
  d.className='msg '+type;
  d.style.cssText='padding:4px;max-width:200px;background:transparent';
  const img=document.createElement('img');
  img.src=src;
  img.style.cssText='width:100%;max-width:200px;border-radius:12px;display:block;cursor:pointer;border:2px solid var(--bdr)';
  img.onclick=()=>window.open(src,'_blank');
  d.appendChild(img);
  c.appendChild(d);
  c.scrollTop=c.scrollHeight;
}

// ── Controls ───────────────────────────────────────
function toggleMute(){
  S.muted=!S.muted;
  if(S.localStream)S.localStream.getAudioTracks().forEach(t=>t.enabled=!S.muted);
  const b1=document.getElementById('muteBtn');
  const b2=document.getElementById('aMuteBtn');
  if(b1){b1.textContent=S.muted?'🔇':'🎤';b1.classList.toggle('on',S.muted);}
  if(b2){b2.textContent=S.muted?'🔇':'🎤';b2.classList.toggle('on',S.muted);}
  toast(S.muted?'🔇 Muted':'🎤 Unmuted');
}

function toggleCam(){
  S.camOff=!S.camOff;
  if(S.localStream)S.localStream.getVideoTracks().forEach(t=>t.enabled=!S.camOff);
  const b=document.getElementById('camBtn');
  if(b){b.textContent=S.camOff?'🚫':'📷';b.classList.toggle('off',S.camOff);}
  toast(S.camOff?'📷 Camera off':'📷 Camera on');
}

// ── Private Chat ────────────────────────────────────────
let pcRoomId = null;
let pcStream = null;
let pcPc = null;
let currentFriendName = null;

function startPrivateChat(name){
  currentFriendName = name;
  document.getElementById('pcName').textContent = name;
  document.getElementById('pcAvt').textContent = name[0].toUpperCase();
  document.getElementById('pcMsgs').innerHTML = '<div class="sysmsg">Private chat with ' + name + '</div>';
  go('privateChatScreen');
  
  // Notify friend via socket (if they are online)
  socket.emit('private_call_request', {
    toName: name,
    fromName: S.user?.name || 'Anonymous',
    fromSocket: socket.id
  });
  
  document.getElementById('pcConnTxt').textContent = 'Calling ' + name + '...';
}

async function setupPrivateCall(init, roomId, withVideo=true){
  pcRoomId = roomId;
  
  // Private call ke liye bhi aapka secure Metered server set kar diya hai
  let iceServers = [
    {urls:'stun:stun.l.google.com:19302'},
    {urls:'stun:stun1.l.google.com:19302'},
    {
      urls: 'turn:global.metered.ca:80',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turn:global.metered.ca:443',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turn:global.metered.ca:443?transport=tcp',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    },
    {
      urls: 'turns:global.metered.ca:443',
      username: '33ca12a7bf24151fb87d4983',
      credential: 'tV3iNqX1jC8wP5s4'
    }
  ];
  
  pcPc = new RTCPeerConnection({iceServers, iceCandidatePoolSize:10});
  
  try{
    const pcConstraints = withVideo
      ? {audio:{echoCancellation:true,noiseSuppression:true}, video:{width:{ideal:320},height:{ideal:240},frameRate:{ideal:15},facingMode:'user'}}
      : {audio:{echoCancellation:true,noiseSuppression:true}, video:false};
    pcStream = await navigator.mediaDevices.getUserMedia(pcConstraints);
    const lv = document.getElementById('pcLocalVideo');
    if(withVideo && lv){ lv.srcObject = pcStream; lv.style.display = 'block'; }
    pcStream.getTracks().forEach(t => pcPc.addTrack(t, pcStream));
  }catch(e){ toast('⚠️ Camera permission needed!'); }
  
  const remoteStream = new MediaStream();
  const rv = document.getElementById('pcRemoteVideo');
  rv.srcObject = remoteStream;
  
  pcPc.ontrack = e => {
    remoteStream.addTrack(e.track);
    if(e.track.kind === 'video'){
      rv.style.display = 'block';
      document.getElementById('pcVidPh').style.display = 'none';
      rv.play().catch(()=>{setTimeout(()=>rv.play().catch(()=>{}),500);});
      toast('🟢 Private call connected!');
    }
  };
  
  pcPc.onicecandidate = e => {
    if(e.candidate) socket.emit('pc_ice', {roomId:pcRoomId, candidate:e.candidate});
  };
  
  pcPc.oniceconnectionstatechange = ()=>{
    if(pcPc.iceConnectionState==='connected') toast('🟢 Connected!');
    if(pcPc.iceConnectionState==='failed') toast('❌ Call failed');
  };
  
  if(init){
    const offer = await pcPc.createOffer({offerToReceiveAudio:true,offerToReceiveVideo:true});
    await pcPc.setLocalDescription(offer);
    socket.emit('pc_offer', {roomId:pcRoomId, offer});
  }
}

function togglePCMute(){
  if(!pcStream) return;
  const muted = !pcStream.getAudioTracks()[0]?.enabled;
  pcStream.getAudioTracks().forEach(t=>t.enabled=muted);
  const btn = document.getElementById('pcMuteBtn');
  btn.textContent = muted ? '🎤' : '🔇';
  toast(muted ? '🎤 Unmuted' : '🔇 Muted');
}

function togglePCFilter(){
  const lv = document.getElementById('pcLocalVideo');
  if(lv) toggleFilter();
}

function sendPCMsg(){
  const i = document.getElementById('pcInp');
  const t = i.value.trim(); if(!t) return;
  addMsg('pcMsgs', t, 'me');
  socket.emit('pc_message', {roomId:pcRoomId, text:t, toName:activeFriendChat, fromName:S.user?.name});
  if(activeFriendChat){
    saveMsgToHistory(activeFriendChat, t, 'me');
    addToRecent(activeFriendChat, 'You: '+t, true);
  }
  i.value = '';
}

function addPCEmoji(em){
  const i = document.getElementById('pcInp');
  i.value += em; i.focus();
  document.getElementById('pcEp')?.classList.remove('show');
}

function togglePanel(){
  S.panelOpen=!S.panelOpen;
  const p=document.getElementById('cpanel');
  p.classList.toggle('closed',!S.panelOpen);
  p.classList.toggle('open',S.panelOpen);
}

function toggleEP(id){
  document.getElementById(id).classList.toggle('show');
}

function em1(e){const i=document.getElementById('cpInp');i.value+=e;i.focus();document.getElementById('ep1').classList.remove('show');}
function em2(e){const i=document.getElementById('tcInp');i.value+=e;i.focus();document.getElementById('ep2').classList.remove('show');}

function nextStranger(){toast('🔀 Finding next...');cleanupChat();setTimeout(findStranger,600);}
function endChat(){cleanupChat();go('homeScreen');toast('Chat ended');}

function cleanupChat(){
  socket.emit('next');
  // Re-register user so they appear online again
  if(S.user){
    setTimeout(()=>{
      socket.emit('register',{name:S.user.name,gender:S.user.gender,country:S.user.country,isPremium:S.isPremium,mode:S.mode});
    }, 300);
  }
  stopTimer();
  S.panelOpen=false;
  document.getElementById('cpanel').classList.add('closed');
  document.getElementById('cpanel').classList.remove('open');
  if(S.pc){S.pc.close();S.pc=null;}
  if(S.localStream){S.localStream.getTracks().forEach(t=>t.stop());S.localStream=null;}
  const rv=document.getElementById('remoteVideo');rv.style.display='none';rv.srcObject=null;rv.load();
  const lv=document.getElementById('localVideo');lv.style.display='none';lv.srcObject=null;
  document.getElementById('selfPh').style.display='flex';
  document.getElementById('vidPh').style.display='flex';
  document.getElementById('vPhTxt').textContent='Connecting...';
  document.getElementById('ep1').classList.remove('show');
  S.roomId=null;
}

// End call but stay in chat
function endCallKeepChat(){
  if(pcPc){ pcPc.close(); pcPc = null; }
  if(pcStream){ pcStream.getTracks().forEach(t=>t.stop()); pcStream = null; }
  const rv=document.getElementById('pcRemoteVideo');
  if(rv){rv.srcObject=null;rv.style.display='none';}
  const lv=document.getElementById('pcLocalVideo');
  if(lv){lv.srcObject=null;lv.style.display='none';}
  const ph=document.getElementById('pcVidPh');
  if(ph)ph.style.display='flex';
  // Hide call area, show chat
  const ca=document.getElementById('pcCallArea');
  if(ca){ca.style.display='none';ca.style.height='';}
  pcRoomId=null;
  // Stay in private chat screen
  addMsg('pcMsgs','📵 Call ended','me');
  toast('Call ended');
}

function endPrivateCall(){
  endCallKeepChat();
  go('homeScreen');
  loadRecentChats();
}

// Start quick call from chat header
function startQuickCall(callType){
  const name = activeFriendChat;
  if(!name){toast('No friend selected');return;}
  
  // Show call area
  const ca=document.getElementById('pcCallArea');
  ca.style.display='flex';
  ca.style.height='220px';
  ca.style.flexDirection='column';
  
  const callAvt=document.getElementById('pcCallAvt');
  if(callAvt) callAvt.textContent=name[0].toUpperCase();
  const callNm=document.getElementById('pcCallName');
  if(callNm) callNm.textContent=name;
  
  // Show cam button for video
  const camBtn=document.getElementById('pcCamBtn');
  if(camBtn) camBtn.style.display=callType==='video'?'flex':'none';
  
  // Show audio viz for audio only
  const viz=document.getElementById('pcAudioViz');
  if(viz) viz.style.display=callType==='audio'?'flex':'none';
  
  document.getElementById('pcConnTxt').textContent='Calling '+name+'...';
  
  const roomId='pc_'+socket.id.substr(0,8)+'_'+Date.now();
  socket.emit('private_call_request',{
    toName:name,
    fromName:S.user?.name||'Anonymous',
    roomId,
    callType
  });
  setupPrivateCall(true, roomId, callType==='video');
}

function togglePCCam(){
  if(!pcStream) return;
  const vt=pcStream.getVideoTracks()[0];
  if(vt){
    vt.enabled=!vt.enabled;
    const btn=document.getElementById('pcCamBtn');
    if(btn) btn.textContent=vt.enabled?'📷':'🚫';
  }
}

function reportUser(){toast('⚑ User reported!');endChat();}

// ── Timer ──────────────────────────────────────────
function startTimer(){
  S.timerSec=0;stopTimer();
  S.timerInt=setInterval(()=>{
    S.timerSec++;
    const m=String(Math.floor(S.timerSec/60)).padStart(2,'0');
    const s=String(S.timerSec%60).padStart(2,'0');
    const el=document.getElementById('aTimer');
    if(el)el.textContent=m+':'+s;
  },1000);
}
function stopTimer(){if(S.timerInt){clearInterval(S.timerInt);S.timerInt=null;}}

// ── Messages ───────────────────────────────────────
function sendVM(){const i=document.getElementById('cpInp');const t=i.value.trim();if(!t)return;addMsg('cpMsgs',t,'me');socket.emit('message',{roomId:S.roomId,text:t});i.value='';}
function sendTM(){const i=document.getElementById('tcInp');const t=i.value.trim();if(!t)return;addMsg('tcMsgs',t,'me');socket.emit('message',{roomId:S.roomId,text:t});i.value='';}

function addMsg(cid,text,type){
  const c=document.getElementById(cid);if(!c)return;
  const d=document.createElement('div');
  d.className='msg '+type;d.textContent=text;
  c.appendChild(d);c.scrollTop=c.scrollHeight;
}

// ── Toast ──────────────────────────────────────────
function toast(msg,dur=2800){
  const el=document.getElementById('toastEl');
  el.textContent=msg;el.classList.add('show');
  clearTimeout(toast._t);
  toast._t=setTimeout(()=>el.classList.remove('show'),dur);
}

// ── OTP keyboard ───────────────────────────────────
document.addEventListener('keydown',e=>{
  if(e.target.classList.contains('otp-i')&&e.key==='Backspace'&&!e.target.value){
    const bs=document.querySelectorAll('.otp-i');
    const i=Array.from(bs).indexOf(e.target);
    if(i>0)bs[i-1].focus();
  }
});

// ── Friends Section ────────────────────────────────────
function showFriendsSection(){
  loadFriends();
  go('friendsScreen');
}

// ── Recent Chats System ────────────────────────────────
let recentChats = JSON.parse(localStorage.getItem('cn_recent')||'[]');

function addToRecent(name, lastMsg, isRead){
  const existing = recentChats.findIndex(r=>r.name===name);
  const item = {name, lastMsg:lastMsg||'', time:Date.now(), unread:isRead?0:1};
  if(existing>=0){ 
    item.unread = isRead ? 0 : (recentChats[existing].unread||0)+1;
    recentChats.splice(existing,1); 
  }
  recentChats.unshift(item);
  if(recentChats.length>20) recentChats=recentChats.slice(0,20);
  localStorage.setItem('cn_recent',JSON.stringify(recentChats));
  loadRecentChats();
}

function loadRecentChats(){
  const list = document.getElementById('recentChatsList');
  if(!list) return;
  recentChats = JSON.parse(localStorage.getItem('cn_recent')||'[]');
  
  if(recentChats.length===0){
    list.innerHTML='<div style="text-align:center;padding:20px;color:var(--sub);font-size:13px">No recent chats yet. Find a stranger!</div>';
    return;
  }

  const colors=['linear-gradient(135deg,#f472b6,#e879f9)','linear-gradient(135deg,#34d399,#059669)','linear-gradient(135deg,#fbbf24,#f59e0b)','linear-gradient(135deg,#60a5fa,#3b82f6)','linear-gradient(135deg,var(--acc),var(--acc2))'];
  
  list.innerHTML = recentChats.map((r,i)=>{
    const t = Date.now()-r.time;
    const timeStr = t<60000?'now':t<3600000?Math.floor(t/60000)+'m':t<86400000?Math.floor(t/3600000)+'h':Math.floor(t/86400000)+'d';
    const col = colors[i%colors.length];
    const isFriend = myFriends.includes(r.name);
    return `<div class="ci" onclick="openFriendChat('${r.name}')">
      <div class="ciavt" style="background:${col};font-size:15px;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800">${r.name[0].toUpperCase()}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px">
          <div class="cinm">${r.name}</div>
          ${isFriend?'<span style="font-size:10px;background:var(--acc2);color:#000;padding:1px 6px;border-radius:8px;font-weight:700">Friend</span>':''}
        </div>
        <div class="ciprev">${r.lastMsg||'Tap to chat'}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-size:11px;color:var(--sub)">${timeStr}</div>
        ${r.unread>0?`<div class="cbdg">${r.unread}</div>`:''}
      </div>
    </div>`;
  }).join('');
}

// ── Friend Chat (Private Text + Video) ─────────────────
let activeFriendChat = null;
let friendChatHistory = {};

function openFriendChat(name){
  activeFriendChat = name;
  
  // Mark as read
  const ridx = recentChats.findIndex(r=>r.name===name);
  if(ridx>=0){ recentChats[ridx].unread=0; localStorage.setItem('cn_recent',JSON.stringify(recentChats)); }
  
  // Set header
  document.getElementById('pcName').textContent = name;
  document.getElementById('pcAvt').textContent = name[0].toUpperCase();
  document.getElementById('pcCallAvt').textContent = name[0].toUpperCase();
  document.getElementById('pcCallName').textContent = name;
  document.getElementById('pcStatus').textContent = 'Friend';
  
  // Hide call area - show chat only
  const ca=document.getElementById('pcCallArea');
  if(ca){ca.style.display='none';ca.style.height='';}
  
  // Load chat history
  const history = JSON.parse(localStorage.getItem('cn_chat_'+name)||'[]');
  const msgs = document.getElementById('pcMsgs');
  msgs.innerHTML = '<div class="sysmsg">💬 Chat with '+name+'</div>';
  history.forEach(m=>{
    if(m.type==='img') addImgMsg('pcMsgs',m.text,m.from);
    else{
      const d=document.createElement('div');
      d.className='msg '+m.from;
      d.textContent=m.text;
      msgs.appendChild(d);
    }
  });
  msgs.scrollTop=msgs.scrollHeight;
  
  go('privateChatScreen');
  // NO auto call - just open chat
}

function startPrivateCall(name, callType='video'){
  // Open chat first, then start call
  openFriendChat(name);
  setTimeout(()=>startQuickCall(callType), 300);
}

function saveMsgToHistory(name, text, from){
  const key = 'cn_chat_'+name;
  const history = JSON.parse(localStorage.getItem(key)||'[]');
  history.push({text,from,time:Date.now()});
  if(history.length>100) history.shift();
  localStorage.setItem(key,JSON.stringify(history));
}

function loadFriends(){
  const friends = JSON.parse(localStorage.getItem('cn_friends')||'[]');
  const list = document.getElementById('friendsList');
  const noMsg = document.getElementById('noFriendsMsg');
  const count = document.getElementById('friendCount');
  
  count.textContent = friends.length + ' friend' + (friends.length !== 1 ? 's' : '');
  
  if(friends.length === 0){
    if(noMsg) noMsg.style.display = 'block';
    return;
  }
  if(noMsg) noMsg.style.display = 'none';
  
  // Clear existing friend items (keep noFriendsMsg)
  const items = list.querySelectorAll('.friend-item');
  items.forEach(i => i.remove());
  
  friends.forEach(name => {
    const colors = ['linear-gradient(135deg,#f472b6,#e879f9)','linear-gradient(135deg,#34d399,#059669)','linear-gradient(135deg,#fbbf24,#f59e0b)','linear-gradient(135deg,#60a5fa,#3b82f6)','linear-gradient(135deg,var(--acc),var(--acc2))'];
    const div = document.createElement('div');
    div.className = 'friend-item';
    div.style.cssText = 'padding:14px 16px;border-bottom:1px solid var(--bdr)';
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
        <div class="ciavt" style="background:${colors[Math.floor(Math.random()*colors.length)]};font-size:16px;width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800">${name[0].toUpperCase()}</div>
        <div style="flex:1">
          <div style="font-weight:700;font-size:15px">${name}</div>
          <div style="font-size:12px;color:var(--sub)">Friend</div>
        </div>
        <button onclick="removeFriend('${name}')" style="background:transparent;border:none;color:var(--sub);font-size:18px;cursor:pointer;padding:4px">✕</button>
      </div>
      <div style="display:flex;gap:8px">
        <button onclick="openFriendChat('${name}')" style="flex:1;padding:9px 6px;background:var(--s2);border:1px solid var(--bdr);border-radius:10px;color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .2s">💬 Chat</button>
        <button onclick="startPrivateCall('${name}','audio')" style="flex:1;padding:9px 6px;background:var(--s2);border:1px solid var(--bdr);border-radius:10px;color:var(--text);font-size:12px;font-weight:600;cursor:pointer;transition:all .2s">🎙️ Audio</button>
        <button onclick="startPrivateCall('${name}','video')" style="flex:1;padding:9px 6px;background:linear-gradient(135deg,var(--acc),#9b6cff);border:none;border-radius:10px;color:#fff;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s">📹 Video</button>
      </div>
    `;
    list.appendChild(div);
  });
}

function removeFriend(name){
  let friends = JSON.parse(localStorage.getItem('cn_friends')||'[]');
  friends = friends.filter(f => f !== name);
  localStorage.setItem('cn_friends', JSON.stringify(friends));
  loadFriends();
  toast('Removed ' + name);
}

// ── Friend Request Socket Events ───────────────────────
socket.on('friend_request', d=>{
  console.log('Friend request from:', d.fromName);
  showFriendModal(d.fromName || 'Stranger');
});

socket.on('friend_accepted', d=>{
  toast('🎉 '+d.fromName+' accepted your friend request!');
});

// ── Image Message Socket ────────────────────────────────
socket.on('image_message', d=>{
  const cid = S.mode==='text'?'tcMsgs':'cpMsgs';
  addImgMsg(cid, d.imgData, 'them');
  if(S.mode!=='text' && !S.panelOpen) togglePanel();
  toast('📎 Image received!');
});

// ── Private Call Socket Events ─────────────────────────
socket.on('private_call_request', async d => {
  if(d.chatOnly) return; // Just opening chat, no call notification
  
  // Show incoming call notification
  const old = document.getElementById('inCallModal');
  if(old) old.remove();
  const callType = d.callType || 'video';
  const callIcon = callType==='audio' ? '🎙️' : '📹';
  const m = document.createElement('div');
  m.id = 'inCallModal';
  m.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:var(--s1);border:2px solid var(--acc);border-radius:18px;padding:22px 24px;z-index:500;text-align:center;min-width:280px;box-shadow:0 8px 40px rgba(108,71,255,.3);animation:fadeUp .3s ease';
  m.innerHTML = `
    <div style="font-size:32px;margin-bottom:8px">${callIcon}</div>
    <div style="font-weight:800;font-size:17px;margin-bottom:4px">${d.fromName}</div>
    <div style="color:var(--sub);font-size:13px;margin-bottom:16px">${callType} call incoming...</div>
    <div style="display:flex;gap:10px;justify-content:center">
      <button onclick="acceptIncomingCall('${d.fromName}','${d.roomId||'pc_'+Math.random().toString(36).substr(2,8)}','${callType}')" style="padding:11px 22px;background:var(--acc2);border:none;border-radius:11px;color:#000;font-weight:800;font-size:14px;cursor:pointer;display:flex;align-items:center;gap:6px">✅ Answer</button>
      <button onclick="document.getElementById('inCallModal').remove()" style="padding:11px 22px;background:var(--acc3);border:none;border-radius:11px;color:#fff;font-size:14px;cursor:pointer">❌ Decline</button>
    </div>
  `;
  document.body.appendChild(m);
  setTimeout(()=>document.getElementById('inCallModal')?.remove(), 25000);
});

async function acceptIncomingCall(fromName, roomId, callType='video'){
  document.getElementById('inCallModal')?.remove();
  activeFriendChat = fromName;
  
  // Open chat
  openFriendChat(fromName);
  
  // Show call area
  const ca=document.getElementById('pcCallArea');
  ca.style.display='flex';
  ca.style.height='220px';
  ca.style.flexDirection='column';
  
  const callAvt=document.getElementById('pcCallAvt');
  if(callAvt) callAvt.textContent=fromName[0].toUpperCase();
  document.getElementById('pcConnTxt').textContent='Connecting...';
  
  const viz=document.getElementById('pcAudioViz');
  if(viz) viz.style.display=callType==='audio'?'flex':'none';
  const camBtn=document.getElementById('pcCamBtn');
  if(camBtn) camBtn.style.display=callType==='video'?'flex':'none';
  
  socket.emit('private_call_accepted',{roomId,fromName:S.user?.name});
  await setupPrivateCall(false, roomId, callType==='video');
}



socket.on('private_call_accepted', async d => {
  document.getElementById('pcConnTxt').textContent = 'Connected!';
  const roomId = 'pc_' + socket.id.substr(0,8);
  await setupPrivateCall(true, roomId);
});

socket.on('pc_offer', async d => {
  if(!pcPc) await setupPrivateCall(false, d.roomId);
  await pcPc.setRemoteDescription(new RTCSessionDescription(d.offer));
  const ans = await pcPc.createAnswer();
  await pcPc.setLocalDescription(ans);
  socket.emit('pc_answer', {roomId:d.roomId, answer:ans});
});

socket.on('pc_answer', async d => {
  if(pcPc) await pcPc.setRemoteDescription(new RTCSessionDescription(d.answer));
});

socket.on('pc_ice', async d => {
  try{ if(pcPc && pcPc.remoteDescription) await pcPc.addIceCandidate(new RTCIceCandidate(d.candidate)); }catch(e){}
});

socket.on('pc_message', d => {
  addMsg('pcMsgs', d.text, 'them');
  if(d.fromName){
    saveMsgToHistory(d.fromName, d.text, 'them');
    addToRecent(d.fromName, d.text, activeFriendChat===d.fromName);
  }
});

socket.on('pc_image', d => {
  addImgMsg('pcMsgs', d.imgData, 'them');
  if(d.fromName){
    saveMsgToHistory(d.fromName,'[Image]','them');
    addToRecent(d.fromName,'📎 Image',activeFriendChat===d.fromName);
  }
  toast('📎 Image received!');
});

// Close emoji pickers on outside click
document.addEventListener('click',e=>{
  if(!e.target.closest('.epicker')&&!e.target.classList.contains('emojibtn')){
    document.querySelectorAll('.epicker').forEach(ep=>ep.classList.remove('show'));
  }
});
</script>
</body>
</html>
