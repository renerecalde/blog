import {licences} from "../../../lib/academic-data";
function datosLicencia(licencias, id){
    console.log("entra");
   return licencias.find(elemento => elemento.id === id);
}
export default function Page({ params }) {
    const resultado = datosLicencia(licences, params.id);

    return <>
        <p>Certification Page {params.id} </p>

        <p>Certification Page {params.id} </p>
        <p>Certification Page {resultado} </p>
    </>;
}