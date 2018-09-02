var el = function(element) {
    if (element.charAt(0) === "#") { // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

var int = function(element){
    return parseFloat(element.innerText);
};

//Time Duration Converter
var dur = function(element){
    var hr = parseInt(element/60), 
        min = parseInt(element%60),
        sec = parseInt((element-parseInt(element))*60);
    if (hr < 10){
    var dhr = "0"+hr
    }
    else{
        dhr=hr;
    }
    if (min < 10){
      var dmin = "0"+min
    }
    else{
        dmin=min;
    }
    if (sec < 10){
      var dsec = "0"+sec
    }
    else{
        dsec=sec;
    }
    return dhr + ":" + dmin + ":" + dsec;
}

//Time Reconverter
var ctime = function (element){
    var time = element.innerText.split(":");
    for(var i=0;i<time.length;i++){
    time[i] = parseFloat(time[i]);
    }
    return time[0]*60+time[1] + time[2]/60;
}

var tpout = el('#tp-out'),
    bssp = el('#bss-prof'),
    facp = el('#fac-prof'), 
    hsp = el('#hs-prof'), 
    fsp = el('#fs-prof'), 
    fmp = el('#fm-prof'), 
    gssp = el('#gss-prof'), 
    dsp = el('#ds-prof'), 
    fap = el('#fa-prof'), 
    ffrp = el('#ffr-prof'), 
    asp = el('#as-prof'), 
    comp = el('#com-prof'),    
    comdur = [1,0.9,0.85,0.8],
    sneed = el('.need'),
    sdis = el('.dis');

//Total Profit
var tprofit = function(){
var facpr = int(facp),
    totalp = int(tpout),
    bsspr = int(bssp),
    hspr = int(hsp),
    fspr = int(fsp),
    fmpr = int(fmp),
    gsspr = int(gssp),
    dspr = int(dsp),
    fapr = int(fap),
    ffrpr = int(ffrp),
    aspr = int(asp),
    compr = int(comp),
    comprof = bsspr + hspr + fspr + fmpr + gsspr + dspr + fapr + ffrpr + aspr,
    totalp = comprof + facpr;
    for(var i=0;i<sdis.length;i++){
        if(parseFloat(sdis[i].innerText)>0){
            sdis[i].style.color = "rgb(6,116,166)";
        }
        else{
            sdis[i].style.color = "#cbcbcbff";
        }
    }
    comp.innerHTML = Math.round(comprof*100)/100;
    tpout.innerHTML = Math.round(totalp*100)/100;    
}


//Factory
var slots = el('#slots'),
    slotscnt = int(slots),
    facpout = el('#facp-out'),
    factout = el('#fact-out'),
    facout = el('.fac-out'),
    metbutton = el('.met-in'),
    metout = el('#met-out'),
    metcnt = int(metout),
    metneed = el('#met-need'),
    metncnt = int(metneed),
    wudbutton = el('.wud-in'),
    wudout = el('#wud-out'),
    wudcnt = int(wudout),
    wudneed = el('#wud-need'),
    wudncnt = int(wudneed),
    plsbutton = el('.pls-in'),
    plsout = el('#pls-out'),
    plsneed = el('#pls-need'),
    plsncnt = int(plsneed),
    plscnt = int(plsout),
    sedbutton = el('.sed-in'),
    sedout = el('#sed-out'),
    sedcnt = int(sedout),
    sedneed = el('#sed-need'),
    sedncnt = int(sedneed),
    minbutton = el('.min-in'),
    minout = el('#min-out'),
    mincnt = int(minout),
    minneed = el('#min-need'),
    minncnt = int(minneed),
    chmbutton = el('.chm-in'),
    chmout = el('#chm-out'),
    chmneed = el('#chm-need'),
    chmncnt = int(chmneed),
    chmcnt = int(chmout),
    txtbutton = el('.txt-in'),
    txtout = el('#txt-out'),
    txtcnt = int(txtout),
    txtneed = el('#txt-need'),
    txtncnt = int(txtneed),
    snsbutton = el('.sns-in'),
    snsout = el('#sns-out'),
    snscnt = int(snsout),
    snsneed = el('#sns-need'),
    snsncnt = int(snsneed),
    glsbutton = el('.gls-in'),
    glsout = el('#gls-out'),
    glscnt = int(glsout),
    glsneed = el('#gls-need'),
    glsncnt = int(glsneed),
    fedbutton = el('.fed-in'),
    fedout = el('#fed-out'),
    fedcnt = int(fedout),
    fedneed = el('#fed-need'),
    fedncnt = int(fedneed),
    ecmbutton = el('.ecm-in'),
    ecmout = el('#ecm-out'),
    ecmcnt = int(ecmout),
    ecmneed = el('#ecm-need'),
    ecmncnt = int(ecmneed),
    faccnt = metcnt+wudcnt+plscnt+sedcnt+mincnt+chmcnt+txtcnt+snscnt+glscnt+fedcnt+ecmcnt,
    facval = [10,20,25,30,40,60,90,110,120,140,160],
    factime = [1,3,9,20,30,120,180,240,300,360,420],
    facpval;

//Profit
var fprofit = function(){
var facpval = int(facpout),
    metcnt = int(metout),
    wudcnt = int(wudout),
    plscnt = int(plsout),
    sedcnt = int(sedout),
    mincnt = int(minout),
    chmcnt = int(chmout),
    txtcnt = int(txtout),
    snscnt = int(snsout),
    glscnt = int(glsout),
    fedcnt = int(fedout),
    ecmcnt = int(ecmout),
    facpval = metcnt*facval[0]+wudcnt*facval[1]+plscnt*facval[2]+sedcnt*facval[3]+mincnt*facval[4]+chmcnt*facval[5]+txtcnt*facval[6]+snscnt*facval[7]+ glscnt*facval[8]+fedcnt*facval[9]+ecmcnt*facval[10],
    facpr = metcnt*facval[0]/factime[0] + wudcnt*facval[1]/factime[1] + plscnt*facval[2]/factime[2] + sedcnt*facval[3]/factime[3] + mincnt*facval[4]/factime[4] + chmcnt*facval[5]/factime[5] + txtcnt*facval[6]/factime[6] + snscnt*facval[7]/factime[7] + glscnt*facval[8]/factime[8] + fedcnt*facval[9]/factime[9] + ecmcnt*facval[10]/factime[10];
    facpout.innerHTML = facpval;
    facp.innerHTML = Math.round(facpr*100)/100;
    tprofit();
}

//Slots
var slotsclick = function(){
    if (slotscnt<=5){
        slotscnt=slotscnt+1;
        slots.innerHTML = slotscnt;
        slotscnt = int(slots);
    }
    if(slotscnt>5){
        slotscnt=2;
        slots.innerHTML = slotscnt;
        slotscnt = int(slots);
    }
};
    slots.onclick = slotsclick;
    

//facprod
var facprod = function(out,cnt,need,ncnt) {
var facpval=int(facpout),
    fcnt = parseFloat(el('#fcnt').value),
    metcnt = int(metout),
    wudcnt = int(wudout),
    plscnt = int(plsout),
    sedcnt = int(sedout),
    mincnt = int(minout),
    chmcnt = int(chmout),
    txtcnt = int(txtout),
    snscnt = int(snsout),
    glscnt = int(glsout),
    fedcnt = int(fedout),
    ecmcnt = int(ecmout),
    faccnt= metcnt+wudcnt+plscnt+sedcnt+mincnt+chmcnt+txtcnt+snscnt+glscnt+fedcnt+ecmcnt;
 if (ops==='add'){
     if((faccnt+1)/slotscnt>fcnt){
        alert('You are exceeding the number of maximum slots!');
        return;
     }
    else{ 
        cnt = cnt+1;  
     }
 }
if (ops==='sub'){
    if (cnt>0){
        cnt = cnt-1;
    }
    else{  
        alert('The operation you have requested is not possible');
        return;
    }
}
   out.innerHTML = cnt;
   faccnt= metcnt+wudcnt+plscnt+sedcnt+mincnt+chmcnt+txtcnt+snscnt+glscnt+fedcnt+ecmcnt;
   fprofit();
}

//Metal Production
var metclick = function(){
    metcnt = int(metout),
    metncnt = int(metneed),
    ops = this.getAttribute('data-ops');
    facprod(metout,metcnt,metneed,metncnt);
}
for(var i=0;i<metbutton.length;i++){
    metbutton[i].onclick = metclick;
}

//Wood Production
var wudclick = function(){
    wudcnt = int(wudout),
    wudncnt = int(wudneed),
    ops = this.getAttribute('data-ops');
    facprod(wudout,wudcnt,wudneed,wudncnt);
}
for(var i=0;i<wudbutton.length;i++){
    wudbutton[i].onclick = wudclick;
}

//Plastic Production
var plsclick = function(){
    plscnt = int(plsout),
    plsncnt = int(plsneed),
    ops = this.getAttribute('data-ops');
    facprod(plsout,plscnt,plsneed,plsncnt);
}
for(var i=0;i<plsbutton.length;i++){
    plsbutton[i].onclick = plsclick;
}

//Seed Production
var sedclick = function(){
    sedcnt = int(sedout),
    sedncnt = int(sedneed),
    ops = this.getAttribute('data-ops');
    facprod(sedout,sedcnt,sedneed,sedncnt);
}
for(var i=0;i<sedbutton.length;i++){
    sedbutton[i].onclick = sedclick;
}
    
//Minerals Production
var minclick = function(){
    mincnt = int(minout),
    minncnt = int(minneed),
    ops = this.getAttribute('data-ops');
    facprod(minout,mincnt,minneed,minncnt);
}
for(var i=0;i<minbutton.length;i++){
    minbutton[i].onclick = minclick;
}

//Chemicals Production
var chmclick = function(){
    chmcnt = int(chmout),
    chmncnt = int(chmneed),
    ops = this.getAttribute('data-ops');
    facprod(chmout,chmcnt,chmneed,chmncnt);
}
for(var i=0;i<chmbutton.length;i++){
    chmbutton[i].onclick = chmclick;
}

//Textiles Production
var txtclick = function(){
    txtcnt = int(txtout),
    txtncnt = int(txtneed),
    ops = this.getAttribute('data-ops');
    facprod(txtout,txtcnt,txtneed,txtncnt);
}
for(var i=0;i<txtbutton.length;i++){
    txtbutton[i].onclick = txtclick;
}

//Sugar & Spice Production
var snsclick = function(){
    snscnt = int(snsout),
    snsncnt = int(snsneed),
    ops = this.getAttribute('data-ops');
    facprod(snsout,snscnt,snsneed,snsncnt);
}
for(var i=0;i<snsbutton.length;i++){
    snsbutton[i].onclick = snsclick;
}

//Glass Production
var glsclick = function(){
    glscnt = int(glsout),
    glsncnt = int(glsneed),
    ops = this.getAttribute('data-ops');
    facprod(glsout,glscnt,glsneed,glsncnt);
}
for(var i=0;i<glsbutton.length;i++){
    glsbutton[i].onclick = glsclick;
}

//Feed Production
var fedclick = function(){
    fedcnt = int(fedout),
    fedncnt = int(fedneed),
    ops = this.getAttribute('data-ops');
    facprod(fedout,fedcnt,fedneed,fedncnt);
}
for(var i=0;i<fedbutton.length;i++){
    fedbutton[i].onclick = fedclick;
}

//Electrical Component Production
var ecmclick = function(){
    ecmcnt = int(ecmout),
    ecmncnt = int(ecmneed),
    ops = this.getAttribute('data-ops');
    facprod(ecmout,ecmcnt,ecmneed,ecmncnt);
}
for(var i=0;i<ecmbutton.length;i++){
    ecmbutton[i].onclick = ecmclick;
}

//Production
var prod = function(ncnt, need, material,ops){
var metncnt = int(metneed),
    wudncnt = int(wudneed),
    plsncnt = int(plsneed),
    sedncnt = int(sedneed),
    minncnt = int(minneed),
    chmncnt = int(chmneed),
    txtncnt = int(txtneed),
    snsncnt = int(snsneed),
    glsncnt = int(glsneed),
    fedncnt = int(fedneed),
    ecmncnt = int(ecmneed),
    nncnt = int(nneed),
    pkncnt = int(pkneed),
    bkncnt = int(bkneed),
    cemncnt = int(cemneed),
    glncnt = int(glneed),
    pntncnt = int(pntneed),
    hamncnt = int(hamneed),
    tapncnt = int(tapneed),
    shvncnt = int(shvneed),
    sptncnt = int(sptneed),
    ladncnt = int(ladneed),
    drlncnt = int(drlneed),
    grsncnt = int(grsneed),
    sapncnt = int(sapneed),
    gchncnt = int(gchneed),
    frpncnt = int(frpneed),
    lmwncnt = int(lmwneed),
    ggnncnt = int(ggnneed),
    vegncnt = int(vegneed),
    flrncnt = int(flrneed),
    melncnt = int(melneed),
    crmncnt = int(crmneed),
    crnncnt = int(crnneed),
    chsncnt = int(chsneed),
    befncnt = int(befneed),
    chrncnt = int(chrneed),
    tabncnt = int(tabneed),
    htxncnt = int(htxneed),
    cabncnt = int(cabneed),
    sofncnt = int(sofneed),
    donncnt = int(donneed),
    gsmncnt = int(gsmneed),
    brlncnt = int(brlneed),
    cckncnt = int(cckneed),
    yogncnt = int(yogneed),
    cofncnt = int(cofneed),
    capncnt = int(capneed),
    shuncnt = int(shuneed),
    watncnt = int(watneed),
    sutncnt = int(sutneed),
    bpkncnt = int(bpkneed),
    icsncnt = int(icsneed),
    pizncnt = int(pizneed),
    burncnt = int(burneed),
    fryncnt = int(fryneed),
    lemncnt = int(lemneed),
    popncnt = int(popneed),
    bbqncnt = int(bbqneed),
    refncnt = int(refneed),
    tvsncnt = int(tvsneed),
    lytncnt = int(lytneed),
    micncnt = int(micneed);
    if (ncnt>=0){
        if(ops==="add"){
    ncnt = ncnt+parseFloat(material);
        }
        if(ops==="sub"){
    ncnt = ncnt-parseFloat(material);
        }
        if (ncnt<0){
        ncnt = 0;
        }    
    }
    need.innerHTML = ncnt;
    for(var i=0;i<sneed.length;i++){
        if(parseFloat(sneed[i].innerText)>0){
            sneed[i].style.color = "#ff5a5fff";
        }
        else{
            sneed[i].style.color = "#cbcbcbff";
        }
    }
}


//Building Supplies Store var
var bsspout = el('#bssp-out'),
    bsstout = el('#bsst-out'),
    bsslvl = el('#bss-lvl'),
    bsslvlcnt = int(bsslvl),
    bssdur = el('.bssdur'),
    bssdurcnt = [5,30,20,50,60,60],
    nbutton = el('.n-in'),
    nout = el('#n-out'),
    ncnt = int(nout),
    nneed = el('#n-need'),
    nncnt = int(nneed),
    pkbutton = el('.pk-in'),
    pkout = el('#pk-out'),
    pkcnt = int(pkout),
    pkneed = el('#pk-need'),
    pkncnt = int(pkneed),
    bkbutton = el('.bk-in'),
    bkout = el('#bk-out'),
    bkcnt = int(bkout),
    bkneed = el('#bk-need'),
    bkncnt = int(bkneed),
    cembutton = el('.cem-in'),
    cemout = el('#cem-out'),
    cemcnt = int(cemout),
    cemneed = el('#cem-need'),
    cemncnt = int(cemneed),
    glbutton = el('.gl-in'),
    glout = el('#gl-out'),
    glcnt = int(glout),
    glneed = el('#gl-need'),
    glncnt = int(glneed),
    pntbutton = el('.pnt-in'),
    pntout = el('#pnt-out'),
    pntcnt = int(pntout),
    pntneed = el('#pnt-need'),
    pntncnt = int(pntneed),
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt,
    bssval = [80, 120, 190, 440, 440, 320],
    bsstime = [[5,30,20,50,60,60],
               [5*0.9,30*0.9,20*0.9,50*0.9,60*0.9,60*0.9],
               [5*0.85,30*0.85,20*0.85,50*0.85,60*0.85,60*0.85],
               [5*0.8,30*0.8,20*0.8,50*0.8,60*0.8,60*0.8]];

//Profit
var bssprofit = function(){
var ncnt = int(nout),
    pkcnt = int(pkout),
    bkcnt = int(bkout),
    cemcnt = int(cemout),
    glcnt = int(glout),
    pntcnt = int(pntout),
    bsspval = (ncnt)*bssval[0]+(pkcnt)*bssval[1]+(bkcnt)*bssval[2]+(cemcnt)*bssval[3]+(glcnt)*bssval[4]+(pntcnt)*bssval[5],
    bsstval = ncnt*bsstime[bsslvlcnt][0]+pkcnt*bsstime[bsslvlcnt][1]+bkcnt*bsstime[bsslvlcnt][2]+cemcnt*bsstime[bsslvlcnt][3]+glcnt*bsstime[bsslvlcnt][4]+pntcnt*bsstime[bsslvlcnt][5],
    bssprof = ncnt*(bssval[0]-2*facval[0])+pkcnt*(bssval[1]-2*facval[1])+bkcnt*(bssval[2]-2*facval[4])+cemcnt*(bssval[3]-2*facval[4]-facval[5])+glcnt*(bssval[4]-facval[2]-2*facval[5])+pntcnt*(bssval[5]-2*facval[0]-facval[4]-2*facval[5]);
        if(bsstval>0){
            var bssppmin = bssprof/bsstval;
        }
        else{
            bssppmin = 0;
        }
      bsspout.innerHTML = bsspval;
      bsstout.innerHTML = dur(bsstval);
      bssp.innerHTML = Math.round(bssppmin*100)/100;
      tprofit();
}

//Lvl
var bsslvlclick = function(){
var lvldur = [];  
    if (bsslvlcnt<=3){
        bsslvlcnt=bsslvlcnt+1;
        bsslvl.innerHTML = bsslvlcnt;
     for(i=0;i<bssdur.length;i++){
     lvldur[i] = bssdurcnt[i]*comdur[bsslvlcnt];
     bssdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(bsslvlcnt>3){
        bsslvlcnt=0;
        bsslvl.innerHTML = bsslvlcnt;
        for(i=0;i<bssdur.length;i++){
        lvldur[i] = bssdurcnt[i];
        bssdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    bssprofit();
};
    bsslvl.onclick = bsslvlclick;
        
//Nails
var nclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed);
if (ops==='add'){
    if(bsscnt<11){
        ncnt = ncnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(ncnt>0){
    ncnt = ncnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    nout.innerHTML = ncnt;
    prod(metncnt,metneed,"2",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;
    bssprofit();
}
for(var i=0;i<nbutton.length;i++){
    nbutton[i].onclick = nclick;
}

//Planks
var pkclick = function(){
var ops = this.getAttribute('data-ops'),
    wudncnt = int(wudneed);
if (ops==='add'){
    if(bsscnt<11){
        pkcnt = pkcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(pkcnt>0){
    pkcnt = pkcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    pkout.innerHTML = pkcnt;
    prod(wudncnt,wudneed,"2",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;  
    bssprofit(); 
}
for(var i=0;i<pkbutton.length;i++){
    pkbutton[i].onclick = pkclick;
}

//Bricks
var bkclick = function(){
var ops = this.getAttribute('data-ops'),
    minncnt = int(minneed);
if (ops==='add'){
    if(bsscnt<11){
        bkcnt = bkcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(bkcnt>0){
    bkcnt = bkcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    bkout.innerHTML = bkcnt;
    prod(minncnt,minneed,"2",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;  
    bssprofit();  
}
for(var i=0;i<bkbutton.length;i++){
    bkbutton[i].onclick = bkclick;
}

//Cement
var cemclick = function(){
var ops = this.getAttribute('data-ops'),
    minncnt = int(minneed),
    chmncnt = int(chmneed);
if (ops==='add'){
    if(bsscnt<11){
        cemcnt = cemcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(cemcnt>0){
    cemcnt = cemcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    cemout.innerHTML = cemcnt;
    prod(minncnt,minneed,"2",ops);
    prod(chmncnt,chmneed,"1",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;  
    bssprofit();    
}
for(var i=0;i<cembutton.length;i++){
    cembutton[i].onclick = cemclick;
}

//Glue
var glclick = function(){
var ops = this.getAttribute('data-ops'),
    plsncnt = int(plsneed),
    chmncnt = int(chmneed);
if (ops==='add'){
    if(bsscnt<11){
        glcnt = glcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(glcnt>0){
    glcnt = glcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    glout.innerHTML = glcnt;
    prod(plsncnt,plsneed,"1",ops);
    prod(chmncnt,chmneed,"2",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;  
    bssprofit();     
}
for(var i=0;i<glbutton.length;i++){
    glbutton[i].onclick = glclick;
}

//Paint
var pntclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    minncnt = int(minneed),
    chmncnt = int(chmneed);
if (ops==='add'){
    if(bsscnt<11){
        pntcnt = pntcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(pntcnt>0){
    pntcnt = pntcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    pntout.innerHTML = pntcnt;
    prod(metncnt,metneed,"2",ops);
    prod(minncnt,minneed,"1",ops);
    prod(chmncnt,chmneed,"2",ops);
    bsscnt = ncnt+pkcnt+bkcnt+cemcnt+glcnt+pntcnt;  
    bssprofit();   
}
for(var i=0;i<pntbutton.length;i++){
    pntbutton[i].onclick = pntclick;
}

//Hardware Store var
var hspout = el('#hsp-out'),
    hstout = el('#hst-out'),
    hslvl = el('#hs-lvl'),
    hslvlcnt = int(hslvl),
    hsdur = el('.hsdur'),
    hsdurcnt = [14,20,30,45,60,120],
    hambutton = el('.ham-in'),
    hamout = el('#ham-out'),
    hamcnt = int(hamout),
    hamneed = el('#ham-need'),
    hamncnt = int(hamneed),
    tapbutton = el('.tap-in'),
    tapout = el('#tap-out'),
    tapcnt = int(tapout),
    tapneed = el('#tap-need'),
    tapncnt = int(tapneed),
    shvbutton = el('.shv-in'),
    shvout = el('#shv-out'),
    shvcnt = int(shvout),
    shvneed = el('#shv-need'),
    shvncnt = int(shvneed),
    sptbutton = el('.spt-in'),
    sptout = el('#spt-out'),
    sptcnt = int(sptout),
    sptneed = el('#spt-need'),
    sptncnt = int(sptneed),
    ladbutton = el('.lad-in'),
    ladout = el('#lad-out'),
    ladcnt = int(ladout),
    ladneed = el('#lad-need'),
    ladncnt = int(ladneed),
    drlbutton = el('.drl-in'),
    drlout = el('#drl-out'),
    drlcnt = int(drlout),
    drlneed = el('#drl-need'),
    drlncnt = int(drlneed),
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt,
    hsval = [90, 110, 150, 250, 420, 590],
    hstime = [[14,20,30,45,60,120],
               [14*0.9,20*0.9,30*0.9,45*0.9,60*0.9,120*0.9],
               [14*0.85,20*0.85,30*0.85,45*0.85,60*0.85,120*0.85],
               [14*0.8,20*0.8,30*0.8,45*0.8,60*0.8,120*0.8]];

//Profit
var hsprofit = function(){
var hamcnt = int(hamout),
    tapcnt = int(tapout),
    shvcnt = int(shvout),
    sptcnt = int(sptout),
    ladcnt = int(ladout),
    drlcnt = int(drlout),
    hspval = hamcnt*hsval[0]+tapcnt*hsval[1]+shvcnt*hsval[2]+sptcnt*hsval[3]+ladcnt*hsval[4]+drlcnt*hsval[5],
    hstval = hamcnt*hstime[hslvlcnt][0]+tapcnt*hstime[hslvlcnt][1]+shvcnt*hstime[hslvlcnt][2]+sptcnt*hstime[hslvlcnt][3]+ladcnt*hstime[hslvlcnt][4]+drlcnt*hstime[hslvlcnt][5],
    hsprof = hamcnt*(hsval[0]-facval[0]-facval[1])+tapcnt*(hsval[1]-facval[0]-facval[2])+shvcnt*(hsval[2]-facval[0]-facval[1]-facval[2])+sptcnt*(hsval[3]-2*(facval[0]+facval[1]+facval[2]))+ladcnt*(hsval[4]-2*facval[0]-2*bssval[1])+drlcnt*(hsval[5]-2*facval[0]-facval[10]-2*facval[2]);
        if(hstval>0){
            var hsppmin = hsprof/hstval;
        }
        else{
            hsppmin = 0;
        }
      hspout.innerHTML = hspval;
      hstout.innerHTML = dur(hstval);
      hsp.innerHTML = Math.round(hsppmin*100)/100;
      tprofit();
}

//Lvl
var hslvlclick = function(){
var lvldur = [];  
    if (hslvlcnt<=3){
        hslvlcnt=hslvlcnt+1;
        hslvl.innerHTML = hslvlcnt;
     for(i=0;i<hsdur.length;i++){
     lvldur[i] = hsdurcnt[i]*comdur[hslvlcnt];
     hsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(hslvlcnt>3){
        hslvlcnt=0;
        hslvl.innerHTML = hslvlcnt;
        for(i=0;i<hsdur.length;i++){
        lvldur[i] = hsdurcnt[i];
        hsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    hsprofit();
};
    hslvl.onclick = hslvlclick;
        
//Hammers
var hamclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    wudncnt = int(wudneed);
if (ops==='add'){
    if(hscnt<11){
        hamcnt = hamcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(hamcnt>0){
    hamcnt = hamcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    hamout.innerHTML = hamcnt;
    prod(metncnt,metneed,"1",ops);
    prod(wudncnt,wudneed,"1",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<hambutton.length;i++){
    hambutton[i].onclick = hamclick;
}
        
//Measuring Tapes
var tapclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    plsncnt = int(plsneed);
if (ops==='add'){
    if(hscnt<11){
        tapcnt = tapcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(tapcnt>0){
    tapcnt = tapcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    tapout.innerHTML = tapcnt;
    prod(metncnt,metneed,"1",ops);
    prod(plsncnt,plsneed,"1",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<tapbutton.length;i++){
    tapbutton[i].onclick = tapclick;
}
        
//Shovels
var shvclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    wudncnt = int(wudneed),
    plsncnt = int(plsneed);
if (ops==='add'){
    if(hscnt<11){
        shvcnt = shvcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(shvcnt>0){
    shvcnt = shvcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    shvout.innerHTML = shvcnt;
    prod(metncnt,metneed,"1",ops);
    prod(wudncnt,wudneed,"1",ops);
    prod(plsncnt,plsneed,"1",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<shvbutton.length;i++){
    shvbutton[i].onclick = shvclick;
}
        
//Cooking Utensils
var sptclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    wudncnt = int(wudneed),
    plsncnt = int(plsneed);
if (ops==='add'){
    if(hscnt<11){
        sptcnt = sptcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(sptcnt>0){
    sptcnt = sptcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    sptout.innerHTML = sptcnt;
    prod(metncnt,metneed,"2",ops);
    prod(wudncnt,wudneed,"2",ops);
    prod(plsncnt,plsneed,"2",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<sptbutton.length;i++){
    sptbutton[i].onclick = sptclick;
}
        
//Ladders
var ladclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    pkncnt = int(pkneed);
if (ops==='add'){
    if(hscnt<11){
        ladcnt = ladcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(ladcnt>0){
    ladcnt = ladcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    ladout.innerHTML = ladcnt;
    prod(metncnt,metneed,"2",ops);
    prod(pkncnt,pkneed,"2",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<ladbutton.length;i++){
    ladbutton[i].onclick = ladclick;
}
        
//Drill
var drlclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    plsncnt = int(plsneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(hscnt<11){
        drlcnt = drlcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(drlcnt>0){
    drlcnt = drlcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    drlout.innerHTML = drlcnt;
    prod(metncnt,metneed,"2",ops);
    prod(plsncnt,plsneed,"2",ops);
    prod(ecmncnt,ecmneed,"1",ops);  
    hscnt = hamcnt+tapcnt+shvcnt+sptcnt+ladcnt+drlcnt;
    hsprofit();
}
for(var i=0;i<drlbutton.length;i++){
    drlbutton[i].onclick = drlclick;
}

//Farmer's Market var
var fmpout = el('#fmp-out'),
    fmtout = el('#fmt-out'),
    fmlvl = el('#fm-lvl'),
    fmlvlcnt = int(fmlvl),
    fmdur = el('.fmdur'),
    fmdurcnt = [20,30,90,75,60,105,150],
    vegbutton = el('.veg-in'),
    vegout = el('#veg-out'),
    vegcnt = int(vegout),
    vegneed = el('#veg-need'),
    vegncnt = int(vegneed),
    flrbutton = el('.flr-in'),
    flrout = el('#flr-out'),
    flrcnt = int(flrout),
    flrneed = el('#flr-need'),
    flrncnt = int(flrneed),
    melbutton = el('.mel-in'),
    melout = el('#mel-out'),
    melcnt = int(melout),
    melneed = el('#mel-need'),
    melncnt = int(melneed),
    crmbutton = el('.crm-in'),
    crmout = el('#crm-out'),
    crmcnt = int(crmout),
    crmneed = el('#crm-need'),
    crmncnt = int(crmneed),
    crnbutton = el('.crn-in'),
    crnout = el('#crn-out'),
    crncnt = int(crnout),
    crnneed = el('#crn-need'),
    crnncnt = int(crnneed),
    chsbutton = el('.chs-in'),
    chsout = el('#chs-out'),
    chscnt = int(chsout),
    chsneed = el('#chs-need'),
    chsncnt = int(chsneed),
    befbutton = el('.bef-in'),
    befout = el('#bef-out'),
    befcnt = int(befout),
    befneed = el('#bef-need'),
    befncnt = int(befneed),
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt,
    fmval = [160, 570, 730, 440, 280, 660, 860],
    fmtime = [[20,30,90,75,60,105,150],
               [20*0.90,30*0.90,90*0.90,75*0.90,60*0.90,105*0.90,150*0.90],
               [20*0.85,30*0.85,90*0.85,75*0.85,60*0.85,105*0.85,150*0.85],
               [20*0.80,30*0.80,90*0.80,75*0.80,60*0.80,105*0.80,150*0.80]];

//Profit
var fmprofit = function(){
var vegcnt = int(vegout),
    flrcnt = int(flrout),
    melcnt = int(melout),
    crmcnt = int(crmout),
    crncnt = int(crnout),
    chscnt = int(chsout),
    befcnt = int(befout),
    fmpval = vegcnt*fmval[0]+flrcnt*fmval[1]+melcnt*fmval[2]+crmcnt*fmval[3]+crncnt*fmval[4]+chscnt*fmval[5]+befcnt*fmval[6],
    fmtval = vegcnt*fmtime[fmlvlcnt][0]+flrcnt*fmtime[fmlvlcnt][1]+melcnt*fmtime[fmlvlcnt][2]+crmcnt*fmtime[fmlvlcnt][3]+crncnt*fmtime[fmlvlcnt][4]+chscnt*fmtime[fmlvlcnt][5]+befcnt*fmtime[fmlvlcnt][6],
    fmprof = vegcnt*(fmval[0]-2*facval[3])+flrcnt*(fmval[1]-2*(facval[3]+facval[6]))+melcnt*(fmval[2]-2*facval[3]-gssval[1])+crmcnt*(fmval[3]-facval[9])+crncnt*(fmval[4]-4*facval[3]-facval[4])+chscnt*(fmval[5]-2*facval[9])+befcnt*(fmval[6]-3*facval[9]);
        if(fmtval>0){
            var fmppmin = fmprof/fmtval;
        }
        else{
            fmppmin = 0;
        }
      fmpout.innerHTML = fmpval;
      fmtout.innerHTML = dur(fmtval);
      fmp.innerHTML = Math.round(fmppmin*100)/100;
      tprofit();
}

//Lvl
var fmlvlclick = function(){
var lvldur = [];  
    if (fmlvlcnt<=3){
        fmlvlcnt=fmlvlcnt+1;
        fmlvl.innerHTML = fmlvlcnt;
     for(i=0;i<fmdur.length;i++){
     lvldur[i] = fmdurcnt[i]*comdur[fmlvlcnt];
     fmdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(fmlvlcnt>3){
        fmlvlcnt=0;
        fmlvl.innerHTML = fmlvlcnt;
        for(i=0;i<fmdur.length;i++){
        lvldur[i] = fmdurcnt[i];
        fmdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    fmprofit();
};
    fmlvl.onclick = fmlvlclick;

//Vegetables
var vegclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed);
    if (ops==='add'){
        if(fmcnt<11){
            vegcnt = vegcnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(vegcnt>0){
            vegcnt = vegcnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }   
    }
    vegout.innerHTML = vegcnt;     
    prod(sedncnt,sedneed,"2",ops);
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<vegbutton.length;i++){
    vegbutton[i].onclick = vegclick;
}

//Flour Bags
var flrclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    txtncnt = int(txtneed);
    if (ops==='add'){
        if(fmcnt<11){
            flrcnt = flrcnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(flrcnt>0){
            flrcnt = flrcnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }   
    }
    flrout.innerHTML = flrcnt;     
    prod(sedncnt,sedneed,"2",ops);     
    prod(txtncnt,txtneed,"2",ops);
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<flrbutton.length;i++){
    flrbutton[i].onclick = flrclick;
}

//Fruits & Berries
var melclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    sapncnt = int(sapneed);
    if (ops==='add'){
        if(fmcnt<11){
             melcnt = melcnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(melcnt>0){
            melcnt = melcnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }
    }
    melout.innerHTML = melcnt;     
    prod(sedncnt,sedneed,"2",ops);     
    prod(sapncnt,sapneed,"1",ops);
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<melbutton.length;i++){
    melbutton[i].onclick = melclick;
}

//Cream
var crmclick = function(){
var ops = this.getAttribute('data-ops'),
    fedncnt = int(fedneed);
    if (ops==='add'){
        if(fmcnt<11){
            crmcnt = crmcnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(crmcnt>0){
            crmcnt = crmcnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }
    }
    crmout.innerHTML = crmcnt;     
    prod(fedncnt,fedneed,"1",ops);     
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<crmbutton.length;i++){
    crmbutton[i].onclick = crmclick;
}

//Corn
var crnclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    minncnt = int(minneed);
    if (ops==='add'){
        if(fmcnt<11){
            crncnt = crncnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(crncnt>0){
            crncnt = crncnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }  
    }
    crnout.innerHTML = crncnt;     
    prod(sedncnt,sedneed,"4",ops);     
    prod(minncnt,minneed,"1",ops);
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<crnbutton.length;i++){
    crnbutton[i].onclick = crnclick;
}

//Cheese
var chsclick = function(){
var ops = this.getAttribute('data-ops'),
    fedncnt = int(fedneed);
    if (ops==='add'){
        if(fmcnt<11){
            chscnt = chscnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(chscnt>0){
            chscnt = chscnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }
    }
    chsout.innerHTML = chscnt;     
    prod(fedncnt,fedneed,"2",ops);     
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<chsbutton.length;i++){
    chsbutton[i].onclick = chsclick;
}

//Beef
var befclick = function(){
var ops = this.getAttribute('data-ops'),
    fedncnt = int(fedneed);
    if (ops==='add'){
        if(fmcnt<11){
            befcnt = befcnt+1;
        }
        else{    
            alert('You are exceeding the number of maximum slots!');
            return;
        }
    }
    if (ops==='sub'){
        if(befcnt>0){
            befcnt = befcnt-1;
        }
        else{ 
            alert('The operation you have requested is not possible');
            return;
        }  
    }
    befout.innerHTML = befcnt;     
    prod(fedncnt,fedneed,"3",ops);     
    fmcnt = vegcnt+flrcnt+melcnt+crmcnt+crncnt+chscnt+befcnt;
    fmprofit();

}
for(var i=0;i<befbutton.length;i++){
    befbutton[i].onclick = befclick;
}

//Furniture Store var
var fspout = el('#fsp-out'),
    fstout = el('#fst-out'),
    fslvl = el('#fs-lvl'),
    fslvlcnt = int(fslvl),
    fsdur = el('.fsdur'),
    fsdurcnt = [20,30,75,45,150],
    chrbutton = el('.chr-in'),
    chrout = el('#chr-out'),
    chrcnt = int(chrout),
    chrneed = el('#chr-need'),
    chrncnt = int(chrneed),
    tabbutton = el('.tab-in'),
    tabout = el('#tab-out'),
    tabcnt = int(tabout),
    tabneed = el('#tab-need'),
    tabncnt = int(tabneed),
    htxbutton = el('.htx-in'),
    htxout = el('#htx-out'),
    htxcnt = int(htxout),
    htxneed = el('#htx-need'),
    htxncnt = int(htxneed),
    cabbutton = el('.cab-in'),
    cabout = el('#cab-out'),
    cabcnt = int(cabout),
    cabneed = el('#cab-need'),
    cabncnt = int(cabneed),
    sofbutton = el('.sof-in'),
    sofout = el('#sof-out'),
    sofcnt = int(sofout),
    sofneed = el('#sof-need'),
    sofncnt = int(sofneed),
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt,
    fsval = [310, 420, 820, 1740, 840],
    fstime = [[20,30,75,45,150],
               [20*0.90,30*0.90,75*0.90,45*0.90,150*0.90],
               [20*0.85,30*0.85,75*0.85,45*0.85,150*0.85],
               [20*0.80,30*0.80,75*0.80,45*0.80,150*0.80]];

//Profit
var fsprofit = function(){
var chrcnt = int(chrout),
    tabcnt = int(tabout),
    htxcnt = int(htxout),
    cabcnt = int(cabout),
    sofcnt = int(sofout),
    fspval = chrcnt*fsval[0]+tabcnt*fsval[1]+htxcnt*fsval[2]+cabcnt*fsval[3]+sofcnt*fsval[4],
    fstval = chrcnt*fstime[fslvlcnt][0]+tabcnt*fstime[fslvlcnt][1]+htxcnt*fstime[fslvlcnt][2]+cabcnt*fstime[fslvlcnt][3]+sofcnt*fstime[fslvlcnt][4],
    fsprof = chrcnt*(fsval[0]-2*facval[1]-bssval[0]-hsval[0])+tabcnt*(fsval[1]-bssval[1]-2*bssval[0]-hsval[0])+htxcnt*(fsval[2]-2*facval[6]-hsval[1])+cabcnt*(fsval[3]-bssval[5]-2*facval[8]-2*bssval[1])+sofcnt*(fsval[4]-3*facval[6]-bssval[4]-hsval[5]);
        if(fstval>0){
            var fsppmin = fsprof/fstval;
        }
        else{
            fsppmin = 0;
        }
      fspout.innerHTML = fspval;
      fstout.innerHTML = dur(fstval);
      fsp.innerHTML = Math.round(fsppmin*100)/100;
      tprofit();
}

//Lvl
var fslvlclick = function(){
var lvldur = [];  
    if (fslvlcnt<=3){
        fslvlcnt=fslvlcnt+1;
        fslvl.innerHTML = fslvlcnt;
     for(i=0;i<fsdur.length;i++){
     lvldur[i] = fsdurcnt[i]*comdur[fslvlcnt];
     fsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(fslvlcnt>3){
        fslvlcnt=0;
        fslvl.innerHTML = fslvlcnt;
        for(i=0;i<fsdur.length;i++){
        lvldur[i] = fsdurcnt[i];
        fsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    fsprofit();
};
    fslvl.onclick = fslvlclick;
        
//Chairs
var chrclick = function(){
var ops = this.getAttribute('data-ops'),
    wudncnt = int(wudneed),
    nncnt = int(nneed),
    hamncnt = int(hamneed);
if (ops==='add'){
    if(fscnt<11){
        chrcnt = chrcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(chrcnt>0){
    chrcnt = chrcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    chrout.innerHTML = chrcnt;
    prod(wudncnt,wudneed,"2",ops);
    prod(nncnt,nneed,"1",ops);
    prod(hamncnt,hamneed,"1",ops);
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt;
    fsprofit();
}
for(var i=0;i<chrbutton.length;i++){
    chrbutton[i].onclick = chrclick;
}
        
//Tables
var tabclick = function(){
var ops = this.getAttribute('data-ops'),
    pkncnt = int(pkneed),
    nncnt = int(nneed),
    hamncnt = int(hamneed);
if (ops==='add'){
    if(fscnt<11){
        tabcnt = tabcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(tabcnt>0){
    tabcnt = tabcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    tabout.innerHTML = tabcnt;
    prod(pkncnt,pkneed,"1",ops);
    prod(nncnt,nneed,"2",ops);
    prod(hamncnt,hamneed,"1",ops);
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt;
    fsprofit();
}
for(var i=0;i<tabbutton.length;i++){
    tabbutton[i].onclick = tabclick;
}
        
//Home Textiles
var htxclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    tapncnt = int(tapneed);
if (ops==='add'){
    if(fscnt<11){
        htxcnt = htxcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(htxcnt>0){
    htxcnt = htxcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    htxout.innerHTML = htxcnt;
    prod(txtncnt,txtneed,"2",ops);
    prod(tapncnt,tapneed,"1",ops);
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt;
    fsprofit();
}
for(var i=0;i<htxbutton.length;i++){
    htxbutton[i].onclick = htxclick;
}
        
//Cupboard
var cabclick = function(){
var ops = this.getAttribute('data-ops'),
    glsncnt = int(glsneed),
    pkncnt = int(pkneed),
    pntncnt = int(pntneed);
if (ops==='add'){
    if(fscnt<11){
        cabcnt = cabcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(cabcnt>0){
    cabcnt = cabcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    cabout.innerHTML = cabcnt;
    prod(glsncnt,glsneed,"2",ops);
    prod(pkncnt,pkneed,"2",ops);
    prod(pntncnt,pntneed,"1",ops);
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt;
    fsprofit();
}
for(var i=0;i<cabbutton.length;i++){
    cabbutton[i].onclick = cabclick;
}
        
//Couch
var sofclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    glncnt = int(glneed),
    drlncnt = int(drlneed);
if (ops==='add'){
    if(fscnt<11){
        sofcnt = sofcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(sofcnt>0){
    sofcnt = sofcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    sofout.innerHTML = sofcnt;
    prod(txtncnt,txtneed,"3",ops);
    prod(glncnt,glneed,"1",ops);
    prod(drlncnt,drlneed,"1",ops);
    fscnt = chrcnt+tabcnt+htxcnt+cabcnt+sofcnt;
    fsprofit();
}
for(var i=0;i<sofbutton.length;i++){
    sofbutton[i].onclick = sofclick;
}

//Gardeniung Supplies var
var gsspout = el('#gssp-out'),
    gsstout = el('#gsst-out'),
    gsslvl = el('#gss-lvl'),
    gsslvlcnt = int(gsslvl),
    gssdur = el('.gssdur'),
    gssdurcnt = [30,90,135,240,120,90],
    grsbutton = el('.grs-in'),
    grsout = el('#grs-out'),
    grscnt = int(grsout),
    grsneed = el('#grs-need'),
    grsncnt = int(grsneed),
    sapbutton = el('.sap-in'),
    sapout = el('#sap-out'),
    sapcnt = int(sapout),
    sapneed = el('#sap-need'),
    sapncnt = int(sapneed),
    gchbutton = el('.gch-in'),
    gchout = el('#gch-out'),
    gchcnt = int(gchout),
    gchneed = el('#gch-need'),
    gchncnt = int(gchneed),
    frpbutton = el('.frp-in'),
    frpout = el('#frp-out'),
    frpcnt = int(frpout),
    frpneed = el('#frp-need'),
    frpncnt = int(frpneed),
    lmwbutton = el('.lmw-in'),
    lmwout = el('#lmw-out'),
    lmwcnt = int(lmwout),
    lmwneed = el('#lmw-need'),
    lmwncnt = int(lmwneed),
    ggnbutton = el('.ggn-in'),
    ggnout = el('#ggn-out'),
    ggncnt = int(ggnout),
    ggnneed = el('#ggn-need'),
    ggnncnt = int(ggnneed),
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt,
    gssval = [310, 420, 820, 1740, 840, 1600],
    gsstime = [[30,90,135,240,120,90],
               [30*0.90,90*0.90,135*0.90,240*0.90,120*0.90,90*0.90],
               [30*0.85,90*0.85,135*0.85,240*0.85,120*0.85,90*0.85],
               [30*0.80,90*0.80,135*0.80,240*0.80,120*0.80,90*0.80]];

//Profit
var gssprofit = function(){
var grscnt = int(grsout),
    sapcnt = int(sapout),
    gchcnt = int(gchout),
    frpcnt = int(frpout),
    lmwcnt = int(lmwout),
    ggncnt = int(ggnout),
    gsspval = grscnt*gssval[0]+sapcnt*gssval[1]+gchcnt*gssval[2]+frpcnt*gssval[3]+lmwcnt*gssval[4]+ggncnt*gssval[5],
    gsstval = grscnt*gsstime[gsslvlcnt][0]+sapcnt*gsstime[gsslvlcnt][1]+gchcnt*gsstime[gsslvlcnt][2]+frpcnt*gsstime[gsslvlcnt][3]+lmwcnt*gsstime[gsslvlcnt][4]+ggncnt*gsstime[gsslvlcnt][5],
    gssprof = grscnt*(gssval[0]-facval[3]-hsval[2])+sapcnt*(gssval[1]-2*facval[3]-hsval[2])+gchcnt*(gssval[2]-2*(bssval[1]+facval[6]+facval[2]))+frpcnt*(gssval[3]-2*(bssval[2]+bssval[3])-hsval[2])+lmwcnt*(gssval[4]-3*facval[0]-facval[10]-bssval[5])+ggncnt*(gssval[5]-2*bssval[3]-bssval[4]);
        if(gsstval>0){
            var gssppmin = gssprof/gsstval;
        }
        else{
            gssppmin = 0;
        }
      gsspout.innerHTML = gsspval;
      gsstout.innerHTML = dur(gsstval);
      gssp.innerHTML = Math.round(gssppmin*100)/100;
      tprofit();
}

//Lvl
var gsslvlclick = function(){
var lvldur = [];  
    if (gsslvlcnt<=3){
        gsslvlcnt=gsslvlcnt+1;
        gsslvl.innerHTML = gsslvlcnt;
     for(i=0;i<gssdur.length;i++){
     lvldur[i] = gssdurcnt[i]*comdur[gsslvlcnt];
     gssdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(gsslvlcnt>3){
        gsslvlcnt=0;
        gsslvl.innerHTML = gsslvlcnt;
        for(i=0;i<gssdur.length;i++){
        lvldur[i] = gssdurcnt[i];
        gssdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    gssprofit();
};
    gsslvl.onclick = gsslvlclick;
        
//Grass
var grsclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    shvncnt = int(shvneed);
if (ops==='add'){
    if(gsscnt<11){
        grscnt = grscnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(grscnt>0){
    grscnt = grscnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    grsout.innerHTML = grscnt;
    prod(sedncnt,sedneed,"1",ops);
    prod(shvncnt,shvneed,"1",ops);  
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<grsbutton.length;i++){
    grsbutton[i].onclick = grsclick;
}
        
//Tree Saplings
var sapclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    shvncnt = int(shvneed);
if (ops==='add'){
    if(gsscnt<11){
        sapcnt = sapcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(sapcnt>0){
    sapcnt = sapcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    sapout.innerHTML = sapcnt;
    prod(sedncnt,sedneed,"2",ops);
    prod(shvncnt,shvneed,"1",ops);
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<sapbutton.length;i++){
    sapbutton[i].onclick = sapclick;
}
        
//Garden Furniture
var gchclick = function(){
var ops = this.getAttribute('data-ops'),
    plsncnt = int(plsneed),
    pkncnt = int(pkneed),
    txtncnt = int(txtneed);
if (ops==='add'){
    if(gsscnt<11){
        gchcnt = gchcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(gchcnt>0){
    gchcnt = gchcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    gchout.innerHTML = gchcnt;
    prod(plsncnt,plsneed,"2",ops);
    prod(txtncnt,txtneed,"2",ops);
    prod(pkncnt,pkneed,"2",ops);  
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<gchbutton.length;i++){
    gchbutton[i].onclick = gchclick;
}
        
//Fire Pit
var frpclick = function(){
var ops = this.getAttribute('data-ops'),
    bkncnt = int(bkneed),
    shvncnt = int(shvneed),
    cemncnt = int(cemneed);
if (ops==='add'){
    if(gsscnt<11){
        frpcnt = frpcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(frpcnt>0){
    frpcnt = frpcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    frpout.innerHTML = frpcnt;
    prod(bkncnt,bkneed,"2",ops);
    prod(shvncnt,shvneed,"1",ops);
    prod(cemncnt,cemneed,"2",ops);  
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<frpbutton.length;i++){
    frpbutton[i].onclick = frpclick;
}
     
        
//Lawn Mower
var lmwclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    pntncnt = int(pntneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(gsscnt<11){
        lmwcnt = lmwcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(lmwcnt>0){
    lmwcnt = lmwcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    lmwout.innerHTML = lmwcnt;
    prod(metncnt,metneed,"3",ops);
    prod(ecmncnt,ecmneed,"1",ops);
    prod(pntncnt,pntneed,"1",ops);  
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<lmwbutton.length;i++){
    lmwbutton[i].onclick = lmwclick;
}
     
        
//Garden Gnome
var ggnclick = function(){
var ops = this.getAttribute('data-ops'),
    cemncnt = int(cemneed),
    glncnt = int(glneed);
if (ops==='add'){
    if(gsscnt<11){
        ggncnt = ggncnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(ggncnt>0){
    ggncnt = ggncnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    ggnout.innerHTML = ggncnt;
    prod(cemncnt,cemneed,"2",ops);
    prod(glncnt,glneed,"1",ops);  
    gsscnt = grscnt+sapcnt+gchcnt+frpcnt+lmwcnt+ggncnt;
    gssprofit();
}
for(var i=0;i<ggnbutton.length;i++){
    ggnbutton[i].onclick = ggnclick;
}

//Donut Shop var
var dspout = el('#dsp-out'),
    dstout = el('#dst-out'),
    dslvl = el('#ds-lvl'),
    dslvlcnt = int(dslvl),
    dsdur = el('.dsdur'),
    dsdurcnt = [45,30,60,90,240,60],
    donbutton = el('.don-in'),
    donout = el('#don-out'),
    doncnt = int(donout),
    donneed = el('#don-need'),
    donncnt = int(donneed),
    gsmbutton = el('.gsm-in'),
    gsmout = el('#gsm-out'),
    gsmcnt = int(gsmout),
    gsmneed = el('#gsm-need'),
    gsmncnt = int(gsmneed),
    brlbutton = el('.brl-in'),
    brlout = el('#brl-out'),
    brlcnt = int(brlout),
    brlneed = el('#brl-need'),
    brlncnt = int(brlneed),
    cckbutton = el('.cck-in'),
    cckout = el('#cck-out'),
    cckcnt = int(cckout),
    cckneed = el('#cck-need'),
    cckncnt = int(cckneed),
    yogbutton = el('.yog-in'),
    yogout = el('#yog-out'),
    yogcnt = int(yogout),
    yogneed = el('#yog-need'),
    yogncnt = int(yogneed),
    cofbutton = el('.cof-in'),
    cofout = el('#cof-out'),
    cofcnt = int(cofout),
    cofneed = el('#cof-need'),
    cofncnt = int(cofneed),
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt,
    dsval = [950, 1150, 1840, 2240, 1750, 750],
    dstime = [[45,30,60,90,240,60],
               [45*0.90,30*0.90,60*0.90,90*0.90,240*0.90,60*0.90],
               [45*0.85,30*0.85,60*0.85,90*0.85,240*0.85,60*0.85],
               [45*0.80,30*0.80,60*0.80,90*0.80,240*0.80,60*0.80]];

//Profit
var dsprofit = function(){
var doncnt = int(donout),
    gsmcnt = int(gsmout),
    brlcnt = int(brlout),
    cckcnt = int(cckout),
    yogcnt = int(yogout),
    cofcnt = int(cofout),
    dspval = doncnt*dsval[0]+gsmcnt*dsval[1]+brlcnt*dsval[2]+cckcnt*dsval[3]+yogcnt*dsval[4]+cofcnt*dsval[5],
    dstval = doncnt*dstime[dslvlcnt][0]+gsmcnt*dstime[dslvlcnt][1]+brlcnt*dstime[dslvlcnt][2]+cckcnt*dstime[dslvlcnt][3]+yogcnt*dstime[dslvlcnt][4]+cofcnt*dstime[dslvlcnt][5],
    dsprof = doncnt*(dsval[0]-fmval[1]-facval[7])+gsmcnt*(dsval[1]-fmval[0]-fmval[2])+brlcnt*(dsval[2]-2*fmval[1]-fmval[3])+cckcnt*(dsval[3]-fmval[1]-fmval[2]-fmval[5])+yogcnt*(dsval[4]-facval[7]-fmval[2]-fmval[3])+cofcnt*(dsval[5]-2*facval[3]-facval[7]-fmval[3]);
        if(dstval>0){
            var dsppmin = dsprof/dstval;
        }
        else{
            dsppmin = 0;
        }
      dspout.innerHTML = dspval;
      dstout.innerHTML = dur(dstval);
      dsp.innerHTML = Math.round(dsppmin*100)/100;
      tprofit();
}

//Lvl
var dslvlclick = function(){
var lvldur = [];  
    if (dslvlcnt<=3){
        dslvlcnt=dslvlcnt+1;
        dslvl.innerHTML = dslvlcnt;
     for(i=0;i<dsdur.length;i++){
     lvldur[i] = dsdurcnt[i]*comdur[dslvlcnt];
     dsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(dslvlcnt>3){
        dslvlcnt=0;
        dslvl.innerHTML = dslvlcnt;
        for(i=0;i<dsdur.length;i++){
        lvldur[i] = dsdurcnt[i];
        dsdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    dsprofit();
};
    dslvl.onclick = dslvlclick;
        
//Donuts
var donclick = function(){
var ops = this.getAttribute('data-ops'),
    flrncnt = int(flrneed),
    snsncnt = int(snsneed);
if (ops==='add'){
    if(dscnt<11){
        doncnt = doncnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(doncnt>0){
    doncnt = doncnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    donout.innerHTML = doncnt;
    prod(flrncnt,flrneed,"1",ops);
    prod(snsncnt,snsneed,"1",ops);  
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<donbutton.length;i++){
    donbutton[i].onclick = donclick;
}
        
//Green Smoothie
var gsmclick = function(){
var ops = this.getAttribute('data-ops'),
    vegncnt = int(vegneed),
    melncnt = int(melneed);
if (ops==='add'){
    if(dscnt<11){
        gsmcnt = gsmcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(gsmcnt>0){
    gsmcnt = gsmcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    gsmout.innerHTML = gsmcnt;
    prod(vegncnt,vegneed,"1",ops);
    prod(melncnt,melneed,"1",ops);  
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<gsmbutton.length;i++){
    gsmbutton[i].onclick = gsmclick;
}
        
//Bread Roll
var brlclick = function(){
var ops = this.getAttribute('data-ops'),
    flrncnt = int(flrneed),
    crmncnt = int(crmneed);
if (ops==='add'){
    if(dscnt<11){
        brlcnt = brlcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(brlcnt>0){
    brlcnt = brlcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    brlout.innerHTML = brlcnt;
    prod(flrncnt,flrneed,"2",ops);
    prod(crmncnt,crmneed,"1",ops);  
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<brlbutton.length;i++){
    brlbutton[i].onclick = brlclick;
}
        
//Cherry Cheesecake
var cckclick = function(){
var ops = this.getAttribute('data-ops'),
    flrncnt = int(flrneed),
    melncnt = int(melneed),
    chsncnt = int(chsneed);
if (ops==='add'){
    if(dscnt<11){
        cckcnt = cckcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(cckcnt>0){
    cckcnt = cckcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    cckout.innerHTML = cckcnt;
    prod(flrncnt,flrneed,"1",ops);
    prod(melncnt,melneed,"1",ops);
    prod(chsncnt,chsneed,"1",ops);   
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<cckbutton.length;i++){
    cckbutton[i].onclick = cckclick;
}
        
//Frozen Yogurt
var yogclick = function(){
var ops = this.getAttribute('data-ops'),
    snsncnt = int(snsneed),
    melncnt = int(melneed),
    crmncnt = int(crmneed);
if (ops==='add'){
    if(dscnt<11){
        yogcnt = yogcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(yogcnt>0){
    yogcnt = yogcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    yogout.innerHTML = yogcnt;
    prod(snsncnt,snsneed,"1",ops);
    prod(melncnt,melneed,"1",ops);
    prod(crmncnt,crmneed,"1",ops);   
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<yogbutton.length;i++){
    yogbutton[i].onclick = yogclick;
}      
        
//Coffee
var cofclick = function(){
var ops = this.getAttribute('data-ops'),
    sedncnt = int(sedneed),
    snsncnt = int(snsneed),
    crmncnt = int(crmneed);
if (ops==='add'){
    if(dscnt<11){
        cofcnt = cofcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(cofcnt>0){
    cofcnt = cofcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    cofout.innerHTML = cofcnt;
    prod(sedncnt,sedneed,"2",ops);
    prod(snsncnt,snsneed,"1",ops);
    prod(crmncnt,crmneed,"1",ops);   
    dscnt = doncnt+gsmcnt+brlcnt+cckcnt+yogcnt+cofcnt;
    dsprofit();
}
for(var i=0;i<cofbutton.length;i++){
    cofbutton[i].onclick = cofclick;
} 

//Fashion Store var
var fapout = el('#fap-out'),
    fatout = el('#fat-out'),
    falvl = el('#fa-lvl'),
    falvlcnt = int(falvl),
    fadur = el('.fadur'),
    fadurcnt = [60,75,90,210,150],
    capbutton = el('.cap-in'),
    capout = el('#cap-out'),
    capcnt = int(capout),
    capneed = el('#cap-need'),
    capncnt = int(capneed),
    shubutton = el('.shu-in'),
    shuout = el('#shu-out'),
    shucnt = int(shuout),
    shuneed = el('#shu-need'),
    shuncnt = int(shuneed),
    watbutton = el('.wat-in'),
    watout = el('#wat-out'),
    watcnt = int(watout),
    watneed = el('#wat-need'),
    watncnt = int(watneed),
    sutbutton = el('.sut-in'),
    sutout = el('#sut-out'),
    sutcnt = int(sutout),
    sutneed = el('#sut-need'),
    sutncnt = int(sutneed),
    bpkbutton = el('.bpk-in'),
    bpkout = el('#bpk-out'),
    bpkcnt = int(bpkout),
    bpkneed = el('#bpk-need'),
    bpkncnt = int(bpkneed),
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt,
    faval = [600, 980, 580, 1170, 430],
    fatime = [[60,75,90,210,150],
               [60*0.90,75*0.90,90*0.90,210*0.90,150*0.90],
               [60*0.85,75*0.85,90*0.85,210*0.85,150*0.85],
               [60*0.80,75*0.80,90*0.80,210*0.80,150*0.80]];

//Profit
var faprofit = function(){
var capcnt = int(capout),
    shucnt = int(shuout),
    watcnt = int(watout),
    sutcnt = int(sutout),
    bpkcnt = int(bpkout),
    fapval = capcnt*faval[0]+shucnt*faval[1]+watcnt*faval[2]+sutcnt*faval[3]+bpkcnt*faval[4],
    fatval = capcnt*fatime[falvlcnt][0]+shucnt*fatime[falvlcnt][1]+watcnt*fatime[falvlcnt][2]+sutcnt*fatime[falvlcnt][3]+bpkcnt*fatime[falvlcnt][4],
    faprof = capcnt*(faval[0]-2*facval[6]-hsval[1])+shucnt*(faval[1]-2*facval[6]-facval[2]-bssval[4])+watcnt*(faval[2]-2*facval[2]-facval[5]-facval[8])+sutcnt*(faval[3]-3*facval[6]-bssval[4]-hsval[1])+bpkcnt*(faval[4]-2*facval[6]-2*facval[2]-hsval[1]);
        if(fatval>0){
            var fappmin = faprof/fatval;
        }
        else{
            fappmin = 0;
        }
      fapout.innerHTML = fapval;
      fatout.innerHTML = dur(fatval);
      fap.innerHTML = Math.round(fappmin*100)/100;
      tprofit();
}

//Lvl
var falvlclick = function(){
var lvldur = [];  
    if (falvlcnt<=3){
        falvlcnt=falvlcnt+1;
        falvl.innerHTML = falvlcnt;
     for(i=0;i<fadur.length;i++){
     lvldur[i] = fadurcnt[i]*comdur[falvlcnt];
     fadur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(falvlcnt>3){
        falvlcnt=0;
        falvl.innerHTML = falvlcnt;
        for(i=0;i<fadur.length;i++){
        lvldur[i] = fadurcnt[i];
        fadur[i].innerHTML = dur(lvldur[i]);
  }
    }
    faprofit();
};
    falvl.onclick = falvlclick;
        
//Caps
var capclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    tapncnt = int(tapneed);
if (ops==='add'){
    if(facnt<11){
        capcnt = capcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(capcnt>0){
    capcnt = capcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    capout.innerHTML = capcnt;
    prod(txtncnt,txtneed,"2",ops);
    prod(tapncnt,tapneed,"1",ops);
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt;
    faprofit();
}
for(var i=0;i<capbutton.length;i++){
    capbutton[i].onclick = capclick;
}
        
//Shoes
var shuclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    plsncnt = int(plsneed),
    glncnt = int(glneed);
if (ops==='add'){
    if(facnt<11){
        shucnt = shucnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(shucnt>0){
    shucnt = shucnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    shuout.innerHTML = shucnt;
    prod(txtncnt,txtneed,"2",ops);
    prod(plsncnt,plsneed,"1",ops);
    prod(glncnt,glneed,"1",ops);
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt;
    faprofit();
}
for(var i=0;i<shubutton.length;i++){
    shubutton[i].onclick = shuclick;
}
        
//Watch
var watclick = function(){
var ops = this.getAttribute('data-ops'),
    chmncnt = int(chmneed),
    plsncnt = int(plsneed),
    glsncnt = int(glsneed);
if (ops==='add'){
    if(facnt<11){
        watcnt = watcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(watcnt>0){
    watcnt = watcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    watout.innerHTML = watcnt;
    prod(chmncnt,chmneed,"1",ops);
    prod(plsncnt,plsneed,"2",ops);
    prod(glsncnt,glsneed,"1",ops);
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt;
    faprofit();
}
for(var i=0;i<watbutton.length;i++){
    watbutton[i].onclick = watclick;
}
        
//Business Suit
var sutclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    tapncnt = int(tapneed),
    glncnt = int(glneed);
if (ops==='add'){
    if(facnt<11){
        sutcnt = sutcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(sutcnt>0){
    sutcnt = sutcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    sutout.innerHTML = sutcnt;
    prod(txtncnt,txtneed,"3",ops);
    prod(tapncnt,tapneed,"1",ops);
    prod(glncnt,glneed,"1",ops);
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt;
    faprofit();
}
for(var i=0;i<sutbutton.length;i++){
    sutbutton[i].onclick = sutclick;
}
        
//Backpacks
var bpkclick = function(){
var ops = this.getAttribute('data-ops'),
    txtncnt = int(txtneed),
    plsncnt = int(plsneed),
    tapncnt = int(tapneed);
if (ops==='add'){
    if(facnt<11){
        bpkcnt = bpkcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(bpkcnt>0){
    bpkcnt = bpkcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    bpkout.innerHTML = bpkcnt;
    prod(txtncnt,txtneed,"2",ops);
    prod(plsncnt,plsneed,"2",ops);
    prod(tapncnt,tapneed,"1",ops);
    facnt = capcnt+shucnt+watcnt+sutcnt+bpkcnt;
    faprofit();
}
for(var i=0;i<bpkbutton.length;i++){
    bpkbutton[i].onclick = bpkclick;
}

//Fast Food Restaurant var
var ffrpout = el('#ffrp-out'),
    ffrtout = el('#ffrt-out'),
    ffrlvl = el('#ffr-lvl'),
    ffrlvlcnt = int(ffrlvl),
    ffrdur = el('.ffrdur'),
    ffrdurcnt = [14,24,35,20,60,30],
    icsbutton = el('.ics-in'),
    icsout = el('#ics-out'),
    icscnt = int(icsout),
    icsneed = el('#ics-need'),
    icsncnt = int(icsneed),
    pizbutton = el('.piz-in'),
    pizout = el('#piz-out'),
    pizcnt = int(pizout),
    pizneed = el('#piz-need'),
    pizncnt = int(pizneed),
    burbutton = el('.bur-in'),
    burout = el('#bur-out'),
    burcnt = int(burout),
    burneed = el('#bur-need'),
    burncnt = int(burneed),
    frybutton = el('.fry-in'),
    fryout = el('#fry-out'),
    frycnt = int(fryout),
    fryneed = el('#fry-need'),
    fryncnt = int(fryneed),
    lembutton = el('.lem-in'),
    lemout = el('#lem-out'),
    lemcnt = int(lemout),
    lemneed = el('#lem-need'),
    lemncnt = int(lemneed),
    popbutton = el('.pop-in'),
    popout = el('#pop-out'),
    popcnt = int(popout),
    popneed = el('#pop-need'),
    popncnt = int(popneed),
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt,
    ffrval = [2560, 2560, 3620, 1050, 1690, 1250],
    ffrtime = [ [14,24,35,20,60,30],
               [14*0.90,24*0.90,35*0.90,20*0.90,60*0.90,30*0.90],
               [14*0.85,24*0.85,35*0.85,20*0.85,60*0.85,30*0.85],
               [14*0.80,24*0.80,35*0.80,20*0.80,60*0.80,30*0.80]];

//Profit
var ffrprofit = function(){
var icscnt = int(icsout),
    pizcnt = int(pizout),
    burcnt = int(burout),
    frycnt = int(fryout),
    lemcnt = int(lemout),
    popcnt = int(popout),
    ffrpval = icscnt*ffrval[0]+pizcnt*ffrval[1]+burcnt*ffrval[2]+frycnt*ffrval[3]+lemcnt*ffrval[4]+popcnt*ffrval[5],
    ffrtval = icscnt*ffrtime[ffrlvlcnt][0]+pizcnt*ffrtime[ffrlvlcnt][1]+burcnt*ffrtime[ffrlvlcnt][2]+frycnt*ffrtime[ffrlvlcnt][3]+lemcnt*ffrtime[ffrlvlcnt][4]+popcnt*ffrtime[ffrlvlcnt][5],
    ffrprof = icscnt*(ffrval[0]-fmval[3]-dsval[2])+pizcnt*(ffrval[1]-fmval[1]-fmval[5]-fmval[6])+burcnt*(ffrval[2]-fmval[6]-dsval[2]-asval[0])+frycnt*(ffrval[3]-fmval[0]-fmval[5])+lemcnt*(ffrval[4]-2*facval[8]-2*facval[7]-fmval[2])+popcnt*(ffrval[5]-asval[4]-2*fmval[4]);
        if(ffrtval>0){
            var ffrppmin = ffrprof/ffrtval;
        }
        else{
            ffrppmin = 0;
        }
      ffrpout.innerHTML = ffrpval;
      ffrtout.innerHTML = dur(ffrtval);
      ffrp.innerHTML = Math.round(ffrppmin*100)/100;
      tprofit();
}

//Lvl
var ffrlvlclick = function(){
var lvldur = [];  
    if (ffrlvlcnt<=3){
        ffrlvlcnt=ffrlvlcnt+1;
        ffrlvl.innerHTML = ffrlvlcnt;
     for(i=0;i<ffrdur.length;i++){
     lvldur[i] = ffrdurcnt[i]*comdur[ffrlvlcnt];
     ffrdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(ffrlvlcnt>3){
        ffrlvlcnt=0;
        ffrlvl.innerHTML = ffrlvlcnt;
        for(i=0;i<ffrdur.length;i++){
        lvldur[i] = ffrdurcnt[i];
        ffrdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    ffrprofit();
};
    ffrlvl.onclick = ffrlvlclick;
        
//Ice Cream Sandwiches
var icsclick = function(){
var ops = this.getAttribute('data-ops'),
    crmncnt = int(crmneed),
    brlncnt = int(brlneed);
if (ops==='add'){
    if(ffrcnt<11){
        icscnt = icscnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(icscnt>0){
    icscnt = icscnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    icsout.innerHTML = icscnt;
    prod(crmncnt,crmneed,"1",ops);
    prod(brlncnt,brlneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<icsbutton.length;i++){
    icsbutton[i].onclick = icsclick;
}
        
//Pizza 
var pizclick = function(){
var ops = this.getAttribute('data-ops'),
    flrncnt = int(flrneed),
    chsncnt = int(chsneed),
    befncnt = int(befneed);
if (ops==='add'){
    if(ffrcnt<11){
        pizcnt = pizcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(pizcnt>0){
    pizcnt = pizcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    pizout.innerHTML = pizcnt;
    prod(flrncnt,flrneed,"1",ops);
    prod(chsncnt,chsneed,"1",ops);
    prod(befncnt,befneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<pizbutton.length;i++){
    pizbutton[i].onclick = pizclick;
}
        
//Burger 
var burclick = function(){
var ops = this.getAttribute('data-ops'),
    bbqncnt = int(bbqneed),
    brlncnt = int(brlneed),
    befncnt = int(befneed);
if (ops==='add'){
    if(ffrcnt<11){
        burcnt = burcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(burcnt>0){
    burcnt = burcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    burout.innerHTML = burcnt;
    prod(bbqncnt,bbqneed,"1",ops);
    prod(brlncnt,brlneed,"1",ops);
    prod(befncnt,befneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<burbutton.length;i++){
    burbutton[i].onclick = burclick;
}
        
//Cheese Fries 
var fryclick = function(){
var ops = this.getAttribute('data-ops'),
    chsncnt = int(chsneed),
    vegncnt = int(vegneed);
if (ops==='add'){
    if(ffrcnt<11){
        frycnt = frycnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(frycnt>0){
    frycnt = frycnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    fryout.innerHTML = frycnt;
    prod(vegncnt,vegneed,"1",ops);
    prod(chsncnt,chsneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<frybutton.length;i++){
    frybutton[i].onclick = fryclick;
}
        
//Lemonade Bottle
var lemclick = function(){
var ops = this.getAttribute('data-ops'),
    snsncnt = int(snsneed),
    glsncnt = int(glsneed),
    melncnt = int(melneed);
if (ops==='add'){
    if(ffrcnt<11){
        lemcnt = lemcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(lemcnt>0){
    lemcnt = lemcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    lemout.innerHTML = lemcnt;
    prod(snsncnt,snsneed,"2",ops);
    prod(glsncnt,glsneed,"2",ops);
    prod(melncnt,melneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<lembutton.length;i++){
    lembutton[i].onclick = lemclick;
}
        
//Popcorn
var popclick = function(){
var ops = this.getAttribute('data-ops'),
    crnncnt = int(crnneed),
    micncnt = int(micneed);
if (ops==='add'){
    if(ffrcnt<11){
        popcnt = popcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(popcnt>0){
    popcnt = popcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    popout.innerHTML = popcnt;
    prod(crnncnt,crnneed,"2",ops);
    prod(micncnt,micneed,"1",ops);  
    ffrcnt = icscnt+pizcnt+burcnt+frycnt+lemcnt+popcnt;
    ffrprofit();
}
for(var i=0;i<popbutton.length;i++){
    popbutton[i].onclick = popclick;
}

//Appliance Store var
var aspout = el('#asp-out'),
    astout = el('#ast-out'),
    aslvl = el('#as-lvl'),
    aslvlcnt = int(aslvl),
    asdur = el('.asdur'),
    asdurcnt = [165,210,105,150,120],
    bbqbutton = el('.bbq-in'),
    bbqout = el('#bbq-out'),
    bbqcnt = int(bbqout),
    bbqneed = el('#bbq-need'),
    bbqncnt = int(bbqneed),
    refbutton = el('.ref-in'),
    refout = el('#ref-out'),
    refcnt = int(refout),
    refneed = el('#ref-need'),
    refncnt = int(refneed),
    lytbutton = el('.lyt-in'),
    lytout = el('#lyt-out'),
    lytcnt = int(lytout),
    lytneed = el('#lyt-need'),
    lytncnt = int(lytneed),
    tvsbutton = el('.tvs-in'),
    tvsout = el('#tvs-out'),
    tvscnt = int(tvsout),
    tvsneed = el('#tvs-need'),
    tvsncnt = int(tvsneed),
    micbutton = el('.mic-in'),
    micout = el('#mic-out'),
    miccnt = int(micout),
    micneed = el('#mic-need'),
    micncnt = int(micneed),
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt,
    asval = [530, 1060, 890, 1280, 480],
    astime = [[165,210,105,150,120],
               [165*0.90,210*0.90,105*0.90,150*0.90,120*0.90],
               [165*0.85,210*0.85,105*0.85,150*0.85,120*0.85],
               [165*0.80,210*0.80,105*0.80,150*0.80,120*0.80]];


//Profit
var asprofit = function(){
var bbqcnt = int(bbqout),
    refcnt = int(refout),
    lytcnt = int(lytout),
    tvscnt = int(tvsout),
    miccnt = int(micout),
    aspval = bbqcnt*asval[0]+refcnt*asval[1]+lytcnt*asval[2]+tvscnt*asval[3]+miccnt*asval[4],
    astval = bbqcnt*astime[aslvlcnt][0]+refcnt*astime[aslvlcnt][1]+lytcnt*astime[aslvlcnt][2]+tvscnt*astime[aslvlcnt][3]+miccnt*astime[aslvlcnt][4],
    asprof = bbqcnt*(asval[0]-3*facval[0]-hsval[3])+refcnt*(asval[1]-2*facval[2]-2*facval[5]-2*facval[10])+lytcnt*(asval[2]-facval[5]-facval[8]-facval[10])+tvscnt*(asval[3]-2*facval[2]-2*facval[8]-2*facval[10])+miccnt*(asval[4]-4*facval[0]-facval[8]-facval[10]);
        if(astval>0){
            var asppmin = asprof/astval;
        }
        else{
            asppmin = 0;
        }
      aspout.innerHTML = aspval;
      astout.innerHTML = dur(astval);
      asp.innerHTML = Math.round(asppmin*100)/100;
      tprofit();
}

//Lvl
var aslvlclick = function(){
var lvldur = [];  
    if (aslvlcnt<=3){
        aslvlcnt=aslvlcnt+1;
        aslvl.innerHTML = aslvlcnt;
     for(i=0;i<asdur.length;i++){
     lvldur[i] = asdurcnt[i]*comdur[aslvlcnt];
     asdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    if(aslvlcnt>3){
        aslvlcnt=0;
        aslvl.innerHTML = aslvlcnt;
        for(i=0;i<asdur.length;i++){
        lvldur[i] = asdurcnt[i];
        asdur[i].innerHTML = dur(lvldur[i]);
  }
    }
    asprofit();
};
    aslvl.onclick = aslvlclick;
        
//BBQ Grill
var bbqclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    sptncnt = int(sptneed);
if (ops==='add'){
    if(ascnt<11){
        bbqcnt = bbqcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(bbqcnt>0){
    bbqcnt = bbqcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    bbqout.innerHTML = bbqcnt;
    prod(metncnt,metneed,"3",ops);
    prod(sptncnt,sptneed,"1",ops);  
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt;
    asprofit();
}
for(var i=0;i<bbqbutton.length;i++){
    bbqbutton[i].onclick = bbqclick;
}
        
//Refrigerator
var refclick = function(){
var ops = this.getAttribute('data-ops'),
    plsncnt = int(plsneed),
    chmncnt = int(chmneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(ascnt<11){
        refcnt = refcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(refcnt>0){
    refcnt = refcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    refout.innerHTML = refcnt;
    prod(plsncnt,plsneed,"2",ops);
    prod(chmncnt,chmneed,"2",ops);
    prod(ecmncnt,ecmneed,"2",ops);  
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt;
    asprofit();
}
for(var i=0;i<refbutton.length;i++){
    refbutton[i].onclick = refclick;
}
        
//Lighting System
var lytclick = function(){
var ops = this.getAttribute('data-ops'),
    glsncnt = int(glsneed),
    chmncnt = int(chmneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(ascnt<11){
        lytcnt = lytcnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(lytcnt>0){
    lytcnt = lytcnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    lytout.innerHTML = lytcnt;
    prod(glsncnt,glsneed,"1",ops);
    prod(chmncnt,chmneed,"1",ops);
    prod(ecmncnt,ecmneed,"1",ops);  
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt;
    asprofit();
}
for(var i=0;i<lytbutton.length;i++){
    lytbutton[i].onclick = lytclick;
}
       
//TV
var tvsclick = function(){
var ops = this.getAttribute('data-ops'),
    plsncnt = int(plsneed),
    glsncnt = int(glsneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(ascnt<11){
        tvscnt = tvscnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(tvscnt>0){
    tvscnt = tvscnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    tvsout.innerHTML = tvscnt;
    prod(plsncnt,plsneed,"2",ops);
    prod(glsncnt,glsneed,"2",ops);
    prod(ecmncnt,ecmneed,"2",ops);  
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt;
    asprofit();
}
for(var i=0;i<tvsbutton.length;i++){
    tvsbutton[i].onclick = tvsclick;
}
        
//Microwave Oven
var micclick = function(){
var ops = this.getAttribute('data-ops'),
    metncnt = int(metneed),
    glsncnt = int(glsneed),
    ecmncnt = int(ecmneed);
if (ops==='add'){
    if(ascnt<11){
        miccnt = miccnt+1;
    }
    else{    
        alert('You are exceeding the number of maximum slots!');
        return;
    }
}
if (ops==='sub'){
    if(miccnt>0){
    miccnt = miccnt-1;
    }
    else{ 
        alert('The operation you have requested is not possible');
        return;
    }   
} 
    micout.innerHTML = miccnt;
    prod(metncnt,metneed,"4",ops);
    prod(glsncnt,glsneed,"1",ops);
    prod(ecmncnt,ecmneed,"1",ops);  
    ascnt = bbqcnt+refcnt+lytcnt+tvscnt+miccnt;
    asprofit();
}
for(var i=0;i<micbutton.length;i++){
    micbutton[i].onclick = micclick;
}