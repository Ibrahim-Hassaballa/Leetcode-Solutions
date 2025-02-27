/*hint
We want to check can two string be equal or not after rerange there are to solution 
1. using String + Sorting.      complexity O(NlogN + MlogM)
2. using String + Hash Table.   complexity O(N)
So the best solution is Num 2
*/


var isAnagram = function (s, t) {
  const mp = new Map();
  if (s.length !== t.length) return false;

  for (let i = 0; i < t.length; i++) {
    if (mp.get(t[i])) {
      mp.set(t[i], mp.get(t[i]) + 1);
    } 
    else {
      mp.set(t[i], 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (0 < mp.get(s[i])) {
      mp.set(s[i], mp.get(s[i]) - 1);
    } 
    else {
      return false;
    }
  }
  return true;
};
