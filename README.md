<p align="center">
  <a href="https://github.com/ashishgoswami1/TinyUrl-Generator-Project">
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
- 🧠 Uses **Java Collections Framework** for hashing and data storage  
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
├── logo.png → <img width="128" height="128" alt="ashish-logo" src="https://github.com/user-attachments/assets/a32ed90f-8c5f-4bee-afd0-8fe2bc2c548d" />
└── README.md → Documentation
---

## 🧰 Backend – Java Logic

This folder contains the complete **Java implementation** of the TinyURL Generator using:

- **HashMap** for storing mappings  
- **Counter/ID logic** for generating unique short URLs  
- **Expand** method to retrieve original links  

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
🌐 Frontend – (Optional UI)

This project can be extended with a frontend (HTML/CSS/JS):

Input field for long URL

Button to generate a short URL

Copy-to-clipboard feature
flowchart TD
    A[Long URL Input] --> B[Generate Short Code using Counter/HashMap]
    B --> C[Store Mapping: Short URL → Long URL]
    C --> D[Return Short URL]
    D -->|User accesses Short URL| E[Lookup in HashMap]
    E -->|Found| F[Redirect to Original Long URL]
    E -->|Not Found| G[Show Error: "URL not found"]
---

## 🎬 

![Cartoon Love GIF by Scaler (1)](https://github.com/user-attachments/assets/9fbddaa0-998b-48d0-a3eb-3e486d054e4e)
---
🚀 How to Run
🔧 Prerequisites:

Install Java JDK (8 or later)

Code Editor (VS Code / IntelliJ IDEA / Eclipse)

cd src
javac Main.java
🙋‍♂️ Developed By

👨‍💻 Ashish Goswami
📧 ashishgoswami93746@gmail.com

🌐 GitHub: ashishgoswami1
java Main
