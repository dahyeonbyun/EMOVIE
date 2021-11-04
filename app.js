
//const = document.getElementsByClassName("choose");
console.log("hi")
console.log(window.openai)
import {OpenAI} from './openai'
const openai = new OpenAI('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', 'org-dWVX8ES5XuCncvDmxiNDQSc1');

const prompt_text = "Back to Future: 👨👴🚗🕒\nBatman: 🤵🦇\nTransformers: 🚗🤖\nWonder Woman: 👸🏻👸🏼👸🏽👸🏾👸🏿\nWinnie the Pooh: 🐻🐼🐻\nThe Godfather: 👨👩👧🕵🏻‍♂️👲💥\nGame of Thrones: 🏹🗡🗡🏹\n";

const getEmo = async (movieName) => {
    await openai.complete('davinci', {
        prompt: prompt_text + movieName + ":",
        user: 'user-123',
        temperature: 0.8,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"]
    });

    console.log(completion.choices[0].text.trim());
    document.getElementById('emoji').innerText = completion.choices[0].text.trim();
}