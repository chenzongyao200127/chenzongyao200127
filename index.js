// 获取当前年份
const thisYear = new Date().getFullYear()

// 计算当前年份开始时的时间戳（毫秒）
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()

// 计算当前年份结束时的时间戳（毫秒）
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()

// 计算当前时刻到年初的进度比例
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)

// 调用 generateProgressBar 函数以生成当前年份的进度条
const progressBarOfThisYear = generateProgressBar()

// 定义一个函数来生成进度条
function generateProgressBar() {
  // 设置进度条的总长度为 30 个字符
  const progressBarCapacity = 30

  // 根据年份进度计算已经过去的进度条长度
  const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)

  // 生成进度条，已过去的时间用 '█' 表示，剩余的时间用 '▁' 表示
  const progressBar =
    '█'.repeat(passedProgressBarIndex) +
    '▁'.repeat(progressBarCapacity - passedProgressBarIndex)

  // 返回格式化后的进度条字符串
  return `{ ${progressBar} }`
}

// 创建一个 README 字符串，包含个人信息和年份进度条
const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/chenzongyao200127/chenzongyao200127/main/assets/github-contribution-grid-snake.svg)          

### About me   

- 🎓 I'm a postgraduate student at the School of Cyber Science and Engineering, SouthEast University (Nanjing).  
- 💻 My interests lie in system security, Rust, malware detection, program analysis, and operating systems.  
- 💼 I have interned with the security teams at Tencent and Alibaba Cloud.  
- 📫 You can reach me at solar1s@163.com.  
- 😀 Nice to meet you and best wishes for you! :)

\
`

// 在控制台打印生成的 README 内容
console.log(readme)
