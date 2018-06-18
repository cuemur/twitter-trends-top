import "whatwg-fetch";


const getTrends = ( id ) => {
	return fetch(`http://localhost:3333/trends/${id}`)
		.then( res => res.json() );
}

const api = {
	getTrends
}

export default api;
