import { Station } from "../station/station.interface";
import { Observer } from "../observer/observer.interface";

export interface Weather {
    //SECTION 0
    miMi?: string,
    mjMj?: string,
    // estacao?: string,
    ddddddd: string,
    a1?: string,
    bw?: string,
    nbNbNb?: string,
    yy?: string,
    gg: string,
    iw?: string,
    ii: string,
    iii: string,
    laLaLa?: string,
    qc?: string,
    loLoLoLo?: string,
    //SECTION 1
    ir?: string,
    ix?: string,
    h?: string,
    vv?: string,
    n?: string,
    dd?: string,
    ff?: string,
    fff?: string,
    sn1_1?: string,
    ttt?: string,
    sn2_1?: string,
    tdTdTd?: string,
    poPoPoPo?: string,
    pppp?: string,
    a3?: string,
    hhh?: string,
    a?: string,
    ppp?: string,
    rrr?: string,
    tr?: string,
    ww?: string,
    w1W2?: string,
    // w1?: string,
    // w2?: string,
    waWa?: string,
    wa1?: string,
    wa2?: string,
    nh?: string,
    cl?: string,
    cm?: string,
    ch?: string,
    gggg?: string,
    //SECTION 2
    ds?: string,
    vs?: string,
    ss?: string,
    twTwTw?: string,
    pwaPwa?: string,
    hwaHwa?: string,
    pwPw?: string,
    hwHw?: string,
    dw1Dw1?: string,
    dw2Dw2?: string,
    pw1Pw1?: string,
    hw1Hw1?: string,
    pw2Pw2?: string,
    hw2Hw2?: string,
    is_ice?: string,
    eses?: string,
    rs?: string,
    hwaHwaHwa?: string,
    sw?: string,
    tbTbTb?: string,
    ci?: string,
    si?: string,
    bi?: string,
    di?: string,
    zi?: string,
    //SECTION 3
    sn1_3?: string,
    txTxTx?: string,
    sn2_3?: string,
    tnTnTn?: string,
    ind89?: string,
    p24P24P24?: string,
    //SECTION 5
    iChw?: string,
    iCm?: string,
    cs?: string,
    iCf?: string,
    iCp?: string,
    iCq?: string,

    dataObservacao: Date,
    dateObservation: Date,
    observador?: string,
    observerName?: string,

    station?: Station,
    observer?: Observer,
}