<p align="center">
  <a href="https://github.com/ashishgoswami07/TinyUrl-Generator-Project">
    🔗 View TinyURL Generator Project on GitHub
  </a>
</p>

<h1 align="center"> TinyURL Generator</h1>
<h4 align="center">A Java-based URL shortener project using DSA concepts and hash-based mapping</h4>

---

## 🧠 Overview
This is a simple and efficient **TinyURL Generator** built in **Java**, designed to shorten long URLs into tiny, shareable links using **hashing logic** and **data structures**.

---

## ⚙️ Features
- 🔗 Converts long URLs into short custom links  
- ⚡ Fast access and retrieval using **HashMaps**  
- 🧠 Uses **Java Collections Framework** for hashing and mapping  
- ✅ Beginner-friendly and easy to understand  

---

## 🧪 Tech Stack

| Language | Tools Used            |
|----------|-----------------------|
| 🧾 Java  | HashMap, Collections  |
| 🧰 IDE   | IntelliJ / Eclipse / VS Code |
| 🔧 Git   | GitHub for version control |

---

## 📂 Folder Structure
TinyUrl-Generator-Project/
├── src/ → Java source files (Main.java, TinyUrl.java, etc.)
├── bin/ → Compiled .class files
├── README.md → Documentation
---

## 🧰 Backend – Java Logic
The backend is written fully in **Java** using **HashMap** to map long URLs to short codes.  

### Example Java Code:
```java
import java.util.HashMap;

class TinyUrl {
    private HashMap<String, String> urlMap = new HashMap<>();
    private static final String BASE_URL = "http://tinyurl.com/";
    private int counter = 1;

    // Convert long URL to short URL
    public String shorten(String longUrl) {
        String shortUrl = BASE_URL + counter;
        urlMap.put(shortUrl, longUrl);
        counter++;
        return shortUrl;
    }

    // Retrieve original URL from short URL
    public String expand(String shortUrl) {
        return urlMap.getOrDefault(shortUrl, "URL not found");
    }
}

public class Main {
    public static void main(String[] args) {
        TinyUrl tiny = new TinyUrl();
        
        String longUrl = "https://example.com/my-very-long-url";
        String shortUrl = tiny.shorten(longUrl);
        
        System.out.println("Original URL: " + longUrl);
        System.out.println("Shortened URL: " + shortUrl);
        System.out.println("Expanded URL: " + tiny.expand(shortUrl));
    }
}
flowchart TD
    A[Long URL Input] --> B[Generate Short Code using Counter/HashMap]
    B --> C[Store Mapping: Short URL → Long URL]
    C --> D[Return Short URL]
    D -->|User accesses Short URL| E[Lookup in HashMap]
    E -->|Found| F[Redirect to Original Long URL]
    E -->|Not Found| G[Show Error: "URL not found"]
🌐 Frontend (Optional)

You can extend the project with a frontend:

Add HTML/CSS/JS files

Build a UI to connect with the Java backend

🚀 How to Run
🔧 Prerequisites

Install Java JDK (8 or later)

Code Editor (VS Code, IntelliJ IDEA, or Eclipse)

💻 Steps
cd src
javac Main.java
java Main

🙋‍♂️ Developed By

👨‍💻 Ashish Goswami
📧 ashishgoswami93746@gmail.com

🌐 GitHub: ashishgoswami07


---

✅ Now your README has:  
- Overview  
- Features  
- Tech Stack  
- Folder Structure  
- Java Example Code  
- **Mermaid Flowchart** (Long URL → Short URL → Retrieve Original)  

👉 Do you also want me to add a **screenshot/demo GIF** section so visitors can visually see your project running?
