import axios from 'axios';


const generateComments = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Add comment where it is necessary and show the whole code with added comments:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };

    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};

const explainCode = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Explain the work of this code in short:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };

    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};

const findErrors = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Check for errors in this code and write a quick fix in short if found:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };

    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};

const visualizeCode = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Visualize the iteration of this code with the following input:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };
    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};

const findComplexity = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Find time and space complexity of this code:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };

    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};

const translateCode = async (code, apiKey) => {
    const client = axios.create({
        headers: {
            Authorization: "Bearer " + apiKey,
        },
    });

    const params = {
        messages: [
            {
                role: "user",
                content: `Translate the code to the language mentioned below:\n\n${code}`,
            },
        ],
        model: "gpt-3.5-turbo",
        max_tokens: 1024,
        temperature: 0,
    };

    try {
        const response = await client.post("https://api.openai.com/v1/chat/completions", params);
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log(err);
    }
};


export { generateComments , findErrors , explainCode , findComplexity , translateCode , visualizeCode};