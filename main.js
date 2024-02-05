function colouringTime() {
    var textfield = document.getElementById('text_input');
    var colors = textfield.value;
    let result;

    try {
        result = JSON.parse(colors);

        const canvas = document.getElementById('gridCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth / 2.5;
        canvas.height = window.innerHeight;

        const columns = 30;
        const rows = 50;
        const cellWidth = canvas.width / columns;
        const cellHeight = canvas.height / rows;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < columns; col++) {
                const index = row * columns + col;
                const x = col * cellWidth;
                const y = row * cellHeight;

                if (result[index]) {
                    ctx.fillStyle = `rgb(${result[index][0]},${result[index][1]},${result[index][2]})`;
                    ctx.fillRect(x, y, cellWidth, cellHeight);
                } else {
                    console.error(`Undefined value at index ${index} in the 'result' array.`);
                }
            }
        }
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }
}
