/* eslint-disable no-tabs */
const twoSumExampleTS = `function twoSum(nums: number[], target: number): number[] {

    const map: Map<number, number> = new Map<number, number>()
    let result = []
    
    for(let i = 0; i < nums.length; ++i){
        const goal = target - nums[i]

        if(map.has(goal)){
            result = [map.get(goal), i]
            break;
        }
        map.set(nums[i], i)
    }
   
    return result
};`

const ReverseIntegerJava = `class Solution {
    public static int reverse(int x) {

    	Boolean negative = false; 
    	
    	
    	if(x < 0) {
    		x = Math.abs(x); 
    		negative = true; 
    	}
    	
    	int n = 0;
    	int j = 0;
    	
    	for(int i = String.valueOf(x).length(); i > 0; i--) {
    		
    		int s = (int) (x / Math.pow(10,i - 1));
    		x = (int) (x % Math.pow(10,i - 1));		
    		n += s * Math.pow(10,j);    		
    		j++;
    		
        	if(n <= - Math.pow(2,31) || n >= Math.pow(2,31) - 1) {
        		return 0;
        	}
    		
    	}
    	

    	if(negative) {
    		n *= -1;
    	}
    	
    	
    	return n;
    	
    }
	
}`

module.exports = { twoSumExampleTS, ReverseIntegerJava }
