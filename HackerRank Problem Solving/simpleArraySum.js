/* Given an array of integers, find the sum of its elements.

For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6 , so return 6.

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints
0 < n, ar[i] <= 1000

Output Format

Print the sum of the array's elements as a single integer.

Sample Input

6
1 2 3 4 10 11
Sample Output

31
Explanation

We print the sum of the array's elements: 
1+2+3+4+10+11 = 31 */

// Code Below 

function simpleArraySum(ar) {
    // write code in here 
    let sum = 0;
    for (let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum;
}
console.log(simpleArraySum([1,2,3,4,10,11]));