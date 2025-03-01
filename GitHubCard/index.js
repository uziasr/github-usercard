/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let followers_link;
const cards = document.querySelector('.cards')
axios.get('https://api.github.com/users/uziasr')
//axios.get("https://api.github.com/users/uziasr/followers")
.then(response=>{
  const my_info = response.data
  console.log(response)
  cards.appendChild(cardCreator(my_info))
  followers_link = response.data.followers_url
})
.catch(error=>{
  console.log(error)
})



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// console.log(followers_link)
const followersArray = ["ColinJR95","seanaleid","umekow","michaelharms6010","Gavin-Dreyer"];
followersArray.forEach(element =>{
  axios.get(`https://api.github.com/users/${element}`)
  .then(res=>{
    cards.appendChild(cardCreator(res.data))//calling function! 
  })
  .catch(error=>{
    console.log(error)
  })
})

console.log(followersArray)


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/




function cardCreator(object){
  const card = document.createElement('div')
  //children
  const userAvatar = document.createElement('img')
  const cardInfo = document.createElement('div')
  //grandchildren
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  //great-grandchild of profile
  const gitLink = document.createElement('a')
  //grandchildren
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //adding classes
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  //filling content
  userAvatar.src = object.avatar_url
  name.textContent = object.name
  userName.textContent = object.login
  // if(object.location){
  //   userLocation.textContent = (`Location: ${object.location}`)
  // }
  userLocation.textContent = (`Location: ${object.location}`)
  profile.textContent = 'Profile: '
  gitLink.href = object.html_url
  gitLink.textContent = object.html_url
  followers.textContent = (`Followers: ${object.followers}`)
  following.textContent = (`Following: ${object.following}`)
  if(bio.textContent!==null){
  bio.textContent = (`Bio: ${object.bio}`)
}
  // bio.textContent = (`Bio: ${object.bio}`)



  
  //appending children
  
  profile.appendChild(gitLink)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  card.appendChild(userAvatar)
  card.appendChild(cardInfo)

  return card

}

