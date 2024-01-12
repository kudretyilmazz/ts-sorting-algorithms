const array = [8, 14, 5, 23, 34, 56, 2, 18];

class InsertionSort {
	sort(arr: number[]) {
		const n = arr.length;

		for (let i = 1; i < n; i++) {
			let j = i - 1;
			let number = arr[i];
			while (j >= 0 && arr[j] > number) {
				arr[j + 1] = arr[j];
				j--;
			}

			arr[j + 1] = number;
		}

		return arr;
	}
}

const insertion = new InsertionSort();

console.log(insertion.sort(array));
