function GifList(props){
    return(<>
    {props.gif.map((g)=> (
        <ul key={g.id}>
<li>{g.title}</li>
<img src={g.url} alt={g.title}/>
</ul>
    ))

    }
    
    
    </>)
}
export default GifList;