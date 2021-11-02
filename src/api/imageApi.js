const accessKey ='cFFapIyud2P8l8ZXXjmdEVTcJ2cLDYdKnKpQYEm8Io0';
//const secretKey ='14sciWxDRa4DZK9wkPrDd8VQSvZf-G-DGYvrUwm79sA';

const imageAPI = {
    async fetchBackground(pageToFetch){
        const query = 'lake'
        const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&page=${pageToFetch}&query=${query}`;
            const response = await fetch(url, {
                method: 'GET',
                headers:{
                    'Content-type':'application/json'
                }
            });
           
            if(response.ok){
                const jsonResponse = await response.json();
                const images = jsonResponse.results
                const totalPages = jsonResponse.total_pages;
                const data = {
                    images: images,
                    totalPages:totalPages,
                }
                return data;
            }else{
                throw new Error('failed!')
            }
       
    }
}

export default imageAPI;