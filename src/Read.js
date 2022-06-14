import { useEffect, useState } from "react"
import { executeReading } from "./Storage"

export const Read=(zealous)=>{
    //alert(zealous.which)


    const[single,setSingle]=useState({})

    useEffect(()=>{
        const t = executeReading(zealous.which)
        setSingle(t)
    },[])

    return(
        <>
            <div className="container">
                <div className="mt-3 row justify-content-center">
                    <div className="card text-light col-lg-6 col-md-8 col-sm-12 shadow bg-secondary">
                        <h1 className="card-title text-center display-3">{single.name}</h1>
                        <div className="card-body">
                            <p className="card-text float-start">{single.id}</p>
                            <p className="card-text float-end">{single.issue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}