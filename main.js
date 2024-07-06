/*
36. Valid Sudoku

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Note:

    A Sudoku board (partially filled) could be valid but is not necessarily solvable.
    Only the filled cells need to be validated according to the mentioned rules.

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

*/

/*

Ваша задача - определить, является ли доска Sudoku 9x9 действительной. Нужно проверить только заполненные ячейки согласно следующим правилам:

1. Каждая строка должна содержать цифры от 1 до 9 без повторения.
2. Каждый столбец должен содержать цифры от 1 до 9 без повторения.
3. Каждый из девяти 3x3 подквадратов сетки должен содержать цифры от 1 до 9 без повторения.

Вот шаги, которые мы будем следовать:

1. Создайте три двумерных массива для отслеживания использования чисел в каждой строке, столбце и подквадрате.
2. Пройдите по каждой ячейке на доске. Если ячейка не пуста, проверьте, было ли это число уже использовано в текущей строке, столбце или подквадрате. Если да, верните false. В противном случае отметьте это число как использованное.
3. Если вы прошли все ячейки и не нашли никаких нарушений, верните true.

Your task is to determine whether a 9x9 Sudoku board is valid. You only need to validate the filled cells according to the following rules:

1. Each row must contain the digits 1-9 without repetition.
2. Each column must contain the digits 1-9 without repetition.
3. Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

Here are the steps we will follow:

1. Create three two-dimensional arrays to track the usage of numbers in each row, column, and sub-box.
2. Go through each cell on the board. If the cell is not empty, check whether this number has been used in the current row, column, or sub-box. If so, return false. Otherwise, mark this number as used.
3. If you have gone through all cells and found no violations, return true.

*/

function isValidSudoku(board) {
    // Создаем три двумерных массива для отслеживания использования чисел
    // Create three two-dimensional arrays to track the usage of numbers
    let rows = Array(9).fill(0).map(() => Array(9).fill(false));
    let cols = Array(9).fill(0).map(() => Array(9).fill(false));
    let boxes = Array(9).fill(0).map(() => Array(9).fill(false));

    // Проходим по каждой ячейке на доске
    // Go through each cell on the board
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // Если ячейка не пуста
            // If the cell is not empty
            if (board[i][j] !== '.') {
                let num = parseInt(board[i][j]) - 1;
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                // Проверяем, было ли это число уже использовано в текущей строке, столбце или подквадрате
                // Check whether this number has been used in the current row, column, or sub-box
                if (rows[i][num] || cols[j][num] || boxes[k][num]) {
                    return false;
                }

                // Отмечаем это число как использованное
                // Mark this number as used
                rows[i][num] = cols[j][num] = boxes[k][num] = true;
            }
        }
    }

    // Если мы прошли все ячейки и не нашли никаких нарушений, возвращаем true
    // If we have gone through all cells and found no violations, return true
    return true;
}
