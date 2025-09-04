// loggingMiddleware.js

export async function Log(stack, level, packageName, message) {
  try {
    const response = await fetch("https://testserver.example.com/api/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,
        level,
        package: packageName,
        message,
        timestamp: new Date().toISOString(), // helpful extra info
      }),
    });

    if (!response.ok) {
      console.error("Failed to send log to server");
    }
  } catch (error) {
    console.error("Logging error:", error);
  }
}