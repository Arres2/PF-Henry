import axios from "axios"
const querystring = require("querystring")



export default async function getTickets(params:object){

    const credentials = {
        method: 'POST',
        url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
        data: querystring.stringify({
            grant_type:"client_credentials",
            client_id:"BdNq73PnzG9NfOOKEoTTAW3YDwN9OV9Z",
            client_secret:"ZnSiVKL0AiQXwkCW",
        })
        ,
        headers: {
                'content-type': 'application/x-www-form-urlencoded'
        } 
        }

    const token = await axios.request(credentials).then(response=>response.data).catch(err=>{
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    })

    console.log("Access_token: ",await token.access_token )

    const searchParams: URLSearchParams= new URLSearchParams({...params});

    console.log("Search_params: ", searchParams.toString())

    let options = {
        method: 'get',
        url: 'https://test.api.amadeus.com/v2/shopping/flight-offers',
        params:searchParams,
        headers: {
            'Authorization': 'Bearer '+ await token.access_token
        }
        };
        
        
    const response: Promise<RequireResolve>= await axios.request(options).then(res=>res.data).catch(err=>{
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    })

    console.log(await response)
    return await response


}


