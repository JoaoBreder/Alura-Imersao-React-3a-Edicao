import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response){
    if(request.method === 'POST') {
        const TOKEN = '1e8cfcdf3aba65cbdf7708c8a49985';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "974746", //ID do Model de "Communities" criado pelo Dato
            ...request.body
            //title: "",
            //imageUrl: "",
            //creatorSlug: ""
        })

        console.log(registroCriado);

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })

        return;
    }
    
    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}
