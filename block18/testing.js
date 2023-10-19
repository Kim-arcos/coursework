//Block 18: Workshop Writing Test Specifications

//1. A function called "multiplication" that returns the product of the two input numbers.
//Expect [action] to be [some result]
//Expect multiplying (0,1) to be 0
//Expect multiplying (2,2) to be 4.
//Expect multiplying (5,5) to be 25.
//Expect multiplying (3.3, 7) to be 23.1
//Expect multiplying (70, 22) to be 1,540
//Expect multiplying (-1, 1) to be -1
//2.A function called "concatOdds" takes two arrays of integers as arguments. It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
//Expect [action] to be [some result]
//Expect odds to be taken from [1,2,3,4,5,6,7] to be [1,3,5,7]
//Expect odds to be taken from [5,10,15,20,25,30,35] to be [5,15,25,35]
//Expect odds to be taken from [0,3,6,9,12] to be [0,3,9]
//Expect odds to be taken from [70, 71, 72, 73, 74, 75] to be [71, 73, 75]
//Expect odds to be taken from [-1, -2, -3,-5] to be [-1, -3, -5]
//Functional Tests
//1.A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
//When a user [does something with some parameters], [some thing should happen]
//When a user has items in their shopping cart they should be allowed to check out as guest if not signed in.
//If a user does have an account they should be able to sign in.
//If a user does sign in their items should automatically be savaed in their cart to be able to continue to payment.
//When a user is ready to check out they should be able to input their address and payment info
//When a user inputs their address and payment info they should be given the option to save for future purchases.
//After the user pays and confirms their order they should be able to create an account immediatley for faster checkout in the future.
