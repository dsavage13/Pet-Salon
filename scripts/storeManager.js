function save(service){
    let list = read();
    list.push(service);
    let val = JSON.stringify(list);
    localStorage.setItem("services", val);
}

function read(){
    let data = localStorage.getItem("services");
    if(!data){ //NOT Data?\
    
    return [];
    }else{
        return JSON.parse(data);
    }
}