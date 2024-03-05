

const generateComments = async (text , api) => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Add comment where it is necessary and show the whole code with added comments:\n\n${text}`, "max_tokens": 1024 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)}).catch((err) => {console.log(err)})
};

const explainCode = async () => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Explain the work of this code in short:\n\n${text}`, "max_tokens": 1024 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)})
};

const findErrors = async () => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Check for errors in this code and write a quick fix in short if found:\n\n${text}`, "max_tokens": 1024 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)})
};

const visualizeCode = async () => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Visualize the iteration of this code with the following input:\n\n${text}`, "max_tokens": 1500 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)})
};

const findComplexity = async () => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Find time and space complexity of this code:\n\n${text}`, "max_tokens": 200 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)})
};

const translateCode = async () => {
    fetch("https://api.openai.com/v1/chat/completions/",
        {
            body: JSON.stringify({ "model": "text-davinci-003", "prompt": `Translate the code to the language mentioned below:\n\n${text}`, "max_tokens": 2048 }),
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${api}`
            },
        }).then((response) => (response.json())).then((response) => {setOutput(response)})
};

export {
    translateCode , explainCode , generateComments , findErrors , findComplexity , visualizeCode
};