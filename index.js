// Get the current year
const thisYear = new Date().getFullYear();

// Calculate the timestamp (milliseconds) at the start of the current year
const startTimeOfThisYear = new Date(
    `${thisYear}-01-01T00:00:00+00:00`,
).getTime();

// Calculate the timestamp (milliseconds) at the end of the current year
const endTimeOfThisYear = new Date(
    `${thisYear}-12-31T23:59:59+00:00`,
).getTime();

// Calculate the progress ratio from the start of the year to the current moment
const progressOfThisYear =
    (Date.now() - startTimeOfThisYear) /
    (endTimeOfThisYear - startTimeOfThisYear);

// Call the generateProgressBar function to generate the progress bar for the current year
const progressBarOfThisYear = generateProgressBar();

// Define a function to generate the progress bar
function generateProgressBar() {
    // Set the total length of the progress bar to 30 characters
    const progressBarCapacity = 30;

    // Calculate the length of the progress bar that has passed based on the year's progress
    const passedProgressBarIndex = parseInt(
        progressOfThisYear * progressBarCapacity,
    );

    // Generate the progress bar, with the elapsed time represented by '█' and the remaining time by '▁'
    const progressBar =
        "█".repeat(passedProgressBarIndex) +
        "▁".repeat(progressBarCapacity - passedProgressBarIndex);

    // Return the formatted progress bar string
    return `{ ${progressBar} }`;
}

// Create a README string that includes personal information and the year's progress bar
const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions

![github-contribution-grid-snake](https://raw.githubusercontent.com/chenzongyao200127/chenzongyao200127/output/github-snake.svg)

### Welecome to my profile!

- 🎓 Master of Computer Science and Cyber Security.
- 💻 My interests lie in Operating Systems, System Security and Rust.
- 💼 Current Working at Alibaba Apsara Lab.
- 📫 You can reach me at solar1s@163.com or chenzongyao200127 (wechat app)
- 💐 Glad to connect with you ;)

### GitHub Estatísticas

| [![solar1s's github stats](https://github-readme-stats-three-phi-10.vercel.app/api?username=chenzongyao200127&show_icons=true&theme=merko&hide_border=true)](https://github.com/chenzongyao200127)  |[![Top Langs](https://github-readme-stats-three-phi-10.vercel.app/api/top-langs/?username=chenzongyao200127&layout=compact&theme=merko&hide_border=true&hide=css,html,ruby)](https://github.com/chenzongyao200127)|
| ------------- | ------------- |

\
`;

// Print the generated README content to the console
console.log(readme);
