const array = [8, 14, 5, 23, 34, 56, 2, 18];

class MergeSort {
	private sortedArrays(arr1: number[], arr2: number[]) {
		let n1 = 0;
		let n2 = 0;

		let k = 0;
		const result = [arr1.length + arr2.length];

		while (n1 < arr1?.length && n2 < arr2?.length) {
			if (arr1[n1] < arr2[n2]) {
				result[k] = arr1[n1];
				n1++;
			} else {
				result[k] = arr2[n2];
				n2++;
			}
			k++;
		}

		while (n1 < arr1?.length) {
			result[k] = arr1[n1];
			n1++;
			k++;
		}

		while (n2 < arr2?.length) {
			result[k] = arr2[n2];
			n2++;
			k++;
		}

		return result;
	}

	sort(arr: number[]) {
		if (arr?.length <= 1) {
			return arr;
		}

		const midPoint = arr?.length / 2;

		const leftSorted = this.sort([...arr].slice(0, midPoint));
		const rightSorted = this.sort([...arr].slice(midPoint, arr?.length));

		return this.sortedArrays(leftSorted, rightSorted);
	}
}

const merge = new MergeSort();

console.log(merge.sort(array));
