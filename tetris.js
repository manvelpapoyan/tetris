function tetris() {
  let boolDown = true;
  let boolColor = true;

  // kubik jnjel

  if (fig[0] > 20) {
    naxordData.forEach(el => {
      document.getElementById(el).style.backgroundColor = 'white'
    })
  }
  // kubik nerkel
  fig.forEach(el => {

    document.getElementById(el).style.backgroundColor = 'black'

  })

  // guyni stugum
  for (let i = 0; i < data.length; i++) {

    if (fig[0] + 10 === data[i] || fig[1] + 10 === data[i] || fig[2] + 10 === data[i] || fig[3] + 10 === data[i]) {

      if (fig[0] < 20) {

        clearInterval(id)

        alert('GAME OVER')
        break;


      }
      debugger
      data = data.concat(fig)
      data = deleteLIne(data).slice(0)

      for (let j = 11; j <= 190; j++) {


        document.getElementById(j).style.backgroundColor = 'white'


      }
      data.forEach(el => {

        document.getElementById(el).style.backgroundColor = 'green'


      })
      r = Math.floor(Math.random() * 7)
      fig = figures[r]
      boolColor = false
      m = 0;

      break;
    }

  }

  // kubik kangnacnel

  if (fig[0] > 180 || fig[1] > 180 || fig[2] > 180 || fig[3] > 180) {

    data = data.concat(fig)
    data = deleteLIne(data).slice(0)

    for (let j = 11; j <= 190; j++) {


      document.getElementById(j).style.backgroundColor = 'white'


    }
    data.forEach(el => {

      document.getElementById(el).style.backgroundColor = 'green'


    })
    r = Math.floor(Math.random() * 7)
    fig = figures[r]


    boolDown = false
  }



  // kubik sharjel
  naxordData = fig.slice(0)
  if (boolDown === true && boolColor === true) {

    fig = fig.map(el => el + 10)
  }
}

document.addEventListener('keydown', right)
document.addEventListener('keydown', left)
document.addEventListener('keyup', rotate)








function rotate(e) {
  let temp = fig.slice(0)
  let boolRotate = true;

  if (e.keyCode === 38) {

    if (r === 1) {

      if (temp[1] - temp[0] === 1) {
        temp[0] -= 9
        temp[2] += 9
        temp[3] += 18
      } else {
        temp[0] += 9
        temp[2] -= 9
        temp[3] -= 18
      }
    }
    if (r === 2) {
      if (m === 0) {
        temp[0] += 2
        temp[1] -= 9
        temp[3] += 9

      }
      if (m === 1) {
        temp[0] += 20
        temp[1] += 11
        temp[3] -= 11

      }
      if (m === 2) {

        temp[0] -= 2
        temp[1] += 9
        temp[3] -= 9

      }
      if (m === 3) {

        temp[1] += 9
        temp[2] += 20
        temp[3] += 31

      }

      m++
      if (m > 3) {
        m = 0
      }

    }
    if (r === 3) {
      if (m === 0) {
        temp[0] += 20
        temp[1] += 9
        temp[3] -= 9

      }
      if (m === 1) {
        temp[0] -= 2
        temp[1] -= 11
        temp[3] += 11

      }
      if (m === 2) {

        temp[0] -= 20
        temp[1] -= 9
        temp[3] += 9

      }
      if (m === 3) {

        temp[0] += 2
        temp[1] += 11
        temp[3] -= 11

      }

      m++
      if (m > 3) {
        m = 0
      }

    }
    if (r === 4) {

      if (m === 0) {
        temp[0] += 2
        temp[1] += 11
        temp[3] += 9
      }
      if (m === 1) {
        temp[0] -= 2
        temp[1] -= 11
        temp[3] -= 9
      }
      m++
      if (m > 1) {
        m = 0
      }
    }
    if (r === 5) {

      if (m === 0) {
        temp[0] += 11
        temp[1] += 20  //15, 16, 25, 24
        temp[3] -= 9
      }
      if (m === 1) {
        temp[0] -= 11
        temp[1] -= 20
        temp[3] += 9
      }
      m++
      if (m > 1) {
        m = 0
      }
    }

    if (r === 6) {
      if (m === 0) {
        temp[1] -= 11
        temp[2] -= 20
        temp[3] -= 2

      }
      if (m === 1) {
        temp[1] -= 9
        temp[3] -= 18

      }
      if (m === 2) {

        temp[1] += 11//15,5,4,6
        temp[2] += 2
        temp[3] += 20

      }
      if (m === 3) {

        temp[1] += 9  //15,16,6,26
        temp[2] += 18


      }

      m++
      if (m > 3) {
        m = 0
      }

    }



    for (let i = 0; i < data.length; i++) {

      if (temp[0] === data[i] || temp[1] === data[i] || temp[2] === data[i] || temp[3] === data[i]) {

        boolRotate = false
        break


      }




    }



    if (boolRotate === true) {

      fig = temp.slice(0)


    }
  }


}




function right(e) {

  if (e.keyCode === 39) {
    let bool = true

    if (fig[0] % 10 != 0 && fig[1] % 10 != 0 && fig[2] % 10 != 0 && fig[3] % 10 != 0) {

      for (let i = 0; i < data.length; i++) {

        if (fig[0] + 1 === data[i] || fig[1] + 1 === data[i] || fig[2] + 1 === data[i] || fig[3] + 1 === data[i]) {
          bool = false
          break;
        }


      }
      if (bool === true) {
        fig = fig.map(el => el + 1)
      }

    }


  }
}
function left(e) {

  if (e.keyCode === 37) {
    let bool = true

    if (fig[0] % 10 != 1 && fig[1] % 10 != 1 && fig[2] % 10 != 1 && fig[3] % 10 != 1) {

      for (let i = 0; i < data.length; i++) {

        if (fig[0] - 1 === data[i] || fig[1] - 1 === data[i] || fig[2] - 1 === data[i] || fig[3] - 1 === data[i]) {
          bool = false
          break;
        }


      }
      if (bool === true) {
        fig = fig.map(el => el - 1)
      }

    }


  }
}



let data = []
let naxordData = []

let figures = [[15, 16, 25, 26], [15, 16, 17, 18], [15, 25, 26, 27], [15, 25, 24, 23],
[15, 16, 26, 27], [15, 16, 25, 24], [15, 25, 24, 26]];
let r = Math.floor(Math.random() * 7)
let fig = figures[r]
let m = 0

let id = setInterval(tetris, 300);


function deleteLIne(arr) {
  debugger
  arr.sort((a, b) => a - b)
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - arr[i + 9] === -9 && arr[i] % 10 === 1) {
      temp = temp.concat(arr.splice(i, 10))
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < temp[0]) {


          arr[i] += temp.length
        }
      }
      temp = []
      i = 0
    }
  }
  return arr
}
