async function checkBackend() {
    const message = document.getElementById("message");

    try {
        const response = await fetch("/api/health");

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const data = await response.json();

        message.innerText = data.message;

    } catch (error) {
        message.innerText = "Backend connection failed!";
        console.error(error);
    }
}

checkBackend();