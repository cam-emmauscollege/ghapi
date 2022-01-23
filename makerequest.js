import fetch from 'node-fetch';
 
const accessToken = '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';
const query = `
query { 
  viewer { 
    login
  	repositories(first: 100) {
  	  edges {
  	    node {
  	      id
          name
  	    }
  	  }
  	}
  }
}`;
 
fetch('https://api.github.com/graphql', {
  method: 'POST',
  body: JSON.stringify({query}),
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
}).then(res => res.text())
  .then(body => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch(error => console.error(error));