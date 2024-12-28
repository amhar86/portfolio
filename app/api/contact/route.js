export async function POST(req) {
    try {
      const data = await req.json();
  
      // Here you can process the data, e.g., save it to a database or send an email
      console.log("Form data received:", data);
  
      return new Response(
        JSON.stringify({ message: "Message received successfully!" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("Error handling the form submission:", error);
      return new Response(
        JSON.stringify({ message: "Something went wrong." }),
        { status: 500 }
      );
    }
  }
  