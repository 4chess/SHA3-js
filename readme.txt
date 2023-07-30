SHA-3 Hash Generator
This is a simple web application that generates SHA-3 hashes. It allows you to select the variant of SHA-3 (SHA3-224, SHA3-256, SHA3-384, SHA3-512) and the input text to be hashed.

How It Works
Choose the SHA-3 variant: The user can choose the SHA-3 variant by selecting one of the radio buttons. These represent the different versions of the SHA-3 algorithm. The numbers 224, 256, 384, and 512 represent the size of the hash output (digest), measured in bits.

Enter the input text: The user can enter any text in the text input field. This text will be hashed using the selected SHA-3 variant.

Generate the hash: Once the SHA-3 variant is selected and the input text is entered, the user can generate the hash by clicking the "Generate Hash" button. The generated hash will be displayed on the page.

JavaScript
The application uses JavaScript to handle the form submission and generate the hash. When the form is submitted, the application gets the selected SHA-3 variant and the input text, generates the hash using the jsSHA library, and displays the hash on the page.

Possible Variations

Adding up all the possible hash variations from the SHA-3 variants would give us:

SHA3-224: ~2.7 x 10^67
SHA3-256: ~1.2 x 10^77
SHA3-384: ~3.9 x 10^115
SHA3-512: ~1.3 x 10^154

The sum of all these possibilities would not be a meaningful number as the SHA3-512 alone is tremendously larger than all others. So, for practical purposes, the total variations are effectively the same as the number of variations for SHA3-512, which is ~1.3 x 10^154.

To find out how many times this number is larger than the estimated number of atoms in the observable universe (~10^80), we would divide the number of variations by the number of atoms.

1.3 x 10^154 / 10^80 = ~1.3 x 10^74

****So, the number of possible SHA-3 hash variations is roughly 10^74 (a 1 followed by 74 zeros) times larger than the estimated number of atoms in the observable universe. This is a mind-bogglingly huge number, illustrating the astronomical level of security provided by these cryptographic hash functions.****

ALSO, understad the following about sha224, which has the LOWEST number of hash outputs:

The number of possible different hash values with SHA3-224 is 2^224. This number is a 1 followed by approximately 67 zeroes.

In more exact terms, 2^224 is about:

26959946667150639794667015087019630673637144422540572481103610249215

That's a 68 digit number, making it extremely large. This immense number of possible variations is what makes cryptographic hash functions like SHA3-224 so powerful and secure.

Therefore, even sha224 has an incredible amount of hashes. The nmbers we are working with here are so large that they are nearly impossible for the human mind to understand. 


The estimated number of atoms in the observable universe is on the order of 10^80.

Now, let's compare this with the number of possible variations for each SHA-3 variant:

SHA3-224: Produces a hash of 224 bits. The number of possible hashes is 2^224, or about 2.7 x 10^67. This is much less than the number of atoms in the observable universe.

SHA3-256: Produces a hash of 256 bits. The number of possible hashes is 2^256, or about 1.2 x 10^77. This is also less than the number of atoms in the observable universe, but the numbers are getting closer.

SHA3-384: Produces a hash of 384 bits. The number of possible hashes is 2^384, or about 3.9 x 10^115. This is vastly more than the number of atoms in the observable universe.

SHA3-512: Produces a hash of 512 bits. The number of possible hashes is 2^512, or about 1.3 x 10^154. This number is so large that it dwarfs the number of atoms in the observable universe.




Remember, a hash function is a one-way function: it takes an input (or 'message') and returns a fixed-size string of bytes. The output (the hash value or hash) is typically a 'digest' that is unique to each unique input. Hash functions are deterministic, meaning that the same input will always produce the same output.



Remember, even though SHA-3 with larger output sizes can produce more possible variations, all variants are considered secure for most practical purposes. The added security from using a larger output size must be weighed against the increased computational resources required to calculate and store the larger hashes.


This code uses DOMPurify to sanitize the user input before processing it. DOMPurify is a powerful library for preventing Cross-Site Scripting (XSS) attacks and ensuring that user input is safe to handle.




NOTE-  input to a SHA-3 hash function can be any sequence of bytes, which includes any extended ASCII character. The ASCII (American Standard Code for Information Interchange) character set includes 128 characters (numbered 0 to 127), and the extended ASCII character set includes an additional 128 characters (numbered 128 to 255) for a total of 256 characters. However, do keep in mind that when it comes to inputting these characters into a web form, your results might vary depending on the character encoding of the HTML document, the web browser's interpretation of the characters, and other factors. In general, you should be able to use any extended ASCII character as input to a hash function, but displaying these characters correctly on a web page can sometimes be a bit tricky. IN OTHER WORDS, IF YOU USE UNUSUAL EXTENDED ASCII CHARACHTERS TO GENERATE A HASH, FOR BEST RESULTS USE THE EXACT SAME BROWSER IN ORDER TO REPRODUCE THE EXACT SAME HASH. THIS IS OF MINOR CONCERN, AND IF YOU ARE USING UNUSUAL EXTENDED ASCII characterS YOU CAN  YOU CAN TEST THE HASH RETURNS IN DIFFERNT BROWSERS TO BE SURE. Also remember, capital letters are different than small letters and returns different hashes! 













