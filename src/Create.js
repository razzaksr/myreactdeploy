import { useState } from "react"
import { executeCreating } from "./Storage"

export const Create=()=>{

    const[myData,setMyData]=useState({
        "id":0,
        "name":"",
        "issue":""
    })

    const onTrack=(silviya)=>{
        const{name,value}=silviya.target

        setMyData((remain)=>{
            return{
                ...remain,
                [name]:value
            }
        })
    }

    const verify=()=>{
        alert(JSON.stringify(myData))
        executeCreating(myData)
    }

    return(<>
        <h1>Create compoenent</h1>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12 shadow p-4">
                    <input type="text" onChange={onTrack} value={myData.id} name="id" className="form-control" placeholder="ID"/>
                    <input type="text" onChange={onTrack} value={myData.name} name="name" className="form-control" placeholder="name"/>
                    <input type="text" onChange={onTrack} value={myData.issue} name="issue" className="form-control" placeholder="issue"/>
                    <div className="row justify-content-around mt-2">
                        <button className="btn btn-outline-primary col-1" onClick={verify}>
                            <i class="bi bi-save2-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}