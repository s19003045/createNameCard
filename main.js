'use strict'



// ==========1.顯示demo name card=========
// 取得section:Demo name card
const nameCardDemo = this.document.querySelector('#nameCard-demo')

// 取得#demoCard
const demoCard = this.document.querySelector('#demoCard')

// 網頁下載時，即將demo名片淡出
window.addEventListener(
  "load",
  function () {
    demoCard.classList.toggle('fadeIn')
  }
)



// 監聽nameCardDemo，當按下button時要執行的動作
nameCardDemo.addEventListener('click', function (event) {

  if (event.target.classList.contains('btn-toInfo')) {
    // 顯示基本資料輸入框
    document.querySelector('#basicInfo').style.display = 'block'
    document.querySelector('#basicInfo').classList.toggle('fadeIn')

    // 取消顯示demo name card
    document.querySelector('#nameCard-demo').style.display = 'none'
  }
})

// 取得#nameCard
const nameCard = this.document.getElementById('nameCard')
// 取得#demoCard裡的#demoCard-content
const nameCardContent = document.getElementById('demoCard-content')
// 取得#demoCard-content裡的#demoCard-hr
const demoHr = document.querySelector('#demoCard-hr')


// mouseover於demo的nameCard，切換成dark-theme
nameCardContent.addEventListener('mouseover', function (event) {
  nameCardContent.classList.remove('light-theme')
  nameCardContent.classList.add('dark-theme')
  demoHr.classList.remove('hr-dark')
  demoHr.classList.add('hr-light')
})
// mouseout於demo的nameCard，切換成light-theme
nameCardContent.addEventListener('mouseout', function (event) {
  nameCardContent.classList.remove('dark-theme')
  nameCardContent.classList.add('light-theme')
  demoHr.classList.remove('hr-light')
  demoHr.classList.add('hr-dark')
})

// =========2.輸入資料及生成name card========
// 選定form
const forms = document.querySelector
  ('.needs-validation')

// 產生name card的function
function createNameCard() {
  const yourName = document.querySelector('.your-name-1')
  console.log(yourName)
  const yourEmail = document.querySelector('.your-email-1')
  const yourDescription = document.querySelector('.your-description-1')
  const yourPhoto = document.querySelector('.your-photo-1')

  let x = yourName.textContent
  yourName.textContent = document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value

  console.log(x)

  yourEmail.textContent = document.getElementById('email').value

  yourDescription.textContent = document.getElementById('description').value

  const photoUrl = document.getElementById('photo-url').value

  // 若未輸入圖片連結，則以預設圖片代替
  if (photoUrl === "") {
    yourPhoto.src = 'https://drive.google.com/uc?id=1vqFPVZCbtuba_Y6GEoBpKnBtrQY4uChj&export=download'

  } else {
    yourPhoto.src = photoUrl
  }

  // 還定
  const nameCardContent1 = document.querySelector('#nameCard-content')

  // 決定light-theme或dark-theme
  if (document.querySelector('#inlineRadio1').checked) {
    nameCardContent1.classList.remove('dark-theme')
    nameCardContent1.classList.add('light-theme')
  } else if (document.querySelector('#inlineRadio2').checked) {
    nameCardContent1.classList.remove('light-theme')
    nameCardContent1.classList.add('dark-theme')
  } else {
    nameCardContent1.classList.remove('dark-theme')
    nameCardContent1.classList.add('light-theme')
  }

}


// 當按下submit要執行的動作：驗證資料及生成name card
forms.addEventListener('submit', function () {

  if (forms.checkValidity()) {
    console.log('input OK')

    // document.querySelector('#basicInfo').style.display = 'none'
    createNameCard()

    // 顯示生成的name card
    document.querySelector('#nameCard-create').style.display = 'block'
    if (!document.querySelector('#nameCard').classList.contains('fadeIn'))
      document.querySelector('#nameCard').classList.add('fadeIn')

    document.onscroll

  } else {
    console.log('input not ok')

  }
  event.preventDefault()
  event.stopPropagation()
  forms.classList.add("was-validated")

})