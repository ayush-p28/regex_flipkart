// utils.js

export async function sendBase64ImageAndAppendRow(base64Image) {
    try {
        // API endpoint
        const apiUrl = "https://horribly-superb-bedbug.ngrok-free.app/get-detection";

        // Sending the Base64 image string via POST request
        const response = await fetch(apiUrl, {
            method: "POST",
            // mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "img": base64Image }),
        });

        // Parse the JSON response
        const jsonResponse = await response.json();
        console.log(jsonResponse + "=============");

        // Return the response for further processing
        return jsonResponse;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Rethrow the error for handling in the calling component
    }
}
