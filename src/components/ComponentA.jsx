import ComponentB from "./ComponentB"

const ComponentA = ({data }) =>{
    console.log(data)

    // const a=12
    // const b=12
    // console.log(calculation(a,b))
    return(
        <div style={{backgroundColor:'red',padding:"12px 0px"}}>
            <h1>ComponentA</h1>
            <ComponentB data={data}/>
            </div>
    )
}

export default ComponentA