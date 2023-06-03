const form = document.querySelector('form')
 
const  getJoke = ()=>{
    const button = document.querySelector('button')
    button.addEventListener('click', async ()=>{
        try {
            const jokeDiv = document.querySelector('div')
            jokeDiv.textContent = ''

            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const joke = await res.json()
            
            jokeDiv.textContent = joke.value
        } catch (error) {
            console.log(error)
        }
    })
}
getJoke()

form.addEventListener('submit',(e)=>{
    e.preventDefault()
})