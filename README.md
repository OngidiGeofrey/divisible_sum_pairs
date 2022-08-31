# divisible_sum_pairs
Write a function that given an array of integers and a positive integer k, it returns the number of (i,j) 
pairs where i &amp;lt; j and ar[i] + ar[j] is divisible by k. (test_name=divisible_sum_pairs)


solution

Naive Approach: The simplest approach is to iterate through every pair of the array but using two nested for loops and count those pairs whose sum is divisible by ‘K’. The time complexity of this approach is O(N2).

Efficient Approach: An efficient approach is to use Hashing technique. I have separated elements into buckets depending on their (value mod K). 
When a number is divided by K then the remainder may be 0, 1, 2, up to (k-1). So take an array to say freq[] of size K (initialized with Zero) 
and increase the value of freq[A[i]%K]
so that we can calculate the number of values giving remainder j on division with K.
