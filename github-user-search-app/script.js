document.querySelector('#toggledark').addEventListener('click', () => {
    document.querySelector("#mode").href = "dark.css";
    document.querySelector('#toggledark').className='hidden';
    document.querySelector('#togglelight').className='';
})

document.querySelector('#togglelight').addEventListener('click', () => {
    document.querySelector("#mode").href = "light.css";
    document.querySelector('#togglelight').className='hidden';
    document.querySelector('#toggledark').className='';
})

let url = 'https://api.github.com/users/octocat'

async function pullData(url) {
    let response = await fetch(url);
    let result = await response.json().then(saveData(result));  
}

function saveData(result) {
    let resultData = {};
    resultData['avatar_url'] = result['avatar_url']
    resultData['bio'] = result['bio']
    resultData['blog'] = result['blog']
    resultData['company'] = result['company']
    resultData['created_at'] = result['created_at']
    resultData['followers'] = result['followers']
    resultData['following'] = result['following']
    resultData['location'] = result['location']
    resultData['login'] = result['login']
    resultData['name'] = result['name']
    resultData['public_repos'] = result['public_repos']
    resultData['twitter_username'] = result['twitter_username']
    return resultData
}

console.log (
pullData(url)
)