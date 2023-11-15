
export const sendWelcomeEmail = async (email: string, token: string) => {
    try {
    const response = await fetch(`http://localhost:8000/send-welcome-email/${email}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": "Bearer " + token
        }
    })

    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error)
        return null
    }
}