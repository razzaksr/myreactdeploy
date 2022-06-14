import { useEffect, useState } from "react"
import { Create } from "./Create"
import { Read } from "./Read"
import { executeListing } from "./Storage"
//import { affect, executeListing, loading } from "./Storage"
// import {loading} from './Storage'

export const List=()=>{

    const[tmpArr,setTmpArr]=useState([])

    const[cview,setCview]=useState(false)
    const[rview,setRview]=useState(false)

    const[specific,setSpecific]=useState(0)

    useEffect(()=>{
        //affect()
        setTmpArr(executeListing())
    },[])

    return(
    <>
        <div className="container mt-3">
        {(cview)?
        <>
            <Create/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setCview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        (rview)?
        <>
            <Read which={specific}/>
            <button className="btn btn-outline-secondary" onClick={()=>{
                setRview(false)
                window.location.assign("/")
            }}>
                    <i class="bi bi-skip-backward-circle-fill"></i>
            </button>
        </>
        :
        <>
            <button className="btn btn-outline-success" onClick={()=>{
                setCview(true)
            }}>
                <i class="bi bi-newspaper"></i>
            </button>
            <div className="row justify-content-center">
                <table className="table table-bordered text-center table-hover col-lg-8 col-md-10 col-sm-12 shadow">
                    <thead>
                        <tr>
                            <th>Resource Id</th>
                            <th>Resource Name</th>
                            <th>Resource Issue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tmpArr.map((ele,ind)=>(
                            <tr>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.issue}</td>
                                <td>
                                    <button className="btn btn-outline-warning col-4" onClick={()=>{
                                        setRview(true)
                                        setSpecific(ele.id)
                                    }}>
                                        <i class="bi bi-book-half"></i>
                                    </button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
            </>}
        </div>
        
    </>
    )
}