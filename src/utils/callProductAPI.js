// utils.js

export async function sendBase64ImgProduct(base64Image) {
    try {
        // API endpoint
        const apiUrl = "https://horribly-superb-bedbug.ngrok-free.app/get-product";
    
        // Sending the Base64 image string via POST request
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ img: base64Image }),
        });
    
        // Check if the response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        // Parse the JSON response
        const jsonResponse = await response.json();
        console.log("JSON Response:", jsonResponse);
    
        // Return the response for further processing
        return jsonResponse;
    } catch (error) {
        console.error("Error during API call:", error.message);
    }
    
}
