function templatemi(id,data){
    console.log(id);
    let str = document.querySelector(`#${id}`).innerHTML
    // let str = document.getElementById(id).innerHTML
    console.log(str);
    let pattern = /{{\s*([a-zA-Z]+)\s*}}/
    let  vaa = pattern.exec(str)
    console.log(vaa);
    let res = null

    while(res = pattern.exec(str)){
        str = str.replace(res[0],data[res[1]])
    }
    return str
    
}
