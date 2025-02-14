 // Fetch data from a public API
 fetch('https://randomuser.me/api/')
 .then(response => response.json())  // Parse the response as JSON
 .then(data => {
     // Extract user data from the response
     const user = data.results[0];
     const userDataDiv = document.getElementById('userData');
     
     // Display user data on the page
     userDataDiv.innerHTML = `
         <p>Name: ${user.name.first} ${user.name.last}</p>
         <p>Address: ${user.location.city}, ${user.location.country}</p>
         <p>Contact No.: ${user.phone}</p>
         <p>Email: ${user.email}</p>
         <img src="${user.picture.medium}" alt="User Image">
     `;
 })
 .catch(error => console.error('Error fetching data:', error));