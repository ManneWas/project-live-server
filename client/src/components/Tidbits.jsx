import {useContext, useEffect} from "react";
import GlobalContext from "../GlobalContext";
import Tidbit from "./Tidbit";

export default function Tidbits(){

    const { tidbits } = useContext(GlobalContext);
    console.log('tidbit page',tidbits)

    return <section id="tidbits">
        <h2>Tidbits</h2>
        {tidbits.map(tb => <Tidbit key={tb.id} tb={tb}/>)}
    </section>
}