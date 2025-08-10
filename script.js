document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const canvas = document.getElementById('wordcloud-canvas');
    const shapeSelect = document.getElementById('shape-select');

    generateBtn.addEventListener('click', () => {
        const text = textInput.value;
        if (text.trim() === '') {
            alert('Masukkan teks terlebih dahulu!');
            return;
        }

        const wordFrequencies = processText(text);

        const selectedShape = shapeSelect.value;

        const options = {
            list: wordFrequencies,
            gridSize: 10,
            weightFactor: 6,
            fontFamily: 'sans-serif',
            color: 'random-dark',
            backgroundColor: '#ffffff',
            shape: selectedShape
        };
        
        WordCloud(canvas, options);
    });

    function processText(text) {
        const words = text.toLowerCase().match(/\b\w+\b/g) || [];

        const frequencies = {};

        for (const word of words) {
            const stopWords = ['dan', 'di', 'yang', 'untuk', 'pada', 'ke', 'ini', 'itu', 'dengan', 'adalah'];
            if (!stopWords.includes(word) && word.length > 2) {
                frequencies[word] = (frequencies[word] || 0) + 1;
            }
        }

        const wordList = Object.keys(frequencies).map(key => [key, frequencies[key]]);

        return wordList;
    }
});