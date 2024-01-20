

const Docs = ({params}) => {
    if(params.slug.length === 2){
        return <h1>viewing docs for feathere {params.slug[0]} concept {params.slug[1]}</h1>
    }else if(params.slug.length === 1){
        return <h1>viewing docs for feathere {params.slug[0]}</h1>
    }
    return (
        <div>
            <h1>Docs Home Page</h1>
        </div>
    );
};

export default Docs;