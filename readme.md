### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Ignore Non-Alphabetical Characters** | User input: !!!!3420-934?<":"< | Output: "" |``
| **Program Recognizes Vowels**| User Input: "pants" | Output: "a" |
| **Program Recognizes "Y" as a Vowel**| User Input: "yams" | Output: "y a" |
| **Program Recognizes Consonants**| User Input: "pants" | Output: "p n t s" |
| **Program Recognizes Vowels at the Beginning of a Word**| Input: "aaron" | Output: "a" |
| **Program Recognizes Consonants at the Beginning of a Word**| Input: "pants" | Output: "p" |
| **Program Recognizes Vowels at the Beginning of Multiple Words in a Sentence** | Input: "I like bananas and ice cream" | Output: "i a i" |
| **Program Recognizes Consonants at the Beginning of Multiple Words in a Sentence**| Input: "I like bananas and ice cream" | Output: "l b c" |
| **Program Adds "Way" to the End of Words Beginning with Vowels**| Input: "I like bananas and ice cream" | Output: "Iway like bananas andway iceway cream" |
| **Program Puts a Beginning Consonant at the End of a Word and Adds "ay"| Input: "I like bananas and ice cream" | Output: "Iway ikelay ananasbay andway iceway reamcay" |
| **Program Recognizes Qu as the First Consonant and Treats it as such | Input: "I am the queen" | Output: "Iway amway hetay eenquay" |
| **If "u" is the first vowel and it's preceded by "q", program puts all consonants at the end of the word and adds "ay" | Input: "I squealed really loud" | Output: "Iway ealedsquay eallyray oudlay" |
