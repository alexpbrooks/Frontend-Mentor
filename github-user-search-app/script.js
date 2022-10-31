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

async function pullData(username) {
    let url = 'https://api.github.com/users/'+username
    let response = await fetch(url);
    let result = await response.json();
    return saveData(result)
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
    return populateData(resultData)
}

function populateUserInfo(resultData) {
    const userLink = document.querySelector('.userlink')
    if (resultData['twitter_username'] !== null){
        userLink.querySelector('#twitter').className = ''
        userLink.querySelector('#twitter').textContent = resultData['twitter_username']
    } 
    else {
        userLink.querySelector('#twitter').className = 'nolink'
        userLink.querySelector('#twitter').textContent = 'Not Available'
    }
    if (resultData['location'] !== null){
        userLink.querySelector('#location').className = ''
        userLink.querySelector('#location').textContent = resultData['location']
    }
    else {
        console.log(resultData['location'])
        userLink.querySelector('#location').className = 'nolink'
        userLink.querySelector('#location').textContent = 'Not Available'
    }
    if (resultData['blog'] !== ""){
        userLink.querySelector('#website').className = ''
        userLink.querySelector('#website').textContent = resultData['blog']
    }
    else {
        userLink.querySelector('#website').className = 'nolink'
        userLink.querySelector('#website').textContent = 'Not Available'
    }
    if (resultData['company'] !== null){
        userLink.querySelector('#company').className = ''
        userLink.querySelector('#company').textContent = resultData['company']
    }
    else {
        userLink.querySelector('#company').className = 'nolink'
        userLink.querySelector('#company').textContent = 'Not Available'
    }
}

function populateData(resultData) {
    document.querySelector('.main').querySelector('img').src = resultData['avatar_url']
    document.querySelector('.userhead').querySelector('img').src = resultData['avatar_url']
    const userInfo = document.querySelector('.userinfo')
    userInfo.querySelector('h2').textContent = resultData['name']
    userInfo.querySelector('h3').textContent = resultData['login']
    userInfo.querySelector('h4').textContent = 'Joined '+new Date(resultData['created_at']).toDateString()
    document.querySelector('.userdesc').textContent = resultData['bio']
    const userStat = document.querySelector('.userstat')
    userStat.querySelector('#repos').textContent = resultData['public_repos'] 
    userStat.querySelector('#followers').textContent = resultData['followers'] 
    userStat.querySelector('#following').textContent = resultData['following'] 
    populateUserInfo(resultData)
}

document.querySelector('button').addEventListener('click',()=> {
    const searchQuery = document.querySelector('#usersearch').value
    if(searchQuery != null) {pullData(searchQuery)}
})

pullData('octocat')

// TODO CSS messes up if .userdesc is empty
