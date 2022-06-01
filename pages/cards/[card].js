//Parametro dinamico
export async function getStaticPaths(){
    return{
        paths: [{
            params:{
               card: "bruxo" 
            }
        }, {
            params:{
                card: "caldeirao" 
             }
        }],
        fallback: "blocking"
    }
}

export async function getStaticProps(context){
    const card = context.params.card
    return{
        props:{
            card: card
        }
        
    }
}

function Card(props){
    return(
        <>
            <h1>{props.card}</h1>
        </>
    )
}
export default Card