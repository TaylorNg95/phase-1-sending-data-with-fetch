function submitData(userName, userEmail){
    const postBody = {
        name: userName,
        email: userEmail
    }
    
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(postBody)
    })
    .then(response => response.json())
    .then(data => document.body.append(data.id))
    .catch(error => document.body.append(error.message))
}