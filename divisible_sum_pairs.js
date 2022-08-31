// Javascript program to count pairs whose sum divisible by 'K'
     
function countKdivPairs(A, n, K)
{
    // Create a frequency array to count
    // occurrences of all remainders when
    // divided by K
    let freq = new Array(K);
    freq.fill(0);

    // Count occurrences of all remainders
    for (let i = 0; i < n; i++)
        ++freq[A[i] % K];

    // If both pairs are divisible by 'K'
    let sum = freq[0] * parseInt((freq[0] - 1) / 2, 10);

    // count for all i and (k-i)
    // freq pairs
    for (let i = 1; i <= K / 2 && i != (K - i); i++)
        sum += freq[i] * freq[K - i];
          
    // If K is even
    if (K % 2 == 0)
        sum += parseInt(freq[parseInt(K / 2, 10)] 
        * (freq[parseInt(K / 2, 10)] - 1) / 2, 10);
    return sum;
}
 
/* Driver program to test the above function */
let A = [ 1,2,3,4,5,6 ];
let n = 6;
let K = 4;
console.log(countKdivPairs(A, n, K));
     