import {useState} from 'react'

function Folder({explorer})
{   
    const [expand,setExpand]=useState(false);
    
    if(explorer.isfolder)
    {
    return(
        <div>
            <span onClick={()=>setExpand(!expand)}>{explorer.name}</span>
            <div style={{display: expand ? "block" :"none",paddingLeft:"15px"}}>
                {
                    explorer.items.map((exp)=>{
                        return <div><Folder explorer={exp}/></div>
                    })
                }
            </div>
        </div>
    )
    }
    else{
        return(<div>{explorer.name}</div>)
    }
   
}
export default Folder;