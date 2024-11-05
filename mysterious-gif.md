# Challenge : Mysterious GIF

## Challenge Level : Medium

## Description

    > You are given a mysterious GIF file, can you decode it and find the hidden message?

## Instructions

    > To decrypt the GIF, you need to split the GIF into frames where each frame has a hidden message.but only one frame has the correct message.
    > each frame has n squares, and each square has a color represented in RGBA format.for example the red color is represented as RGBA(255,0,0,1).
    > The hidden message is encoded in the color of the squares, where the color of the square represents 3 bits of the message, since the message is encoded in binary format.
    > by taking the red color as an example and 255 as the maximum value and 0 as the minimum value (255=1 and 0=0), the red color is represented as RGBA(255,0,0,1), the red color represents the binary number 100, where R is the most significant bit, G is the middle bit, and B is the least significant bit.
    > We read the colors in the squares from left to right and row by row from top to bottom.
    > but you said RGBA and you are talking about RGB, where is the A? the A is the alpha channel, well you can notice that each frame has a transparent pixels, the transparent parts are not part of the message and you should ignore them.To recognize the transparent pixels, you can notice that the alpha channel is 0.
    > in the end, you should convert the binary message to ASCII to get the hidden message.

## Important Notes

    > Open the gif file using an image viewer (ImageGlass), make sure that the transparent pixels are clear to you.Some image viewers may show the transparent pixels as black pixels (or any other color), so you should be able to distinguish between the transparent pixels and the black pixels.
    > The 2 possible values for the red, green, and blue channels are 0 and 255.But since the accuracy of the colors may vary, you can consider the values close to 0 as 0 and the values close to 255 as 255.For example, you can consider the red color with a value of in R as 255 and the blue color with a value of 2 in G as 0.In other words, you should create a function to round the color values to the nearest possible value (0 or 255) and then convert the color to binary.
