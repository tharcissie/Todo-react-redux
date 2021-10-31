
const quoteAPI = {
    async fetchMyQuote(){
        const url = `https://api.quotable.io/random`;
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
           
            if(response.ok){
                const jsonResponse = await response.json();
                const quote = jsonResponse.content
                return quote;
            }else{
                throw new Error('failed!')
            }
       
    }
}

export default quoteAPI;