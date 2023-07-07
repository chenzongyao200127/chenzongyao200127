const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/chenzongyao200127/chenzongyao200127/main/assets/github-contribution-grid-snake.svg)          

### About me   

- 🎓 I'm a postgraduate student of [School of Cyber Science and Engineering, SouthEast University(Nanjing)](https://www.seu.edu.cn/)
- 📫 You can reach me at [solar1s@163.com](mailto:solar1s@163.com).
- 😀 Nice to meet you and best wishes for you, my friends :)  

\
`

console.log(readme)


// const thisYear = new Date().getFullYear()
// const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
// const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
// const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
// const progressBarOfThisYear = generateProgressBar()

// function generateProgressBar() {
//     const progressBarCapacity = 30
//     const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
//     const progressBar =
//       '█'.repeat(passedProgressBarIndex) +
//       '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
//     return `{ ${progressBar} }`
// }

// const readme = `\
// ### Hi there 👋

// ⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

// ---

// ⏰ Updated on ${new Date().toUTCString()}

// ---

// ### My Github Contributions

// ![](https://raw.githubusercontent.com/chenzongyao200127/chenzongyao200127/main/assets/github-contribution-grid-snake.svg)              

// #### Welcome to my github profile!

// - 🎓 I'm a postgraduate student of [School of Cyber Science and Engineering, SouthEast University(Nanjing)](https://www.seu.edu.cn/)
// - 📫 You can reach me at [solar1s@163.com](mailto:solar1s@163.com).
// - 😀 Nice to meet you and best wishes for you, my friends :)
