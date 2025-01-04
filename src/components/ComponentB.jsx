import ComponentC from "./ComponentC"

const ComponentB = (data) =>{
    console.log(data)
    return(
        <div style={{backgroundColor:'yellow'}}>
           <h2>ComponentB</h2> 
           <ComponentC data={data}/>
            </div>
    )
}

export default ComponentB