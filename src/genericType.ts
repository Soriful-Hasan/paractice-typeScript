/*
? বিষয়	         মানে

? <T> =====>	একটা placeholder type, যেটা পরে আসবে
? Generic Function =====>	function কে reusable করে যেকোনো type এর জন্য
? Generic Class	class =====> এর property ও method কে type-safe করে
? Constraint (extends) =====>	generic কে নির্দিষ্ট type এর সাথে সীমাবদ্ধ করা যায়
*/

function getFirst<T>(arr: T[]): T | undefined {
  return arr[0];
}

const firstNum = getFirst([10, 20, 30]);
