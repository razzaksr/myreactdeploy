let records=[
    {
        "id":19001,
        "name":"Prabakar",
        "issue":"TL"
    },
    {
        "id":18002,
        "name":"Anu",
        "issue":"followers"
    },
    {
        "id":18001,
        "name":"Silviya",
        "issue":"promotion"
    }
]

const affect=()=>{
    localStorage.setItem("warehouse",JSON.stringify(records))
}

const loading=()=>{
    const tmp=localStorage.getItem("warehouse")
    records=JSON.parse(tmp)
}

export const executeReading=(key)=>{
    loading()
    for(var ind=0;ind<records.length;ind++)
    {
        if(records[ind].id===key)
            return records[ind]
    }
    return {}
}

export const executeCreating=(obj)=>{
    loading()
    records.push(obj)
    affect()
}

export const executeListing=()=>{
    loading()
    return records
}