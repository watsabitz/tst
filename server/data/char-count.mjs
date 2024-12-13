/**
 * This file contains the amount of each char are in `https://en.wikipedia.org/wiki/JavaScript` page on '2024-12-03T16:19:16.841Z'
 * 
 * Each char shows how many usage it has per 1000 chars.
 * 
 * ```js
b = {}
chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
chars.forEach(ch => b[ch] = [])
for (let i = 0; i < a.length; i+=1000) {
    for (const ch of chars) {
        const chunk = a.substring(i,i + 1000);
        b[ch].push(chunk.length - chunk.toUpperCase().replaceAll(ch, '').length)
    }
}
    ```
 * 
 * Because this shoud be "heavy" data, I repeated each array 1000 times.
 * @type {Record<string, number[]>}
 */

export const DATA = {
    "A": [65, 75, 80, 69, 73, 57, 69, 69, 64, 79, 76, 74, 66, 58, 73, 67, 55, 58, 77, 64, 45, 70, 61, 99, 72, 74, 65, 59, 48, 37, 42, 55, 55, 34, 36, 34, 50, 35, 51, 59, 63, 66, 66, 76, 70, 65, 72, 87, 99, 71, 47, 56, 45, 64, 60, 49, 54, 43, 64, 65, 49, 56, 52, 61, 78, 67, 60, 103, 32],
    "B": [14, 17, 8, 17, 10, 15, 12, 14, 13, 10, 19, 21, 12, 18, 12, 10, 25, 24, 20, 19, 19, 8, 19, 12, 10, 15, 16, 15, 9, 6, 6, 18, 24, 5, 3, 2, 17, 16, 17, 13, 14, 7, 15, 21, 24, 17, 16, 15, 20, 18, 20, 23, 17, 10, 10, 8, 11, 12, 14, 14, 10, 14, 19, 17, 8, 19, 10, 17, 6],
    "C": [48, 41, 31, 30, 35, 30, 32, 40, 24, 30, 29, 20, 33, 33, 45, 44, 35, 26, 37, 42, 45, 56, 35, 45, 48, 34, 30, 27, 37, 37, 24, 31, 29, 32, 29, 29, 39, 36, 50, 42, 47, 41, 44, 33, 20, 26, 38, 36, 33, 41, 32, 33, 26, 32, 24, 39, 28, 24, 25, 33, 25, 25, 30, 45, 36, 35, 30, 36, 18],
    "D": [31, 28, 31, 32, 26, 34, 32, 39, 30, 32, 32, 35, 26, 28, 25, 27, 14, 17, 23, 19, 34, 22, 37, 23, 31, 44, 28, 30, 22, 15, 16, 17, 25, 17, 19, 18, 18, 23, 28, 23, 18, 13, 29, 23, 26, 23, 26, 37, 33, 17, 27, 22, 16, 26, 22, 24, 21, 32, 31, 18, 33, 24, 27, 27, 21, 24, 35, 15, 17],
    "E": [114, 95, 72, 114, 98, 94, 93, 107, 100, 92, 100, 93, 113, 111, 104, 85, 101, 79, 94, 85, 90, 72, 88, 70, 74, 95, 84, 89, 108, 79, 85, 77, 61, 82, 78, 60, 55, 61, 45, 91, 89, 96, 106, 106, 92, 99, 83, 86, 76, 103, 78, 91, 89, 87, 79, 75, 94, 93, 64, 64, 91, 77, 87, 83, 69, 91, 74, 69, 40],
    "F": [10, 11, 15, 10, 20, 24, 12, 15, 16, 12, 14, 13, 9, 10, 17, 8, 16, 10, 8, 16, 17, 26, 11, 16, 11, 15, 7, 14, 19, 18, 17, 15, 14, 15, 11, 13, 11, 9, 15, 13, 8, 19, 16, 3, 22, 23, 14, 6, 15, 15, 12, 14, 14, 17, 12, 12, 16, 10, 12, 16, 12, 13, 22, 23, 10, 12, 16, 10, 5],
    "G": [32, 17, 22, 25, 16, 16, 15, 12, 15, 14, 28, 16, 13, 14, 19, 11, 20, 20, 13, 11, 8, 11, 10, 16, 7, 6, 14, 6, 6, 7, 5, 7, 9, 11, 1, 10, 12, 14, 8, 11, 16, 18, 5, 11, 9, 14, 9, 20, 18, 19, 13, 19, 12, 13, 16, 10, 17, 19, 14, 13, 11, 21, 11, 9, 12, 13, 8, 54, 4],
    "H": [19, 17, 21, 39, 27, 19, 27, 28, 25, 25, 28, 21, 17, 24, 26, 23, 29, 12, 19, 20, 29, 16, 30, 24, 21, 9, 21, 24, 25, 15, 23, 18, 15, 9, 5, 13, 21, 19, 14, 25, 27, 27, 24, 24, 29, 26, 21, 24, 20, 19, 20, 23, 23, 29, 26, 16, 20, 24, 22, 23, 15, 21, 24, 23, 24, 30, 12, 23, 5],
    "I": [59, 51, 69, 54, 62, 64, 65, 64, 64, 54, 64, 54, 61, 62, 49, 70, 50, 51, 55, 50, 64, 73, 75, 69, 73, 59, 65, 49, 44, 40, 48, 52, 47, 41, 33, 40, 36, 43, 30, 66, 83, 72, 59, 60, 66, 58, 61, 59, 59, 44, 45, 47, 48, 51, 39, 57, 54, 56, 47, 54, 56, 59, 50, 57, 52, 45, 76, 53, 43],
    "J": [7, 13, 8, 1, 9, 4, 4, 8, 8, 4, 7, 8, 12, 9, 4, 4, 7, 9, 15, 12, 12, 7, 7, 8, 5, 2, 2, 3, 0, 1, 1, 4, 11, 1, 2, 4, 2, 3, 6, 5, 1, 2, 5, 4, 1, 4, 9, 14, 25, 11, 13, 7, 10, 11, 12, 16, 10, 6, 7, 13, 8, 20, 3, 1, 19, 11, 9, 9, 0],
    "K": [6, 10, 2, 2, 2, 6, 7, 5, 4, 6, 3, 4, 1, 1, 7, 7, 2, 2, 7, 1, 2, 1, 3, 1, 5, 6, 3, 4, 2, 1, 2, 2, 1, 2, 0, 3, 0, 0, 1, 5, 6, 13, 2, 5, 6, 2, 5, 4, 0, 1, 5, 0, 4, 7, 3, 3, 1, 9, 5, 7, 4, 6, 8, 6, 9, 10, 11, 3, 7],
    "L": [37, 23, 21, 31, 28, 31, 34, 21, 26, 27, 28, 20, 22, 15, 36, 29, 18, 15, 22, 22, 23, 33, 28, 28, 35, 44, 36, 40, 55, 21, 27, 35, 34, 20, 31, 34, 30, 30, 37, 24, 32, 25, 27, 38, 37, 36, 30, 39, 27, 25, 17, 19, 24, 22, 19, 26, 23, 24, 20, 21, 44, 31, 24, 24, 20, 20, 23, 57, 11],
    "M": [15, 26, 24, 23, 23, 15, 27, 26, 19, 21, 20, 9, 19, 30, 26, 26, 21, 31, 19, 18, 19, 23, 19, 19, 22, 16, 22, 32, 27, 11, 17, 13, 19, 18, 26, 38, 12, 19, 23, 20, 18, 11, 16, 17, 15, 16, 15, 20, 27, 20, 21, 27, 33, 24, 21, 23, 21, 31, 14, 17, 33, 17, 17, 19, 23, 22, 22, 33, 11],
    "N": [51, 44, 55, 48, 53, 55, 59, 52, 68, 48, 51, 55, 63, 67, 61, 55, 62, 59, 56, 58, 63, 82, 59, 67, 79, 54, 62, 45, 50, 69, 75, 55, 50, 64, 63, 49, 33, 39, 42, 44, 55, 58, 58, 48, 49, 50, 45, 57, 54, 47, 43, 45, 40, 35, 39, 37, 35, 34, 37, 35, 39, 36, 39, 36, 38, 38, 49, 49, 18],
    "O": [62, 38, 50, 58, 50, 62, 48, 63, 54, 48, 50, 56, 47, 51, 56, 56, 57, 33, 55, 76, 78, 67, 71, 50, 73, 34, 44, 56, 43, 50, 63, 33, 45, 40, 48, 61, 47, 40, 47, 62, 57, 51, 59, 47, 55, 56, 54, 52, 46, 40, 45, 45, 55, 41, 43, 52, 51, 48, 43, 41, 56, 51, 44, 54, 33, 34, 57, 57, 26],
    "P": [19, 26, 33, 21, 28, 22, 21, 26, 16, 28, 24, 14, 32, 24, 18, 35, 14, 30, 25, 36, 29, 17, 26, 22, 24, 23, 15, 14, 12, 12, 28, 16, 10, 11, 17, 24, 18, 11, 20, 25, 23, 9, 20, 36, 14, 27, 30, 21, 28, 35, 20, 14, 14, 15, 15, 15, 17, 14, 25, 24, 14, 10, 13, 11, 13, 16, 20, 34, 11],
    "Q": [0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2, 2, 1, 0],
    "R": [52, 47, 61, 42, 53, 55, 59, 61, 47, 60, 48, 74, 59, 54, 44, 48, 64, 64, 43, 57, 46, 42, 41, 61, 57, 45, 41, 38, 49, 56, 61, 38, 39, 54, 37, 43, 37, 33, 45, 70, 51, 62, 62, 64, 64, 58, 68, 49, 47, 58, 51, 65, 69, 65, 63, 66, 69, 61, 66, 56, 66, 66, 63, 62, 62, 67, 49, 64, 18],
    "S": [61, 60, 63, 47, 50, 60, 50, 46, 46, 65, 50, 63, 65, 65, 69, 66, 64, 45, 59, 46, 46, 44, 43, 67, 70, 53, 58, 46, 37, 39, 42, 64, 47, 32, 31, 32, 39, 42, 19, 77, 74, 69, 62, 64, 58, 63, 54, 61, 67, 60, 28, 32, 21, 38, 37, 28, 39, 16, 28, 31, 13, 24, 28, 33, 35, 27, 59, 65, 19],
    "T": [80, 56, 77, 67, 78, 65, 74, 67, 65, 65, 63, 67, 72, 67, 64, 83, 84, 70, 83, 90, 93, 75, 92, 68, 58, 56, 70, 84, 77, 63, 70, 60, 51, 62, 63, 46, 79, 61, 51, 73, 81, 88, 89, 74, 54, 61, 57, 65, 55, 60, 42, 43, 45, 33, 48, 45, 43, 45, 52, 44, 35, 43, 47, 55, 47, 40, 60, 60, 33],
    "U": [30, 10, 23, 15, 11, 15, 8, 14, 16, 24, 19, 21, 16, 16, 26, 16, 16, 16, 20, 20, 21, 36, 19, 25, 24, 22, 18, 24, 29, 40, 36, 30, 33, 37, 42, 24, 17, 20, 29, 20, 22, 20, 31, 23, 21, 17, 12, 15, 14, 18, 22, 26, 13, 14, 31, 18, 25, 20, 15, 9, 12, 23, 20, 25, 26, 20, 22, 22, 9],
    "V": [12, 13, 10, 11, 10, 8, 2, 7, 16, 14, 15, 16, 20, 15, 9, 6, 12, 3, 16, 2, 5, 10, 12, 9, 9, 16, 13, 7, 4, 8, 6, 6, 4, 6, 9, 3, 2, 3, 3, 11, 12, 10, 16, 19, 16, 15, 18, 22, 22, 14, 14, 20, 19, 18, 16, 21, 24, 24, 20, 21, 25, 23, 15, 23, 19, 17, 13, 14, 6],
    "W": [8, 10, 11, 20, 11, 15, 17, 18, 10, 11, 17, 15, 12, 15, 9, 17, 10, 2, 11, 10, 7, 1, 6, 5, 10, 8, 10, 12, 7, 6, 11, 7, 11, 4, 3, 8, 5, 2, 10, 8, 13, 4, 4, 9, 23, 16, 14, 9, 10, 12, 8, 8, 10, 10, 5, 5, 7, 6, 4, 4, 7, 1, 9, 12, 9, 7, 8, 12, 5],
    "X": [6, 3, 3, 1, 3, 1, 8, 1, 1, 0, 5, 2, 4, 3, 3, 4, 2, 3, 3, 4, 1, 6, 5, 7, 3, 14, 2, 2, 0, 7, 9, 3, 4, 3, 17, 9, 0, 1, 3, 2, 7, 3, 1, 1, 1, 13, 5, 6, 0, 1, 0, 0, 3, 2, 1, 0, 0, 0, 0, 3, 0, 1, 3, 4, 6, 0, 2, 0, 1],
    "Y": [10, 10, 11, 11, 6, 7, 10, 6, 10, 11, 4, 13, 7, 11, 5, 17, 14, 27, 15, 18, 20, 5, 15, 11, 17, 14, 13, 8, 12, 8, 10, 3, 9, 5, 4, 9, 11, 5, 7, 14, 6, 13, 9, 14, 16, 12, 6, 12, 15, 8, 8, 11, 10, 12, 15, 8, 10, 6, 10, 9, 5, 15, 13, 18, 18, 12, 6, 13, 8],
    "Z": [0, 1, 0, 0, 0, 1, 4, 1, 1, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 0, 1, 2, 1, 11, 5, 3, 2, 0, 2, 1, 0, 1]
}

Object.values(DATA).forEach(arr => {
    const original = [...arr];
    for (let i = 0; i < 1000; i++) {
        arr.push(...original);
    }
});