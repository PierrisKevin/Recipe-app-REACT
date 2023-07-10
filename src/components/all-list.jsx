import {useState, useEffect} from 'react'

function useGetData(url){
    const [data, setData] = useState({});
    useEffect(()=>{
        (async function(){
            const response = await fetch(url);
            const dataResponse = await response.json();
            if (response.ok){
                setData(dataResponse)
            }
            else{
                alert("erreur de chargement des donnes...")
            }
        })()
    })
    if (resp) return data;
    return "No data in token";
}

