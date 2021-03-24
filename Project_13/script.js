const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)

  if(e.key === 'Enter') {
    setTimeout(() => {
      e.target.value=''
    }, 10)

    randomSelect()

  }

})

/* Creates an array of every choice separated by a comma  */
function createTags(input) {
  /* filter and trim removes any empty spaces from the array */
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

  tagsEl.innerHTML= ''


  /* Populates a span below of the choices you write out  */
  tags.forEach(tag => {
      const tagEl = document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.innerText = tag
      tagsEl.appendChild(tagEl)
  })
}


function randomSelect() {
      const times = 30 

    /* Picks a random tag and highlights and unhighlights it cycling through 30 times then stopping on the final choice   */
    const interval = setInterval(() => {
      const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100);

    /* Final Tag Selected   */
    setTimeout(() => {
      clearInterval(interval)

      setTimeout(() => {
          const randomTag = pickRandomTag()

          highlightTag(randomTag)
      }, 100)


  }, times* 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight')
}
