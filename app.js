
//const = document.getElementsByClassName("choose");
console.log("hi")
console.log(window.openai)
import {OpenAI} from './openai'
const openai = new OpenAI('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', 'org-dWVX8ES5XuCncvDmxiNDQSc1');

const prompt_text = "Back to Future: π¨π΄ππ\nBatman: π€΅π¦\nTransformers: ππ€\nWonder Woman: πΈπ»πΈπΌπΈπ½πΈπΎπΈπΏ\nWinnie the Pooh: π»πΌπ»\nThe Godfather: π¨π©π§π΅π»ββοΈπ²π₯\nGame of Thrones: πΉπ‘π‘πΉ\n";

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