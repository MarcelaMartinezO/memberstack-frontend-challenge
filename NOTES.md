<!-- Tell us about your solution here -->

Hi Guys, I couldn't finish the challenge, but here is my approach to the challenge:

Host:
I used the useState hook in the App in order to have the state of the color changes inside de Input, and I also changed the value and implemented the handleColorChange function.

Then I used the useRef hook, to be "listening" those color changes in order to save them to the localstorage, and getting that value as an initial value if exists.

ChatBox:
I used the useEffect hook, in order to listen every event or changes in the local storage, and also a useState to have trace of the color changes to assign it to the background-color of the button, but then I realized that localstorage of every app is located in different ports so I couldn't do that so transparently.

Then I did some research and found a library named "cross-domain-storage" which would allow me to access to the ChatBot localstorage from Host, to set buttonColor item, and maybe with this, the storage event would dispatch, not sure, cause I went over two hours.

I've been Angular Developer for +5 years, I haven't had the opportunity to work with react, but after the Vanhack event, I bought a React  course in Udemy and started to learn, so, this approach is from the knowledge I gained in these two weeks, sorry if not as optimal as expected, but I feel really proud :P. I'll finish this later, for educational purpose.

Finally, Thank you for the opportunity and the time, I would love to have a feedback if it's possible. Thanks!!