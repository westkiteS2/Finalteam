const $txt = document.querySelector('.txt-title')
const $btnGroup = document.querySelector('.btn-group')

const content = 'Welcome To Our Team-Page!✨'
let contentIndex = 0

let typing = function () {
  if (contentIndex < content.length) {
    $txt.innerHTML += content[contentIndex]
    contentIndex++
  } else {
    // 타이핑이 끝난 후 버튼들 등장
    clearInterval(typingInterval)
    $btnGroup.classList.remove('hidden') // display: none 제거
    setTimeout(() => {
      $btnGroup.classList.add('show') // opacity + transform 트리거
    }, 100) // 트랜지션 자연스럽게
  }
}

const typingInterval = setInterval(typing, 100)

//--------------------

const allHeaders = document.querySelectorAll('.section > h2')

allHeaders.forEach((header) => {
  header.addEventListener('click', () => {
    const section = header.parentElement
    const contents = section.querySelectorAll('.content')

    contents.forEach((content) => {
      content.classList.toggle('visible')
    })
  })
})

//--------------------

const accordions = document.querySelectorAll('.accordion')

accordions.forEach((acc) => {
  acc.querySelector('.accordion-title').addEventListener('click', () => {
    // 모두 닫기
    accordions.forEach((a) => a.classList.remove('open'))

    // 누른 것만 열기
    acc.classList.toggle('open')
  })
})

document.querySelectorAll('.fade-table').forEach((table) => {
  const rows = [...table.querySelectorAll('thead tr, tbody tr')]
  rows.forEach((row, i) => {
    setTimeout(() => {
      row.classList.add('visible')
    }, i * 300) // 또는 trigger로 연결해도 됨
  })
})
