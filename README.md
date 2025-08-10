
# 🎨 Interactive Word Cloud Generator

A simple and clean web-based application to create beautiful, high-resolution word clouds from any text. Built with vanilla JavaScript and the WordCloud2.js library.



## ✨ Features

* **Dynamic Generation:** Instantly generate a word cloud from any text you paste.
* **Shape Customization:** Choose from various shapes like circle, square, diamond, star, and triangle to frame your word cloud.
* **Custom Color Palettes:** (Currently set to a warm color theme). The logic supports custom color arrays for different moods.
* **High-Resolution Output:** Utilizes HTML5 Canvas rendering at a high device-pixel-ratio to produce crisp, non-blurry images.
* **Stop Word Filtering:** Automatically ignores common, unimportant words (like 'and', 'the', 'a') to provide more meaningful results.
* **Responsive Layout:** A clean, two-column layout that works well on different screen sizes.

---

## 🛠️ Tech Stack

* **HTML5:** For the structure and layout of the application.
* **CSS3:** For modern styling, layout (Flexbox), and responsiveness.
* **Vanilla JavaScript:** For all client-side logic, including DOM manipulation, event handling, and text processing.
* **WordCloud2.js:** A powerful JavaScript library used for calculating word positions and drawing the final word cloud on the canvas.

---

## 🚀 Getting Started

No complex setup required! You can run this project locally with these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
    2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Open the `index.html` file in your favorite browser.**
    And you're ready to go!

---

## 💡 How It Works

The application takes the user-provided text from the `<textarea>`. When the "Generate" button is clicked, a JavaScript function processes the text by:
1.  Converting all words to lowercase.
2.  Splitting the text into an array of individual words.
3.  Filtering out common "stop words".
4.  Counting the frequency of each unique word.
5.  Formatting this data into an array of `[word, count]` pairs.

This array is then passed to the **WordCloud2.js** library, along with customization options (like shape and color), which handles the complex task of calculating the layout and drawing the final image onto the HTML5 `<canvas>` element.
