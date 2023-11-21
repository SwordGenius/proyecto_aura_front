"use client"
import ContenidoCliente from "../components/ContenidoCliente";
import {useSearchParams} from "next/navigation";
export default function ContenidoClienteConector() {
    const search = useSearchParams()
    return (
            <ContenidoCliente id={search.get("id")}/>
    )
}
